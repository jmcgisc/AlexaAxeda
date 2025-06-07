import { useEffect, useState } from "react";
import axios from "axios";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ipLoading, setIpLoading] = useState(false);

  useEffect(() => {
    // Verificar consentimiento previo
    const consent = localStorage.getItem("cookie_consent");
    // Mostrar banner solo si no hay consentimiento guardado
    setShowBanner(consent === null);
  }, []);

  const handleConsent = async (accepted) => {
    setLoading(true);
    setError(null);
    setIpLoading(true);

    try {
      const userData = {
        accepted,
        user_agent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      };

      // Obtener IP de forma opcional con feedback visual
      try {
        const ipRes = await fetch("https://api.ipify.org?format=json");
        if (ipRes.ok) {
          const { ip } = await ipRes.json();
          userData.ip_address = ip;
        }
      } catch (ipError) {
        console.warn("No se pudo obtener IP:", ipError);
      } finally {
        setIpLoading(false);
      }

      // URL dinámica para desarrollo y producción
      const API_URL = import.meta.env.DEV
        ? 'http://localhost:9999/.netlify/functions/cookies'
        : '/.netlify/functions/cookies';

      const response = await axios.post(API_URL, userData, {
        headers: { 'Content-Type': 'application/json' }
      });

      // Guardar consentimiento localmente
      localStorage.setItem("cookie_consent", accepted.toString());
      
      // Cerrar banner después de guardar
      setShowBanner(false);
      
      console.log("Respuesta de la función:", response.data);
    } catch (error) {
      console.error("Error completo:", error);
      
      // Manejo detallado de errores
      let errorMessage = "Error al guardar tu preferencia";
      if (error.response) {
        if (error.response.status === 404) {
          errorMessage = "Servicio no disponible temporalmente";
        } else if (error.response.data?.error) {
          errorMessage = error.response.data.error;
        }
      }
      
      setError(errorMessage);
      
      // Guardar consentimiento localmente aunque falle el servidor
      localStorage.setItem("cookie_consent", accepted.toString());
      
      // Cerrar banner después de 2 segundos
      setTimeout(() => setShowBanner(false), 2000);
    } finally {
      setLoading(false);
      setIpLoading(false);
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg z-50 animate-fade-in">
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
          {(loading || ipLoading) && (
            <div className="mt-2 text-xs text-gray-400">
              {ipLoading ? "Obteniendo información de conexión..." : "Guardando preferencias..."}
            </div>
          )}
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => handleConsent(false)}
            disabled={loading}
            className={`px-4 py-2 rounded text-sm transition-colors ${
              loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
            }`}
          >
            {loading ? '...' : 'Rechazar'}
          </button>
          <button
            onClick={() => handleConsent(true)}
            disabled={loading}
            className={`px-4 py-2 rounded text-sm transition-colors ${
              loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {loading ? '...' : 'Aceptar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;