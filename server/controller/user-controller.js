const {User} = require('../models')
const BcryptUser = require('../helper/bcrypt-user.js')
const JwtUser = require('../helper/jwt-user.js')
const {OAuth2Client} = require('google-auth-library');

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

    static googleSignin(req,res,next) {
        let { google_access_token } = req.body
        const client = new OAuth2Client(process.env.CLIENT_ID);
        let email = null;
        client.verifyIdToken({
            idToken: google_access_token,
            audience: process.env.CLIENT_ID
        })
        .then(ticket => {
            let payload = ticket.getPayload();
            email = payload.email
            return User.findOne({
                where:{
                    email: payload.email
                }
            })

        })
        .then(user => {
            if(user) {
                return user;

            } else {
                let newUser = {
                    email: email,
                    password: 'randomaja',
                }
                return User.create(newUser)
            }
        })
        .then(dataUser =>{
            let access_token =  JwtUser.getToken({
                id: dataUser.id,
                email: dataUser.email,
            })
            return res.status(200).json({ access_token })
        })
        .catch(err => {
            console.log(err);
        })

    }
}

module.exports = UserController