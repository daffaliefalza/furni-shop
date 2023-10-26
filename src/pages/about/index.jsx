import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import daffa from "../../assets/daffa.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-16 ">
        <div className="container">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 items-center md:px-[8rem]">
            <img
              src={daffa}
              alt="daffa"
              className="object-cover w-[250px] mx-auto rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4  underline ">
                Why Us
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 w-full text-justify">
                At Furnishop, we believe in transforming your spaces into homes.
                Our curated collection of high-quality furniture pieces,
                designed with both style and comfort in mind, ensures you find
                the perfect match for your living spaces. With our seamless
                online shopping experience, expert customer service, and fast,
                reliable delivery, we are dedicated to making your furniture
                shopping hassle-free and enjoyable. Choose Furnishop and let
                your home reflect your style.
                <span className="block text-start mt-4 text-[#adadad] italic">
                  - Andi Daffa Liefalza | CEO Furnishop
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
