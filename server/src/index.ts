//mongodb+srv://arexneutron:5k4yzsy66kepyvx@personal-finances.spulb.mongodb.net/
import cors from "cors";
import express, { Express } from "express";
import mongoose from "mongoose";
import router from "./routes/financial-record-route"

const server: Express = express();
const port = process.env.PORT || 3001;

server.use(express.json());
server.use(cors());

const mongoURI: string =
  "mongodb+srv://arexneutron:5k4yzsy66kepyvx@personal-finances.spulb.mongodb.net/test";
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("CONNECTED TO MONGODB");
  })
  .catch((err) => console.log(err));

server.use('/financial-records', router)

server.listen(port, () => {
  console.log(`Server running on ${port}`);
});
