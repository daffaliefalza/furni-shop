import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/cart.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Cart.jsx";
import axios from "axios";
import Navbar from "../../components/Navbar.jsx";
import ProductHeader from "./ProductHeader.jsx";
import Footer from "../../components/Footer.jsx";
import { Link } from "react-router-dom";

const url = "https://course-api.com/react-store-products/";

export default function Products() {
  const [showModal, setshowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [companyFilter, setCompanyFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const toggle = () => {
    setshowModal(!showModal);
  };

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

  const notifyAddedToCart = (item) =>
    toast.success(`${item.name} added to cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#fff",
        color: "#000",
      },
    });

  const notifyRemovedFromCart = (item) =>
    toast.error(`${item.name} removed from cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    notifyRemovedFromCart(product);
  };

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

      <div className="container pb-5">
        <ToastContainer />
        <div className="flex items-center justify-end  relative my-3">
          <div className=" w-full md:w-[70%] text-center ">
            <h2 className="font-bold text-[32px] text[#060606] text-center my-5">
              Featured Products
            </h2>
          </div>

          {!showModal && (
            <button
              className="px-4 py-2 absolute right-0  bottom-[-20px] md:bottom-1 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              onClick={toggle}
            >
              Cart ({cartItems.length})
            </button>
          )}
        </div>
        <div id="products-grid">
          <div className="flex flex-col flex-wrap  mb-4 ">
            <div id="search-wrapper" className="my-4">
              <input
                className="bg-[#F1F5F8]  py-2 w-full md:w-auto px-5 border border-[#9095A0] rounded"
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>

            <div id="category-wrapper" className="my-4">
              <h3 className="text-[#2D4459] text-[22px] mb-2">Category</h3>
              <select
                value={categoryFilter}
                onChange={handleCategoryChange}
                className="py-2 px-3 w-full md:w-56 border border-[#9095A0]"
              >
                <option value="All">All Category</option>
                <option value="office">Office</option>
                <option value="living room">Living Room</option>
                <option value="kitchen">Kitchen</option>
                <option value="bedroom">Bedroom</option>
                <option value="dining">Dining</option>
                <option value="kids">Kids</option>
              </select>
            </div>

            <div id="company-wrapper" className="my-4">
              <h3 className="text-[#2D4459] text-[22px] mb-2">Company</h3>
              <select
                value={companyFilter}
                onChange={handleCompanyChange}
                className="py-2 px-3  w-full md:w-56   border border-[#9095A0]"
              >
                <option value="">All Companies</option>
                <option value="ikea">Ikea</option>
                <option value="marcos">Marcos</option>
                <option value="liddy">Liddy</option>
                <option value="caressa">Caressa</option>
              </select>
            </div>

            <div id="sort-wrapper">
              <h3 className="text-[#2D4459] text-[22px] mb-2">Sort Price</h3>
              <select value={sortBy} onChange={handleSortChange}>
                <option value="" defaultValue disabled>
                  Sort by
                </option>
                <option value="lowest">Lowest Price</option>
                <option value="highest">Highest Price</option>
              </select>
            </div>
          </div>

          <div className="md:grid md:grid-cols-3 md:gap-5">
            {products.map((product) => (
              <div key={product.id} className="bg-white shadow-md  rounded m-2">
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-48 md:h-64 rounded-md  mb-4"
                  />
                </Link>
                <div className="mb-4 px-2">
                  <h1 className="text-lg font-semibold uppercase">
                    {product.name}
                  </h1>
                  <p className="mt-2 text-gray-600">
                    {" "}
                    {(product.price / 100).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 2,
                    })}
                  </p>
                </div>
                <div className="flex items-center justify-center p-2">
                  {!cartItems.find((item) => item.id === product.id) ? (
                    <button
                      className="px-4 py-2 bg-gray-800 text-white text-xs font-semibold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      onClick={() => {
                        addToCart(product);
                        notifyAddedToCart(product);
                      }}
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <button
                      className="px-4 py-2 bg-red-300 text-white text-xs font-semibold uppercase rounded hover:bg-red-500 focus:outline-none focus:bg-red-500"
                      onClick={() => {
                        handleRemoveFromCart(product);
                      }}
                    >
                      Remove from Cart
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <Cart showModal={showModal} toggle={toggle} />
        </div>
      </div>
      <Footer />
    </>
  );
}
