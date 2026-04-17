import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/aboutus' },
  { label: 'Services', href: '/services' },
  // { label: 'Services', href: '#services' },
  { label: 'Our Team', href: '/ourteam' },
  // { label: 'About', href: '#stats' },
  // { label: 'Testimonials', href: '#testimonials' },
  // { label: 'FAQ', href: '#faq' },
  { label: 'Gallery', href: '/Gallery' },
  { label: 'Blogs', href: '/Blogs' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-teal/10' : 'bg-white/80 backdrop-blur-sm'
      } border-b border-teal/10`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[100px] flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3 no-underline group">
          <img
            src="/assets/gupta eye care logo.png"
            alt="Gupta Eye Care Center"
            className="h-20 w-auto object-contain"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-500 hover:text-tealCustom transition-colors duration-200 no-underline tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/appointment"
          className="hidden md:inline-block btn-primary text-sm"
        >
          Book Appointment
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-teal-dark transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-teal-dark transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-teal-dark transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'} bg-white border-t border-teal/10`}>
        <div className="px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-600 hover:text-teal transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}
          <a href="#appointment" onClick={() => setMenuOpen(false)} className="btn-primary text-center mt-2">
            Book Appointment
          </a>
        </div>
      </div>
    </nav>
  )
}
