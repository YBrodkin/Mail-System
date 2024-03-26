const express = require('express'),
    router = express.Router()

const { auth } = require('../middlewares/auth')
const { createEmail, getEmails, getEmail, deleteEmail } = require('../BL/email.sesvices')


// קבלת כל המיילים של המשתמש
router.get('/:userId', async (req, res) => {
    let data = await getEmails(req.params.userId)
    res.send(data)
})

// קבלת מייל אחד
router.get('/:emailId', async (req, res) => { })

// קבלת המיילים שבקטגוריית המתקבלים
router.get('/sent', async (req, res) => { })

// קבלת המיילים שבקטגוריית הנשלחים
router.get('/recieved', async (req, res) => {
    const filter = {                             // ????????????
        _id: userId,
        emails: {
            $elemMatch: {
                isRecieved: true
            }
        }
    }    
})

// קבלת המיילים שבקטגוריית המיוחדים
router.get('/favorites', async (req, res) => { })

// קבלת המיילים שבקטגוריית הטיוטות
router.get('/draft', async (req, res) => { })

// קבלת המיילים שבקטגוריית המחוקים
router.get('/deleted', async (req, res) => { })


// צור מייל, טיוטה
router.post('/', async (req, res) => {
    try {
        const { subject, content, to } = req.body

        // בדיקה
        // res.send({
        //     _id: "",
        //     subject,
        //     content,
        //     to,
        //     from: user.email
        // })

    }
    catch {
        // 
    }

})

// צור טיוטה - כמו מייל רק שום תוכן לא הכרחי
router.post('/draft', async (req, res) => {

})


// מחק כמה מיילים, מייל אחד
router.delete('/', async (req, res) => { })
router.delete('/:id', async (req, res) => { })


module.exports = router
