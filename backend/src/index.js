import express from "express";
import { connectDatabase } from "./database";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});

await connectDatabase();

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});
