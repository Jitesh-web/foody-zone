import express from "express";
import cors from "cors";
import { foodData } from "./foodData.js";
const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/food", (req, res) => {
  res.json(foodData);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
