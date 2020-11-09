const jwt = require('jsonwebtoken')

const jwtSign = payload => {
    return jwt.sign(payload, process.env.PRIVATE_JWT_KEY)
}

const jwtVerify = access_token => {
    return jwt.verify(access_token, process.env.PRIVATE_JWT_KEY)
}

module.exports = { jwtSign, jwtVerify }