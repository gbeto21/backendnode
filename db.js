const db = require('mongoose')
db.Promise = global.Promise

//mongodb+srv://agb:agb02@cluster0-ansbf.mongodb.net/telegrom
async function connect(url) {

    await db.connect(url, {
        useNewUrlParser: true,
    })
    console.log('[db] Conectada con éxito.');
}

module.exports = connect