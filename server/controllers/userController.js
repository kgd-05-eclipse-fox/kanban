const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { getToken } = require('../helpers/jwt')

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

    static async loginUser(req, res) {
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
                    res.status(httpCode).json({ access_token: token})
                }
            } else {
                throw { name: "Wrong Data" }
            }
        } catch (error) {
            res.status(500).json("Internal Server Error")
        }
    }
}
module.exports = Controller