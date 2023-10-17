import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Products from "./pages/products";
import ErrorPage from "./pages/error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Products />} path="/products" />
        <Route element={<ErrorPage />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
