import { NextRequest, NextResponse } from "next/server";
import { createArticleSchema } from "./schema";
import prisma from "@/prisma/client";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const validation = createArticleSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const newArticle = await prisma.article.create({
    data: {
      title: body.title,
      description: body.description,
      body: body.body,
      authorId: body.authorId,
    },
  });

  return NextResponse.json(newArticle, { status: 201 });
}
