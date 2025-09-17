import { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import InputField from './InputField';
import InputEmail from './InputEmail';
import SelectFieldsBudget from './SelectFieldsBudget'; 
import SelectFieldsInvestment from './SelectFieldsInvestment';
import TextAreaField from './TextAreaField';
import ReCAPTCHA from "react-google-recaptcha";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle, AlertCircle } from "lucide-react";

const FormularioContacto = ({ onClose }) => {
  const [values, setValues] = useState({
    nombreCompleto: '',
    telefonoMovil: '',
    email: '', 
    presupuesto: '',
    interesadoEn: '',
    mensaje: '',
  });

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY); 
  }, []);

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaValido, cambiarCaptchaValido] = useState(null);
  const captcha = useRef(null);

  const handleChange = (e) => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onChangeCaptcha = () => {
    cambiarCaptchaValido(captcha.current.getValue() !== '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (captchaValido === true) {
      try {
        await emailjs.send(
          import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID, 
          import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID, 
          values, 
          import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY
        );
        
        setValues({
          nombreCompleto: '',
          telefonoMovil: '',
          email: '',
          presupuesto: '',
          interesadoEn: '',
          mensaje: '',
        });
        
        setStatus('SUCCESS');
        captcha.current.reset();
        cambiarCaptchaValido(null);
      } catch (error) {
        console.error('Failed to send email', error);
        setStatus('ERROR');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      cambiarCaptchaValido(false);
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (status === 'SUCCESS' || status === 'ERROR') {
      const timeout = setTimeout(() => setStatus(''), 5000);
      return () => clearTimeout(timeout);
    }
  }, [status]);

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-2xl mx-auto"
      >
        {/* Fondo decorativo */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-400/20 rounded-full blur-3xl z-0" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-400/20 rounded-full blur-3xl z-0" />

        {/* Contenedor del formulario */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-100 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-zinc-700"
        >
          {/* Botón de cierre */}
          <motion.button
            onClick={onClose}
            type="button"
            className="absolute top-4 right-4 bg-gray-100 dark:bg-zinc-800 hover:bg-red-500 text-gray-600 dark:text-gray-300 hover:text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 shadow-md"
            aria-label="Cerrar formulario"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={20} />
          </motion.button>

          {/* Encabezado */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Contáctanos
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Completa el formulario y nos pondremos en contacto contigo
            </p>
          </motion.div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={itemVariants}>
              <InputField 
                value={values.nombreCompleto} 
                handleChange={handleChange} 
                aria-labelledby="Nombre Completo" 
                name="nombreCompleto" 
                type="text" 
                placeholder="Nombre Completo" 
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <InputField 
                value={values.telefonoMovil}  
                handleChange={handleChange} 
                aria-labelledby="Teléfono Móvil" 
                name="telefonoMovil"  
                type="text" 
                placeholder="Número de Teléfono" 
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <InputEmail 
                value={values.email}          
                handleChange={handleChange} 
                aria-labelledby="Correo Electrónico"    
                name="email"                    
                placeholder="ejemplo@correo.com" 
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <SelectFieldsBudget                       
                handleChange={handleChange} 
                aria-labelledby="Inversión estimada"    
                name="presupuesto" 
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <SelectFieldsInvestment                   
                handleChange={handleChange} 
                aria-labelledby="Destino de la compra"  
                name="interesadoEn" 
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <TextAreaField 
                value={values.mensaje}     
                handleChange={handleChange} 
                aria-labelledby="Mensaje"               
                name="mensaje" 
              />
            </motion.div>

            {/* Captcha */}
            <motion.div variants={itemVariants} className="text-center mt-6">
              <ReCAPTCHA
                ref={captcha}
                onChange={onChangeCaptcha}
                sitekey={import.meta.env.VITE_PUBLIC_KEY_CAPTCHA}
                theme="light"
              />
              {captchaValido === false && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-red-500 text-sm font-medium flex items-center justify-center gap-2"
                >
                  <AlertCircle size={16} />
                  Por favor, verifica que no eres un robot
                </motion.p>
              )}
            </motion.div>

            {/* Botón de envío */}
            <motion.div variants={itemVariants} className="flex justify-center pt-4">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar mensaje
                  </>
                )}
              </motion.button>
            </motion.div>
          </form>

          {/* Mensajes de estado */}
          <AnimatePresence>
            {status === 'SUCCESS' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-xl border border-green-200 dark:border-green-800 flex items-center gap-3"
              >
                <CheckCircle size={24} className="flex-shrink-0" />
                <div>
                  <p className="font-medium">¡Mensaje enviado con éxito!</p>
                  <p className="text-sm">Te contactaremos pronto.</p>
                </div>
              </motion.div>
            )}

            {status === 'ERROR' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-xl border border-red-200 dark:border-red-800 flex items-center gap-3"
              >
                <AlertCircle size={24} className="flex-shrink-0" />
                <div>
                  <p className="font-medium">Error al enviar el mensaje</p>
                  <p className="text-sm">Por favor, intenta nuevamente.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FormularioContacto;