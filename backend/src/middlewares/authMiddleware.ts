import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export interface AuthenticatedRequest extends Request {
  user?: { id: number };
}

export const authenticateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).send({ error: "Access denied. No token provided." });
  }

  try {
    const data = verify(token, "secret_ecom") as { user: { id: number } };
    req.user = data.user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: "Invalid token." });
  }
};
