// components/diagnostico/steps/Step2Operacion.tsx
"use client";

import { VOLUMENES } from "@/lib/diagnostico";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export default function Step2Operacion({ value, onChange }: Props) {
  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-1 tracking-tight">
        ¿Cuántos clientes o prospectos atienden al mes?
      </h2>
      <p className="text-white/35 text-sm mb-6">
        Esto nos ayuda a dimensionar la solución correcta para ti.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {VOLUMENES.map((v) => (
          <button
            key={v.id}
            type="button"
            onClick={() => onChange(v.id)}
            className={`
              text-left px-4 py-3.5 rounded-xl border text-sm
              transition-all duration-150
              ${value === v.id
                ? "border-blue-500/60 bg-blue-500/10 text-white"
                : "border-white/[0.07] bg-white/[0.03] text-white/50 hover:border-white/20 hover:text-white/80 hover:bg-white/[0.05]"
              }
            `}
          >
            {v.label}
          </button>
        ))}
      </div>
    </div>
  );
}