const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router)

router.get('/message', function (req, rest) {
    console.log(req.headers)
    rest.header({
        "Custom-Header": "Nuestro valor personalizado"
    })
    rest.send('lista de mensajes')
})

router.delete('/message', function (req, rest) {
    console.log(req.query)
    console.log(req.body)
    rest.send('Mensaje ' + req.body.text + ' añadido correctamente')
})

// app.use('/', function (req, res) {
//     res.send('Hola')
// })

app.listen(3000)
console.log('La aplicación está escuchano en http://localhost:3000')