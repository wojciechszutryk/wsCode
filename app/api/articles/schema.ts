import { z } from "zod";

export const createArticleSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters long")
    .max(255, `Title must be at most 255 characters long`),
  description: z
    .string()
    .optional(),
  body: z.string().min(5, "Body must be at least 5 characters long").optional(),
  authorId: z.number().int().positive(),
});
