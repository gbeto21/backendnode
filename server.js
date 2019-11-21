const express = require('express')
const app = express()
const server = require('http').Server(app)

const bodyParser = require('body-parser')
const socket = require('./socket')
const db = require('./db')
const router = require('./network/routes')

db('mongodb+srv://agb:agb02@cluster0-ansbf.mongodb.net/telegrom')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

socket.connect(server)
router(app)

app.use('/app', express.static('public'))

server.listen(3000, function () {
    console.log('La aplicación está escuchano en http://localhost:3000')
})

//nodemon server