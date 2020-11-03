'use strict';
const {Model} = require('sequelize');
const {hashPassword} = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      User.hasMany(models.Task)
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `username can't be empty`
        },
        notEmpty: {
          args: true,
          msg: `username can't be empty`
        },
        len: {
          args: [4,10],
          msg: `username must be a minimal of 4 and a maximum of 10 characters`
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `email can't be empty`
        },
        notEmpty: {
          args: true,
          msg: `email can't be empty`
        },
        isEmail: {
          args: true,
          msg: `must be an email format`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `password can't be empty`
        },
        notEmpty: {
          args: true,
          msg: `password can't be empty`
        },
        len: {
          args: [6,20],
          msg: `password must be a minimal of 6 and a maximum of 20 characters`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.addHook('beforeCreate', (instance, options) => {
    instance.password = hashPassword(instance.password)
  })

  return User;
};