// components/diagnostico/StepIndicator.tsx
"use client";

import { motion } from "framer-motion";

interface Props {
  current: number;
  total: number;
  labels: string[];
}

export default function StepIndicator({ current, total, labels }: Props) {
  return (
    <div className="w-full">
      {/* Barra de progreso */}
      <div className="h-px bg-white/10 rounded-full mb-6 relative">
        <motion.div
          className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${(current / total) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>

      {/* Dots */}
      <div className="flex items-center justify-between">
        {labels.map((label, i) => {
          const step = i + 1;
          const done = step < current;
          const active = step === current;
          return (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <div className={`
                w-6 h-6 rounded-full border flex items-center justify-center
                text-[10px] font-mono font-bold transition-all duration-300
                ${done ? "bg-blue-500 border-blue-500 text-white"
                  : active ? "bg-blue-500/20 border-blue-500 text-blue-400"
                  : "bg-white/5 border-white/10 text-white/20"}
              `}>
                {done ? "✓" : step}
              </div>
              <span className={`text-[9px] font-mono tracking-wider uppercase hidden sm:block transition-colors ${active ? "text-blue-400/80" : done ? "text-white/40" : "text-white/15"}`}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}