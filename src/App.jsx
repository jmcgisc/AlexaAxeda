
import React      from 'react'
import Headers    from "./components/Headers"
import { Home }   from "./components/Home/Home" 
import Rosavento  from "./components/Desarrollos/Rosavento"
import Rosenda    from "./components/Desarrollos/Rosenda"
import Indo       from "./components/Desarrollos/Indo"
import Footer     from "./components/Footer"
import { Routes, Route , BrowserRouter} 
                  from 'react-router-dom'

function App() { 
   
  return( 
      <div className="App">  
      <BrowserRouter>
        <Headers/> 
          <Routes>
            <Route path = '/' element ={ <Home/> } />
            <Route path = '/rosavento' element ={ <Rosavento/> } />
            <Route path = '/rosenda'   element ={ <Rosenda/> } />
            <Route path = '/indo'      element ={ <Indo/> } />
                
          </Routes> 
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