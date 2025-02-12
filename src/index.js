// require("dotenv").config({ path: "./env" });
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

const app = express();

dotenv.config({ path: "./env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is running on port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Mongo DB Connection Failed : ${error}`);
  });

/* const app = express();

(async () => {
  try {
    const connectDB = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    app.on("error", (error) => {
      console.log(error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port : ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR :", error);
    throw error;
  }
})();

*/
