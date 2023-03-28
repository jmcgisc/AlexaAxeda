import React      from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Headers    from "./components/Headers"
import { Home }   from "./components/Home/Home" 
import Terravento from "./components/Desarrollos/Terravento"
import Rosavento  from "./components/Desarrollos/Rosavento"
import Rosenda    from "./components/Desarrollos/Rosenda"
import Indo       from "./components/Desarrollos/Indo" 
import Privacidad from "./components/Aux/Privacidad"
import Footer     from "./components/Footer"
// import Bio        from "./components/footer/Bio"
// import Prensa     from "./components/footer/Prensa" 
// import Inversores from "./components/footer/Inversores"
// import Eventos    from "./components/footer/Eventos"
// import Terminos   from "./components/footer/Terminos"


import { Routes, Route , BrowserRouter} 
                  from 'react-router-dom'

function App() { 
   
  return( 
      <div className="App">  
      <BrowserRouter>
        <Headers/> 
          <Routes>
            {/*Home*/}
            <Route path = '/'             element ={ <Home/> } />
            <Route path = '/rosavento'    element ={ <Rosavento/> } />
            <Route path = '/rosenda'      element ={ <Rosenda/> } />
            <Route path = '/indo'         element ={ <Indo/> } />
            <Route path = '/terravento'   element ={ <Terravento/> } />
            {/* Footer */}
            <Route path = '/privacidad'   element ={ <Privacidad/> } />
            {/* <Route path = '/components/footer/Bio'            element ={ <Bio/> } /> */}
            {/* <Route path = '/components/footer/Prensa'         element ={ <Prensa/> } />
            <Route path = '/components/footer/Inversores'     element ={ <Inversores/> } />
            <Route path = '/components/footer/Eventos'        element ={ <Eventos/> } />
            <Route path = '/components/footer/Terminos'       element ={ <Terminos/> } /> */}
                
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