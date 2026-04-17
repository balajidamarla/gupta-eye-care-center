import { useEffect, useRef, useState } from 'react'
import { MdPrecisionManufacturing, MdHealthAndSafety, MdLightbulb } from "react-icons/md";
import { FaHandsHelping, FaAward, FaUserShield } from "react-icons/fa";
import { MdRemoveRedEye, MdMedicalServices } from "react-icons/md";
import { FaMicroscope, FaUserMd, FaShieldAlt } from "react-icons/fa";

// ── Scroll Reveal Hook ──────────────────────────────────────────────
function useReveal() {
    const ref = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('about-visible') }),
            { threshold: 0.08 }
        )
        ref.current?.querySelectorAll('.about-reveal').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])
    return ref
}

// ── Count-Up Hook ───────────────────────────────────────────────────
function useCountUp(target, duration = 1800, trigger = false) {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (!trigger) return
        let startTime = null
        const step = ts => {
            if (!startTime) startTime = ts
            const p = Math.min((ts - startTime) / duration, 1)
            setCount(Math.floor(p * target))
            if (p < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
    }, [target, duration, trigger])
    return count
}

// ── Data ────────────────────────────────────────────────────────────
const TIMELINE = [
    { year: '2019', title: 'Founded with a Vision', desc: 'Dr. Rajander Gupta established Gupta Eye Care Center in Bahadurpura, Hyderabad with a mission to make advanced eye care accessible to all.' },
    { year: '2012', title: 'First LASIK Suite', desc: 'Introduced Hyderabad\'s first Femto-LASIK suite in the region, enabling blade-free, precision laser vision correction for thousands of patients.' },
    { year: '2016', title: 'Retina & Pediatric Wing', desc: 'Expanded with a dedicated Retina Care department and a child-friendly Pediatric Ophthalmology wing with specialized equipment.' },
    { year: '2019', title: 'NABH Accreditation', desc: 'Achieved NABH accreditation — a testament to our world-class clinical standards, patient safety protocols and quality care.' },
    { year: '2022', title: 'ICL & Oculoplasty Centre', desc: 'Launched a premium ICL Surgery suite and comprehensive Oculoplasty centre, serving patients from across Telangana and Andhra Pradesh.' },
    { year: '2024', title: '300,000 Patients Milestone', desc: 'Celebrated treating over 300,000 patients — a milestone that reflects our team\'s relentless commitment to restoring vision and transforming lives.' },
]

const VALUES = [
    { icon: <MdPrecisionManufacturing className="text-3xl text-tealCustom" />, title: 'Precision', desc: 'Every diagnosis, every surgery, every follow-up is executed with meticulous attention to detail — because your vision deserves nothing less.' },
    { icon: <FaHandsHelping className="text-3xl text-tealCustom" />, title: 'Compassion', desc: 'We treat every patient as family. Our team listens, educates and supports you through every step of your eye care journey.' },
    { icon: <MdLightbulb className="text-3xl text-tealCustom" />, title: 'Innovation', desc: 'We continuously invest in the latest diagnostic and surgical technology to offer Hyderabad the most advanced eye care available.' },
    { icon: <MdHealthAndSafety className="text-3xl text-tealCustom" />, title: 'Accessibility', desc: 'World-class eye care should be within reach of every family. We offer flexible payment plans and cashless insurance for all major procedures.' },
    { icon: <FaAward className="text-3xl text-tealCustom" />, title: 'Excellence', desc: 'Our trained specialists bring global expertise to every consultation, ensuring outcomes that consistently exceed expectations.' },
    { icon: <FaUserShield className="text-3xl text-tealCustom" />, title: 'Trust', desc: 'With 7+ years and 300,000+ patients, we have built a reputation that speaks louder than any advertisement — word of mouth is our greatest honour.' },
]

