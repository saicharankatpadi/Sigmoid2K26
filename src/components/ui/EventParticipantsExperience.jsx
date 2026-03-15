import React from 'react';
import { motion } from 'framer-motion';

// 13 boy portrait images provided by the team
const BOY_IMAGES = [
  'https://res.cloudinary.com/djiivo0r7/image/upload/v1773395957/WhatsApp_Image_2026-03-12_at_19.29.20-removebg-preview_1_iyqsak.png',
  'https://res.cloudinary.com/djiivo0r7/image/upload/v1773396178/WhatsApp_Image_2026-03-12_at_19.29.21__2_-removebg-preview_zc1wux.png',
  'https://res.cloudinary.com/djiivo0r7/image/upload/v1773395957/WhatsApp_Image_2026-03-12_at_19.29.20__1_-removebg-preview_bbnehw.png',
  'https://res.cloudinary.com/djiivo0r7/image/upload/v1773373852/WhatsApp_Image_2026-03-12_at_19.29.21__1_-removebg-preview_l2ce7d.png',
  'https://res.cloudinary.com/djiivo0r7/image/upload/v1773373818/WhatsApp_Image_2026-03-12_at_19.29.22-removebg-preview_lplmzj.png',
  'https://res.cloudinary.com/djiivo0r7/image/upload/v1773373552/WhatsApp_Image_2026-03-12_at_19.29.19__3_-removebg-preview_ixbr3b.png',
  'https://res.cloudinary.com/djiivo0r7/image/upload/v1773373633/WhatsApp_Image_2026-03-12_at_19.29.20-removebg-preview_w6wp72.png',
  'https://res.cloudinary.com/djiivo0r7/image/upload/v1773373772/WhatsApp_Image_2026-03-12_at_19.29.21-removebg-preview_npkkqi.png',
  'https://res.cloudinary.com/djiivo0r7/image/upload/v1773373463/WhatsApp_Image_2026-03-12_at_19.29.19-removebg-preview_k4snap.png',
  'https://res.cloudinary.com/djiivo0r7/image/upload/v1773373452/WhatsApp_Image_2026-03-12_at_19.29.18-removebg-preview_izu7m6.png',
  'https://res.cloudinary.com/djiivo0r7/image/upload/v1773370286/WhatsApp_Image_2026-03-12_at_19.29.17-removebg-preview_cyef1g.png',
  'https://res.cloudinary.com/djiivo0r7/image/upload/v1773370133/WhatsApp_Image_2026-03-12_at_19.29.16-removebg-preview_taq8oh.png',
  'https://res.cloudinary.com/djiivo0r7/image/upload/v1773373552/WhatsApp_Image_2026-03-12_at_19.29.19__3_-removebg-preview_ixbr3b.png',
];

// Girl portrait images
const GIRL_IMAGES = [
  'https://res.cloudinary.com/djiivo0r7/image/upload/v1773267324/WhatsApp_Image_2026-03-11_at_15.15.00_gxucuo.jpg',
  'https://res.cloudinary.com/djiivo0r7/image/upload/v1773308057/WhatsApp_Image_2026-03-12_at_02.32.00_ybxhln.jpg',
];

// Common female name fragments for gender detection
const FEMALE_NAMES = [
  'priya', 'sneha', 'anjali', 'ramya', 'keerthana', 'sushmitha', 'pavithra',
  'deepika', 'anvitha', 'mounika', 'anusha', 'sathvika', 'rajeswari', 'harika',
  'akshaya', 'sireesha', 'bhavana', 'sanya', 'meena', 'pooja', 'divya',
  'kavya', 'swathi', 'lakshmi', 'revathi', 'sowmya', 'nandini', 'saranya',
];
const FEMALE_ENDINGS = ['a', 'i', 'ya', 'ka', 'na', 'ra', 'ha', 'va', 'itha', 'sha'];

const isLikelyFemale = (name) => {
  const lower = name.toLowerCase().split(/[\s.]/)[0];
  if (FEMALE_NAMES.some(n => lower.startsWith(n) || lower === n)) return true;
  return FEMALE_ENDINGS.some(end => lower.endsWith(end));
};

// Assign a unique image per card by gender
const getImage = (name, cardIndex) => {
  if (isLikelyFemale(name)) {
    return GIRL_IMAGES[cardIndex % GIRL_IMAGES.length];
  }
  // Each boy card gets a different boy image
  return BOY_IMAGES[cardIndex % BOY_IMAGES.length];
};

export const EventParticipantsExperience = ({ testimonials }) => {
  // Track separate counters for boy and girl images
  let boyCount = 0;
  let girlCount = 0;

  return (
    <section className="max-w-[1400px] mx-auto px-8 lg:px-12 py-14">
      <div className="mb-8 text-left">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1 h-9 bg-[#f89b29] rounded-full"></div>
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            Participants Experience
          </h2>
        </div>
        <div className="w-full h-[2px] bg-[#222] ml-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) => {
          let resolvedImage;
          if (t.image && t.image !== '') {
            resolvedImage = t.image;
          } else if (isLikelyFemale(t.name)) {
            resolvedImage = GIRL_IMAGES[girlCount % GIRL_IMAGES.length];
            girlCount++;
          } else {
            resolvedImage = BOY_IMAGES[boyCount % BOY_IMAGES.length];
            boyCount++;
          }

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-3xl p-6 flex flex-col hover:border-[#f89b29]/30 transition-all group shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={resolvedImage}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover object-top border-2 border-[#222] bg-[#111]"
                />
                <div className="text-left">
                  <h3 className="text-white font-bold text-base leading-tight">{t.name}</h3>
                  <p className="text-[#f89b29] text-[11px] font-semibold mt-0.5">{t.year} | {t.branch}</p>
                </div>
              </div>

              <p className="text-white/60 text-sm leading-relaxed mb-6 italic flex-1 text-left">
                "{t.content}"
              </p>

              <div className="pt-6 border-t border-[#1a1a1a] flex items-center justify-between">
                <div className="text-left w-full">
                  <p className="text-white/80 text-[12px] font-bold leading-tight line-clamp-2">{t.college}</p>
                </div>
                <div className="w-10 h-10 bg-white/5 rounded-xl p-1.5 flex items-center justify-center border border-white/5 group-hover:border-[#f89b29]/20 shrink-0 ml-3">
                  <img src={t.logo} alt={t.college} className="w-full h-full object-contain" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
