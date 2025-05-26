
import React from 'react' 
import images from '../../exports/imagesSlider'
import '../Aux/Styles/slider.css'  
import { motion } from 'framer-motion'

const Slider = () => {
  return (
    <>      

    <div className=" px-6 py-4 dark:bg-gray-700">
      <h1 className="text-3xl font-title text-center dark:bg-gray-700 text-gray-400 lg:text-4xl"> 
        Echa un vistazo a nuestras  
        <strong className=" decoration-axeda/[.33]"> urbanizaciones de lujo</strong>
        <p className="text-xl font-title text-center text-gray-800 dark:text-gray-300 lg:text-2xl">
          Todas nuestras construcciones son pensadas a alto nivel residencial con accesibles formas de pago.
        </p>
      </h1>
    </div>
    
    <motion.div className='slider-container dark:bg-gray-700'>
        <motion.div className='slider' drag='x' 
        dragConstraints={{right: 0, left:-8123}} >
        {images.map(image => (
            <motion.div className='item transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-75 lg:hover:scale-125'> 
                  <img classname="rounded-full" src={image} alt="" /> 
            </motion.div>
        ))}
        </motion.div>
        
    </motion.div>

  </>
  )
}

export default Slider