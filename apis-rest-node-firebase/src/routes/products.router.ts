import { Router } from "express";

import controller from "../controllers/products.controller.js";

const router = Router();

// get all
router.get("/products", controller.getAll);

// buscador dinamico o genéricas
//router.get("/products/search", controller.getSearch);

// get id
router.get("/products/:id", controller.getId);

// post --> create new product
router.post("/products", controller.createProduct);

// put --> update product
router.put("/products/:id", controller.updateProduct);

// patch --> update product --> partial update
router.patch("/products/:id", controller.updatePatchProduct);

// delete --> delete product
router.delete("/products/:id", controller.deleteProduct);

export default router;
