import { z } from "zod";

export const contentSchema = z.object({
  link: z
    .url("Invalid URL")
    .max(500, "Link must be 500 characters or less")
    .trim(),

  type: z
    .string()
    .min(1, "Type can't be empty")
    .max(30, "Type must be 30 characters or less")
    .toLowerCase()
    .trim(),

  title: z
    .string()
    .min(1, "Title can't be empty")
    .max(500, "Title must be 500 characters or less")
    .trim(),

  tags: z
    .array(
      z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid tag ID format")
    )
    .optional()
    .default([]),

  userId: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, "Invalid user ID format"),
});

export type ContentInput = z.infer<typeof contentSchema>;
