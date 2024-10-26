type IBanner = {
  img: string;
  alt?: string;
};

const Banner = (props: IBanner) => {
  return (
    <>
        <section className="relative w-screen h-[300px] lg:h-[500px] flex items-center justify-center overflow-hidden mb-2">
          <div className="h-full w-full absolute bg-gradient-to-r from-cyan-400 to-blue-500" />
          <div className="flex flex-col items-center justify-center w-2/3 lg:w-1/3 drop-shadow-lg">
            <h1 className="relative font-bold mb-4 text-2xl lg:text-5xl text-zinc-800">
              Text example
            </h1>
            <span className="relative text-zinc-800 text-sm lg:text-lg text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
              earum natus quis quaerat harum quo doloremque nisi! Assumenda at
              sit quas eaque ex perferendis voluptate beatae doloremque! Neque,
              dignissimos mollitia?
            </span>
          </div>
          <div className="top-[-150px] left-[-150px] h-96 w-96 rounded-full bg-gray-600 opacity-20 absolute blur-2xl"></div>
          <div className="bottom-[-150px] right-[-150px] h-96 w-96 rounded-full bg-gray-600 opacity-20 absolute blur-2xl"></div>
        </section>
    </>
  );
};

export default Banner;
