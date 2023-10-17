import Header from "./Header";
import Footer from "../../components/Footer";
import "./home.css";
import AboutService from "./AboutService";
import AboutStore from "./AboutStore";
import AboutFurniture from "./AboutFurniture";
import FeaturedProducts from "./FeaturedProducts";
import Testimonial from "./Testimonial";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Header />
      <AboutService />
      <AboutStore />
      <AboutFurniture />
      <FeaturedProducts />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
