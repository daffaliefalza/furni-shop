import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.png";

const FeaturedProducts = () => {
  return (
    <section className="w-[95%] mx-auto mt-[8rem]">
      <div className="text-center">
        <h2 className="text-[#23262F] text-[24px] font-semibold">
          Featured Products
        </h2>
        <p className="text-[#23262F] mt-[1.5rem] mb-[3rem]">
          The products we provide only for you as our service are selected from
          the best products with number 1 quality in the world
        </p>
      </div>

      <div id="product-grid-wrapper" className="grid grid-cols-2 gap-3">
        <div className="border">
          <img src={product1} />
          <h3 className="text-[#23262F] font-semibold">Ceiling Light</h3>
          <span className="mr-3">$75.00</span>
          <span className="line-through">$82.00</span>
        </div>
        <div className="border">
          <img src={product2} />
          <h3 className="text-[#23262F] font-semibold">Wood Chair</h3>
          <span className="mr-3">$50.00</span>
          <span className="line-through">$70.00</span>
        </div>
        <div className="border">
          <img src={product3} />
          <h3 className="text-[#23262F] font-semibold">Papper Cupboard</h3>
          <span className="mr-3">$105.00</span>
          <span className="line-through">$120.00</span>
        </div>
        <div className="border">
          <img src={product4} alt="" />
          <h3 className="text-[#23262F] font-semibold">Ole Gundorse</h3>
          <span className="mr-3">$82.00</span>
          <span className="line-through">$100.00</span>
        </div>
        <div className="border">
          <img src="https://www.course-api.com/images/store/product-1.jpeg" />
          <h3 className="text-[#23262F] font-semibold">Accent Chair</h3>
          <span className="mr-3">$259.99</span>
          <span className="line-through">$289.99</span>
        </div>
        <div className="border">
          <img src="https://www.course-api.com/images/store/product-2.jpeg" />
          <h3 className="text-[#23262F] font-semibold">Albany Sectional</h3>
          <span className="mr-3">$109.99</span>
          <span className="line-through">$129.99</span>
        </div>
        <div className="border">
          <img src="https://www.course-api.com/images/store/product-6.jpeg" />
          <h3 className="text-[#23262F] font-semibold">Emperor Bed</h3>
          <span className="mr-3">$239.99</span>
          <span className="line-through">$300.99</span>
        </div>
        <div className="border">
          <img src="https://www.course-api.com/images/store/product-4.jpeg" />
          <h3 className="text-[#23262F] font-semibold">Armchair</h3>
          <span className="mr-3">$125.99</span>
          <span className="line-through">$127.99</span>
        </div>
      </div>
      <button className="w-full bg-[#286F6C] text-white my-5 p-2 rounded-md">
        All Products
      </button>
    </section>
  );
};
export default FeaturedProducts;
