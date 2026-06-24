"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Glow central */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-blue-500/10 rounded-full blur-[60px]" />
      </div>

      {/* Grid de fondo sutil */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-mono tracking-widest uppercase text-blue-400/70">
              Sin costo · Sin compromiso
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-6">
            Tu empresa puede
            <br />
            <span className="text-blue-400">operar sola</span>
            <br />
            mientras tú lideras.
          </h2>

          {/* Subtext */}
          <p className="text-white/40 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Agenda un diagnóstico gratuito. En 30 minutos identificamos
            qué procesos puedes automatizar y cuánto te costaría no hacerlo.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="
                group flex items-center gap-2.5
                bg-blue-500 hover:bg-blue-400
                text-white font-medium text-sm
                px-6 py-3.5 rounded-xl
                transition-colors duration-200
                shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)]
                hover:shadow-[0_0_40px_-5px_rgba(59,130,246,0.7)]
              "
            >
              <Calendar className="w-4 h-4" />
              Solicitar diagnóstico gratuito
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>

            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="
                flex items-center gap-2
                text-white/40 hover:text-white/70
                text-sm font-medium
                px-6 py-3.5 rounded-xl
                border border-white/[0.06] hover:border-white/[0.12]
                bg-white/[0.02] hover:bg-white/[0.05]
                transition-all duration-200
              "
            >
              Ver sistemas y precios
            </motion.a>
          </div>

          {/* Trust micro-copy */}
          <p className="text-white/20 text-xs font-mono mt-8 tracking-wide">
            Respuesta en menos de 24 hrs · Primera sesión sin costo
          </p>
        </motion.div>
      </div>

      {/* Separador superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </section>
  );
}