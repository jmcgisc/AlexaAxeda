 
import { Link } from "react-scroll";
import imageBlack from "./images/LogoBlancoTransparente.png";
import imageWhite from "./images/LogoNegroTransparente.png";
import ThemeToggle from "../components/DarkModeToggle";
import { RiMenuLine, RiCloseLine, RiPhoneFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";

import { Menu, Transition } from "@headlessui/react";


const SmoothScrollNav = () => {
  return (
    <>
    {/* Línea asesor fija en la parte superior */}
    <div className="fixed top-0 left-0 w-full text-sm py-1 px-4 flex justify-end items-center gap-2 z-50  dark:bg-gray-800 dark:text-white transition-colors duration-300">
      <span>Línea Asesor:</span>
      <a href="tel:+525570137764" className="underline">
        +(52) 55 7013 7764
      </a>
      <RiPhoneFill />
    </div>
    {/* Navegación */}
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-800 backdrop-blur-md py-4 px-6 shadow-sm">
      <div className="grid grid-cols-3 items-center">
        
      {/* Columna izquierda: Logo */}
      <div className="flex items-center">
        <a href="/" className="block">
          <div className="flex items-center">
          {/* Logo claro (modo oscuro) */}
          <img
            src={imageBlack}
            alt="Logo Isla Diamante"
            className="hidden dark:block h-16 object-contain"
          />
          
          {/* Logo oscuro (modo claro) */}
          <img
            src={imageWhite}
            alt="Logo Isla Diamante"
            className="block dark:hidden h-16 object-contain"
          />
        </div>
        </a>
      </div>

      {/* Columna central: Menú */}
      <ul className="flex justify-center gap-6 text-sm md:text-base font-medium text-gray-800 dark:text-white">            
        <li><Link to="location" smooth duration={600} offset={-80} className="cursor-pointer hover:text-diamante">Ubicación</Link></li>
        <li><Link to="connectivity" smooth duration={600} offset={-80} className="cursor-pointer hover:text-diamante ">Conectividad</Link></li>
        <li><Link to="tradition" smooth duration={600} offset={-80} className="cursor-pointer hover:text-diamante">Tradición</Link></li>
        <li><Link to="design" smooth duration={600} offset={-80} className="cursor-pointer hover:text-diamante">Diseño</Link></li>
        <li><Link to="living" smooth duration={600} offset={-80} className="cursor-pointer hover:text-diamante">Estilo</Link></li>
        <li><Link to="engineering" smooth duration={600} offset={-80} className="cursor-pointer hover:text-diamante">Ingeniería</Link></li>
      </ul>

      {/* Columna derecha: Toggle */}
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

        </div>
      </nav>
    </>
  );
};

export default SmoothScrollNav;
