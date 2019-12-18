const User = require('../models/User');
const CipherService = require('../services/CipherService');

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;
    User.findOne({ where: { email } })
      .then(result => {
        if (CipherService.passHashCompare(password, result.password)) {
          return res.json(result);
        }
        return res.status(400).json(result);
      })
      .catch(err => {
        return res.status(400).json(err.message);
      });
  },
};
