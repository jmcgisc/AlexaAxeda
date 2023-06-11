import React      from 'react'
import { Navigate } from 'react-router';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Headers    from "./components/Headers"
import { Home }   from "./components/Home/Home" 
import Terravento from "./components/Desarrollos/Terravento"
import Rosavento  from "./components/Desarrollos/Rosavento"
import Rosenda              from "./components/Desarrollos/Rosenda"
import Indo                 from "./components/Desarrollos/Indo" 
import Privacidad           from "./components/Aux/Privacidad" 
import PreguntasFrecuentes  from "./components/Aux/PreguntasFrecuentes"
import FormularioContacto   from "./components/Aux/FormularioContacto"
import Bio                  from "./components/Aux/Bio"
import Footer               from "./components/Footer"
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Error404 from "./Error404"
import { Routes, Route , BrowserRouter} 
                  from 'react-router-dom'  

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

function App() { 
   
  return( 
      <div className="App">  
      <BrowserRouter>
        <Headers/> 
          <Routes>
            {/*Header*/}
            <Route path = '/bio'          element ={ <Bio/> } /> 
            {/*Home*/}
            <Route path = '/'             element ={ <Home/> } />
            <Route path = '/rosavento'    element ={ <Rosavento/> } />
            <Route path = '/rosenda'      element ={ <Rosenda/> } />
            <Route path = '/indo'         element ={ <Indo/> } />
            <Route path = '/terravento'   element ={ <Terravento/> } />
            {/* Footer */}
            <Route path = '/privacidad'   element ={ <Privacidad/> } /> 
            <Route path = '/preguntas'    element ={ <PreguntasFrecuentes/> } /> 
            <Route path = '/formulario'   element ={ <FormularioContacto/> } /> 
            <Route path="*" element={<Error404 />} />
                
          </Routes>
      
          <FloatingWhatsApp
              phoneNumber="525570137764"
              accountName="Asesor Alexa"
              allowEsc
              allowClickAway
              notification 
              notificationSound 
              statusMessage = "Desarrollos Axeda"
              darkMode="enable"
              chatMessage ="¡Hola! ¿En que proyecto estas interesado? 🤝 "   
              avatar="AlexaDelgado.webp"
        />
 
        <Footer/>     
              {/* 
                <button onClick={() => {showMessenger(true)}}>show messenger</button>
                <button onClick={() => {hideMessenger()}}>hide messenger</button>
                <button onClick={() => {showDialog()}}>show dialog</button>
                <button onClick={() => {hideDialog()}}>hide dialog</button>
                <button onclick={() => {setMessengerBottomSpacing(100)}}>set chat 100px in bottom spacing</button>
                  <MessengerChat pageId='108115258193252' /> */}
                {/**/} 
  </BrowserRouter>
      </div>
      
  );
} 

export default App; 