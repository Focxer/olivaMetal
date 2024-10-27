import Banner from "../components/banner/banner";
import { Header } from "../components/header/header";
import Maps from "../components/maps/maps";
import Services from "../components/services/services";
import AboutUs from "../components/aboutUs/aboutUs";
import Observer from "../functions/Observer";
import "../functions/Observer.css";
import Contact from "../components/contact/contato";

export const HomePage = () => {
  Observer();
  return (
    <div className="mb-24">
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Maps></Maps>
      <Contact></Contact>
      <AboutUs></AboutUs>
    </div>
  );
};

export default HomePage;
