import { Router } from "express";
import controller from "../controllers/main.controller";

const router = Router();

router.get("/", controller.indexMain);

export default router;
