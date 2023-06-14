import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import getSong from "../service/getSong";

const Cover = () => {
  const [song, setSong] = useState("");

  useEffect(() => {
    getSong((src) => {
      setSong(src);
    });
  }, []);

  return (
    <>
      <main className="min-h-screen md:mx-56 relative bg-[url('/awan.jpg')] bg-no-repeat flex justify-center items-center overflow-hidden flex-col gap-10">
        <div className="absolute -top-10 -right-20">
          <img src="bunga4.png" alt="deco" className="w-max h-max" />
        </div>

        <div className="flex justify-center items-center flex-col gap-10 text-center">
          <h2 className="text-2xl font-serif z-50">Undangan Pernikahan</h2>
          <h1 className="font-dancingscript text-5xl font-bold">
            Iqbal & Elaina
          </h1>
          <p className="font-serif px-4 text-center z-50 text-gray-600">
            Tanpa mengurangi rasa hormat, kami bermaksud mengundang Anda untuk
            menghadiri acara pernikahan kami.
          </p>
        </div>

        <Link
          onClick={() => {
            const audio = new Audio(song);
            audio.play();
          }}
          to={"/iqbal-elaina"}
          className="flex bg-black p-2 rounded-full text-white font-serif px-3">
          <img src="open-mail.svg" alt="mail" />
          Buka Undangan
        </Link>
      </main>
    </>
  );
};

export default Cover;
