import Navbar from "../../components/Navbar";
import ProductHeader from "./ProductHeader";
import Footer from "../../components/Footer";

import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const url = "https://course-api.com/react-store-products";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [companyFilter, setCompanyFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      let filteredProducts = response.data;

      if (categoryFilter !== "All") {
        filteredProducts = filteredProducts.filter(
          (product) => product.category === categoryFilter
        );
      }

      if (companyFilter) {
        filteredProducts = filteredProducts.filter(
          (product) => product.company === companyFilter
        );
      }

      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredProducts = filteredProducts.filter(
          (product) =>
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.company.toLowerCase().includes(query)
        );
      }

      if (sortBy === "lowest") {
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
      } else if (sortBy === "highest") {
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
      }

      setProducts(filteredProducts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [categoryFilter, companyFilter, searchQuery, sortBy]);

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompanyFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <>
      <Navbar />
      <ProductHeader />
      <div className="w-[95%] mx-auto md:my-10">
        <div className="flex justify-center mb-4">
          <select value={categoryFilter} onChange={handleCategoryChange}>
            <option value="All">All</option>
            <option value="office">Office</option>
            <option value="living room">Living Room</option>
            <option value="kitchen">Kitchen</option>
            <option value="bedroom">Bedroom</option>
            <option value="dining">Dining</option>
            <option value="kids">Kids</option>
          </select>

          <select value={companyFilter} onChange={handleCompanyChange}>
            <option value="">All Companies</option>
            <option value="ikea">Ikea</option>
            <option value="marcos">Marcos</option>
            <option value="liddy">Liddy</option>
            <option value="caressa">Caressa</option>
          </select>

          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
          />

          <select value={sortBy} onChange={handleSortChange}>
            <option value="">Sort by</option>
            <option value="lowest">Lowest Price</option>
            <option value="highest">Highest Price</option>
          </select>
        </div>

        <div className="md:grid md:grid-cols-3 md:gap-5">
          {products.map((product) => {
            const { id, image, name, price } = product;
            return (
              <Link to={`/products/${id}`} key={id} className="grid gap-3">
                <img
                  src={image}
                  alt={name}
                  className="object-cover w-full h-48 md:h-64 rounded-md"
                />
                <div className="flex justify-between items-center my-2">
                  <p className="text-[#171A1F]">{name}</p>
                  <span className="text-[#BCC1CA]">${price}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;
