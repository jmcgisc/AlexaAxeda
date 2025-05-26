import React, { Fragment, useState, useEffect } from "react";
import image from "./images/LogoBlanco.webp";
import { RiMenuLine, RiCloseLine, RiPhoneFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { NavLink, Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import ThemeToggle from "../components/DarkModeToggle";
import SmoothScrollNav from '../components/SmoothScrollNav';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Headers = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Línea asesor fija en la parte superior */}
      <div className="fixed top-0 left-0 w-full text-sm py-1 px-4 flex justify-end items-center gap-2 z-50  dark:bg-gray-800 dark:text-white transition-colors duration-300">
        <span>Línea Asesor:</span>
        <a href="tel:+525570137764" className="underline">
          +(52) 55 7013 7764
        </a>
        <RiPhoneFill />
      </div>

      <header
        className="flex  top-0  items-center  justify-between w-full px-6 py-2 sticky z-40 mt-[2rem] text-black dark:bg-gray-800 dark:text-white transition-colors duration-300 shadow-md"
      >
        {/* Navegación */}
        <nav
          className={`fixed  dark:bg-gray-800 w-[68%] md:w-[25%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"} top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-14 transition-all duration-500 z-50`}
        >
          <div className="px-16 py-2 rounded-md border border-gray-300 dark:bg-gray-800 text-sm font-mono font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:border-orange-600 focus:ring-orange-600 focus:ring-1">
            <NavLink onClick={() => setShowMenu(!showMenu)} to="/">
              Home
            </NavLink>
          </div>

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="px-10 py-2 inline-flex justify-center rounded-md border border-gray-300 dark:bg-gray-800 text-sm font-mono font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:border-orange-600 focus:ring-orange-600 focus:ring-1">
                Desarrollos
                <BiChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        onClick={() => setShowMenu(!showMenu)}
                        className={classNames(
                          active ? " dark:bg-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-200",
                          "block px-4 py-2 text-sm font-mono text-center"
                        )}
                        to="/rosavento"
                      >
                        Rosavento
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink
                        onClick={() => setShowMenu(!showMenu)}
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-200",
                          "block px-4 py-2 text-sm font-mono text-center"
                        )}
                        to="/rosenda"
                      >
                        Rosenda II
                      </NavLink>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink
                        onClick={() => setShowMenu(!showMenu)}
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-200",
                          "block px-4 py-2 text-sm font-mono text-center"
                        )}
                        to="/indo"
                      >
                        Indo
                      </NavLink>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink
                        onClick={() => setShowMenu(!showMenu)}
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-200",
                          "block px-4 py-2 text-sm font-mono text-center"
                        )}
                        to="/terravento"
                      >
                        Terravento
                      </NavLink>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <div className="px-10 py-2 rounded-md border border-gray-300 dark:bg-gray-800 text-sm text-center font-mono font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:border-orange-600 focus:ring-orange-600 focus:ring-1">
            <NavLink onClick={() => setShowMenu(!showMenu)} to="/bio">
              Alexa Delgado
            </NavLink>
          </div>
        </nav>

        {/* Toggle para modo oscuro */}
        <ThemeToggle />

        {/* Botón de menú mobile */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-2xl p-2 xl:hidden"
        >
          {showMenu ? <RiCloseLine /> : <RiMenuLine />}
        </button>

        <SmoothScrollNav />
      </header>
    </div>
  );
};

export default Headers;