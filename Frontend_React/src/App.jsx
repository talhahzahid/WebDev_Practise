import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const mySchema = z.object({
  myInput: z.string().min(1, "input is required!"),
});

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(mySchema),
    defaultValues: {
      myInput: "",
    },
    // mode: "all",
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="myInput" {...register("myInput")} />
        {errors.myInput && <p>{errors.myInput.message}</p>}
        <button type="submit">add</button>
      </form>
    </>
  );
};

export default App;
