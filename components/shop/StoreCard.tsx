import { CurtainType } from "@/data/curtain";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import Link from "next/link";
import React, { useState } from "react";


const StoreCard = ({ curtain }: { curtain: CurtainType }) => {
  if (!curtain) return null;
  const [hover, isHovered] = useState<boolean>(false);

  return (
    <div className="flex flex-col font-[DM_Sans]">
      <Link href={`/${curtain.id}`} className="block">
        <div
          onMouseEnter={() => isHovered(true)}
          onMouseLeave={() => isHovered(false)}
          className="bg-[#F5F5F5] h-[60vw] lg:h-[36vw] w-[45vw] lg:w-[26vw] items-center rounded-2xl lg:px-5 cursor-pointer overflow-hidden relative group"
        >
          <div className="justify-between items-center flex p-3 lg:py-5 relative z-10">
            <div
              className={`${curtain.tag === "New"
                ? "bg-blue-600"
                : curtain.tag === "Popular"
                  ? "bg-black"
                  : "bg-red-600"
                } text-white w-min px-3 py-1 rounded-full text-xs lg:text-sm`}
            >
              {curtain.tag}
            </div>
            <div className="bg-white p-2 rounded-full hover:bg-zinc-300 transition-colors">
              <Icon icon="tdesign:heart" />
            </div>
          </div>
          <div className="relative w-full h-3/4 px-3">
            <img
              src={hover ? curtain.image.back : curtain.image.side}
              alt={curtain.name}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-1.5rem)] h-[80%] object-cover rounded-2xl transition-all duration-300"
            />
          </div>
          {hover && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute bottom-5 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
            >
              <p className="text-sm text-gray-700 line-clamp-2">{curtain.desc}</p>
            </motion.div>
          )}
        </div>
      </Link>
      <Link href={`/${curtain.id}`} className="text-black mt-3 block">
        <h1 className="font-bold text-base lg:text-lg">{curtain.name}</h1>
        <div className="flex items-center gap-2 mt-1">
          {curtain.discountedPrice ? (
            <>
              <p className="font-semibold text-lg text-red-600">€{curtain.discountedPrice}</p>
              <p className="text-sm text-gray-500 line-through">€{curtain.price}</p>
            </>
          ) : (
            <p className="font-semibold text-lg">€{curtain.price}</p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default StoreCard;
