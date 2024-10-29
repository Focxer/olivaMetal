import { Mail, MapPin, Phone } from "lucide-react";
import ContactItem from "./contact-item";
import { customerAddress, customerEmail, customerPhone } from "../../customerVariables";
const Contact = () => {
  return (
    <section className="">
      <div className="">
        <h2 className="">Contato</h2>
        <ul>
          <ContactItem icon={<Mail />} text={customerEmail}></ContactItem>
          <ContactItem icon={<Phone />} text={customerPhone}></ContactItem>
          <ContactItem icon={<MapPin />} text={customerAddress}></ContactItem>
        </ul>
      </div>

      <div className="">
        <h2 className="">Deixe sua mensagem</h2>
        <form
          className=""
          action="https://formsubmit.co/maylonbento0107@gmail.com"
          method="post"
        >
          <input
            className=""
            type="text"
            id="nome"
            placeholder="Seu nome"
            required
          />{" "}
          <br />
          <input
            className=""
            type="email"
            id="email"
            placeholder="Seu email"
            required
          />{" "}
          <br />
          <textarea
            className=""
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
