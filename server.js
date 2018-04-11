const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const errorhandler = require('errorhandler')

let store = {
	posts: [
		{
			name: '',
			url: '',
			text: '',
			comments: []
		}
	]
}

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())


