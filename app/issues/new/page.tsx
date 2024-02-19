"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";
import "easymde/dist/easymde.min.css";
import SimpleMdeReact from "react-simplemde-editor";

const NewIssue = () => {
  return (
    <div className="max-w-xl space-y-5">
      <TextField.Root>
        <TextField.Input placeholder="title" />
      </TextField.Root>
      <SimpleMdeReact placeholder="description" />
      <Button>Submit new issue</Button>
    </div>
  );
};

export default NewIssue;
