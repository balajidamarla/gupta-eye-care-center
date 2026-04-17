import { useState, useEffect, useRef } from "react";
import { FaUserMd, FaAward, FaGlobe, FaComments } from "react-icons/fa";
import { MdCall, MdOutlineMedicalServices } from "react-icons/md";

/* ═══════════════════════════════════════════════════════════
   DOCTORS DATA
═══════════════════════════════════════════════════════════ */
const DOCTORS = [
  {
    id: "rajender-gupta",
    initials: "RG",
    name: "Dr. Rajender Gupta",
    title: "Medical Director & Chief Consultant",
    specialty: "Cataract & Refractive Surgeon",
    tag: "Chief Surgeon",
    tagColor: "#F77F00",
    grad: ["#008f96"],
    exp: "35+",
    patients: "50,000+",
    surgeries: "30,000+",
    rating: "5.0",
    qualifications: ["MBBS", "MS (Ophthalmology)", "Retd. Superintendent, Sarojini Devi Eye Hospital", "Retd. Professor, Osmania Medical College"],
    specializations: ["Cataract Surgery", "Refractive Surgery", "Hospital Administration", "Clinical Teaching"],
    languages: ["Telugu", "Hindi", "English"],
    availability: ["Mon – Sat", "10:00 AM – 7:00 PM"],
    bio: "Dr. Rajender Gupta is a pillar of the ophthalmic community in Hyderabad. Having served as the Superintendent of the prestigious Sarojini Devi Eye Hospital and as a Professor at Osmania Medical College, he brings unparalleled clinical wisdom to Gupta Eye Care Center. As Medical Director, he oversees all surgical protocols and specializes in advanced cataract and refractive procedures.",
    achievements: ["Former Superintendent – Sarojini Devi Eye Hospital", "Former Professor – Osmania Medical College", "State-level Excellence Award in Medicine", "Trained hundreds of current eye surgeons in Telangana"],
    filter: ["all", "cataract", "lasik"],
  },
  {
    id: "siddhartha-reddy",
    initials: "SR",
    name: "Dr. A. Siddhartha Reddy",
    title: "Senior Consultant Surgeon",
    specialty: "Phaco & ICL Surgeon",
    tag: "ICL Expert",
    tagColor: "#408A71",
    grad: ["#008f96"],
    exp: "15+",
    patients: "15,000+",
    surgeries: "10,000+",
    rating: "4.9",
    qualifications: ["MBBS", "MS (Ophthalmology)"],
    specializations: ["Phacoemulsification", "ICL (Implantable Collamer Lens)", "Premium IOL Implantation", "Refractive Surgery"],
    languages: ["Telugu", "Hindi", "English"],
    availability: ["Mon – Sat", "10:00 AM – 5:00 PM"],
    bio: "Dr. A. Siddhartha Reddy is a specialist in sutureless cataract surgery and premium vision correction. With a focus on Phacoemulsification and ICL implantation, he has helped thousands of patients achieve high-definition vision without the need for glasses.",
    achievements: ["Expert in Premium Multifocal IOLs", "High success rate in complex ICL procedures", "Member of All India Ophthalmological Society"],
    filter: ["all", "icl", "cataract"],
  },
  {
    id: "sarang-gupta",
    initials: "SG",
    name: "Dr. Sarang Rajendra Gupta",
    title: "Vitreoretina & Uvea Specialist",
    specialty: "Vitreoretina and Posterior Segment Surgeon",
    tag: "Retina Expert",
    tagColor: "#2D6354",
    grad: ["#008f96"],
    exp: "10+",
    patients: "8,000+",
    surgeries: "5,500+",
    rating: "4.9",
    qualifications: ["MBBS", "DNB", "FLVPEI (L.V. Prasad Eye Institute)"],
    specializations: ["Vitreoretinal Surgery", "Posterior Segment Disorders", "Uvea Specialist", "Diabetic Retinopathy Management"],
    languages: ["Telugu", "Hindi", "English"],
    availability: ["Mon – Sat", "11:00 AM – 7:00 PM"],
    bio: "Dr. Sarang Gupta is a fellowship-trained Vitreoretinal surgeon from the prestigious L.V. Prasad Eye Institute. He specializes in the medical and surgical management of complex retina cases, including retinal detachments, diabetic eye disease, and inflammatory uveal conditions.",
    achievements: ["Fellow of L.V. Prasad Eye Institute (FLVPEI)", "Specialist in Posterior Segment Trauma", "Expert in Advanced Uveitis Management"],
    filter: ["all", "retina"],
  },
  {
    id: "suhasini",
    initials: "DS",
    name: "Dr. D. Suhasini",
    title: "Consultant Ophthalmologist",
    specialty: "Comprehensive Eye Care",
    tag: "Consultant",
    tagColor: "#6BB59A",
    grad: ["#008f96"],
    exp: "20+",
    patients: "20,000+",
    surgeries: "4,000+",
    rating: "4.8",
    qualifications: ["MBBS", "D.O (Diploma in Ophthalmology)"],
    specializations: ["Comprehensive Eye Examination", "Medical Ophthalmology", "Glaucoma Screening", "General Eye Health"],
    languages: ["Telugu", "Hindi", "English"],
    availability: ["Mon – Sat", "10:00 AM – 6:00 PM"],
    bio: "Dr. D. Suhasini brings over two decades of experience in comprehensive ophthalmology. She is highly skilled in diagnosing a wide range of ocular conditions and provides personalized medical care to patients of all ages.",
    achievements: ["20+ years of Clinical Excellence", "Trusted name in General Ophthalmology in Hyderabad", "Expert in pre-operative and post-operative surgical care"],
    filter: ["all", "general"],
  },
  {
    id: "nirathya-anisha",
    initials: "NA",
    name: "Dr. Nirathya Anisha. P",
    title: "Pediatric & Neuro-Ophthalmologist",
    specialty: "Pediatric, Strabismus & Neuro-Ophthalmologist",
    tag: "Child Specialist",
    tagColor: "#F77F00",
    grad: ["#008f96"],
    exp: "8+",
    patients: "7,000+",
    surgeries: "3,000+",
    rating: "4.9",
    qualifications: ["MBBS", "MS (Ophthalmology)", "FLVPEI (L.V. Prasad Eye Institute)"],
    specializations: ["Pediatric Eye Care", "Squint (Strabismus) Surgery", "Neuro-Ophthalmology", "Amblyopia Management"],
    languages: ["Telugu", "Hindi", "English"],
    availability: ["Tue, Thu, Sat", "10:00 AM – 7:00 PM"],
    bio: "Dr. Nirathya Anisha specializes in the delicate field of children's eye care and neurological vision disorders. Fellowship-trained at L.V. Prasad Eye Institute, she is an expert in correcting squints and managing complex neuro-ophthalmic cases in both children and adults.",
    achievements: ["Fellow of L.V. Prasad Eye Institute in Pediatric Ophthalmology", "Gold Medalist in MS Ophthalmology", "Specialist in Adult Strabismus Correction"],
    filter: ["all", "pediatric"],
  },
  {
    id: "harsha-kandoi",
    initials: "HK",
    name: "Dr. Harsha Kandoi",
    title: "Oculoplasty Surgeon",
    specialty: "Aesthetic & Reconstructive Oculoplasty",
    tag: "Oculoplasty Expert",
    tagColor: "#408A71",
    grad: ["#008f96"],
    exp: "7+",
    patients: "5,000+",
    surgeries: "2,500+",
    rating: "4.9",
    qualifications: ["MBBS", "DNB", "FLVPEI (L.V. Prasad Eye Institute)", "FAICO"],
    specializations: ["Oculoplastic Surgery", "Eyelid Reconstructive Surgery", "DCR Surgery", "Aesthetic Eye Procedures"],
    languages: ["Telugu", "Hindi", "English"],
    availability: ["Mon, Wed, Fri", "11:00 AM – 6:00 PM"],
    bio: "Dr. Harsha Kandoi is a highly skilled Oculoplasty surgeon trained at the world-renowned L.V. Prasad Eye Institute. She focuses on the plastic and reconstructive surgery of the structures around the eye, including the eyelids, tear ducts, and orbit.",
    achievements: ["Fellow of L.V. Prasad Eye Institute (FLVPEI)", "FAICO Certified Specialist", "Expert in Ptosis and Entropion corrections"],
    filter: ["all", "oculoplasty"],
  },
];

