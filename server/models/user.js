'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Kanban)
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email tidak Valid'
        },
        notEmpty: {
          args: true,
          msg: 'Email tidak boleh kosong'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        min: {
          args: 6,
          msg: 'Password minimal 6 karakter'
        },
        notEmpty: {
          args: true,
          msg: 'Password tidak boleh kosong'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};