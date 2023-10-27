import React, { useState } from "react";
import testimonialBanner from "../../assets/testimonial1.png";
import daffaImage from "../../assets/daffa.jpeg";
import johnImage from "../../assets/john.jpeg";
import janeImage from "../../assets/jane.jpg";

const testimonialsData = [
  {
    name: "Andi Daffa Liefalza",
    position: "Manager of the New York Times",
    message:
      "They have a perfect touch for making something so professional, interesting and useful for a lot of people.",
    image: daffaImage,
  },
  {
    name: "John Doe",
    position: "CEO of ABC Company",
    message:
      "I am amazed by their creativity and dedication. Their work has significantly improved our business outcomes.",
    image: johnImage,
  },
  {
    name: "Jane Smith",
    position: "Marketing Director at XYZ Corporation",
    message:
      "Their innovative solutions have transformed our marketing strategies. I highly recommend their services.",
    image: janeImage,
  },
];

const Testimonial = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { name, position, message, image } = testimonialsData[
    currentTestimonialIndex
  ];

  return (
    <section className="w-[95%] mx-auto my-[3rem] md:mt-[10rem]">
      <div className="container md:grid md:grid-cols-2">
        <div className="fade-in-out transition-opacity duration-500">
          <h2 className="text-[#23262F] text-[24px] font-semibold mb-5">
            What People Are Saying About Us
          </h2>
          <div className="flex gap-4">
            <img
              src={image}
              className="w-[50px] h-[50px] rounded-full"
              alt="Testimonial Avatar"
            />
            <div className="flex flex-col">
              <h5 className="text-[#23262F] font-semibold">{name}</h5>
              <p className="text-[10px]">{position}</p>
            </div>
          </div>
          <p className="text-[#23262F] my-[1.5rem]  md:w-[85%]">{message}</p>
          <button
            className="mr-8 bg-gray-200  rounded-full w-[30px] h-[30px]"
            onClick={handlePrevClick}
          >
            🡠
          </button>
          <button
            className="mb-5 bg-gray-200 rounded-full w-[30px] h-[30px]"
            onClick={handleNextClick}
          >
            🡢
          </button>
        </div>
        <div>
          <img src={testimonialBanner} alt="Testimonial Banner" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
