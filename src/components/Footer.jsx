import { Link } from "react-router-dom";
import facebookicon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import twitterIcon from "../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#23262F] text-white ">
      <div className="container ">
        <div
          id="footer-header"
          className="py-6 md:flex md:justify-between md:items-center md:border-b-[1px] md:border-white"
        >
          <h3 className="font-bold text-[24px]">FurniShop</h3>
          <div
            id="social-media-footer"
            className="flex justify-around mt-7 md:flex md:items-center md:justify-center md:gap-5 md:mt-0"
          >
            <img
              src={instagramIcon}
              alt=""
              className="cursor-pointer w-5 "
              style={{
                filter:
                  "invert(100%) sepia(100%) saturate(1%) hue-rotate(198deg) brightness(101%) contrast(101%)",
              }}
            />
            <img
              src={facebookicon}
              alt=""
              className="cursor-pointer  w-5"
              style={{
                filter:
                  "invert(100%) sepia(100%) saturate(1%) hue-rotate(198deg) brightness(101%) contrast(101%)",
              }}
            />
            <img
              src={twitterIcon}
              alt=""
              className="cursor-pointer  w-5"
              style={{
                filter:
                  "invert(100%) sepia(100%) saturate(1%) hue-rotate(198deg) brightness(101%) contrast(101%)",
              }}
            />
          </div>
        </div>
        <div
          id="footer-grid-wrapper"
          className="grid grid-cols-2 gap-10 mt-7 md:grid-cols-5 md:leading-[2.2]"
        >
          <div>
            <h5 className="mb-4">Our Products</h5>
            <ul>
              <li>
                <Link>The support Suite</Link>
              </li>
              <li>
                <Link>The Sales Suite</Link>
              </li>
              <li>
                <Link>Support</Link>
              </li>
              <li>
                <Link>Guide</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4">Top Features</h5>
            <ul>
              <li>
                <Link>Ticketing System</Link>
              </li>
              <li>
                <Link>knowledge Base</Link>
              </li>
              <li>
                <Link>Comunity Forums</Link>
              </li>
              <li>
                <Link>Help Desk Software</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4">Resources</h5>
            <ul>
              <li>
                <Link>Product Support</Link>
              </li>
              <li>
                <Link>Request Demo</Link>
              </li>
              <li>
                <Link>Library</Link>
              </li>
              <li>
                <Link>Peoplepower Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4">Company</h5>
            <ul>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Press</Link>
              </li>
              <li>
                <Link>Investors</Link>
              </li>
              <li>
                <Link>Events</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4">Favourite Things</h5>
            <ul>
              <li>
                <Link>For Enterprise</Link>
              </li>
              <li>
                <Link>For Startups</Link>
              </li>
              <li>
                <Link>For Benchmark</Link>
              </li>
              <li>
                <Link>For Small Business</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-8">
          &copy; Copyright FurniShop | Developed By{" "}
          <a
            href="https://github.com/daffaliefalza"
            target="_blank"
            className="underline"
          >
            Andi Daffa Liefalza
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
