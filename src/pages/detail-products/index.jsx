import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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
  }, []);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  const { name, price, description, category } = product;

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
            <p className="text-gray-600 mb-4">
              {(price / 100).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
              })}
            </p>
            <p className="text-gray-700 mb-4">{description}</p>
            <p className="text-gray-700 mb-4">Category: {category}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
