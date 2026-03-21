import { useEffect, useRef } from 'react'

const SERVICES = [
  {
    icon: '👁️',
    title: 'LASIK / Laser Surgery',
    desc: 'Freedom from glasses with our advanced Femto-LASIK and SMILE procedures. Precise, painless, and permanent correction for nearsightedness, farsightedness & astigmatism.',
    tag: 'Most Popular',
    color: 'from-teal-pale to-teal/5',
  },
  {
    icon: '🔬',
    title: 'Cataract Surgery',
    desc: 'Restore crystal-clear vision with phacoemulsification micro-incision cataract surgery. Premium IOL implants customized to your lifestyle needs.',
    tag: 'Advanced IOL',
    color: 'from-orange-pale to-orange/5',
  },
  {
    icon: '🧬',
    title: 'Glaucoma Treatment',
    desc: 'Early detection and management of glaucoma using state-of-the-art imaging and pressure monitoring. Medical, laser and surgical options available.',
    tag: 'Lifelong Care',
    color: 'from-teal-pale to-teal/5',
  },
  {
    icon: '🩺',
    title: 'Retina Care',
    desc: 'Comprehensive retinal care including treatment for diabetic retinopathy, macular degeneration, and retinal detachments with advanced vitreoretinal surgery.',
    tag: 'Subspecialty',
    color: 'from-orange-pale to-orange/5',
  },
  {
    icon: '💎',
    title: 'ICL Surgery',
    desc: 'Implantable Collamer Lens — the premium alternative to LASIK for high prescriptions or thin corneas. Removable, reversible, and delivers exceptional clarity.',
    tag: 'Premium',
    color: 'from-teal-pale to-teal/5',
  },
  {
    icon: '✨',
    title: 'Oculoplasty',
    desc: 'Expert surgical and cosmetic eyelid procedures including ptosis correction, blepharoplasty, entropion/ectropion repair, and lacrimal surgeries.',
    tag: 'Aesthetic & Functional',
    color: 'from-orange-pale to-orange/5',
  },
  {
    icon: '👶',
    title: 'Pediatric Eye Care',
    desc: 'Specialized eye care for children — early detection of lazy eye (amblyopia), squint (strabismus), refractive errors, and vision therapy programs.',
    tag: "Children's Specialist",
    color: 'from-teal-pale to-teal/5',
  },
]

export default function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const items = sectionRef.current?.querySelectorAll('.reveal')
    items?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="section-label mb-3">Our Specialties</p>
            <h2 className="section-title">
              World-Class <em className="italic text-teal">Eye Care</em>
              <br />Under One Roof
            </h2>
          </div>
          <p className="section-sub md:text-right md:max-w-sm">
            From routine checkups to complex surgeries, we offer a full spectrum of ophthalmology services with the latest technology.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className="reveal group bg-white rounded-2xl border border-teal/10 overflow-hidden card-hover cursor-default"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Gradient bar */}
              <div className="service-card-bar" />

              <div className={`p-6 bg-gradient-to-br ${service.color} h-full`}>
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm shadow-teal/10 flex items-center justify-center text-2xl mb-5">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-2 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
                  {service.desc}
                </p>

                {/* Tag */}
                <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-teal border border-teal/25 bg-white/70 px-2.5 py-1 rounded-full">
                  {service.tag}
                </span>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="reveal bg-gradient-to-br from-teal-dark to-teal rounded-2xl p-6 flex flex-col justify-between card-hover" style={{ transitionDelay: `${SERVICES.length * 60}ms` }}>
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-2xl mb-5">📅</div>
              <h3 className="font-display text-xl font-semibold text-white mb-2">Book a Consultation</h3>
              <p className="text-[13px] text-white/65 leading-relaxed">
                Not sure which treatment is right for you? Talk to our specialists today.
              </p>
            </div>
            <a href="#appointment" className="mt-6 inline-block bg-orange text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-orange-light transition-colors text-center shadow-lg shadow-orange/30">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
