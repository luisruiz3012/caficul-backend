const jwtGenerator = require('../utils/jwtGenerator');

class Auth {
  async loginBuyer(req, res) {
    const { wallet } = req.body;
    const token = jwtGenerator(wallet);

    return res.json(token)
  }
}

module.exports = Auth;