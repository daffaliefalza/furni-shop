import imageFurniture from "../../assets/about-furniture1.png";

const AboutFurniture = () => {
  return (
    <section className="mt-[7rem] w-[95%] mx-auto">
      <div className="container md:grid md:grid-cols-2 md:items-center md:gap-8">
        <div className=" w-[85%]">
          <h2 className="text-[24px] font-semibold text-[#23262F]">
            The Best Furniture Manufacturer Of Your Choice
          </h2>
          <p className="text-[#23262F] my-4">
            Furniture power is a software as services for multiperpose business
            management system, expecially for them who are running two or more
            business exploree the future Furnitre power is a software as
            services
          </p>
        </div>
        <img
          src={imageFurniture}
          alt="about furniture image"
          className="rounded-md mt-12"
        />
      </div>
    </section>
  );
};
export default AboutFurniture;
