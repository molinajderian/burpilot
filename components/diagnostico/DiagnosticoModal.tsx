// components/diagnostico/DiagnosticoModal.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";
import StepIndicator from "./StepIndicator";
import Step1Problema from "./steps/Step1Problema";
import Step2Operacion from "./steps/Step2Operacion";
import Step3Herramientas from "./steps/Step3Herramientas";
import Step4Contacto from "./steps/Step4Contacto";
import StepGracias from "./steps/StepGracias";
import { submitDiagnostico, DiagnosticoData } from "@/lib/diagnostico";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const STEP_LABELS = ["Problema", "Operación", "Herramientas", "Contacto"];
const TOTAL_STEPS = 4;

const EMPTY_CONTACTO = {
  nombre: "", empresa: "", cargo: "",
  whatsapp: "", email: "", sitioWeb: "",
};

export default function DiagnosticoModal({ isOpen, onClose }: Props) {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  // Datos por step
  const [problema, setProblema] = useState("");
  const [volumen, setVolumen] = useState("");
  const [herramientas, setHerramientas] = useState<string[]>([]);
  const [contacto, setContacto] = useState(EMPTY_CONTACTO);
  const [contactoErrors, setContactoErrors] = useState<Partial<typeof EMPTY_CONTACTO>>({});

  const canNext = () => {
    if (step === 1) return !!problema;
    if (step === 2) return !!volumen;
    if (step === 3) return herramientas.length > 0;
    return true;
  };

  const validateContacto = () => {
    const errors: Partial<typeof EMPTY_CONTACTO> = {};
    if (!contacto.nombre.trim()) errors.nombre = "Campo requerido";
    if (!contacto.empresa.trim()) errors.empresa = "Campo requerido";
    if (!contacto.cargo.trim()) errors.cargo = "Campo requerido";
    if (!contacto.whatsapp.trim()) errors.whatsapp = "Campo requerido";
    if (!contacto.email.trim()) errors.email = "Campo requerido";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contacto.email))
      errors.email = "Correo inválido";
    setContactoErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = async () => {
    if (step < TOTAL_STEPS) {
      setStep((s) => s + 1);
      return;
    }
    // Submit
    if (!validateContacto()) return;
    setLoading(true);
    const data: DiagnosticoData = {
      problema, volumenClientes: volumen,
      herramientas, ...contacto,
    };
    await submitDiagnostico(data);
    setLoading(false);
    setDone(true);
  };

  const handleClose = () => {
    onClose();
    // Reset después de la animación
    setTimeout(() => {
      setStep(1); setDone(false);
      setProblema(""); setVolumen("");
      setHerramientas([]); setContacto(EMPTY_CONTACTO);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Panel */}
          <motion.div
            className="
              fixed inset-x-4 bottom-0 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2
              sm:top-1/2 sm:-translate-y-1/2
              w-full sm:w-[560px] max-h-[90vh] overflow-y-auto
              bg-[#070D1A] border border-white/[0.08] rounded-t-2xl sm:rounded-2xl
              shadow-[0_0_80px_-20px_rgba(59,130,246,0.3)]
              z-50 flex flex-col
            "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/[0.06]">
              <div>
                <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-blue-400/60 mb-0.5">
                  BURPILOT
                </p>
                <h3 className="text-white font-semibold text-sm">
                  Diagnóstico gratuito
                </h3>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Contenido */}
            <div className="px-6 py-6 flex-1">
              {!done && (
                <div className="mb-8">
                  <StepIndicator
                    current={step}
                    total={TOTAL_STEPS}
                    labels={STEP_LABELS}
                  />
                </div>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={done ? "gracias" : step}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.2 }}
                >
                  {done ? (
                    <StepGracias nombre={contacto.nombre} />
                  ) : step === 1 ? (
                    <Step1Problema value={problema} onChange={setProblema} />
                  ) : step === 2 ? (
                    <Step2Operacion value={volumen} onChange={setVolumen} />
                  ) : step === 3 ? (
                    <Step3Herramientas value={herramientas} onChange={setHerramientas} />
                  ) : (
                    <Step4Contacto
                      value={contacto}
                      onChange={setContacto}
                      errors={contactoErrors}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer con botones */}
            {!done && (
              <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3 border-t border-white/[0.06]">
                <button
                  onClick={() => setStep((s) => s - 1)}
                  disabled={step === 1}
                  className="
                    flex items-center gap-1.5 text-sm text-white/30
                    hover:text-white/60 transition-colors disabled:opacity-0
                    disabled:pointer-events-none px-2 py-2
                  "
                >
                  <ArrowLeft className="w-4 h-4" />
                  Atrás
                </button>

                <button
                  onClick={handleNext}
                  disabled={!canNext() || loading}
                  className="
                    flex items-center gap-2 bg-blue-500 hover:bg-blue-400
                    disabled:opacity-40 disabled:cursor-not-allowed
                    text-white font-medium text-sm
                    px-5 py-2.5 rounded-xl
                    transition-all duration-200
                  "
                >
                  {loading ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Enviando...</>
                  ) : step === TOTAL_STEPS ? (
                    <>Enviar diagnóstico <ArrowRight className="w-4 h-4" /></>
                  ) : (
                    <>Continuar <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}