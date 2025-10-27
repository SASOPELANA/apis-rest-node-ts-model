import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// middlewares
app.use((_req, res, next) => {
  res.json({ message: "APIS REST en mantenimiento." });
});

// middlewares para error
app.use((_req, res, next) => {
  res.status(404).json({ error: "Not found" });
});

app.get("/", (_req, res) => {
  res.json("Hola en Node y Typescript!!!");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
