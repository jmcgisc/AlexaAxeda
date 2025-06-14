import { useState } from "react";
import { PaperPlaneIcon } from "@radix-ui/react-icons"; // o cualquier ícono

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    onSend(message);
    setMessage("");
  };

  return (
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
  );
};

export default ChatInput;
