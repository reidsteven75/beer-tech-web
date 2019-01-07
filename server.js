const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/sensorPh', (req, res, next) => {
	console.log(req.body)
	res.send({success:true})
})

app.listen(port, () => {

	console.log('====================');
  console.log('BEER TECH: web server');
  console.log('server listening on port: ', port);
  console.log('====================');

})