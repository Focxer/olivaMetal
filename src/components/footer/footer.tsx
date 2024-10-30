import { Instagram, Mail, Phone } from "lucide-react";
import Logo from "../header/logo/logo";
import SocialsItem from "../header/socials/socials-item";
import FooterItem from "./footer-item";
import { Globals } from "../../globals";

const Footer = () => {
  return (
    <>
      <div className="bg-blue-200 h-16 w-full flex justify-between items-center px-8">
        <h1 className="text-zinc-600 font-semibold text-xl">
          <span className="text-blue-400">Precisão e Inovação</span> em cada
          detalhe
        </h1>
        <div className="flex gap-4">
          <SocialsItem
            link={Globals.customer.instagramLink}
            target="_blank"
            icon={<Instagram className="text-zinc-800 font-bold" />}
          />
          <SocialsItem
            link={`mailto:${Globals.customer.email}`}
            target="_blank"
            icon={<Mail className="text-zinc-800 font-bold" />}
          />
          <SocialsItem
            link={`https://wa.me/55${Globals.customer.phone.replaceAll(
              /[()-]/g,
              ""
            )}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.`}
            target="_blank"
            icon={<Phone className="text-zinc-800 font-bold" />}
          />
        </div>
      </div>
      <div className="bg-slate-800 bg-opacity-80 w-full py-52 flex items-center justify-around">
        <ul>
          <FooterItem text="Inicio" link={Globals.routes.home}></FooterItem>
        </ul>
        <ul></ul>
        <ul></ul>
      </div>
    </>
  );
};

export default Footer;
