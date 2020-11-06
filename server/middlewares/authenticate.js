const Jwt = require('../helper/jwt')
const {
    User
} = require('../models')

class Authenticate {

    static async token(req, res, next) {
        try {
            const {
                access_token
            } = req.headers
            if (!access_token) {
                throw {
                    name: 'Unauthorized'
                }
            } else {
                const decoded = Jwt.verifyToken(access_token)
                const user = await User.findOne({
                    where: {
                        id: decoded.id,
                        email: decoded.email
                    }
                })
                if (!user) {
                    throw {
                        name: 'Unauthorized'
                    }
                } else {
                    req.loggedIn = decoded
                    next()
                }
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Authenticate