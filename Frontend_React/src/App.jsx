import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Route, Router, Routes } from "react-router-dom";
import z from "zod";
import ReactHooks from "./pages/react-hook/ReackHook";
import { Debounce } from "./pages/debounce/Debounce";
import { HighOrder } from "./pages/high-order-functional/HighOrder";
import Home from "./pages/home/Home";

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
      <Routes>
        <Route element={<Home />} path={"/"} />
        <Route element={<ReactHooks />} path={"/hooks"} />
        <Route element={<HighOrder />} path={"/highorder"} />
        <Route element={<Debounce />} path={"/debounce"} />
      </Routes>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input name="myInput" {...register("myInput")} />
        {errors.myInput && <p>{errors.myInput.message}</p>}
        <button type="submit">add</button>
      </form> */}
    </>
  );
};

export default App;
