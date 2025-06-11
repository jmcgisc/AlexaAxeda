import React from 'react';
import FormularioContacto from "../Aux/FormularioContacto";


const faqData = [
  {
    title: "1. Sobre el Proyecto",
    items: [
      {
        q: "1.1. ¿Qué es Isla Diamante Cancún?",
        a: "Es un desarrollo residencial en condominio con 3,284 terrenos distribuidos en 19 privadas exclusivas y una zona comercial."
      },
      {
        q: "1.2. ¿Dónde está ubicado el desarrollo?",
        a: "Dentro del programa municipal de desarrollo urbano de Benito Juárez 2018-2033, conectado a Av. López Portillo y carretera a Mérida."
      },
      {
        q: "1.3. ¿Cuáles son las distancias clave?",
        a: "2.5 km de Av. López Portillo, 24.4 km del aeropuerto, 31.9 km de la zona hotelera, 18.9 km de la terminal ADO."
      },
      {
        q: "1.4. ¿Qué tipo de propiedad se adquiere?",
        a: "Terreno bajo régimen de condominio con reglamento de construcción y reglamento de condóminos."
      }
    ]
  },
  {
    title: "2. Sobre los Lotes y Privadas",
    items: [
      {
        q: "2.1. ¿Cuáles son las dimensiones de los terrenos?",
        a: "Terreno tipo: 120 m² (6x20m); esquinas: hasta 12m x 20m."
      },
      {
        q: "2.2. ¿Cuántas privadas tiene el desarrollo?",
        a: "19 privadas, cada una con casa club y parque temático."
      },
      {
        q: "2.3. ¿Qué infraestructura ofrece?",
        a: "Calles de concreto hidráulico, electricidad y agua potable, seguridad 24/7, barda perimetral."
      }
    ]
  },
  {
    title: "3. Sobre las Amenidades",
    items: [
      {
        q: "3.1. ¿Qué amenidades exclusivas ofrece Isla Diamante?",
        a: "Lago artificial, Master Family House, club de playa en Isla Mujeres, casas club con parques temáticos."
      }
    ]
  },
  {
    title: "4. Sobre el Financiamiento",
    items: [
      {
        q: "4.1. ¿Cuál es el plan de financiamiento?",
        a: "15% de enganche y hasta 120 meses sin intereses."
      },
      {
        q: "4.2. ¿Es a través de banco?",
        a: "No, es directo con la desarrolladora, sin buró."
      },
      {
        q: "4.3. ¿Se pueden adelantar pagos?",
        a: "Sí, sin penalizaciones."
      }
    ]
  },
  {
    title: "5. Sobre Plusvalía y Rentabilidad",
    items: [
      {
        q: "5.1. ¿Qué plusvalía ofrece?",
        a: "Hasta 50% anual en etapas tempranas."
      },
      {
        q: "5.2. ¿Por qué invertir?",
        a: "Precios iniciales, ubicación estratégica, infraestructura premium, sin intereses."
      }
    ]
  },
  {
    title: "6. Sobre la Compra y Documentación",
    items: [
      {
        q: "6.1. ¿Cómo reservar un terreno?",
        a: "Con $5,000 MXN de anticipo."
      },
      {
        q: "6.2. ¿Proceso de compra?",
        a: "Reserva, elección, contrato digital, pago del enganche."
      },
      {
        q: "6.3. ¿Documentación necesaria?",
        a: "ID, CURP, constancia fiscal, comprobante de domicilio, acta de nacimiento/matrimonio."
      },
      {
        q: "6.4. ¿Formas de pago?",
        a: "Transferencia nacional, internacional o por Wise."
      }
    ]
  },
  {
    title: "7. Sobre Seguridad y Fideicomiso",
    items: [
      {
        q: "7.1. ¿Qué es un fideicomiso inmobiliario?",
        a: "Contrato que garantiza seguridad jurídica a través de una institución financiera."
      },
      {
        q: "7.2. Beneficios?",
        a: "Protección bancaria, cumplimiento de plazos, transparencia."
      },
      {
        q: "7.3. Documentos que respaldan el proyecto?",
        a: "Constancia fiscal, cédula catastral, fideicomiso, oferta de compra, actas, uso de suelo."
      }
    ]
  },
  {
    title: "8. Sobre Cuotas de Mantenimiento",
    items: [
      {
        q: "8.1. ¿Cuándo comienzan?",
        a: "En 2029 para Azores, 2033 para los demás."
      },
      {
        q: "8.2. ¿Costo estimado?",
        a: "$20/m² mensual aprox., ajustable."
      }
    ]
  },
  {
    title: "9. Contacto",
    items: [
      {
        q: "¿Cómo obtener más información?",
        a: "Consulta con tu asesor Alexa Delgado +(52) 55 7013 7764"
      }
    ]
  }
];

const PreguntasFrecuentes = () => {
    return (
        <> 

        <div className="max-w-5xl mx-auto py-32">
        <h1 className="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h1>
        <div className="space-y-8">
            {faqData.map((section, idx) => (
            <div key={idx}>
                <h2 className="text-2xl font-semibold mb-4 text-teal-700">{section.title}</h2>
                <ul className="space-y-4">
                {section.items.map((item, i) => (
                    <li key={i}>
                    <p className="font-medium text-gray-800 dark:text-white">{item.q}</p>
                    <p className="text-gray-600 dark:text-gray-300">{item.a}</p>
                    </li>
                ))}
                </ul>
            </div>
            ))}
        </div>
        </div>
        
        {/*Formulario*/}
        <hr
            className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>

            <FormularioContacto/>  

    </>
    )
}

export default PreguntasFrecuentes
