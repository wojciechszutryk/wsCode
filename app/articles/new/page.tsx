"use client";
import { Callout, TextField } from "@radix-ui/themes";
import React from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { IArticle } from "@/models/articles/article.model";
import { MdError } from "react-icons/md";
import axios, { AxiosError } from "axios";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import Button from "@/app/components/Button";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const NewArticlePage = () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IArticle>({
    defaultValues: {
      //TODO: get authorId from session
      authorId: 1,
    },
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCreateArticle = async (data: IArticle) => {
    try {
      setLoading(true);
      await axios.post("/api/articles", data);
      setLoading(false);
      router.push("/articles");
    } catch (error) {
      console.log("error: ", error);

      if (error instanceof AxiosError) {
        setError(error?.response?.data?.[0]?.message);
      } else {
        setLoading(false);
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
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <TextField.Root>
          <TextField.Input
            placeholder="new issue"
            {...register("title", {
              required: { value: true, message: "title is required" },
              minLength: { value: 5, message: "title is too short" },
              maxLength: { value: 50, message: "title is too long" },
            })}
          />
        </TextField.Root>
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <TextField.Root>
          <TextField.Input
            placeholder="description"
            {...register("description")}
          />
        </TextField.Root>
        <Controller
          name={"body"}
          control={control}
          render={({ field }) => <MDEditor {...field} />}
        />
        <Controller
          name={"body"}
          control={control}
          render={({ field }) => <MDEditor {...field} />}
        />
        <Button disabled={loading}>
          Create article{loading && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default NewArticlePage;
