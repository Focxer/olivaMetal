import Banner from "../components/banner/banner";
import { Header } from "../components/header/header";
import Services from "../components/services/services";
import "../index.css";

export const Home = () => {
  return (
    <div className="mb-24">
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
    </div>
  );
};
