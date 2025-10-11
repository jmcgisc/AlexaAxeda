import { NavLink }  from "react-router-dom";  

import image from "./images/DiamanteLogo.jpeg"

// Icons 
import {FaTiktok, 
        FaFacebook, 
        FaInstagramSquare, 
        FaLinkedin}       from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
 
const Footer = () => {
  return (
    <footer className="bg-black p-8 xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">

        {/* Logo */}
        <div className="w-1/6">
          <a href="#" className="text-2xl font-bold relative p-1 bg-white">
          <img  className=" " 
                src={image} 
                alt="Logotipo Isla Diamante"
                loading="lazy"/>  
                  
          </a>

        </div>

        {/* Social media */}
        <nav className="flex items-center gap-4">
          <a  href="https://www.instagram.com/altan.are?igsh=MWU2NTZsZ2FjeXRjZQ=="          
              target= "_blank" 
              className="block text-white p-4 bg-primary_isla rounded-full"
              aria-label="Instagram Alexa Delgado" > 
            <FaInstagramSquare />
          </a>

          <a  href="https://www.facebook.com/share/r/19ERrYf2a4/" 
              target= "_blank" 
              className="block text-white p-4 bg-primary_isla rounded-full"
              aria-label="Facebook Alexa Delgado" >
            <FaFacebook />
          </a>

          <a href="https://x.com/AlexaDelga38913?s=09" className="block text-white p-4 bg-primary_isla rounded-full">
            <FaXTwitter />
          </a> 

          <a href="https://www.linkedin.com/in/alexa-delgado-65028a351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"       target= "_blank"className="block text-white p-4 bg-primary_isla rounded-full">
            <FaLinkedin />
          </a> 

          <a href="" className="block text-white p-4 bg-primary_isla rounded-full">
            <FaTiktok />
          </a> 

        </nav>
      </div> 

      {/* 2da Línea Footer */}
      <div className="mt-8">
        <h3 className="text-lg font-bold text-   text-center md:text-left">
          About Isla Diamante 
        </h3>

        <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
  
          <p  className="text-primary_isla lg:text-xl lg:mt-4"> 
            <NavLink  to = "/en-bio" 
                      target="_blank"
            > Alexa Delgado 
            </NavLink>
          </p>
  
          <p  className="text-primary_isla lg:text-xl lg:mt-4">
            <NavLink  to = "/en-faq" 
                      target="_blank"
            > FAQ
            </NavLink>
          </p>

          <p  className="text-primary_isla lg:text-xl lg:mt-4">
            <NavLink  to = "/blog" 
                      target="_blank"
            > Blog
            </NavLink>
          </p> 
          
          
          <p  className="text-primary_isla lg:text-xl lg:mt-4">
            <NavLink  to = "/en-privacy" 
                      target="_blank"
            > Privacy Policy
            </NavLink>
          </p> 
        </nav>
        
      </div>

      {/* CopyRight */}
      <div className="mt-20">
        <p className="text-gray-300 text-center">
          © Alexa Delgado Isla Diamante 2025 - All Rights Reserved
        </p>
      </div>

      <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500">
            <span>Developed with</span>
            <span className="text-red-500">❤️</span>
            <span>by</span>
            <a href="https://stratik.com.mx" className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Stratik
            </a>
      </div>

    </footer>
  );
};

export default Footer;