import { Router } from "express";
import controller from "../controllers/productos.controller.js";

const router = Router();

// metodo get
router.get("/productos", controller.productosAll);

router.get("/productos/:id", controller.productoId);

// post --> add new product
router.post("/productos", controller.postNewProducto);

// put --> update a product
router.put("/productos/:id", controller.putUpdateProducto);

// delete --> producto id
router.delete("/productos/:id", controller.deleteProducto);

export default router;
