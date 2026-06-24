import { MessageCircle, BrainCircuit, Database, Calendar } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    subtitle: "Incoming Lead",
  },
  {
    icon: BrainCircuit,
    title: "AI Agent",
    subtitle: "Qualifies Automatically",
  },
  {
    icon: Database,
    title: "CRM",
    subtitle: "Stores Information",
  },
  {
    icon: Calendar,
    title: "Calendar",
    subtitle: "Books Appointment",
  },
];

export default function AutomationCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
      <p className="mb-8 text-sm uppercase tracking-[0.3em] text-blue-400">
        Automation Flow
      </p>

      <div className="space-y-6">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.title}>
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-blue-600/20 p-3">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>

                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-slate-400">{step.subtitle}</p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="ml-6 mt-3 h-8 w-px bg-blue-500/40" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}