export default function HowItWorks() {
  const steps = [
    {
      title: "1. Llega el prospecto",
      description: "El cliente inicia la conversación desde WhatsApp.",
    },
    {
      title: "2. La IA califica",
      description: "El agente reúne contexto, intención y datos clave.",
    },
    {
      title: "3. El CRM se actualiza",
      description: "La información queda organizada para seguimiento comercial.",
    },
    {
      title: "4. La cita se agenda",
      description: "La oportunidad avanza con una reunión confirmada.",
    },
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-32 scroll-mt-32">
      <h2 className="text-4xl font-semibold text-center mb-16">
        Cómo opera BURPILOT
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div
            key={step.title}
            className="p-6 rounded-xl border border-white/10 bg-white/5"
          >
            <h3 className="font-semibold text-white">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
