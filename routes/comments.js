const express = require('express')
const router = require('express').Router()

let store = require('../store.js')

router.get('/posts/:postId/comments', (req, res) => {
    res.status(200).send(store.posts[req.params.postId].comments)
})

router.post('/posts/:postId/comments', (req, res) => {
    let newComment = req.body
    let id = store.posts[req.params.postId].comments.length
    store.posts[req.params.postId].comments.push(newComment)
    res.status(201).send({id: id})
})

router.put('/posts/:postId/comments/:commentId', (req, res) => {
    store.posts[req.params.postId].comments[req.params.commentId] = Object.assign(store.posts[req.params.postId].comments[req.params.commentId], req.body)
    res.status(200).send(store.posts[req.params.postId].comments[req.params.commentId])
})

router.delete('/posts/:postId/comments/:comemntId', (req, res) => {
    store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
    res.status(204).send()
})

module.exports = router