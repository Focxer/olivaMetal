import Carousel from "../components/carousel/carousel";
import { Header } from "../components/header/header";
import { Main } from "../components/main/main";
import "../index.css";

export const Home = () => {
  return (
    <>
      <Header></Header>
      <Carousel></Carousel>
      <Main></Main>
    </>
  );
};
