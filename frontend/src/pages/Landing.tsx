const Landing = () => {
  return (
    //este div no lo puedes borrar, puedes borrar sus clases y poner las tuyas, pero no lo borres
    <div className="w-screen h-screen text-center flex flex-col justify-center items-center">
      <div className="px-10 py-6 shadow-xl w-fit mx-auto rounded-xl bg-black hover:scale-[1.02] text-white duration-200 cursor-pointer max-w-[800px] hover:text-black hover:bg-white hover:border-2 border-black">
        <h1 className="text-[80px] font-bold font-mono">Hola Diego</h1>
        <p className="text-lg">
          Esta es la página donde vas a empezar, tómate la libertad de borrar
          todo lo que puse. Una última cosa que quiero señalarte es que siempre
          debes contener toda tu página en un div padre; te lo voy a señalar en
          el código, este div no lo puedes borrar.
        </p>
      </div>
      <a
        href="./profile"
        className="px-6 py-4 border-2 border-black rounded-lg hover:bg-black hover:text-white duration-200 cursor-pointer mt-10"
      >
        Ir a la pagina del Kamila 🥶
      </a>
    </div>
  );
};

export default Landing;
