import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.json("Hola en Node y Typescript!!!");
});

export default router;
