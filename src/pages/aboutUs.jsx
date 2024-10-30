import AboutUs from "../components/aboutUs/aboutUs";
import Footer from "../components/footer/footer";
import { Header } from "../components/header/header";
import WhatsApp from "../components/whatsapp/whatsapp";
import Observer from "../functions/Observer";
import resetScroll from "../functions/resetScroll";

export const AboutUsPage = () => {
  Observer();
  resetScroll();
  return (
    <>
      <Header></Header>
      <AboutUs></AboutUs>
      <Footer></Footer>
      <WhatsApp></WhatsApp>
    </>
  );
};

export default AboutUsPage;
