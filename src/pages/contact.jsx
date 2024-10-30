import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import { Header } from "../components/header/header";
import Maps from "../components/maps/maps";
import WhatsApp from "../components/whatsapp/whatsapp";
import Observer from "../functions/Observer";
import resetScroll from "../functions/resetScroll";

export const ContactPage = () => {
  Observer();
  resetScroll();
  return (
    <>
      <Header></Header>
      <Contact></Contact>
      <Maps></Maps>
      <Footer></Footer>
      <WhatsApp></WhatsApp>
    </>
  );
};

export default ContactPage;