// const FILTERS = [
//   { key: "all",         label: "All Doctors" },
//   { key: "lasik",      label: "LASIK" },
//   { key: "cataract",   label: "Cataract" },
//   { key: "retina",     label: "Retina" },
//   { key: "glaucoma",   label: "Glaucoma" },
//   { key: "pediatric",  label: "Pediatric" },
//   { key: "icl",        label: "ICL" },
//   { key: "oculoplasty",label: "Oculoplasty" },
//   { key: "general",    label: "General OPD" },
// ];

/* ═══════════════════════════════════════════════════════════
   HOOKS
═══════════════════════════════════════════════════════════ */
function useScrollReveal(ref) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("dp-visible"); }),
      { threshold: 0.07 }
    );
    ref.current?.querySelectorAll(".dp-reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ref]);
}

function useCountUp(target, duration = 1600, trigger = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, trigger]);
  return count;
}

/* ═══════════════════════════════════════════════════════════
   STAR RATING
═══════════════════════════════════════════════════════════ */
function Stars({ rating }) {
  const full = Math.floor(parseFloat(rating));
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" className={`w-3.5 h-3.5 ${i < full ? "fill-[#F77F00]" : "fill-gray-200"}`}>
          <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.25l-3.71 2.3.71-4.13L2 5.5l4.15-.75z" />
        </svg>
      ))}
      <span className="ml-1.5 text-[12px] font-semibold text-gray-600">{rating}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   DOCTOR MODAL
═══════════════════════════════════════════════════════════ */
function DoctorModal({ doc, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const esc = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", esc);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", esc); };
  }, [onClose]);

  const grad = `linear-gradient(135deg, ${doc.grad.join(", ")})`;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6" onClick={onClose}>
      <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" />

      <div
        className="relative bg-white w-full sm:max-w-2xl max-h-[94vh] sm:rounded-3xl overflow-y-auto shadow-2xl"
        style={{ scrollbarWidth: "thin" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div className="relative overflow-hidden p-8 sm:p-10" style={{ background: grad }}>
          <div className="absolute top-[-40px] right-[-40px] w-56 h-56 rounded-full bg-white/8 pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-20px] w-36 h-36 rounded-full bg-white/5 pointer-events-none" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-white text-xl leading-none hover:bg-white/30 transition-colors z-10"
          >×</button>

          <div className="relative z-10 flex items-center gap-6">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-2xl bg-white/15 border-2 border-white/30 flex items-center justify-center flex-shrink-0">
              <span className="font-display text-3xl font-semibold text-white">{doc.initials}</span>
            </div>
            <div>
              <span
                className="bg-tealCustom inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/20 text-white mb-2"
              >{doc.tag}</span>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white leading-tight">{doc.name}</h2>
              <p className="text-white/65 text-sm mt-1">{doc.specialty}</p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="relative z-10 grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/15">
            {[
              { label: "Experience", value: doc.exp + " yrs" },
              { label: "Patients", value: doc.patients },
              { label: "Rating", value: "⭐ " + doc.rating },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-xl font-semibold text-white leading-none">{s.value}</p>
                <p className="text-[11px] text-white/50 mt-1 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Body ── */}
        <div className="p-6 sm:p-10 space-y-8">

          {/* About */}
          <div>
            <p className="text-[11px] font-bold tracking-[.15em] uppercase text-[#F77F00] mb-3">About</p>
            <p className="text-[15px] text-gray-600 leading-relaxed">{doc.bio}</p>
          </div>

          {/* Qualifications */}
          <div>
            <p className="text-[11px] font-bold tracking-[.15em] uppercase text-[#F77F00] mb-4">Qualifications</p>
            <div className="space-y-2.5">
              {doc.qualifications.map((q) => (
                <div key={q} className="flex items-start gap-3 bg-[#EAF5F0]/50 border border-[#408A71]/10 rounded-xl px-4 py-3">
                  <svg className="w-4 h-4 fill-[#408A71] flex-shrink-0 mt-0.5" viewBox="0 0 16 16">
                    <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm-.25 9.5L4.5 7.5l1-1 2.25 2.25 3.75-4 1 1L7.75 10.5z" />
                  </svg>
                  <span className="text-[13.5px] text-[#2D6354] font-medium leading-snug">{q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specializations */}
          <div>
            <p className="text-[11px] font-bold tracking-[.15em] uppercase text-[#F77F00] mb-4">Areas of Specialization</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {doc.specializations.map((s) => (
                <div key={s} className="flex items-center gap-3 bg-[#F7F7F5] border border-gray-100 rounded-xl px-4 py-3">
                  <div className="w-2 h-2 rounded-full bg-[#408A71] flex-shrink-0" />
                  <span className="text-[13.5px] text-gray-700 font-medium">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          {/* <div>
            <p className="text-[11px] font-bold tracking-[.15em] uppercase text-[#F77F00] mb-4">Awards & Achievements</p>
            <div className="space-y-2.5">
              {doc.achievements.map((a) => (
                <div key={a} className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0 mt-0.5">🏅</span>
                  <span className="text-[13.5px] text-gray-600 leading-snug">{a}</span>
                </div>
              ))}
            </div>
          </div> */}

          {/* Languages + Availability */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-[#F7F7F5] rounded-2xl p-5">
              <p className="text-[11px] font-bold tracking-[.12em] uppercase text-[#F77F00] mb-3">Languages</p>
              <div className="flex flex-wrap gap-2">
                {doc.languages.map((l) => (
                  <span key={l} className="text-[12px] font-semibold bg-white border border-[#408A71]/15 text-[#2D6354] px-3 py-1 rounded-full">
                    {l}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-[#F7F7F5] rounded-2xl p-5">
              <p className="text-[11px] font-bold tracking-[.12em] uppercase text-[#F77F00] mb-3">Availability</p>
              <p className="text-[13.5px] font-semibold text-[#2D6354]">{doc.availability[0]}</p>
              <p className="text-[13px] text-gray-400 mt-1">{doc.availability[1]}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-tealCustom rounded-2xl p-7 text-center">
            <p className="font-display text-2xl font-semibold text-white mb-2">Book with {doc.name.split(" ")[1]}</p>
            <p className="text-white text-sm mb-6">Schedule your consultation today for expert, personalised eye care.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/appointment" onClick={onClose} className="bg-[#F77F00] hover:bg-[#FFB347] text-white px-7 py-3 rounded-full text-sm font-semibold transition-all shadow-lg shadow-[#F77F00]/30 no-underline">
                Book Appointment
              </a>
              <a href="tel:06300809448" className="border border-white/25 text-white hover:bg-white/10 px-7 py-3 rounded-full text-sm font-semibold transition-all no-underline">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   DOCTOR CARD
═══════════════════════════════════════════════════════════ */
function DoctorCard({ doc, index, onClick }) {
  const grad = `linear-gradient(135deg, ${doc.grad.join(", ")})`;
  return (
    <div
      className="dp-reveal group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#408A71]/12 hover:-translate-y-2 transition-all duration-400 cursor-pointer flex flex-col"
      style={{ transitionDelay: `${index * 70}ms` }}
      onClick={onClick}
    >
      {/* Avatar Area */}
      <div className="relative h-56 overflow-hidden flex-shrink-0" style={{ background: grad }}>
        {/* Decorative */}
        <div className="absolute top-[-20px] right-[-20px] w-40 h-40 rounded-full bg-white/8 pointer-events-none" />
        <div className="absolute bottom-[-28px] left-[-10px] w-28 h-28 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        // style={{ backgroundImage: "radial-gradient(circle,rgba(255,255,255,.9) 1px,transparent 1px)", backgroundSize: "18px 18px" }} 

        />

        {/* Initials circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-white/15 border-2 border-white/30 flex items-center justify-center">
            <span className="font-display text-4xl font-light text-white">{doc.initials}</span>
          </div>
        </div>

        {/* Tag */}
        <div className="absolute top-4 left-4">
          <span
            className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full text-white border border-white/20"
            style={{ background: "rgba(255,255,255,.18)" }}
          >{doc.tag}</span>
        </div>

        {/* View arrow */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full border border-white/30 bg-white/15 flex items-center justify-center text-white text-sm opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</div>

        {/* Specialty badge */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/30 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1 whitespace-nowrap">
          <span className="text-[10px] text-white/80 font-medium">{doc.specialty}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-[21px] font-semibold text-gray-900 leading-tight group-hover:text-[#408A71] transition-colors duration-300">{doc.name}</h3>
        <p className="text-[11px] font-bold tracking-[.08em] uppercase text-[#F77F00] mt-1 mb-4">{doc.title}</p>

        {/* Star rating */}
        <Stars rating={doc.rating} />

        {/* Quick stats row */}
        <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-gray-100">
          {[
            { label: "Exp.", value: doc.exp + " yrs" },
            { label: "Patients", value: doc.patients },
            { label: "Surgeries", value: doc.surgeries },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-[16px] font-semibold text-[#2D6354] leading-none">{s.value}</p>
              <p className="text-[10px] text-gray-400 mt-1 tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Specializations */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {doc.specializations.slice(0, 2).map((s) => (
            <span key={s} className="text-[11px] bg-[#EAF5F0] text-[#2D6354] font-medium px-2.5 py-1 rounded-full border border-[#408A71]/12">
              {s.length > 22 ? s.slice(0, 22) + "…" : s}
            </span>
          ))}
        </div>

        {/* Availability */}
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
          <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
          <span className="text-[12px] text-gray-500 font-medium">{doc.availability[0]} · {doc.availability[1]}</span>
        </div>

        {/* View Profile */}
        <button className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#408A71] group-hover:gap-3 transition-all duration-300">
          View Full Profile <span>→</span>
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   STAT COUNTER
═══════════════════════════════════════════════════════════ */
function StatCounter({ target, suffix, label, trigger }) {
  const count = useCountUp(target, 1800, trigger);
  return (
    <div className="text-center">
      <p className="font-display text-5xl lg:text-6xl font-light text-white leading-none">
        {count.toLocaleString()}<span className="text-[#FFB347]">{suffix}</span>
      </p>
      <p className="text-sm text-white/50 mt-2 tracking-wide">{label}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════ */
export default function DoctorsPage() {
  const pageRef = useRef(null);
  const statsRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState(null);
  const [navScrolled, setNavScrolled] = useState(false);
  const [statsTrigger, setStatsTrigger] = useState(false);

  useScrollReveal(pageRef);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsTrigger(true); }, { threshold: 0.3 });
    if (statsRef.current) io.observe(statsRef.current);
    return () => io.disconnect();
  }, []);

  const filtered = DOCTORS.filter((d) => {
    const matchFilter = d.filter.includes(activeFilter);
    const q = searchText.toLowerCase();
    const matchSearch = !q || d.name.toLowerCase().includes(q) || d.specialty.toLowerCase().includes(q) || d.title.toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });

  return (
    <div ref={pageRef} className="min-h-screen bg-white overflow-x-hidden">

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="bg-tealCustom relative min-h-[78vh] flex items-center pt-[50px] overflow-hidden">

        {/* Background Effects */}
        <div className="absolute top-[-100px] right-[-80px] w-[440px] h-[440px] rounded-full pointer-events-none"
          style={{ background: "rgba(64,138,113,.38)", filter: "blur(80px)" }} />
        <div className="absolute bottom-[-60px] left-[-40px] w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "rgba(247,127,0,.12)", filter: "blur(60px)" }} />

        {/* Container */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 pt-20 pb-20">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] tracking-[.13em] uppercase text-white/35 mb-6">
            <a href="/" className="hover:text-white/60 transition-colors no-underline">Home</a>
            <span>/</span>
            <span className="text-[#FFB347]">Our Doctors</span>
          </div>

          {/* Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2.5 border border-white/15 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#F77F00] animate-pulse" />
                <span className="text-[11px] font-semibold tracking-[.13em] uppercase text-white/65">
                  Trained Specialists
                </span>
              </div>

              <h1 className="font-display text-[clamp(44px,6.5vw,86px)] font-light leading-[1.04] text-white mb-6">
                Meet Our<br />
                <em className="text-orangeCustom">Expert Doctors</em>
              </h1>

              <p className="text-[16px] leading-relaxed mb-10 max-w-[480px]"
                style={{ color: "rgba(255,255,255,.56)" }}>
                Every specialist at Gupta Eye Care Center has completed rigorous fellowship training in their subspecialty — bringing world-class expertise and genuine compassion to every consultation.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#doctors-grid"
                  className="bg-orangeCustom hover:bg-[#FFB347] text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-[#F77F00]/30 no-underline">
                  Meet the Team ↓
                </a>

                <a href="/#appointment"
                  className="border border-white/25 hover:border-white/50 text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all no-underline">
                  Book Consultation
                </a>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="hidden lg:block xl:-mr-20">
              <div className="relative w-full max-w-[720px] flex items-center">

                {/* Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-orangeCustom/10 blur-[130px] rounded-full pointer-events-none -z-10" />

                {/* Image */}
                <div
                  className="relative z-10 overflow-hidden"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)',
                    borderRadius: '40px'
                  }}
                >
                  <div className="w-full h-[550px] flex items-end justify-center overflow-hidden">
                    <img
                      src="/assets/gutpa eye care team.png"
                      alt="Expert Doctors at Gupta Eye Care"
                      className="h-full w-auto object-contain"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/720x600?text=Check+Image+Path';
                      }}
                    />
                  </div>
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-12 bg-orangeCustom p-7 rounded-[2.5rem] z-20 shadow-2xl shadow-orange/40 flex items-center gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white text-3xl">
                    👁️
                  </div>

                  <div>
                    <h3 className="text-white font-display font-bold text-2xl leading-none mb-1.5">
                      Dr. Gupta & Team
                    </h3>
                    <p className="text-white/80 text-[13px] uppercase tracking-wide">
                      Trained Specialists
                    </p>

                    <div className="flex items-center gap-2 mt-3">
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-3.5 h-3.5 fill-white" viewBox="0 0 16 16">
                            <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.25l-3.71 2.3.71-4.13L2 5.5l4.15-.75z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-white/60 text-[10px] font-bold tracking-widest uppercase border-l border-white/20 pl-2">
                        Top Rated
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Bottom Wave */}
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none"
          className="absolute bottom-0 left-0 right-0 w-full h-12 fill-[#F7F7F5]">
          <path d="M0,40 C360,0 1080,60 1440,20 L1440,60 L0,60 Z" />
        </svg>

      </section>

      {/* ══════════════════════════════
          STATS STRIP
      ══════════════════════════════ */}
      {/* <div ref={statsRef} className="bg-[#F7F7F5] py-0">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-0 rounded-3xl -mt-6 relative z-10 py-12 px-8 shadow-2xl shadow-[#2D6354]/25 border border-white/8"
            style={{ background: "linear-gradient(135deg,#2D6354,#408A71,#2D6354)" }}
          >
            <StatCounter target={6}      suffix="+"   label="Expert Doctors"       trigger={statsTrigger} />
            <StatCounter target={78500}  suffix="+"   label="Patients Served"       trigger={statsTrigger} />
            <StatCounter target={44600}  suffix="+"   label="Surgeries Performed"   trigger={statsTrigger} />
            <StatCounter target={15}     suffix="+"   label="Years of Excellence"   trigger={statsTrigger} />
          </div>
        </div>
      </div> */}

      {/* ══════════════════════════════
          FILTER BAR
      ══════════════════════════════ */}
      {/* <div className="sticky top-[68px] z-30 bg-white border-b border-gray-100 shadow-sm" id="doctors-grid">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-2 rounded-full text-[12.5px] font-semibold transition-all duration-250 ${
                  activeFilter === f.key
                    ? "bg-[#2D6354] text-white shadow-md"
                    : "bg-gray-100 text-gray-500 hover:bg-[#EAF5F0] hover:text-[#2D6354]"
                }`}
              >{f.label}</button>
            ))}
          </div>
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-[14px] h-[14px] fill-gray-400" viewBox="0 0 20 20">
              <path d="M9 3a6 6 0 100 12A6 6 0 009 3zm-8 6a8 8 0 1114.32 4.906l4.387 4.387-1.414 1.414-4.387-4.387A8 8 0 011 9z"/>
            </svg>
            <input
              type="text"
              placeholder="Search doctors…"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="pl-9 pr-4 py-2 text-[13px] border border-gray-200 rounded-full focus:outline-none focus:border-[#408A71] focus:ring-2 focus:ring-[#408A71]/10 w-48 bg-gray-50 transition-all"
            />
          </div>
        </div>
      </div> */}


      <section className="py-5 bg-[#F7F7F5]" id="services-grid">
        <div className="text-center mb-16 srv-reveal">
          <p className="text-[11px] font-bold tracking-[.15em] uppercase text-orangeCustom mb-4">Expertise & Care</p>
          <h2 className="font-display text-[clamp(32px,5vw,52px)] font-light text-gray-900 leading-tight">
            Our Specialized <em className="italic text-tealCustom">Eye Services</em>
          </h2>
          {/* <div className="w-20 h-1 bg-teal/20 mx-auto mt-6 rounded-full"></div> */}
        </div>
      </section>

      {/* ══════════════════════════════
          DOCTORS GRID
      ══════════════════════════════ */}
      <section className="py-5 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-6xl mb-4">🔍</p>
              <p className="font-display text-2xl text-gray-400 mb-3">No doctors found</p>
              <button onClick={() => { setSearchText(""); setActiveFilter("all"); }} className="text-[#408A71] text-sm font-semibold hover:underline">
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((doc, i) => (
                <DoctorCard key={doc.id} doc={doc} index={i} onClick={() => setSelected(doc)} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════
          WHY OUR TEAM
      ══════════════════════════════ */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 dp-reveal">
            <p className="text-[11px] font-bold tracking-[.15em] uppercase text-orangeCustom mb-4">Our Commitment</p>
            <h2 className="font-display font-light text-gray-900" style={{ fontSize: "clamp(30px,4vw,50px)" }}>
              Why Our Doctors Are <em className="italic text-tealCustom">Different</em>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto mt-4">
              Every member of our medical team meets the highest bar for clinical excellence, patient communication and ethical practice.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FaUserMd />,
                title: "Trained Doctors",
                desc: "Every doctor has completed subspecialty fellowship training at national or international institutions — AIIMS, L.V. Prasad, Moorfields or Wills Eye."
              },
              {
                icon: <FaAward />,
                title: "Award-Winning Surgeons",
                desc: "Multiple national and international award recipients for surgical excellence, research and community service."
              },
              {
                icon: <FaGlobe />,
                title: "Global Exposure",
                desc: "Fellowship training and conference presentations at international ophthalmology forums — AAO, ASCRS, ESCRS and APAO."
              },
              {
                icon: <FaComments />,
                title: "Patient-First Approach",
                desc: "Every consultation begins with listening. Our doctors explain diagnoses clearly and never recommend a procedure that isn't truly needed."
              }
            ].map((item, i) => (
              <div
                key={item.title}
                className="dp-reveal text-center p-8 rounded-2xl bg-[#F7F7F5] border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-[#408A71]/8 hover:-translate-y-1.5 transition-all duration-300"
                style={{ transitionDelay: `${i * 70}ms` }}
              >

                {/* Icon */}
                <div className="text-4xl mb-5 text-tealCustom flex justify-center">
                  {item.icon}
                </div>

                <h3 className="font-display text-[19px] font-semibold text-gray-900 mb-3 leading-tight">
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

      {/* ══════════════════════════════
          PROCESS STRIP
      ══════════════════════════════ */}
      <section className="py-10 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14 dp-reveal">
            <p className="text-[11px] font-bold tracking-[.15em] uppercase text-orangeCustom mb-4">How to Reach Us</p>
            <h2 className="font-display font-light text-gray-900" style={{ fontSize: "clamp(30px,4vw,50px)" }}>
              Book Your <em className="italic text-tealCustom">Consultation</em> in 3 Easy Steps
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { n: "01", icon: <MdCall />, t: "Call or Book Online", d: "Call 6300809448, WhatsApp us, or fill the appointment form. We confirm your slot within a few hours." },
              { n: "02", icon: <FaUserMd />, t: "Meet the Specialist", d: "Walk into our Bahadurpura clinic and meet your assigned doctor for a comprehensive eye evaluation." },
              { n: "03", icon: <MdOutlineMedicalServices />, t: "Get Your Treatment Plan", d: "Receive a clear, honest diagnosis and a personalised treatment plan. No unnecessary procedures — ever." },
            ].map((s, i) => (
              <div
                key={s.n}
                className="dp-reveal relative bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-lg hover:shadow-[#408A71]/8 hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                {i < 2 && <div className="hidden sm:block absolute top-1/2 -right-3 w-6 h-px bg-[#408A71]/25 z-10" />}
                <div className="font-display text-5xl font-light text-[#408A71]/20 leading-none mb-3">{s.n}</div>
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-display text-[20px] font-semibold text-gray-900 mb-2">{s.t}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          TESTIMONIAL STRIP
      ══════════════════════════════ */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14 dp-reveal">
            <p className="text-[11px] font-bold tracking-[.15em] uppercase text-orangeCustom mb-4">Patient Voices</p>
            <h2 className="font-display font-light text-gray-900" style={{ fontSize: "clamp(30px,4vw,50px)" }}>
              What Patients Say About <em className="italic text-tealCustom">Our Doctors</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                text: "Dr. Rajender Gupta handled my cataract surgery with incredible precision. His experience truly shows — my vision is crystal clear now. The entire process was smooth and reassuring.",
                author: "Ramesh Kumar",
                tag: "Cataract Patient",
                av: "RK",
                avBg: "#2D6354"
              },
              {
                text: "I underwent LASIK under Dr. Rajender Gupta. He explained everything patiently and made me feel confident. The results are life-changing — no more glasses!",
                author: "Sneha Reddy",
                tag: "Refractive Surgery Patient",
                av: "SR",
                avBg: "#408A71"
              },
              {
                text: "Dr. Siddhartha Reddy performed my ICL procedure and the results are amazing. His calm approach and clarity gave me full confidence throughout.",
                author: "Kiran Varma",
                tag: "ICL Surgery Patient",
                av: "KV",
                avBg: "#F77F00"
              },
              {
                text: "Dr. Sarang Rajendra Gupta treated my retina condition urgently. The care, speed, and expertise saved my vision. I’m forever grateful.",
                author: "Ayesha Khan",
                tag: "Retina Patient",
                av: "AK",
                avBg: "#2D6354"
              },
              {
                text: "Dr. Nirathya Anisha was amazing with my child. She made the whole experience stress-free and fun. The squint correction results are excellent.",
                author: "Priya Sharma",
                tag: "Parent — Pediatric Patient",
                av: "PS",
                avBg: "#F77F00"
              },
              {
                text: "Dr. Harsha Kandoi performed my eyelid surgery flawlessly. The results look natural and the recovery was smooth. Very skilled surgeon.",
                author: "Neha Agarwal",
                tag: "Oculoplasty Patient",
                av: "NA",
                avBg: "#408A71"
              }
            ].map((t, i) => (
              <div
                key={t.author}
                className="dp-reveal bg-white rounded-2xl border border-gray-100 p-7 relative hover:shadow-xl hover:shadow-[#408A71]/10 hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="absolute top-5 right-6 font-display text-6xl text-[#408A71]/10 leading-none pointer-events-none select-none">"</span>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-[#F77F00]">
                      <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.25l-3.71 2.3.71-4.13L2 5.5l4.15-.75z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[14px] text-gray-500 leading-relaxed italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-display text-sm font-semibold text-white" style={{ background: t.avBg }}>{t.av}</div>
                  <div>
                    <p className="text-[14px] font-semibold text-gray-900">{t.author}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">{t.tag}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CTA BANNER
      ══════════════════════════════ */}
      <section
        className="bg-tealCustom py-10 relative overflow-hidden text-center"
        id="appointment"
      >
        <div className="absolute top-[-80px] right-[-60px] w-[300px] h-[300px] rounded-full pointer-events-none" style={{ background: "rgba(247,127,0,.13)", filter: "blur(60px)" }} />
        <div className="absolute bottom-[-60px] left-[-40px] w-[250px] h-[250px] rounded-full pointer-events-none" style={{ background: "rgba(64,138,113,.3)", filter: "blur(50px)" }} />

        <div className="max-w-3xl mx-auto px-6 relative z-10 dp-reveal">
          <p className="text-[11px] font-bold tracking-[.15em] uppercase text-[#FFB347] mb-5">Ready to Begin?</p>
          <h2
            className="font-display font-light text-white leading-tight mb-5"
            style={{ fontSize: "clamp(30px,5vw,58px)" }}
          >
            Book a Consultation with<br />
            <em className="italic" style={{ color: "#FFB347" }}>Our Specialists Today</em>
          </h2>
          <p className="leading-relaxed mb-10 max-w-lg mx-auto text-[16px]" style={{ color: "rgba(255,255,255,.56)" }}>
            All consultations are conducted by senior, fellowship-trained specialists. No waiting long queues — book your slot in advance and walk in on time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#appointment"
              className="bg-orangeCustom hover:bg-[#FFB347] text-white px-8 py-4 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5 no-underline shadow-xl shadow-[#F77F00]/35"
            >Book an Appointment</a>
            <a
              href="tel:06300809448"
              className="border border-white/25 hover:border-white/50 text-white hover:bg-white/8 px-8 py-4 rounded-full font-semibold text-sm transition-all no-underline"
            >6300809448</a>
          </div>

        </div>
      </section>
      {selected && <DoctorModal doc={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}