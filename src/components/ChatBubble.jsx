import { useState } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 ¡Hola! Soy Alexa, coordinadora de Desarrollos Diamante. ¿En qué puedo ayudarte hoy?",
      timestamp: new Date()
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Simulamos un tiempo de respuesta
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Aquí llamas a tu backend o función serverless
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const text = await res.text();
      if (!text) {
        throw new Error("Respuesta vacía del servidor");
      }

      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        console.error("No se pudo parsear el JSON:", text);
        throw new Error("Respuesta inválida del servidor");
      }

      setMessages((prev) => [...prev, {
        sender: "bot",
        text: data.reply || data.error || "No pude generar una respuesta.",
        timestamp: new Date()
      }]);
    } catch (error) {
      console.error("Error en el chat:", error);
      setMessages((prev) => [...prev, {
        sender: "bot",
        text: "⚠️ Lo siento, estoy teniendo dificultades técnicas. Por favor intenta nuevamente.",
        timestamp: new Date()
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 group"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        {!isOpen && (
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs animate-pulse">
            1
          </span>
        )}
      </button>

      {/* Ventana de chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-gray-200 dark:border-neutral-800">
          {/* Header con gradiente */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={20} />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-indigo-600"></div>
              </div>
              <div>
                <h3 className="font-semibold">Asistente Virtual</h3>
                <p className="text-xs text-white/80">Desarrollos Diamante</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-neutral-800 dark:to-neutral-900 max-h-80">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`flex ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"} items-end max-w-[85%]`}>
                  <div className={`flex-shrink-0 mx-2 ${msg.sender === "user" ? "ml-2" : "mr-2"}`}>
                    {msg.sender === "user" ? (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                        <User size={16} className="text-white" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                        <Bot size={16} className="text-white" />
                      </div>
                    )}
                  </div>
                  <div
                    className={`px-4 py-3 rounded-2xl ${msg.sender === "user"
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-none"
                        : "bg-white dark:bg-neutral-800 text-gray-800 dark:text-gray-200 rounded-bl-none border border-gray-200 dark:border-neutral-700"
                      }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.sender === "user" ? "text-blue-100" : "text-gray-500"}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="flex items-end max-w-[85%]">
                  <div className="flex-shrink-0 mr-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                      <Bot size={16} className="text-white" />
                    </div>
                  </div>
                  <div className="px-4 py-3 rounded-2xl rounded-bl-none bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t dark:border-neutral-700 bg-white dark:bg-neutral-900">
            <div className="flex items-center">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 px-4 py-3 text-sm border border-gray-300 dark:border-neutral-700 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-neutral-800 dark:text-white"
                placeholder="Escribe tu mensaje..."
                disabled={loading}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="ml-2 p-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">
              Presiona Enter para enviar
            </p>
          </div>
        </div>
      )}
    </>
  );
}