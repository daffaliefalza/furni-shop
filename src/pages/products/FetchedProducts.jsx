import { useEffect, useState } from "react";
import axios from "axios";
const url = "https://course-api.com/react-store-products";

const FetchedProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="w-[95%] mx-auto md:my-10">
        <h2 className="text-[#060606] text-[32px] font-bold text-center mb-4">
          Featured Products
        </h2>

        <div className="md:grid md:grid-cols-3  md:gap-5">
          {products &&
            products.map((product) => {
              const { image, name, price } = product;

              return (
                <div key={product.id} className="grid gap-3 ">
                  <img
                    src={image}
                    alt={name}
                    className="object-cover w-full h-48 md:h-64 rounded-md"
                  />
                  <div className="flex justify-between items-center my-2">
                    <p className="text-[#171A1F]">{name}</p>
                    <span className="text-[#BCC1CA]">${price}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default FetchedProducts;
