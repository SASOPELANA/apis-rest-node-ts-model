import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import middlewares from "./src/middlewares/not-found";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// middlewares
//app.use(middlewares.mantenimiento);

app.get("/", (_req, res) => {
  res.json("Hola en Node y Typescript!!!");
});

// middlewares para error
app.use(middlewares.notFount);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
