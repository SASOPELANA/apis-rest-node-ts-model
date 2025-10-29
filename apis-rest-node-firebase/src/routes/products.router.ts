import { Router } from "express";

import controller from "../controllers/products.controller.js";

const router = Router();

// get all
router.get("/products", controller.getAll);

// buscador dinamico o genéricas
//router.get("/products/search", controller.getSearch);

// get id
router.get("/products/:id", controller.getId);

export default router;
