import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex flex-col justify-between items-center container py-8 md:py-5 md:flex md:flex-row">
      <Link id="logo" className="font-bold text-[36px]" to={"/"}>
        FurniShop
      </Link>
      <ul className="flex items-center gap-5 md:gap-12">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/products"}>Products</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/chatbot"}>Ask Us</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
