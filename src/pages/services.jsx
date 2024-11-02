import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import Gallery from "../components/gallery/gallery";
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
      <Gallery></Gallery>
      <Services></Services>
      <div className="mt-12 -mb-24 w-full">
        <Contact></Contact>
      </div>
      <Footer></Footer>
      <WhatsApp></WhatsApp>
    </>
  );
};

export default ServicesPage;
