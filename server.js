const express = require('express')
const app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)
const bodyParser = require('body-parser')
const path = require('path')
const { MongoClient, ServerApiVersion } = require('mongodb')
const assert = require('assert')
const request = require('request')
const favicon = require('serve-favicon')
const _ = require('lodash')
const moment = require('moment')
const size = require('object-sizeof')

const PORT = process.env.PORT || 3001
const MOCK_DATA = process.env.MOCK_DATA || false

// TODO
// better env config - yaml config file

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('client/build'))

// app.use(favicon(path.join(__dirname, 'client', 'build', 'icons', 'favicon.ico')))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// DB
const dbUrl = process.env.MONGODB_URI || 'mongodb+srv://reidsteven75:IronMaiden%4075@beverage-sensors.uysj9ft.mongodb.net?retryWrites=true&w=majority&appName=beverage-sensors'
const dbClient = new MongoClient(dbUrl, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true
	}
})
const dbName = process.env.MONGODB_NAME || 'beverage-sensors-db'
var db
const dbCollection = {
	expireAfterSeconds: 86400,
	expiryInterval: 60000
}

// Sensor Calibration
const phOffset = 0.2
const phDecimals = 2
const phTag = "[PH]"

const tempOffset = 0
const tempDecimals = 2
const tempTag = "[TEMP]"

io.on('connection', function (socket) {
	console.log('[socket]: connected')
})

mockDataStreamPh = function() {

	setInterval(function() {
		var phValue = 7
		var tempValue = 21

		phValue += (Math.random() - 0.5)
		phValue = phValue.toFixed(phDecimals).toString()
		handleSensorData(phTag + phValue)

		tempValue += (Math.random() - 0.5)
		tempValue = tempValue.toFixed(tempDecimals).toString()
		handleSensorData(tempTag + tempValue)
	}, 2000)

}

handleSensorData = function(sensorData) {

	var parsedSensorData = ""
	var parsed = ""
	var sensorType = ""

	if (sensorData.indexOf(phTag) !== -1) {
		parsedSensorData = sensorData.replace(phTag, "")
		parsed = (parseFloat(parsedSensorData) + phOffset).toFixed(phDecimals)
		sensorType = "PH"
	}
	else if (sensorData.indexOf(tempTag) !== -1) {
		parsedSensorData = sensorData.replace(tempTag, "")
		parsed = (parseFloat(parsedSensorData) + tempOffset).toFixed(tempDecimals)
		sensorType = "TEMP"
	}
	else {
		console.log('invalid sensor data')
		console.log(sensorData)
		return 
	}

	if (isNaN(parsed)) {
		return console.log('invalid sensor data')
	}
	console.log(sensorType + ": " + parsed)
	const data = {
		sensor: sensorType,
		value: parsed,
		timestamp: Date.now()
	}

	// update clients in real-time
	io.sockets.emit('data-update', data)

	// save data in db
	if (db) {
		db.collection('sensor_data').insertOne(data, function(err, r) {
			assert.equal(null, err)
			assert.equal(1, r.insertedCount)
		})	
	}
	else {
		console.warn(`could not save data in db`)
	}

}

calcResponseSize = function(data) {
	console.log('size (kB): ', size(data)/1000)
}

calcResponseTime = function(endpoint, startTime) {
	const endTime = Date.now()
	var timeDiff = (( endTime - startTime ) / 1000).toFixed(2)
	console.log(endpoint)
	console.log('time (s): ', timeDiff)
}

app.get('/app', function(req, res) {
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

// PARAMS
// sampleRate: seconds
// duration: seconds
app.get('/historicals', async(req, res) => {
	const responseStarted = Date.now()
	const dbQuery = {}
	const sampleRateMs = parseInt(req.query.samplerate)
	if (req.query.duration) { 
		const cutoffMs = Date.now() - (parseInt(req.query.duration))
		dbQuery.timestamp = { $gte: cutoffMs }
	}
	if (req.query.sensor) { 
		// console.log('/historicals:' + req.query.sensor)
		dbQuery.sensor = (req.query.sensor).toUpperCase()
	}
	try {
		const projection = {
			'_id':0, 
			'value':1,
			'timestamp':1 
		}
		let docs = await db.collection('sensor_data').find(dbQuery, projection).toArray()
		// sample
		if (sampleRateMs) {
			docs = _.sortBy(docs, ['timestamp'])
			var sampleTimestamp = docs[0].timestamp
			docs = _.filter(docs, function(n) {
				if (moment(n.timestamp).isSameOrAfter(moment(sampleTimestamp))) {
					sampleTimestamp += sampleRateMs
					return true
				}
				else return false
			})
		}
		// send response
		calcResponseTime(req.url, responseStarted)
		calcResponseSize(docs)
		return res.send(docs)
	}
	catch (err) {
		console.error(err)
		res.status(500).send({error:err})
	}
})

app.post('/sensor', (req, res, next) => {
	if (MOCK_DATA === 'true') { return; }
	if (req.body) {
		if (req.body.data) {
			handleSensorData(req.body.data)
			return res.send({res:true})
		}
	}
	return res.send({res:true})
})

server.listen(PORT, async() => {

	console.log('====================')
  console.log('BEER TECH: web server')
	console.log('--------------------')
	console.log('PORT: ', PORT)
	console.log('MOCK_DATA: ', MOCK_DATA)
	console.log('====================')

	try {
    // Connect the client to the server	(optional starting in v4.7)
    await dbClient.connect()
    // Send a ping to confirm a successful connection
    await dbClient.db(dbName).command({ ping: 1 })
    console.log("[mongodb] connected: " + dbName)
		db = dbClient.db(dbName)

		setInterval(function() {
			console.log('[mongodb] removing old data...')
			try {
				const expireTimestamp = Date.now() - ( dbCollection.expireAfterSeconds * 1000 )
				db.collection('sensor_data').deleteMany({timestamp: {$lt: expireTimestamp}}, function(err, r) {
					assert.equal(null, err)
					console.log('[mongodb] success removing old data')
				})
			}
			catch (err) {
				console.log('[mongodb] error removing old data')
				console.log(err)
			}
		}, dbCollection.expiryInterval)
  } 
	catch(error) {
		console.error(error)
    await dbClient.close()
  }

	if (MOCK_DATA === 'true') { mockDataStreamPh() }

})