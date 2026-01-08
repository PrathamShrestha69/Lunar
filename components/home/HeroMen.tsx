import React from "react";
import CardBg from "../CardBg";
import curtain from "@/data/curtain";


const HeroMen = () => {
  const selectedCurtain = curtain.find((item) => item.name === "Stefana Silver") || curtain[0];

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className="bg-[#F5F5F5] flex-1 flex items-center justify-center py-5">
        <CardBg curtain={selectedCurtain} />
      </div>
      <div
        className="relative flex-1 bg-cover bg-center min-h-[65vh] lg:min-h-screen"
        style={{
          backgroundImage:
            "url('//twopagescurtains.com/cdn/shop/files/Birkin_Velvet_1.webp?v=1699264033')",
        }}
      >
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-4 text-white text-center">
          <p className="text-sm font-medium tracking-wide text-zinc-200">
            Dark Collection
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            DARK COLLECTION
          </h2>
          <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition duration-300">
            <span className="block translate-y-0 transition duration-300 group-hover:-translate-y-full group-hover:opacity-0">
              Shop Dark
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              Shop Dark
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroMen;
