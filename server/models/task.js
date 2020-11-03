'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {

    static associate(models) {
      Task.belongsTo(models.User)
    }
  };
  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `title can't be empty`
        },
        notEmpty: {
          args: true,
          msg: `title can't be empty`
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `title can't be empty`
        },
        notEmpty: {
          args: true,
          msg: `title can't be empty`
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `title can't be empty`
        },
        notEmpty: {
          args: true,
          msg: `title can't be empty`
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};