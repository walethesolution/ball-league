"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import BackgroundImage from "../../public/assets/images/homeCourt.png";

const JoinUs: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== verifyPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, verifyPassword }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.message || "Something went wrong");
        return;
      }

      router.push("/account-success");
    } catch (error) {
      setError("Failed to create account");
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gray-900">
      <div className="absolute inset-0 z-0">
        <Image
          src={BackgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
          layout="fill"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      <div className="relative z-10 w-full max-w-lg p-8 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Create Your Account
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="verifyPassword">
              Verify Password
            </label>
            <input
              type="password"
              id="verifyPassword"
              value={verifyPassword}
              onChange={(e) => setVerifyPassword(e.target.value)}
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter your password again"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600">
              Create Account
            </button>
            <Link
              href="/"
              className="text-green-600 hover:text-green-700 font-bold">
              Already have an account?
            </Link>
          </div>
        </form>
      </div>

      <div className="absolute bottom-8 left-8 md:left-16 lg:left-32">
        <div className="relative inline-block">
          <button className="text-white py-3 px-8 text-lg md:text-xl bg-green-600 hover:bg-green-700 transition-colors duration-300 rounded-full shadow-lg">
            Join our community
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
