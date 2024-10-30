import AboutUs from "../components/aboutUs/aboutUs";
import Footer from "../components/footer/footer";
import { Header } from "../components/header/header";
import Observer from "../functions/Observer";
import resetScroll from "../functions/resetScroll";

export const AboutUsPage = () => {
  Observer();
  resetScroll();
  return (
    <div className="">
      <Header></Header>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
};

export default AboutUsPage;
