import { Router, Request, Response } from "express";
import listaProductos from "../types/types.products";

const router = Router();

router.get("/products", (req: Request, res: Response) => {
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
router.get("/products/search", (req: Request, res: Response) => {
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

router.get("/products/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const response = listaProductos.find((item) => item.id === id);

  if (!response) {
    res.status(404).json({ error: "No existe el producto." });
  }

  res.json(response);
});

export default router;
