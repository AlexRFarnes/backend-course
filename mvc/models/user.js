'use strict';
const bcrypt = require('bcrypt');

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
    },
    {
      hooks: {
        beforeCreate: (user, options) => {
          return new Promise((resolve, reject) => {
            if (user.password) {
              bcrypt.hash(user.password, 10, (error, hash) => {
                user.password_hash = hash;
                resolve();
              });
            }
          });
        },
      },
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
