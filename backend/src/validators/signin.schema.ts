import { z } from "zod";

export const signinSchema = z.object({
  username: z
    .string()
    .min(1, "Username can't be empty")
    .max(50, "Username must be 50 characters or less")
    .toLowerCase()
    .trim(),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password must be 50 characters or less")
    .trim(),
});

export type SigninInput = z.infer<typeof signinSchema>;
