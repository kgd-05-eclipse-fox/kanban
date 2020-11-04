'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kanban extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Kanban.belongsTo(models.User)
    }
  };
  Kanban.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Title tidak boleh kosong'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Description tidak boleh kosong'
        }
      }
    },
    status: DataTypes.STRING,
    imgUser: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: user=>{
        let getImgUser = ['./img/l1.png', './img/l2.png', './img/l3.png', './img/l4.png']
        let pick = Math.floor(Math.random()*getImgUser.length)
        user.imgUser = getImgUser[pick]

        if(!user.status){
          user.status = 'backlog'
        }
      }
    },
    sequelize,
    modelName: 'Kanban',
  });
  return Kanban;
};