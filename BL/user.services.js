const {create, read, readOne, update, del} = require( '../DL/controllers/user.controller')


async function createUser(data){
    return await create(data)
}

async function getUsers(data){
    return await read(data)
}

async function getUser(emailAddress){ //     <-------------------------
    return await readOne(emailAddress)
}

async function updateUser(data){
    return await update(data)
}

async function deleteUser(data){
    return await del(data)
}

module.exports = {createUser, getUsers, getUser, updateUser, deleteUser}
