const express = require('express')
const multer = require('multer')
const response = require('../../network/response')
const router = express.Router()
const controller = require('./controller')

const upload = multer({
    dest: 'public/files/',
})

router.get('/', function (req, rest) {

    const filterMessages = req.query.user || null
    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, rest, messageList, 200)
        })
        .catch(e => {
            response.error(req, rest, 'Unexpected Error', 500, e)
        })
})

router.post('/', upload.single('file'), function (req, rest) {


    controller
        .addMessage(req.body.chat, req.body.user, req.body.message, req.file)
        .then((fullMessage) => {
            response.success(req, rest, fullMessage)
        })
        .catch(e => {
            response.error(req, rest, 'Información inválida', 400, "Error en el controlador.")
        })


})

router.delete('/', function (req, rest) {

    console.log(req.query)
    console.log(req.body)

    if (req.query.error == "ok") {

        response.error(req, res, 'Error simulado', 400)
    }

    else {

        response.success(req, rest, 'Eliminado correctamente')
    }


    // rest.status(201).send([{ error: '', body: 'Eliminado correctamente' }])
    // rest.send('Mensaje ' + req.body.text + ' añadido correctamente')
})

router.patch('/:id', function (req, rest) {
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, rest, data, 200)
        })
        .catch(e => {
            response.error(req, rest, 'Error interno', 500, e)
        })
})


router.delete('/:id', function (req, rest) {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, rest, `Usuario ${req.params.id} eliminado`, 200)
        })
        .catch(e => {
            response.error(req, rest, 'Error interno', 500, e)
        })
})

module.exports = router