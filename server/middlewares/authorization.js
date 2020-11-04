const {Kaban} = require('../models')

const authorization = async (req, res, next)=>{
    try {
        let id = +req.params.id
        let data = await Kaban.findOne({
            where: {id}
        })
        if(data.UserId===req.acces_token.id){
            next()
        }else{
            throw({msg: 'Unauthorized', status: 401})
        }
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = authorization