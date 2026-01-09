"use client";
import {motion} from 'motion/react';

const HomeHero = () => {
  return (
    <div className="flex flex-col"><div className="relative w-full min-h-screen overflow-hidden">
        <img
          // src="//twopagescurtains.com/cdn/shop/files/2560-1089-new-year-banner.webp?v=1767172480&width=1920 1920w"
          src="/curtains/curtain-blue.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 flex h-screen flex-col justify-center gap-3 px-5 pt-32 pb-16 text-yellow-500 font-serif sm:px-10 sm:pt-36 lg:px-16 lg:pt-90 mt-15"
        >
          <h1 className="text-4xl font-bold lg:text-6xl">Performance</h1>
          <h1 className="text-4xl font-bold lg:text-6xl">in every step</h1>
          <p className="mt-2 text-sm text-zinc-300 lg:text-lg">
            Form function and attitude on repeat
          </p>
          <button className="group relative mt-4 inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-4 py-2 font-bold text-black duration-500 h-10 w-26">
            <span className="translate-y-0 transition-transform duration-300 group-hover:-translate-y-[190%]">
              Shop all
            </span>
            <span className="absolute translate-y-[156%] transition-transform duration-300 group-hover:translate-y-0">
              Shop all
            </span>
          </button>
        </motion.div>
      </div></div>
  )
}

export default HomeHero