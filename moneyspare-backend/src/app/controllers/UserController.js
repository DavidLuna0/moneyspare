const User = require('../models/User');
const CipherService = require('../services/CipherService');

module.exports = {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },

  async store(req, res) {
    const { name, email, password } = req.body;
    CipherService.passCipher(password).then(pass => {
      User.create({ name, email, password: pass }).then(result => {
        return res.json(result);
      });
    });
  },

  async login(req, res) {
    const { email, password } = req.body;
    User.findOne({ where: { email } }).then(result => {
      if (CipherService.passHashCompare(password, result.password)) {
        return res.json({ result: true });
      }
      return res.json({ result: false });
    });
  },
};
