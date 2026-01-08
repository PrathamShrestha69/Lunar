"use client";

import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isAnimating && (
          <motion.div
            key={pathname}
            className="fixed inset-0 z-[9999] flex pointer-events-none"
          >
            {/* Left Curtain */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="w-1/2 h-full bg-black"
            />

            {/* Right Curtain */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="w-1/2 h-full bg-black"
            />

            {/* Optional: Logo or text in the center during transition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: 0.2,
              }}
              className="fixed inset-0 flex items-center justify-center z-[10000]"
            >
              <Image
                src="/logo-white.png"
                alt="Logo"
                width={200}
                height={200}
                className="w-32 h-32 md:w-48 md:h-48 object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
