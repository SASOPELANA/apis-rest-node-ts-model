import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

// rutas import
import mainRouter from "./src/routes/main.router";
import productsRouter from "./src/routes/products.router";

// middlewares import
import middlewares from "./src/middlewares/not-found";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(mainRouter);
app.use("/api", productsRouter);

// middlewares para error
app.use(middlewares.notFount);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
