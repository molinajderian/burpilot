export default function HowItWorks() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-32">
      <h2 className="text-4xl font-semibold text-center mb-16">
        How BURPILOT Works
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <h3>1. Lead Arrives</h3>
          <p>Customer sends a WhatsApp message.</p>
        </div>

        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <h3>2. AI Qualifies</h3>
          <p>AI collects information automatically.</p>
        </div>

        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <h3>3. CRM Updated</h3>
          <p>Data is stored instantly.</p>
        </div>

        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <h3>4. Appointment Booked</h3>
          <p>Meeting gets scheduled automatically.</p>
        </div>
      </div>
    </section>
  )
}