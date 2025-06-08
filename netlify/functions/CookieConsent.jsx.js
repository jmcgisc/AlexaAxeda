const consentData = {
  accepted,
  type: accepted ? "full" : "necessary",
  purpose: accepted ? "marketing, analytics" : "basic",
  services: accepted ? "Google Analytics, Meta Pixel" : "none",
  user_agent: navigator.userAgent || "unknown",
  timestamp: new Date().toISOString()
};

try {
  const ipRes = await fetch("https://api.ipify.org?format=json");
  if (ipRes.ok) {
    const ipData = await ipRes.json();
    consentData.ip_address = ipData.ip;
  }
} catch (err) {
  console.warn("IP no detectada");
}

// Enviar a Netlify Function
await fetch("/.netlify/functions/cookies", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(consentData)
});
