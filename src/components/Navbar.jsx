import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center container   py-5">
      <Link id="logo" className="font-bold text-[36px]">
        FurniShop
      </Link>
      <ul className="flex items-center gap-4">
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Products</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
