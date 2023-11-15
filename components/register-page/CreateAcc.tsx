"use client";
import Link from "next/link";
import React, { useState } from "react";

const CreateAcc = () => {
  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    password: "",
    rePassword: "",
  };
  const [form, setForm] = useState(initialFormState);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Account has been successfully created.");
    setForm(initialFormState);
  };

  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center gap-4 border-b-2 py-5">
        <form
          action="create"
          className="flex flex-col gap-3"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="border rounded-lg px-4 py-2"
          />
          <input
            type="text"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border rounded-lg px-4 py-2"
          />
          <input
            type="text"
            name="phone"
            id="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter mobile number"
            className="border rounded-lg px-4 py-2"
          />
          <input
            type="text"
            name="password"
            id="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Create password"
            className="border rounded-lg px-4 py-2"
          />
          <input
            type="text"
            name="rePassword"
            id="rePassword"
            value={form.rePassword}
            onChange={handleChange}
            placeholder="Re-enter password"
            className="border rounded-lg px-4 py-2"
          />

          <button
            type="submit"
            className="bg-[#1CA0E9] text-white px-7 py-2.5 text-sm font-bold rounded-xl xl:px-7 xl:py-2.5 xl:text-base flex items-center justify-center"
          >
            Create account
          </button>
        </form>
        <Link href={"/login"} className="text-center">
          Already have an account?
        </Link>
      </div>
    </div>
  );
};

export default CreateAcc;
