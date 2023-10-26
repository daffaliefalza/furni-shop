import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-400 to-teal-500">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h1 className="text-4xl font-semibold mb-6 text-center text-gray-800">
            Get In Touch
          </h1>
          <form className="space-y-4">
            <div className="mb-4">
              <input
                type="text"
                className="py-2 px-4 w-full border rounded-md placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Your Full Name"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                className="py-2 px-4 w-full border rounded-md placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Your Email Address"
              />
            </div>
            <div className="mb-4">
              <textarea
                rows="4"
                className="py-2 px-4 w-full border rounded-md placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#286F6C] hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-full transition duration-300 focus:outline-none focus:ring focus:ring-indigo-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
