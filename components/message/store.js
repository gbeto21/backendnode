const db = require('mongoose')
const Model = require('./model')

db.Promise = global.Promise
db.connect('mongodb+srv://agb:agb02@cluster0-ansbf.mongodb.net/telegrom', {
    useNewUrlParser: true,
})

console.log('[db] Conectada con éxito.');


function addMessage(message) {
    // list.push(message)
    const myMessage = new Model(message)
    myMessage.save()
}

async function getMessages() {
    // return list
    const messages = await Model.find()
    return messages
}

async function updateText(id, message) {
    const foundMessage = await Model.findOne({
        _id: id
    })

    foundMessage.message = message
    const newMessage = await foundMessage.save()
    return newMessage
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText
}