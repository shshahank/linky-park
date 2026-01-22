import dotenv from "dotenv";

dotenv.config();

/*
  process.env values are typed as `string | undefined`, but functions like
  mongoose.connect() require a definite `string`. This function ensures
  the env variable exists at runtime and returns it as a `string`.
*/

function getEnv(name: string): string {
  const value = process.env[name]; // It return string | undefined
  if (!value) {
    throw new Error(`${name} is not defined in environment variables`);
  }
  return value;
}

const DATABASE_URL = getEnv("DATABASE_URL");
const JWT_SECRET = getEnv("JWT_SECRET");
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

export {
  DATABASE_URL,
  JWT_SECRET,
  PORT,
};