// const TEAM = [
//     { initials: 'RG', name: 'Dr. Rajander Gupta', role: 'Founder & Chief Surgeon', qual: 'MS Ophthalmology, FRCS (UK)', exp: '20+ yrs', gradient: 'from-teal-dark via-teal to-teal-light', specialty: 'LASIK · Cataract' },
//     { initials: 'PG', name: 'Dr. Priya Gupta', role: 'Director — Retina Services', qual: 'MS Ophthalmology, Fellowship Retina', exp: '7+ yrs', gradient: 'from-teal via-teal-light to-green-400', specialty: 'Retina · Vitreous' },
//     { initials: 'AK', name: 'Dr. Arun Kumar', role: 'Head — Pediatric Eye Care', qual: 'DNB Ophthalmology, Pediatric Fellowship', exp: '12+ yrs', gradient: 'from-orange via-orange-light to-yellow-400', specialty: 'Pediatrics · Squint' },
//     { initials: 'SM', name: 'Dr. Sunita Mehta', role: 'Senior Consultant', qual: 'MS Ophthalmology, Glaucoma Fellowship', exp: '14+ yrs', gradient: 'from-teal-dark via-teal to-teal-light', specialty: 'Glaucoma · Oculoplasty' },
// ]

const AWARDS = [
    { icon: '🏆', title: 'Best Eye Hospital', sub: 'Hyderabad Healthcare Awards 2023' },
    { icon: '⭐', title: '4.9 / 5 Rating', sub: '2,400+ Google Reviews' },
    { icon: '🎖️', title: 'NABH Accredited', sub: 'National Accreditation Board' },
    { icon: '🌍', title: 'ISO 9001:2015', sub: 'Quality Management Certified' },
]

// ── Sub-components ──────────────────────────────────────────────────
function StatPill({ num, suffix, label, trigger }) {
    const count = useCountUp(num, 1600, trigger)
    return (
        <div className="text-center">
            <p className="font-display text-5xl lg:text-6xl font-light text-white leading-none">
                {count.toLocaleString()}<span className="text-orangeCustom">{suffix}</span>
            </p>
            <p className="text-sm text-white/55 mt-2 tracking-wide">{label}</p>
        </div>
    )
}

