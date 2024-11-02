import Division from "../division/division";
import ServicesExplain from "../services/services-explain";
import { Globals } from "../../globals";

const Maps = () => {
  return (
    <>
      <Division
        title="Onde estamos"
        sub="Venha conhecer mais de perto"
      ></Division>
      <iframe
        src={Globals.customer.maps}
        className="h-[300px] lg:h-[400px] mb-8 w-full"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="init-right mix-blend-multiply">
        <ServicesExplain
          img={Globals.img.maps}
          direction="flex-row-reverse"
          textDirection="text-right"
          title="Onde nos encontrar"
          text={Globals.customer.address}
        ></ServicesExplain>
      </div>
    </>
  );
};

export default Maps;
