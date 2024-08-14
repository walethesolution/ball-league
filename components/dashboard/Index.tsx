"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
  }, [router]);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-4 text-center text-2xl font-bold bg-green-600">
          Your Logo
        </div>
        <nav className="mt-10">
          <ul>
            <li>
              <Link href="/dashboard">
                <span className="block py-2.5 px-4 rounded hover:bg-gray-700">
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <span className="block py-2.5 px-4 rounded hover:bg-gray-700">
                  Profile
                </span>
              </Link>
            </li>
            <li>
              <Link href="/settings">
                <span className="block py-2.5 px-4 rounded hover:bg-gray-700">
                  Settings
                </span>
              </Link>
            </li>
            <li>
              <Link href="/logout">
                <span className="block py-2.5 px-4 rounded hover:bg-red-600">
                  Logout
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">Welcome to your Dashboard</h1>
          <p className="text-gray-700">
            Here you can manage your account, view statistics, and more.
          </p>
        </div>

        {/* Add additional sections as needed */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Your Stats</h2>
            <p className="text-gray-700">Overview of your performance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Recent Activity</h2>
            <p className="text-gray-700">See what's new.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Upcoming Events</h2>
            <p className="text-gray-700">Don't miss out on these events.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
