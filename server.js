const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

handlePhData = function(data) {
	const parsed = parseFloat(data)
	console.log('data:' + parsed)
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

app.listen(port, () => {

	console.log('====================');
  console.log('BEER TECH: web server');
  console.log('server listening on port: ', port);
  console.log('====================');

})