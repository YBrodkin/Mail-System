async function auth(req, res, next) {

    try {
        let token = req.headers.autherization?.split('BEARER ')[1]      
        let user = { _id: "33333jk3k3k2k", email: "aviad@gmail.com" } // "jwt.verify(token,secret)"
        req.body.user = user
        next()
    }
    catch {
        res.sendStatus(401)
    }
}

module.exports = {auth}