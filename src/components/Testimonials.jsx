import { useEffect, useRef } from 'react'

const TESTIMONIALS = [
  {
    text: "I had my LASIK surgery done here and the results are absolutely life-changing. The team was incredibly professional and the procedure was pain-free. I can now see perfectly without glasses!",
    name: 'Suresh Reddy',
    tag: 'LASIK Surgery Patient',
    initials: 'SR',
    color: 'bg-teal-dark',
    rating: 5,
  },
  {
    text: "Dr. Rajesh Gupta operated on my cataract and I'm amazed at how clearly I can see now. The staff is warm, caring, and took time to explain every step. Truly the best eye hospital in Hyderabad.",
    name: 'Meena Sharma',
    tag: 'Cataract Surgery Patient',
    initials: 'MS',
    color: 'bg-orange',
    rating: 5,
  },
  {
    text: "My 7-year-old daughter had a squint problem. Dr. Arun Kumar was so gentle and patient with her. The surgery went perfectly. Couldn't be more thankful to the entire Gupta Eye Care team.",
    name: 'Venkat Rao',
    tag: 'Parent – Pediatric Patient',
    initials: 'VR',
    color: 'bg-teal',
    rating: 5,
  },
  {
    text: "I was diagnosed with glaucoma and was very anxious. Dr. Sunita Mehta explained everything clearly and the treatment plan has been working wonders. My pressure is now well-controlled.",
    name: 'Lakshmi Devi',
    tag: 'Glaucoma Treatment Patient',
    initials: 'LD',
    color: 'bg-teal-dark',
    rating: 5,
  },
  {
    text: "Got ICL surgery for my high power spectacles. The clarity I experience now is unbelievable — no glasses, no contacts needed. The entire process at Gupta Eye Care was smooth and transparent.",
    name: 'Arjun Kapoor',
    tag: 'ICL Surgery Patient',
    initials: 'AK',
    color: 'bg-orange',
    rating: 5,
  },
  {
    text: "My retinal detachment was handled as an emergency with utmost precision. The retina specialist here is world-class. Grateful beyond words — they literally saved my sight.",
    name: 'Fatima Begum',
    tag: 'Retina Surgery Patient',
    initials: 'FB',
    color: 'bg-teal',
    rating: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-orange fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 bg-gradient-to-br from-teal-pale/50 via-white to-orange-pale/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="reveal text-center mb-14">
          <p className="section-label mb-3">Patient Stories</p>
          <h2 className="section-title">
            Lives <em className="italic text-teal">Transformed</em>,
            <br />Visions Restored
          </h2>
          <p className="section-sub mx-auto text-center">
            Thousands of patients trust Gupta Eye Care Center for their most precious sense. Here's what they say.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="reveal group bg-white rounded-2xl border border-teal/10 p-7 relative card-hover"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {/* Large quote mark */}
              <span className="absolute top-5 right-6 font-display text-7xl text-teal/10 leading-none select-none pointer-events-none">
                "
              </span>

              <Stars count={t.rating} />

              <p className="text-[14px] text-gray-600 leading-relaxed italic mb-6">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-teal/8">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-sm font-semibold font-display">{t.initials}</span>
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-gray-900">{t.name}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{t.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badge row */}
        <div className="reveal mt-14 flex flex-wrap justify-center gap-6">
          {[
            { icon: '🏆', label: 'Best Eye Hospital Award 2023' },
            { icon: '⭐', label: '4.9/5 Google Rating' },
            { icon: '👥', label: '50,000+ Happy Patients' },
            { icon: '🔬', label: 'NABH Accredited' },
          ].map(badge => (
            <div key={badge.label} className="flex items-center gap-2.5 bg-white border border-teal/10 px-5 py-3 rounded-full shadow-sm">
              <span className="text-xl">{badge.icon}</span>
              <span className="text-sm font-medium text-gray-600">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
