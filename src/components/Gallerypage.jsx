import { useState } from "react";
import { FiZoomIn, FiX } from "react-icons/fi";

const galleryImages = [
  "/assets/gupta eye care logo.png",
  // "/images/hospital2.jpg",
  // "/images/hospital3.jpg",
  // "/images/hospital4.jpg",
  // "/images/hospital5.jpg",
  // "/images/hospital6.jpg",
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        {/* <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-teal-600 font-semibold">
            Our Gallery
          </p>
          <h2 className="text-3xl font-bold mt-2">
            Inside Our Hospital
          </h2>
        </div> */}
        <section className="py-5 bg-[#F7F7F5]" id="services-grid">
          <div className="text-center mb-16 srv-reveal">
            <p className="text-[11px] font-bold tracking-[.15em] uppercase text-orangeCustom mb-4">Our Gallery</p>
            <h2 className="font-display text-[clamp(32px,5vw,52px)] font-light text-gray-900 leading-tight">
              Eye Hospital Gallery <em className="italic text-tealCustom">Inside Our Facilities</em>
            </h2>
            {/* <div className="w-20 h-1 bg-teal/20 mx-auto mt-6 rounded-full"></div> */}
          </div>
        </section>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
              onClick={() => setSelectedImg(img)}
            >
              {/* Image */}
              <img
                src={img}
                alt={`Hospital ${index}`}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <FiZoomIn className="text-white text-3xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal Preview */}
        {selectedImg && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

            {/* Close Button */}
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              <FiX />
            </button>

            {/* Image */}
            <img
              src={selectedImg}
              alt="Preview"
              className="max-w-3xl w-full rounded-xl shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
}