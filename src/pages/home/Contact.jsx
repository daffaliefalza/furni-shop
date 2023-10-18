import contactBanner from "../../assets/contact-banner-desktop.png";

const Contact = () => {
  return (
    <section
      className="bg-cover bg-center h-[365px]  object-cover text-white relative "
      style={{ backgroundImage: `url(${contactBanner})` }}
    >
      <div className="flex flex-col justify-center items-center h-full ">
        <h2 className="text-[24px] font-semibold ">
          Get more discount Off your order
        </h2>
        <p className="my-[1.2rem]">Join our mailing list</p>
        <div>
          <input
            type="email"
            placeholder="Your email address"
            className="py-[0.8rem] px-[2rem] mr-3 rounded-sm text-black"
          />
          <button className="bg-[#23262F] text-white py-3 px-5 rounded-md">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};
export default Contact;
