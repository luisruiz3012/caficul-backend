const mongoose = require('mongoose');
const URI = process.env.DB_URI;

try {
  mongoose.connect(URI)
  .then(() => {
    console.log('DB connection established');
  })
} catch (error) {
  console.log(error)
}