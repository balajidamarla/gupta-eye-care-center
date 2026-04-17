import { useEffect, useRef } from 'react'
import { FaEye, FaMicroscope, FaSyringe } from "react-icons/fa";
import { MdOutlineHealthAndSafety, MdRemoveRedEye } from "react-icons/md";
import { GiEyeTarget } from "react-icons/gi";

const SERVICES = [
  {
    icon: <MdRemoveRedEye />,
    title: 'Comprehensive Eye Checkup',
    desc: 'Complete eye examination including vision testing, retina check, and early detection of eye diseases at a trusted eye hospital.',
    tag: 'Most Popular',
    color: 'from-teal-pale to-teal/5',
  },
  {
    icon: <FaMicroscope />,
    title: 'Phaco Surgery',
    desc: 'Advanced phacoemulsification cataract surgery with high success rate, quick recovery, and improved vision clarity.',
    tag: 'Advanced IOL',
    color: 'from-orange-pale to-orange/5',
  },
  {
    icon: <FaEye />,
    title: 'MICS - Micro Incision Cataract Surgery',
    desc: 'Micro incision cataract surgery (MICS) with minimal cuts, faster healing, and premium lens implantation for better vision.',
    tag: 'Lifelong Care',
    color: 'from-teal-pale to-teal/5',
  },
  {
    icon: <GiEyeTarget />,
    title: 'Refractive Surgery',
    desc: 'Laser refractive surgery to correct vision problems like myopia, hyperopia, and astigmatism for glasses-free life.',
    tag: 'Subspecialty',
    color: 'from-orange-pale to-orange/5',
  },
  {
    icon: <MdOutlineHealthAndSafety />,
    title: 'Retina Surgery',
    desc: 'Advanced surgical treatment for retinal conditions including detachment and damage.',
    tag: 'Premium',
    color: 'from-teal-pale to-teal/5',
  },
  {
    icon: <FaSyringe />,
    title: 'Diabetic Retinopathy Management',
    desc: 'Expert treatment for diabetic retinopathy including injections, laser therapy, and regular monitoring to prevent vision loss.',
    tag: 'Aesthetic & Functional',
    color: 'from-orange-pale to-orange/5',
  },
  {
    icon: <FaEye />,
    title: 'Secondary IOL Surgery',
    desc: 'Secondary intraocular lens (IOL) surgery for patients with previous cataract complications or lens-related vision issues.',
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
    <section id="services" ref={sectionRef} className="py-10 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-14">
          <div>
            <p className="section-label mb-2 sm:mb-3">Our Specialties</p>
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
              World-Class <em className="italic text-tealCustom">Eye Care</em>
              <br />Under One Roof
            </h2>
          </div>
          <p className="section-sub mx-auto md:mx-0 text-center md:text-right text-xs sm:text-base max-w-full md:max-w-sm">
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
                <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-tealCustom border border-teal/25 bg-white/70 px-2.5 py-1 rounded-full">
                  {service.tag}
                </span>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="reveal bg-gradient-to-br from-tealCustom to-tealCustom rounded-2xl p-6 flex flex-col justify-between card-hover" style={{ transitionDelay: `${SERVICES.length * 60}ms` }}>
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-2xl mb-5">📅</div>
              <h3 className="font-display text-xl font-semibold text-white mb-2">Book a Consultation</h3>
              <p className="text-[13px] text-white/65 leading-relaxed">
                Not sure which treatment is right for you? Talk to our specialists today.
              </p>
            </div>
            <a href="#appointment" className="mt-6 inline-block bg-white text-orangeCustom text-sm font-medium px-5 py-2.5 rounded-full hover:bg-white transition-colors text-center shadow-lg shadow">
              Get Started
            </a>
          </div>
        </div>
        {/* Explore Services Button */}
        <div className="flex justify-center mt-10">
          <a
            href="/services"
            className="bg-tealCustom text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Services
          </a>
        </div>

      </div>
    </section>
  )
}
