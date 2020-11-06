const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { getToken } = require('../helpers/jwt')
const {OAuth2Client} = require('google-auth-library')

class Controller {
    static async registerUser(req, res){
        try {
            const payload = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            }
            const result = await User.create(payload)
            res.status(201).json({id: result.id, email: result.email})
        } catch (error) {
            res.status(500).json("Internal Server Error")
        }
    }

    static async loginUser(req, res, next) {
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
            if(user) {
                let hashPassword = user.password
                let result = comparePassword(payload.password, hashPassword)
                if(!result) {
                    throw { name: "Wrong Data" }
                } else {
                    const payload = { id: user.id, email: user.email }
                    const token = getToken(payload)
                    const httpCode = 200
                    res.status(httpCode).json({ access_token: token, id: user.id})
                }
            } else {
                throw { name: "Wrong Data" }
            }
        } catch (error) {
            res.status(500).json("Internal Server Error")
        }
    }

    static async loginGoogle(req, res, next) {
        let google_token = req.body.googleToken
        // console.log(google_token)
        const client = new OAuth2Client(process.env.CLIENT_ID)
        let email
        client.verifyIdToken({
            idToken: google_token,
            audience: process.env.CLIENT_ID
        })
        .then(ticket => {
            let payload = ticket.getPayload()
            email = payload.email
            return User.findOne({
                where: {
                    email: payload.email
                }
            })
        })
        .then(user => {
            // console.log(user)
            if(user !== null) {
                return user
            } else {
                let newUser = {
                    email,
                    firstName: "User",
                    lastName: "Google",
                    password: "hanfarhan22"
                }
                return User.create(newUser)
            }
        })
        .then(data => {
            console.log(data)
            let payload = { id: data.id, email: data.email }
            let token = getToken(payload)
            res.status(200).json({ access_token: token})
        })
        .catch(err => {
            res.status(500).json("Internal Server Error")
        })
    }
}
module.exports = Controller