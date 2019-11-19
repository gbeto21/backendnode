const express = require('express')
// const router = require('./components/message/network')
const bodyParser = require('body-parser')
const router = require('./network/routes')
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(router)

router(app)

// app.use('/', function (req, res) {
//     res.send('Hola')
// })

app.use('/app', express.static('public'))

app.listen(3000)
console.log('La aplicación está escuchano en http://localhost:3000')

//nodemon server