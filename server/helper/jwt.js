const jwt = require('jsonwebtoken')

class Jwt {
    static signToken(payload) {
        return jwt.sign(payload, process.env.SECRET)
    }
    static verifyToken(access_token) {
        return jwt.verify(access_token, process.env.SECRET)
    }
}

module.exports = Jwt