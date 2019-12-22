const mongoose = require("mongoose");
const capitalizeFirst = require("../services/capitalizeFirst");

const Data = mongoose.model("data");

module.exports = app => {
  app.get("/api/data/:type/:subType", async (req, res) => {
    const type = capitalizeFirst(req.params.type);
    const subType = capitalizeFirst(req.params.subType);
    const data = await Data.find({ type, subType }).catch(error => {
      console.error(error);
      return null;
    });
    res.send({ data });
  });
};
