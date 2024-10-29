type IDivision = {
  title: string;
  sub: string;
};

const Division = (props: IDivision) => {
  return (
    <>
      <section className="w-full p-6 lg:p-12 flex flex-col items-center justify-center mt-4">
        <div className="w-2/3 md:w-1/3 flex flex-col items-center justify-center">
          <h1 className="text-zinc-600 font-bold text-lg lg:text-2xl border-b-4">
            {props.title}
          </h1>
          <span className="text-xs md:text-lg text-center text-zinc-400">
            {props.sub}
          </span>
        </div>
      </section>
    </>
  );
};

export default Division;
