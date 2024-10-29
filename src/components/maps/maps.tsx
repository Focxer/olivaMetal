import Division from "../division/division";
import maps from "../../assets/maps/maps.png";
import ServicesExplain from "../services/services-explain";
import { customerAddress } from "../../customerVariables";

const Maps = () => {
  return (
    <div className="w-screen">
      <Division
        title="Onde estamos"
        sub="Venha conhecer mais de perto"
      ></Division>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1025.3474946635595!2d-46.6089068682614!3d-23.678718703558225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce44937536ceeb%3A0xfa10a6739d679365!2sSenai%20Diadema%20-%20Manuel%20Garcia%20Filho!5e0!3m2!1spt-BR!2sbr!4v1729970172343!5m2!1spt-BR!2sbr"
        className="h-[300px] lg:h-[400px] w-screen mb-8"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="init-right mix-blend-multiply">
        <ServicesExplain
          img={maps}
          direction="flex-row-reverse"
          textDirection="text-right"
          title="Onde nos encontrar"
          text={customerAddress}
        ></ServicesExplain>
      </div>
    </div>
  );
};

export default Maps;
