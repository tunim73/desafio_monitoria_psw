import express from "express";

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});
