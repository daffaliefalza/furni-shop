import { useContext } from "react";
import { CartContext } from "../../context/cart.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cart({ showModal, toggle }) {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
  } = useContext(CartContext);

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

  const notifyCartCleared = () =>
    toast.error(`Cart cleared!`, {
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
    showModal && (
      <div className="flex-col flex items-center fixed inset-0 left-0 right-0 overflow-y-auto w-full bg-white dark:bg-black gap-8 p-10 text-black dark:text-white font-normal uppercase text-sm">
        <ToastContainer />
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="absolute right-16 top-10 lg:right-28">
          <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700 "
            onClick={toggle}
          >
            Close
          </button>
        </div>
        {cartItems.length > 0 && (
          <table className="container ">
            <thead>
              <tr>
                <th className="py-2 text-start">Item</th>
                <th className="py-2 text-start">Price</th>
                <th className="py-2 text-start">Quantity</th>
                <th className="py-2 text-start">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="py-2">
                    <div className="md:flex md:items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="rounded-md w-16 h-16 mr-4"
                      />
                      <div className="flex flex-col">
                        <h1 className="text-lg font-bold">{item.name}</h1>
                      </div>
                    </div>
                  </td>
                  <td className="py-2  mr-2">${item.price}</td>
                  <td className="py-2">
                    <div className="flex items-center md:flex md:items-center">
                      <button
                        className="px-2 py-1 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                        onClick={() => {
                          addToCart(item);
                        }}
                      >
                        +
                      </button>
                      <p className="px:2 md:px-4">{item.quantity}</p>
                      <button
                        className={`px-2 py-1 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700 ${
                          item.quantity === 1
                            ? "pointer-events-none text-gray-400 cursor-not-allowed"
                            : ""
                        }`}
                        onClick={() => {
                          const cartItem = cartItems.find(
                            (product) => product.id === item.id
                          );
                          if (cartItem.quantity === 1) {
                            handleRemoveFromCart(item);
                          } else {
                            removeFromCart(item);
                          }
                        }}
                      >
                        -
                      </button>
                    </div>
                  </td>
                  <td>
                    <button
                      className="bg-red-500 text-white py-1 px-4 rounded"
                      onClick={() => {
                        removeFromCart(item);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {cartItems.length > 0 ? (
          <div className=" flex flex-col justify-end items-end container">
            <button
              className="px-4 py-3 bg-gray-800 text-white text-xs font-bold uppercase rounded-[2px] hover:bg-gray-700 w-max focus:outline-none focus:bg-gray-700"
              onClick={() => {
                clearCart();
                notifyCartCleared();
              }}
            >
              Clear Shopping Cart
            </button>
            {/* <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1> */}
          </div>
        ) : (
          <h1 className="text-lg font-bold">Your cart is empty</h1>
        )}
        {cartItems.length > 0 && (
          <div className="container flex justify-end">
            <div className=" text-end">
              <h1 className="text-lg font-bold ">Total: ${getCartTotal()}</h1>
              <button className="bg-[#286F6C] text-white py-2 px-12 rounded">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    )
  );
}
