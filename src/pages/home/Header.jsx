import React from "react";
import banner from "../../assets/hero-banner.png";
import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import Box from "./Box";

const Header = () => {
  return (
    <header
      className="bg-cover bg-center  text-white relative "
      style={{ backgroundImage: `url(${banner})` }}
    >
      <Navbar />
      <Hero />
      <Box />
    </header>
  );
};

export default Header;
