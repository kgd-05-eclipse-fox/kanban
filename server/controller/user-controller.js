const {User} = require('../models')
const BcryptUser = require('../helper/bcrypt-user.js')
const JwtUser = require('../helper/jwt-user.js')

class UserController{

    static async userRegister(req, res, next){
        try {
            let dataBody = req.body
            let data = await User.create(dataBody)
            let showData = {
                id: data.id,
                email: data.email
            }
            res.status(201).json(showData)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async userLogin(req, res, next){
        try {
            let dataBody = req.body
            let cekData = await User.findOne({
                where: {email: dataBody.email}
            })
            if(!cekData){
                throw {status: 401, msg: 'emial / password tidak valid'}
            }else if(!BcryptUser.conperPassword(dataBody.password, cekData.password)){
                throw {status: 401, msg: 'emial / password tidak valid'}
            }else{
                let saveData = {
                    id: cekData.id,
                    email: cekData.email
                }
                let access_token = JwtUser.getToken(saveData)
                saveData.access_token = access_token
                res.status(200).json(saveData)
            }
            res.status(200).json(dataBody)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = UserController