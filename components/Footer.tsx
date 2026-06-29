"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { openDiagnosticoModal } from "@/lib/diagnostico-modal";

const LINKS = {
  producto: [
    { label: "Servicios", href: "#services" },
    { label: "Cómo funciona", href: "#about" },
    { label: "Paquetes", href: "#packages" },
    { label: "FAQ", href: "#faq" },
  ],
  sectores: [
    { label: "Salud & Clínicas", href: "#services" },
    { label: "Legal & Despachos", href: "#services" },
    { label: "Real Estate", href: "#services" },
    { label: "Automotriz", href: "#services" },
    { label: "Educación", href: "#services" },
  ],
  empresa: [
    { label: "Contacto", href: "#contact" },
    { label: "GitHub", href: "https://github.com/molinajderian", external: true },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#050A14]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-14">

          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <span className="text-blue-400 text-xs font-bold font-mono">B</span>
              </div>
              <span className="text-white font-bold tracking-widest text-sm font-mono">BURPILOT</span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs mb-6">
              Sistemas de automatización diseñados a la medida de tu negocio.
              Tú lideras. Nosotros piloteamos.
            </p>
            <a
              href="https://wa.me/3319793949"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors text-sm group"
            >
              <MessageCircle className="w-3.5 h-3.5 text-blue-400/50 group-hover:text-blue-400 transition-colors" />
              Escríbenos por WhatsApp
            </a>
          </div>

          <div>
            <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/25 mb-4">Producto</p>
            <ul className="space-y-2.5">
              {LINKS.producto.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/40 hover:text-white/80 text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/25 mb-4">Sectores</p>
            <ul className="space-y-2.5">
              {LINKS.sectores.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/40 hover:text-white/80 text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/25 mb-4">Empresa</p>
            <ul className="space-y-2.5">
              {LINKS.empresa.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-1 text-white/40 hover:text-white/80 text-sm transition-colors group"
                  >
                    {l.label}
                    {l.external && (
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <motion.button
              type="button"
              onClick={openDiagnosticoModal}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="
                inline-flex items-center gap-1.5 mt-6
                bg-blue-500/10 hover:bg-blue-500/20
                border border-blue-500/25 hover:border-blue-500/40
                text-blue-400 text-xs font-medium
                px-4 py-2 rounded-lg transition-all duration-200
              "
            >
              Diagnóstico gratuito
              <ArrowUpRight className="w-3 h-3" />
            </motion.button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.05]">
          <p className="text-white/20 text-xs font-mono">
            © {year} BURPILOT. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/20 text-xs font-mono">Sistemas operando</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
