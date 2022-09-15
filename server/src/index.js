import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongodb from "./db/conn";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// routers
import vehicleRouter from "./routers/vehicleRouter";

app.use("/", vehicleRouter);

app.listen(process.env.PORT, () => {
  console.log("server rodando na port:", process.env.PORT);
});
