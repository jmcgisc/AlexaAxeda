import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import InputField from './InputField';
import InputEmail from './InputEmail';
import SelectFieldsBudget from './SelectFieldsBudget'; 
import SelectFieldsInvestment from './SelectFieldsInvestment';
import TextAreaField from './TextAreaField';
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";


const FormularioContacto = ({ onClose }) => {
  const [values, setValues] = useState({
    nombreCompleto: '',
    telefonoMovil: '',
    email: '', 
    presupuesto: '',
    interesadoEn: '',
    mensaje: '',
  });

  const [status, setStatus] = useState('');
  const [captchaValido, cambiarCaptchaValido] = useState(null);
  const captcha = useRef(null);

  const handleChange = (e) => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onChangeCaptcha = () => {
    cambiarCaptchaValido(captcha.current.getValue() !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaValido === true) {
      emailjs.send('service_nnxz7td', 'template_9h35fdq', values, 'dl2zb3hc6kkbEGaOj')
        .then(() => {
          setValues({
            nombreCompleto: '',
            telefonoMovil: '',
            email: '',
            presupuesto: '',
            interesadoEn: '',
            mensaje: '',
          });
          setStatus('SUCCESS');
        })
        .catch((error) => {
          console.error('Failed to send email', error);
        });
    } else {
      cambiarCaptchaValido(false);
    }
  };

  useEffect(() => {
    if (status === 'SUCCESS') {
      const timeout = setTimeout(() => setStatus(''), 3000);
      return () => clearTimeout(timeout);
    }
  }, [status]);

  return (
    <div className="relative">
      {/* Fondo decorativo */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-diamante/30 rounded-full blur-2xl z-0" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-diamante/20 rounded-full blur-2xl z-0" />

      {/* Contenedor del formulario */}
      <motion.div
  initial={{ x: '100%', opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: '100%', opacity: 0 }}
  transition={{ type: 'spring', stiffness: 80, damping: 15 }}
  className="relative z-10 bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-100 rounded-2xl p-8 shadow-2xl w-full max-w-2xl mx-auto"
>
      
       {/* Botón de cierre */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 bg-gray-200 dark:bg-zinc-700 hover:bg-red-500 text-gray-700 dark:text-gray-100 hover:text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 shadow"
          aria-label="Cerrar formulario"
        >
          &times;
        </button>

        {/* Encabezado */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-primary_isla">Contáctame</h2>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4 text-diamonBlack">
          <InputField value={values.nombreCompleto} handleChange={handleChange} label="Nombre Completo" name="nombreCompleto" type="text" placeholder="Juan Pérez" />
          <InputField value={values.telefonoMovil} handleChange={handleChange} label="Teléfono Móvil" name="telefonoMovil" type="text" placeholder="+52 55 55 55 55 55" />
          <InputEmail value={values.email} handleChange={handleChange} label="Correo Electrónico" name="email" placeholder="ejemplo@correo.com" />
          <SelectFieldsBudget handleChange={handleChange} label="Inversión estimada" name="presupuesto" />
          <SelectFieldsInvestment handleChange={handleChange} label="Destino de la compra" name="interesadoEn" />
          <TextAreaField value={values.mensaje} handleChange={handleChange} label="Mensaje" name="mensaje" />

          {/* Botón de envío */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-diamante text-diamonBlack hover:bg-diamante/90 font-semibold px-6 py-2 rounded-xl shadow-md uppercase text-sm tracking-widest transition"
            >
              Enviar
            </button>
          </div>

          {/* Captcha */}
          <div className="text-center mt-4">
            <ReCAPTCHA
              ref={captcha}
              onChange={onChangeCaptcha}
              sitekey={import.meta.env.VITE_PUBLIC_KEY_CAPTCHA}
              theme="light"
            />
            {captchaValido === false && (
              <p className="mt-2 text-red-500 text-sm font-medium uppercase">Valida que no eres un robot</p>
            )}
          </div>
        </form>

        {/* Mensaje de éxito */}
        {status && (
          <div className="mt-6 text-center text-green-600 bg-green-100 dark:bg-green-800 dark:text-green-200 p-4 rounded-xl shadow">
            ¡Gracias! Tu mensaje fue enviado correctamente.
          </div>
        )}
        
     </motion.div>
    </div>
  );
};

export default FormularioContacto;
