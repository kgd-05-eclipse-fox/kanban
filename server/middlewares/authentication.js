const {User} = require('../models')
const JwtUser = require('../helper/jwt-user')

const authentication = async (req, res, next)=>{
    let token = req.headers.token
    try {
        if(!token){
            throw {status: 401, msg: 'invalid token'}
        }else{
            let cekToken = JwtUser.decodedToken(token)
            let dataUserDB = await User.findByPk(cekToken.id)
            if(!dataUserDB){
                throw {status: 401, msg: 'invalid token'}
            }else{
                req.acces_token = dataUserDB
                next()
            }
        }
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = authentication