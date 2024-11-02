import { Globals } from "../../globals";

type IBanner = {
  img: string;
  alt?: string;
};

const Banner = (props: IBanner) => {
  return (
    <>
      <section className="w-full flex items-center justify-center overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 bg-gradient-to-r from-zinc-100 to-blue-200 py-24 lg:py-44">
          <img
            className="drop-shadow-2xl h-20 md:h-32 lg:h-52"
            src={Globals.img.logo}
            alt="Oliva Metal"
          />
          <span className="relative text-zinc-400 text-xs text-center md:text-left lg:text-lg w-2/3 md:w-1/3">
            A <span className="text-blue-400 font-semibold">Oliva Metal </span>
            oferece soluções de alta precisão em criação e manutenção de
            ferramentas, com foco em qualidade, desempenho e durabilidade para
            maximizar a produtividade dos clientes.
          </span>
        </div>
      </section>
    </>
  );
};

export default Banner;
