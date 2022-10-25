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
      User.hasMany(models.Task, {
        as: 'tasks',
        foreignKey: 'userId',
      });
    }
    // instance method
    authenticatePassword(password) {
      return new Promise((resolve, reject) => {
        bcrypt.compare(password, this.password_hash, (err, valid) => {
          if (err) {
            reject(err);
          } else {
            resolve(valid);
          }
        });
      });
    }
  }
  // class method
  User.login = function (email, password) {
    // 1. find the user
    return User.findOne({
      where: {
        email,
      },
    }).then(user => {
      // 2. hash the password to compare it the saved hashed password
      if (!user) return null;
      return user
        .authenticatePassword(password)
        .then(valid => (valid ? user : null));
    });
  };

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
