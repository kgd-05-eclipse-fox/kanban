'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      Task.belongsTo(models.User)
    }
  };
  Task.init({
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Title cannot be empty'
        }
      }
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Description cannot be empty'
        }
      }
    },
    status: {
      type: DataTypes.INTEGER
    },
    UserId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'UserId cannot be empty'
        },
        isNumeric: {
          args: true,
          msg: 'Status should be a numeric'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Task',
  });

  Task.addHook('beforeCreate', task => {
    task.status = 0
  })

  return Task;
};