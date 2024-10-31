import React from "react";
import Division from "../division/division";
import Img from "../../assets/logo.png";
import { Lightbulb, LucideLightbulb, Shield, ShieldPlus, StarIcon } from "lucide-react";
import img from "../../assets/images/customer.jpg"

export const AboutUs = () => {
  return (
    <div className="w-screen">
      <Division title="Oliva Metal" sub="Conheça um pouco mais sobre nós"></Division>
      <section className="bg-gray-100">
        <div className="container mx-auto px-6">
        
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-gray-800">Nossa História</h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center">
            
            <div className="md:mb-0 px-6">
                <p className="text-gray-600">
                  Somos uma empresa dedicada a fornecer as melhores soluções para nossos clientes. Desde nossa fundação, buscamos inovação e excelência em tudo o que fazemos. Nossa equipe é apaixonada por entregar resultados que superem as expectativas, e estamos sempre prontos para abraçar novos desafios.
                </p>

                <p className="mt-4 text-gray-600">
                  Com anos de experiência no setor, construímos uma base sólida de confiança com nossos clientes, garantindo qualidade e eficiência em cada projeto.
                </p>
                
                <div className="flex flex-col md:flex-row items-center py-12">
                  <ul>
                    <p className="2 mb-8 md:mb-0 px-6">Dono:</p>
                    <p className="2 mb-8 md:mb-0 px-6">Fundador:</p>
                  </ul>
                </div>
            </div>

            <div className="md:w-1/2 px-6">
              <img className="rounded-lg shadow-lg transition-all duration-300" src={img} alt="Nossa equipe"/>
            </div>

            <div className="md:w-1/2 px-6">
              <img className="rounded-lg shadow-lg transition-all duration-300" src={img} alt="Nossa equipe"/>
            </div>

          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-blue-200 rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl text-blue-500 mb-4">
                <ShieldPlus></ShieldPlus>
                <i className="fas fa-user-friends">DEDICAÇÃO</i>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Equipe Dedicada</h4>
              <p className="mt-2 text-gray-600">Nossa equipe é altamente qualificada e comprometida com os melhores resultados.</p>
            </div>
            
            
            <div className="bg-blue-200 rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl text-green-500 mb-4">
                <LucideLightbulb></LucideLightbulb>                
                <i className="fas fa-lightbulb">INOVAÇÃO</i>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Inovação Constante</h4>
              <p className="mt-2 text-gray-600">Buscamos sempre inovar para oferecer soluções criativas e eficientes.</p>
            </div>
            
            
            <div className="bg-blue-200 rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl text-yellow-200 mb-4">
                <StarIcon></StarIcon>
                <i className="fas fa-thumbs-up">SATISFAÇÃO</i>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Satisfação Garantida</h4>
              <p className="mt-2 text-gray-600">A satisfação dos nossos clientes é nossa prioridade máxima.</p>
            </div>
          </div>
        </div>


      </section>
    </div>
  );
};

export default AboutUs;
