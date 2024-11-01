import React from "react";
import Division from "../division/division";
import img from "../../assets/images/logo.png"

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  { year: "2021", title: "Fundação", description: "A nossa jornada começou com uma pequena equipe e uma grande visão de transformar o mercado." },
  { year: "2022", title: "Crescimento Rápido", description: "Expandimos nossos serviços e dobramos a equipe para atender a demanda crescente." },
  { year: "2023", title: "Inovação", description: "Lançamos novos produtos e alcançamos reconhecimento no mercado pela nossa inovação." },
  { year: "2024", title: "Presente e Futuro", description: "Hoje, continuamos nossa jornada com novas metas e desafios para o futuro." },
];

const AboutUs: React.FC = () => {
  return (
    <>
    <Division title="Oliva Metal" sub="Conheça um pouco mais sobre nós"></Division>
    <section className="bg-zinc-50 w-full">
      <div className="max-w-3xl mx-auto text-center p-12 ">
        {/* Título */}
        <h1 className="text-2xl font-bold text-zinc-600 mb-8">Sobre Nós</h1>
        
        {/* Introdução */}
        <p className="text-sm md:text-base text-gray-600 mb-6">
          Somos uma empresa dedicada a fornecer as melhores soluções para nossos clientes. Desde nossa fundação, buscamos inovação e excelência em tudo o que fazemos. Nossa equipe é apaixonada por entregar resultados que superem as expectativas, e estamos sempre prontos para abraçar novos desafios.
        </p>
        
        {/* Imagem */}
        <div className="flex justify-center mb-6">
          <img src={img} alt="Nossa Equipe" className="w-full max-w-md drop-shadow-lg" />
        </div>
        
        {/* Texto adicional */}
        <p className="text-sm md:text-base text-gray-600 mb-10">
          Com uma equipe altamente qualificada e apaixonada pelo que faz, trabalhamos diariamente para criar soluções que transformam vidas e impulsionam negócios. Nosso compromisso é sempre superar as expectativas dos nossos clientes, trazendo inovação e tecnologia para o mercado.
        </p>
        
      </div>
    </section>

      <Division title="Linha do Tempo" sub="Nossa história"></Division>
        <div className="w-full">
        {/* Linha do tempo */}
        <div className="relative p-5">
          <div className="absolute inset-y-0 left-1/2 w-1 bg-gray-300 transform -translate-x-1/2"></div>
          
          {/* Itens da linha do tempo com posição intercalada */}
          <div className="space-y-8 flex flex-col justify-center items-center">
            {timelineData.map((item, index) => (
              <div
                key={item.year}
                className={`md:w-1/2 w-full z-10 ${
                  index % 2 === 0 ? 'text-right ml-1/2' : 'text-left mr-1/2'
                }`}
              >
                <div className="inline-block bg-gradient-to-r from-zinc-100 to-blue-200 rounded-lg p-4 shadow-md max-w-xs">
                  <div className="text-lg font-bold text-gray-700">{item.year}</div>
                  <h3 className="text-gray-700 font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
    </>
  );
};

export default AboutUs;