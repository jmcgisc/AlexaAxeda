import React, {useState, useEffect, useRef} from 'react'
import {RiPhoneFill, RiMailFill} from "react-icons/ri"
import {ImLocation} from "react-icons/im"
import emailjs from 'emailjs-com'
import InputField from './InputField'
import InputEmail from './InputEmail' 
import SelectFieldsBudget       from './SelectFieldsBudget'
import SelectFieldsProperties   from './SelectFieldsProperties'
import SelectFieldsInvestment   from './SelectFieldsInvestment'
import TextAreaField from './TextAreaField' 
import ReCAPTCHA from "react-google-recaptcha";

const FormularioContacto = () => {

    const [values, setValues] = useState({  
            nombreCompleto: '',
            telefonoMovil:  '',
            email:          '',
            desarrollos:    '',
            presupuesto:    '',
            interesadoEn:   '',
            mensaje:        ''
        });
         
        console.log(values);

    const handleChange = (e) => {
            setValues(values => ({
            ...values, 
            [e.target.name]: e.target.value
        })) 
    }

    const [status, setStatus] = useState('');
      
    const handleSubmit = (e) => {
            e.preventDefault(); 

            if (captchaValido === true) {
                emailjs.send('service_nnxz7td', 'template_9h35fdq', values, 'dl2zb3hc6kkbEGaOj')
                    .then(response => {
                        console.log('Success!!', response);
                        setValues({
                            nombreCompleto: '',
                            telefonoMovil: '',
                            email: '',
                            desarrollos: '',
                            presupuesto: '',
                            interesadoEn: '',
                            mensaje: '',
                        })
                        setStatus('SUCCESS')
                        }, error => {
                            console.log ('Failed send Email', error)
                        })
             }else {
                cambiarCaptchaValido(false);
              }
                }

    const [captchaValido, cambiarCaptchaValido] = useState(null); 
    
    const captcha = useRef(null);
    
    const onChangeCaptcha = () => {
      if (captcha.current.getValue()) {
        cambiarCaptchaValido(true)
      } else {
        cambiarCaptchaValido(false)
      }
    }
        
    useEffect(() => {
        if(status === 'SUCCESS'){
            setTimeout(() => {
                setStatus('');
            }, 3000)
        };
    }, [status])

    return ( 
       
                        <div className="relative"> 
                        <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -right-top-28"></div>
                        <div className="absolute  w-40 h-40 bg-teal-400 rounded-full -left-16 -bottom-16"></div> 
 
                        <div className="relative z-10 bg-white rounded-xl shadow-lg hover:shadow-indigo-500/40 p-8 text-gray-600 md:w-90 " >

                            {status && renderAlet()}
                            <form onSubmit={handleSubmit} id="form" action ="" className="flex flex-col space-y-4 " >
                                <InputField value={values.nombreCompleto}   handleChange={handleChange} label="Nombre Completo" name="nombreCompleto"   type="text"     placeholder="Juan Perez" />
                                <InputField value={values.telefonoMovil}    handleChange={handleChange} label="Teléfono Móvil"  name="telefonoMovil"    type="text"     placeholder="+52 55 55 55 55 55" />
                                <InputEmail value={values.email}            handleChange={handleChange} label="E-Mail"          name="email"            type="email"    placeholder="asesor.alexadelgado@gmail.com" />
                                <SelectFieldsProperties                     handleChange={handleChange} label="Desarrollos"                         name="desarrollos"  />
                                <SelectFieldsBudget                         handleChange={handleChange} label="Inversión estimada para el enganche" name="presupuesto"  />
                                <SelectFieldsInvestment                     handleChange={handleChange} label="Destino de la compra"                name="interesadoEn" />
                                <TextAreaField value={values.mensaje}       handleChange={handleChange} label="Mensaje "                            name="mensaje" />
 
                                <button 
                                    id= "button"
                                    type="submit"
                                    className=" inline-block self-end font-semibold py-2 px-6 bg-axeda text-white rounded-xl shadow-lg shadow-indigo-500/40 py-2 uppercase text-sm"
                                >
                                    Envíar Formulario
                                </button>

                                <br></br>
                                 
                                <div className="text-center">
                                    <ReCAPTCHA
                                    ref={captcha}
                                    onChange={onChangeCaptcha}
                                    sitekey={import.meta.env.VITE_PUBLIC_KEY_CAPTCHA}
                                    theme="light" 
                                    />
                                </div>
                                {captchaValido === false &&
                                    <div className="text-blue-20 br-100 text-center font-sans text-SM font-medium uppercase">
                                        Valida que no eres un Robot
                                    </div>}

                            </form> 
                          
                        </div>   
                            {status ?(
                                <div className="text-base px-4 py-3 text-axeda bg-blue-100 rounded-lg mb-1 mt-4 text-center">
                                    <p>  ¡Su mensaje ha sido enviado con éxito!. En breve nos comunicaremos con ud. ¡¡GRACIAS!! </p>
                                </div> 
                            ): <div></div>
                            }
                        </div> 
        )
    }

    const renderAlet = () => ( 
        <div></div>
    )

export default FormularioContacto
