import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
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
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { name, price, description, category } = product;
  return (
    <div className="product-detail">
      <p>{id}</p>
      <img src={product.images[0].url} alt={name} className="product-image" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <span className="product-price">${price}</span>
        <p className="product-description">{description}</p>
        <p className="product-description">{category}</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default SingleProduct;
