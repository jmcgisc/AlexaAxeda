// components/Aux/Privacy.jsx
import ContactForm from "./FormularioContacto";
import React from "react";

const PrivacyEn = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold text-center text-primary_isla mb-2 mt-20">Privacy Policy</h1>

      <div className="space-y-8 text-justify leading-relaxed text-base">
        <p><strong>Last update:</strong> June 2025</p>

        <p>
          At <strong>Isla Diamante</strong>, operated by <strong>Alexa Delgado</strong>, we value your privacy and are committed to protecting the information you share with us when visiting our website:{" "}
          <a href="https://desarrollosdiamante.com" className="text-primary_isla underline" target="_blank" rel="noopener noreferrer">
            https://desarrollosdiamante.com/
          </a>.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-primary_isla">1. Information We Collect</h2>
        <ul className="list-disc ml-6">
          <li><strong>Information you provide:</strong> name, email, phone number, and any data entered in forms.</li>
          <li><strong>Automatic data:</strong> IP address, browser, device, visited pages, and cookie preferences.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-primary_isla">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6">
          <li>To respond to your messages or inquiries.</li>
          <li>To send updates about developments and promotions (with your consent).</li>
          <li>To analyze navigation metrics and improve the site.</li>
          <li>To comply with legal requirements.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-primary_isla">3. Use of Cookies</h2>
        <p>
          We use our own and third-party cookies (such as Google Analytics and Meta Pixel) to enhance your experience, measure traffic, and display relevant content. You can accept or reject cookies through the banner that appears upon visiting the site.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-primary_isla">4. Third Parties and Data Sharing</h2>
        <p>
          We do not sell your information. We only share data with tech providers that meet privacy standards (Netlify, Supabase, Google, Meta).
        </p>

        <h2 className="text-xl font-semibold mt-6 text-primary_isla">5. Security</h2>
        <p>
          We protect your data using good security practices. However, no system is 100% secure.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-primary_isla">6. Your Rights</h2>
        <p>
          You may request access to, modification, or deletion of your data at any time by writing to:
          <br />
          <a href="mailto:realtor.alexadelgado@gmail.com" className="text-primary_isla underline">realtor.alexadelgado@gmail.com</a>
        </p>

        <h2 className="text-xl font-semibold mt-6 text-primary_isla">7. Changes to This Policy</h2>
        <p>
          We may update this policy. We will notify you of significant changes on the website. Please check this page periodically.
        </p>

        <h2 className="text-xl font-semibold text-primary_isla">8. Contact</h2>
        <p>
          <strong>Alexa Delgado</strong><br />
          Commercial Manager – Isla Diamante<br />
          📧 <a href="mailto:realtor.alexadelgado@gmail.com" className="underline text-primary_isla">realtor.alexadelgado@gmail.com</a><br />
          📍 Cancún, Mexico City
        </p>
      </div>
      <div className="mt-12 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <ContactForm />
      </div>
    </section>
  );
};

export default PrivacyEn;