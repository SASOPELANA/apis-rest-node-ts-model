import bcrypt from "bcrypt";
import { createUser, findUserByEmail } from "../model/user.model.js";

import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(422)
      .json({ message: "El email y la contraseña son requeridos" });
  }

  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    return res.status(409).json({ message: "El usuarío/a ya existe." });
  }

  const passwordHash = await bcrypt.hash(password, 6);

  // console.log(email, password, passwordHash);

  const user = await createUser(email, passwordHash);

  if (!user) {
    return res.sendStatus(503);
  }

  res.status(201).json({ id: user.id, email: user.email });
};
