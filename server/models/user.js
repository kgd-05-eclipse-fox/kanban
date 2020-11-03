'use strict';
const {
  Model
} = require('sequelize');

const {hashPassword} = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Task)
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please fill with your email'
        },
        isEmail: {
          args: true,
          msg: 'Please write in format email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please fill with your password'
        },
        validatePassword(password) {
          if (password.length < 6) {
            throw new Error ('Password minimun is 6 characters')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  
  User.addHook('beforeCreate', (user) => {
    user.password = hashPassword(user.password);
  })

  return User;
};