import { useLocation } from 'react-router-dom';

function LanguageDetector() {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const language = pathParts[1] || 'default'; 
  
// const isEnglish = () => {
//   const { pathname } = useLocation();
//   const isEnglish = pathname.startsWith("/en");
// } 

//     {isEnglish ? <FooterEn /> : <FooterEs />}


  console.log('Detected language:', language);
  return (
    <div>
    
      <p>Detected language: {language}</p>
      {/* Other components */}
    </div>
    
  );
}

export default LanguageDetector;