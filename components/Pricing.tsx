"use client";

import { motion, Variants, Easing } from "framer-motion";
import { Check, ArrowRight, Zap, TrendingUp, Building2, Bot } from "lucide-react";
import { openDiagnosticoModal } from "@/lib/diagnostico-modal";

const PLANS = [
  {
    icon: Zap,
    name: "Communication System",
    price: "$14,900",
    support: "$2,490",
    description: "Para negocios que necesitan organizar su atención al cliente desde el primer día.",
    features: [
      "WhatsApp automatizado",
      "Agenda inteligente",
      "Recordatorios automáticos",
      "Confirmaciones de citas",
      "Preguntas frecuentes automatizadas",
      "Captación básica de leads",
      "Panel de seguimiento",
      "Capacitación inicial",
    ],
    highlight: false,
    badge: null,
  },
  {
    icon: TrendingUp,
    name: "Sales System",
    price: "$34,900",
    support: "$4,990",
    description: "Para empresas que venden constantemente y necesitan escalar su proceso comercial.",
    features: [
      "Todo lo del Communication System",
      "CRM personalizado",
      "Embudo de ventas automatizado",
      "Seguimiento automático de prospectos",
      "Correos automatizados",
      "Cotizaciones automáticas",
      "Dashboard de ventas",
      "Reportes y métricas",
      "Integración con herramientas existentes",
    ],
    highlight: true,
    badge: "Más solicitado",
  },
  {
    icon: Building2,
    name: "Business System",
    price: "$69,900",
    support: "$9,990",
    description: "Para empresas que quieren automatizar procesos completos de operación.",
    features: [
      "Todo lo del Sales System",
      "Automatización administrativa",
      "Control de inventario (si aplica)",
      "Facturación integrada",
      "Dashboards ejecutivos",
      "Integración entre plataformas",
      "Automatizaciones internas",
      "Capacitación al equipo completo",
    ],
    highlight: false,
    badge: null,
  },
  {
    icon: Bot,
    name: "AI Workforce",
    price: "Desde $119,900",
    support: "Desde $14,990",
    description: "Para empresas que incorporan agentes de IA como parte de su operación diaria.",
    features: [
      "Recepcionista IA",
      "Agente telefónico IA",
      "Ejecutivo de ventas IA",
      "Soporte IA 24/7",
      "Asistente administrativo IA",
      "Agentes personalizados",
      "Precio según número de agentes e integraciones",
    ],
    highlight: false,
    badge: "Personalizado",
  },
];

const EASE: Easing = "easeOut";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: EASE },
  }),
};

export default function Pricing() {
  return (
    <section className="relative py-28 overflow-hidden scroll-mt-32" id="packages">
      {/* Glow de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-blue-400/60 mb-4">
            Inversión
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Sistemas diseñados a la medida
            <br />
            <span className="text-blue-400">de cada negocio</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm leading-relaxed">
            Precios desde{" "}
            <span className="text-white/70 font-medium">$14,900 MXN</span>.
            Cada empresa recibe una propuesta personalizada según sus procesos y objetivos.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {PLANS.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`
                  relative flex flex-col rounded-2xl border p-6
                  transition-all duration-300
                  ${plan.highlight
                    ? "border-blue-500/50 bg-blue-500/[0.07] shadow-[0_0_40px_-8px_rgba(59,130,246,0.3)]"
                    : "border-white/[0.07] bg-white/[0.03] hover:border-white/[0.12] hover:bg-white/[0.05]"
                  }
                `}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className={`
                    absolute -top-3 left-1/2 -translate-x-1/2
                    text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full
                    ${plan.highlight
                      ? "bg-blue-500 text-white"
                      : "bg-white/10 text-white/50 border border-white/10"
                    }
                  `}>
                    {plan.badge}
                  </div>
                )}

                {/* Icon + Name */}
                <div className="mb-5">
                  <div className={`
                    w-9 h-9 rounded-lg flex items-center justify-center mb-4
                    ${plan.highlight ? "bg-blue-500/20 border border-blue-500/30" : "bg-white/5 border border-white/10"}
                  `}>
                    <Icon className={`w-4 h-4 ${plan.highlight ? "text-blue-400" : "text-white/50"}`} />
                  </div>
                  <h3 className="text-white font-semibold text-sm tracking-tight mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-white/35 text-xs leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-5 pb-5 border-b border-white/[0.06]">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className={`text-2xl font-bold tracking-tight ${plan.highlight ? "text-white" : "text-white/90"}`}>
                      {plan.price}
                    </span>
                    <span className="text-white/30 text-xs">MXN</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-white/25 text-[11px]">Soporte mensual:</span>
                    <span className="text-white/45 text-[11px] font-medium">{plan.support} MXN</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${plan.highlight ? "text-blue-400" : "text-white/25"}`} />
                      <span className="text-white/45 text-xs leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  type="button"
                  onClick={openDiagnosticoModal}
                  className={`
                    group w-full flex items-center justify-center gap-2
                    text-xs font-medium py-2.5 px-4 rounded-lg
                    transition-all duration-200
                    ${plan.highlight
                      ? "bg-blue-500 hover:bg-blue-400 text-white"
                      : "bg-white/5 hover:bg-white/10 text-white/60 hover:text-white border border-white/10 hover:border-white/20"
                    }
                  `}
                >
                  Solicitar diagnóstico gratuito
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.p
          className="text-center text-white/20 text-xs mt-10 font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          * Precios en pesos mexicanos. Propuesta personalizada sin costo ni compromiso.
        </motion.p>
      </div>
    </section>
  );
}
