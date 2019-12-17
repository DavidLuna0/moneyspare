const User = require('../models/User');
const Expense = require('../models/Expenses');

module.exports = {
  async store(req, res) {
    // eslint-disable-next-line camelcase
    const { user_id } = req.params;
    const { category, description, value, type, paid } = req.body;

    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(400).json({ error: 'User not Fount' });
    }
    const expense = await Expense.create({
      category,
      description,
      value,
      type,
      paid,
    });

    return res.json(expense);
  },
};
