'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
          msg: "Title cannot be empty"
        },
        notEmpty: {
          args: true,
          msg: "Title cannot be empty"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Description cannot be empty"
        },
        notEmpty: {
          args: true,
          msg: "Description cannot be empty"
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Category cannot be empty"
        },
        notEmpty: {
          args: true,
          msg: "Category cannot be empty"
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "User ID cannot be empty"
        },
        notEmpty: {
          args: true,
          msg: "User ID cannot be empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Task',
  });

  Task.addHook('beforeValidate', (instance, options) => {
    if(instance.category == null) {
      instance.category = 'Back Log'
    }
  })
  return Task;
};