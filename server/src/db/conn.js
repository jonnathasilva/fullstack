import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export default mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("MONGODB connect");
  })
  .catch((err) => {
    console.log(err);
  });
