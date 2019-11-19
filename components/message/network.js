const express = require('express')
const response = require('../../network/response')
const router = express.Router()
const controller = require('./controller')

router.get('/', function (req, rest) {
    console.log(req.headers)
    rest.header({
        "Custom-Header": "Nuestro valor personalizado"
    })
    response.success(req, rest, 'Lista de mensajes', 201)
    // rest.send('lista de mensajes')
})

router.post('/', function (req, rest) {

    controller
        .addMessage(req.body.user, req.body.message)
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

module.exports = router