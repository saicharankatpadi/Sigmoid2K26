import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { BlurIn } from './blur-in.jsx';
import { Button } from './neon-button.jsx';

// ==========================================
// DYNAMIC EVENT DATA (JSON FORMAT)
// Replace any field below for a different event
// ==========================================
const eventData = {
  event_info: {
    title: "TechFusion",
    emoji: "rocket",
    subtitle: "Learn Data Structures & Algorithms · From Zero to Hero",
    brochure_url: "/downloads/techfusion-brochure.pdf",
    features: [
      { id: "01", content: "Structured, high-quality video lessons" },
      { id: "02", content: "Start from scratch, no DSA experience needed" },
      { id: "03", content: "Company wise interview practice questions" },
      { id: "04", content: "Verified certificate to boost your Resume" },
      { id: "05", content: "7-Day no-questions-asked refund policy" },
      { id: "06", content: "Get Lifetime Access And All Future Updates" },
      { id: "07", content: "Solution code in - JS, C, C++, Java & Python" },
      { id: "08", content: "High-Quality Notes, interview preparation" },
      { id: "09", content: "Strong Problem-Solving Foundation" },
      { id: "10", content: "Time & Space Complexity Mastery" }
    ]
  },
  mission: [
    {
      id: "foundation",
      icon: "target",
      title: "THE FOUNDATION",
      points: [
        "The mission of this series is to take you from Zero to Hero in Data Structures & Algorithms, with a focus on deep understanding of all the DSA fundamental concepts.",
        "Our goal isn't just to help you solve problems, but to make you fall in love with algorithms. Every concept is broken down line by line, with clear explanations on how it works, why it works, how to optimize it, finding the time and space complexity and finally converting your approach to code.",
        "We follow a learn-by-doing philosophy. You'll master DSA while practicing a lots of coding problems, starting right from the basics and slowly moving to highly advanced concepts."
      ]
    },
    {
      id: "journey",
      icon: "rocket",
      title: "THE JOURNEY",
      points: [
        "By the end of this course, you'll have the skills and confidence to crack DSA rounds at top companies and approach new DSA problems with ease. This course is intense. It demands your time, consistency, and dedication. But if you commit, it can be a game-changer for your tech career.",
        "Are you ready?",
        "Come join us and become a DSA hero. 🚀"
      ]
    }
  ],
  learnings: {
    title: "Learnings",
    items: [
      "Arrays", "Strings", "Linked Lists", "Doubly Linked List",
      "Circular Linked List", "Stacks", "Queues", "Priority Queue",
      "Deque", "Hash Maps", "Hash Sets", "Recursion",
      "Backtracking", "Binary Trees", "Tree Traversals", "Binary Search Trees"
    ],
    button_text: "And so much more...",
    description: [
      "Basically, I'll teach you everything I've learned over the years from solving numerous problems to preparing for top tech interviews. Everything I know about Data Structures and Algorithms, distilled into one powerful course. ❤️",
      "We'll dive deep into each Data Structure and Algorithm by solving hundreds of problems no slides, no shortcuts just real coding, real logic, and hands-on learning. 🚀",
      "We'll start from absolute ZERO and build up to confidently solving even the most complex DSA questions. This is your journey from Zero to Hero in Data Structures and Algorithms. 🤩",
      "This is one of the few structured DSA courses in the industry that teaches you the why, how, and where behind every concept in a way that's practical, intuitive, and interview-ready.",
      "And yes, you'll have lifetime access to all future content updates and bonus sessions as the series evolves!",
    ]
  },
  perks: {
    title: "Perks & Benefits",
    items: [
      { text: "High-quality DSA video lessons", icon: "video", color: "#f89b29" },
      { text: "Different Approaches to solve a same problem", icon: "code", color: "#f89b29" },
      { text: "Notes & cheat sheets", icon: "clipboard", color: "#10B981" },
      { text: "Pattern-based problem solving", icon: "refresh", color: "#2dd4bf" },
      { text: "Taught by Akshay Saini", icon: "user", color: "#a855f7" },
      { text: "Course completion certificate", icon: "academic", color: "#ec4899" },
      { text: "Lifetime access & updates", icon: "clock", color: "#10B981" },
      { text: "Premium learner community", icon: "users", color: "#f89b29" },
      { text: "DSA from scratch", icon: "cube", color: "#eab308" },
      { text: "Debug & visualize algorithms", icon: "briefcase", color: "#10B981" },
      { text: "Bonus Session on Personal Branding", icon: "diamond", color: "#2dd4bf" },
      { text: "Bonus Session on LinkedIn Tips and Tricks", icon: "linkedin", color: "#8b5cf6" },
      { text: "Bonus Session on Resume Building", icon: "document", color: "#f89b29" },
      { text: "Learn anytime, anywhere", icon: "globe", color: "#eab308" },
      { text: "7-day refund guarantee", icon: "shield", color: "#10B981" },
      { text: "Interview-style problems", icon: "terminal", color: "#2dd4bf" }
    ]
  },
  mentors: [
    { 
      id: "m1", 
      name: "Alex Rivera", 
      role: "Senior Staff Engineer", 
      image: "/mentor_profile.jpg",
      phone: "+1234567890",
      instagram: "https://instagram.com/placeholder1",
      linkedin: "https://linkedin.com/in/placeholder1"
    },
    { 
      id: "m2", 
      name: "Samantha Lee", 
      role: "Lead Product Designer", 
      image: "/mentor_leader1.jpeg",
      phone: "+0987654321",
      instagram: "https://instagram.com/placeholder2",
      linkedin: "https://linkedin.com/in/placeholder2"
    }
  ],
  faqs: [
    { id: "q1", question: "What is Namaste DSA?", answer: "Namaste DSA is our most comprehensive Data Structures & Algorithms course designed to take you from fundamentals to advanced algorithmic mastery." },
    { id: "q2", question: "Is Namaste DSA suitable for complete beginners?", answer: "Yes! We assume zero prior knowledge of Data Structures and Algorithms. We build everything ground-up." },
    { id: "q3", question: "What programming languages are used?", answer: "The course explanations focus on logic, but solution code is provided in JavaScript, C, C++, Java, and Python!" },
    { id: "q4", question: "What data structures are covered?", answer: "We cover everything from native Arrays and Strings, to Stacks, Queues, Linked Lists, HashMaps, Trees, Graphs, and Heaps." }
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
    case 'diamond': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
    case 'linkedin': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" stroke="none" fill="currentColor"/></svg>;
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

export const DynamicEventPage = () => {
  const data = eventData;

  return (
    <div className="min-h-screen bg-[#000000] text-white font-sans overflow-x-hidden selection:bg-[#f89b29] selection:text-black">


  

      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO: Centered Layout
       ═══════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 pt-28 pb-10">
        <div className="flex flex-col items-center justify-center text-center">

          {/* Title Row */}
          <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-1 h-12 bg-[#f89b29] rounded-full"></div>
              <div className="flex items-center">
                <BlurIn 
                  word={data.event_info.title}
                  className="text-4xl md:text-5xl font-black text-white tracking-tight"
                />
                {data.event_info.emoji === 'rocket' ? (
                  <img src="/rocket-icon.png" alt="rocket" className="ml-5 w-auto h-12 md:h-14 object-contain drop-shadow-[0_0_15px_rgba(248,155,41,0.5)]" />
                ) : (
                  <span className="text-3xl lg:text-4xl ml-3 lg:ml-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">{data.event_info.emoji}</span>
                )}
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-white/50 text-lg font-medium mb-12">
              {data.event_info.subtitle}
            </p>

            {/* ── Feature Cards — Grid ── */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-[1200px]">
              {data.event_info.features.map(feature => (
                <div
                  key={feature.id}
                  className="flex items-center gap-0 bg-[#111111] border-2 border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#3a3a3a] transition-all duration-300 group cursor-default"
                >
                  {/* Number */}
                  <div className="shrink-0 w-12 flex items-center justify-center py-3 px-2">
                    <span className="text-[#f89b29] font-black text-[15px] tracking-wider">{feature.id}</span>
                  </div>
                  {/* Vertical Line Separator — half height, centered */}
                  <div className="flex items-center self-stretch">
                    <div className="w-[2px] h-[50%] bg-[#2a2a2a] group-hover:bg-[#3a3a3a] transition-colors rounded-full"></div>
                  </div>
                  {/* Text */}
                  <div className="flex-1 py-3 px-3">
                    <span className="text-white/90 text-[13px] leading-snug font-semibold">{feature.content}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Brochure — Neon Button */}
            <div className="mt-16 mb-4">
              <a href={data.event_info.brochure_url} download className="inline-block">
                <Button
                  variant="default"
                  size="lg"
                  neon={true}
                  className="bg-black text-white border-white/20 hover:bg-white/5 hover:border-white/40 px-10 py-3 text-[16px] font-bold flex items-center gap-3 cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Download Brochure
                </Button>
              </a>
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
          SECTION 4 — Perks & Benefits
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
          SECTION 5 — Mentors
       ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 py-14">
        {/* Section Title with accent bar */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-9 bg-[#f89b29] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-black text-white">Mentors</h2>
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
              
              {/* Social Buttons (Square) */}
              {/* Social Buttons REMOVED */}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — FAQs
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
