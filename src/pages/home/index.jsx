import Header from "./Header";
import Footer from "../../components/Footer";
import "./home.css";
import AboutService from "./AboutService";
import AboutStore from "./AboutStore";

const Home = () => {
  return (
    <>
      <Header />
      <AboutService />
      <AboutStore />
      <Footer />
    </>
  );
};
export default Home;
