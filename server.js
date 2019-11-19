const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const response = require('./network/response')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router)

router.get('/message', function (req, rest) {
    console.log(req.headers)
    rest.header({
        "Custom-Header": "Nuestro valor personalizado"
    })
    response.success(req, rest, 'Lista de mensajes', 201)
    // rest.send('lista de mensajes')
})

router.post('/message', function (req, rest) {

    if (req.query.error == "ok") {
        response.error(req, res, 'Error simulado', 400)
    }

    else {
        response.success(req, rest, 'Eliminado correctamente')
    }
})

router.delete('/message', function (req, rest) {

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

// app.use('/', function (req, res) {
//     res.send('Hola')
// })

app.use('/app', express.static('public'))

app.listen(3000)
console.log('La aplicación está escuchano en http://localhost:3000')

//nodemon server