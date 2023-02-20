
import Headers from "./components/Headers"
import React from 'react'
import { Hero } from "./components/Hero" 
import Menciones from "./components/Menciones" 
import Desarrollos from "./components/Desarrollos"
import Reviews from "./components/Reviews"
import Footer from "./components/Footer"
import FormularioContacto from "./components/FormularioContacto"

function App() {

  return( 
      <div>  
          <Headers/>
          <Hero/>  
          <Desarrollos/>
          <Reviews/>
          <Menciones/>
          <FormularioContacto/>
        
          <Footer/>

      </div>
  );
} 

export default App;