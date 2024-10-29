import Contact from "../components/contact/contact";
import { Header } from "../components/header/header";
import Maps from "../components/maps/maps";
import Observer from "../functions/Observer";
import resetScroll from "../functions/resetScroll";

export const ContactPage = () => {
  Observer();
  resetScroll();
  return (
    <div className="mb-24">
      <Header></Header>
      <Contact></Contact>
      <Maps></Maps>
    </div>
  );
};

export default ContactPage;
