const express = require('express')
const response = require('../../network/response')
const router = express.Router()
const controller = require('./controller')

router.get('/', function (req, rest) {
    const filterUsers = req.query.name || null
    controller.getUsers(filterUsers)
        .then((usersList) => {
            response.success(req, rest, usersList, 200)
        })
        .catch(e => {
            response.error(req, rest, 'Unexpected Error', 500, e)
        })
})

router.post('/', function (req, res) {
    controller.addUser(req.body.name)
        .then(data => {
            response.success(req, res, data, 201)
        })
        .catch(err => {
            response.error(req, res, 'internal error', 500, err)
        })
})

router.patch('/:id', function (req, rest) {
    controller.updateUser(req.params.id, req.body.name)
        .then((data) => {
            response.success(req, rest, data, 200)
        })
        .catch(e => {
            response.error(req, rest, 'Error interno.', 500, e)
        })
})

router.delete('/:id', function (req, rest) {
    controller.deleteUser(req.params.id)
        .then(() => {
            response.success(req, rest, `Usuario ${req.params.id} eliminado`)
        })
        .catch(e => {
            response.error(req, rest, 'Error interno.', 500, e)
        })
})

module.exports = router