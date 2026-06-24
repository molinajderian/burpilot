"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "¿Cuánto tiempo tarda la implementación?",
    a: "Depende del sistema. El Communication System puede estar operando en 1–2 semanas. El Sales System toma entre 3–4 semanas. El Business System y AI Workforce requieren entre 4–8 semanas según la complejidad de tus procesos.",
  },
  {
    q: "¿Necesito tener conocimientos técnicos para usar los sistemas?",
    a: "No. Toda la configuración, integración y puesta en marcha la hacemos nosotros. Al finalizar, capacitamos a tu equipo para que puedan operar el sistema sin depender de nosotros para el día a día.",
  },
  {
    q: "¿Qué pasa si ya tengo herramientas como un CRM o sistema de agenda?",
    a: "Trabajamos con lo que ya tienes. Antes de proponer cualquier solución, hacemos un diagnóstico de tus herramientas actuales y diseñamos la automatización para integrarse con ellas, no para reemplazarlas.",
  },
  {
    q: "¿El soporte mensual es obligatorio?",
    a: "No es obligatorio, pero sí recomendado. El soporte mensual incluye mantenimiento, ajustes, monitoreo del sistema y mejoras continuas. Sin él, el sistema sigue funcionando pero cualquier cambio o corrección se cotiza por separado.",
  },
  {
    q: "¿Qué es el diagnóstico gratuito?",
    a: "Es una sesión de 30–45 minutos donde analizamos tus procesos actuales, identificamos los cuellos de botella y te mostramos exactamente qué se puede automatizar y qué impacto tendría. Sin costo y sin compromiso de compra.",
  },
  {
    q: "¿Trabajan solo con empresas en México?",
    a: "Principalmente, sí. Nuestros sistemas están optimizados para el contexto empresarial mexicano: WhatsApp como canal principal, facturación con SAT, y herramientas de uso común en LATAM. Sin embargo, podemos trabajar con empresas en otros países hispanohablantes.",
  },
  {
    q: "¿Los agentes de IA del AI Workforce suenan como robots?",
    a: "No. Los agentes están diseñados para comunicarse de forma natural, usando el tono y vocabulario de tu marca. Antes de activarlos, los configuramos y ajustamos contigo para que representen correctamente a tu empresa.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-28 overflow-hidden" id="faq">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/4 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-2xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-blue-400/60 mb-4">
            Preguntas frecuentes
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Todo lo que necesitas
            <br />
            <span className="text-white/40">saber antes de empezar</span>
          </h2>
        </motion.div>

        {/* Items */}
        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className={`
                  w-full text-left px-5 py-4 rounded-xl border
                  flex items-start justify-between gap-4
                  transition-all duration-200
                  ${open === i
                    ? "border-blue-500/30 bg-blue-500/[0.06]"
                    : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.10] hover:bg-white/[0.04]"
                  }
                `}
              >
                <span className={`text-sm font-medium leading-snug transition-colors ${open === i ? "text-white" : "text-white/70"}`}>
                  {faq.q}
                </span>
                <div className={`
                  flex-shrink-0 w-5 h-5 rounded-md border flex items-center justify-center mt-0.5
                  transition-all duration-200
                  ${open === i
                    ? "border-blue-500/40 bg-blue-500/20 rotate-45"
                    : "border-white/10 bg-white/5"
                  }
                `}>
                  <Plus className={`w-3 h-3 transition-colors ${open === i ? "text-blue-400" : "text-white/30"}`} />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pt-3 pb-4">
                      <p className="text-white/45 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}