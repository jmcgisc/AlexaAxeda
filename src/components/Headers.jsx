import React, { Fragment, useState }  from "react";
import image                           from "./images/axeda-logo.png"
import {RiMenuLine, RiCloseLine}       from "react-icons/ri"
import { NavLink }               from "react-router-dom"; 
import { Menu, Transition } from '@headlessui/react' 


function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
 }
 

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

            <p  className="text-gray-300 mt-4 hover:text-white transition-colors">
               <NavLink to = "/" > Home</NavLink>
            </p>


            <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          Desarrollos 
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
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Rosavento
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Rosenda
                </a>
              )}
            </Menu.Item>
          </div> 
          
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Indo
                </a>
              )}
            </Menu.Item>
          </div> 
        </Menu.Items>
      </Transition>
    </Menu>


             <a href ="a" className=""> 
                Desarrollos
             </a>  
             <a href ="a" className=""> 
                Services
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