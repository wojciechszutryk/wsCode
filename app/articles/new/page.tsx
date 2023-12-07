"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { CreateArticleDto } from "@/models/articles/article.dto";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const NewArticlePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<CreateArticleDto>({
    defaultValues: {
      //TODO: get authorId from session
      authorId: 1,
    },
  });

  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        console.log("data", data);

        await fetch("/api/articles", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        router.push("/articles");
      })}
    >
      <TextField.Root>
        <TextField.Input
          placeholder="new issue"
          {...register("title", {
            required: true,
            minLength: 5,
            maxLength: 255,
          })}
        />
      </TextField.Root>
      <TextField.Root>
        <TextField.Input
          placeholder="description"
          {...register("description", {
            required: false,
            minLength: 5,
          })}
        />
      </TextField.Root>
      <Controller
        name={"body"}
        control={control}
        render={({ field }) => <MDEditor {...field} />}
      />
      <Button className="hover:cursor-pointer">Create article</Button>
    </form>
  );
};

export default NewArticlePage;
