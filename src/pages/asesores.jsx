"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Users, Target, BarChart3, Megaphone, Handshake, Scale, CreditCard, HeartHandshake } from "lucide-react";

const agentes = [
  {
    id: "coordinador",
    nombre: "Coordinador",
    descripcion: "Dirige a cada departamento según la consulta.",
    url: "https://chatgpt.com/g/g-68c314aff784819182df318c78e9504f-coordinador-isla-diamante",
    color: "from-green-400 to-green-600",
    icon: <Users className="w-6 h-6" />
  },
  {
    id: "ventas",
    nombre: "Ventas",
    descripcion: "Agendar visitas, explicar planes y cerrar ventas.",
    url: "https://chatgpt.com/g/g-68c315d731e48191b42565e700c67a70-ventas-desarrollos-diamante",
    color: "from-blue-400 to-blue-600",
    icon: <Target className="w-6 h-6" />
  }, 
  {
    id: "especialista",
    nombre: "Especialista en Inversiones",
    descripcion: "Explica ROI, plusvalía y ventajas frente a otros activos.",
    url: "https://chatgpt.com/g/g-68c31719fd108191b5c8659fe7ddb727-especialista-en-inversiones-isla-diamante",
    color: "from-yellow-400 to-yellow-600",
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    id: "marketing",
    nombre: "Marketing",
    descripcion: "Diseña campañas y estrategias digitales.",
    url: "https://chatgpt.com/g/g-68c317913e188191910457c5331c5d0d-marketing-isla-diamante",
    color: "from-indigo-400 to-indigo-600",
    icon: <Megaphone className="w-6 h-6" />
  },
  {
    id: "relaciones",
    nombre: "Relaciones Públicas",
    descripcion: "Gestión con prensa, entrevistas y alianzas.",
    url: "https://chatgpt.com/g/g-68c319092c788191b4b51cf6840ed3f8-relaciones-publicas-isla-diamante",
    color: "from-purple-400 to-purple-600",
    icon: <Handshake className="w-6 h-6" />
  },
  {
    id: "legal",
    nombre: "Legal",
    descripcion: "Explica contratos, escrituras y seguridad jurídica.",
    url: "https://chatgpt.com/g/g-68c31a1a50ec81918a41069f45514e18-legal-isla-diamante",
    color: "from-red-400 to-red-600",
    icon: <Scale className="w-6 h-6" />
  },
  {
    id: "finanzas",
    nombre: "Finanzas",
    descripcion: "Planes de pago, facturación y reembolsos.",
    url: "https://chatgpt.com/g/g-68c31d5e2e8881919414a6dca5fc9cba-finanzas-isla-diamante",
    color: "from-orange-400 to-orange-600",
    icon: <CreditCard className="w-6 h-6" />
  },
  {
    id: "postventa",
    nombre: "Postventa",
    descripcion: "Seguimiento después de la compra y soporte al cliente.",
    url: "https://chatgpt.com/g/g-68c31d13faf48191b0e6bf85d1f5f03e-postventa-isla-diamante",
    color: "from-pink-400 to-pink-600",
    icon: <HeartHandshake className="w-6 h-6" />
  },
];

export default function AsesoresPage() {
  const [active, setActive] = useState("coordinador");

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-neutral-900 dark:to-slate-900 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 pt-8"
        >
          <h1 className="text-4xl md:text-5xl py-20 font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Panel de Asesores Especializados
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Conecta con el experto adecuado para cada necesidad en Desarrollos Diamante
          </p>
        </motion.div>

        {/* Grid de agentes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {agentes.map((agente) => (
            <motion.button
              key={agente.id}
              onClick={() => setActive(agente.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-2xl text-left transition-all duration-300 ${
                active === agente.id
                  ? "bg-white dark:bg-slate-800 shadow-xl ring-2 ring-blue-500"
                  : "bg-white/70 dark:bg-slate-800/70 shadow-md hover:shadow-lg"
              }`}
            >
              <div className={`inline-flex p-3 rounded-xl mb-3 ${agente.color} text-white`}>
                {agente.icon}
              </div>
              <h3 className="font-semibold text-lg mb-1">{agente.nombre}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {agente.descripcion}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Detalles del agente activo */}
        <AnimatePresence mode="wait">
          {agentes.map(
            (agente) =>
              active === agente.id && (
                <motion.div
                  key={agente.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-4xl mx-auto bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl shadow-xl overflow-hidden"
                >
                  <div className={`h-2 w-full ${agente.color}`}></div>
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                      <div className={`p-4 rounded-xl ${agente.color} text-white`}>
                        {agente.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">{agente.nombre}</h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg">
                          {agente.descripcion}
                        </p>
                      </div>
                    </div>
                    
                    <motion.a
                      href={agente.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <span>Conectar con {agente.nombre.split(' ')[0]}</span>
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>

        {/* Footer decorativo */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-slate-800"
        >
          <p className="text-gray-500 dark:text-gray-400">
            Desarrollos Diamante - Asesores especializados para cada necesidad
          </p>
        </motion.div>
      </div>
    </section>
  );
}