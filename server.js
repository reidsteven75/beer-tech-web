const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(port, () => {

	console.log('====================');
  console.log('BEER TECH: web server');
  console.log('server listening on port: ', port);
  console.log('====================');

})