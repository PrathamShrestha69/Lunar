"use client";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";
import Search from "./Search";
import Link from "next/link";

const navLinks = [
  "About",
  "Shop",
  "New & All",
  "Best Sellers",
  "Drapery",
  "Sale",
  "Inspiration",
  "Support",
];

const Navbar = () => {
  const [active, setActive] = useState<null | "primary" | "secondary" | "Tertiary">(null);
  const [search, setSearch] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up (negative scroll delta)
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down (positive scroll delta) and past a threshold
      else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const searchToggle = () => {
    setSearch(!search);
  };

  return (
    <div
      className="relative"
    >
      <nav className={`fixed  left-0 right-0 z-40 bg-white text-[#573720] shadow-sm transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}>
        <div className="flex items-center justify-between gap-4 px-5 py-4 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href={'/'}><img src="/logo-black.png" alt="lunar" className="h-6 w-auto" /></Link>
          </div>
          {/* Nav links */}
          <div className="bg-white">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-5 px-4 text-md font-medium lg:gap-10 lg:px-8">
              {navLinks.map((label) => (
                <button
                  onMouseEnter={() =>
                    setActive(label === "Best Sellers" || label === "Sale" ? "secondary" : label === "About" || label === "Shop" || label === "Support"? "Tertiary" : "primary"
                    )
                  }

                  key={label}
                  className="relative whitespace-nowrap text-[#573720] transition hover:text-[#3d2715] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#573720] after:content-[''] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  <Link href={`/${label.toLowerCase()}`} className="block">{label}</Link>
                </button>
              ))}
            </div>
          </div>
          {/* Icons */}
          <div className="flex gap-5 text-[#573720]">
            <button onClick={searchToggle} aria-label="Call" className="hidden cursor-pointer hover:text-[#6a4328] lg:block">
              <Icon icon="fa-solid:search" width={22} height={22} />
            </button>
            <button aria-label="Call" className="hidden cursor-pointer hover:text-[#6a4328] lg:block">
              <Icon icon="fluent:call-24-filled" width={24} height={24} />
            </button>
            <button aria-label="Account" className="hidden cursor-pointer hover:text-[#6a4328] lg:block">
              <Icon icon="ri:account-circle-fill" width={24} height={24} />
            </button>
            <button aria-label="Orders" className="hidden cursor-pointer hover:text-[#6a4328] lg:block">
              <Icon icon="fa-solid:truck" width={26} height={26} />
            </button>
            <button aria-label="Cart" className="relative cursor-pointer hover:text-[#6a4328]">
              <Icon icon="mynaui:cart-solid" width={24} height={24} />
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[#f25b3d] px-1.5 text-[10px] font-semibold text-white">
                0
              </span>
            </button>
          </div>
        </div>
      </nav>

      <div onMouseLeave={() => setActive(null)}>
        {active === "primary" ? <Dropdown /> : active === "Tertiary" && null}
        {active === "secondary" ? <Dropdown2 /> : active === "Tertiary" && null}
      </div>
      {search && <Search onClose={() => setSearch(false)} />}
    </div>
  );
};

export default Navbar;
