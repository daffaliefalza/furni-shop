import { Link } from "react-router-dom";
import Products from "../pages/products";
const Navbar = () => {
  return (
    <nav className="flex flex-col justify-between items-center container py-5 md:flex md:flex-row">
      <Link id="logo" className="font-bold text-[36px]">
        FurniShop
      </Link>
      <ul className="flex items-center gap-12">
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link to={"/products"}>Products</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
