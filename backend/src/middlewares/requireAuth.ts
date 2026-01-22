import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

// Auth middleware
const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      msg: "Authorization header is missing :(",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      userId: string;
    };

    if (!decoded.userId) {
      return res.status(401).json({
        msg: "Token invalid :(",
      });
    }

    // attach userId to request
    (req as any).userId = decoded.userId;

    next();
  } catch (err) {
    console.error("Something went wrong while authorization", err);
    return res.status(401).json({
      msg: "Something went wrong while authorization :(",
    });
  }
};

export default requireAuth;
