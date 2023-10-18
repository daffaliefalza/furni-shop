import { Link } from "react-router-dom";
import image1 from "../../assets/about-store1.png";
import image2 from "../../assets/about-store2.png";
import image3 from "../../assets/about-store3.png";
import image4 from "../../assets/about-store4.png";

const AboutStore = () => {
  return (
    <section className="mt-[8rem] w-[95%] mx-auto">
      <div className="container md:flex md:flex-row md:justify-between md:gap-5  ">
        <div className="flex items-center mb-5 gap-5   md:flex md:flex-col md:justify-center md:items-start">
          <h2 className="font-semibold text-[24px] text-[#23262F]">
            New In Store Now
          </h2>
          <div className="flex flex-col">
            <p className="text-[#23262F]">
              Get the latest items immediately with promo prices
            </p>
            <Link className="underline mt-2" to={"/products"}>
              Check All
            </Link>
          </div>
        </div>

        <div
          className=" flex gap-2  "
          style={{ width: "600px" }}
          id="grid-store"
        >
          <div className="relative flex-none ">
            <img src={image1} alt="" className="h-full " />
            <h4 className="absolute bottom-6 left-[50%] translate-x-[-50%] text-white">
              Chair
            </h4>
          </div>
          <div className="relative flex-none ">
            <img src={image2} alt="" className="h-full md:w-[500px]" />
            <h4 className="absolute bottom-6 left-[50%] translate-x-[-50%] text-white">
              Bedroom
            </h4>
          </div>
          <div className="relative flex-none ">
            <img src={image3} alt="" className="h-full" />
            <h4 className="absolute bottom-6 left-[50%] translate-x-[-50%] text-white">
              Cupboard
            </h4>
          </div>
          <div className="relative flex-none ">
            <img src={image4} alt="" className="h-full" />
            <h4 className="absolute bottom-6 left-[50%] translate-x-[-50%] text-white">
              Lightning
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutStore;
