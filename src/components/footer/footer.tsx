import { Instagram, Mail, Phone } from "lucide-react";
import Logo from "../header/logo/logo";
import SocialsItem from "../header/socials/socials-item";
import FooterItem from "./footer-item";
import { Globals } from "../../globals";
import FooterDev from "./footer-dev";

const Footer = () => {
  return (
    <div className="mt-24 w-full">
      <div className="bg-blue-200 h-16 w-full flex justify-between items-center px-8">
        <h1 className="w-1/2 text-zinc-600 font-semibold text-sm lg:text-xl">
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
      <div className="bg-slate-800 bg-opacity-80 w-full px-8 py-24 md:py-36 flex flex-col md:flex-row md:items-start gap-12 justify-around text-xs lg:text-base">
        <ul className="flex justify-center flex-col">
          <h1 className="text-blue-200 mb-4 font-semibold">Navegação</h1>
          <FooterItem text="Inicio" link={Globals.routes.home}></FooterItem>
          <FooterItem
            text="Serviços"
            link={Globals.routes.services}
          ></FooterItem>
          <FooterItem
            text="Sobre nós"
            link={Globals.routes.aboutUs}
          ></FooterItem>
          <FooterItem text="Contato" link={Globals.routes.contact}></FooterItem>
        </ul>
        <ul className="flex justify-center flex-col text-zinc-200 gap-2">
          <h1 className="text-blue-200 mb-4 font-semibold">Conecte-se</h1>
          <FooterItem
            icon={<Instagram className="h-5 lg:h-auto"></Instagram>}
            text={Globals.customer.instagramLabel}
            link={Globals.customer.instagramLink}
          ></FooterItem>
          <FooterItem
            icon={<Mail className="h-5 lg:h-auto"></Mail>}
            text={Globals.customer.email}
            link={`mailto:${Globals.customer.email}`}
          ></FooterItem>
          <FooterItem
            icon={<Phone className="h-5 lg:h-auto"></Phone>}
            text={Globals.customer.phone}
            link={`https://wa.me/55${Globals.customer.phone.replaceAll(
              /[()-]/g,
              ""
            )}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.`}
          ></FooterItem>
        </ul>
        <div className="flex flex-col gap-4 text-center text-zinc-200 order-last md:order-none">
          <Logo color="text-zinc-200"></Logo>
          <span>{Globals.customer.address}</span>
        </div>
      </div>
      <div className="flex justify-center items-center p-2 bg-slate-800 bg-opacity-90 text-zinc-200 text-xs">
        <span>
          2024 ©{" "}
          <FooterDev
            name="BrunoDev"
            link="https://focxer.github.io/Portfolio/"
          ></FooterDev>{" "}
          &{" "}
          <FooterDev
            name="Maylon Bento"
            link="https://github.com/MaylonBento"
          ></FooterDev>
        </span>
      </div>
    </div>
  );
};

export default Footer;
