const { Model, DataTypes } = require('sequelize');

class Expense extends Model {
  static init(sequelize) {
    super.init(
      {
        category: {
          type: DataTypes.INTEGER,
          validate: {
            notEmpty: {
              msg: 'A categoria é obrigatória!',
            },
          },
        },
        description: {
          type: DataTypes.STRING,
        },
        value: {
          type: DataTypes.DOUBLE,
          validate: {
            notEmpty: {
              msg: 'O campo valor não pode ser vazio!',
            },
            isDecimal: {
              msg: 'O campo valor só aceita números!',
            },
          },
        },
        type: {
          type: DataTypes.TINYINT,
          validate: {
            notEmpty: {
              msg: 'A operação não pode ser vazia!',
            },
          },
        },
        paid: {
          type: DataTypes.BOOLEAN,
          validate: {
            notEmpty: {
              msg: 'O pagamento deve ter um valor!',
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

module.exports = Expense;
