import React from "react";
import { Link, NavLink } from "react-router-dom"; 

import image from "./images/axeda-logo.png"
// Icons
import { 
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
} from "react-icons/ri";

const LinkTailwind = ({ url, text }) =>
  <li>
    <Link href={url}>
      <a className="sm:text-xs md:text-base text-yellow-500 no-underline hover:underline hover:text-blue-200 font-mono">
        {text}
      </a>
    </Link>
  </li>
  
const Footer = () => {
  return (
    <footer className="bg-gray-400 p-8 xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">

        {/* Logo */}
        <div className="w-1/6">
        <a href="#" className="text-2xl font-bold relative p-1 bg-white">
                 <img className=" " src={image} alt="Logotipo Axeda"/>  
         </a>

        </div>
        {/* Social media */}
        <nav className="flex items-center gap-4">
          <a href="#" className="block text-white p-4 bg-axeda rounded-full">
            {" "}
            <RiInstagramLine />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-axeda rounded-full">
            {" "}
            <RiFacebookLine />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-axeda rounded-full">
            {" "}
            <RiTwitterLine />{" "}
          </a> 
        </nav>
      </div> 
      <div className="mt-8">
        <h3 className="text-lg font-bold text-white text-center md:text-left">
          Acerca de Axeda 
        </h3>
        <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
  
          <p  className="text-gray-300 mt-4 hover:text-white transition-colors"> 
            <NavLink to = "/components/footer/Bio" > Alexa Delgado </NavLink>
          </p>
 
          <p  className="text-gray-300 mt-4 hover:text-white transition-colors">
            <NavLink to = "/components/footer/Inversores" > Inversores </NavLink>
          </p>

          <p  className="text-gray-300 mt-4 hover:text-white transition-colors">
            <NavLink to = "/components/footer/Eventos" > Eventos </NavLink>
          </p>
          

          <p  className="text-gray-300 mt-4 hover:text-white transition-colors">
            <NavLink to = "/components/Aux/privacidad" > Política de Privacidad</NavLink>
          </p>

          <button
            type="button"
            className="font-semibold py-2 px-6 bg-axeda text-white rounded-xl shadow-lg shadow-indigo-500/40"
          >
            Contáctame
          </button>
        </nav>
      </div>
      <div className="mt-20">
        <p className="text-gray-300 text-center">
          © Alexa Delgado Axeda 2023 - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;