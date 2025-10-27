import axios from "axios";
import { Request, Response } from "express";
import Producto from "../type/type.productos.js";

// get all
const productosAll = async (_req: Request, res: Response) => {
  try {
    const response = await axios.get<Producto[]>(
      "https://fakestoreapi.com/products",
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener productos." });
  }
};

// get id
const productoId = async (req: Request, res: Response) => {
  try {
    const response = await axios.get<Producto>(
      "https://fakestoreapi.com/products/" + req.params.id,
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener producto." });
  }
};

// post --> add new product
const postNewProducto = async (req: Request, res: Response) => {
  try {
    // usamos la interface para typar los productos
    const { title, price, description, category } = req.body as Producto;

    if (!title || !price || !description || !category) {
      return res.status(400).json({
        message:
          "Faltan campos obligatorios --> title, price, description, category",
      });
    }

    const response = await axios.post<Producto>(
      "https://fakestoreapi.com/products",
      {
        title,
        price,
        description,
        category,
      },
    );

    res.status(201).json({
      message: "El nuevo producto sea creado.",
      producto: response.data,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el producto." });
  }
};

// put --> update producto
const putUpdateProducto = async (req: Request, res: Response) => {
  try {
    const { title, price, description, category } = req.body as Producto;

    // Validación mínima (opcional)
    if (!title && !price && !description && !category) {
      return res
        .status(400)
        .json({ message: "No hay campos para actualizar." });
    }

    const response = await axios.put<Producto>(
      "https://fakestoreapi.com/products/" + req.params.id,
      {
        title,
        price,
        description,
        category,
      },
    );
    res.json({
      message: "Producto actualizado correctamente.",
      producto: response.data,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el producto." });
  }
};

// delete
const deleteProducto = async (req: Request, res: Response) => {
  try {
    const response = await axios.delete<Producto>(
      "https://fakestoreapi.com/products/" + req.params.id,
    );

    res.json({
      message: "Producto Borrado con exito.",
      producto: response.data,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al borrar el producto." });
  }
};

// Creamos un objeto para los endpoints
const productosIndex = {
  productosAll,
  productoId,
  postNewProducto,
  putUpdateProducto,
  deleteProducto,
};

export default productosIndex;
