const SeoJsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Isla Diamante Cancún",
        "url": "https://desarrollosdiamante.com",
        "logo": "https://desarrollosdiamante.com/Diamante-icono.png",
        "sameAs": [
          "https://www.facebook.com/isladiamantecancun",
          "https://www.instagram.com/isladiamantecancun"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+52-5570137764",
          "contactType": "Sales",
          "areaServed": "MX"
        }
      })
    }}
  />
);

export default SeoJsonLd;
