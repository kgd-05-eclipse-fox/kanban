const {Kanban} = require('../models')

class KanbanConteroller{

    static async getAllKanban(req, res, next){
        try {
            let data = await Kanban.findAll()
            res.status(200).json(data)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async postUserKanban(req, res, next){
        try {
            let databody = req.body
            let UserId = req.acces_token.id
            databody.UserId = UserId
            let data = await Kanban.create(databody)
            res.status(201).json(data)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async getKanbanById(req, res, next){
        try {
            let id = +req.params.id
            let data = await Kanban.findByPk(id)
            res.status(200).json(data)
        } catch (err) {
           next(err)
        }
    }

    static async getUserKanban(req, res, next){
        try {
            
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async putUserKanban(req, res, next){
        try {
            let id = +req.params.id
            let dataInput = req.body
            let data = await Todo.update(dataInput, {
                where: {id}
            })
            res.status(200).json(dataInput)
        } catch (err) {
            console.log(err)
        }
    }
    
    static async patchUserKanban(req, res, next){
        console.log('masuuukkkk <<<<<<<<<<<')
        try {
            let id = +req.params.id
            let data = req.body.status 
            console.log(req.body)
            let updateData = await Kanban.update({
                status: data
            }, {
                where: {id},
                returning: true
            })
            console.log(updateData)
            res.status(200).json(updateData)
        } catch (err) {
            console.log('masuukk errorrrrrrrrrrrrrrrr')
            res.status(500).json(err)
        }
    }

    static async deleteUserKanban(req, res, next){
        try {
            console.log('masuk controler delete <<<<<<<<<<<<<<<<<<<,')
            let id = +req.params.id
            let data = await Kanban.destroy({
                where: {id}
            })
            if(data===0){
                throw ({status: 400, msg: 'Id Tidak ditemukan'})
            }else{
                res.status(200).json({msg: 'Kanban succes to delete'})
            }
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
}

module.exports = KanbanConteroller