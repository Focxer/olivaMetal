import Contact from "../components/contact/contato";
import { Header } from "../components/header/header";
import Maps from "../components/maps/maps";

export const ContactPage = () => {
  return (
    <div className="mb-24">
      <Header></Header>
      <Contact></Contact>
      <Maps></Maps>
    </div>
  );
};

export default ContactPage;
