import FooterEs             from "../../components/FooterEs";
import FooterEn             from "../../components/FooterEn";
import SmoothScrollNav      from '../../components/SmoothScrollNav';
import SmoothScrollNavEn    from '../../components/SmoothScrollNavEn';
import { useLocation } from "react-router-dom";
// Puedes importar más páginas según necesites

const LayoutWithLanguage = () => {
  const { pathname } = useLocation();
  const isEnglish = pathname.startsWith("/en");

  return (
    <>
      {/* Header */}
      {isEnglish ? <SmoothScrollNavEn /> : <SmoothScrollNav />}

      {/* Footer según idioma */}
      {isEnglish ? <FooterEn /> : <FooterEs />}
    </>
  );
};

export default LayoutWithLanguage;
