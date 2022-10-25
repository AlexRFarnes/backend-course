'use strict';
const socket = require('../realtime/client');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userId',
      });

      Task.belongsToMany(models.Category, {
        through: 'TasksCategories',
        as: 'categories',
      });
    }
  }
  Task.init(
    {
      description: DataTypes.TEXT,
    },
    {
      hooks: {
        afterCreate: (task, options) => {
          socket.emit('new_task', {
            task,
          });
        },
      },
      sequelize,
      modelName: 'Task',
    }
  );
  return Task;
};
