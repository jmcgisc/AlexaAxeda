// components/Chatbot.jsx
import { useState } from "react";

const responses = {
  "hola": "¡Hola! ¿En qué puedo ayudarte hoy?",
  "precio": "Los precios comienzan desde $6,260 MXN. ¿Te gustaría más información?",
  "brochure": "Puedes descargar el brochure aquí: [descargar]",
  "ubicación": "Estamos en Cancún, cerca de Av. López Portillo. ¿Quieres ver el mapa?",
  "default": "Lo siento, aún estoy aprendiendo. ¿Puedes reformular tu pregunta?",
};

const Chatbot = () => {
  const [messages, setMessages] = useState([{ text: "¡Hola! Soy tu asistente virtual 😊", sender: "bot" }]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    const botResponse = { text: getResponse(input), sender: "bot" };
    setMessages([...messages, userMessage, botResponse]);
    setInput("");
  };

  const getResponse = (msg) => {
    const key = msg.toLowerCase();
    return responses[key] || responses["default"];
  };

  return (
    <div className="fixed bottom-4 right-4 w-72 bg-white dark:bg-gray-800 border border-gray-300 rounded-lg shadow-lg z-50 flex flex-col">
      <div className="bg-diamante text-black p-3 rounded-t-lg font-bold">Alexa Virtual</div>
      <div className="flex-1 p-3 space-y-2 overflow-y-auto max-h-64 text-sm">
        {messages.map((msg, i) => (
          <div key={i} className={`text-${msg.sender === "bot" ? "left" : "right"} text-black dark:text-white`}>
            <div className={`inline-block px-3 py-2 rounded-lg ${msg.sender === "bot" ? "bg-gray-100 dark:bg-gray-700" : "bg-diamante text-white"}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex border-t p-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 p-2 text-sm border rounded-l"
          placeholder="Escribe algo..."
        />
        <button 
        id="Enviar"
        onClick={handleSend} className="bg-diamante px-4 text-white rounded-r">Enviar</button>
      </div>
    </div>
  );
};

export default Chatbot;