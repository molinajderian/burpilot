// lib/diagnostico.ts
// Tipos y lógica de envío — preparado para conectar con email/CRM/webhook

export interface DiagnosticoData {
  // Step 1 — Problema
  problema: string;

  // Step 2 — Operación
  volumenClientes: string;

  // Step 3 — Herramientas
  herramientas: string[];
  herramientasOtro?: string;

  // Step 4 — Contacto
  nombre: string;
  empresa: string;
  cargo: string;
  whatsapp: string;
  email: string;
  sitioWeb?: string;
}

export const PROBLEMAS = [
  { id: "atencion", label: "Atención al cliente lenta o desorganizada" },
  { id: "leads", label: "Pierdo prospectos por falta de seguimiento" },
  { id: "agenda", label: "Gestión de citas y agenda manual" },
  { id: "admin", label: "Procesos administrativos que consumen tiempo" },
  { id: "ventas", label: "Proceso de ventas sin estructura" },
  { id: "otro", label: "Otro problema operativo" },
];

export const VOLUMENES = [
  { id: "menos50", label: "Menos de 50 al mes" },
  { id: "50-200", label: "Entre 50 y 200 al mes" },
  { id: "200-500", label: "Entre 200 y 500 al mes" },
  { id: "mas500", label: "Más de 500 al mes" },
];

export const HERRAMIENTAS = [
  "WhatsApp",
  "Excel / Sheets",
  "Correo electrónico",
  "CRM (HubSpot, Zoho, etc.)",
  "Agenda física / papel",
  "Sistema de facturación",
  "Redes sociales",
  "Otro",
];

// ── Envío de datos ──────────────────────────────────────────────
// Por ahora guarda en consola y localStorage.
// Reemplaza submitDiagnostico con tu integración real:
// - fetch a una API route de Next.js
// - Resend / SendGrid para email
// - webhook de Make / n8n / Zapier
// - POST a tu CRM
export async function submitDiagnostico(data: DiagnosticoData): Promise<void> {
  console.log("[BURPILOT] Nuevo diagnóstico:", JSON.stringify(data, null, 2));

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbzr-wo5u4KkoQciyYY81OYfKJpKyxlyPnz-CedOWMweRwqSs9TAyXNnj7XoQY9LWnv5/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
  } catch (error) {
    console.error("Error enviando lead:", error);
  }

  await new Promise((r) => setTimeout(r, 1200));
}