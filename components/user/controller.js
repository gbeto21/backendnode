const store = require('./store')

function addUser(name) {

    if (!name) {
        return Promise.reject('Invalid name')
    }

    const user = {
        name,
    }
    return store.add(user)
}

function getUsers(filterName) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterName))
    })
}

function updateUser(id, name) {
    return new Promise(async (resolve, reject) => {
        if (!id || !name) {
            reject('Invalid data')
            return false
        }

        const result = await store.updateUser(id, name)
        resolve(result)
    })
}

async function deleteUser(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Id inválido')
            return false;
        }

        store.remove(id)
            .then(() => {
                resolve()
            })
            .catch(e => {
                reject(e)
            })
    })
}

module.exports = {
    addUser,
    getUsers,
    updateUser,
    deleteUser
}