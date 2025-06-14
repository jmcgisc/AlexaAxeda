import { useState } from "react";
import ChatInput from "./ChatInput";

const ChatbotGPT = () => {
  const [messages, setMessages] = useState([]);

  const handleUserQuestion = async (msg) => {
    setMessages((prev) => [...prev, { type: "user", text: msg }]);

    const response = await fetch("/.netlify/functions/ask-bot", {
        
      method: "POST",
      body: JSON.stringify({ question: msg }),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
    const text = await response.text(); // Para ver el error si no es JSON
        throw new Error(`Error del servidor: ${response.status} - ${text}`);
        }

        const data = await response.json();
    setMessages((prev) => [...prev, { type: "bot", text: data.answer }]);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="space-y-4 mb-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded ${
              msg.type === "user" ? "bg-teal-100 text-right" : "bg-gray-200 text-left"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <ChatInput onSend={handleUserQuestion} />
    </div>
  );
};

export default ChatbotGPT;
