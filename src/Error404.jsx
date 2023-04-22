import React from 'react'

const Error404 = () => {
    return (
        <div>  
            <div class="bg-gradient-to-r from-axeda to-red-300">
            <div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
            <div class="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
            <div class="border-t border-gray-200 text-center pt-8">
                <h1 class="text-9xl font-bold text-axeda">404</h1>
                <h1 class="text-6xl font-medium py-8">Oops! Pagina no encontrada</h1>
                    <p class="text-2xl pb-8 px-12 font-medium">Oops! La página que buscas ya no existe o se ha mudado a las paradisiacas tierras de Axeda, sigue navegando con nosotros junto con tu asesora Alexa Delgado.</p>
                        <a href="/" rel="noopener noreferrer">
                            <button class="bg-gradient-to-r from-axeda to-red-500 hover:from-pink-500 hover:to-orange-500 text-white font-b px-6 py-3 rounded-md mr-6" 
                            >HOME</button>
                        </a>
                            
                        <a href="/" rel="noopener noreferrer">
                            <button class="bg-gradient-to-r from-axeda to-red-500 hover:from-pink-500 hover:to-orange-500 text-white font-b px-6 py-3 rounded-md mr-6" 
                            >Contáctame</button>
                        </a> 
            </div>
            </div>
            </div>
            </div> 
        </div>
    )
}

export default Error404
