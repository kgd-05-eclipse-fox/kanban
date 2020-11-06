const {Kanban} = require('../models')

const authorization = async (req, res, next)=>{
    console.log('masuk authorizationnnnssssssssssssssssss <<<<<<')
    try {
        let id = +req.params.id
        console.log(id)
        let data = await Kanban.findOne({
            where: {id}
        })
        if(data.UserId===req.acces_token.id){
            console.log('masuk authorizationnnnssssssssssssssssss')
            next()
        }else{
            console.log('masuk authorizationnnnssssssssssssssssss')
            throw({msg: 'Unauthorized', status: 401})
        }
    } catch (err) {
        console.log('masuk authorizationnnnssssssssssssssssss ++++++++++')
        res.status(500).json(err)
    }
}

module.exports = authorization