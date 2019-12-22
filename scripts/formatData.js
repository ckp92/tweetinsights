// THIS SCRIPT WILL GET THE ORIGINAL DATA AND MAKE A NEW COLLECTION WITH THAT DATA
// NEW COLLECTION WILL HAVE 'TYPE' AND 'SUBTYPE' INSTEAD OF 'NAME'
// THIS WILL MAKE IT EASIER WHEN MANIPULATING THE DATA ON THE CLIENT SIDE

const mongoose = require("mongoose");
const db = require("../config/DBConfig");
require("../models/Data");
require("../models/PCountData");

// CONFIG ----------------------------------------------------------------------------------------------------
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("DB connected"));

const Data = mongoose.model("data");
const PCountData = mongoose.model("PCountData");

// MAIN ------------------------------------------------------------------------------------------------------

// get the original data from the db
const findData = async () => {
  const originalData = await PCountData.find().catch(error => {
    console.error(error);
    return;
  });

  // call next fn to add data
  addToCollection(originalData);
};

// build new data using old data then add to collection
const addToCollection = async oldData => {
  // iterate through the array and make dataobj for each element
  const newDataList = oldData.map(individualData => {
    const {
      date,
      name,
      bucket,
      location,
      start,
      end,
      searchQueries,
      data
    } = individualData;

    const newData = {
      createdAt: date,
      type: null,
      subType: null,
      bucket,
      location: location.toUpperCase(),
      start,
      end,
      searchQueries,
      data
    };

    return dataFormatter(name, bucket, newData);
  });

  // add the data to the new collection
  await Data.insertMany(newDataList).catch(error => console.error(error));
};

findData();

// HELPER FUNCTION -------------------------------------------------------------------------------------------

// will read the 'name' and 'bucket' of old data and create 'type'/'subtype' for new data accordingly
const dataFormatter = (name, bucket, dataObj) => {
  // epstein
  if (name === "epstein") {
    dataObj.type = "Epstein";

    // hourly
    if (bucket === "hour") dataObj.subType = "Death";
    // daily
    else dataObj.subType = "August 2019";
  }

  // ashes
  else if (name.includes("ashes")) {
    dataObj.type = "Ashes 2019";

    // ashesFirstTest
    if (name.includes("First")) dataObj.subType = "First Test";
    // ashesSecondTest
    else if (name.includes("Second")) dataObj.subType = "Second Test";
    // ashesThirdTest
    else if (name.includes("Third")) dataObj.subType = "Third Test";
    // ashes
    else dataObj.subType = "August - Entire Month";
  }

  // politics
  else if (name.includes("politics")) {
    dataObj.type = "UK Politics";

    // politics_labour
    if (name.includes("labour")) dataObj.subType = "Labour Party";
    // politics_conservatives
    else dataObj.subType = "Conservative Party";
  }

  // a-level results
  else if (name.includes("results")) {
    dataObj.type = "A-Level Results 2019";

    // results_firstDecile
    if (name.includes("first")) dataObj.subType = "First Decile";
    // results_secondDecile
    else if (name.includes("second")) dataObj.subType = "Second Decile";
    // results_thirdDecile
    else if (name.includes("third")) dataObj.subType = "Third Decile";
    // results_fourthDecile
    else dataObj.subType = "Fourth Decile";
  }

  return dataObj;
};
