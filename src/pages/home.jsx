import Banner from "../components/banner/banner";
import Contato from "../components/contact/contato";
import { Header } from "../components/header/header";
import Services from "../components/services/services";
import SobreNos from "../components/sobreNos/sobreNos";
import "../index.css";

export const Home = () => {
  return (
    <div className="mb-24">
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Contato></Contato>
      <SobreNos></SobreNos>
    </div>
  );
};
