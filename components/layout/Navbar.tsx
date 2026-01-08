"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";

const navLinks = [
  "New & All",
  "Best Sellers",
  "Drapery",
  "Sale",
  "Inspiration",
  "Support",
];

const Navbar = () => {
  const [active, setActive] = useState<null | "primary" | "secondary">(null);

  return (
    <div
      className="relative"
      onMouseLeave={() => setActive(null)}
    >
      <nav className="bg-white text-[#573720] shadow-sm">
        <div className="flex items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <div className="flex items-center gap-4">
            <img src="/logo-black.png" alt="TWOPAGES" className="h-6 w-auto" />
          </div>
          <div className="bg-white">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-10 px-4 text-md font-medium lg:gap-20 lg:px-8">
              {navLinks.map((label) => (
                <button
                  onMouseEnter={() =>
                    setActive(label === "Best Sellers" || label === "Sale" ? "secondary" : "primary")
                  }
                  key={label}
                  className="relative whitespace-nowrap text-[#573720] transition hover:text-[#3d2715] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#573720] after:content-[''] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-5 text-[#573720]">
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
      {active === "primary" && <Dropdown />}
      {active === "secondary" && <Dropdown2 />}
    </div>
  );
};

export default Navbar;
