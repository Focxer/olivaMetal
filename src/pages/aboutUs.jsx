import AboutUs from "../components/aboutUs/aboutUs";
import { Header } from "../components/header/header";
import Observer from "../functions/Observer";
import resetScroll from "../functions/resetScroll";

export const AboutUsPage = () => {
  Observer();
  resetScroll();
  return (
    <div className="mb-24">
      <Header></Header>
      <AboutUs></AboutUs>
    </div>
  );
};

export default AboutUsPage;
