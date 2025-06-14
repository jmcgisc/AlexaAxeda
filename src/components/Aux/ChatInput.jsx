
import { useState } from "react";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    onSend(message);
    setMessage("");
  };

  const quickReplies = [
    "¿Cómo invertir?",
    "Ver lotes",
    "Contacto",
  ];

  return (
    <div className="w-full">
      <div className="text-sm text-gray-500 mb-2">🤖💬 Estás chateando con <strong>Alexa Virtual  </strong> el asistente de<strong> Isla Diamante</strong></div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t pt-4">
        <input
          type="text"
          className="flex-1 border rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="Escribe tu pregunta..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-700 text-white rounded p-2 transition"
          title="Enviar"
        >
          <PaperPlaneIcon className="w-5 h-5" />
        </button>
      </form>

      {/* Botones inteligentes */}
      <div className="flex gap-2 mt-4 flex-wrap">
        {quickReplies.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => onSend(option)}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-100 hover:bg-teal-200 text-teal-800 text-sm px-3 py-1 rounded-full transition"
          >
            {option}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ChatInput;
