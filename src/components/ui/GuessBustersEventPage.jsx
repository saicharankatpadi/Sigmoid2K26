import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { BlurIn } from './blur-in.jsx';
import { EventParticipantsExperience } from './EventParticipantsExperience';
import { Button } from './neon-button.jsx';
import { ThreeDPhotoCarousel } from './3d-carousel.jsx';

// ==========================================
// DYNAMIC EVENT DATA (JSON FORMAT)
// Replace any field below for a different event
// ==========================================
const eventData = {
  event_info: {
    title: "Guess Busters",
    emoji: "rocket",
    subtitle: "Observation & Deduction Game",
    brochure_url: "#",
    features: [
      { id: "01", content: "Fun and engaging game in two rounds" },
      { id: "02", content: "Test your creativity, quick thinking, and teamwork" },
      { id: "03", content: "Round 1: Individual visual clue guessing" },
      { id: "04", content: "Round 2: Team up for CineClues movie trivia" },
      { id: "05", content: "No external devices or Bluetooth allowed" },
      { id: "06", content: "Team/player with the most points wins" }
    ]
  },

  mission: [
    {
      id: "foundation",
      icon: "target",
      title: "THE OBJECTIVE",
      points: [
        "Guess Busters is a fun and engaging game where players compete to guess words, phrases, and movie names based on clues.",
        "The game tests your observation, deduction skills, creativity, and ability to work in randomly formed teams.",
        "The team and player with the most points at the end wins."
      ]
    },
    {
      id: "journey",
      icon: "rocket",
      title: "THE PROCESS",
      points: [
        "Round 1 (Frame the Phrase): A 1-hour thrilling game where players use visual clues individually to guess hidden phrases.",
        "Round 2 (CineClues): A 30-minute interactive round for qualifiers. Players form teams and guess movie titles, quotes, or characters from hints.",
        "Follow the rules closely: No external help like devices or Bluetooth. Judges' decisions are final!"
      ]
    }
  ],
  learnings: {
    title: "Skills Tested",
    items: [
      "Observation", "Deduction", "Movie Trivia", "Creativity",
      "Teamwork", "Quick Thinking", "Pattern Recognition", "Focus",
      "Logic", "Problem Solving", "Memory", "Communication"
    ],
    button_text: "And much more...",
    description: [
      "Engage your brain to interpret abstract visual elements and hidden phrases.",
      "Collaborate effectively in randomly assigned teams to beat the clock.",
      "Showcase your deep knowledge of cinema, quotes, and soundtracks.",
      "Sharpen your quick-thinking skills under high-pressure, exciting scenarios.",
      "Enjoy a competitive yet fun environment with fellow enthusiasts."
    ]
  },
  perks: {
    title: "Perks & Benefits",
    items: [
      { text: "Certificate of Participation", icon: "academic", color: "#ec4899" },
      { text: "Prizes for Top Winners", icon: "diamond", color: "#f89b29" },
      { text: "Fun Networking", icon: "users", color: "#10B981" },
      { text: "Test of Creativity", icon: "user", color: "#a855f7" },
      { text: "Teamwork Experience", icon: "globe", color: "#2dd4bf" },
      { text: "Improve Quick Thinking", icon: "clock", color: "#f89b29" },
      { text: "Movie Buff Bragging Rights", icon: "video", color: "#eab308" },
      { text: "Mental Workout", icon: "cube", color: "#10B981" }
    ]
  },
  mentors: [
    {
      id: "m1",
      name: "Event Coordinator 1",
      role: "Game Master",
      image: "/mentor1-guessbusters.jpeg",
      phone: "",
      instagram: "",
      linkedin: ""
    },
    {
      id: "m2",
      name: "Event Coordinator 2",
      role: "Game Master",
      image: "/mentor2-guessbusters.jpeg",
      phone: "",
      instagram: "",
      linkedin: ""
    }
  ],

  faqs: [
    { id: "q1", question: "Do I compete individually or in a team?", answer: "In the first round, you compete individually. If you qualify, you will form a team randomly for the second round." },
    { id: "q2", question: "Can I use my phone?", answer: "No, you should not use any external help like smart devices or Bluetooth." },
    { id: "q3", question: "What is Round 1 about?", answer: "It is 'Frame the Phrase', an individual visual clue guessing game lasting 1 hour." },
    { id: "q4", question: "What is Round 2 about?", answer: "It is 'CineClues', a 30-minute team-based movie trivia guessing game." }
  ],
  gallery: [
    "https://res.cloudinary.com/djiivo0r7/image/upload/v1773419899/IMG_1662_mebbam.jpg",
    "https://res.cloudinary.com/djiivo0r7/image/upload/v1773419910/IMG_9604_zfnr0b.jpg",
    "https://res.cloudinary.com/djiivo0r7/image/upload/v1773419875/IMG_1462_ii2f9g.jpg",
    "https://res.cloudinary.com/djiivo0r7/image/upload/v1773419876/IMG_1434_kvln2p.jpg",
    "https://res.cloudinary.com/djiivo0r7/image/upload/v1773419887/IMG_1657_zexvyn.jpg",
    "https://res.cloudinary.com/djiivo0r7/image/upload/v1773419920/IMG_9605_zxib06.jpg"
  ]
};

