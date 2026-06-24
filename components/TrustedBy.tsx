"use client";

import { motion } from "framer-motion";

const LOGOS = [
  { name: "Clínica Médica Norte", sector: "Salud" },
  { name: "Despacho Jurídico MX", sector: "Legal" },
  { name: "AutoGrupo Premier", sector: "Automotriz" },
  { name: "Inmobiliaria Cenit", sector: "Real Estate" },
  { name: "Estética Luxe", sector: "Belleza" },
  { name: "Constructora Ágora", sector: "Construcción" },
  { name: "Academia ProLearn", sector: "Educación" },
  { name: "Restaurante Group 5", sector: "Hospitalidad" },
];

const ITEMS = [...LOGOS, ...LOGOS];

export default function TrustedBy() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
        <p className="text-xs font-mono tracking-[0.25em] uppercase text-blue-400/60 mb-2">
          Empresas que ya automatizan con BURPILOT
        </p>
        <h2 className="text-white/30 text-sm font-light">
          Sectores que confían en nuestros sistemas
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#050A14] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#050A14] to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ width: "max-content" }}
        >
          {ITEMS.map((logo, i) => (
            <LogoCard key={i} name={logo.name} sector={logo.sector} />
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </section>
  );
}

function LogoCard({ name, sector }: { name: string; sector: string }) {
  return (
    <div
      className="
        flex-shrink-0 flex flex-col items-center justify-center
        w-52 h-20 px-5
        rounded-xl border border-white/[0.06]
        bg-white/[0.03] backdrop-blur-sm
        hover:border-blue-500/30 hover:bg-blue-500/[0.04]
        transition-all duration-300 group cursor-default
      "
    >
      <div className="flex items-center gap-2 mb-1">
        <div className="w-5 h-5 rounded-md bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
          <span className="text-blue-400 text-[9px] font-bold font-mono">
            {name.charAt(0)}
          </span>
        </div>
        <span className="text-white/70 text-sm font-medium tracking-tight group-hover:text-white/90 transition-colors">
          {name}
        </span>
      </div>
      <span className="text-[10px] font-mono text-blue-400/40 tracking-wider uppercase group-hover:text-blue-400/60 transition-colors">
        {sector}
      </span>
    </div>
  );
}