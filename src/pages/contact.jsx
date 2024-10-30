import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import { Header } from "../components/header/header";
import Maps from "../components/maps/maps";
import Observer from "../functions/Observer";
import resetScroll from "../functions/resetScroll";

export const ContactPage = () => {
  Observer();
  resetScroll();
  return (
    <div className="">
      <Header></Header>
      <Contact></Contact>
      <Maps></Maps>
      <Footer></Footer>
    </div>
  );
};

export default ContactPage;
