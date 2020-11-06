const {
    User
} = require('../models')
const {
    comparePassword
} = require('../helper/bcrypt')
const {
    signToken
} = require('../helper/jwt')
const {
    OAuth2Client
} = require('google-auth-library')


class UserController {
    static async register(req, res, next) {
        try {
            const payload = {
                email: req.body.email,
                password: req.body.password
            }
            const user = await User.create(payload)
            res.status(201).json({
                id: user.id,
                email: user.email
            })
        } catch (err) {
            next(err)
        }
    }

    static async login(req, res, next) {
        try {
            const payload = {
                email: req.body.email,
                password: req.body.password
            }
            const user = await User.findOne({
                where: {
                    email: payload.email
                }
            })
            if (!user) {
                res.status(401).json({
                    messge: 'wrong email/password'
                })
            } else if (!comparePassword(payload.password, user.password)) {
                res.status(401).json({
                    message: 'wrong password/email'
                })
            } else {
                const access_token = signToken({
                    id: user.id,
                    email: user.email
                })
                res.status(200).json({
                    access_token
                })
            }
        } catch (error) {
            next(error)
        }
    }

    static loginGoogle(req, res, next) {
        let {
            google_access_token
        } = req.body
        const client = new OAuth2Client(process.env.CLIENT_ID)
        let email = ''
        client.verifyIdToken({

                idToken: google_access_token,
                audience: process.env.CLIENT_ID

            })

            .then((ticket) => {
                let payload = ticket.getPayload()
                email = payload.email


                return User.findOne({
                    where: {
                        email: payload.email
                    }
                })
            })
            .then((user) => {
                if (user) {
                    return user
                } else {
                    var userObj = {
                        email,
                        password: 'random'
                    }
                    return User.create(userObj)
                }
            })
            .then((dataUser) => {
                let access_token = signToken({
                    id: dataUser.id,
                    email: dataUser.email
                })
                return res.status(200).json({
                    access_token
                })
            })
            .catch((err) => {
                next(err)
            })
    }
}


module.exports = UserController