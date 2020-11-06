const { User } = require('../models/')
const { verifyPassword } = require('../helpers/bcrypt')
const { jwtSign } = require('../helpers/jwt')

class UserController {
    static async postRegisterUser (req, res, next) {
        try {
            const { email, password } = req.body
            if (!email || !password) throw new Error('Please insert Email and Password')

            const newUser = {
                email: email,
                password: password
            }

            const createdUser = await User.create(newUser)
            
            res.status(201).json({ id: createdUser.id, email: createdUser.email })
        } catch (error) {
            next(error)
        }
    }

    static async postLoginUser (req, res, next) {
        try {
            const { email, password } = req.body
            if (!email || !password) throw new Error('Please insert Email and Password')

            const findUser = await User.findOne({ where: { email: email }})
            if (findUser) {
                const verif = verifyPassword(password, findUser.password)
                
                if (verif) {
                    const payload = {
                        id: findUser.id,
                        email: findUser.email
                    }

                    const access_token = jwtSign(payload)

                    res.status(200).json({ id: findUser.id, access_token: access_token })
                } else {
                    throw new Error('Wrong Email or Password')
                }
            } else {
                throw new Error('Wrong Email or Password')
            }
            
        } catch (error) {
            next(error)
        }
    }

    static async postGoogleLogin(req, res, next) {
        try {
            const { id_token } = req.body
            const { OAuth2Client } = require('google-auth-library')
            const client = new OAuth2Client(process.env.PRIVATE_GOOGLE_CLIENT_ID)

            const ticket = await client.verifyIdToken({
                idToken: id_token,
                audience: process.env.PRIVATE_GOOGLE_CLIENT_ID
            });
            const payload = ticket.getPayload()
            const email = payload.email
            const password = payload.sub.substring(0, 18)

            const user = await User.findOne({ where: { email }})
            if (user) {
                const verify = verifyPassword(password, user.password)
                if (verify) {
                    const payload = { id: user.id, email: user.email }
                    const access_token = jwtSign(payload)

                    res.status(200).json({ id: user.id, access_token: access_token, email:email })
                } else {
                    throw new Error('Login via Google gagal')
                }
            } else {
                const newGoogleUser = {
                    email,
                    password
                }
                const newUser = await User.create(newGoogleUser)
                
                const payload = { id: newUser.id, email: newUser.email }
                const access_token = jwtSign(payload)

                res.status(200).json({ id: newUser.id, access_token: access_token, email:email })
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController