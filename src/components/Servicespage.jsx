import { useState, useEffect, useRef } from 'react'
import { FaHospital, FaUserMd, FaMicroscope, FaShieldAlt } from "react-icons/fa";


// ── Scroll reveal hook ──────────────────────────────
function useReveal(rootRef) {
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('srv-visible') }),
            { threshold: 0.07 }
        )
        rootRef.current?.querySelectorAll('.srv-reveal').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [rootRef])
}

// ── Services data ───────────────────────────────────
const SERVICES = [
    {
        id: 'comprehensive-checkup',
        // icon: <TbEyeCheck />,
        tag: 'Essential',
        tagColor: 'bg-teal text-white',
        title: 'Comprehensive Eye Checkup',
        subtitle: 'Foundation of ocular health',
        heroGrad: 'from-tealCustom via-tealCustom to-teal/50',
        accentColor: '#408A71',
        shortDesc: 'A complete evaluation of your vision and eye health using advanced diagnostic technology.',
        overview: 'Our Comprehensive Eye Checkup goes beyond a simple vision test. We evaluate your visual acuity, eye pressure, and the health of both the anterior and posterior segments of the eye.',
        benefits: ['Early detection of diseases', 'Precise glass prescription', 'Digital eye pressure monitoring', 'Slit-lamp examination', 'Dilated fundus evaluation', 'Expert consultation'],
        process: [
            { step: '01', title: 'Vision Testing', desc: 'Measurement of distance and near vision using digital charts.' },
            { step: '02', title: 'Refraction', desc: 'Subjective and objective assessment for exact spectacle power.' },
            { step: '03', title: 'Internal Exam', desc: 'Examination of the cornea, lens, and retina using high-magnification.' },
            { step: '04', title: 'Plan', desc: 'Discussion of results and personalized prevention plan.' },
        ],
        faqs: [
            { q: 'How often should I get a checkup?', a: 'Once a year for healthy adults; every 6 months for diabetics.' },
            { q: 'Will my pupils be dilated?', a: 'Usually, yes, to allow the doctor to see the retina clearly.' },
        ],
    },
    {
        id: 'phaco-surgery',
        // icon: <FaMicroscope />,
        tag: 'Modern Cataract',
        tagColor: 'bg-orange text-white',
        title: 'Phaco Surgery',
        subtitle: 'Advanced ultrasound cataract removal',
        heroGrad: 'from-orangeCustom via-amber-500 to-yellow-400',
        accentColor: '#F77F00',
        shortDesc: 'Stitchless cataract surgery using ultrasonic energy for rapid visual recovery.',
        overview: 'Phacoemulsification is the gold standard for cataract removal. The clouded lens is fragmented by ultrasound and replaced with a foldable IOL.',
        benefits: ['Stitchless procedure', 'Local anesthesia', 'Rapid recovery', 'Premium IOL options'],
        process: [
            { step: '01', title: 'Biometry', desc: 'Precise measurement for IOL power calculation.' },
            { step: '02', title: 'Fragmenting', desc: 'Ultrasound breaks the cataract for gentle removal.' },
            { step: '03', title: 'Implantation', desc: 'Foldable lens is inserted through a small opening.' },
        ],
        faqs: [
            { q: 'Is it painful?', a: 'No, numbing drops make the procedure very comfortable.' },
        ],
    },
    {
        id: 'mics',
        // icon: <FaBullseye />,
        tag: 'Ultra-Precision',
        tagColor: 'bg-orange text-white',
        title: 'MICS - Micro Incision Cataract Surgery',
        subtitle: 'Sub-2.0mm precision',
        heroGrad: 'from-orangeCustom via-amber-500 to-yellow-400',
        accentColor: '#F77F00',
        shortDesc: 'The least invasive cataract surgery available today with incisions smaller than 2mm.',
        overview: 'MICS further reduces the incision size from standard phaco, leading to even faster healing and less post-operative astigmatism.',
        benefits: ['Smallest incision (1.8mm)', 'Fastest healing', 'Minimal eye irritation', 'Superior visual stability'],
        process: [
            { step: '01', title: 'Micro-Incision', desc: 'Creating a sub-2mm entry point.' },
            { step: '02', title: 'MICS-Phaco', desc: 'Specific tips used to emulsify the lens through the tiny gap.' },
            { step: '03', title: 'MICS-IOL', desc: 'Specialized lenses designed to fit through micro-incisions.' },
        ],
        faqs: [
            { q: 'How is it different from Phaco?', a: 'MICS uses smaller tools and incisions, further accelerating recovery.' },
        ],
    },
    {
        id: 'refractive-surgery',
        // icon: <FaEye />,
        tag: 'Freedom from Glasses',
        tagColor: 'bg-teal text-white',
        title: 'Refractive Surgery',
        subtitle: 'ICL / LASIK / Trans-PRK',
        heroGrad: 'from-tealCustom via-tealCustom to-teal/50',
        accentColor: '#408A71',
        shortDesc: 'A full suite of vision correction: LASIK, Trans-PRK, and ICL for all prescriptions.',
        overview: 'We offer specialized laser and lens-based solutions to correct nearsightedness, farsightedness, and astigmatism permanently.',
        benefits: ['No more glasses', 'Life-changing clarity', '15-minute procedures', 'High safety profile'],
        process: [
            { step: '01', title: 'Screening', desc: 'Mapping the cornea and checking thickness.' },
            { step: '02', title: 'Laser/Lens', desc: 'Applying the laser or inserting the ICL.' },
            { step: '03', title: 'Clarity', desc: 'Most patients see clearly within 24 hours.' },
        ],
        faqs: [
            { q: 'Which is better?', a: 'LASIK is common, but ICL is often better for very high powers.' },
        ],
    },
    {
        id: 'retina-surgery',
        // icon: <FaStethoscope />,
        tag: 'Surgical Retina',
        tagColor: 'bg-teal-dark text-white',
        title: 'Retina Surgery',
        subtitle: 'Vitreoretinal expertise',
        heroGrad: 'from-tealCustom via-tealCustom to-teal/50',
        accentColor: '#2D6354',
        shortDesc: 'Advanced surgical interventions for retinal detachment and vitreous diseases.',
        overview: 'Complex microsurgery of the posterior segment, including vitrectomy to repair the retina and restore vision.',
        benefits: ['Expert VR surgeons', 'Advanced vitrectomy systems', 'Emergency care for detachments', 'High success rates'],
        process: [
            { step: '01', title: 'Imaging', desc: 'High-speed OCT and Fundus mapping.' },
            { step: '02', title: 'Vitrectomy', desc: 'Removing the vitreous gel and repairing the retina.' },
            { step: '03', title: 'Tamponade', desc: 'Using gas or oil to hold the retina in place during healing.' },
        ],
        faqs: [
            { q: 'Is it an emergency?', a: 'Sudden flashes or a "curtain" in vision are emergencies.' },
        ],
    },
    {
        id: 'diabetic-retinopathy',
        // icon: <FaTint />,
        tag: 'Diabetes Care',
        tagColor: 'bg-teal-dark text-white',
        title: 'Diabetic Retinopathy Management',
        subtitle: 'Medical & Surgical specialized care',
        heroGrad: 'from-tealCustom via-tealCustom to-teal/50',
        accentColor: '#2D6354',
        shortDesc: 'Comprehensive care to prevent vision loss caused by diabetic complications.',
        overview: 'Management includes screening, laser photocoagulation, and anti-VEGF injections to control leaking blood vessels.',
        benefits: ['Prevention of blindness', 'In-house laser therapy', 'Pain-free injections', 'Long-term monitoring'],
        process: [
            { step: '01', title: 'Screening', desc: 'Dilated fundus exam and OCT.' },
            { step: '02', title: 'Laser/Injection', desc: 'Treating the leakage to stabilize vision.' },
        ],
        faqs: [
            { q: 'Does it cause blindness?', a: 'If untreated, yes. With management, vision is usually preserved.' },
        ],
    },
    {
        id: 'secondary-iol',
        // icon: <FaGem />,
        tag: 'Advanced Repair',
        tagColor: 'bg-orange text-white',
        title: 'Secondary IOL Surgery',
        subtitle: 'Correcting complex lens issues',
        heroGrad: 'from-orangeCustom via-orange-light to-yellow-300',
        accentColor: '#F77F00',
        shortDesc: 'Implanting a lens in eyes that lack natural support due to previous surgery or injury.',
        overview: 'Using advanced fixation techniques (Scleral Fixated or Iris Claw) to restore vision for aphakic patients.',
        benefits: ['Restores sight after complications', 'Customized fixation', 'Improved depth perception'],
        process: [
            { step: '01', title: 'Eval', desc: 'Determining the best anchor point for the lens.' },
            { step: '02', title: 'Surgery', desc: 'Microsurgical anchoring of the new lens.' },
        ],
        faqs: [
            { q: 'Is it safe?', a: 'Yes, it is a standard reconstructive procedure for specialists.' },
        ],
    },
    {
        id: 'squint-surgery',
        // icon: <FaArrowsAltH />,
        tag: 'Alignment',
        tagColor: 'bg-orange text-white',
        title: 'Squint Surgery',
        subtitle: 'Restoring eye alignment',
        heroGrad: 'from-orangeCustom via-amber-400 to-yellow-300',
        accentColor: '#F77F00',
        shortDesc: 'Surgical correction of misaligned eyes for both functional and cosmetic improvement.',
        overview: 'Precise adjustment of eye muscles to ensure both eyes point in the same direction and work together.',
        benefits: ['Improved appearance', 'Better 3D vision', 'Increased confidence'],
        process: [
            { step: '01', title: 'Mapping', desc: 'Measuring the degree of deviation.' },
            { step: '02', title: 'Adjustment', desc: 'Strengthening or weakening specific muscles.' },
        ],
        faqs: [
            { q: 'Can adults get it?', a: 'Yes, squint surgery is highly successful in adults.' },
        ],
    },
    {
        id: 'pediatric-ophthalmology',
        // icon: <FaBaby />,
        tag: 'Child Specialist',
        tagColor: 'bg-orange text-white',
        title: 'Pediatric Ophthalmology',
        subtitle: 'Eye care for the little ones',
        heroGrad: 'from-orangeCustom via-amber-400 to-yellow-300',
        accentColor: '#F77F00',
        shortDesc: 'Specialized diagnostics and treatments for vision problems in infants and children.',
        overview: 'Managing lazy eye, pediatric cataracts, and refractive errors in a child-friendly environment.',
        benefits: ['Child-friendly setup', 'Early intervention', 'Specialized screening'],
        process: [
            { step: '01', title: 'Checkup', desc: 'Play-based vision assessment.' },
            { step: '02', title: 'Treatment', desc: 'Patching, glasses, or therapy.' },
        ],
        faqs: [
            { q: 'When should they see a doctor?', a: 'First exam should be at age 1, or earlier if you notice issues.' },
        ],
    },
    {
        id: 'neuro-ophthalmology',
        // icon: <FaBrain />,
        tag: 'Brain & Vision',
        tagColor: 'bg-teal-dark text-white',
        title: 'Neuro Ophthalmology',
        subtitle: 'Managing the brain-eye connection',
        heroGrad: 'from-tealCustom via-tealCustom to-teal/50',
        accentColor: '#2D6354',
        shortDesc: 'Diagnosing vision problems related to the nervous system and optic nerve.',
        overview: 'Care for optic neuritis, double vision, and vision loss related to neurological conditions.',
        benefits: ['Specialized nerve testing', 'Integrated neuro-care', 'Optic nerve OCT'],
        process: [
            { step: '01', title: 'Testing', desc: 'Visual fields and pupil assessment.' },
            { step: '02', title: 'Imaging', desc: 'Detailed optic nerve scans.' },
        ],
        faqs: [
            { q: 'What is a "Neuro" eye issue?', a: 'Any vision loss caused by the nerve or brain rather than the eye itself.' },
        ],
    },
    {
        id: 'oculoplasty',
        // icon: <FaSparkles />,
        tag: 'Aesthetic',
        tagColor: 'bg-teal-dark text-white',
        title: 'Oculoplasty',
        subtitle: 'Eyelid and orbital surgery',
        heroGrad: 'from-tealCustom via-tealCustom to-teal/50',
        accentColor: '#2D6354',
        shortDesc: 'Reconstructive and cosmetic surgery of the eyelids and surrounding structures.',
        overview: 'Treating drooping eyelids (ptosis), tear duct blockages, and eyelid growths.',
        benefits: ['Improved lid function', 'Cosmetic rejuvenation', 'Clearer field of vision'],
        process: [
            { step: '01', title: 'Eval', desc: 'Functional and aesthetic measurement.' },
            { step: '02', title: 'Procedure', desc: 'Precision eyelid surgery.' },
        ],
        faqs: [
            { q: 'Is ptosis surgery just cosmetic?', a: 'No, it often helps people see better by lifting the lid out of the way.' },
        ],
    },
    {
        id: 'pterygium',
        // icon: <FaShieldAlt />,
        tag: 'Reconstructive',
        tagColor: 'bg-teal text-white',
        title: 'Pterygium Excision',
        subtitle: 'With Conjunctival Autograft',
        heroGrad: 'from-tealCustom via-tealCustom to-teal/50',
        accentColor: '#408A71',
        shortDesc: 'Removal of eye growths using advanced grafting to prevent recurrence.',
        overview: 'Using "no-stitch" glue techniques to graft healthy tissue over the excision site for better healing.',
        benefits: ['Lowest recurrence rates', 'Stitchless healing', 'Excellent cosmetic result'],
        process: [
            { step: '01', title: 'Removal', desc: 'Careful excision of the growth.' },
            { step: '02', title: 'Autograft', desc: 'Placing a healthy tissue graft over the area.' },
        ],
        faqs: [
            { q: 'Will it grow back?', a: 'Recurrence is very rare with the autograft technique.' },
        ],
    },
    {
        id: 'glaucoma-surgery',
        // icon: <FaDna />,
        tag: 'Pressure Control',
        tagColor: 'bg-teal-dark text-white',
        title: 'Glaucoma Surgery',
        subtitle: 'Preserving the optic nerve',
        heroGrad: 'from-tealCustom via-tealCustom to-teal/50',
        accentColor: '#2D6354',
        shortDesc: 'Advanced surgical options to lower eye pressure when medications fail.',
        overview: 'Procedures like trabeculectomy or valve implants to create new drainage pathways for eye fluid.',
        benefits: ['Halts vision loss', 'Reduces reliance on drops', 'Long-term pressure control'],
        process: [
            { step: '01', title: 'Staging', desc: 'Determining the severity of nerve damage.' },
            { step: '02', title: 'Surgery', desc: 'Creating a new drainage "bypass".' },
        ],
        faqs: [
            { q: 'Is it a cure?', a: 'No, but it is the best way to prevent further damage.' },
        ],
    },
    {
        id: 'myopia-clinic',
        // icon: <FaChartLine />,
        tag: 'Vision Control',
        tagColor: 'bg-teal text-white',
        title: 'Myopia Clinic',
        subtitle: 'Slowing the progression',
        heroGrad: 'from-tealCustom via-tealCustom to-teal/50',
        accentColor: '#408A71',
        shortDesc: 'Specialized clinic dedicated to slowing down nearsightedness in children.',
        overview: 'Using Atropine drops and specialized lenses to prevent eye power from increasing rapidly.',
        benefits: ['Reduced risk of high myopia', 'Better long-term eye health', 'Expert monitoring'],
        process: [
            { step: '01', title: 'Axial Length', desc: 'Measuring the physical length of the eye.' },
            { step: '02', title: 'Management', desc: 'Prescribing myopia-control solutions.' },
        ],
        faqs: [
            { q: 'Can myopia be stopped?', a: 'It can be significantly slowed with modern treatments.' },
        ],
    },
    {
        id: 'contact-lens',
        // icon: <FaDotCircle />,
        tag: 'Vision Choice',
        tagColor: 'bg-teal text-white',
        title: 'Contact Lens',
        subtitle: 'Specialty & Cosmetic fitting',
        heroGrad: 'from-tealCustom via-tealCustom to-teal/50',
        accentColor: '#408A71',
        shortDesc: 'Expert fitting for all types of lenses, including specialty lenses for keratoconus.',
        overview: 'Comprehensive fitting for soft, RGP, and Scleral lenses to ensure comfort and health.',
        benefits: ['Perfect fit', 'Trial lenses available', 'Keratoconus solutions'],
        process: [
            { step: '01', title: 'Fitting', desc: 'Measuring corneal curvature.' },
            { step: '02', title: 'Trial', desc: 'Checking comfort and vision with test lenses.' },
        ],
        faqs: [
            { q: 'Can I wear lenses with dry eyes?', a: 'Yes, we have specialized lenses for dry eye conditions.' },
        ],
    },
    {
        id: 'pharmacy',
        // icon: <FaCapsules />,
        tag: 'Convenience',
        tagColor: 'bg-teal text-white',
        title: 'Pharmacy',
        subtitle: 'Genuine Ophthalmic medicines',
        heroGrad: 'from-tealCustom via-tealCustom to-teal/50',
        accentColor: '#408A71',
        shortDesc: 'In-house pharmacy providing authentic eye drops and medications prescribed by our doctors.',
        overview: 'A one-stop shop for all your eye care medications, ensuring quality and availability.',
        benefits: ['Authentic medicines', 'One-stop shop', 'Expert storage of drops'],
        process: [
            { step: '01', title: 'Billing', desc: 'Direct access from consultation.' },
            { step: '02', title: 'Counseling', desc: 'Guidance on how to apply eye drops correctly.' },
        ],
        faqs: [
            { q: 'Do you have all drops?', a: 'We stock almost all specialized ophthalmic formulations.' },
        ],
    },
];

