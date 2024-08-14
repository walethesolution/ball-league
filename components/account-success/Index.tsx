"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import BackgroundImage from "../../public/assets/images/homeCourt.png";

const AccountSuccess: React.FC = () => {
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

      <div className="relative z-10 w-full max-w-md p-8 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Success!</h2>
        <p className="text-lg text-gray-300 mb-4">
          Congratulations! You are now officially a member of Kings League.
        </p>
        <p className="text-lg text-gray-300 mb-8">
          Your account has been created successfully.
        </p>
        <Link href="/coming-soon">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600">
            Go to Dashboard
          </button>
        </Link>
        <div className="mt-4">
          <Link href="/login">
            <span className="text-green-600 hover:text-green-700 font-bold">
              Log in to your account
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountSuccess;
