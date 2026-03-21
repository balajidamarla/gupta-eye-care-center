import { useState, useEffect, useRef } from 'react'

const FAQS = [
  {
    q: 'Am I a candidate for LASIK surgery?',
    a: 'Most adults above 18 with stable prescriptions, adequate corneal thickness and no severe dry eyes are candidates. We do a comprehensive pre-LASIK evaluation that includes corneal mapping, pupil size measurement and tear film assessment to confirm your suitability before recommending any procedure.',
  },
  {
    q: 'How long does cataract surgery take?',
    a: 'The procedure itself takes just 10–15 minutes per eye under local anaesthesia. You are typically discharged the same day. Vision improvement is usually noticed within 24–48 hours, with full recovery in 4–6 weeks.',
  },
  {
    q: 'Is LASIK surgery painful?',
    a: 'No. Numbing eye drops are applied before the procedure so you feel no pain during LASIK. You may experience mild discomfort or a gritty sensation for a few hours after, but this resolves quickly. Most patients report clear vision by the very next morning.',
  },
  {
    q: 'At what age should I bring my child for an eye check?',
    a: 'Children should have their first comprehensive eye exam by age 3. Early detection of lazy eye (amblyopia), squint or refractive errors is crucial since treatment is most effective before age 7–8. We recommend annual check-ups for school-going children.',
  },
  {
    q: 'What is the difference between LASIK and ICL?',
    a: 'LASIK reshapes the cornea using a laser and is ideal for mild to moderate prescriptions. ICL (Implantable Collamer Lens) involves placing a thin lens inside the eye — suitable for high prescriptions or thin corneas. ICL is reversible, while LASIK is permanent.',
  },
  {
    q: 'Can glaucoma be cured completely?',
    a: 'Glaucoma cannot be cured, but it can be effectively managed to prevent further vision loss. With early detection and a combination of eye drops, laser therapy or surgery, most patients maintain their vision throughout their lives.',
  },
  {
    q: 'Do you offer EMI or cashless insurance?',
    a: 'Yes! We accept all major health insurance plans and offer cashless settlement. We also have flexible no-cost EMI options on most surgical procedures. Our billing team will guide you through the process seamlessly.',
  },
  {
    q: 'How do I book an appointment?',
    a: 'You can book via the form on this page, call us at 06300809448, or email gupthaeyecarecenter@gmail.com. We also offer emergency consultations for urgent eye conditions. Our team will confirm your slot within a few hours.',
  },
]

function FAQItem({ q, a, delay }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="reveal border-b border-teal/10"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        onClick={() => setOpen(!open)}
      >
        <span className={`text-[15px] font-medium transition-colors duration-200 ${open ? 'text-teal' : 'text-gray-800 group-hover:text-teal'}`}>
          {q}
        </span>
        <span className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-sm
          transition-all duration-300 ${open ? 'bg-teal text-white rotate-45' : 'bg-teal-pale text-teal'}`}>
          +
        </span>
      </button>
      <div className={`faq-answer ${open ? 'open' : ''}`}>
        <p className="text-[14px] text-gray-500 leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const half = Math.ceil(FAQS.length / 2)

  return (
    <section id="faq" ref={sectionRef} className="py-24 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="reveal text-center mb-14">
          <p className="section-label mb-3">FAQ</p>
          <h2 className="section-title">
            Questions We <em className="italic text-teal">Hear Often</em>
          </h2>
          <p className="section-sub mx-auto text-center">
            Everything you need to know before your visit. Can't find your answer? Call us directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 md:gap-12">
          <div>
            {FAQS.slice(0, half).map((faq, i) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} delay={i * 60} />
            ))}
          </div>
          <div>
            {FAQS.slice(half).map((faq, i) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} delay={(i + half) * 60} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
