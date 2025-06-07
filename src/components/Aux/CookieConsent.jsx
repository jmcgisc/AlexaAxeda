import { useEffect, useState } from "react";
import axios from "axios";

// Genera o recupera un user_id persistente
const getOrCreateUserId = () => {
  let id = localStorage.getItem("user_id");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("user_id", id);
  }
  return id;
};

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ipLoading, setIpLoading] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    setShowBanner(consent === null);
  }, []);

  const handleConsent = async (accepted) => {
    setLoading(true);
    setError(null);
    setIpLoading(true);

    try {
      const consentData = {
        accepted,
        user_agent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        user_id: getOrCreateUserId(),
        purpose: "análisis de comportamiento",
        services: ["Google Analytics", "Facebook Pixel"], 
        ip_address: null,
      };

      // Obtener IP (opcional)
      try {
        const ipRes = await fetch("https://api.ipify.org?format=json");
        if (ipRes.ok) {
          consentData.ip_address = (await ipRes.json()).ip;
        }
      } catch (ipError) {
        console.warn("No se pudo obtener IP:", ipError);
      } finally {
        setIpLoading(false);
      }

      const response = await axios.post("/.netlify/functions/cookies", consentData, {
        headers: { "Content-Type": "application/json" },
        timeout: 8000,
      });

      localStorage.setItem("cookie_consent", accepted.toString());
      setShowBanner(false);

    } catch (error) {
      console.error("Error completo:", error);

      let errorMessage = "Error al procesar tu solicitud";
      if (error.code === "ERR_NETWORK") {
        errorMessage = "Problema de conexión. Tus preferencias se guardaron localmente.";
      } else if (error.response?.status === 500) {
        errorMessage = "Error del servidor. Tus preferencias se guardaron localmente.";
      }

      setError(errorMessage);
      localStorage.setItem("cookie_consent", accepted.toString());
      setTimeout(() => setShowBanner(false), 3000);
    } finally {
      setLoading(false);
      setIpLoading(false);
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm md:text-base">
            Usamos cookies para mejorar tu experiencia.
          </p>
          {error && (
            <div className="mt-2 p-2 bg-red-900/50 rounded text-sm">⚠️ {error}</div>
          )}
          {(loading || ipLoading) && (
            <p className="text-xs text-gray-400 mt-1">
              {ipLoading ? "Detectando ubicación..." : "Guardando preferencias..."}
            </p>
          )}
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => handleConsent(false)}
            disabled={loading}
            className={`px-4 py-2 rounded text-sm ${
              loading ? "bg-gray-600 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {loading ? "..." : "Rechazar"}
          </button>
          <button
            onClick={() => handleConsent(true)}
            disabled={loading}
            className={`px-4 py-2 rounded text-sm ${
              loading ? "bg-gray-600 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? "..." : "Aceptar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
