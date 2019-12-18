const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  createdAt: Date,
  type: String,
  subType: String,
  bucket: String,
  location: String,
  start: String,
  end: String,
  searchQueries: [],
  data: {}
});

mongoose.model("data", DataSchema);
