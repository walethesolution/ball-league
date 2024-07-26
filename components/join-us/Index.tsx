"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BackgroundImage from "../../public/assets/images/homeCourt.png";

const JoinUs: React.FC = () => {
  const [username, setUsername] = useState("");
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
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter your username"
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
              htmlFor="password">
              Verify Password
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
              Create Account
            </button>
            <Link
              href="/login"
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
