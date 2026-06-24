// components/diagnostico/steps/Step1Problema.tsx
"use client";

import { PROBLEMAS } from "@/lib/diagnostico";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export default function Step1Problema({ value, onChange }: Props) {
  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-1 tracking-tight">
        ¿Cuál es tu principal problema operativo?
      </h2>
      <p className="text-white/35 text-sm mb-6">
        Selecciona el que más te identifica ahora mismo.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {PROBLEMAS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => onChange(p.id)}
            className={`
              text-left px-4 py-3.5 rounded-xl border text-sm
              transition-all duration-150 leading-snug
              ${value === p.id
                ? "border-blue-500/60 bg-blue-500/10 text-white"
                : "border-white/[0.07] bg-white/[0.03] text-white/50 hover:border-white/20 hover:text-white/80 hover:bg-white/[0.05]"
              }
            `}
          >
            {p.label}
          </button>
        ))}
      </div>
    </div>
  );
}