import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://course-api.com/react-store-single-product?id=${id}`
      );
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  const { name, price, description, category } = product;

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <Link
        to={"/products"}
        className="bg-[#286F6C] py-1 px-5 m-3 inline-block rounded text-[#fff]"
      >
        Back to Products
      </Link>
      <div className="container mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg max-w-2xl">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={product.images[0].url}
            alt={name}
            className="md:w-1/2 h-96 object-cover rounded-lg mb-4 md:mb-0"
          />
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-[39px] text-[#102A42] font-bold mb-4">
              {name}
            </h1>
            <p className="text-gray-600 mb-4">${price}</p>
            <p className="text-gray-700 mb-4">{description}</p>
            <p className="text-gray-700 mb-4">Category: {category}</p>
            {/* <div className="flex items-center mb-4">
              <button
                className="bg-[#E5E5E5] text-black font-bold py-2 px-3 rounded-l w-12 inline-block"
                onClick={decrementQuantity}
              >
                -
              </button>
              <span className="text-gray-700 text-lg px-3">{quantity}</span>
              <button
                className="bg-[#E5E5E5] text-black font-bold py-2 px-3 rounded-r w-12 inline-block"
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>

            <button className="bg-[#286F6C] hover:bg-[#266f5c] text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
