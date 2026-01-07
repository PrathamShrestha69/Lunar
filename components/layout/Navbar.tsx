"use client";
import React, { useEffect, useRef, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { motion } from "motion/react";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";
import { Icon } from "@iconify/react";
import { NavLink } from "@/data/NavLink";
import { Example } from "../AnimatedHamburgerButton";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);
  const lastY = useRef(0);

  const [scrolled, setScrolled] = useState<boolean>(false);

  const location = usePathname();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      if (Math.abs(delta) < 5) return;

      if (mobileMenuOpen) {
        setHidden(false);
        lastY.current = y;
        return;
      }

      if (y > 60 && delta > 1) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileMenuOpen]);

  const backgroundClass = mobileMenuOpen
    ? "bg-white text-black"
    : scrolled || !isHome
    ? "bg-black text-white shadow-md"
    : "bg-transparent text-white";

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 font-[DM_Sans] transition-transform transition-opacity duration-300 ${backgroundClass} ${
        hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      {/* Desktop View */}
      <div className="font-[DM_Sans] items-center justify-between px-15 py-4 bg-transparent lg:flex hidden">
        <Link href="/" className="inline-flex items-center">
          <img
            src="/white-logo.png"
            alt="Nivest logo"
            className="h-10 w-auto object-contain"
          />
        </Link>
        <div className="flex flex-row gap-5 leading-5 text-xl">
          {NavLink.map((nav) => (
            <Link
              key={nav.name}
              href={nav.link}
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md px-6 duration-500"
            >
              <div className="translate-y-0 transition-transform transform-flat duration-300 group-hover:-translate-y-[190%] cursor-pointer">
                {nav.name}
              </div>
              <div className="absolute translate-y-[156%] transition group-hover:translate-y-0 duration-300">
                {nav.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <button
            onClick={() => setCartOpen(true)}
            className="relative flex items-center gap-1 cursor-pointer hover:opacity-80"
          >
            <HiOutlineShoppingBag style={{ height: "30px", width: "30px" }} />
            {/* {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
                {cartItems.length}
              </span>
            )} */}
          </button>
          <a href="https://whatsapp.com">
            <div className="border  border-[0.1vw] text-white p-2 rounded-full border-green-600 hover:bg-green-600 flex items-center gap-2">
              <Icon icon="logos:whatsapp-icon"/>

              <p>Whatsapp</p>
            </div>
          </a>
        </div>
      </div>

      {/* Mobile View */}
      <div>
        <div className="font-[DM_Sans] items-center justify-between px-3 bg-transparent lg:hidden flex">
          <Example isOpen={mobileMenuOpen} onToggle={setMobileMenuOpen} />
          <Link href={"/"} className="inline-flex items-center">
            <img
              src="/white-logo.png"
              alt="Nivest logo"
              className="h-10 w-24 object-contain"
            />
          </Link>
          <div>
            <HiOutlineShoppingBag style={{ height: "30px", width: "30px" }} />
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: mobileMenuOpen ? "100vh" : 0,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="lg:hidden overflow-hidden bg-white h-96"
        >
          {NavLink.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: mobileMenuOpen ? 1 : 0,
                  x: mobileMenuOpen ? 0 : -20,
                }}
                transition={{ duration: 0.3 }}
                className="px-6 py-1 cursor-pointer text-5xl"
              >
                {item.name}
              </motion.div>
            </Link>
          ))}
          
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;

