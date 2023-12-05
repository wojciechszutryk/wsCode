"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewArticlePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="new issue" />
      </TextField.Root>
      <TextArea placeholder="new issue"></TextArea>
      <Button>Create article</Button>
    </div>
  );
};

export default NewArticlePage;
