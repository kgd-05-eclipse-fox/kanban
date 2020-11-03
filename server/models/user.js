'use strict';
const {
  Model
} = require('sequelize');

const { encryptPassword } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Task)
    }
  };
  User.init({
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Email cannot be empty'
        },
        isEmail: {
          args: true,
          msg: 'Input should be an Email'
        }
      },
      unique: {
        msg: 'Oopss.. Email is already taken'
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password cannot be empty'
        },
        len: {
          args: [4, 20],
          msg: 'Invalid password! Minimum length is 4 and Maximum length is 20'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.addHook('beforeCreate', user => {
    user.password = encryptPassword(user.password)
  })

  return User;
};