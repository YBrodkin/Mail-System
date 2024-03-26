const {create, read, readOne, update, del} = require( '../DL/controllers/message.controller')


async function createMessage(data){
    return await create(data)
}

// האם נצרך?
// async function getMessages(data){
//     return await read(data)
// }

async function getMessage(data){
    return await readOne(data)
}

// לכאורה לא פעיל
// async function updateMessage(data){
//     return await update(data)
// }

// כרגע אינו נתמך
// async function deleteMessage(data){
//     return await del(data)
// }

