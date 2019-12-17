const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: 'O campo nome é obrigatório!',
            },
          },
        },
        email: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: 'O campo email é obrigatório!',
            },
          },
        },
        password: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: 'O campo senha é obrigatório!',
            },
          },
        },
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = User;
