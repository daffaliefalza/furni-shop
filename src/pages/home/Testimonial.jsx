import testimonialBanner from "../../assets/testimonial1.png";
import daffaImage from "../../assets/daffa.jpeg";

const Testimonial = () => {
  return (
    <section className="w-[95%] mx-auto my-[3rem] md:mt-[10rem]">
      <div className="container md:grid md:grid-cols-2">
        <div>
          <h2 className="text-[#23262F] text-[24px] font-semibold mb-5">
            What People Are Saying About Us
          </h2>
          <div className="flex gap-4">
            <img src={daffaImage} className="w-[50px] h-[50px] rounded-full" />
            <div className="flex flex-col">
              <h5 className="text-[#23262F] font-semibold">
                Andi Daffa Liefalza
              </h5>
              <p className="text-[10px]">Manager of the New York Times</p>
            </div>
          </div>
          <p className="text-[#23262F] my-[1.5rem] ">
            “They have a perfect touch for making something so professional,
            <br />
            interesting and useful for a lot of people .”
          </p>
          <button className="mr-8 bg-gray-200  rounded-full w-[30px] h-[30px]">
            🡠
          </button>
          <button className="mb-5 bg-gray-200 rounded-full w-[30px] h-[30px]">
            🡢
          </button>
        </div>
        <div>
          <img src={testimonialBanner} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
