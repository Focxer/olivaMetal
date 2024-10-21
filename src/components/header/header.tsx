import { Instagram, Mail, Phone } from "lucide-react";
import React from "react";
import logo from "../../assets/logo.png";

function Header() {
  return (
    /* O header precisa mudar quando o tamanho da tela for menor que 768 */
    /* Colocar menu hamburger */
    
    /* O header precisa mudar quando o tamanho da tela for menor que 768 */
    /* Colocar menu hamburger */
    
    /* O header precisa mudar quando o tamanho da tela for menor que 768 */
    /* Colocar menu hamburger */
   
    /* O header precisa mudar quando o tamanho da tela for menor que 768 */
    /* Colocar menu hamburger */
    
    /* O header precisa mudar quando o tamanho da tela for menor que 768 */
    /* Colocar menu hamburger */

    <header className="bg-zinc-700 w-full shadow-lg">
      <div className="flex justify-between items-center p-4 border-b-[1px] mb-4">
        {/* Contato */}
        <section className="flex gap-6 text-sm text-zinc-200">
          <div>
            <a
              className="flex gap-1 items-center"
              href="mailto:contato@empresa.com"
            >
              <Mail className="h-4 md:h-5" />
              <span>contato@empresa.com</span>
            </a>
          </div>
          <div>
            <a
              className="flex gap-1 items-center"
              href="https://wa.me/5511995239527?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os."
              target="_blank"
            >
              <Phone className="h-4 md:h-5" />
              <span>(11)99523-9527</span>
            </a>
          </div>
        </section>

        {/* Socials */}
        <section className="flex gap-6 text-sm text-zinc-200">
          <div>
            <a
              className="flex items-center gap-1"
              href="https://www.instagram.com/olivametal"
              target="_blank"
            >
              <Instagram className="h-5" />
              <span>@olivametal</span>
            </a>
          </div>
        </section>
      </div>

      <div className="flex justify-around items-center mb-2">
        {/* Título da esquerda */}
        <div className="flex justify-center items-center">
          <img className="max-h-[100px] drop-shadow-lg" src={logo} alt="Logo" />
          <div className="flex flex-col lg:text-2xl text-zinc-400 font-semibold">
            <span>Precisão e inovação em</span>
            <span>cada detalhe</span>
          </div>
        </div>

        {/* Navbar */}
        <nav className="text-sm lg:text-lg flex gap-4 lg:gap-8 text-zinc-100 font-bold">
          <span className="hover:text-zinc-400 hover:cursor-pointer transition-all">
            Inicio
          </span>
          <span className="hover:text-zinc-400 hover:cursor-pointer transition-all">
            Serviços
          </span>
          <span className="hover:text-zinc-400 hover:cursor-pointer transition-all">
            Sobre nós
          </span>
          <span className="hover:text-zinc-400 hover:cursor-pointer transition-all">
            Contato
          </span>
        </nav>
      </div>
    </header>
  );
}

export default Header;
