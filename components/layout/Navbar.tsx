"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { div } from "motion/react-client";

const navLinks = [
  "New & All",
  "Best Sellers",
  "Drapery",
  "Sale",
  "Inspiration",
  "Support",
];

const Dropdown = () => {
  return (
    <div className="absolute left-0 top-full mt-0 w-80 bg-white border-r border-[#e5ddd0] shadow-lg z-50">
      <div className="space-y-1 p-4">
        {/* New to TWOPAGES */}
        <div className="mb-6 flex items-center gap-2">
          <a href="#" className="text-sm font-semibold text-[#573720] hover:text-[#3d2715] underline">
            New to TWOPAGES?
          </a>
          <span className="rounded-sm bg-[#573720] px-2 py-0.5 text-[10px] font-semibold uppercase text-white">
            BEGIN HERE
          </span>
        </div>

        {/* New Arrivals */}
        <a href="#" className="block text-sm font-medium text-[#573720] hover:text-[#3d2715] py-2 transition">
          New Arrivals
        </a>

        {/* All */}
        <a href="#" className="block text-sm font-medium text-[#573720] hover:text-[#3d2715] py-2 transition">
          All
        </a>
      </div>
    </div>
  )
}

const Navbar = () => {
  const [active, isActive] = useState<boolean>(false);

  const enter = () => {
    isActive(true)
  }
  const leave = () => {
    isActive(false)
  }

  return (
    <div>
      <nav className="bg-white text-[#573720] shadow-sm">
        <div className="flex  items-center justify-between gap-4 px-5 py-4 lg:px-8">
          
          <div className="flex items-center gap-4">
            <img src="/logo-black.png" alt="TWOPAGES" className="h-6 w-auto" />
          </div>
          <div className="relative overflow-visible" onMouseEnter={() => isActive(true)} onMouseLeave={() => isActive(false)}>
            <div className=" bg-white">
              <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-10 px-4  text-md font-medium lg:gap-20 lg:px-8">
                {navLinks.map((label) => (
                  <button
                    key={label}
                    className="relative whitespace-nowrap text-[#573720] transition hover:text-[#3d2715] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#573720] after:content-[''] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    {label}

                  </button>

                ))}
              </div>
            </div>
            {active && <Dropdown />}
          </div>
          {/* Icons */}
          <div className="flex gap-5 text-[#573720] ">
            <button aria-label="Call" className="hidden lg:block hover:text-[#6a4328] cursor-pointer">
              <Icon icon="fluent:call-24-filled" width={24} height={24} />
            </button>
            <button aria-label="Account" className="hidden lg:block hover:text-[#6a4328] cursor-pointer">
              <Icon icon="ri:account-circle-fill" width={24} height={24} />
            </button>
            <button aria-label="Orders" className="hidden lg:block hover:text-[#6a4328] cursor-pointer">
              <Icon icon="fa-solid:truck" width={26} height={26} />
            </button>
            <button aria-label="Cart" className="relative hover:text-[#6a4328] cursor-pointer" >
              <Icon icon="mynaui:cart-solid" width={24} height={24} />
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[#f25b3d] px-1.5 text-[10px] font-semibold text-white">
                0
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
