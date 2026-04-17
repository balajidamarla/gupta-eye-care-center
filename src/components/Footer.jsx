import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FaHome, FaInfoCircle, FaUserMd, FaCommentDots, FaQuestionCircle, FaCalendarCheck } from "react-icons/fa";


export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#111] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              {/* <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5a5 5 0 110-10 5 5 0 010 10zm0-8a3 3 0 100 6 3 3 0 000-6z"/>
                </svg>
              </div> */}
              <a href="#" className="flex items-center gap-3 no-underline group">
                <img
                  src="/assets/gupta eye care logo.png"
                  alt="Gupta Eye Care Center"
                  className="h-20 w-auto object-contain"
                />
              </a>
            </div>
            <p className="text-[13px] text-gray-400 leading-relaxed mb-5">
              Advanced eye care with compassion — serving Hyderabad for over 7 years with cutting-edge treatments and expert doctors.
            </p>
            <div className="flex gap-3">
              {[
                { label: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { label: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11A2.5 2.5 0 0120 9v6a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 014 15V9a2.5 2.5 0 012.5-2.5z' },
                { label: 'YouTube', icon: 'M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z' },
              ].map(s => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-tealCustom hover:border-tealCustom transition-all duration-200"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-gray-500 mb-4">Services</p>
            <ul className="space-y-2.5">
              {['LASIK / Laser Surgery', 'Cataract Surgery', 'Glaucoma Treatment', 'Retina Care', 'ICL Surgery', 'Oculoplasty', 'Pediatric Eye Care'].map(s => (
                <li key={s}>
                  <a href="#services" className="text-[13px] text-gray-400 hover:text-tealCustom transition-colors no-underline">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-gray-500 mb-4">
              Quick Links
            </p>

            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '#', icon: <FaHome /> },
                { label: 'About Us', href: '#stats', icon: <FaInfoCircle /> },
                { label: 'Meet Doctors', href: '#doctors', icon: <FaUserMd /> },
                { label: 'Testimonials', href: '#testimonials', icon: <FaCommentDots /> },
                { label: 'FAQ', href: '#faq', icon: <FaQuestionCircle /> },
                { label: 'Book Appointment', href: '#appointment', icon: <FaCalendarCheck /> },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="flex items-center gap-3 text-[13px] text-gray-400 hover:text-tealCustom transition-colors no-underline group"
                  >
                    <span className="text-tealCustom group-hover:text-orangeCustom transition-colors">
                      {l.icon}
                    </span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-gray-500 mb-4">
                Contact
              </p>

              <div className="space-y-4 text-[13px] text-gray-400">

                {/* Address */}
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-tealCustom mt-1" />
                  <p className="leading-relaxed">
                    Ground Floor, Rameshwari Estate,<br />
                    Opposite Bahadurpura Police Station,<br />
                    APHB Colony, Bahadurpura,<br />
                    Hyderabad – 500064
                  </p>
                </div>

                {/* Phone */}
                <a
                  href="tel:06300809448"
                  className="flex items-center gap-3 hover:text-tealCustom transition-colors no-underline"
                >
                  <FaPhoneAlt className="text-tealCustom" />
                  6300809448
                </a>

                {/* Email */}
                <a
                  href="mailto:guptaecc@gmail.com"
                  className="flex items-center gap-3 hover:text-tealCustom transition-colors no-underline break-all"
                >
                  <FaEnvelope className="text-tealCustom" />
                  guptaecc@gmail.com
                </a>

                {/* Timings */}
                <div className="flex items-start gap-3 pt-1">
                  <FaClock className="text-tealCustom mt-1" />
                  <p className="leading-relaxed">
                    Mon–Sat: 10:00 AM – 7:00 PM
                  </p>
                </div>
                {/* Google Maps Embed */}
                <div className="mt-4 rounded-lg overflow-hidden border border-white/10">
                  <iframe
                    title="Gupta Eye Care Center Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.0948865201904!2d78.45228577494679!3d17.359166583523173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97335fd1fa0b%3A0xfb7a0c126b212bef!2sGupta%20Eye%20Care%20Centre%20(Dr.%20Rajender%20Gupta)!5e0!3m2!1sen!2sin!4v1775923474255!5m2!1sen!2sin"
                    width="100%"
                    height="180"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-gray-600">
          <p>© {year} Gupta Eye Care Center. All rights reserved.</p>
          {/* <p>Designed with ❤️ for better vision in Hyderabad</p> */}
        </div>
      </div>
    </footer>
  )
}
