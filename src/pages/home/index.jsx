import Header from "./Header";
import Footer from "../../components/Footer";
import "./home.css";
import AboutService from "./AboutService";
import AboutStore from "./AboutStore";
import AboutFurniture from "./AboutFurniture";
import FeaturedProducts from "./FeaturedProducts";
import Testimonial from "./Testimonial";
import MailingList from "./MailingList";

const Home = () => {
  return (
    <>
      <Header />
      <AboutService />
      <AboutStore />
      <AboutFurniture />
      <FeaturedProducts />
      <Testimonial />
      <MailingList />
      <Footer />
    </>
  );
};
export default Home;
