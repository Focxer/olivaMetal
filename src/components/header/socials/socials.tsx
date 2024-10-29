import { Instagram, Mail, Phone } from "lucide-react";
import SocialsItem from "./socials-item";
import {
  customerEmail,
  customerInstagram_label,
  customerInstagram_link,
  customerPhone,
} from "../../../customerVariables";

const Socials = () => {
  return (
    <>
      <div className="w-full flex flex-col sm:flex-row items-center justify-between md:mx-4">
        {/* Left side */}
        <section className="flex gap-4 justify-start">
          <SocialsItem
            value={customerEmail}
            link={`mailto:${customerEmail}`}
            icon={<Mail />}
          />

          <SocialsItem
            link={`https://wa.me/55${customerPhone.replaceAll(
              /[()-]/g,
              ""
            )}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.`}
            target="_blank"
            value={customerPhone}
            icon={<Phone />}
          />
        </section>

        {/* Right side */}
        <section className="flex gap-4 justify-start sm:justify-end">
          <SocialsItem
            link={customerInstagram_link}
            target="_blank"
            icon={<Instagram />}
            value={customerInstagram_label}
          />
        </section>
      </div>
    </>
  );
};

export default Socials;
