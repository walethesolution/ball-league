"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BackgroundImage from "../../public/assets/images/homeCourt.png";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
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
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit}>
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
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600">
              Login
            </button>
            <Link
              href="/join"
              className="text-green-600 hover:text-green-700 font-bold">
              Create an account
            </Link>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/forgot-password"
              className="text-green-600 hover:text-green-700 font-bold">
              Forgot your password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
