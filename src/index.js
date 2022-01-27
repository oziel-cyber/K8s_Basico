
const express = require('express')
var pjson = require('../package.json')

const app = express()

const startup = new Date()
const version = pjson.version

app.get('/',(req, res) => {
	res.send({
		startup: startup,
		version: version
	})
})

console.log('Iniciando a API version ${version}')

setTimeout(() => {
	app.listen(3000, () => {
		console.log('API Iniciada na porta 3000')

	})
}, 15000)