// ── Main Component ──────────────────────────────────────────────────
export default function AboutUs() {
    const pageRef = useReveal()
    const [statsTrigger, setStatsTrigger] = useState(false)
    const statsRef = useRef(null)

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setStatsTrigger(true) },
            { threshold: 0.3 }
        )
        if (statsRef.current) obs.observe(statsRef.current)
        return () => obs.disconnect()
    }, [])

    return (
        <div ref={pageRef} className="font-body bg-white overflow-x-hidden">

            {/* ── HERO ─────────────────────────────────────────────────── */}
            <section className="relative min-h-[100vh] flex items-center pt-[70px] overflow-hidden bg-tealCustom ">
                {/* Decorative mesh */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-120px] right-[-80px] w-[500px] h-[500px] rounded-full bg-tealCustom/40 blur-[80px]" />
                    <div className="absolute bottom-[-60px] left-[-60px] w-[350px] h-[350px] rounded-full bg-orangeCustom/15 blur-[60px]" />
                    {/* Grid lines */}
                    <div className="absolute inset-0 opacity-[0.04]"
                        style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.73) 2px,transparent 2px),linear-gradient(90deg,rgb(255, 255, 255) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase mb-12 about-reveal opacity-0"
                        style={{ transition: 'opacity .6s ease, transform .6s ease', transform: 'translateY(20px)' }}>
                        <a href="/" className="hover:text-white/70 transition-colors no-underline">Home</a>
                        <span>/</span>
                        <span className="text-orange-light">About Us</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-end">
                        <div>
                            <div className="inline-flex items-center gap-2.5 border border-white/15 rounded-full px-4 py-1.5 mb-8 about-reveal"
                                style={{ opacity: 0, transition: 'opacity .7s .1s ease, transform .7s .1s ease', transform: 'translateY(24px)' }}>
                                <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
                                <span className="text-[11px] font-semibold tracking-[.14em] uppercase text-white/70">Our Story</span>
                            </div>

                            <h1 className="font-display text-[clamp(48px,7vw,96px)] font-light leading-[1.0] text-white mb-8 about-reveal"
                                style={{ opacity: 0, transition: 'opacity .8s .2s ease, transform .8s .2s ease', transform: 'translateY(28px)' }}>
                                Sight is Life.<br />
                                <em className="italic text-orangeCustom not-italic" style={{ fontStyle: 'italic' }}>
                                    We Protect It.
                                </em>
                            </h1>

                            <p className="text-[17px] text-white/60 leading-relaxed max-w-[480px] about-reveal"
                                style={{ opacity: 0, transition: 'opacity .8s .35s ease, transform .8s .35s ease', transform: 'translateY(24px)' }}>
                                Since 2019, Gupta Eye Care Center has been Hyderabad's most trusted name in ophthalmology — combining fellowship-trained expertise with genuine human warmth.
                            </p>

                            <div className="flex flex-wrap gap-4 mt-10 about-reveal"
                                style={{ opacity: 0, transition: 'opacity .8s .5s ease, transform .8s .5s ease', transform: 'translateY(20px)' }}>
                                <a href="#story" className="bg-orangeCustom hover:bg-orange-light text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-orange/30">
                                    Our Journey
                                </a>
                                {/* <a href="#team" className="border border-white/25 hover:border-white/50 text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-white/8">
                                    Meet the Team
                                </a> */}
                            </div>
                        </div>

                        {/* Right: floating cards */}
                        <div className="hidden lg:flex justify-end about-reveal"
                            style={{ opacity: 0, transition: 'opacity 1s .4s ease, transform 1s .4s ease', transform: 'translateY(32px)' }}>
                            <div className="relative w-[340px] h-[340px]">
                                {/* Central eye ring */}
                                <div className="absolute inset-0 rounded-full border border-white/10 flex items-center justify-center">
                                    <div className="w-[260px] h-[260px] rounded-full border border-white/8 flex items-center justify-center">
                                        <div className="w-[180px] h-[180px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                            <svg viewBox="0 0 80 80" className="w-16 h-16">
                                                <ellipse cx="40" cy="40" rx="38" ry="22" fill="none" stroke="rgba(107,181,154,0.5)" strokeWidth="1" />
                                                <circle cx="40" cy="40" r="14" fill="#2D6354" />
                                                <circle cx="40" cy="40" r="10" fill="#408A71" />
                                                <circle cx="40" cy="40" r="6" fill="#141414" />
                                                <circle cx="43" cy="37" r="2.5" fill="white" opacity=".8" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                {/* Orbiting cards */}
                                {[
                                    { label: 'Founded', value: '2019', pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2', bg: 'bg-white/10' },
                                    { label: 'Patients', value: '300K+', pos: 'top-1/2 right-0 translate-x-1/2 -translate-y-1/2', bg: 'bg-orange/80' },
                                    { label: 'Success', value: '99%', pos: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2', bg: 'bg-white/10' },
                                    { label: 'Doctors', value: '6+', pos: 'top-1/2 left-0 -translate-x-1/2 -translate-y-1/2', bg: 'bg-white/10' },
                                ].map(c => (
                                    <div key={c.label} className={`absolute ${c.pos} ${c.bg} backdrop-blur-sm border border-white/15 rounded-2xl px-4 py-3 text-center min-w-[80px]`}>
                                        <p className="font-display text-xl font-semibold text-white leading-none">{c.value}</p>
                                        <p className="text-[10px] text-white/55 tracking-widest uppercase mt-1">{c.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom wave */}
                <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
                    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 fill-white">
                        <path d="M0,40 C360,0 1080,60 1440,20 L1440,60 L0,60 Z" />
                    </svg>
                </div>
            </section>

            {/* ── STATS ─────────────────────────────────────────────────── */}
            <section ref={statsRef} className=" py-5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="bg-gradient-to-r from-tealCustom via-tealCustom to-tealCustom rounded-3xl -mt-6 relative z-10 py-14 px-8 grid grid-cols-2 md:grid-cols-4 gap-8 shadow-2xl shadow-teal-dark/30 border border-white/8">
                        <StatPill num={300000} suffix="+" label="Patients Treated" trigger={statsTrigger} />
                        <StatPill num={7} suffix="+" label="Years of Excellence" trigger={statsTrigger} />
                        <StatPill num={6} suffix="+" label="Expert Specialists" trigger={statsTrigger} />
                        <StatPill num={99} suffix="%" label="Success Rate" trigger={statsTrigger} />
                    </div>
                </div>
            </section>

            {/* ── MISSION + VISION ─────────────────────────────────────── */}
            <section className="py-10 bg-white" id="story">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        {/* Left: visual */}
                        <div className="about-reveal" style={{ opacity: 0, transition: 'opacity .8s ease, transform .8s ease', transform: 'translateX(-32px)' }}>
                            <div className="relative">
                                {/* Main card */}
                                <div className="bg-gradient-to-br from-teal-pale to-white rounded-3xl p-10 border border-teal/12 shadow-xl shadow-teal/8">
                                    <div className="w-20 h-16">
                                        <img
                                            src="/assets/gupta eye logo.png"
                                            alt="Eye Checkup"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="font-display text-3xl font-semibold text-tealCustom mb-5 leading-tight">
                                        Our Mission
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-[15px]">
                                        To deliver world-class eye care that is compassionate, precise and accessible — transforming lives one clear vision at a time. We believe every patient deserves the best technology, the most experienced hands, and the warmest human care.
                                    </p>
                                    <div className="mt-8 pt-8 border-t border-teal/10 flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-teal-dark/10 flex items-center justify-center font-display text-lg font-semibold text-teal-dark">RG</div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900">Dr. Rajander Gupta</p>
                                            <p className="text-xs text-gray-400">Founder & Chief Surgeon</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating vision card */}
                                <div className="absolute -bottom-8 -right-6 bg-tealCustom rounded-2xl p-6 shadow-2xl shadow-tealCustom max-w-[220px] border border-white/10">
                                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                                        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-white font-display text-lg font-semibold mb-2 leading-tight">Our Vision</p>
                                    <p className="text-white/60 text-xs leading-relaxed">To be Hyderabad's most trusted eye care destination — where technology meets compassion.</p>
                                </div>

                                {/* Decorative dots */}
                                <div className="absolute -top-4 -left-4 w-24 h-24 opacity-20"
                                    style={{ backgroundImage: 'radial-gradient(circle, #408A71 1.5px, transparent 1.5px)', backgroundSize: '10px 10px' }} />
                            </div>
                        </div>

                        {/* Right: story text */}
                        <div className="about-reveal" style={{ opacity: 0, transition: 'opacity .8s .15s ease, transform .8s .15s ease', transform: 'translateX(32px)' }}>
                            <p className="text-[11px] font-bold tracking-[.15em] uppercase text-orange mb-4">Who We Are</p>
                            <h2 className="font-display text-[clamp(32px,4vw,52px)] font-light leading-[1.12] text-gray-900 mb-6">
                                7 Years of <em className="italic text-tealCustom">Restoring</em><br />Sight & Trust
                            </h2>
                            <div className="space-y-5 text-[15px] text-gray-500 leading-relaxed">
                                <p>
                                    Gupta Eye Care Center was founded in 2019 by Dr. Rajander Gupta with a single, powerful belief — that exceptional eye care should not be a privilege but a right. What began as a small clinic in Bahadurpura has grown into one of Hyderabad's most respected ophthalmology centres.
                                </p>
                                <p>
                                    Today, we house a team of 10+ trained specialists, state-of-the-art diagnostic suites, and surgical facilities that match global standards. From LASIK and Cataract surgeries to complex Retina procedures and pediatric care, we offer a complete spectrum of eye care under one roof.
                                </p>
                                <p>
                                    Our philosophy is simple: treat every patient the way we would want our own family to be treated — with skill, honesty and genuine compassion. That philosophy has earned us the trust of over 300,000 patients across Telangana and Andhra Pradesh.
                                </p>
                            </div>

                            {/* Feature chips */}
                            <div className="grid grid-cols-2 gap-4 mt-10">
                                {[
                                    { icon: <MdRemoveRedEye className="text-xl text-tealCustom" />, text: 'Full-Spectrum Eye Care' },
                                    { icon: <FaMicroscope className="text-xl text-tealCustom" />, text: 'Advanced Diagnostics' },
                                    { icon: <FaUserMd className="text-xl text-tealCustom" />, text: 'Trained Doctors' },
                                    { icon: <FaShieldAlt className="text-xl text-tealCustom" />, text: 'Insurance' },
                                ].map(f => (
                                    <div key={f.text} className="flex items-center gap-3 bg-teal-pale/60 border border-teal/10 rounded-xl px-4 py-3">
                                        <span className="text-xl">{f.icon}</span>
                                        <span className="text-sm font-medium text-tealCustom">{f.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TIMELINE ─────────────────────────────────────────────── */}
            <section className="py-10 bg-[#F7F7F5]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-20 about-reveal" style={{ opacity: 0, transition: 'opacity .7s ease, transform .7s ease', transform: 'translateY(24px)' }}>
                        <p className="text-[11px] font-bold tracking-[.15em] uppercase text-orange mb-4">Our Journey</p>
                        <h2 className="font-display text-[clamp(32px,4vw,52px)] font-light text-gray-900">
                            Milestones That <em className="italic text-tealCustom">Shaped Us</em>
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Center line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal/30 via-teal to-teal/10 -translate-x-1/2" />

                        <div className="space-y-12">
                            {TIMELINE.map((item, i) => (
                                <div
                                    key={item.year}
                                    className={`about-reveal relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                    style={{ opacity: 0, transition: `opacity .7s ${i * .1}s ease, transform .7s ${i * .1}s ease`, transform: 'translateY(24px)' }}
                                >
                                    {/* Card */}
                                    <div className="flex-1 bg-white rounded-2xl border border-teal/10 p-7 shadow-sm shadow-teal/5 hover:shadow-lg hover:shadow-teal/10 hover:-translate-y-1 transition-all duration-300">
                                        <div className="flex items-start gap-4">
                                            <div className="w-14 h-14 rounded-2xl bg-tealCustom flex items-center justify-center flex-shrink-0 shadow-md shadow-teal-dark/25">
                                                <span className="font-display text-xl font-semibold text-white leading-none">{i + 1}</span>
                                            </div>
                                            <div>
                                                {/* <p className="text-[11px] font-bold tracking-widest uppercase text-orange mb-1">{item.year}</p> */}
                                                <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                                <p className="text-[14px] text-gray-500 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Center dot */}
                                    <div className="hidden md:flex w-5 h-5 rounded-full bg-tealCustom border-4 border-white shadow-md shadow-teal/30 flex-shrink-0 z-10" />

                                    {/* Spacer */}
                                    <div className="flex-1 hidden md:block" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── VALUES ───────────────────────────────────────────────── */}
            <section className="py-10 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-20 about-reveal" style={{ opacity: 0, transition: 'opacity .7s ease, transform .7s ease', transform: 'translateY(24px)' }}>
                        <p className="text-[11px] font-bold tracking-[.15em] uppercase text-orange mb-4">What Drives Us</p>
                        <h2 className="font-display text-[clamp(32px,4vw,52px)] font-light text-gray-900">
                            Our Core <em className="italic text-tealCustom">Values</em>
                        </h2>
                        <p className="text-gray-500 text-base leading-relaxed max-w-lg mx-auto mt-4">
                            These principles guide every decision we make — from how we design our clinic to how we speak with a nervous first-time patient.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {VALUES.map((v, i) => (
                            <div
                                key={v.title}
                                className="about-reveal group relative bg-[#F7F7F5] rounded-2xl p-8 border border-transparent hover:border-teal/15 hover:bg-white hover:shadow-xl hover:shadow-teal/8 transition-all duration-400 cursor-default"
                                style={{ opacity: 0, transition: `opacity .7s ${i * .07}s ease, transform .7s ${i * .07}s ease`, transform: 'translateY(24px)' }}
                            >
                                {/* Top accent */}
                                <div className="absolute top-0 left-8 right-8 h-0.5 bg-orangeCustom rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                                <div className="w-14 h-14 rounded-2xl bg-white border border-teal/12 flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:shadow-md group-hover:shadow-teal/10 transition-shadow duration-300">
                                    {v.icon}
                                </div>
                                <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">{v.title}</h3>
                                <p className="text-[14px] text-gray-500 leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TEAM ─────────────────────────────────────────────────── */}
            {/* <section className="py-10 bg-tealCustom relative overflow-hidden" id="team">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-100px] right-[-60px] w-[400px] h-[400px] rounded-full bg-teal/30 blur-[70px]" />
                    <div className="absolute bottom-[-80px] left-[-40px] w-[300px] h-[300px] rounded-full bg-orange/10 blur-[60px]" />
                    <div className="absolute inset-0 opacity-[0.03]"
                        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-20 about-reveal" style={{ opacity: 0, transition: 'opacity .7s ease, transform .7s ease', transform: 'translateY(24px)' }}>
                        <p className="text-[11px] font-bold tracking-[.15em] uppercase text-white mb-4">The People Behind the Care</p>
                        <h2 className="font-display text-[clamp(32px,4vw,52px)] font-light text-white">
                            Meet Our <em className="italic text-orangeCustom">Expert</em> Team
                        </h2>
                        <p className="text-white/55 text-base leading-relaxed max-w-lg mx-auto mt-4">
                            Trained specialists who bring decades of global experience and a genuine passion for restoring vision.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {TEAM.map((doc, i) => (
                            <div
                                key={doc.name}
                                className="about-reveal group"
                                style={{ opacity: 0, transition: `opacity .7s ${i * .1}s ease, transform .7s ${i * .1}s ease`, transform: 'translateY(28px)' }}
                            >
                                <div className="bg-white/6 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/20 transition-all duration-400">
                                    Avatar
                                    <div className={`h-52 bg-gradient-to-br ${doc.gradient} relative flex items-center justify-center overflow-hidden`}>
                                        Bg circles
                                        <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/8" />
                                        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-white/6" />
                                        Initials
                                        <div className="w-[88px] h-[88px] rounded-full bg-white/15 border-2 border-white/30 flex items-center justify-center relative z-10">
                                            <span className="font-display text-4xl font-light text-white">{doc.initials}</span>
                                        </div>
                                        Specialty badge
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/30 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1">
                                            <span className="text-[10px] text-white/80 font-medium tracking-wide whitespace-nowrap">{doc.specialty}</span>
                                        </div>
                                    </div>

                                    Info
                                    <div className="p-5">
                                        <h3 className="font-display text-[19px] font-semibold text-white leading-tight">{doc.name}</h3>
                                        <p className="text-[11px] font-bold tracking-[.08em] uppercase text-orange-light mt-1.5">{doc.role}</p>
                                        <p className="text-[12px] text-white/45 mt-3 leading-snug">{doc.qual}</p>
                                        <div className="flex items-center gap-1.5 mt-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                            <span className="text-[12px] text-white font-medium">{doc.exp} experience</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* ── AWARDS ───────────────────────────────────────────────── */}
            {/* <section className="py-10 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16 about-reveal" style={{ opacity: 0, transition: 'opacity .7s ease, transform .7s ease', transform: 'translateY(24px)' }}>
                        <p className="text-[11px] font-bold tracking-[.15em] uppercase text-orange mb-4">Recognition</p>
                        <h2 className="font-display text-[clamp(32px,4vw,52px)] font-light text-gray-900">
                            Awards & <em className="italic text-tealCustom">Accreditations</em>
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {AWARDS.map((a, i) => (
                            <div
                                key={a.title}
                                className="about-reveal text-center bg-gradient-to-br from-teal-pale/60 to-orange-pale/30 rounded-2xl border border-teal/10 p-8 hover:shadow-lg hover:shadow-teal/10 hover:-translate-y-1 transition-all duration-300"
                                style={{ opacity: 0, transition: `opacity .7s ${i * .08}s ease, transform .7s ${i * .08}s ease`, transform: 'translateY(24px)' }}
                            >
                                <div className="text-4xl mb-4">{a.icon}</div>
                                <h3 className="font-display text-xl font-semibold text-tealCustom mb-2">{a.title}</h3>
                                <p className="text-[12px] text-gray-400">{a.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* ── CTA ──────────────────────────────────────────────────── */}
            <section className="py-10 bg-gradient-to-br from-tealCustom to-teal relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-80px] right-[-60px] w-[300px] h-[300px] rounded-full bg-orange/15 blur-[60px]" />
                    <div className="absolute bottom-[-60px] left-[-40px] w-[250px] h-[250px] rounded-full bg-teal/30 blur-[50px]" />
                </div>
                <div className="max-w-3xl mx-auto px-6 text-center relative z-10 about-reveal"
                    style={{ opacity: 0, transition: 'opacity .8s ease, transform .8s ease', transform: 'translateY(24px)' }}>
                    <h2 className="font-display text-[clamp(32px,5vw,60px)] font-light text-white leading-tight mb-6">
                        Ready to Experience<br />
                        <em className="italic text-orangeCustom">Exceptional</em> Eye Care?
                    </h2>
                    <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg mx-auto">
                        Join over 300,000 patients who trust Gupta Eye Care Center. Book your consultation today and take the first step toward clearer, healthier vision.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="/appointment" className="bg-orangeCustom hover:bg-orange-light text-white px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-xl shadow-orange/30">
                            Book an Appointment
                        </a>
                        <a href="tel:06300809448" className="border border-white/25 hover:border-white/50 text-white px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-white/8">
                            6300809448
                        </a>
                    </div>
                </div>
            </section>

            {/* Reveal CSS injected via style tag */}
            <style>{`
        .about-reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s ease, transform .7s ease; }
        .about-reveal.about-visible { opacity: 1 !important; transform: none !important; }
      `}</style>
        </div>
    )
}