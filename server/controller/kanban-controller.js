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
            let UserId = req.acces_token
            databody.UserId = UserId.id
            let data = await Kanban.create(databody)
            res.status(201).json(data)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async getUserKanban(req, res, next){
        try {
            
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async patchUserKanban(req, res, next){
        try {
            
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = KanbanConteroller