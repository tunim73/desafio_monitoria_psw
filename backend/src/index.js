import express from "express";
import bodyParser from "body-parser";
import { connectDatabase } from "./database/index.js";
import { celularController } from "./controllers/celular.controller.js";

await connectDatabase();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app
  .get("/", celularController.test)
  .post("/celular", celularController.create)
  .get("/celular/:id", celularController.findById)

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
