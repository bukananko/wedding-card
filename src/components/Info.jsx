import { useState, useEffect } from "react";

const getTimeLeft = () => {
  const coundownTarget = new Date("3000-10-17T23:59:59");

  const total = coundownTarget - new Date();
  const tahun = Math.floor(total / (1000 * 60 * 60 * 24 * 365));
  const jam = Math.floor((total / (1000 * 60 * 60)) % 24);
  const menit = Math.floor((total / (1000 * 60)) % 60);
  const detik = Math.floor((total / 1000) % 60);

  return {
    tahun,
    jam,
    menit,
    detik,
  };
};

const Info = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:mx-56 relative bg-[url('/awan.jpg')] bg-no-repeat overflow-hidden bg-center p-4 md:px-56 flex justify-center items-center flex-col text-center gap-10">
      <div className="absolute -top-20 -right-20">
        <img src="bunga4.png" alt="deco" width={450} />
      </div>

      <div>
        <h1 className="font-serif font-bold text-2xl">Akad Nikah</h1>
        <p className="text-gray-600">October 17, 3000</p>
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-2 z-50">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43496.83376816512!2d6.75738763379072!3d47.04901896263038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478de44584e18439%3A0xcb49fa33069c3156!2s2314%20La%20Sagne%2C%20Switzerland!5e0!3m2!1sen!2sid!4v1686586122545!5m2!1sen!2sid"
          className="h-96 rounded-xl w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>

        <button
          type="button"
          className="bg-black text-white rounded-full text-xs flex justify-center items-center pr-2 pl-1 py-1">
          <img src="location.svg" alt="Location" />
          <a href="https://goo.gl/maps/ZSrNYrF7bgZYgzABA" target="_blank">
            Lihat Lokasi
          </a>
        </button>
      </div>

      <div className="flex justify-between w-full items-center gap-2">
        {Object.entries(timeLeft).map((value) => {
          return (
            <p
              key={value}
              className="capitalize font-bold bg-black/5 p-2 rounded-md w-full">
              {value[1]} <br />
              {value[0]}
            </p>
          );
        })}
      </div>
    </section>
  );
};

export default Info;
