import { useEffect, useState } from "react"
import axios from "axios"

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent")
    setShowBanner(consent === null)
  }, [])

  const handleConsent = async (accepted) => {
    setLoading(true)
    setError(null)

    try {
      const userData = {
        accepted,
        user_agent: navigator.userAgent,
        timestamp: new Date().toISOString()
      }

      // Opcional: Obtener IP (puedes eliminarlo si no es necesario)
      try {
        const ipRes = await fetch("https://api.ipify.org?format=json")
        if (ipRes.ok) userData.ip_address = (await ipRes.json()).ip
      } catch (ipError) {
        console.warn("No se pudo obtener IP:", ipError)
      }

      const response = await axios.post('/.netlify/functions/cookies', userData, {
        headers: { 'Content-Type': 'application/json' }
      })

      localStorage.setItem("cookie_consent", accepted.toString())
      setShowBanner(false)
      
      console.log("Respuesta de Supabase:", response.data)
    } catch (error) {
      console.error("Error al guardar:", error.response?.data || error.message)
      
      let errorMessage = "Error al guardar tu preferencia"
      if (error.response?.data?.error) {
        errorMessage = error.response.data.error
      }
      
      setError(errorMessage)
      localStorage.setItem("cookie_consent", accepted.toString())
      setTimeout(() => setShowBanner(false), 2000)
    } finally {
      setLoading(false)
    }
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm md:text-base">
            Usamos cookies para mejorar tu experiencia.
          </p>
          {error && (
            <div className="mt-2 p-2 bg-red-900/50 rounded text-sm">
              ⚠️ {error}
            </div>
          )}
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => handleConsent(false)}
            disabled={loading}
            className="px-4 py-2 bg-red-600 rounded text-sm"
          >
            {loading ? '...' : 'Rechazar'}
          </button>
          <button
            onClick={() => handleConsent(true)}
            disabled={loading}
            className="px-4 py-2 bg-green-600 rounded text-sm"
          >
            {loading ? '...' : 'Aceptar'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent