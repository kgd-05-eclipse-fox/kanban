'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt')
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
			allowNull: false,
			validate: {
				isEmail: {
					args: true,
					msg: 'Must be on email format'
				},
				notNull: {
					args: true,
					msg: 'Email cannot be blank'
				},
				notEmpty: {
					args: true,
					msg: 'Email cannot be blank'
				}
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: {
					args: true,
					msg: 'Password cannot be blank'
				},
				notNull: {
					args: true,
					msg: 'Password cannot be blank'
				},
				len: {
					args: [6,12],
					msg: 'Password value should be at least between 6 and 12 characters'
				}
			}
		},
  }, {
    sequelize,
    modelName: 'User',
	});
	User.addHook('beforeCreate', instance => {
    const hashed = hashPassword(instance.password)
    instance.password = hashed
  })
  return User;
};