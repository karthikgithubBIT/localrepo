const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

require("dotenv").config(); // <-- REQUIRED

const MONGO_url = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_url);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "685bc54dbd23984609943197",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
