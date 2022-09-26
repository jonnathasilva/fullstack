import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongodb from "./db/conn";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// routers
import vehicleRouter from "./routers/vehicleRouter";

app.use("/", vehicleRouter);

app.listen(port, () => {
  console.log("server rodando na port:", port);
});
