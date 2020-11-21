const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { getToken } = require('../helpers/jwt')
const {OAuth2Client} = require('google-auth-library')

class Controller {
    static async registerUser(req, res, next){
        try {
            const payload = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            }
            const result = await User.create(payload)
            res.status(201).json({id: result.id, email: result.email})
        } catch (err) {
            next(err)
            // res.status(500).json(err)
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
                    const payload = { 
                        id: user.id, 
                        email: user.email
                    }
                    const token = getToken(payload)
                    const httpCode = 200
                    const userData = {
                        id: user.id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        access_token: token
                    }
                    res.status(httpCode).json(userData)
                }
            } else {
                throw { name: "Wrong Data" }
            }
        } catch (error) {
            next(error)
            // res.status(500).json("Internal Server Error")
        }
    }

    static async loginGoogle(req, res, next) {
        let google_token = req.body.googleToken
        // console.log(google_token)
        const client = new OAuth2Client(process.env.CLIENT_ID)
        let email
        let fullname
        client.verifyIdToken({
            idToken: google_token,
            audience: process.env.CLIENT_ID
        })
        .then(ticket => {
            let payload = ticket.getPayload()
            fullname = payload.name
            email = payload.email
            return User.findOne({
                where: {
                    email: payload.email
                }
            })
        })
        .then(user => {
            let splitName = fullname.split(" ")
            let firstName = splitName[0]
            let lastName = splitName[1]
            if(user !== null) {
                return user
            } else {
                if(lastName !== null) {
                    let newUser = {
                        email,
                        firstName: firstName,
                        lastName: lastName,
                        password: "hanfarhan22"
                    }
                    return User.create(newUser)
                } else {
                    let newUser = {
                        email,
                        firstName: firstName,
                        lastName: firstName,
                        password: "hanfarhan22"
                    }
                    return User.create(newUser)
                }
            }
        })
        .then(data => {
            // console.log(data)
            let payload = { 
                id: data.id, 
                email: data.email
            }
            let token = getToken(payload)
            const userData = {
                id: data.id,
                firstName: data.firstName,
                lastName: data.lastName,
                access_token: token
            }
            res.status(200).json(userData)
        })
        .catch(err => {
            next(err)
            // res.status(500).json("Internal Server Error")
        })
    }
}
module.exports = Controller