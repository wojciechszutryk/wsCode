import { createArticleSchema } from "@/app/api/articles/schema";
import { z } from "zod";

export type IArticle = z.infer<typeof createArticleSchema>;
