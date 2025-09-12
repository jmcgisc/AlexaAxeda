import { useState } from "react";

export default function CustomWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed left-6 bottom-6 z-50">
      {/* Botón de WhatsApp */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl transition-all duration-300 transform hover:scale-110"
      >
        <i className="fab fa-whatsapp"></i>
      </button>

      {/* Chat de WhatsApp */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
          <div className="bg-green-500 p-3 text-white flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src="Alexa_.jpeg" 
                alt="Asesor Alexa" 
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold">Asesor Alexa</p>
                <p className="text-xs">Desarrollos Isla Diamante</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>
          <div className="p-4 bg-gray-100">
            <p className="text-sm text-gray-700">
              ¡Hola! ¿En qué proyecto estás interesado? 🤝
            </p>
          </div>
          <div className="p-3 bg-white">
            <a
              href="https://wa.me/525570137764"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Abrir conversación en WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}