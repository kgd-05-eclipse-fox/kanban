const {User} = require('../models')
const JwtUser = require('../helper/jwt-user')

const authentication = async (req, res, next)=>{
    let token = req.headers.access_token
    try {
        if(!token){
            throw {status: 401, msg: 'invalid token'}
        }else{
            let cekToken = JwtUser.decodedToken(token)
            let dataUserDB = await User.findByPk(cekToken.id)
            if(!dataUserDB){
                throw {status: 401, msg: 'invalid token'}
            }else{
                console.log('masuk authenticatiionnnnnnnnnnnnnnnnn')
                req.acces_token = dataUserDB
                next()
            }
        }
    } catch (err) {
        // res.status(500).json(err)
        next(err)
    }
}

module.exports = authentication