import dotenv from "dotenv";
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;
const JWT_SECRET = process.env.JWT_SECRET;

// process.env values are strings or undefined
// convert PORT (string) to number, else use 3000 if not provided
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

// Runtime safety checks (fail fast)
if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in environment variables");
}

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

export {
  DATABASE_URL,
  JWT_SECRET,
  PORT,
};
