import { Request, Response } from "express";
import Model from "../model/products.model.js";
import { Productos } from "../types/types.products.js";

// get all
const getAll = async (req: Request, res: Response) => {
  const categories = req.query.categories as string;

  const response = await Model.getAllProducts();

  if (categories) {
    const productsFiltered = response.filter((item) =>
      item.categories.includes(categories),
    );

    // nunca se deja dos res en un metodo. si incluye dos o mas se usa return
    return res.json(productsFiltered);
  }
  res.json(response);
};

// get search --> buscador dinamico
/*
const getSearch = (req: Request, res: Response) => {
  const name: string = req.query.name as string;

  if (!name) {
    return res.status(400).json({ error: "El nombre es requerido" });
  }

  const productsFiltered = response.filter((item) =>
    item.name.toLowerCase().includes(name.toLowerCase()),
  );

  if (productsFiltered.length === 0) {
    return res.status(404).json({ error: "No se encontro el producto." });
  }

  res.json(productsFiltered);
};
*/

// get id
const getId = async (req: Request, res: Response) => {
  const id = req.params.id;

  const response = await Model.getProductById(id);

  if (!response) {
    return res.status(404).json({ error: "No existe el producto." });
  }

  res.json(response);
};

// post --> crea un producto
const createProduct = async (req: Request, res: Response) => {
  const { name, price, description, categories, image } = req.body as Productos;

  // validación
  // 1. validamos nombre | debe ser texto
  if (!name) {
    return res.status(400).json({ error: "El nombre es requerido" });
  }

  if (typeof name !== "string") {
    return res.status(400).json({ error: "El nombre debe ser texto" });
  }

  // 2. Validarnos precio | debe ser un number | debe ser mayor a 0
  if (!price) {
    return res.status(400).json({ error: "El precio es requerido" });
  }

  if (typeof price !== "number") {
    return res.status(400).json({ error: "El precio debe ser un número" });
  }

  if (price <= 0) {
    return res.status(400).json({ error: "El precio debe ser mayor a 0" });
  }

  // 3. Validamos categorías | debe ser un array | debe tener al menos una categoría
  if (!categories) {
    return res.status(400).json({ error: "Las categorías son requeridas" });
  }

  if (!Array.isArray(categories)) {
    return res
      .status(400)
      .json({ error: "Las categorías deben ser una lista." });
  }

  if (categories.length === 0) {
    return res
      .status(400)
      .json({ error: "Las categorías deben tener al menos una categoría." });
  }

  // 4. Validamos imagen | debe ser un string
  if (!image) {
    return res.status(400).json({ error: "La imagen es requerida" });
  }

  if (typeof image !== "string") {
    return res
      .status(400)
      .json({ error: "La URL de la imagen debe ser un texto." });
  }

  // 5. Validamos la descripcion | debe ser un string (opcional)
  if (description && typeof description !== "string") {
    return res.status(400).json({ error: "La descripcion debe ser un texto." });
  }

  const response = await Model.createProduct({
    name,
    price,
    description,
    categories,
    image,
  });
  res.status(201).json(response);
};

// delete --> borra un producto
const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  const response = await Model.deleteProduct(id);

  if (!response) {
    return res.status(404).json({ error: "No existe el producto." });
  }

  res.status(204).json(response);
};

// creamos un objeto para los endpoints
const productsController = {
  getAll,
  //getSearch,
  getId,
  createProduct,
  deleteProduct,
};

export default productsController;
