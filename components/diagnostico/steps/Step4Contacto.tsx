// components/diagnostico/steps/Step4Contacto.tsx
"use client";

interface ContactoData {
  nombre: string;
  empresa: string;
  cargo: string;
  whatsapp: string;
  email: string;
  sitioWeb: string;
}

interface Props {
  value: ContactoData;
  onChange: (v: ContactoData) => void;
  errors: Partial<Record<keyof ContactoData, string>>;
}

const FIELDS: {
  key: keyof ContactoData;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}[] = [
  { key: "nombre", label: "Nombre completo", placeholder: "Ana García", required: true },
  { key: "empresa", label: "Empresa", placeholder: "Mi Empresa S.A.", required: true },
  { key: "cargo", label: "Cargo", placeholder: "Director General / Gerente", required: true },
  { key: "whatsapp", label: "WhatsApp", placeholder: "+52 55 1234 5678", type: "tel", required: true },
  { key: "email", label: "Correo electrónico", placeholder: "ana@miempresa.com", type: "email", required: true },
  { key: "sitioWeb", label: "Sitio web (opcional)", placeholder: "www.miempresa.com" },
];

export default function Step4Contacto({ value, onChange, errors }: Props) {
  const update = (key: keyof ContactoData, val: string) =>
    onChange({ ...value, [key]: val });

  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-1 tracking-tight">
        ¿A quién le enviamos el diagnóstico?
      </h2>
      <p className="text-white/35 text-sm mb-6">
        Tus datos son confidenciales y solo se usan para preparar tu diagnóstico.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {FIELDS.map((f) => (
          <div key={f.key} className={f.key === "sitioWeb" ? "sm:col-span-2" : ""}>
            <label className="block text-[11px] font-mono tracking-wider uppercase text-white/30 mb-1.5">
              {f.label}{f.required && <span className="text-blue-400 ml-0.5">*</span>}
            </label>
            <input
              type={f.type || "text"}
              value={value[f.key]}
              onChange={(e) => update(f.key, e.target.value)}
              placeholder={f.placeholder}
              className={`
                w-full bg-white/[0.04] border rounded-xl px-4 py-3
                text-sm text-white placeholder-white/20
                outline-none transition-all duration-150
                ${errors[f.key]
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-white/[0.08] focus:border-blue-500/50 focus:bg-white/[0.06]"
                }
              `}
            />
            {errors[f.key] && (
              <p className="text-red-400/80 text-[11px] mt-1 font-mono">{errors[f.key]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}