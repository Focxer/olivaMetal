import ServicesItem from "./services-item";
import Img1 from "../../assets/carousel/1.png";
import Img2 from "../../assets/carousel/2.png";
import Img3 from "../../assets/carousel/3.png";
import Division from "../division/division";
import ServicesExplain from "./services-explain";

const Services = () => {
  return (
    <>
      <Division
        title="Serviços"
        sub="Técnicas de usinagem para garantir o seu resultado"
      ></Division>
      <section className="flex w-full flex-wrap mb-8">
        <ServicesItem
          img={Img1}
          title="Service 1"
          sub="Lorem ipsum dolor sit amet, ipsum dolor sit amet"
        ></ServicesItem>
        <ServicesItem
          img={Img2}
          title="Service 2"
          sub="Lorem ipsum dolor sit amet, ipsum dolor sit amet"
        ></ServicesItem>
        <ServicesItem
          img={Img3}
          title="Service 3"
          sub="Lorem ipsum dolor sit amet, ipsum dolor sit amet"
        ></ServicesItem>
        <ServicesItem
          img={Img1}
          title="Service 4"
          sub="Lorem ipsum dolor sit amet, ipsum dolor sit amet"
        ></ServicesItem>
      </section>
      <ServicesExplain
        img={Img1}
        direction=""
        title="Example"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloribus magnam nobis corporis assumenda, odit non animi, adipisci obcaecati quod consectetur voluptates facilis modi provident voluptas. Libero voluptas natus sapiente!"
      ></ServicesExplain>
      <ServicesExplain
        img={Img2}
        direction="flex-row-reverse"
        title="Example"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloribus magnam nobis corporis assumenda, odit non animi, adipisci obcaecati quod consectetur voluptates facilis modi provident voluptas. Libero voluptas natus sapiente!"
        textDirection="text-right"
      ></ServicesExplain>
      <ServicesExplain
        img={Img3}
        direction=""
        title="Example"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloribus magnam nobis corporis assumenda, odit non animi, adipisci obcaecati quod consectetur voluptates facilis modi provident voluptas. Libero voluptas natus sapiente!"
      ></ServicesExplain>
    </>
  );
};

export default Services;
