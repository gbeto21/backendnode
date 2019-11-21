const express = require('express')
const response = require('../../network/response')
const router = express.Router()
const controller = require('./controller')

router.post('/', function (req, res) {
    controller.addChat(req.body.users)
        .then(data => {
            response.success(req, res, data, 201)
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err)
        })
})

router.get('/:useId', function (req, res) {
    controller.listChats(req.params.UserId)
        .then(users => {
            response.success(req, res, users, 200)
        })
        .catch(err => {
            response.error(req, res, 'Internal error.', 500, err)
        })
})

module.exports = router