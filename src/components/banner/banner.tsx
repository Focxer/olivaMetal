import Img from "../../assets/logo.png";

type IBanner = {
  img: string;
  alt?: string;
};

const Banner = (props: IBanner) => {
  return (
    <>
      <section className="relative w-full h-[300px] lg:h-[500px] flex items-center justify-center overflow-hidden p-4">
        {/* Background color */}
        <div className="h-full w-full absolute bg-gradient-to-r from-zinc-100 to-blue-200" />
        <div className="flex flex-col md:flex-row items-center justify-center w-full drop-shadow-lg gap-4 px-4">
          <img
            className="drop-shadow-2xl h-20 md:h-32 lg:h-52"
            src={Img}
            alt="Oliva Metal"
          />
          <span className="relative text-zinc-400 text-xs text-center md:text-left lg:text-lg w-full md:w-1/3">
            A <span className="text-blue-400 font-semibold">Oliva Metal </span>
            oferece soluções de alta precisão em criação e manutenção de
            ferramentas, com foco em qualidade, desempenho e durabilidade para
            maximizar a produtividade dos clientes.
          </span>
        </div>

        {/* Balls on corners */}
        <div className="top-[-150px] left-[-150px] h-96 w-96 rounded-full bg-gray-200 opacity-20 absolute blur-2xl"></div>
        <div className="bottom-[-150px] right-[-150px] h-96 w-96 rounded-full bg-gray-400 opacity-20 absolute blur-2xl"></div>
      </section>
    </>
  );
};

export default Banner;