// ==========================================
// ICON HELPERS
// ==========================================

const IconBadge = ({ iconType }) => {
  switch (iconType) {
    case 'video': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;
    case 'code': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
    case 'clipboard': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>;
    case 'refresh': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>;
    case 'user': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
    case 'academic': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>;
    case 'clock': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    case 'users': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
    case 'cube': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;
    case 'briefcase': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
    case 'diamond': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>; // Using spark/lightning for bonus as fallback
    case 'linkedin': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" stroke="none" fill="currentColor" /></svg>;
    case 'document': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
    case 'globe': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>;
    case 'shield': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
    case 'terminal': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
    default: return null;
  }
}

// ==========================================
// SUBCOMPONENTS
// ==========================================

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#222] hover:border-[#333] bg-[#0c0a09] rounded-xl mb-3 overflow-hidden transition-colors">
      <button onClick={() => setOpen(!open)} className="w-full text-left px-5 py-[18px] flex justify-between items-center group">
        <span className="text-[15px] font-medium text-white/90 group-hover:text-white transition-colors">{q}</span>
        <span className={`text-white/40 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-0 text-white/60 text-[14px] leading-relaxed">
          {a}
        </div>
      )}
    </div>
  )
}

// ==========================================
// MAIN PAGE EXPORT
// ==========================================

export const GuessBustersEventPage = () => {
  const data = eventData;
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  return (
    <div className="min-h-screen bg-[#000000] text-white font-sans overflow-x-hidden selection:bg-[#f89b29] selection:text-black">


  

      {/* Keyframes */}
      <style>{`
        @keyframes playPulse {
          0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.35); }
          70% { box-shadow: 0 0 0 25px rgba(255,255,255,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
        }
        @keyframes playRadiate {
          0% { opacity: 0.5; transform: scale(1); }
          100% { opacity: 0; transform: scale(2.5); }
        }
      `}</style>

      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO: Two-column split
       ═══════════════════════════════════════════ */}
      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 pt-28 pb-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-6">
          {/* Left Column */}
          <div className="flex-1 min-w-0 lg:max-w-[50%]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-12 bg-[#f89b29] rounded-full"></div>
              <div className="flex items-center">
                <BlurIn 
                  word={data.event_info.title}
                  className="text-4xl md:text-5xl font-black text-white tracking-tight text-left"
                />
                {data.event_info.emoji === 'rocket' ? (
                  <img src="/rocket-icon.png" alt="rocket" className="ml-5 w-auto h-12 md:h-14 object-contain drop-shadow-[0_0_15px_rgba(248,155,41,0.5)]" />
                ) : (
                  <span className="text-3xl lg:text-4xl ml-3 lg:ml-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">{data.event_info.emoji}</span>
                )}
              </div>
            </div>

            <p className="text-white/50 text-lg font-medium mb-8 pl-4">
              {data.event_info.subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {data.event_info.features.map(feature => (
                <div
                  key={feature.id}
                  className="flex items-center gap-0 bg-[#111111] border-2 border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#3a3a3a] transition-all duration-300 group cursor-default"
                >
                  <div className="shrink-0 w-12 flex items-center justify-center py-3 px-2">
                    <span className="text-[#f89b29] font-black text-[15px] tracking-wider">{feature.id}</span>
                  </div>
                  <div className="flex items-center self-stretch">
                    <div className="w-[2px] h-[50%] bg-[#2a2a2a] group-hover:bg-[#3a3a3a] transition-colors rounded-full"></div>
                  </div>
                  <div className="flex-1 py-3 px-3">
                    <span className="text-white/90 text-[13px] leading-snug font-semibold">{feature.content}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Download/Action Box */}
          <div className="flex-1 min-w-0 lg:max-w-[50%] flex flex-col items-center justify-center lg:pl-6">
             <div className="w-full max-w-[560px] bg-[#0c0c0c] border border-[#222] rounded-3xl p-10 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f89b29]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-20 h-20 rounded-full bg-[#f89b29]/10 flex items-center justify-center mb-6 border border-[#f89b29]/20">
                  <svg className="w-10 h-10 text-[#f89b29]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Want to know more?</h3>
                <p className="text-white/50 text-center mb-8 text-sm">Download our detailed brochure for rules and regulations.</p>
                <a href={data.event_info.brochure_url} download className="relative z-10 w-full">
                  <Button variant="default" size="lg" neon={true} className="w-full bg-black text-white border-white/20 hover:bg-white/5 hover:border-white/40 py-3 text-[16px] font-bold">
                    Download Brochure
                  </Button>
                </a>
             </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — Our Mission
       ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 py-14">
        {/* Section Title with accent bar */}
        <div className="mb-7">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-9 bg-[#f89b29] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-black text-white">Our Mission</h2>
          </div>
          <div className="w-full h-[2px] bg-[#222] ml-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {data.mission.map(m => {
            const isFoundation = m.icon === 'target';
            const themeColor = isFoundation ? '#f89b29' : '#2dd4bf';

            const iconSvg = isFoundation
              ? <svg className="w-5 h-5" fill="none" stroke="#f89b29" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2" /><circle cx="12" cy="12" r="6" strokeWidth="2" /><circle cx="12" cy="12" r="2" strokeWidth="2" /></svg>
              : <svg className="w-5 h-5" fill="none" stroke="#2dd4bf" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;

            return (
              <div key={m.id} className="bg-[#0a0a0a] border-2 border-[#222] rounded-2xl p-6 transition-colors hover:border-[#333]">
                {/* Card header with icon + title */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: `${themeColor}10`, border: `2px solid ${themeColor}40` }}
                  >
                    {iconSvg}
                  </div>
                  <h3 className="text-[14px] font-bold tracking-[0.15em]" style={{ color: themeColor }}>{m.title}</h3>
                </div>

                {/* Divider line matching theme color */}
                <div className="w-full h-[2px] mb-5" style={{ background: `${themeColor}30` }}></div>

                {/* Bullet Points */}
                <ul className="space-y-3.5">
                  {m.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0" style={{ background: themeColor }}></div>
                      <span className="text-[14px] text-white/60 leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — Learnings
       ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 py-14">
        {/* Section Title with accent bar */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-9 bg-[#f89b29] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-black text-white">{data.learnings.title}</h2>
          </div>
          <div className="w-full h-[2px] bg-[#222] ml-4"></div>
        </div>

        {/* 4-column topic grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {data.learnings.items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-[#0a0a0a] rounded-xl px-4 py-3 border border-[#222] hover:border-[#333] transition-colors">
              <div className="w-5 h-5 rounded-[6px] bg-[#f89b29] flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-white/80 text-[14px] font-medium">{item}</span>
            </div>
          ))}
        </div>

        {/* "And so much more..." pill — same height as grid cards */}
        {/* "And so much more..." pill — same height as grid cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3 mb-8">
          <div className="flex items-center gap-3 bg-[#170e05] border border-[#f89b29]/20 rounded-xl px-4 py-3 hover:border-[#f89b29]/40 transition-colors cursor-pointer">
            <div className="w-5 h-5 rounded-[6px] bg-[#f89b29]/20 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-[#f89b29]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" /></svg>
            </div>
            <span className="text-[#f89b29] text-[14px] font-medium">{data.learnings.button_text}</span>
          </div>
        </div>

        {/* Description card with bullet points */}
        {data.learnings.description && (
          <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-6 md:p-8">
            <ul className="space-y-4">
              {data.learnings.description.map((desc, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#f89b29] mt-[9px] shrink-0"></div>
                  <span className="text-[15px] text-white/80 font-medium leading-relaxed">{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3.5 — Perks & Benefits
       ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 py-14">
        {/* Section Title with accent bar */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-9 bg-[#f89b29] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-black text-white">{data.perks.title}</h2>
          </div>
          <div className="w-full h-[2px] bg-[#222] ml-4"></div>
        </div>

        {/* 4-column perk grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.perks.items.map((perk, i) => (
            <div key={i} className="flex items-center gap-4 bg-[#0a0a0a] border border-[#222] rounded-xl px-4 py-3.5 hover:border-[#333] transition-colors relative group">
              {/* Highlight container for icon */}
              <div
                className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0"
                style={{ background: `${perk.color}15`, color: perk.color }}
              >
                <IconBadge iconType={perk.icon} />
              </div>
              <span className="text-[14px] font-medium text-white/80 leading-snug">{perk.text}</span>
            </div>
          ))}
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════════════
                <span className="text-[12px] text-white/50">From Reputed Orgs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — Mentors
       ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 py-14">
        {/* Section Title with accent bar */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-9 bg-[#f89b29] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-black text-white">Event Lead</h2>
          </div>
          <div className="w-full h-[2px] bg-[#222] ml-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {data.mentors.map((mentor) => (
            <div key={mentor.id} className="bg-[#0a0a0a] border border-[#222] rounded-3xl p-6 flex flex-col items-center hover:border-[#333] transition-colors relative group">
              {/* Avatar */}
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-24 h-24 rounded-full object-cover mb-4 shadow-[0_0_15px_rgba(0,0,0,0.5)] border-2 border-[#333]"
              />

              {/* Name & Role */}
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">{mentor.name}</h3>

              {/* Social Buttons REMOVED */}
            </div>
          ))}
        </div>
      </section>

      {/* Event Gallery */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 pt-0 pb-2">
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-3 mb-3 bg-[#f89b29]/5 px-6 py-2 rounded-full border border-[#f89b29]/20">
            <div className="w-1 h-6 bg-[#f89b29] rounded-full"></div>
            <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider">Event Gallery</h2>
          </div>
          <p className="text-white/40 text-sm mt-4 max-w-2xl italic">
            Moments of fun, laughter, and friendly competition from Guess Busters 2K25 — where every clue was a new adventure.
          </p>
        </div>
        <div className="relative group">
          <ThreeDPhotoCarousel images={data.gallery} autoRotate={isAutoRotating} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — Certificate
       ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 py-14">
        {/* Section Title with accent bar */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-9 bg-[#f89b29] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-black text-white">Event Certificate</h2>
          </div>
          <div className="w-full h-[2px] bg-[#222] ml-4"></div>
        </div>

        <div className="bg-[#12100e] border border-[#2a2218] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-10 items-center justify-between shadow-2xl relative overflow-hidden">
          {/* Subtle gradient background glow from left */}
          <div className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-[#2a1a08] to-transparent opacity-40 pointer-events-none"></div>

          {/* Text Content */}
          <div className="flex-1 w-full relative z-10 lg:pl-4">
            

            <div className="relative mb-8 text-left">
              <img src="https://res.cloudinary.com/djiivo0r7/image/upload/v1773514921/certificate-ribbon__2_-removebg-preview_hnasix.png" alt="Ribbon" className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_0_15px_rgba(248,155,41,0.4)]" />
              <h3 className="text-[28px] md:text-[34px] leading-[1.2] font-semibold text-white/90 tracking-[-0.01em] relative z-10">
                Official <span className="text-[#f89b29] font-bold">Participation</span> Certificate
                <img src="https://res.cloudinary.com/djiivo0r7/image/upload/v1773553850/__Rocket_Emoji__2_-removebg-preview_w56x6a.png" alt="Rocket" className="inline-block w-8 h-8 ml-3 -mt-2 align-middle object-contain" />
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70">
                <IconBadge iconType="academic" />
                <span className="text-[14px]">Add this certificate to your Resume!</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <IconBadge iconType="linkedin" />
                <span className="text-[14px]">Share it with your LinkedIn network 🚀</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-[60%] lg:w-[55%] relative z-10 flex justify-end">
            <div className="relative w-full">
              <img
                src="https://res.cloudinary.com/djiivo0r7/image/upload/v1773297935/Blue_Modern_Achievement_Certificate_A4_Landscape.jpg_1_ud186o.jpg"
                alt="Course Certificate"
                className="w-full h-auto object-cover rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] border-[4px] border-[#1a1a1a]"
              />
            </div>
          </div>
        </div>
      </section>

      <EventParticipantsExperience
        testimonials={[
          {
            name: 'Harish',
            year: 'B.Tech 3rd Year',
            branch: 'CSE',
            content: 'Guess Busters was a mind-bending experience! The riddles were clever, and solving them with my team was so rewarding. A perfect blend of logic and fun.',
            college: 'Parvathareddy Babulreddy Visvodaya Institute of Technology',
            logo: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773269959/parvarthan_clg-removebg-preview_peni5d.png'
          },
          {
            name: 'Sravani',
            year: 'B.Tech 2nd Year',
            branch: 'ECE',
            content: 'The mystery box round was my favorite. It really tested our observation skills and quick thinking. Guess Busters is definitely the most unique event here!',
            college: 'Srinagaram Engineering College',
            logo: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773269965/srinagaram-removebg-preview_piuydf.png'
          },
          {
            name: 'Nikhil',
            year: 'B.Tech 4th Year',
            branch: 'CSE',
            content: 'Sigmoid 2K26 has some great events, but Guess Busters stands out for its creativity. The atmosphere was electric, and the puzzles were top-notch.',
            college: 'Mohan Babu University',
            logo: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773269951/mohn_babu-removebg-preview_rzn8tu.png'
          },
          {
            name: 'Prasanthi',
            year: 'B.Tech 3rd Year',
            branch: 'ECE',
            content: 'I loved how inclusive the event was. Even if you aren\'t a "techie", you can excel here with just sharp logic and good observation. Had an amazing time!',
            college: 'Bharath Institute of Technology',
            logo: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773269944/bharath_college-removebg-preview_kixrek.png'
          }
        ]}
      />

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8 — FAQs
       ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 py-20 mb-20">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-9 bg-[#f89b29] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-black text-white">Frequently Asked Questions</h2>
          </div>
          <div className="w-full h-[2px] bg-[#222] ml-4"></div>
        </div>

        <div className="w-full">
          {data.faqs.map(faq => <FaqItem key={faq.id} q={faq.question} a={faq.answer} />)}
        </div>
      </section>

    </div>
  )
}
