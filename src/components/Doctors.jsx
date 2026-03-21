import { useEffect, useRef } from 'react'

const DOCTORS = [
  {
    initials: 'RG',
    name: 'Dr. Rajander Gupta',
    specialty: 'Cataract Surgeon',
    exp: '35+ years experience',
    qualifications: 'MS Ophthalmology, FRCS (UK)',
    gradient: 'from-teal-dark to-teal',
  },
  {
    initials: 'PG',
    name: 'Dr. Sarang Gupta',
    specialty: 'Retina Specialist',
    exp: '15+ years experience',
    qualifications: 'MS Ophthalmology, Fellowship Retina',
    gradient: 'from-teal to-teal-light',
  },
  {
    initials: 'AK',
    name: 'Dr. Anisha Nirathya',
    specialty: 'Pediatric Ophthalmology',
    exp: '12+ years experience',
    qualifications: 'DNB Ophthalmology, Pediatric Fellowship',
    gradient: 'from-orange to-orange-light',
  },
  {
    initials: 'SM',
    name: 'Dr. Harsha K',
    specialty: 'Oculoplasty',
    exp: '14+ years experience',
    qualifications: 'MS Ophthalmology, Glaucoma Fellowship',
    gradient: 'from-teal-dark to-teal',
  },
]

export default function Doctors() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="doctors" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="reveal text-center mb-14">
          <p className="section-label mb-3">Our Team</p>
          <h2 className="section-title">
            Meet Our <em className="italic text-teal">Expert</em> Doctors
          </h2>
          <p className="section-sub mx-auto text-center">
            Our fellowship-trained specialists bring decades of combined experience and a genuine passion for restoring vision.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.map((doc, i) => (
            <div
              key={doc.name}
              className="reveal group rounded-2xl border border-teal/10 overflow-hidden card-hover bg-white"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Avatar area */}
              <div className={`relative h-48 bg-gradient-to-br ${doc.gradient} flex items-center justify-center`}>
                <div className="w-24 h-24 rounded-full bg-white/15 border-2 border-white/30 flex items-center justify-center">
                  <span className="font-display text-4xl font-light text-white">{doc.initials}</span>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/5" />
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-white/8" />
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-gray-900 leading-tight">{doc.name}</h3>
                <p className="text-[11px] font-semibold tracking-widest uppercase text-orange mt-1">{doc.specialty}</p>
                <p className="text-xs text-gray-400 mt-3">{doc.qualifications}</p>
                <div className="flex items-center gap-1.5 mt-3">
                  <svg className="w-3.5 h-3.5 text-teal fill-current" viewBox="0 0 16 16">
                    <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm.75 10.5h-1.5v-5h1.5v5zm0-6.5h-1.5V3.5h1.5V5z"/>
                  </svg>
                  <span className="text-[12px] text-teal font-medium">{doc.exp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
