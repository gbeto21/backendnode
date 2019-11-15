const express = require('express')
const router = express.Router()

var app = express()

app.use(router)

router.get('/message', function (req, rest) {
    rest.send('lista de mensajes')
})

router.post('/message', function (req, rest) {
    rest.send('Mensaje añadido')
})

// app.use('/', function (req, res) {
//     res.send('Hola')
// })

app.listen(3000)
console.log('La aplicación está escuchano en http://localhost:3000')