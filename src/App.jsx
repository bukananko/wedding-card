import Hero from "./components/Hero";
import Info from "./components/Info";

function App() {
  return (
    <>
      <main className="h-screen md:mx-56 relative bg-[url('/awan.jpg')] bg-no-repeat flex justify-center items-center overflow-hidden">
        <div className="absolute -top-10 -right-20">
          <img src="bunga4.png" alt="deco" className="w-max h-max" />
        </div>

        <div className="flex justify-center items-center flex-col gap-2">
          <h2 className="text-2xl font-serif z-50">The Wedding of</h2>
          <h1 className="font-dancingscript text-5xl pr-20 font-bold">Iqbal</h1>
          <p className="font-dancingscript text-2xl">dan</p>
          <h1 className="font-dancingscript text-5xl pl-28 font-bold">
            Elaina
          </h1>
          <p className="font-serif">EVERYDAY</p>
          <p className="font-bold">17|10|3000</p>
          <img
            src="bunga3.png"
            alt="deco"
            width={200}
            height={200}
            className="my-5"
          />

          <p className="font-serif px-44 text-center z-50">
            Kepada Yth. Bapak/Ibu/Saudara/i Di Tempat
          </p>
        </div>

        <div className="absolute rotate-180 -left-28 md:-left-20 -bottom-10">
          <img src="bunga4.png" alt="deco" className="w-max h-max" />
        </div>
      </main>

      <Hero />
      <Info />
    </>
  );
}

export default App;
