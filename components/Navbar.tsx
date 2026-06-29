"use client";

import { openDiagnosticoModal } from "@/lib/diagnostico-modal";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-6 flex w-[92%] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold">
            B
          </div>

          <div>
            <p className="font-semibold tracking-wide">BURPILOT</p>
            <p className="text-xs text-slate-400">
              Tú lideras. Nosotros piloteamos.
            </p>
          </div>
        </div>

        <nav className="hidden gap-8 text-sm md:flex">
          <a href="#services" className="hover:text-blue-400">Servicios</a>
          <a href="#packages" className="hover:text-blue-400">Paquetes</a>
          <a href="#about" className="hover:text-blue-400">Proceso</a>
          <a href="#contact" className="hover:text-blue-400">Contacto</a>
        </nav>

        <button
          type="button"
          onClick={openDiagnosticoModal}
          className="rounded-full bg-blue-600 px-5 py-2 font-medium transition hover:bg-blue-500"
        >
          Diagnóstico gratuito
        </button>
      </div>
    </header>
  );
}
