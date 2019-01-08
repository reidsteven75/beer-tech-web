const express = require('express')
const app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)
const bodyParser = require('body-parser')
const path = require('path')

const PORT = process.env.PORT || 3001
const MOCK_DATA = process.env.MOCK_DATA || false

// TODO
// better env config - yaml config file

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

var Socket
io.on('connection', function (socket) {
	console.log('[socket]: connected')
	Socket = socket
})

mockDataStreamPh = function() {

	var value = 7
	setInterval(function() {
		value += Math.random() - 0.5
		handlePhData(value.toFixed(2))
	}, 2000)

}

handlePhData = function(value) {
	const parsed = parseFloat(value)
	if (isNaN(parsed)) {
		return console.log('invalid PH data')
	}
	console.log('PH: ' + value)
	const data = {
		value: parsed,
		timestamp: Date.now()
	}
	if (Socket) {
		Socket.emit('data-update-ph', data)
	}
}

app.post('/sensorPh', (req, res, next) => {
	if (req.body) {
		if (req.body.data) {
			handlePhData(req.body.data)
			return res.send({res:true})
		}
	}
	return res.send({res:true})
})

server.listen(PORT, () => {

	console.log('====================')
  console.log('BEER TECH: web server')
	console.log('--------------------')
	console.log('PORT: ', PORT)
	console.log('MOCK_DATA: ', MOCK_DATA)
	console.log('====================')

	if (MOCK_DATA === 'true') { mockDataStreamPh() }

})