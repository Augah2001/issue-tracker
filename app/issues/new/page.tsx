'use client'

import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssue = () => {
  return (
    <div className="max-w-xl space-y-5">
      <TextField.Root>
        <TextField.Input placeholder="title" />
      </TextField.Root>
      <TextArea placeholder="description"/>
      <Button>Submit new issue</Button>
    </div>
  );
};

export default NewIssue;
