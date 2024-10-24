import { Instagram, Mail, Phone } from "lucide-react";
import SocialsItem from "./socials-item";

const Socials = () => {
  return (
    <>
      <div className="w-full flex flex-col sm:flex-row items-center justify-between">
        {/* Left side */}
        <section className="flex gap-4 justify-start">
          <SocialsItem
            value="contato@empresa.com"
            link="mailto:contato@empresa.com"
            icon={<Mail />}
          />

          <SocialsItem
            link="https://wa.me/5511995239527?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os."
            target="_blank"
            value="(11)99523-9527"
            icon={<Phone />}
          />
        </section>

        {/* Right side */}
        <section className="flex gap-4 justify-start sm:justify-end">
          <SocialsItem
            link="https://www.instagram.com/olivametal"
            target="_blank"
            icon={<Instagram />}
            value="@olivametal"
          />
        </section>
      </div>
    </>
  );
};

export default Socials;
