const handleConsent = async (consentData) => {
  try {
    // URL correcta para desarrollo y producción
    const API_URL = import.meta.env.DEV
      ? 'http://localhost:9999/.netlify/functions/cookies'
      : '/.netlify/functions/cookies';

    const response = await axios.post(API_URL, consentData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Preferencias guardadas:', response.data);
  } catch (error) {
    console.error('Error al guardar:', error);
    // Muestra un mensaje más descriptivo
    if (error.response?.status === 404) {
      alert('La función de guardado no está disponible. Recarga la página.');
    } else {
      alert('Error al guardar tus preferencias.');
    }
  }
};