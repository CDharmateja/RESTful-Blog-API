const express = require('express')
const router = express.Router()

let store = require('../store.js')

router.get('/posts', (req, res) => {
	res.status(200).send(store.posts)
})

router.post('/posts', (req, res) => {
	let newPost = req.body
	let id = store.posts.length
	store.posts.push(newPost)
	res.status(201).send({id: id})
})

router.put('/posts/:postId', (req, res) => {
	store.posts[req.params.postId] = Object.assign(store.posts[req.params.postId], req.body)
	res.status(200).send(store.posts[req.params.postId])
})

router.delete('/posts/:postId', (req, res) => {
	store.posts.splice(req.params.postId, 1)
	res.status(204).send()
})

module.exports = router
