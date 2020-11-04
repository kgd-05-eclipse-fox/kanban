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
            // let validasiError = ValidasiUser.validasiPutTodo(dataInput)
            let data = await Todo.update(dataInput, {
                where: {id}
            })
            res.status(200).json(dataInput)
        } catch (err) {
            console.log(err)
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
            res.status(500).json(err)
        }
    }

    static async deleteUserKanban(req, res, next){
        try {
            let id = +req.params.id
            let data = await Todo.destroy({
                where: {id}
            })
            if(data===0){
                let error = {
                    key: 'deletToDo',
                    status: 400,
                    msg: 'Id Tidak ditemukan'
                }
                throw error
            }else{
                let output = {
                    massage: 'todo succes to delete'
                }
                res.status(200).json(output)
            }
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = KanbanConteroller