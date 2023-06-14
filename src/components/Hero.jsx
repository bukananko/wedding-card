const Hero = () => {
  return (
    <>
      <section className="py-24 md:mx-56 relative bg-[url('/awan.jpg')] bg-no-repeat overflow-hidden bg-bottom p-4 md:px-56 flex justify-center items-center flex-col text-center gap-10">
        <div className="absolute -rotate-90 -top-20 -left-36 md:-left-20">
          <img src="bunga4.png" alt="deco" width={450} />
        </div>

        <div className="z-50">
          <h1 className="text-2xl font-serif font-semibold">
            Assalamu’alaikum Wr. Wb.
          </h1>
          <h2 className="text-gray-500">
            Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala,
            insyaaAllah kami akan menyelenggarakan acara pernikahan :
          </h2>
        </div>

        <div className="flex gap-4">
          <img
            src="beik.png"
            alt="pengantin pria"
            width={150}
            height={150}
            className="aspect-square object-cover object-top rounded-full"
          />

          <div className="flex justify-center items-center">
            <img src="cincin-bg.png" alt="Love" width={100} height={100} />
          </div>

          <img
            src="elaina.png"
            alt="pengantin wanita"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>

        <div className="z-50">
          <h3 className="font-dancingscript text-5xl font-bold">Iqbal</h3>
          <p className="text-gray-600">
            Putra dari <br />
            Bapak Iqbal & Ibu Iqbal
          </p>

          <p className="font-bold font-serif my-4 text-2xl">&</p>

          <h3 className="font-dancingscript text-5xl font-bold">Elaina</h3>
          <p className="text-gray-600">
            Putri dari <br />
            Bapak Elaina & Ibu Elaina
          </p>
        </div>

        <div className="absolute rotate-90 -bottom-80 md:-bottom-64 -right-32">
          <img src="bunga2.png" alt="deco" width={450} />
        </div>
      </section>
    </>
  );
};

export default Hero;
