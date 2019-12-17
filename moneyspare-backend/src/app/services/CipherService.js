const bcrypt = require('bcrypt');

module.exports = {
  async passCipher(pass) {
    const salt = bcrypt.genSaltSync();
    const passwordHash = await bcrypt.hashSync(pass, salt);
    return passwordHash;
  },
  passHashCompare(pass, userPass) {
    return bcrypt.compareSync(pass, userPass);
  },
};
