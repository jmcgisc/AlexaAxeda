import { useEffect, useState } from "react";
import axios from "axios";

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem("cookie_consent");
    if (!consentGiven) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = async () => {
    try {
      // Obtener IP y geolocalización
      const geoRes = await axios.get("https://ipapi.co/json/");
      const { ip, city, region, country_name, country_code, org: isp } = geoRes.data;
      const userAgent = navigator.userAgent;

      // Enviar a Netlify Function (guardado en Supabase)
      await axios.post("/.netlify/functions/cookies", {
        ip,
        city,
        region,
        country: country_name,
        countryCode: country_code,
        isp,
        userAgent,
        consented: true,
        timestamp: new Date().toISOString(),
      });

      // Marcar consentimiento en el navegador
      localStorage.setItem("cookie_consent", "true");
      setShowBanner(false);
    } catch (err) {
      console.error("Error al guardar consentimiento:", err);
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 z-50 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
      <p className="text-sm">
        Usamos cookies para mejorar tu experiencia. Al continuar, aceptas nuestra política de privacidad.
      </p>
      <button
        onClick={handleConsent}
        className="bg-diamante hover:bg-diamante/90 text-white text-sm px-4 py-2 rounded-md transition"
      >
        Aceptar cookies
      </button>
    </div>
  );
};

export default CookieConsentBanner;
