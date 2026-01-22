import { z } from "zod";

const signupSchema = z.object({
  username: z
    .string()
    .min(1, "Username can't be empty")
    .max(50, "Username must be 50 characters or less")
    .toLowerCase()
    .trim(),

  first_name: z
    .string()
    .min(1, "First name can't be empty")
    .max(50, "First name must be 50 characters or less")
    .trim(),

  last_name: z
    .string()
    .min(1, "Last name can't be empty")
    .max(50, "Last name must be 50 characters or less")
    .trim(),

  email: z
    .email("Invalid email address")
    .max(50, "Email must be 50 characters or less")
    .toLowerCase()
    .trim(),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password must be 50 characters or less")
    .regex(/[a-z]/, "Password must contain a lowercase letter")
    .regex(/[A-Z]/, "Password must contain an uppercase letter")
    .regex(/\d/, "Password must contain a number")
    .regex(/[@$!%*?&]/, "Password must contain a special character")
    .trim(),
});

export default signupSchema;

export type SignupInput = z.infer<typeof signupSchema>;