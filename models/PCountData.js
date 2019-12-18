const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PremiumCountSchema = new Schema({
  name: String,
  date: {
    type: Date,
    default: Date.now()
  },
  bucket: String,
  location: String,
  start: String,
  end: String,
  fileName: String,
  searchQueries: {},
  data: {}
});

mongoose.model("PCountData", PremiumCountSchema);
