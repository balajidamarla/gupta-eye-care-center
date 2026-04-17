export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[50px] overflow-hidden mesh-bg bg-gradient-to-br from-white via-teal-pale/30 to-orange-pale/40">

      {/* Background decorative circles */}
      <div className="absolute top-[-180px] right-[-120px] w-[520px] h-[520px] rounded-full bg-teal/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-80px] w-[380px] h-[380px] rounded-full bg-orange/8 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-teal-pale/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-2 gap-16 items-center py-20">

        {/* Left: Content */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-teal-pale border border-teal/20 rounded-full px-4 py-1.5 mb-8
                          animate-fade-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse-dot" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-teal-dark">
              Advanced Eye Care · Hyderabad
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-[clamp(44px,6vw,80px)] leading-[1.05] font-light text-gray-900 mb-6
                       animate-fade-up opacity-0"
            style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
          >
            Clarity is a <br />
            <em className="text-tealCustom not-italic">Gift We</em>{' '}
            <span className="text-orangeCustom">Give You</span>
          </h1>

          {/* Sub */}
          <p
            className="text-xs sm:text-base md:text-[16px] text-gray-500 leading-relaxed max-w-[460px] mb-10
                       animate-fade-up opacity-0"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            At Gupta Eye Care Center, we combine cutting-edge technology with compassionate care to restore and protect your most precious sense — your vision.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-wrap gap-4 animate-fade-up opacity-0"
            style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}
          >
            <a href="#appointment" className="btn-primary">Book Appointment</a>
            <a href="/services" className="btn-outline">Explore Services</a>
          </div>

          {/* Trust chips */}
          <div
            className="flex flex-wrap gap-3 mt-10 animate-fade-up opacity-0"
            style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
          >
            {['LASIK Certified', 'ISO Accredited', '7+ Years Experience', 'State-of-the-Art Equipment'].map(chip => (
              <span key={chip} className="flex items-center gap-1.5 text-xs text-gray-500 bg-white border border-gray-100 px-3 py-1.5 rounded-full shadow-sm">
                <svg className="w-3 h-3 text-tealCustom fill-current" viewBox="0 0 12 12">
                  <path d="M10 3L5 8.5 2 5.5l-1 1L5 10.5l6-7-1-0.5z"/>
                </svg>
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Visual card */}
        <div
          className="relative flex justify-center animate-fade-up opacity-0"
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
        >
          {/* Main card */}
          <div className="relative bg-white rounded-3xl shadow-2xl shadow-teal/15 border border-teal/10 p-10 w-full max-w-[400px] animate-float">

            {/* Decorative top bar */}
            <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r from-teal to-orange" />

            {/* Eye SVG illustration */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <svg viewBox="0 0 200 120" className="w-52 h-32" style={{ overflow: 'visible' }}>
                  {/* Outer glow */}
                  <ellipse cx="100" cy="60" rx="98" ry="57" fill="rgba(64,138,113,0.05)" />
                  {/* Eye shape */}
                  <g className="eye-blink">
                    <path
                      d="M10 60 Q55 10 100 10 Q145 10 190 60 Q145 110 100 110 Q55 110 10 60Z"
                      fill="#EAF5F0" stroke="#408A71" strokeWidth="1.5" fill-opacity="0.6"
                    />
                    {/* Iris */}
                    <circle cx="100" cy="60" r="30" fill="#2D6354" />
                    <circle cx="100" cy="60" r="22" fill="#408A71" />
                    <circle cx="100" cy="60" r="14" fill="#141414" />
                    {/* Highlight */}
                    <circle cx="108" cy="52" r="5" fill="white" opacity="0.85" />
                    <circle cx="95" cy="65" r="2.5" fill="white" opacity="0.45" />
                    {/* Lashes top */}
                    {[30,50,70,90,110,130,150,170].map((x, i) => (
                      <line key={i} x1={x} y1="18" x2={x + (i % 2 === 0 ? -3 : 3)} y2="8" stroke="#2D6354" strokeWidth="1.2" strokeLinecap="round" />
                    ))}
                  </g>
                </svg>
                {/* Floating label */}
                <div className="absolute -top-3 -right-6 bg-orangeCustom text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-md shadow-orange/30 animate-float" style={{ animationDelay: '1s' }}>
                  20/20 Vision
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 divide-x divide-teal/10 border-t border-teal/10 pt-4 sm:pt-6">
              {[
                { num: '7+', label: 'Years' },
                { num: '300K+', label: 'Patients' },
                { num: '6', label: 'Specialties' },
              ].map(s => (
                <div key={s.label} className="text-center px-1 sm:px-2">
                  <p className="font-number text-xl sm:text-2xl md:text-3xl font-semibold text-tealCustom leading-none">
                    {s.num}
                  </p>
                  <p className="text-[9px] sm:text-[11px] uppercase tracking-widest text-gray-400 mt-1 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Floating tag cards */}
          <div className="absolute -left-4 top-1/4 bg-white rounded-2xl shadow-lg shadow-teal/10 border border-teal/10 px-4 py-3 animate-float" style={{ animationDelay: '0.5s' }}>
            <p className="text-xs text-gray-400 font-medium">Latest Tech</p>
            <p className="text-sm font-semibold text-tealCustom font-display">Femto LASIK</p>
          </div>
          <div className="absolute -right-4 bottom-1/3 bg-white rounded-2xl shadow-lg shadow-orange/10 border border-orange/10 px-4 py-3 animate-float" style={{ animationDelay: '1.5s' }}>
            <p className="text-xs text-gray-400 font-medium">Success Rate</p>
            <p className="text-sm font-semibold text-orangeCustom font-number">99%</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] tracking-widest uppercase text-gray-400">Scroll</span>
        <div className="w-5 h-8 border border-gray-300 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-teal rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
