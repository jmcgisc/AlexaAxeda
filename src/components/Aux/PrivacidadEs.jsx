// components/Aux/Privacidad.jsx
import FormularioContacto from "./FormularioContacto";
import React from "react";

const PrivacidadES = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold text-center text-primary_isla mb-2 mt-20">Política de Privacidad</h1>

      <div className="space-y-8 text-justify leading-relaxed text-base">
        <p><strong>Última actualización:</strong> Junio 2025</p>

        <p>
          En <strong>Isla Diamante</strong>, operado por <strong>Alexa Delgado</strong>, valoramos tu privacidad y nos comprometemos a proteger la información que compartes con nosotros al visitar nuestro sitio web:{" "}
          <a href="https://desarrollosdiamante.com" className="text-primary_isla underline" target="_blank" rel="noopener noreferrer">
            https://desarrollosdiamante.com/
          </a>.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-primary_isla">1. Información que recopilamos</h2>
        <ul className="list-disc ml-6">
          <li><strong>Datos que proporcionas:</strong> nombre, correo electrónico, teléfono y cualquier información que ingreses en formularios.</li>
          <li><strong>Datos automáticos:</strong> IP, navegador, dispositivo, páginas visitadas y preferencias de cookies.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-primary_isla">2. Cómo usamos tu información</h2>
        <ul className="list-disc ml-6">
          <li>Responder tus mensajes o consultas.</li>
          <li>Enviar información sobre desarrollos y promociones (si diste consentimiento).</li>
          <li>Analizar métricas de navegación y mejorar el sitio.</li>
          <li>Cumplir con requerimientos legales.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-primary_isla">3. Uso de cookies</h2>
        <p>
          Usamos cookies propias y de terceros (como Google Analytics y Meta Pixel) para mejorar tu experiencia, medir tráfico y mostrar contenido relevante. Puedes aceptar o rechazar cookies desde el banner que aparece al visitar el sitio.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-primary_isla">4. Terceros y compartición de datos</h2>
        <p>
          No vendemos tu información. Solo compartimos datos con proveedores tecnológicos que cumplen estándares de privacidad (Netlify, Supabase, Google, Meta).
        </p>

        <h2 className="text-xl font-semibold mt-6 text-primary_isla">5. Seguridad</h2>
        <p>
          Protegemos tus datos mediante buenas prácticas de seguridad. Aun así, ningún sistema es 100% seguro.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-primary_isla">6. Tus derechos</h2>
        <p>
          Puedes solicitar el acceso, modificación o eliminación de tus datos en cualquier momento escribiendo a:
          <br />
          <a href="mailto:realtor.alexadelgado@gmail.com" className="text-primary_isla underline">realtor.alexadelgado@gmail.com</a>
        </p>

        <h2 className="text-xl font-semibold mt-6 text-primary_isla">7. Cambios a esta política</h2>
        <p>
          Podemos actualizar esta política. Notificaremos cambios importantes en el sitio web. Revisa esta página periódicamente.
        </p>

        <h2 className="text-xl font-semibold text-primary_isla">8. Contacto</h2>
        <p>
          <strong>Alexa Delgado</strong><br />
          Gerente Comercial – Isla Diamante<br />
          📧 <a href="mailto:realtor.alexadelgado@gmail.com" className="underline text-primary_isla">realtor.alexadelgado@gmail.com</a><br />
          📍 Cancún, Ciudad de México
        </p>
      </div>
    <div className="mt-12 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <FormularioContacto/>

    </div>
    
    </section>

  );
};

export default PrivacidadES;