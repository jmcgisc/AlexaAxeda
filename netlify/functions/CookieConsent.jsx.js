import { useEffect, useState } from "react";
import axios from "axios";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [consentType, setConsentType] = useState('necessary');

  useEffect(() => {
    const savedConsent = localStorage.getItem("cookie_consent");
    setShowBanner(savedConsent === null);
    if (savedConsent) setConsentType(savedConsent);
  }, []);

  const handleConsent = async (type) => {
    setLoading(true);
    setError(null);

    try {
      // Validar el tipo de consentimiento primero
      if (!['full', 'necessary', 'none'].includes(type)) {
        throw new Error('Tipo de consentimiento no válido');
      }

      const consentData = {
        type,
        accepted: type !== 'none',
        user_agent: navigator.userAgent,
        created_at: new Date().toISOString()
      };

      // Añadir IP solo si se obtiene correctamente
      try {
        const ipRes = await fetch("https://api.ipify.org?format=json");
        if (ipRes.ok) {
          consentData.ip_address = (await ipRes.json()).ip;
        }
      } catch (ipError) {
        console.warn("No se pudo obtener IP:", ipError);
      }

      // Validación final antes de enviar
      if (!consentData.type || consentData.accepted === undefined) {
        throw new Error('Datos de consentimiento incompletos');
      }

      const response = await axios.post('/.netlify/functions/cookies', consentData, {
        headers: { 
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        timeout: 8000
      });

      localStorage.setItem("cookie_consent", type);
      setShowBanner(false);

    } catch (error) {
      console.error("Error al guardar consentimiento:", error);
      
      let errorMessage = "Error al procesar tu solicitud";
      if (error.response?.data?.error) {
        errorMessage = error.response.data.error;
      } else if (error.message) {
        errorMessage = error.message;
      }

      setError(errorMessage);
      // Intenta nuevamente después de 5 segundos
      setTimeout(() => setError(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm md:text-base">
            Usamos cookies para mejorar tu experiencia. Al continuar, aceptas nuestro uso de cookies.
          </p>
          {error && (
            <div className="mt-2 p-2 bg-red-900/50 rounded text-sm animate-pulse">
              ⚠️ {error}
            </div>
          )}
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => handleConsent('necessary')}
            disabled={loading}
            className={`px-4 py-2 rounded text-sm ${
              loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {loading ? '...' : 'Necesarias'}
          </button>
          <button
            onClick={() => handleConsent('full')}
            disabled={loading}
            className={`px-4 py-2 rounded text-sm ${
              loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {loading ? '...' : 'Aceptar todas'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;