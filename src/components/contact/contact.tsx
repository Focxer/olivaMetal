import { Mail, MapPin, Phone } from "lucide-react";
import ContactItem from "./contact-item";
import ContactInput from "./contact-input";
import { Globals } from "../../globals";
const Contact = () => {
  return (
    <section className="w-screen flex flex-col md:flex-row justify-center items-center gap-8 bg-zinc-50">
      <div className="py-16 px-8 md:px-2 flex-grow">
        <h1 className="text-2xl mb-4 md:text-right font-semibold text-zinc-600">
          Fale conosco!
        </h1>
        <ul>
          <ContactItem
            icon={<Mail />}
            text={Globals.customer.email}
          ></ContactItem>
          <ContactItem
            icon={<Phone />}
            text={Globals.customer.phone}
          ></ContactItem>
          <ContactItem
            icon={<MapPin />}
            text={Globals.customer.address}
          ></ContactItem>
        </ul>
      </div>

      <div className="px-4 bg-gradient-to-r from-zinc-100 to-blue-200 lg:px-8 h-full py-16 w-full md:w-1/2">
        <h1 className="text-2xl text-zinc-600 font-semibold mb-4">
          Deixe um recado
        </h1>
        <form
          className="flex flex-col gap-2 w-full lg:w-1/2"
          action={`https://formsubmit.co/${Globals.customer.email}`}
          method="post"
        >
          <ContactInput
            id="name"
            type="text"
            placeholder="Seu nome"
            required={true}
          ></ContactInput>
          <ContactInput
            id="email"
            type="email"
            placeholder="Email"
            required={true}
          ></ContactInput>
          <textarea
            className="bg-zinc-50 resize-none rounded-lg p-2"
            id="mensagem"
            cols={30}
            rows={5}
            placeholder="Olá, gostaria de fazer um orçamento..."
            required
          ></textarea>
          <button
            className="w-full bg-blue-300 p-4 rounded-lg text-zinc-100 font-semibold drop-shadow-lg hover:bg-blue-400 transition-all duration-300"
            type="submit"
            id="userSubmite"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
