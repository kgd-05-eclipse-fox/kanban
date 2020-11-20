const {Kanban} = require('../models')

class KanbanConteroller{

    static async getAllKanban(req, res, next){
        try {
            let data = await Kanban.findAll()
            res.status(200).json(data)
        } catch (err) {
            next(err)
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
            next(err)
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

    static async putUserKanban(req, res, next){
        try {
            let id = +req.params.id
            let dataInput = req.body
            let data = await Kanban.update(dataInput, {
                where: {id}
            })
            res.status(200).json(dataInput)
        } catch (err) {
            next(err)
        }
    }
    
    static async patchUserKanban(req, res, next){
        try {
            let id = +req.params.id
            let data = req.body.status 
            let updateData = await Kanban.update({
                status: data
            }, {
                where: {id},
                returning: true
            })
            res.status(200).json(updateData)
        } catch (err) {
            next(err)
        }
    }

    static async deleteUserKanban(req, res, next){
        try {
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
            next(err)
        }
    }
}

module.exports = KanbanConteroller