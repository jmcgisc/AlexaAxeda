import React from 'react';
import FormularioContacto from "./FormularioContacto";


const faqData = [
  {
    title: "1. About the Project",
    items: [
      {
        q: "1.1. What is Isla Diamante Cancún?",
        a: "It is a residential condominium development with 3,284 lots distributed in 19 exclusive private areas and a commercial area."
      },
      {
        q: "1.2. Where is the development located?",
        a: "Within the municipal urban development program of Benito Juárez 2018-2033, connected to Av. López Portillo and the highway to Mérida."
      },
      {
        q: "1.3. What are the key distances?",
        to: "2.5 km from Av. López Portillo, 24.4 km from the airport, 31.9 km from the hotel zone, 18.9 km from the ADO terminal."
      },
      {
        q: "1.4. What type of property is acquired?",
        a: "Land under condominium regime with construction regulations and condominium regulations."
      }
    ]
  },
  {
    title: "2. About the Lots and Private",
    items: [
      {
        q: "2.1. What are the dimensions of the land?",
        a: "Typical land: 120 m² (6x20m); corners: up to 12m x 20m."
      },
      {
        q: "2.2. How many private businesses does the development have?",
        a: "19 private ones, each with a clubhouse and theme park."
      },
      {
        q: "2.3. What infrastructure does it offer?",
        a: "Hydraulic concrete streets, electricity and drinking water, 24/7 security, perimeter fence."
      }
    ]
  },
  {
   title: "3. About the Amenities",
    items: [
      {
        q: "3.1. What exclusive amenities does Isla Diamante offer?",
        a: "Artificial lake, Master Family House, beach club on Isla Mujeres, clubhouses with theme parks."
      }
    ]
  },
  {
    title: "4. About Financing",
    items: [
      {
        q: "4.1. What is the financing plan?",
        a: "15% down payment and up to 120 months without interest."
      },
      {
        q: "4.2. Is it through a bank?",
        to: "No, it's direct with the developer, without bureau."
      },
      {
        q: "4.3. Can payments be advanced?",
        a: "Yes, without penalties."
      }
    ]
  },
  {
    title: "5. About Capital Gains and Profitability",
    items: [
      {
        q: "5.1. What capital gains does it offer?",
        a: "Up to 50% annually in early stages."
      },
      {
        q: "5.2. Why invest?",
        a: "Initial prices, strategic location, premium infrastructure, no interest."
      }
    ]
  },
  {
    title: "6. About the Purchase and Documentation",
    items: [
      {
        q: "6.1. How to reserve a plot of land?",
        a: "With $5,000 MXN advance."
      },
      {
        q: "6.2. Purchase process?",
        a: "Reservation, election, digital contract, down payment."
      },
      {
        q: "6.3. Necessary documentation?",
        a: "ID, CURP, tax certificate, proof of address, birth/marriage certificate."
      },
      {
        q: "6.4. Payment methods?",
        a: "National, international or Wise transfer."
      }
    ]
  },
  {
    title: "7. About Security and Trust",
    items: [
      {
        q: "7.1. What is a real estate trust?",
        a: "Contract that guarantees legal security through a financial institution."
      },
      {
        q: "7.2. Benefits?",
        a: "Bank protection, compliance with deadlines, transparency."
      },
      {
        q: "7.3. Documents that support the project?",
        a: "Tax record, cadastral certificate, trust, purchase offer, minutes, land use."
      }
    ]
  },
  {
    title: "8. About Maintenance Fees",
    items: [
      {
        q: "8.1. When do they start?",
        a: "In 2029 for the Azores, 2033 for the others."
      },
      {
        q: "8.2. Estimated cost?",
        a: "$20/m² monthly approx., adjustable."
      }
    ]
  },
  {
    title: "9. Contact",
    items: [
      {
        q: "How to get more information?",
        to: "Consult with your advisor Alexa Delgado +(52) 55 7013 7764"
      }
    ]
  }
];

const PreguntasFrecuentesEn = () => {
    return (
        <> 

        <div className="max-w-5xl mx-auto py-32">
        <h1 className="text-3xl font-bold text-center mb-8">FAQ</h1>
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

export default PreguntasFrecuentesEn
