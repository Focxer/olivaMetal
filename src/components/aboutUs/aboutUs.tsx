import React from "react";
import Division from "../division/division";
import Img from "../../assets/logo.png";

export const AboutUs = () => {
  return (
    <>
    <Division title="Oliva Metal" sub="Conheça um pouco mais sobre nós"></Division>
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-zinc-800">Sobre Nós</h2>
          <p className="mt-4 text-zinc-600">
            Conheça mais sobre nossa empresa, nossa missão e os valores que nos
            movem.
          </p>{" "}
          <br />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-8 md:mb-0 px-6">
            <h3 className="text 2xl font-semibold text-zinc-800 mb-4">Quem Somos</h3>
            <p className="text-zinc-600">
              Somos uma empresa dedicada a fornecer as melhores soluções para
              nossos clientes. Desde nossa fundação, buscamos inovação e
              excelência em tudo o que fazemos. Nossa equipe é apaixonada por
              entregar resultados que superem as expectativas, e estamos sempre
              prontos para abraçar novos desafios.
            </p>
            <p className="mt-4 text-zinc-600">
              Com anos de experiência no setor, construímos uma base sólida de
              confiança com nossos clientes, garantindo qualidade e eficiência
              em cada projeto.
            </p>

            <p className="mt-4 text-zinc-600">
              Nossa equipe é altamente qualificada e comprometida com os melhores resultados.
            </p>
          </div>

          
          <div className="md:w-1/2 px-6">
            <img className="rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            src={Img}
            alt="Oliva Metal"/>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center py-12">
            <ul>
              <p className="2 mb-8 md:mb-0 px-6">Dono:</p>
              <p className="2 mb-8 md:mb-0 px-6">Fundador:</p>
            </ul>
        </div>




      </section>
    </>
  );
};

export default AboutUs;
