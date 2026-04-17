import { FiCalendar, FiUser, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BLOGS } from "../data/blogs.js";

// const BLOGS = [
//   {
//     id: 1,
//     title: "How to Reduce Digital Eye Strain (Computer Vision Syndrome)",
//     image: "/images/blog1.jpg",
//     author: "Dr. Rajender Gupta",
//     date: "March 12, 2026",
//     desc: "Spending long hours on screens? Learn the 20-20-20 rule, screen tips, and lifestyle changes to protect your eyes.",
//     content: `
// Digital eye strain is common due to prolonged screen usage.

// Tips:
// - Follow the 20-20-20 rule
// - Adjust brightness and contrast
// - Maintain proper distance from screen
// - Blink frequently

// Consult an eye specialist if symptoms persist.
//     `,
//   },
//   {
//     id: 2,
//     title: "Cataract Surgery: Procedure, Recovery & Benefits",
//     image: "/images/blog2.jpg",
//     author: "Dr. Rajender Gupta",
//     date: "April 05, 2026",
//     desc: "Understand modern cataract surgery, lens options, recovery time, and how it restores clear vision.",
//     content: `
// Cataract surgery replaces the cloudy lens with an artificial lens.

// Benefits:
// - Clear vision
// - Quick recovery
// - Safe and effective

// Follow doctor advice post-surgery for best results.
//     `,
//   },
//   {
//     id: 3,
//     title: "Best Foods for Eye Health & Clear Vision",
//     image: "/images/blog3.jpg",
//     author: "Dr. D. Suhasini",
//     date: "April 10, 2026",
//     desc: "Discover vitamins and nutrients like Vitamin A, Omega-3, and antioxidants that help maintain healthy eyesight.",
//     content: `
// Healthy diet improves eye health.

// Include:
// - Carrots (Vitamin A)
// - Fish (Omega-3)
// - Leafy greens
// - Citrus fruits

// Balanced nutrition supports long-term vision.
//     `,
//   },
//   {
//     id: 4,
//     title: "LASIK vs ICL: Which Vision Correction is Right for You?",
//     image: "/images/blog4.jpg",
//     author: "Dr. A. Siddhartha Reddy",
//     date: "April 12, 2026",
//     desc: "Confused between LASIK and ICL? Compare safety, results, and eligibility to choose the best option.",
//     content: `
// LASIK reshapes cornea, ICL implants a lens.

// LASIK:
// - Quick procedure
// - Suitable for mild to moderate cases

// ICL:
// - Better for high power
// - Reversible

// Consult doctor to choose best option.
//     `,
//   },
//   {
//     id: 5,
//     title: "Retinal Detachment: Symptoms You Should Never Ignore",
//     image: "/images/blog5.jpg",
//     author: "Dr. Sarang Rajendra Gupta",
//     date: "April 14, 2026",
//     desc: "Flashes, floaters, or sudden vision loss? Learn early warning signs of retinal detachment and when to seek help.",
//     content: `
// Retinal detachment is an emergency.

// Symptoms:
// - Sudden flashes
// - Floaters
// - Shadow in vision

// Immediate treatment can save vision.
//     `,
//   },
//   {
//     id: 6,
//     title: "Squint (Strabismus) in Children: Causes & Treatment",
//     image: "/images/blog6.jpg",
//     author: "Dr. Nirathya Anisha",
//     date: "April 15, 2026",
//     desc: "Early diagnosis is key. Understand why squint occurs in kids and the best treatment options available.",
//     content: `
// Squint affects eye alignment in children.

// Treatment:
// - Glasses
// - Eye exercises
// - Surgery (if needed)

// Early care improves outcomes.
//     `,
//   },
// ];

export default function Blogs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <section className="py-5 bg-[#F7F7F5]" id="services-grid">
          <div className="text-center mb-16 srv-reveal">
            <p className="text-[11px] font-bold tracking-[.15em] uppercase text-orangeCustom mb-4">Our Blog</p>
            <h2 className="font-display text-[clamp(32px,5vw,52px)] font-light text-gray-900 leading-tight">
              Latest <em className="italic text-tealCustom">Health Articles</em>
            </h2>
          </div>
        </section>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS.map((blog) => (
            <Link to={`/blog/${blog.slug}`} key={blog.id}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group cursor-pointer">

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <FiUser /> {blog.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiCalendar /> {blog.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-tealCustom transition">
                    {blog.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4">
                    {blog.desc}
                  </p>

                  {/* Read More */}
                  <button className="flex items-center gap-2 text-tealCustom font-medium hover:gap-3 transition">
                    Read More <FiArrowRight />
                  </button>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}