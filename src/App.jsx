import React, { Suspense } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import SmoothScrollNav from './components/SmoothScrollNav';
import PrivacidadEs         from "./components/Aux/PrivacidadEs"; 
import PrivacidadEn         from "./components/Aux/PrivacidadEn"; 
import PreguntasFrecuentes  from "./components/Aux/PreguntasFrecuentes";
import FormularioContacto   from "./components/Aux/FormularioContacto";
import SantoriniPage        from "../src/components/Desarrollos/SantoriniPage";
import SantoriniPageEn      from "../src/components/Desarrollos/SantoriniPageEn";
import MadeiraPage          from "../src/components/Desarrollos/MadeiraPage";
import MadeiraPageEn        from "../src/components/Desarrollos/MadeiraPageEn";
import AzoresPage           from "../src/components/Desarrollos/AzoresPage";
import AzoresPageEn         from "../src/components/Desarrollos/AzoresPageEn";
import BoracayPage          from "../src/components/Desarrollos/BoracayPage";
import BoracayPageEn        from "../src/components/Desarrollos/BoracayPageEn";
import CookieDashboard      from "../src/components/Aux/CookieDashboard";
import CookieConsent        from "./components/Aux/CookieConsent";
import LanguageDetector     from "./components/Aux/LanguageDetector";
import Bio                  from "./components/Aux/Bio";
import BioEn                from "./components/Aux/BioEn";
import { HomeEs }           from "./components/Home/HomeEs";
import { HomeEn }           from "./components/Home/HomeEn"; 
import FooterEs             from "./components/FooterEs";
import FooterEn             from "./components/FooterEn"; 
import { FloatingWhatsApp } from 'react-floating-whatsapp'; 
import Error404             from "./Error404";
import BlogHome             from "./components/Blog/BlogHome";
import Post                 from "./components/Blog/Post";

import { Routes, Route , BrowserRouter, Navigate, useLocation} 
                  from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Spinner from './components/Spinner';  

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXDKo2yo-lV27pFVF5RhlHvomcSmGdwfU",
  authDomain: "alexa-delgado-axeda.firebaseapp.com",
  projectId: "alexa-delgado-axeda",
  storageBucket: "alexa-delgado-axeda.appspot.com",
  messagingSenderId: "978283195370",
  appId: "1:978283195370:web:ef44c4252d294b76a1e093",
  measurementId: "G-DRS0M53RW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
const TestimoniosPage = React.lazy(() => import("./components/TestimoniosPage"));

function App() { 
  return( 
      <>
       {/* <LanguageDetector/> */}
      <CookieConsent />
        <div className="min-h-screen text-black dark:bg-black dark:text-white transition-colors duration-300"> 

        <Helmet>
        <title>Isla Diamante | Alexa Delgado</title>
        <meta name="description" content="Axeda terrenos residenciales en Mérida y Cancún, inversiones inmobiliarias, sin comprobar buró de crédito." />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Isla Diamante | Alexa Delgado" />
        <meta property="og:description" content="Un proyecto único, planeado de manera integral, cuidando siempre el entorno ecológico de la zona. Ofrecemos una gran variedad de servicios y amenidades que te ofrecen la mejor calidad de vida y seguridad que mereces" />
        <meta property="og:image" content="https://desarrollosdiamante.com/Alexa_.jpeg" />
        <meta property="og:url" content="https://desarrollosdiamante.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Isla Diamante | Alexa Delgado" />
        <meta name="twitter:description" content="Un proyecto único, planeado de manera integral, cuidando siempre el entorno ecológico de la zona. Ofrecemos una gran variedad de servicios y amenidades que te ofrecen la mejor calidad de vida y seguridad que mereces." />
        <meta name="twitter:image" content="https://desarrollosdiamante.com/Alexa_.jpeg" />
 
      </Helmet>
      
      <div className="App">  
      <BrowserRouter>
            {/*Header*/}
        <SmoothScrollNav/> 
          <Routes>
            <Route path="*"   element={<Error404 />} />
            <Route path="/"   element={<HomeEs />} />
            <Route path="/es" element={<HomeEs />} />
            <Route path="/en" element={<HomeEn />} />
                      
            <Route path = '/bio'            element ={<Bio/> } /> 
            <Route path = '/bio-en'         element ={<BioEn/> } /> 
             
            <Route path = '/privacidad'     element ={ <PrivacidadEs/> } /> 
            <Route path = '/privacy'        element ={ <PrivacidadEn/> } /> 
            
            <Route path = '/santorini'      element ={ <SantoriniPage/> } /> 
            <Route path = '/santorini-en'   element ={ <SantoriniPageEn/> } /> 

            <Route path = '/madeira'        element ={ <MadeiraPage/> } /> 
            <Route path = '/madeira-en'     element ={ <MadeiraPageEn/> } />

            <Route path = '/azores'         element ={ <AzoresPage/> } /> 
            <Route path = '/azores-en'      element ={ <AzoresPageEn/> } />

            <Route path = '/boracay'        element ={ <BoracayPage/> } /> 
            <Route path = '/boracay-en'     element ={ <BoracayPageEn/> } />

            <Route path = '/preguntas'      element ={ <PreguntasFrecuentes/> } /> 
            <Route path = '/formulario'     element ={ <FormularioContacto/> } />

            <Route path = '/panel-cookies'  element={<CookieDashboard />} />
            <Route path=  "/blog"           element={<BlogHome />} />
            <Route path=  "/post/:path"     element={<Post />} />
            <Route path="/testimonios"      element={ <Suspense fallback={<Spinner />}><TestimoniosPage /></Suspense> } />

         </Routes>

          <FooterEs/>
          <FloatingWhatsApp className='left-4 bottom-4 md:left-8 md:bottom-8'
              accountAddress="https://wa.me/525570137764"
              phoneNumber="525570137764"
              accountName="Asesor Alexa"
              allowEsc
              allowClickAway
              notification 
              notificationSound 
              statusMessage = "Desarrollos Isla Diamante"
              darkMode="enable"
              chatMessage ="¡Hola! ¿En que proyecto estas interesado? 🤝 "   
              avatar="Alexa_.jpeg"
        /> 
      </BrowserRouter>  
      </div>
      </div>
      </>
      
  );
} 

export default App; 