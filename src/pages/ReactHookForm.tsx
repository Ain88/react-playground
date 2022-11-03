import "../pagesStyle/hookform.css";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface Form {
  name: string;
  password: string;
}

export function ReactHookForm() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");

  const onSubmit = (data: Form) => setResult(JSON.stringify(data));

  return (
    <form id="hookform" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name")} placeholder="User Name" />
      <input type="password" {...register("password")} placeholder="Password" />
      <input type="submit" />
      <p style={{ color: "#555" }}>{result}</p>
    </form>
  );
}
