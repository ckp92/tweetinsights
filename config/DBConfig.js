const mongoose = require("mongoose");
const keys = require("./keys");

mongoose.connect(keys.DBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;
