import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import ErrorPage from "./pages/error";
import SingleProduct from "./pages/detail-products";
import Chatbot from "./pages/chatbot";
import Contact from "./pages/contact";
import About from "./pages/about";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Products />} path="/products" />
        <Route element={<SingleProduct />} path="/products/:id" />
        <Route element={<Chatbot />} path="/chatbot" />
        <Route element={<ErrorPage />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
