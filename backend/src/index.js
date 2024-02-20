import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connectDatabase } from "./database/index.js";
import { celularController } from "./controllers/celular.controller.js";

await connectDatabase();

const app = express();
const PORT = 3000;

app.use(bodyParser.json(), cors());

app
  .get("/", celularController.test)
  .post("/celular", celularController.create)
  .get("/celular/:id", celularController.findById)
  .get("/celulares", celularController.findAll)
  .put("/celular/:id", celularController.update)
  .delete("/celular/:id", celularController.destroy);

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
