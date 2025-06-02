import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getApiUrl = useCallback(() => {
    if (process.env.NODE_ENV === 'development') {
      return 'http://localhost:8888/.netlify/functions/cookies';
    }
    return '/.netlify/functions/cookies';
  }, []);

  useEffect(() => {
    const checkConsent = () => {
      try {
        setShowBanner(!localStorage.getItem("cookie_consent"));
      } catch (e) {
        console.warn("Error con localStorage:", e);
        setShowBanner(true);
      }
    };
    checkConsent();
  }, []);

  const handleConsent = async (accepted) => {
    setLoading(true);
    setError(null);

    try {
      const userData = {
        accepted,
        user_agent: navigator.userAgent,
        timestamp: new Date().toISOString()
      };

      // Eliminamos la obtención de IP para simplificar (opcional)
      try {
        const ipRes = await fetch("https://api.ipify.org?format=json");
        if (ipRes.ok) userData.ip_address = (await ipRes.json()).ip;
      } catch (ipError) {
        console.warn("No se pudo obtener IP:", ipError);
        userData.ip_address = 'unknown';
      }

      const response = await axios.post(getApiUrl(), userData, {
        headers: { 'Content-Type': 'application/json' },
        timeout: 5000
      });

      localStorage.setItem("cookie_consent", accepted.toString());
      setShowBanner(false);
    } catch (error) {
      console.error("Error en la API:", error.response?.data || error.message);
      
      let errorMessage = "Error al guardar tu preferencia";
      if (error.response) {
        errorMessage = error.response.data?.error || `Error del servidor (${error.response.status})`;
      } else if (error.code === 'ECONNABORTED') {
        errorMessage = "Tiempo de espera agotado";
      }

      setError(errorMessage);
      localStorage.setItem("cookie_consent", accepted.toString());
      setTimeout(() => setShowBanner(false), 2000);
    } finally {
      setLoading(false);
    }
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      {/* Mantén tu JSX existente aquí */}
    </div>
  );
};

export default CookieConsent;