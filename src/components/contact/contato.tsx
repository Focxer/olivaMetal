import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section className="p-6 w-screen flex px-4 overflow-hidden gap-2">
      <div className="w-1/2 p-2 bg-zinc-200 border-r-2 border-zinc-400">
        <h2 className="text-blue-800">Contato</h2>
        <ul>
          <Mail></Mail>
          <li>Teste@gmail.com</li>
          <Phone></Phone>
          <li>Celular: (11) 94002-8922</li>
          <MapPin></MapPin>
          <li>Endereço: R.Exemplo, 1234 - SBC</li>
        </ul>
      </div>

      <div className="w-1/2 bg-zinc-200">
        <h2 className="text-blue-800">Deixe sua mensagem</h2>
        <form className="flex flex-col" action="https://formsubmit.co/maylonbento0107@gmail.com" method="post">
          <input
            className="p-2 sticky top-0"
            type="text"
            id="nome"
            placeholder="Seu nome"
            required
          />{" "}
          <br />
          <input
            className="p-2 sticky top-0"
            type="email"
            id="email"
            placeholder="Seu email"
            required
          />{" "}
          <br />
          <textarea
            className="p-2 sticky top-0"
            id="mensagem"
            cols={30}
            rows={5}
            placeholder="Sua mensagem"
            required
          ></textarea>
          <button className="w-0" type="submit" id="userSubmite">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
