"use client";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";
import Search from "./Search";
import TransitionLink from "@/components/TransitionLink";
import { Example as AnimatedHamburgerButton } from "@/components/AnimatedHamburgerButton";


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

const toHref = (label: string) => {
  const slug = label
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `/${slug}`;
};

const Navbar = () => {
  const [active, setActive] = useState<null | "primary" | "secondary" | "Tertiary">(null);
  const [search, setSearch] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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
      {/* Desktop view */}
      {/* Navbar */}
      <nav id="nav" className={`fixed  left-0 right-0 z-40 bg-black text-white  shadow-sm transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}>
        {/* Mobile header (logo + hamburger only) */}
        <div className="flex items-center justify-between lg:hidden">
          <TransitionLink href={'/'}>
            <img src="/logo-white.png" alt="lunar" className="h-6 w-auto" />
          </TransitionLink>

          <AnimatedHamburgerButton
            isOpen={mobileOpen}
            onToggle={(next) => {
              setMobileOpen(next);
              setActive(null);
            }}
          />
        </div>

        {/* Desktop header (unchanged visuals; hidden on mobile) */}
        <div className="hidden lg:flex items-center justify-between gap-4  py-4 ">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <TransitionLink href={'/'}>
              <img src="/logo-white.png" alt="lunar" className="h-6 w-auto" />
            </TransitionLink>
          </div>
          {/* Nav links */}
          <div className="bg-black">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-5 px-4 text-md font-medium lg:gap-10 lg:px-8">
              {navLinks.map((label) => (
                <button
                  onMouseEnter={() =>
                    setActive(label === "Best Sellers" || label === "Sale" ? "secondary" : label === "About" || label === "Shop" || label === "Support" ? "Tertiary" : "primary"
                    )
                  }

                  key={label}
                  className="relative whitespace-nowrap text-white transition hover:text-[#3d2715] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#573720] after:content-[''] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  <TransitionLink href={toHref(label)} className="block">{label}</TransitionLink>
                </button>
              ))}
            </div>
          </div>
          {/* Icons */}
          <div className="flex gap-5 text-white">
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
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#f25b3d] px-1.5 text-[10px] font-semibold text-white">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Desktop dropdowns (hover) */}
        <div className="hidden lg:block" onMouseLeave={() => setActive(null)}>
          {active === "primary" ? <Dropdown /> : active === "Tertiary" && null}
          {active === "secondary" ? <Dropdown2 /> : active === "Tertiary" && null}
        </div>

        {/* Mobile dropdown (contains missing items) */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 py-4">
            <div className="flex items-center justify-between gap-4 pb-4">
              <button
                onClick={searchToggle}
                aria-label="Search"
                className="cursor-pointer hover:text-[#6a4328]"
              >
                <Icon icon="fa-solid:search" width={22} height={22} />
              </button>
              <button aria-label="Call" className="cursor-pointer hover:text-[#6a4328]">
                <Icon icon="fluent:call-24-filled" width={24} height={24} />
              </button>
              <button aria-label="Account" className="cursor-pointer hover:text-[#6a4328]">
                <Icon icon="ri:account-circle-fill" width={24} height={24} />
              </button>
              <button aria-label="Orders" className="cursor-pointer hover:text-[#6a4328]">
                <Icon icon="fa-solid:truck" width={26} height={26} />
              </button>
              <button aria-label="Cart" className="relative cursor-pointer hover:text-[#6a4328]">
                <Icon icon="mynaui:cart-solid" width={24} height={24} />
                <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#f25b3d] px-1.5 text-[10px] font-semibold text-white">
                  0
                </span>
              </button>
            </div>

            <div className="flex flex-col gap-2 text-sm font-medium">
              {navLinks.map((label) => (
                <TransitionLink
                  key={label}
                  href={toHref(label)}
                  className="py-2 text-white hover:text-[#6a4328]"
                >
                  {label}
                </TransitionLink>
              ))}
            </div>
          </div>
        )}
      </nav>
      <div>
        {search && <Search onClose={() => setSearch(false)} />}
      </div>




    </div>
  );
};

export default Navbar;
