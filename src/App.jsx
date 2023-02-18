
import Headers from "./components/Headers"
import React from 'react'
import { Hero } from "./components/Hero" 
import Menciones from "./components/Menciones" 
import Desarrollos from "./components/Desarrollos"

function App() {

  return( 
      <div>  
          <Headers/>
          <Hero/>  
          <Desarrollos/>
          <Menciones/>

      </div>
  );
} 

export default App;