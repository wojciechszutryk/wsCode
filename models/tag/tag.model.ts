import { createTagSchema } from "@/app/api/tags/schema";
import { z } from "zod";
import { IBaseModel } from "../abstraction/base.model";

export type ITag = z.infer<typeof createTagSchema>;

export type ITagAttached = ITag & IBaseModel;
