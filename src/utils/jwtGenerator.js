let jwt = require('jsonwebtoken');

const jwtGenerator = (wallet) => {
  let pk = process.env.PRIVATE_KEY;
  let token = jwt.sign({
    wallet 
  }, pk);

  return token;
}

module.exports = jwtGenerator;