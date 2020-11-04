const { User } = require('../models')
const { compare } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')
const {OAuth2Client} = require('google-auth-library');

class UserController {
    static async register(req, res, next) {
        try {
            const payload = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }

            const user = await User.create(payload)

            const data = {
                id: user.id,
                email: user.email
            }
            
            const token = signToken(data)
            
            res.status(201).json({access_token: token, user: user})
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
                throw { msg: 'email or password is incorrect', status: 401 }
            } else if (!compare(payload.password, user.password)) {
                throw { msg: 'email or password is incorrect', status: 401 }
            } else {
                const payload = {
                    id: user.id,
                    email:user.email
                }
                const token = signToken(payload)
                res.status(200).json({access_token: token, user: user})
            }

        } catch (err) {
            next(err)
        }
    }

    static googleLogin (req, res, next) {
        const {google_access_token} = req.body
        const client = new OAuth2Client(process.env.CLIENT_ID);
        
        let email
        client.verifyIdToken({
            idToken: google_access_token,
            audience: process.env.CLIENT_ID
        })
        .then(ticket => {
            const payload = ticket.getPayload()
            email = payload.email
            return User.findOne({
                where: {
                    email: payload.email
                }
            })
        })
        .then(user => {
            if (user) {
                return user
            }else {
                const obj = {
                    email: email,
                    password: 'incorrect329'
                }
                return User.create(obj)
            }
        })
        .then(data => {
            const access_token = signToken({
                id: data.id,
                email: data.email
            })
            return res.status(200).json({access_token})
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = UserController