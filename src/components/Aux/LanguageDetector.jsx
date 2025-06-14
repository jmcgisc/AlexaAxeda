import FooterEs             from "../../components/FooterEs";
import FooterEn             from "../../components/FooterEn";
import { Routes, Route, useLocation } from "react-router-dom";
// Puedes importar más páginas según necesites

const LayoutWithLanguage = () => {
  const { pathname } = useLocation();
  const isEnglish = pathname.startsWith("/en");

  return (
    <>

      {/* Footer según idioma */}
      {isEnglish ? <FooterEn /> : <FooterEs />}
    </>
  );
};

export default LayoutWithLanguage;
