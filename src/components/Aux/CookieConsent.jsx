import { useEffect, useState } from "react";
import axios from "axios";

const detectActiveServices = () => {
  const services = [];
  if (window.gtag || window.ga) services.push("Google Analytics");
  if (window.fbq) services.push("Facebook Pixel");
  if (window.ym) services.push("Yandex Metrica");
  if (window._paq) services.push("Matomo");
  if (window.hj) services.push("Hotjar");
  if (window.analytics) services.push("Segment");
  return services;
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
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);

        const userData = {
          accepted,
          user_agent: navigator.userAgent,
          timestamp: new Date().toISOString(),
          services: accepted ? detectActiveServices() : [],
          purpose: accepted ? "análisis de comportamiento" : "solo necesarias",
          user_id: null,
          referrer: document.referrer || null,
          path: window.location.pathname,
          utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign"),
          utm_source: new URLSearchParams(window.location.search).get("utm_source"),
          utm_medium: new URLSearchParams(window.location.search).get("utm_medium")
        };

        // Obtener IP
        try {
          const ipRes = await fetch("https://api.ipify.org?format=json");
          if (ipRes.ok) {
            userData.ip_address = (await ipRes.json()).ip;
          }
        } catch (ipError) {
          console.warn("No se pudo obtener IP:", ipError);
        } finally {
          setIpLoading(false);
        }

       await axios.post("/.netlify/functions/cookies", userData, {
          headers: { 'Content-Type': 'application/json' },
          timeout: 8000
        });

        localStorage.setItem("cookie_consent", accepted.toString());
        setShowBanner(false);

      } catch (error) {
        console.error("Error completo:", error);
        setError("Hubo un problema al guardar tus preferencias. Se han guardado localmente.");
        localStorage.setItem("cookie_consent", accepted.toString());
        setTimeout(() => setShowBanner(false), 3000);
      } finally {
        setLoading(false);
        setIpLoading(false);
      }
    };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 text-white py-6 px-4 shadow-lg">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm md:text-base leading-relaxed mb-4">
          Usamos cookies para mejorar tu experiencia y mostrar contenido relevante. Al aceptar, consientes el uso de tecnologías con fines de análisis y marketing. Puedes conocer más detalles en nuestra{" "}
          <a href="/privacidad" className="underline text-amber-400 hover:text-amber-300">política de privacidad</a>.
        </p>

        {error && (
          <div className="mt-2 p-2 bg-red-900/60 rounded text-sm">{error}</div>
        )}

        {(loading || ipLoading) && (
          <p className="text-xs text-gray-400 mt-2">
            {ipLoading ? "Detectando IP..." : "Guardando preferencias..."}
          </p>
        )}

        <div className="flex justify-center mt-4 gap-4">
          <a
            href="/privacidad"
            className="px-4 py-2 text-sm rounded border border-white hover:bg-white hover:text-black transition"
          >
            Saber más
          </a>
          <button
            onClick={() => handleConsent(true)}
            disabled={loading}
            className={`px-4 py-2 text-sm rounded bg-green-600 hover:bg-green-700 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
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
