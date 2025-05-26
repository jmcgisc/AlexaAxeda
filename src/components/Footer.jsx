import React from "react";
import { NavLink }  from "react-router-dom"; 
import {RiPlayFill} from "react-icons/ri"

import image from "./images/DiamanteLogo.jpeg"

// Icons 
import {FaTiktok, 
        FaFacebook, 
        FaTwitter, 
        FaInstagramSquare, 
        FaLinkedin}       from "react-icons/fa"
  
const Footer = () => {
  return (
    <footer className="bg-black p-8 xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">

        {/* Logo */}
        <div className="w-1/6">
          <a href="#" className="text-2xl font-bold relative p-1 bg-white">
                  <img className=" " src={image} alt="Logotipo Axeda"/>  
          </a>

        </div>

        {/* Social media */}
        <nav className="flex items-center gap-4">
          <a href="https://www.instagram.com/asesor.alexadelgado/"          target= "_blank" className="block text-white p-4 bg-diamante rounded-full"> 
            <FaInstagramSquare />
          </a>

          <a href="https://www.facebook.com/profile.php?id=100063816524796" target= "_blank" className="block text-white p-4 bg-diamante rounded-full">
            <FaFacebook />
          </a>

          <a href="#" className="block text-white p-4 bg-diamante rounded-full">
            <FaTwitter />
          </a> 

          <a href="https://mx.linkedin.com/in/alexa-delgado-37201b214"       target= "_blank"className="block text-white p-4 bg-diamante rounded-full">
            <FaLinkedin />
          </a> 

          <a href="https://www.tiktok.com/@alexadelgadoasesor?is_from_webapp=1&sender_device=pc" className="block text-white p-4 bg-diamante rounded-full">
            <FaTiktok />
          </a> 

        </nav>
      </div> 

      {/* 2da Línea Footer */}
      <div className="mt-8">
        <h3 className="text-lg font-bold text-   text-center md:text-left">
          Acerca de Isla Diamante 
        </h3>

        <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
  
          <p  className="text-primary_isla lg:text-xl lg:mt-4"> 
            <NavLink  to = "/bio" 
                      target="_blank"
            > Alexa Delgado 
            </NavLink>
          </p>
  
          <p  className="text-primary_isla lg:text-xl lg:mt-4">
            <NavLink  to = "/preguntas" 
                      target="_blank"
            > Preguntas Frecuentes 
            </NavLink>
          </p>

          <p  className="text-primary_isla lg:text-xl lg:mt-4">
            <NavLink 
                      to = "/components/footer/Eventos" 
                      target="_blank"
            > Eventos 
            </NavLink>
          </p>
          
          <p  className="text-primary_isla lg:text-xl lg:mt-4">
            <NavLink  to = "/privacidad" 
                      target="_blank"
            > Política de Privacidad
            </NavLink>
          </p> 

          <p  className="text-primary_isla lg:text-xl lg:mt-4">
            <NavLink  to = "/post" 
                      target="_blank"
            > Blog
            </NavLink>
          </p> 
 
          <button  
            onClick={(e) => {
                e.preventDefault();
                window.open('https://eva3d.com/recorridos-virtuales-360/axeda/rosavento/index.htm', '_blank');
                }} 
                className="text-2xl flex items-center justify-start gap-4 py-9 px-20 rounded-xl text-gray-200
                hover:drop-shadow-xl
                " >
                    
                    <RiPlayFill className="bg-diamante p-8 rounded-full box-content"/> 
                      Recorrido 360º 
          </button>

        </nav>
        
      </div>

      {/* CopyRight */}
      <div className="mt-20">
        <p className="text-gray-300 text-center">
          © Alexa Delgado Isla Diamante 2025 - All Rights Reserved
        </p>
      </div>

      {/* Derechos reservados y Powered by */}
      <div className="mt-6 text-center text-xs text-gray-400 dark:text-gray-600">
        <p>© {new Date().getFullYear()} Vagamocion Travel. Todos los derechos reservados.</p>
        <p className="mt-1 text-[11px] italic text-indigo-200"> Powered by 
          <a href="https://codexa.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-500 transition"> CODEXA</a>
        </p>
      </div>

    </footer>
  );
};

export default Footer;