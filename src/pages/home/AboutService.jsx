import aboutService from "../../assets/about-service.png";
import checklist from "../../assets/checklist.png";

const AboutService = () => {
  return (
    <section className=" mt-[10rem] w-[95%] mx-auto border border-red-500 ">
      <div className="container ">
        <div className="flex flex-col md:flex-row-reverse border md:justify-center md:items-center md:gap-[3rem]">
          <div>
            <h2 className="text-[#23262F] font-semibold text-[24px]">
              We Create Your Home More Aestetic
            </h2>
            <p className="text-[24px] text-[#23262F]">
              Furniture power is a software as services for multiperpose
              business management system
            </p>

            <div className="flex  gap-3 r my-6">
              <img src={checklist} alt="" className="w-[23px] h-[23px] " />
              <div className="flex flex-col justify-center r">
                <h3 className="font-bold">Valuation Services</h3>
                <p>
                  Sometimes features require a short description. This can be
                  detailed description
                </p>
              </div>
            </div>

            <div className="flex  gap-3 ">
              <img src={checklist} alt="" className="w-[23px] h-[23px] " />
              <div className="flex flex-col justify-center ">
                <h3 className="font-bold">Development of Furniture Models</h3>
                <p>
                  Sometimes features require a short description. This can be
                  detailed description
                </p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <img
                src={aboutService}
                alt="about service image"
                className="w-[340px] mx-auto mt-[35px] rounded-[6px] md:w-[100%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutService;
