const mongoose = require('mongoose');

const URL = process.env.MONGO_URI;

mongoose
  .connect(URL)
  .then(() => {
    console.log('✅ MongoDB Connected');
  })
  .catch((err) => {
    console.error('❌ MongoDB Connection Error:', err);
  });

module.exports = mongoose;
