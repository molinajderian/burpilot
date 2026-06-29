"use client";

export const OPEN_DIAGNOSTICO_EVENT = "open-diagnostico";

export function openDiagnosticoModal() {
  window.dispatchEvent(new Event(OPEN_DIAGNOSTICO_EVENT));
}
