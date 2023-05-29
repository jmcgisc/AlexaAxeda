
import React from 'react' 
import images from '../../exports/imagesSlider'
import '../Aux/Styles/slider.css'  
import { motion } from 'framer-motion'

const Slider = () => {
  return (
    <motion.div className='slider-container '>
        <motion.div className='slider' drag='x' 
        dragConstraints={{right: 0, left:-8123}} >
        {images.map(image => (
            <motion.div className='item'> 
                  <img classname="rounded-full" src={image} alt="" /> 
            </motion.div>
        ))}
        </motion.div>
        
    </motion.div>
  )
}

export default Slider