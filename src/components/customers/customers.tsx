import { Globals } from "../../globals";
import Division from "../division/division";
import CustomersItem from "./customers-item";

function Customers() {
  return (
    <div className="w-screen">
      <Division title="Avaliações" sub="Nossos clientes"></Division>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 lg:gap-8 px-4">
        <CustomersItem
          img={Globals.img.customer1}
          name="Cliente 1"
          description="Fiquei impressionado com a precisão e o acabamento das peças usinadas. Profissionais competentes e prazos cumpridos!"
          initialRating={5}
        ></CustomersItem>
        <CustomersItem
          img={Globals.img.customer2}
          name="Cliente 2"
          description="A equipe da Oliva Metal mostrou total domínio das máquinas e entregou exatamente o que pedi, com ótimo acabamento."
          initialRating={5}
        ></CustomersItem>
        <CustomersItem
          img={Globals.img.customer3}
          name="Cliente 3"
          description="Ótima experiência! Peças feitas com precisão, e os equipamentos de solda e usinagem são modernos. Recomendo!"
          initialRating={4}
        ></CustomersItem>
      </div>
    </div>
  );
}

export default Customers;
