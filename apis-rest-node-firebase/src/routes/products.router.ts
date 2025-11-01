import { Router } from "express";

import controller from "../controllers/products.controller.js";

import { verifyToken } from "../middlewares/verify-token.js";

const router = Router();

// get all
router.get("/products", controller.getAll);

// buscador dinamico o genéricas
//router.get("/products/search", controller.getSearch);

// get id
router.get("/products/:id", controller.getId);

// post --> create new product
// middlewares --> verifyToken --> para proteger la ruta
router.post("/products", verifyToken, controller.createProduct);

// put --> update product
router.put("/products/:id", controller.updateProduct);

// patch --> update product --> partial update
router.patch("/products/:id", controller.updatePatchProduct);

// delete --> delete product
router.delete("/products/:id", controller.deleteProduct);

export default router;
