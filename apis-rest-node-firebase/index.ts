import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import middlewares from "./src/middlewares/not-found";

import listaProductos from "./src/types/types.products";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json("Hola en Node y Typescript!!!");
});

app.get("/products", (req, res) => {
  const categories = req.query.categories as string;

  if (categories) {
    const productsFiltered = listaProductos.filter((item) =>
      item.categories.includes(categories),
    );

    // nunca se deja dos res en un metodo. si incluye dos o mas se usa return
    return res.json(productsFiltered);
  }
  res.json(listaProductos);
});

// buscador dinamico o genéricas
app.get("/products/search", (req, res) => {
  const name: string = req.query.name as string;

  if (!name) {
    return res.status(400).json({ error: "El nombre es requerido" });
  }

  const productsFiltered = listaProductos.filter((item) =>
    item.name.toLowerCase().includes(name.toLowerCase()),
  );

  if (productsFiltered.length === 0) {
    return res.status(404).json({ error: "No se encontro el producto." });
  }

  res.json(productsFiltered);
});

app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const response = listaProductos.find((item) => item.id === id);

  if (!response) {
    res.status(404).json({ error: "No existe el producto." });
  }

  res.json(response);
});

// middlewares para error
app.use(middlewares.notFount);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
