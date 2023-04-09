import React from "react";
import { NavLink }  from "react-router-dom"; 
import {RiPlayFill} from "react-icons/ri"

import image from "./images/axeda-logo.png"

// Icons 
import {FaTiktok, 
        FaFacebook, 
        FaTwitter, 
        FaInstagramSquare, 
        FaLinkedin}       from "react-icons/fa"
  
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
            <FaInstagramSquare />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-axeda rounded-full">
            {" "}
            <FaFacebook />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-axeda rounded-full">
            {" "}
            <FaTwitter />{" "}
          </a> 
          <a href="#" className="block text-white p-4 bg-axeda rounded-full">
            {" "}
            <FaLinkedin />{" "}
          </a> 
          <a href="#" className="block text-white p-4 bg-axeda rounded-full">
            {" "}
            <FaTiktok />{" "}
          </a> 
        </nav>
      </div> 

      {/* 2da Línea Footer */}
      <div className="mt-8">
        <h3 className="text-lg font-bold text-white text-center md:text-left">
          Acerca de Axeda 
        </h3>

        <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
  
          <p  className="text-gray-200 lg:text-xl lg:mt-4"> 
            <NavLink to = "/components/footer/Bio" > Alexa Delgado </NavLink>
          </p>
 
          <p  className="text-gray-200 lg:text-xl lg:mt-4">
            <NavLink to = "/components/footer/Inversores" > Inversores </NavLink>
          </p>

          <p  className="text-gray-200 lg:text-xl lg:mt-4">
            <NavLink to = "/components/footer/Eventos" > Eventos </NavLink>
          </p>
          
          <p  className="text-gray-200 lg:text-xl lg:mt-4">
            <NavLink to = "/privacidad" > Política de Privacidad</NavLink>
          </p> 
 
          <button  
            onClick={(e) => {
                e.preventDefault();
                window.open('https://eva3d.com/recorridos-virtuales-360/axeda/rosavento/index.htm', '_blank');
                }} 
                className="text-2xl flex items-center justify-start gap-4 py-9 px-20 rounded-xl text-gray-200
                hover:drop-shadow-xl
                " >
                    
                    <RiPlayFill className="bg-axeda p-8 rounded-full box-content"/> 
                      Recorrido 360º 
          </button>

        </nav>
      </div>

      {/* CopyRight */}
      <div className="mt-20">
        <p className="text-gray-300 text-center">
          © Alexa Delgado Axeda 2023 - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;