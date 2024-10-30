import ServicesItem from "./services-item";
import Division from "../division/division";
import ServicesExplain from "./services-explain";
import { Globals } from "../../globals";

const Services = () => {
  return (
    <>
      <Division
        title="Serviços"
        sub="Técnicas de usinagem"
      ></Division>
      <section className="flex flex-wrap mb-8 gap-4 px-4 w-full">
        <ServicesItem
          img={Globals.img.img3}
          title="Qualidade"
          sub="Materiais de alto padrão."
        ></ServicesItem>
        <ServicesItem
          img={Globals.img.img6}
          title="Eficiência"
          sub="Rapidez com precisão."
        ></ServicesItem>
        <ServicesItem
          img={Globals.img.img1}
          title="Garantia"
          sub="Confiabilidade assegurada."
        ></ServicesItem>
        <ServicesItem
          img={Globals.img.img4}
          title="Comprometimento"
          sub="Foco total no cliente."
        ></ServicesItem>
      </section>
      <div className="init-left">
        <ServicesExplain
          img={Globals.img.mig}
          shadow="drop-shadow-md"
          direction=""
          title="Solda MIG"
          text="Serviço de soldagem de alta precisão para unir metais com resistência e acabamento de qualidade."
        ></ServicesExplain>
      </div>
      <div className="init-right">
        <ServicesExplain
          img={Globals.img.fresa}
          shadow="drop-shadow-md"
          direction="flex-row-reverse"
          title="Fresa"
          text="Usinagem de peças com detalhes complexos e precisão milimétrica, garantindo encaixes perfeitos."
          textDirection="text-right"
        ></ServicesExplain>
      </div>
      <div className="init-left">
        <ServicesExplain
          img={Globals.img.torno}
          shadow="drop-shadow-md"
          direction=""
          title="Torno"
          text="Torneamento de peças cilíndricas para acabamentos finos e alta precisão em diâmetros variados."
        ></ServicesExplain>
      </div>
    </>
  );
};

export default Services;
