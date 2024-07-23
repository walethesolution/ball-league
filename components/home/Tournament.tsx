"use client";

import React from "react";
import Link from "next/link";

const tournaments = [
  {
    title: "1v1 Tournament",
    link: "/tournaments/1v1",
    description:
      "Show your individual skills and compete in our intense 1v1 tournament.",
  },
  {
    title: "3v3 Tournament",
    link: "/tournaments/3v3",
    description:
      "Team up and showcase your teamwork in our exciting 3v3 tournament.",
  },
  {
    title: "3-Point Contest",
    link: "/tournaments/3pt",
    description:
      "Test your shooting accuracy and compete in the ultimate 3-point contest.",
  },
];

const Tournament: React.FC = () => {
  return (
    <div className="py-12 bg-gradient-to-b from-black via-gray-800 to-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Enter Tournaments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tournaments.map((tournament, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 bg-gray-900 p-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">{tournament.title}</h3>
                <p className="mb-6 text-lg">{tournament.description}</p>
                <Link
                  href={tournament.link}
                  className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-full transition-colors duration-300">
                  Enter Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tournament;
