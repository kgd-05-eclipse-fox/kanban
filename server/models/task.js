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
					msg: 'Title cannot be blank'
				},
				notEmpty: {
					args: true,
					msg: 'Title cannot be blank'
				}
			}
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: {
					args: true,
					msg: 'Description cannot be blank'
				},
				notEmpty: {
					args: true,
					msg: 'Description cannot be blank'
				}
			}
		},
		category: DataTypes.INTEGER,
		UserId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				notNull: {
					args: true,
					msg: 'Not Authorized!'
				},
				notEmpty: {
					args: true,
					msg: 'Not Authorized!'
				}
			}
		},
  }, {
    sequelize,
    modelName: 'Task',
	});
  return Task;
};