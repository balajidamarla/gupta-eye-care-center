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
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5a5 5 0 110-10 5 5 0 010 10zm0-8a3 3 0 100 6 3 3 0 000-6z"/>
                </svg>
              </div>
              <div>
                <p className="font-display text-lg font-semibold leading-none">
                  Gupta <span className="text-orange">Eye Care</span>
                </p>
                <p className="text-[10px] tracking-widest text-gray-500 uppercase">Center · Hyderabad</p>
              </div>
            </div>
            <p className="text-[13px] text-gray-400 leading-relaxed mb-5">
              Advanced eye care with compassion — serving Hyderabad for over 15 years with cutting-edge treatments and expert doctors.
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
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-teal hover:border-teal transition-all duration-200"
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
                  <a href="#services" className="text-[13px] text-gray-400 hover:text-teal transition-colors no-underline">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-gray-500 mb-4">Quick Links</p>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '#' },
                { label: 'About Us', href: '#stats' },
                { label: 'Meet Doctors', href: '#doctors' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Book Appointment', href: '#appointment' },
              ].map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-[13px] text-gray-400 hover:text-teal transition-colors no-underline">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-gray-500 mb-4">Contact</p>
            <div className="space-y-4 text-[13px] text-gray-400">
              <p className="leading-relaxed">
                Ground Floor, Rameshwari Estate,<br />
                Opposite Bahadurpura Police Station,<br />
                APHB Colony, Bahadurpura,<br />
                Hyderabad – 500064
              </p>
              <a href="tel:06300809448" className="block hover:text-teal transition-colors no-underline">
                📞 06300809448
              </a>
              <a href="mailto:gupthaeyecarecenter@gmail.com" className="block hover:text-teal transition-colors no-underline break-all">
                ✉️ gupthaeyecarecenter@gmail.com
              </a>
              <div className="pt-1">
                <p className="text-gray-500 text-[12px] mb-1">Mon–Sat: 10:00 AM – 7:00 PM</p>
                {/* <p className="text-gray-500 text-[12px]">Sun: 10:00 AM – 2:00 PM</p> */}
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
