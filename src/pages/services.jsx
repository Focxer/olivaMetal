import Footer from "../components/footer/footer";
import { Header } from "../components/header/header";
import Services from "../components/services/services";
import Observer from "../functions/Observer";
import resetScroll from "../functions/resetScroll";

export const ServicesPage = () => {
  Observer();
  resetScroll();
  return (
    <div className="">
      <Header></Header>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default ServicesPage;
