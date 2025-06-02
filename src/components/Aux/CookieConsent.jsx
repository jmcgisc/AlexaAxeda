import { useEffect, useState } from "react";
import axios from "axios";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem("cookie_consent");
    if (!consentGiven) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = async (accepted) => {
    setLoading(true);
    const userAgent = navigator.userAgent;
    const ipRes = await fetch("https://api.ipify.org?format=json");
    const ipData = await ipRes.json();
    const ip = ipData.ip;

    const data = {
      accepted,
      user_agent: userAgent,
      ip_address: ip,
    };

    try {
      await axios.post("/.netlify/functions/cookies", data);
      localStorage.setItem("cookie_consent", accepted ? "true" : "false");
      setShowBanner(false);
    } catch (error) {
      console.error("Error al registrar el consentimiento:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white py-4 px-6 shadow-md z-50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm md:text-base">
          Utilizamos cookies para mejorar tu experiencia en nuestro sitio. Al aceptar, nos permites analizar cómo interactúas con él.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => handleConsent(true)}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-sm"
            disabled={loading}
          >
            Aceptar
          </button>
          <button
            onClick={() => handleConsent(false)}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm"
            disabled={loading}
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
