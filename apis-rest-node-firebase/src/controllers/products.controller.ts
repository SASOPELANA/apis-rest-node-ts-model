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
  const response = await Model.createProduct({
    name,
    price,
    description,
    categories,
    image,
  });
  res.status(201).json(response);
};

// creamos un objeto para los endpoints
const productsController = {
  getAll,
  //getSearch,
  getId,
  createProduct,
};

export default productsController;
