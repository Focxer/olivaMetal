import Banner from "../components/banner/banner";
import { Header } from "../components/header/header";
import Maps from "../components/maps/maps";
import Services from "../components/services/services";
import AboutUs from "../components/aboutUs/aboutUs";
import Observer from "../functions/Observer";
import "../functions/Observer.css";
import Contact from "../components/contact/contact";
import Customers from "../components/customers/customers";
import resetScroll from "../functions/resetScroll";
import Footer from "../components/footer/footer";

export const HomePage = () => {
  Observer();
  resetScroll();
  return (
    <div className="mb-24">
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Customers></Customers>
      <div className="mb-8">
        <Maps></Maps>
      </div>
      <Contact></Contact>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