const features = [
    {
        icon: <FaHospital />,
        title: "State-of-the-Art Equipment",
        desc: "Zeiss, Alcon and Lumenis platforms for diagnosis and surgery — the same technology used in global centres of excellence.",
    },
    {
        icon: <FaUserMd />,
        title: "Trained Surgeons",
        desc: "Every specialist has undergone fellowship training in their subspecialty — LASIK, Retina, Pediatrics, Glaucoma, Oculoplasty.",
    },
    {
        icon: <FaShieldAlt />,
        title: "Insurance Support",
        desc: "We are empanelled with major insurance providers offering seamless cashless treatment and hassle-free claim assistance for our patients.",
    },
    {
        icon: <FaMicroscope />,
        title: "NABH Accredited",
        desc: "Our clinical protocols and patient safety standards are certified to the highest national quality benchmark.",
    },
];

// ── FAQ accordion ──
function FAQItem({ q, a }) {
    const [open, setOpen] = useState(false)
    return (
        <div className="border-b border-teal/10">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between py-4 text-left gap-4 group"
            >
                <span className={`text-[14px] font-medium transition-colors ${open ? 'text-teal' : 'text-gray-700 group-hover:text-teal'}`}>{q}</span>
                <span className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-lg font-light transition-all duration-300 ${open ? 'bg-teal text-white rotate-45' : 'bg-teal-pale text-teal'}`}>+</span>
            </button>
            <div className={`overflow-hidden transition-all duration-350 ${open ? 'max-h-48 pb-4' : 'max-h-0'}`}>
                <p className="text-[13.5px] text-gray-500 leading-relaxed">{a}</p>
            </div>
        </div>
    )
}

// ── Service Detail Modal ──
function ServiceModal({ service, onClose }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = '' }
    }, [])

    return (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6" onClick={onClose}>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <div
                className="relative bg-white w-full md:max-w-3xl max-h-[92vh] md:rounded-3xl overflow-y-auto shadow-2xl"
                onClick={e => e.stopPropagation()}
                style={{ scrollbarWidth: 'thin' }}
            >
                {/* Header */}
                <div className={`bg-gradient-to-br ${service.heroGrad} p-8 md:p-10 relative overflow-hidden`}>
                    <div className="absolute top-[-40px] right-[-40px] w-52 h-52 rounded-full bg-white/8" />
                    <div className="absolute bottom-[-30px] left-[-20px] w-36 h-36 rounded-full bg-white/5" />
                    <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-colors text-lg leading-none">×</button>
                    <div className="relative z-10">
                        <span className={`inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 bg-white/20 text-white border border-white/20`}>
                            {service.tag}
                        </span>
                        <div className="text-4xl mb-3">{service.icon}</div>
                        <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-2">{service.title}</h2>
                        <p className="text-white/70 text-base">{service.subtitle}</p>
                    </div>
                </div>

                {/* Body */}
                <div className="p-6 md:p-10">
                    {/* Overview */}
                    <div className="mb-8">
                        <p className="text-[11px] font-bold tracking-widest uppercase text-orange mb-3">Overview</p>
                        <p className="text-[15px] text-gray-600 leading-relaxed">{service.overview}</p>
                    </div>

                    {/* Benefits */}
                    <div className="mb-8">
                        <p className="text-[11px] font-bold tracking-widest uppercase text-orange mb-4">Key Benefits</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.benefits.map(b => (
                                <div key={b} className="flex items-start gap-3 bg-teal-pale/50 border border-teal/10 rounded-xl px-4 py-3">
                                    <svg className="w-4 h-4 fill-teal mt-0.5 flex-shrink-0" viewBox="0 0 16 16">
                                        <path d="M13 4L6.5 11 3 7.5l-1 1L6.5 13l7.5-8.5-1-.5z" />
                                    </svg>
                                    <span className="text-[13px] text-teal-dark font-medium">{b}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Process */}
                    <div className="mb-8">
                        <p className="text-[11px] font-bold tracking-widest uppercase text-orange mb-4">How It Works</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {service.process.map(p => (
                                <div key={p.step} className="bg-[#F7F7F5] rounded-xl p-5 border border-gray-100">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="font-display text-2xl font-semibold text-teal opacity-40">{p.step}</span>
                                        <h4 className="font-display text-[16px] font-semibold text-gray-900">{p.title}</h4>
                                    </div>
                                    <p className="text-[13px] text-gray-500 leading-relaxed">{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FAQs */}
                    <div className="mb-8">
                        <p className="text-[11px] font-bold tracking-widest uppercase text-orange mb-4">Common Questions</p>
                        <div className="border border-teal/10 rounded-xl overflow-hidden px-4">
                            {service.faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-tealCustom rounded-2xl p-6 text-center">
                        <p className="font-display text-xl font-semibold text-white mb-2">Interested in {service.title}?</p>
                        <p className="text-white/60 text-sm mb-5">Book a consultation and our specialists will guide you through the best option for your eyes.</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <a href="/appointment" onClick={onClose} className="bg-orange hover:bg-orange-light text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-250 shadow-lg shadow-orange/30">
                                Book Appointment
                            </a>
                            <a href="tel:06300809448" className="border border-white/25 text-white hover:bg-white/10 px-6 py-3 rounded-full text-sm font-semibold transition-all">
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// ── Main Page Component ──────────────────────────────
export default function ServicesPage() {
    const [selectedService, setSelectedService] = useState(null)
    const pageRef = useRef(null)
    useReveal(pageRef)

    return (
        <div ref={pageRef} className="font-body bg-white overflow-x-hidden">

            {/* ── HERO ──────────────────────────────────────── */}
            <section className="relative min-h-[75vh] flex items-center pt-[70px] overflow-hidden bg-tealCustom">
                {/* BG decor */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-100px] right-[-80px] w-[440px] h-[440px] rounded-full bg-teal/40 blur-[80px]" />
                    <div className="absolute bottom-[-60px] left-[-40px] w-[300px] h-[300px] rounded-full bg-orange/15 blur-[60px]" />
                    <div className="absolute inset-0 opacity-[0.04]"
                        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 py-20">
                    <div className="flex items-center gap-2 text-white/40 text-[11px] tracking-widest uppercase mb-10 srv-reveal">
                        <a href="/" className="hover:text-white/70 transition-colors no-underline">Home</a>
                        <span>/</span>
                        <span className="text-orange-light">Services</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 border border-white/15 rounded-full px-4 py-1.5 mb-7 srv-reveal" style={{ transitionDelay: '.1s' }}>
                                <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
                                <span className="text-[11px] font-semibold tracking-[.13em] uppercase text-white/70">16 Specialties · World-Class Care</span>
                            </div>

                            <h1 className="font-display text-[clamp(44px,6.5vw,86px)] font-light leading-[1.04] text-white mb-6 srv-reveal" style={{ transitionDelay: '.2s' }}>
                                Advanced Eye<br />
                                <em className="italic text-orangeCustom">Care Services</em>
                            </h1>

                            <p className="text-[16px] text-white/60 leading-relaxed max-w-[480px] mb-10 srv-reveal" style={{ transitionDelay: '.35s' }}>
                                From routine eye check-ups to complex vitreoretinal surgery — every treatment at Gupta Eye Care Center is delivered by fellowship-trained specialists using the latest technology.
                            </p>

                            <div className="flex flex-wrap gap-4 srv-reveal" style={{ transitionDelay: '.5s' }}>
                                <a href="#services-grid" className="bg-orangeCustom hover:bg-orange-light text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-orange/30">
                                    Explore Services
                                </a>
                                <a href="/appointment" className="border border-white/25 hover:border-white/50 text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all hover:bg-white/8">
                                    Book Consultation
                                </a>
                            </div>
                        </div>

                        {/* Right: Premium Image Section */}
                        <div className="hidden lg:flex justify-end srv-reveal" style={{ transitionDelay: '.3s' }}>
                            <div className="relative w-full max-w-[560px]">
                                {/* Background Decorative Glows */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orangeCustom/5 blur-[100px] rounded-full pointer-events-none" />

                                <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
                                    {/* Interactive overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-tealCustom/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

                                    <img
                                        src="public/assets/gupta eye care services.png"
                                        alt="Advanced Eye Care Technology"
                                        className="w-full h-auto object-cover transform transition-transform duration-[2s] group-hover:scale-110"
                                    />
                                </div>

                                {/* Experience Card Overlay */}
                                <div className="absolute -bottom-6 -left-8 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-2xl z-20 flex items-center gap-4 animate-float">
                                    <div className="w-12 h-12 rounded-xl bg-orangeCustom flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-orange/20">
                                        7+
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm leading-tight">Years of</p>
                                        <p className="text-white/60 text-[11px] uppercase tracking-wider">Ocular Excellence</p>
                                    </div>
                                </div>

                                {/* Subtle corner accent */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-white/20 rounded-tr-[2rem] z-0" />
                            </div>
                        </div>
                    </div>
                </div>

                <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="absolute bottom-0 left-0 right-0 w-full h-12 fill-white z-0 pointer-events-none">
                    <path d="M0,40 C360,0 1080,60 1440,20 L1440,60 L0,60 Z" />
                </svg>
            </section>

            {/* ── SERVICES GRID ────────────────────────────── */}
            <section className="py-10 bg-[#F7F7F5]" id="services-grid">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16 srv-reveal">
                        <p className="text-[11px] font-bold tracking-[.15em] uppercase text-orangeCustom mb-4">Expertise & Care</p>
                        <h2 className="font-display text-[clamp(32px,5vw,52px)] font-light text-gray-900 leading-tight">
                            Our Specialized <em className="italic text-tealCustom">Eye Services</em>
                        </h2>
                        {/* <div className="w-20 h-1 bg-teal/20 mx-auto mt-6 rounded-full"></div> */}
                    </div>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
                        {SERVICES.map((service, i) => (
                            <div
                                key={service.id}
                                className="srv-reveal group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-teal/10 hover:-translate-y-2 transition-all duration-400 cursor-pointer flex flex-col"
                                style={{ transitionDelay: `${i * 60}ms` }}
                                onClick={() => setSelectedService(service)}
                            >
                                {/* Card header with gradient */}
                                <div className={`relative h-44 bg-gradient-to-br ${service.heroGrad} overflow-hidden flex-shrink-0`}>
                                    <div className="absolute top-[-20px] right-[-20px] w-36 h-36 rounded-full bg-white/8" />
                                    <div className="absolute bottom-[-30px] left-[-10px] w-24 h-24 rounded-full bg-white/6" />
                                    <div className="absolute inset-0 opacity-[0.06]"
                                        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                                    <div className="relative z-10 p-7 flex items-start justify-between h-full">
                                        <div>
                                            {/* <div className="text-4xl mb-3">{service.icon}</div> */}
                                            <span className={`inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${service.tagColor} opacity-90`}>
                                                {service.tag}
                                            </span>
                                        </div>
                                        <div className="w-9 h-9 rounded-full bg-white/15 border border-white/25 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
                                            <svg className="w-4 h-4 fill-white" viewBox="0 0 16 16">
                                                <path d="M3 8h10M9 4l4 4-4 4" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Card body */}
                                <div className="p-7 flex flex-col flex-1">
                                    <h3 className="font-display text-2xl font-semibold text-gray-900 mb-1 leading-tight group-hover:text-teal transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-[12px] font-semibold tracking-wide text-orange uppercase mb-4">{service.subtitle}</p>
                                    <p className="text-[14px] text-gray-500 leading-relaxed flex-1">{service.shortDesc}</p>

                                    {/* Benefits preview */}
                                    <div className="mt-5 pt-5 border-t border-gray-100">
                                        <div className="flex flex-wrap gap-2">
                                            {service.benefits.slice(0, 3).map(b => (
                                                <span key={b} className="text-[11px] bg-teal-pale text-teal-dark font-medium px-2.5 py-1 rounded-full border border-teal/12">
                                                    {b.length > 24 ? b.slice(0, 24) + '…' : b}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Learn more */}
                                    <button className="mt-5 flex items-center gap-2 text-sm font-semibold text-teal group-hover:gap-3 transition-all duration-300">
                                        Learn More
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE US ────────────────────────────── */}
            <section className="py-10 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16 srv-reveal">
                        <p className="text-[11px] font-bold tracking-[.15em] uppercase text-orangeCustom mb-4">Why Gupta Eye Care</p>
                        <h2 className="font-display text-[clamp(30px,4vw,50px)] font-light text-gray-900">
                            Technology You Can <em className="italic text-tealCustom">Trust</em>
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((item, i) => (
                            <div
                                key={item.title}
                                className="srv-reveal text-center p-7 rounded-2xl bg-[#F7F7F5] border border-gray-100 hover:bg-white hover:shadow-lg hover:shadow-teal/8 hover:-translate-y-1 transition-all duration-300"
                                style={{ transitionDelay: `${i * 70}ms` }}
                            >
                                <div className="text-4xl mb-5 text-tealCustom flex justify-center">
                                    {item.icon}
                                </div>

                                <h3 className="font-display text-[18px] font-semibold text-gray-900 mb-3 leading-tight">
                                    {item.title}
                                </h3>

                                <p className="text-[13px] text-gray-500 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA BANNER ───────────────────────────────── */}
            <section className="py-10 bg-tealCustom relative overflow-hidden" id="appointment">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-80px] right-[-60px] w-[320px] h-[320px] rounded-full bg-orange/15 blur-[60px]" />
                    <div className="absolute bottom-[-60px] left-[-40px] w-[260px] h-[260px] rounded-full bg-teal/30 blur-[50px]" />
                </div>
                <div className="max-w-3xl mx-auto px-6 text-center relative z-10 srv-reveal">
                    <h2 className="font-display text-[clamp(30px,5vw,56px)] font-light text-white leading-tight mb-5">
                        Not Sure Which Treatment<br />
                        <em className="italic text-orangeCustom">Is Right for You?</em>
                    </h2>
                    <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg mx-auto">
                        Book a comprehensive consultation. Our specialists will evaluate your eyes and recommend the most suitable treatment for your vision goals.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="/appointment" className="bg-orangeCustom hover:bg-orange-light text-white px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-xl shadow-orange/30">
                            Book Free Consultation
                        </a>
                        <a href="tel:06300809448" className="border border-white/25 hover:border-white/50 text-white px-8 py-4 rounded-full font-semibold text-sm transition-all hover:bg-white/8">
                            6300809448
                        </a>
                    </div>
                </div>
            </section>

            <style>{`
                .srv-reveal { opacity: 0; transform: translateY(26px); transition: opacity .65s ease, transform .65s ease; }
                .srv-reveal.srv-visible { opacity: 1 !important; transform: translateY(0) !important; }
            `}</style>

            {selectedService && (
                <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
            )}
        </div>
    )
}