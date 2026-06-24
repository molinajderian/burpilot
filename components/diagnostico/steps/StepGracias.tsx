// components/diagnostico/steps/StepGracias.tsx
"use client";

import { motion } from "framer-motion";
import { MessageCircle, CheckCircle } from "lucide-react";

interface Props {
  nombre: string;
  whatsapp?: string; // número de WhatsApp de BURPILOT
}

const BURPILOT_WHATSAPP = "3319793949"; // ← reemplaza con tu número real

export default function StepGracias({ nombre, whatsapp = BURPILOT_WHATSAPP }: Props) {
  const firstName = nombre.split(" ")[0];
  const waURL = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
    `Hola, acabo de completar el diagnóstico de BURPILOT. Mi nombre es ${nombre}.`
  )}`;

  return (
    <motion.div
      className="text-center py-4"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Ícono */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-blue-400" />
          </div>
          <div className="absolute -inset-2 bg-blue-500/10 rounded-3xl blur-xl -z-10" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
        ¡Listo, {firstName}!
      </h2>
      <p className="text-white/40 text-sm leading-relaxed max-w-sm mx-auto mb-8">
        Recibimos tu diagnóstico. Nuestro equipo lo revisará y te contactará
        en menos de <span className="text-white/70">24 horas</span> para agendar tu sesión gratuita.
      </p>

      {/* CTA WhatsApp */}
      <a
        href={waURL}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex items-center gap-2.5
          bg-[#25D366] hover:bg-[#20bd5a]
          text-white font-medium text-sm
          px-6 py-3.5 rounded-xl
          transition-colors duration-200
          shadow-[0_0_30px_-5px_rgba(37,211,102,0.4)]
        "
      >
        <MessageCircle className="w-4 h-4" />
        Continuar por WhatsApp
      </a>

      <p className="text-white/15 text-xs font-mono mt-6">
        También puedes esperar a que te contactemos por correo.
      </p>
    </motion.div>
  );
}