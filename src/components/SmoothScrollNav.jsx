import { useState } from "react";
import { Link } from "react-scroll";
import { RiMenuLine, RiCloseLine, RiPhoneFill } from "react-icons/ri";
import ThemeToggle from "../components/DarkModeToggle";
import imageBlack from "./images/LogoBlancoTransparente.png";
import imageWhite from "./images/LogoNegroTransparente.png";

const SmoothScrollNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Línea asesor */}
      <div className="fixed top-0 left-0 w-full text-sm py-1 px-4 flex justify-end items-center gap-2 z-50 bg-white dark:bg-gray-800 dark:text-white transition-colors duration-300">
        <span>Línea Asesor:</span>
        <a href="tel:+525570137764" className="underline">+(52) 55 7013 7764</a>
        <RiPhoneFill />
      </div>

      {/* Navbar */}
      <nav className="fixed top-6 left-0 w-full z-50 bg-white/80 dark:bg-gray-800 backdrop-blur-md py-3 px-6 shadow-sm flex justify-between items-center">
        {/* Izquierda: Logo + Toggle */}
        <div className="flex items-center gap-4">
          <a href="/">
            <img
              src={imageBlack}
              alt="Logo Isla Diamante"
              className="hidden dark:block h-12 object-contain"
            />
            <img
              src={imageWhite}
              alt="Logo Isla Diamante"
              className="block dark:hidden h-12 object-contain"
            />
          </a>
          <ThemeToggle />
        </div>

        {/* Derecha: Botón hamburguesa */}
        <div className="xl:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-gray-700 dark:text-white"
          >
            {isOpen ? <RiCloseLine /> : <RiMenuLine />}
          </button>
        </div>

        {/* Menú horizontal para desktop */}
        <ul className="hidden xl:flex justify-center gap-6 text-sm md:text-base font-medium text-gray-800 dark:text-white">
          {["location", "connectivity", "tradition", "design", "living", "engineering"].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth
                duration={600}
                offset={-80}
                className="cursor-pointer hover:text-diamante"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Fondo oscuro (overlay) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 xl:hidden"
        />
      )}

      {/* Menú móvil lateral animado */}
      <div
        className={`fixed top-[80px] right-0 w-full max-w-[300px] h-screen bg-white dark:bg-gray-900 shadow-md p-6 flex flex-col gap-6 z-50 xl:hidden transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {["location", "connectivity", "tradition", "design", "living", "engineering"].map((section) => (
          <Link
            key={section}
            to={section}
            smooth
            duration={600}
            offset={-80}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer hover:text-diamante"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>
    </>
  );
};

export default SmoothScrollNav;
