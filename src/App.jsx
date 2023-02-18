
import Headers from "./components/Headers"
import React from 'react'
import { Hero } from "./components/Hero" 
import Menciones from "./components/Menciones"

function App() {

  return( 
      <div>  
          <Headers/>
          <Hero/> 
          <Menciones/>
      </div>
  );
} 

export default App;