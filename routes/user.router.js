const express = require('express'),
router = express.Router()

const {createUser, getUsers, getUser, updateUser, deleteUser} = require('../BL/user.services')

// קבלת כל הודעות המיילים של המשתמש
router.get('/:emailAddress', async(req,res)=>{
    let emailAddress = req.params.emailAddress
    let data = await getUser({email: emailAddress})
    res.send(data.emails[0].email)
})

// קבלת פרטי המשתמש
router.get('/:emailAddress/oll', async(req,res)=>{
    let emailAddress = req.params.emailAddress
    let data = await getUsers({email: emailAddress})
    res.send(data)
})


// router.get('/:userId', async(req,res)=>{
// })

// יצירת משתמש חדש
router.post('/', async(req,res)=>{
  let newUser = req.body
  await createUser(newUser)
  res.send(newUser)
})

// עריכת פרטי המשתמש ---> טפל בקונטרולר
router.put('/', async(req,res)=>{
    let updatedUser = req.body
    await updateUser(updatedUser)
    res.send(updatedUser)
})

// הפיכת משתמש ללא-פעיל
router.delete('/:userId', async(req,res)=>{
    await deleteUser({_id: req.params.userId})
    res.send("User was deleted succesfully...  ;)")
})

module.exports = router
