import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="bg-slate-900 text-slate-100 py-16">
      <Image
        src="/dahih-al-dofaa-website/logo.svg"
        alt="hero"
        className="mx-auto"
        width={200}
        height={200}
        style={{
          maxWidth: "50%",
          maxHeight: "50%",
        }}
      />
      <div className="container mx-auto px-4 mt-16 max-w-[80%] text-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-6">Dahih Al-Dofaa</h1>
          <p className="text-lg mb-10 w-4/5">
            Personalized AI assistant for university students who answers from
            the students&apos; slides, textbooks, and notes.
          </p>
          <div className="flex mt-4 flex-wrap justify-around w-3/5">
            <a
              href="https://github.com/ibrahimhabibeg/Dahih-Al-Dofaa/releases/latest/download/dahih-al-dofaa.Setup.exe"
              className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded transition my-2 w-56"
              target="_blank"
            >
              Download for Windows
            </a>
            <a
              href="https://github.com/ibrahimhabibeg/Dahih-Al-Dofaa/releases/latest/download/dahih-al-dofaa_amd64.deb"
              className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded transition my-2 w-56"
              target="_blank"
            >
              Download for Ubuntu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
