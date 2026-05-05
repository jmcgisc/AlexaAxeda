"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Building2, DollarSign } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Reventas() {
  const axedaColor = "#FF6720";

  return (
    <>
      <Helmet>
        <title>Reventas - Isla Diamante Cancún</title>
        <meta name="description" content="Venta y cesión de derechos - Lotes en Rosavento Cancún. Oportunidad de inversión en desarrollo residencial de alta plusvalía." />
      </Helmet>

      <section className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50 dark:from-neutral-900 dark:to-slate-900 overflow-hidden text-gray-800 dark:text-gray-200 pb-16" style={{ paddingTop: '100px' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span
              className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider uppercase rounded-full"
              style={{ backgroundColor: `${axedaColor}20`, color: axedaColor }}
            >
              Oportunidad única
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6"
              style={{ color: axedaColor }}
            >
              VENTA / CESIÓN DE DERECHOS
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto">
              Lotes en Rosavento Cancún
            </p>
            <p className="mt-6 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Oportunidad de inversión en desarrollo residencial de alta plusvalía en Cancún, Quintana Roo. Adquiridos directamente con la desarrolladora AXEDA.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* Lote 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-slate-700 relative"
            >
              <div className="p-8 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: `${axedaColor}15` }}>
                    <MapPin style={{ color: axedaColor }} className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 ">LOTE 1 – BORA 34A</h2>
                </div>

                <div className="space-y-4 mb-8 text-base">
                  <div className="flex justify-between border-b border-gray-100 dark:border-slate-700 pb-2">
                    <span className="text-gray-500 dark:text-gray-400">Superficie</span>
                    <span className="font-semibold text-gray-900 ">142.05 m²</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 dark:border-slate-700 pb-2">
                    <span className="text-gray-500 dark:text-gray-400">Plazo total</span>
                    <span className="font-semibold text-gray-900 ">240 meses</span>
                  </div>
                </div>

                <div className="bg-slate-50  rounded-2xl p-6 space-y-3 mb-6">
                  <div className="flex justify-between text-[15px]">
                    <span className="text-gray-500">Precio final:</span>
                    <span className="font-medium text-gray-500">$607,299 MXN</span>
                  </div>
                  <div className="flex justify-between text-[15px]">
                    <span className="text-gray-500">Pagado:</span>
                    <span className="font-medium text-green-600">$167,766.27 MXN</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Lote 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-slate-700 relative"
            >
              <div className="p-8 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: `${axedaColor}15` }}>
                    <Building2 style={{ color: axedaColor }} className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">LOTE 2 – BORA 78A</h2>
                </div>

                <div className="space-y-4 mb-8 text-base">
                  <div className="flex justify-between border-b border-gray-100 dark:border-slate-700 pb-2">
                    <span className="text-gray-500 dark:text-gray-400">Superficie</span>
                    <span className="font-semibold text-gray-900 ">161.42 m²</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 dark:border-slate-700 pb-2">
                    <span className="text-gray-500 dark:text-gray-400">Plazo total</span>
                    <span className="font-semibold text-gray-900 ">240 meses</span>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 space-y-3 mb-6">
                  <div className="flex justify-between text-[15px]">
                    <span className="text-gray-500">Precio final:</span>
                    <span className="font-medium text-gray-500">$690,107 MXN</span>
                  </div>
                  <div className="flex justify-between text-[15px]">
                    <span className="text-gray-500">Pagado:</span>
                    <span className="font-medium text-green-600">$190,641.98 MXN</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>


          {/* Sección del Video CORREGIDA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full max-w-4xl mx-auto mb-20 p-2 sm:p-3 rounded-3xl shadow-xl border relative"
            style={{
              borderColor: `${axedaColor}30`, // Borde suave con el color Axeda
              background: 'linear-gradient(135deg, white 0%, #f9fafb 100%)' // Fondo muy sutil
            }}
          >
            {/* Contenedor con Aspect Ratio Forzado 16:9 */}
            {/* La clase pb-[56.25%] fuerza una proporción exacta de 16:9 (100 / 56.25 = 1.777) */}
            <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-2xl shadow-inner bg-slate-100">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/KdN-h8qob10"
                title="CANCÚN: LA MEJOR OPCIÓN PARA VIVIR E INVERTIR | VIDEOLOG GRUPO AXEDA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>

            {/* Decoración sutil: un brillo interno con el color Axeda */}
            <div
              className="absolute inset-0 rounded-3xl opacity-10 blur-xl -z-10"
              style={{ background: axedaColor }}
            />
          </motion.div>

          {/* Ventajas y CTA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto bg-white/50 dark:bg-slate-800/20 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 dark:border-slate-700/50 mt-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold mb-8" style={{ color: axedaColor }}>Ventajas de Inversión</h3>
              <ul className="space-y-4">
                {[
                  "Desarrollo con alta proyección de crecimiento",
                  "Zona de fuerte plusvalía en Cancún",
                  "Inversión patrimonial segura",
                  "Posibilidad de cesión de derechos",
                  "Ideal para inversión o patrimonio familiar",
                  "Financiamiento vigente con desarrolladora"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-10 rounded-3xl shadow-2xl text-white text-center"
              style={{ backgroundColor: axedaColor }}
            >
              <DollarSign className="w-16 h-16 mx-auto mb-6 opacity-80 bg-white/10 p-3 rounded-full backdrop-blur-sm" />
              <h3 className="text-3xl font-bold mb-4">¿Interesado?</h3>
              <p className="text-orange-50 mb-8 text-lg font-light leading-relaxed">
                Se escuchan propuestas serias para estos terrenos de Grupo Axeda.
              </p>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-md border border-white/20">
                <a
                  href="https://wa.me/525570137764"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 bg-white py-4 px-8 rounded-xl font-bold hover:-translate-y-1 transition-all duration-300 shadow-lg"
                  style={{ color: axedaColor }}
                >
                  Contactar por Mensaje
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
}