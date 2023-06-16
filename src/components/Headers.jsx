import React, { Fragment, useState }   from "react";
import image                           from "./images/axeda-logo.png"
import {RiMenuLine, RiCloseLine}       from "react-icons/ri"
import {BiChevronDown}                 from "react-icons/bi"
import { NavLink, Link}                from "react-router-dom"; 
import { Menu, Transition }            from '@headlessui/react' 
import {RiPhoneFill, RiMailFill} from "react-icons/ri"

function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
 }
 
const Headers = () => {
    const [showMenu, setShowMenu] = useState (false);
    return (
   <> 

     <header className="flex flex-cols items-center justify-between w-full py-20 px-8 h-[10vh] z-50 sticky top-6 bg-white">

     <div className="flex flex-row-reverse bg-axeda fixed top-0 left-0 right-0 w-full"> 
               <div className="flex text-gray-100 text-base">Línea Asesor
                  
                  <div className="text-base px-1">
                     <a href="tel:+525570137764" className="text-white text-base px-1">+(52) 55 7013 7764</a>
                  </div>

                  <div className="w-6 py-1">
                     <RiPhoneFill/>
                  </div>
               </div> 
      </div>

      <div className="xl:w-1/6  basis-2/5 text-center mt-3 pl-7 bg-white">
         <a href="/" className="text-2xl font-bold relative p-1 bg-white">
               <img className=" " src={image} alt="Logotipo Axeda"/>  
         </a>
      </div>

      <nav
         className={`fixed bg-white w-[68%] md:w-[25%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"} top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-14 transition-all duration-500 z-50`}
      >
            
         <div className ="px-16 py-2 inline-flex justify-center rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 font-mono	
                  shadow-sm hover:bg-gray-50 focus:outline-none focus:border-orange-600 focus:ring-orange-600 block w-full rounded-md  focus:ring-1">

            <NavLink onClick ={() => setShowMenu(!showMenu)
                  } to = "/" > Home</NavLink> 

         </div>
      
            <Menu as="div" className="relative inline-block text-left">
               <div >
                  <Menu.Button className="px-16 py-2 inline-flex justify-center rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 font-mono	
                  shadow-sm hover:bg-gray-50 focus:outline-none focus:border-orange-600 focus:ring-orange-600 block w-full rounded-md  focus:ring-1">
                     Desarrollos 
                     <BiChevronDown className ="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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

               <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
             
                  <div className="py-1">
                     <Menu.Item>
                     {({ active }) => (
                        <Link  onClick ={() => setShowMenu(!showMenu)
                        } className ={classNames(
                           active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                           'block px-4 py-2 text-sm font-mono text-center'
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
                        <NavLink  onClick ={() => setShowMenu(!showMenu)
                        } className ={classNames(
                           active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                           'block px-4 py-2 text-sm font-mono text-center'
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
                        <NavLink  onClick ={() => setShowMenu(!showMenu)
                        } className ={classNames(
                           active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                           'block px-4 py-2 text-sm font-mono text-center'
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
                        <NavLink  onClick ={() => setShowMenu(!showMenu)
                        } className ={classNames(
                           active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                           'block px-4 py-2 text-sm font-mono text-center'
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

         <div className ="px-22 py-2 inline-flex justify-center rounded-md border border-gray-300 bg-white text-sm text-center font-mono font-medium text-gray-700 shadow-sm 
               hover:bg-gray-50 focus:outline-none focus:border-orange-600 focus:ring-orange-600 block w-full rounded-md sm:text-sm focus:ring-1">
            <NavLink   onClick ={() => setShowMenu(!showMenu)
                  } 
            className ="text-center " to = "/bio" >Alexa Delgado</NavLink>     
         </div> 
          
      </nav>

         <button 
            onClick ={() => setShowMenu(!showMenu)
                  } className = "text-2xl p-2 xl:hidden ">
           {showMenu ? <RiCloseLine /> :  <RiMenuLine/>}
         </button>
     </header>
</>
    );
};
export default Headers;