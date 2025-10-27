import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

// importamos las rutas
import mainRouter from "./routes/main.router.js";
import productosRoutes from "./routes/productos.router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Usamos la ruta
app.use(mainRouter);
app.use(productosRoutes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
