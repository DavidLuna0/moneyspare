const User = require('../models/User');
const Expense = require('../models/Expenses');

module.exports = {
  async index(req, res) {
    const expenses = await Expense.findAll();
    return res.json(expenses);
  },

  async findByUser(req, res) {
    // eslint-disable-next-line camelcase
    const user_id = +req.params.user_id;
    await Expense.findAll({ where: { user_id } })
      .then(result => {
        return res.json(result);
      })
      .catch(err => {
        return res.status(400).json(err.message);
      });
  },

  async store(req, res) {
    // eslint-disable-next-line camelcase
    const user_id = +req.params.user_id;
    const { category, description, value, type, paid } = req.body;

    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(400).json({ error: 'User not Fount' });
    }
    const expense = await Expense.create({
      user_id,
      category,
      description,
      value,
      type,
      paid,
    });

    return res.json(expense);
  },
};
