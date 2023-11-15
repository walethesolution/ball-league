"use client";
import Link from "next/link";
import { useState } from "react";

const SignIn = () => {
  const initialForm = {
    email: "",
    password: "",
  };

  const [form, setForm] = useState(initialForm);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    alert("You have been succesfully logged in");
    setForm(initialForm);
  };

  return (
    <div>
      <div className="w-full flex flex-col gap-4 border-b-2 py-5">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border rounded-lg px-4 py-2"
          />
          <input
            name="password"
            id="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="border rounded-lg px-4 py-2"
          />
          <button
            type="submit"
            className="bg-[#2A6041] text-white px-7 py-2.5 text-sm font-bold rounded-xl xl:px-7 xl:py-2.5 xl:text-base flex items-center justify-center"
          >
            Log in
          </button>
        </form>
        <Link href={"/"} className="text-center">
          Forgot password?
        </Link>
      </div>
      <Link
        href={"/register"}
        className="bg-[#1CA0E9] mt-4 text-white px-7 py-2.5 text-sm font-bold rounded-xl xl:px-7 xl:py-2.5 xl:text-base flex items-center justify-center"
      >
        Create account
      </Link>
    </div>
  );
};

export default SignIn;
