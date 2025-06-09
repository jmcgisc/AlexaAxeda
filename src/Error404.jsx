import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import FormularioContactoPopup from './components/Aux/FormularioContactoPopup';
const contentStyle = { width: 1000 };  


export default function NotFound() {
  return (
    <div
      className="min-h-screen bg-cover bg-[center_top_223rem] flex flex-col items-center justify-center text-center px-6 py-12"
      style={{
        backgroundImage: "url('/404.webp')",
      }}
    > 
      <div className="bg-white bg-opacity-80 p-8 rounded-lg mb-20 mt-80 shadow-lg bg-transparent">
        <h1 className="text-6xl font-extrabold text-primary_isla">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
          ¡Ups! Parece que nos perdimos...
        </h2>
        <p className="mt-2 text-gray-900">
          No encontramos la página que buscas. Quizás tomamos el camino equivocado.
        </p>

        <Popup trigger={<button className= "bg-gradient-to-r from-axeda to-blue-500 hover:from-blue-500 hover:to-orange-500 text-white font-b px-6 py-3 rounded-md mr-6" 
        > Contáctame</button>} {...{   contentStyle }}
            position="right center">
            <div className="flex flex-full">
                <FormularioContactoPopup/>
            </div>
        </Popup> 
                            
        <a href="/" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-axeda to-blue-500 hover:from-blue-500 hover:to-orange-500 text-white font-b px-6 py-3 rounded-md mr-6" 
            >HOME</button>
        </a>
      </div>
    </div>
  );
}
