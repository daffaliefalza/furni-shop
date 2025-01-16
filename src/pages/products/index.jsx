import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/cart.jsx";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Cart.jsx";
import axios from "axios";
import Navbar from "../../components/Navbar.jsx";
import ProductHeader from "./ProductHeader.jsx";
import Footer from "../../components/Footer.jsx";
import Filtering from "./Filtering.jsx";

const url = "https://678959402c874e66b7d87788.mockapi.io/furniture";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [company, setCompany] = useState("all");
  const [sortBy, setSortBy] = useState("");
  const [showModal, setshowModal] = useState(false);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const toggle = () => {
    setshowModal(!showModal);
  };

  const getProducts = async () => {
    try {
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };
  const handleCompanyChange = (selectedCompany) => {
    setCompany(selectedCompany);
  };

  const handleSearchChange = (searchTerm) => {
    setSearch(searchTerm);
  };

  const handleSortChange = (selectedSortBy) => {
    setSortBy(selectedSortBy);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "lowest") {
      return a.price - b.price;
    } else if (sortBy === "highest") {
      return b.price - a.price;
    }
    return 0;
  });

  const filteredProducts = sortedProducts.filter((product) => {
    const categoryMatch = category === "all" || product.category === category;
    const companyMatch = company === "all" || product.company === company;
    const searchMatch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && companyMatch && searchMatch;
  });

  useEffect(() => {
    getProducts();
  }, []);

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
          <Filtering
            category={category}
            company={company}
            search={search}
            sortBy={sortBy}
            onCategoryChange={handleCategoryChange}
            onCompanyChange={handleCompanyChange}
            onSearchChange={handleSearchChange}
            onSortChange={handleSortChange}
          />
          <div className="md:grid md:grid-cols-3 md:gap-5">
            {filteredProducts.map((product) => (
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
