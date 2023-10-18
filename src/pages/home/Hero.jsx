import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col text-center justify-center items-center h-[90vh]"
    >
      <h1 id="hero-title" className="text-[24px] font-semibold sm:text-[64px]">
        Creative Home Simplify Your Furniture
      </h1>
      <p id="hero-description" className="text-[14px] my-[25px] sm:text-[20px]">
        Do i have consent to record this meeting gain locaion, root-and-branch,
        review, nor game plan who’s the goto
      </p>
      <Link
        to={"/products"}
        id="shop-now"
        className="mt-[30px] text-white rounded-[10px] inline-block px-[80px]  py-[16px] md:mt-[65px]"
      >
        Shop Now
      </Link>
    </section>
  );
};
export default Hero;
