import { Request, Response } from "express";

const indexMain = (_req: Request, res: Response) => {
  res.send("Apis rest con Node y TypeScript!!!!!");
};

const index = {
  indexMain,
};

export default index;
