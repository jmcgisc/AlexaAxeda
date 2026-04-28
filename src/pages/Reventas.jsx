"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Building2, DollarSign } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Reventas() {
  return (
    <>
      <Helmet>
        <title>Reventas - Isla Diamante Cancún</title>
        <meta name="description" content="Venta y cesión de derechos - Lotes en Rosavento Cancún. Oportunidad de inversión en desarrollo residencial de alta plusvalía." />
      </Helmet>
      
      <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-neutral-900 dark:to-slate-900 overflow-hidden text-gray-800 dark:text-gray-200 pb-16" style={{ paddingTop: '100px' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-blue-800 uppercase bg-blue-100 rounded-full dark:bg-blue-900/40 dark:text-blue-300">
              Oportunidad única
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-6">
              VENTA / CESIÓN DE DERECHOS
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Lotes en Rosavento Cancún
            </p>
            <p className="mt-6 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Oportunidad de inversión en desarrollo residencial de alta plusvalía en Cancún, Quintana Roo. Adquiridos directamente con la desarrolladora AXEDA. Ideal para inversionistas que buscan plusvalía a mediano y largo plazo en una de las zonas con mayor crecimiento del sureste de México.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* Lote 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-slate-700 relative"
            >
              <div className="absolute top-0 right-0 p-6 overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/10 blur-[40px] rounded-full transform translate-x-10 -translate-y-10" />
              </div>
              <div className="p-8 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-xl">
                    <MapPin className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">LOTE 1 – BORA 34A</h2>
                </div>

                <div className="space-y-4 mb-8 text-base">
                  <div className="flex justify-between border-b border-gray-100 dark:border-slate-700 pb-2">
                    <span className="text-gray-500 dark:text-gray-400">Proyecto</span>
                    <span className="font-semibold text-gray-900 dark:text-gray-200">Rosavento Cancún</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 dark:border-slate-700 pb-2">
                    <span className="text-gray-500 dark:text-gray-400">Fase</span>
                    <span className="font-semibold text-gray-900 dark:text-gray-200">Bora</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 dark:border-slate-700 pb-2">
                    <span className="text-gray-500 dark:text-gray-400">Superficie</span>
                    <span className="font-semibold text-gray-900 dark:text-gray-200">142.05 m²</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 dark:border-slate-700 pb-2">
                    <span className="text-gray-500 dark:text-gray-400">Plazo total</span>
                    <span className="font-semibold text-gray-900 dark:text-gray-200">240 meses</span>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-2xl p-6 space-y-3 mb-6">
                  <div className="flex justify-between text-[15px]">
                    <span className="text-gray-500 dark:text-gray-400">Precio final contratado:</span>
                    <span className="font-medium">$607,299 MXN</span>
                  </div>
                  <div className="flex justify-between text-[15px]">
                    <span className="text-gray-500 dark:text-gray-400">Importe pagado:</span>
                    <span className="font-medium text-green-600 dark:text-green-400">$167,766.27 MXN</span>
                  </div>
                  <div className="flex justify-between text-[15px]">
                    <span className="text-gray-500 dark:text-gray-400">Saldo pendiente:</span>
                    <span className="font-medium">$439,532.73 MXN</span>
                  </div>
                  <div className="flex justify-between text-[15px]">
                    <span className="text-gray-500 dark:text-gray-400">Saldo vencido actual:</span>
                    <span className="font-medium text-red-500">$2,277.37 MXN</span>
                  </div>
                </div>

                <p className="text-[15px] font-medium text-blue-600 dark:text-blue-400">
                  Excelente ubicación dentro del desarrollo.
                </p>
                <div className="mt-4 text-[13px] text-gray-400 dark:text-gray-500 italic">
                  Fuente: Estado de cuenta AXEDA de fecha 03/12/2025
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
              <div className="absolute top-0 right-0 p-6 overflow-hidden">
                <div className="absolute inset-0 bg-purple-500/10 blur-[40px] rounded-full transform translate-x-10 -translate-y-10" />
              </div>
              <div className="p-8 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-xl">
                    <Building2 className="text-purple-600 dark:text-purple-400 w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">LOTE 2 – BORA 78A</h2>
                </div>

                <div className="space-y-4 mb-8 text-base">
                  <div className="flex justify-between border-b border-gray-100 dark:border-slate-700 pb-2">
                    <span className="text-gray-500 dark:text-gray-400">Proyecto</span>
                    <span className="font-semibold text-gray-900 dark:text-gray-200">Rosavento Cancún</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 dark:border-slate-700 pb-2">
                    <span className="text-gray-500 dark:text-gray-400">Fase</span>
                    <span className="font-semibold text-gray-900 dark:text-gray-200">Bora</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 dark:border-slate-700 pb-2">
                    <span className="text-gray-500 dark:text-gray-400">Superficie</span>
                    <span className="font-semibold text-gray-900 dark:text-gray-200">161.42 m²</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 dark:border-slate-700 pb-2">
                    <span className="text-gray-500 dark:text-gray-400">Plazo total</span>
                    <span className="font-semibold text-gray-900 dark:text-gray-200">240 meses</span>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-2xl p-6 space-y-3 mb-6">
                  <div className="flex justify-between text-[15px]">
                    <span className="text-gray-500 dark:text-gray-400">Precio final contratado:</span>
                    <span className="font-medium">$690,107 MXN</span>
                  </div>
                  <div className="flex justify-between text-[15px]">
                    <span className="text-gray-500 dark:text-gray-400">Importe pagado:</span>
                    <span className="font-medium text-green-600 dark:text-green-400">$190,641.98 MXN</span>
                  </div>
                  <div className="flex justify-between text-[15px]">
                    <span className="text-gray-500 dark:text-gray-400">Saldo pendiente:</span>
                    <span className="font-medium">$499,465.02 MXN</span>
                  </div>
                   <div className="flex justify-between text-[15px]">
                    <span className="text-gray-500 dark:text-gray-400">Saldo vencido actual:</span>
                    <span className="font-medium text-red-500">$2,587.90 MXN</span>
                  </div>
                </div>

                <p className="text-[15px] font-medium text-purple-600 dark:text-purple-400">
                  Lote con mayor metraje y excelente potencial de plusvalía.
                </p>
                <div className="mt-4 text-[13px] text-gray-400 dark:text-gray-500 italic">
                  Fuente: Estado de cuenta AXEDA de fecha 03/12/2025
                </div>
              </div>
            </motion.div>
          </div>

          {/* Ventajas y CTA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto bg-white/50 dark:bg-slate-800/20 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 dark:border-slate-700/50 mt-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-8">Ventajas de Inversión</h3>
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
              className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 sm:p-10 rounded-3xl shadow-2xl text-white text-center"
            >
              <DollarSign className="w-16 h-16 mx-auto mb-6 opacity-80 bg-white/10 p-3 rounded-full backdrop-blur-sm" />
              <h3 className="text-3xl font-bold mb-4">¿Interesado?</h3>
              <p className="text-blue-100 mb-8 text-lg font-light leading-relaxed">
                Se escuchan propuestas serias. Puede venderse individualmente, ambos lotes juntos o mediante cesión de derechos.
              </p>
              
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-md border border-white/20">
                <p className="mb-4 text-sm uppercase tracking-wider font-semibold text-blue-200">Solo trato serio</p>
                <a
                  href="https://wa.me/525570137764" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex w-full items-center justify-center gap-2 bg-white text-blue-700 py-4 px-8 rounded-xl font-bold hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300"
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
