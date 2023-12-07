import { createArticleSchema } from "@/app/api/articles/schema";
import { z } from "zod";

export type CreateArticleDto = z.infer<typeof createArticleSchema>;
