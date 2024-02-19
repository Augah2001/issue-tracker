"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";
import "easymde/dist/easymde.min.css";
import SimpleMdeReact from "react-simplemde-editor";
import {useForm,Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import {z} from "zod";

const NewIssue = () => {

  const router = useRouter();
  const { register, handleSubmit, control } = useForm();
  return (
    <form className="max-w-xl space-y-5" onSubmit={handleSubmit((data)=> {
      axios.post("http://localhost:3000/api/issues",data).then((res)=> router.push('/issues') ).catch(err=> console.log(err))
    })}>
      <TextField.Root>
        <TextField.Input placeholder="title" {...register('title')}/>
      </TextField.Root>

      <Controller
        name="description"
        control={control}
        render = {({field})=> <SimpleMdeReact placeholder="description" {...field}/> }
      />
      
      <Button>Submit new issue</Button>
    </form>
  );
};

export default NewIssue;
