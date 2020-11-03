const { jwtVerify } = require('../helpers/jwt')

const authentication = (req, res, next) => {
    try {
        const access_token = req.headers.access_token

        if (access_token) {
            const verify = jwtVerify(access_token)

            if (verify) {
                req.whoAmI = verify
                next()
            } else {
                throw new Error('Unauthorized')
            }
        } else {
            throw new Error('Unauthorized')
        }
    } catch (error) {
        next(error)
    }
}

module.exports = authentication