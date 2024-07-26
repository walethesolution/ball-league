"use client";

import React from "react";
import Link from "next/link";

const tournaments = [
  {
    title: "3-Point Contest",
    link: "restricted",
    description:
      "Test your shooting accuracy and compete in the ultimate 3-point contest.",
    fadedText: "Who is the real sniper?",
  },
  {
    title: "1 v 1 Tournament",
    link: "restricted",
    description:
      "Show your individual skills and compete in our intense 1v1 tournament.",
    fadedText: "A must-see event",
  },
  {
    title: "3 v 3 Tournament",
    link: "restricted",
    description:
      "Team up and showcase your teamwork in our exciting 3v3 tournament.",
    fadedText: "The main event",
  },
];

const Tournament: React.FC = () => {
  return (
    <div className=" bg-gradient-to-b pt-24 from-black via-gray-800 to-black text-white rounded-lg">
      <div className="container mx-auto p-4">
        <div className="text-center mb-12 p-6 bg-gray-900 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold mb-4">
            Tournament Day: <br /> izza Movie
          </h3>
          <p className="text-lg mb-6">
            Get ready for a day filled with excitement and intense competition!
            Our tournament on{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-1 px-2 rounded-lg text-xl">
              August 18th
            </span>{" "}
            is set to be a blockbuster event where every player's unique style
            is celebrated. Only available to our community members, this is your
            chance to shine on the court and be part of an unforgettable
            experience.
          </p>
          <p className="text-lg mb-6 font-bold">
            Available exclusively to community members.
          </p>
          <Link
            href="/join"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-full transition-colors duration-300">
            Join Our Community
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tournaments.map((tournament, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 bg-gray-900 p-8 ${
                index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}>
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">{tournament.title}</h3>
                <p className="mb-6 text-lg">{tournament.description}</p>
                <p className="text-gray-400 mb-6">{tournament.fadedText}</p>
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
