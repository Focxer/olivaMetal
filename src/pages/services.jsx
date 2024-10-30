import Footer from "../components/footer/footer";
import { Header } from "../components/header/header";
import Services from "../components/services/services";
import WhatsApp from "../components/whatsapp/whatsapp";
import Observer from "../functions/Observer";
import resetScroll from "../functions/resetScroll";

export const ServicesPage = () => {
  Observer();
  resetScroll();
  return (
    <>
      <Header></Header>
      <Services></Services>
      <Footer></Footer>
      <WhatsApp></WhatsApp>
    </>
  );
};

export default ServicesPage;
