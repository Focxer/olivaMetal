import { Header } from "../components/header/header";
import Services from "../components/services/services";
import Observer from "../functions/Observer";
import resetScroll from "../functions/resetScroll";

export const ServicesPage = () => {
  Observer();
  resetScroll();
  return (
    <div className="mb-24">
      <Header></Header>
      <Services></Services>
    </div>
  );
};

export default ServicesPage;
