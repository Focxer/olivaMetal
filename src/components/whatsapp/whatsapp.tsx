import Whatsapp from "../../assets/whatsapp.png";
import { Globals } from "../../globals";

const WhatsApp = () => {
  return (
    <a
      className="fixed right-12 md:right-16 lg:right-24 xl:18 bottom-24"
      target="_blank"
      href={`https://wa.me/55${Globals.customer.phone.replaceAll(
        /[()-]/g,
        ""
      )}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.`}
    >
      <div className="relative group">
        <span className="absolute bg-slate-700 text-white py-2 px-4 rounded left-[-80px] bottom-16 opacity-0 group-hover:opacity-80 transition-all duration-200 whitespace-normal text-sm">
          Iniciar conversa...
        </span>
        <img
          src={Whatsapp}
          alt="whatsappIcon"
          className="rounded-full max-h-12 max-w-12 aspect-square drop-shadow-lg hover:scale-105 duration-200 transition-all cursor-pointer"
        />
      </div>
    </a>
  );
};

export default WhatsApp;
