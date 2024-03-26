const {create, read, readOne, update, del} = require( '../DL/controllers/email.controller')


async function createEmail(data){
    return await create(data)
}

async function getEmails(data){
    return await read(data)
}

async function getEmail(data){
    return await readOne(data)
}

// לכאורה לא פעיל
// async function updateEmail(data){
//     return await update(data)
// }

async function deleteEmail(data){
    return await del(data)
}

module.exports = {createEmail, getEmails, getEmail, deleteEmail}
