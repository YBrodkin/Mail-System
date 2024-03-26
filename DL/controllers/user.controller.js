const userModel = require('../models/user.model')

// CRUD
async function create(data) {
    return await userModel.create(data)
}


// קבלת פרטי המשתמש
async function read(filter) {
    return await userModel.findOne({ ...filter, isActive: true })
}

// קבלת כל המיילים של המשתמש
async function readOne(filter) {
    return await userModel.findOne({ ...filter, isActive: true }).populate({
        path: 'emails.email',
        populate: {
            path: 'msg'
        }
    }
    )
}

async function update(id, data) {
    return await userModel.findOneAndUpdate({_id:id}, data, {new: true})
    // return await userModel.findByIdAndUpdate(id, data, { new: true })
}
async function del(id) {
    return await update(id, { isActive: false })
}

module.exports = { create, read, readOne, update, del }
