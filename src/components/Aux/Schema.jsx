import { Helmet } from "react-helmet";

const Schema = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Isla Diamante",
        "url": "https://alexadelgado.netlify.app",
        "logo": "https://alexadelgado.netlify.app/logo.png",
        "sameAs": [
            "https://www.facebook.com/share/r/19ERrYf2a4/",
            "https://www.instagram.com/altan.are?igsh=MWU2NTZsZ2FjeXRjZQ=="        
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Cancún",
          "addressRegion": "QR",
          "addressCountry": "MX"
        }
      })}
    </script>
  </Helmet>
);

export default Schema;
