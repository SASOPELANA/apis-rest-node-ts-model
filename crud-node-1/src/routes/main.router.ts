import { Router } from "express";
import controller from "../controllers/main.controller.js";

const router = Router();

// Ruta de ejemplo
router.get("/", controller.indexMain);

export default router;
