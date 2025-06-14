import React from 'react';
import FormularioContactoEn from "../Aux/FormularioContactoEn";
// Icons 
import {FaTiktok, 
        FaFacebook, 
        FaTwitter, 
        FaInstagramSquare, 
        FaLinkedin}       from "react-icons/fa"
  
const BioEn = () => {
    return (
        <div className="bg-gradient-to-b from-gray-100 to-white dark:from-black dark:to-gray-400 py-24 px-4">
            <div className="text-center mb-10">
                <h1 className="text-diamante dark:text-white text-4xl lg:text-6xl font-title font-bold mb-4 mt-32">Alexa Delgado</h1>
                <p className="text-lg font-medium text-gray-600 dark:text-gray-300">Commercial Manager – Isla Diamante</p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto gap-12">
                <div className="relative">
                    <img
                        src="Alexa_.jpeg"
                        alt="Alexa Delgado"
                        className="w-40 h-40 lg:w-52 lg:h-52 rounded-full border-4 border-diamante shadow-xl object-cover"
                    />
                </div>

                <div className="max-w-2xl text-gray-700 dark:text-gray-200">
                    <h3 className="text-2xl font-semibold mb-4">About me</h3>
                    <p className="mb-4 leading-relaxed">
                        Hi! My name is <strong>Alexa Delgado</strong>, commercial manager in Isla Diamante with more than 6 years of experience in the marketing of real estate. I specialize in pre-sale investments that generate annual returns greater than 15%.
                    </p>
                    <p className="mb-4 leading-relaxed">
                        My commitment is to accompany you throughout the entire process, providing you with the best investment options. <em>The best time to invest was yesterday, the second best is today.</em>                    </p>
                    <p className="text-primary font-title text-lg font-bold mb-4 text-center">Congratulations on the best decision!</p>
                    <p className="italic text-axeda text-center mb-6">Isla Diamante.</p>
                </div>
            </div>

            <div className="mt-16 max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-100">Why Isla Diamante?</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 list-disc list-inside">
                    <li>Real estate trust </li>
                    <li>Services at the foot of the lot </li>
                    <li>Reuse of rainwater </li>
                    <li>Hidden services </li>
                    <li>Down payment 15% </li>
                    <li>Up to 120 months without interest </li>
                    <li>No penalty for early payments </li>
                    <li>No bureau review </li>
                    <li>No endorsement </li>
                </ul>
            </div>

            <div className="mt-16 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Connect with me</h3>
                <div className="flex justify-center space-x-6">
                   
                    {/* Social media */}
                    <nav className="flex items-center gap-4">
                      <a href="https://www.instagram.com/asesor.alexadelgado/"          target= "_blank" className="block text-primary_isla p-4 bg-diamante rounded-full"> 
                        <FaInstagramSquare />
                      </a>

                      <a href="https://www.facebook.com/profile.php?id=100063816524796" target= "_blank" className="block text-primary_isla p-4 bg-diamante rounded-full">
                        <FaFacebook />
                      </a>

                      <a href="#" className="block text-primary_isla p-4 bg-diamante rounded-full">
                        <FaTwitter />
                      </a> 

                      <a href="https://mx.linkedin.com/in/alexa-delgado-37201b214"       target= "_blank"className="block text-primary_isla p-4 bg-diamante rounded-full">
                        <FaLinkedin />
                      </a> 

                      <a href="https://www.tiktok.com/@alexadelgadoasesor?is_from_webapp=1&sender_device=pc" className="block text-primary_isla p-4 bg-diamante rounded-full">
                        <FaTiktok />
                      </a> 

                    </nav>
                </div>
            </div>

            <div className="mt-24">
                <FormularioContactoEn />
            </div>
        </div>
    );
};

export default BioEn;
