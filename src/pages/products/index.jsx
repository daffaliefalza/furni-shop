import Navbar from "../../components/Navbar";
import FetchedProducts from "./FetchedProducts";
import Filters from "./Filters";
import ProductHeader from "./ProductHeader";

const Products = () => {
  return (
    <>
      <Navbar />
      <ProductHeader />
      <div id="products-grid">
        <Filters />
        <FetchedProducts />
      </div>
    </>
  );
};
export default Products;
