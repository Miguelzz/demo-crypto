/** @format */

import mongoose from "mongoose";
import { databases } from "../env";

export const cryptoConnect = async () => {
  try {
    await mongoose.connect(databases.crypto, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Database is connected!");
  } catch (e) {
    console.log(e);
  }
};
