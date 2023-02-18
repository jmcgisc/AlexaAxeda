import React, { Component, useState } from "react";
import image from "./images/axeda-logo.png"
import {RiMenuLine, RiCloseLine} from "react-icons/ri"

const Headers = () => {
    const [showMenu, setShowMenu] = useState (false);
    return (
     <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50" >
         <div className="xl:w-1/6 text-center -mt-4">
        <a href="#" className="text-2xl font-bold relative p-1 bg-white">
                 <img className=" " src={image} alt="Logotipo Axeda"/>  
         </a>
         </div>
         <nav
                className={`fixed bg-white w-[70%] md:w-[40%] xl:w-full h-full ${
                showMenu ? "left-0" : "-left-full"
                } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
            >
             <a href ="a" className=""> 
                Home
             </a> 
             <a href ="a" className=""> 
                About Alexa
             </a> 
             <a href ="a" className=""> 
                Services
             </a> 
             <a href ="a" className=""> 
                Desarrollos
             </a> 
         </nav>
         <button 
            onClick ={() => setShowMenu(!showMenu)
                  } className = "text-2xl p-2 xl:hidden ">

           {showMenu ? <RiCloseLine /> :  <RiMenuLine/>}

         </button>
     </header>
    );
};

export default Headers;