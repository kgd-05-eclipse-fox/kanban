const { User } = require('../models');
const { comparePassword } = require('../helpers/bcrypt');
const { signToken } = require('../helpers/jwt');
const {OAuth2Client} = require('google-auth-library');

class UserController {
    static register (req, res, next) {
        const user = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
        User.create(user)
        .then(user => {
            res.status(201).json(user = {
                id: user.id,
                username: user.username,
                email: user.email,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            })
        })
        .catch(err => {
            next(err)
        })
    }

    static login(req, res, next) {
        const payload = {
            email: req.body.email,
            password: req.body.password
        }

        User.findOne({
            where: {
                email: payload.email
            }
        })
        .then(user => {
            if(!user) {
                throw {msg: 'Invalid email/password', status: 401}
            } else if (!comparePassword(payload.password, user.password)) {
                throw {msg: 'Invalid email/password', status: 401}
            } else {
                const access_token = signToken({
                    id: user.id,
                    email: user.email,
                    username: user.username
                })
                res.status(200).json({
                    access_token
                })
            }
        })
        .catch(err => {
            next(err)
        })
    }
    
    static googleLogin(req,res,next) {
        //verify access token
        //dapetin token dari client
        let { google_access_token } = req.body
        const client = new OAuth2Client(process.env.CLIENT_ID);
        let email = null;
        //verify google token berdasarkan client id
        //kembalikan token google seperti token biasa agar dapat di autentikasi server
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
                    username: email.substring(0,email.indexOf('@'))
                }
                return User.create(newUser)
            }
        })
        .then(dataUser =>{
            let access_token =  signToken({
                id: dataUser.id,
                email: dataUser.email,
                username: dataUser.username
            })
            return res.status(200).json({ access_token })
        })
        .catch(err => {
            console.log(err);
        })

    }
}

module.exports = UserController;