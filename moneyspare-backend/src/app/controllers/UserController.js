const User = require('../models/User');
const CipherService = require('../services/CipherService');

module.exports = {
  async findAll(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },
  async findById(req, res) {
    // eslint-disable-next-line camelcase
    const user_id = +req.params.user_id;
    const user = await User.findByPk(user_id);
    return res.json(user);
  },

  async save(req, res) {
    const { name, email, password } = req.body;
    CipherService.passCipher(password).then(pass => {
      User.create({ name, email, password: pass }).then(result => {
        return res.json(result);
      });
    });
  },

  async update(req, res) {
    // eslint-disable-next-line camelcase
    const user_id = +req.params.user_id;
    const { name, email } = req.body;
    User.findByPk(user_id).then(user => {
      user
        .update({ name, email })
        .then(result => {
          return res.status(201).json(result);
        })
        .catch(err => {
          return res.status(400).json(err.message);
        });
    });
  },
};
