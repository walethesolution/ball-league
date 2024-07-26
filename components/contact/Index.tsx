"use client";
import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900">
      <div className="relative z-10 w-full max-w-lg p-8 bg-black bg-opacity-70 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-8">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-600 rounded bg-gray-800 text-white focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-600 rounded bg-gray-800 text-white focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-600 rounded bg-gray-800 text-white focus:ring-2 focus:ring-green-600 h-32"></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
