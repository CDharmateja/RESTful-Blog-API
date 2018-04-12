const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const errorhandler = require('errorhandler')
const posts = require('./routes/posts.js')
const comments = require('./routes/comments.js')

app = express()

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
app.use(posts)
app.use(comments)

app.listen(3000)
