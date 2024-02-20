import express from "express";
import bodyParser from "body-parser";
import { connectDatabase } from "./database/index.js";

await connectDatabase();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "helloWorld",
  });
});

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
