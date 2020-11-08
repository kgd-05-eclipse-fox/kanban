const jwt = require('jsonwebtoken')

class JwtUser{

    static getToken(data){
        let token = jwt.sign(data, process.env.TOKEN)
        return token
    }

    static decodedToken(data){
        let decoded = jwt.verify(data, process.env.TOKEN)
        return decoded
    }
}

module.exports = JwtUser