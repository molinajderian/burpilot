"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import AutomationCard from "@/components/AutomationCard";
import DiagnosticoModal from "@/components/diagnostico/DiagnosticoModal";

const services = [
  {
    title: "Agente IA en WhatsApp",
    desc: "Atiende conversaciones, filtra oportunidades y mantiene el seguimiento activo.",
  },
  {
    title: "CRM automatizado",
    desc: "Centraliza prospectos, datos y estados comerciales sin captura manual.",
  },
  {
    title: "Agenda inteligente",
    desc: "Coordina citas y disponibilidad para convertir interés en reuniones confirmadas.",
  },
];

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="glow" />
      </div>

      <motion.section
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-screen pt-24 relative max-w-7xl mx-auto px-6"
      >
        <div className="max-w-xl">
          <motion.h1
            variants={fadeUp}
            className="text-6xl md:text-7xl font-semibold tracking-tight leading-none max-w-3xl"
          >
            Tú lideras. Nosotros piloteamos.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-white/70 mt-6 leading-relaxed text-lg"
          >
            Automatización empresarial con IA para conectar WhatsApp, CRM y agenda
            en un flujo comercial preciso, medible y siempre activo.
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-4 mt-8">
            <button
              onClick={() => setIsOpen(true)}
              className="
                px-6 py-3 rounded-xl
                bg-blue-600/80
                hover:bg-blue-500
                transition-all duration-200
                hover:scale-[1.03]
                active:scale-[0.98]
                shadow-lg shadow-blue-500/20
              "
            >
              Solicitar diagnóstico gratuito
            </button>

            <button
              className="
                px-6 py-3 rounded-xl
                border border-white/20
                hover:bg-white/10
                transition-all duration-200
              "
            >
              Ver demostración
            </button>
          </motion.div>
        </div>

        <div className="flex justify-center md:justify-end">
          <AutomationCard />
        </div>
      </motion.section>

      <section className="mt-32 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="
                p-6 rounded-xl
                bg-white/5
                border border-white/10
                hover:bg-white/10
                transition
              "
            >
              <h3 className="font-medium text-white">{s.title}</h3>
              <p className="text-white/60 text-sm mt-2 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <DiagnosticoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
