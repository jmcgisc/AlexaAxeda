import { useEffect, useState } from "react";
import axios from "axios";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // URL mejorada para todos los entornos
  const getApiUrl = () => {
    if (window.location.hostname === 'localhost') {
      return 'http://localhost:8888/.netlify/functions/cookies';
    }
    return '/.netlify/functions/cookies';
  };

  useEffect(() => {
    // Verificar consentimiento sin bloquear la renderización inicial
    const checkConsent = () => {
      const consentGiven = localStorage.getItem("cookie_consent");
      if (consentGiven === null) { // Solo mostrar si no existe
        setShowBanner(true);
      }
    };
    
    // Pequeño retraso para mejorar UX
    const timer = setTimeout(checkConsent, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleConsent = async (accepted) => {
    setLoading(true);
    setError(null);

    try {
      // Datos del usuario con manejo de errores
      let ip = 'unknown';
      try {
        const ipRes = await fetch("https://api.ipify.org?format=json");
        if (ipRes.ok) {
          const ipData = await ipRes.json();
          ip = ipData.ip;
        }
      } catch (ipError) {
        console.warn("No se pudo obtener la IP:", ipError);
      }

      const data = {
        accepted,
        user_agent: navigator.userAgent,
        ip_address: ip,
        timestamp: new Date().toISOString()
      };

      // Llamada a la API con más configuración
      const response = await axios.post(getApiUrl(), data, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        timeout: 8000,
        withCredentials: false
      });

      if (response.status >= 200 && response.status < 300) {
        localStorage.setItem("cookie_consent", accepted.toString());
        setShowBanner(false);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error completo:", error);
      
      // Mensajes de error específicos
      let errorMessage = "Error de conexión. Verifica tu red e intenta nuevamente.";
      if (error.code === 'ECONNABORTED') {
        errorMessage = "La solicitud tardó demasiado. Intenta nuevamente.";
      } else if (error.response) {
        errorMessage = `Error del servidor (${error.response.status})`;
      }

      setError(errorMessage);
      
      // Fallback robusto
      try {
        localStorage.setItem("cookie_consent", accepted.toString());
        setTimeout(() => setShowBanner(false), 1500); // Da tiempo a leer el error
      } catch (storageError) {
        console.error("Error con localStorage:", storageError);
      }
    } finally {
      setLoading(false);
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg z-50 animate-fade-in">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm md:text-base leading-relaxed">
            Usamos cookies esenciales y de análisis. Al continuar, aceptas su uso 
            según nuestra <a href="/politica-cookies" className="underline hover:text-blue-300">Política de Cookies</a>.
          </p>
          {error && (
            <div className="mt-2 p-2 bg-red-900/50 rounded text-sm flex items-center">
              <span className="mr-2">⚠️</span>
              <span>{error}</span>
            </div>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <button
            onClick={() => handleConsent(false)}
            disabled={loading}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
              loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
            }`}
            aria-label="Rechazar cookies"
          >
            {loading ? 'Procesando...' : 'Rechazar'}
          </button>
          <button
            onClick={() => handleConsent(true)}
            disabled={loading}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
              loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
            }`}
            aria-label="Aceptar cookies"
          >
            {loading ? 'Procesando...' : 'Aceptar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;