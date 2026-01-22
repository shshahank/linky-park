import { z } from "zod";

export const linkSchema = z.object({
  hash: z
    .string()
    .min(1, "Hash can't be empty"),

  userId: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, "Invalid user ID format"),
});

export type LinkInput = z.infer<typeof linkSchema>;
