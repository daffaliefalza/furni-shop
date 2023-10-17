const Box = () => {
  return (
    <div
      id="box-wrapper"
      className="bg-[#286F6C] absolute bottom-[-100px] left-[50%] translate-x-[-50%] w-[80%] mx-auto rounded-[20px] py-10 px-5 grid grid-cols-2 gap-5 md:grid md:grid-cols-4"
    >
      <div className="border-r-[1px] border-white">
        <p className="flex flex-col items-center ">
          7 <span>Year Experience</span>
        </p>
      </div>
      <div className="md:border-r-[1px] border-white">
        <p className="flex flex-col items-center text-center">
          2 <span>Opened in the country</span>
        </p>
      </div>
      <div className="border-r-[1px] border-white">
        <p className="flex flex-col items-center">
          10k+ <span>Furniture sold</span>
        </p>
      </div>
      <div>
        <p className="flex flex-col items-center">
          260+ <span>Variant Furniture</span>
        </p>
      </div>
    </div>
  );
};
export default Box;
