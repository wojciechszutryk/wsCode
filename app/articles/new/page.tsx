"use client";
import { Button, Callout, TextArea, TextField } from "@radix-ui/themes";
import React from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { CreateArticleDto } from "@/models/articles/article.dto";
import { MdError } from "react-icons/md";
import axios, { Axios, AxiosError } from "axios";
import Error from "next/error";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const NewArticlePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<CreateArticleDto>({
    defaultValues: {
      //TODO: get authorId from session
      authorId: 1,
    },
  });
  const [error, setError] = useState<string | null>(null);

  const handleCreateArticle = async (data: CreateArticleDto) => {
    try {
      await axios.post("/api/articles", data);
      router.push("/articles");
    } catch (error) {
      console.log("error: ", error);

      if (error instanceof AxiosError) {
        console.log("error.response: ", error.response);

        setError(error?.response?.data?.[0]?.message);
      } else {
        setError("Something went wrong, please try again later");
      }
    }
  };

  return (
    <div className="max-w-xl ">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Icon>
            <MdError />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="max-w-xl space-y-3"
        onSubmit={handleSubmit(handleCreateArticle)}
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
    </div>
  );
};

export default NewArticlePage;
