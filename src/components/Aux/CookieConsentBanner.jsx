import { useEffect, useState, useCallback } from "react";
import axios from "axios";

// Tiempos configurables (en milisegundos)
const TIMEOUTS = {
  IP_FETCH: 2000,
  API_REQUEST: 6000,
  ERROR_DISPLAY: 2000
};

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Memoizar la función para evitar recreaciones innecesarias
  const getApiUrl = useCallback(() => {
    const isLocalDevelopment = 
      process.env.NODE_ENV === 'development' && 
      (window.location.hostname === 'localhost' || window.location.port === '8888');
    
    return isLocalDevelopment 
      ? 'http://localhost:8888/.netlify/functions/cookies' 
      : '/.netlify/functions/cookies';
  }, []);

  // Verificar consentimiento con manejo de errores
  const checkConsent = useCallback(() => {
    try {
      const consentGiven = localStorage.getItem("cookie_consent");
      setShowBanner(consentGiven === null);
    } catch (e) {
      console.warn("Error al acceder a localStorage:", e);
      setShowBanner(true); // Mostrar por precaución si hay error
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(checkConsent, 300);
    return () => clearTimeout(timer);
  }, [checkConsent]);

  // Obtener dirección IP con timeout
  const fetchUserIp = async () => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), TIMEOUTS.IP_FETCH);
      
      const response = await fetch("https://api.ipify.org?format=json", {
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (response.ok) {
        const { ip } = await response.json();
        return ip;
      }
    } catch (error) {
      console.warn("No se pudo obtener la IP:", error);
    }
    return 'unknown';
  };

  // Manejar la respuesta del consentimiento
  const handleConsentResponse = (accepted) => {
    localStorage.setItem("cookie_consent", accepted.toString());
    setShowBanner(false);
  };

  // Manejar errores de la API
  const handleApiError = (error, accepted) => {
    console.error("Error en la API:", error);
    
    let errorMessage = "Error al procesar tu solicitud";
    if (error.message.includes("Network Error")) {
      errorMessage = "Problema de conexión. Verifica tu red.";
    } else if (error.code === 'ECONNABORTED') {
      errorMessage = "La solicitud tardó demasiado. Intenta nuevamente.";
    } else if (error.response) {
      errorMessage = `Error del servidor (${error.response.status})`;
    }

    setError(errorMessage);
    
    // Fallback: guardar localmente aunque falle la API
    try {
      handleConsentResponse(accepted);
    } catch (storageError) {
      console.error("Error con localStorage:", storageError);
      setError("No se pudo guardar tu preferencia. Intenta recargar la página.");
    }
  };

  const handleConsent = async (accepted) => {
    setLoading(true);
    setError(null);

    try {
      const ip = await fetchUserIp();
      
      const userData = {
        accepted,
        user_agent: navigator.userAgent,
        ip_address: ip,
        timestamp: new Date().toISOString(),
        page_url: window.location.href
      };

      const apiUrl = getApiUrl();
      console.debug("Enviando consentimiento a:", apiUrl, userData);
      
      const response = await axios.post(apiUrl, userData, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        timeout: TIMEOUTS.API_REQUEST,
        withCredentials: false,
        validateStatus: status => status < 500
      });

      if (response.status === 200) {
        handleConsentResponse(accepted);
      } else {
        throw new Error(`Respuesta inesperada: ${response.status}`);
      }
    } catch (error) {
      handleApiError(error, accepted);
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
            <div className="mt-2 p-2 bg-red-900/50 rounded text-sm flex items-center animate-pulse">
              <span className="mr-2">⚠️</span>
              <span>{error}</span>
            </div>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <ConsentButton 
            onClick={() => handleConsent(false)}
            loading={loading}
            label="Rechazar"
            bgColor="bg-red-600"
            hoverColor="hover:bg-red-700"
          />
          <ConsentButton 
            onClick={() => handleConsent(true)}
            loading={loading}
            label="Aceptar"
            bgColor="bg-green-600"
            hoverColor="hover:bg-green-700"
          />
        </div>
      </div>
    </div>
  );
};

// Componente secundario para los botones
const ConsentButton = ({ onClick, loading, label, bgColor, hoverColor }) => (
  <button
    onClick={onClick}
    disabled={loading}
    className={`px-4 py-2 rounded text-sm font-medium transition-colors min-w-[100px] ${
      loading ? 'bg-gray-500 cursor-not-allowed' : `${bgColor} ${hoverColor}`
    }`}
    aria-label={`${label} cookies`}
  >
    {loading ? '...' : label}
  </button>
);

export default CookieConsent;