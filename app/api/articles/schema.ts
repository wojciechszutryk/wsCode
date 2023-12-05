import { z } from "zod";

export const createArticleSchema = z.object({
    title: z.string().min(5).max(255),
    description: z.string().min(5).max(255).optional(),
    body: z.string().min(5).optional(),
    authorId: z.number().int().positive(),
});
