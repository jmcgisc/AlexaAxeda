import { useEffect, useState } from "react";
import axios from "axios";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Configuración de la URL basada en el entorno
  const API_URL = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:8888/.netlify/functions/cookies' 
    : '/.netlify/functions/cookies';

  useEffect(() => {
    const consentGiven = localStorage.getItem("cookie_consent");
    if (!consentGiven) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = async (accepted) => {
    setLoading(true);
    setError(null);

    try {
      // Obtener información del usuario
      const userAgent = navigator.userAgent;
      const ipRes = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipRes.json();
      const ip = ipData.ip;

      const data = {
        accepted,
        user_agent: userAgent,
        ip_address: ip,
      };

      // Enviar consentimiento al backend
      await axios.post(API_URL, data, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 5000 // 5 segundos de timeout
      });

      // Guardar en localStorage
      localStorage.setItem("cookie_consent", accepted ? "true" : "false");
      setShowBanner(false);
    } catch (error) {
      console.error("Error al registrar el consentimiento:", error);
      setError("No pudimos guardar tu preferencia. Por favor, intenta nuevamente.");
      
      // Fallback: guardar solo en localStorage si falla la API
      localStorage.setItem("cookie_consent", accepted ? "true" : "false");
      setShowBanner(false);
    } finally {
      setLoading(false);
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white py-4 px-6 shadow-md z-50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex-1">
          <p className="text-sm md:text-base">
            Utilizamos cookies para mejorar tu experiencia en nuestro sitio. Al aceptar, 
            nos permites analizar cómo interactúas con él.
          </p>
          {error && (
            <p className="text-red-400 text-sm mt-2">
              ⚠️ {error}
            </p>
          )}
        </div>
        
        <div className="flex gap-4 mt-2 md:mt-0">
          <button
            onClick={() => handleConsent(true)}
            className={`px-4 py-2 rounded text-sm ${
              loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
            }`}
            disabled={loading}
          >
            {loading ? 'Procesando...' : 'Aceptar'}
          </button>
          <button
            onClick={() => handleConsent(false)}
            className={`px-4 py-2 rounded text-sm ${
              loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
            }`}
            disabled={loading}
          >
            {loading ? 'Procesando...' : 'Rechazar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;