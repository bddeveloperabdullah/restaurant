import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";

const menuItem = [
  { itemName: "Home", url: "#" },
  { itemName: "About", url: "#" },
  { itemName: "Menu", url: "#" },
  { itemName: "Find Us", url: "#" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-primary py-4 px-4">
        <div className="container mx-auto">
          <nav className="flex flex-row-reverse md:flex-row justify-between items-center">
            <button
              className="flex justify-center items-center gap-1.5 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <RiMenu3Fill className="text-xl hidden md:block" />
              <RiMenu3Fill className="text-2xl md:hidden rotate-180" />
              <span className="text-[11px] font-semibold leading-3 hidden md:block">
                MENU
              </span>
            </button>
            <div>
              <a href="#" className="text-lg font-semibold">
                HUB CHEF
              </a>
            </div>
            <div className="hidden md:block">
              <a href="#" className="text-[11px] font-semibold leading-3">
                MAKE A RESERVATION
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu & Smooth Transition */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 text-white z-50 flex flex-col items-center justify-center p-6 transition-all duration-500 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-xl cursor-pointer"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <ul className="space-y-6 text-xl text-center">
          {menuItem.map((menu, index) => (
            <li key={index}>
              <a
                href={menu.url}
                onClick={() => setMenuOpen(false)}
                className="relative group inline-block"
              >
                {menu.itemName}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
