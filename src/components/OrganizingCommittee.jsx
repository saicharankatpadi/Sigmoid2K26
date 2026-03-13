import React from 'react';
import { motion } from 'framer-motion';

const members = [
  {
    name: "DR. T. RAMASHRI",
    image: "https://res.cloudinary.com/djiivo0r7/image/upload/v1773270673/WhatsApp_Image_2026-03-11_at_16.10.31_byjdwe.jpg",
  },
  {
    name: "DR. B. ANURADHA",
    image: "https://res.cloudinary.com/djiivo0r7/image/upload/v1773277872/WhatsApp_Image_2026-03-11_at_15.46.56_wy8cjj.jpg",
  },
  {
    name: "DR. D. GOWRI SANKAR REDDY",
    image: "https://res.cloudinary.com/djiivo0r7/image/upload/v1773277897/WhatsApp_Image_2026-03-11_at_15.57.11_voy8t3.jpg",
  }
];

export default function OrganizingCommittee() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative flex flex-col items-center justify-center overflow-hidden w-full">
      <div className="max-w-[1400px] mx-auto px-12 w-full text-center mb-16">
        <h2 className="text-[clamp(28px,3.8vw,48px)] font-extrabold text-[#F97316] leading-[1.1] tracking-[-1.2px] mb-4">
          Organizing <span className="text-white">Committee</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24 w-full max-w-[1400px] px-8 md:pl-16">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col items-center group cursor-pointer">
            {/* Glassmorphism Image Container */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 mb-6 rounded-full p-2 bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:-translate-y-2 group-hover:border-b-[6px] hover:border-white/30 group-hover:border-b-[#F97316]">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#111]">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Name */}
            <h3 className="text-white text-lg md:text-xl font-bold tracking-wide mb-3 text-center">
              {member.name}
            </h3>

            {/* Dept Badge */}
            <div className="bg-[#222] border border-white/10 rounded-md px-4 py-1.5 shadow-sm">
              <span className="text-gray-300 text-sm font-semibold tracking-wider font-sans uppercase">
                DEPT OF ECE
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
