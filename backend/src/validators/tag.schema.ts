import { z } from "zod";

export const tagSchema = z.object({
  title: z
    .string()
    .min(1, "Tag title can't be empty")
    .max(30, "Tag title must be 30 characters or less")
    .trim()
    .toLowerCase(),
});

export type TagInput = z.infer<typeof tagSchema>;