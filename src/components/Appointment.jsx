import { useState, useEffect, useRef } from 'react'

const SERVICES_LIST = [
  'LASIK / Laser Surgery',
  'Cataract Surgery',
  'Glaucoma Treatment',
  'Retina Care',
  'ICL Surgery',
  'Oculoplasty',
  'Pediatric Eye Care',
  'General Eye Checkup',
]

export default function Appointment() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', date: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbyHDYXW41wKW0kic_hD3iWquJcViJyHPaRI9_KGqaZdVMPGutNFXjG0htB5XdvkOVuG/exec", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.status === "success") {
      setSubmitted(true);
      setForm({ name: '', phone: '', email: '', service: '', date: '', message: '' });

      setTimeout(() => setSubmitted(false), 4000);
    } else {
      alert("Something went wrong!");
    }
  } catch (err) {
    console.error(err);
    alert("Error sending form");
  }
};

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const inputCls = `w-full bg-teal/20 border border-white/15 rounded-xl px-4 py-3 text-white text-sm
    placeholder:text-white/30 focus:outline-none focus:border-orange focus:bg-white/12 transition-all duration-200`

  return (
    <section id="appointment" ref={sectionRef} className="py-24 bg-teal-dark relative overflow-hidden">
      {/* BG decor */}
      <div className="absolute top-[-200px] right-[-150px] w-[500px] h-[500px] rounded-full bg-teal/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-80px] w-[350px] h-[350px] rounded-full bg-orange/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Info */}
          <div className="reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-orange-light mb-3">Contact Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight mb-4">
              Book Your <br />
              <em className="italic text-orange-light">Appointment</em> Today
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-12 max-w-md">
              Take the first step toward clearer vision. Our team is ready to guide you through the best treatment option for your needs.
            </p>

            {/* Contact items */}
            <div className="space-y-7">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  ),
                  label: 'Address',
                  value: 'Ground Floor, Rameshwari Estate, opposite Bahadurpura Police Station, APHB Colony, Bahadurpura, Hyderabad – 500064',
                },
                {
                  icon: (
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  ),
                  label: 'Phone',
                  value: '06300809448',
                  href: 'tel:06300809448',
                },
                {
                  icon: (
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  ),
                  label: 'Email',
                  value: 'gupthaeyecarecenter@gmail.com',
                  href: 'mailto:gupthaeyecarecenter@gmail.com',
                },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-widest uppercase text-white/40 mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-[14px] text-white font-medium hover:text-orange-light transition-colors no-underline">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[14px] text-white font-medium leading-snug">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div className="mt-10 border border-white/10 rounded-2xl p-5 bg-white/5">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-white/40 mb-4">Clinic Hours</p>
              <div className="space-y-2.5 text-sm">
                {[
                  { days: 'Monday – Saturday', time: '10:00 AM – 7:00 PM' },
                  // { days: 'Sunday', time: '10:00 AM – 2:00 PM' },
                  // { days: 'Emergency', time: '24 × 7 Available' },
                ].map(row => (
                  <div key={row.days} className="flex justify-between">
                    <span className="text-white/60">{row.days}</span>
                    <span className="text-white font-medium">{row.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal" style={{ transitionDelay: '150ms' }}>
            <div className="bg-white/5 border border-teal/100 rounded-3xl p-8">
              <h3 className="font-display text-2xl text-white font-semibold mb-6">Request an Appointment</h3>

              {submitted && (
                <div className="bg-teal/30 border border-teal-light/40 rounded-xl p-4 mb-6 text-teal-pale text-sm font-medium flex items-center gap-2">
                  <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  Thank you! We'll confirm your appointment within a few hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold tracking-widest uppercase text-white/50 mb-2">Full Name *</label>
                    <input
                      name="name" value={form.name} onChange={handleChange}
                      required placeholder="Your name"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold tracking-widest uppercase text-white/50 mb-2">Phone *</label>
                    <input
                      name="phone" value={form.phone} onChange={handleChange}
                      required placeholder="Mobile number" type="tel"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-widest uppercase text-white/50 mb-2">Email</label>
                  <input
                    name="email" value={form.email} onChange={handleChange}
                    placeholder="your@email.com" type="email"
                    className={inputCls}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold tracking-widest uppercase text-white/50 mb-2">Service</label>
                    <select name="service" value={form.service} onChange={handleChange} className={inputCls + ' cursor-pointer'}>
                      <option value="" className="bg-teal-dark">Select service</option>
                      {SERVICES_LIST.map(s => (
                        <option key={s} value={s} className="bg-teal-dark">{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold tracking-widest uppercase text-white/50 mb-2">Preferred Date</label>
                    <input
                      name="date" value={form.date} onChange={handleChange}
                      type="date" className={inputCls + ' cursor-pointer'}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-widest uppercase text-white/50 mb-2">Message</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="Describe your symptoms or any questions…"
                    rows={3} className={inputCls + ' resize-none'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange hover:bg-orange-light text-white font-semibold py-4 rounded-xl text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-orange/30 mt-2"
                >
                  Book My Appointment →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
