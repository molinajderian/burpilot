// components/diagnostico/steps/Step3Herramientas.tsx
"use client";

import { HERRAMIENTAS } from "@/lib/diagnostico";
import { Check } from "lucide-react";

interface Props {
  value: string[];
  onChange: (v: string[]) => void;
}

export default function Step3Herramientas({ value, onChange }: Props) {
  const toggle = (h: string) => {
    onChange(value.includes(h) ? value.filter((x) => x !== h) : [...value, h]);
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-1 tracking-tight">
        ¿Qué herramientas usan actualmente?
      </h2>
      <p className="text-white/35 text-sm mb-6">
        Puedes seleccionar todas las que apliquen.
      </p>
      <div className="grid grid-cols-2 gap-2">
        {HERRAMIENTAS.map((h) => {
          const selected = value.includes(h);
          return (
            <button
              key={h}
              type="button"
              onClick={() => toggle(h)}
              className={`
                flex items-center gap-2.5 px-4 py-3 rounded-xl border text-sm text-left
                transition-all duration-150
                ${selected
                  ? "border-blue-500/60 bg-blue-500/10 text-white"
                  : "border-white/[0.07] bg-white/[0.03] text-white/50 hover:border-white/20 hover:text-white/80"
                }
              `}
            >
              <div className={`
                w-4 h-4 rounded-md border flex-shrink-0 flex items-center justify-center
                transition-all duration-150
                ${selected ? "bg-blue-500 border-blue-500" : "border-white/20"}
              `}>
                {selected && <Check className="w-2.5 h-2.5 text-white" />}
              </div>
              {h}
            </button>
          );
        })}
      </div>
    </div>
  );
}