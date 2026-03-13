import React, { useState, useRef, useEffect } from 'react';
import { BlurIn } from './blur-in.jsx';
import { Button } from './neon-button.jsx';

const eventData = {
  "event_info": {
    "title": "ICONEMA",
    "subtitle": "Observation, Knowledge & Teamwork",
    "brochure_url": "C:/Users/Acer/Downloads/ICONEMA.pdf",
    "thumbnail": "https://res.cloudinary.com/djiivo0r7/image/upload/v1773337470/Your_paragraph_text_16_imbuxm.png"
  },
  "video_preview": {
    "video_src": "https://res.cloudinary.com/djiivo0r7/video/upload/v1773379550/WhatsApp_Video_2026-03-12_at_22.13.59_nshvsd.mp4",
    "badges": [
      { "text": "Movie Logic", "icon": "video", "position": "top-left" },
      { "text": "App Identification", "icon": "cube", "position": "top-right" },
      { "text": "Treasure Hunt", "icon": "diamond", "position": "bottom-left" },
      { "text": "Team Coordination", "icon": "users", "position": "bottom-right" }
    ]
  },
  "mission": [
    {
      "id": "round1",
      "icon": "video",
      "title": "MOVIE – Round 1",
      "points": [
        "A video will be played for all participants.",
        "Questions will be asked based on details from the video.",
        "Accuracy and speed are key to qualifying for the next stage."
      ]
    },
    {
      "id": "round2",
      "icon": "cube",
      "title": "APP ICON – Round 2",
      "points": [
        "An app icon will be displayed on the screen.",
        "Teams must identify the correct app name within the time limit.",
        "Successful identification secures a spot in the final round."
      ]
    },
    {
      "id": "round3",
      "icon": "diamond",
      "title": "TREASURE HUNT – Round 3",
      "points": [
        "The final ultimate challenge with no specific time limit.",
        "Progressive hints will be provided after solving each question.",
        "The fastest team to complete the hunt is crowned the winner."
      ]
    }
  ],
  "learnings": {
    "title": "Skills Evaluated",
    "items": [
      "Visual Observation",
      "Brand Recognition",
      "Logical Deduction",
      "Time Management",
      "Rapid Recall",
      "Team Synergy",
      "Problem Solving",
      "Geographical Intuition"
    ],
    "description": [
      "Test your situational awareness through cinematic observation.",
      "Challenge your familiarity with the digital landscape and brand aesthetics.",
      "Engage in a thrilling race against time and other competitors.",
      "Work in a team environment to solve complex riddles and find the treasure."
    ]
  },
  "rules": [
    "Participants should register themselves from our website or at the spot registration counter.",
    "The rules will be announced at the time of the event.",
    "The decision of the judging panel is final.",
    "It is advised to form a team of yours else there is a possibility of arranging it at the event.",
    "The time taken is the priority.",
    "All materials will be provided within the event itself."
  ],
  "mentors": [
    {
      "id": "m1",
      "name": "Event Coordinator",
      "role": "Lead Organizer",
      "image": "https://res.cloudinary.com/djiivo0r7/image/upload/v1773330939/WhatsApp_Image_2026-03-11_at_23.52.50_i7gokv.jpg"
    }
  ],
  "faqs": [
    {
      "id": "q1",
      "question": "How many members per team?",
      "answer": "Teams usually consist of 2-3 members. We recommend forming a team beforehand."
    },
    {
      "id": "q2",
      "question": "Is spot registration available?",
      "answer": "Yes, you can register at the venue at the spot registration counter."
    }
  ]
};

const IconBadge = ({ iconType }) => {
  switch (iconType) {
    case 'video': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;
    case 'cube': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;
    case 'diamond': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
    case 'users': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
    default: return null;
  }
};

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 hover:border-white/20 bg-white/5 backdrop-blur-sm rounded-xl mb-3 overflow-hidden transition-colors">
      <button onClick={() => setOpen(!open)} className="w-full text-left px-5 py-[18px] flex justify-between items-center group">
        <span className="text-[15px] font-medium text-white/90 group-hover:text-white transition-colors">{q}</span>
        <span className={`text-white/40 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      {open && <div className="px-5 pb-5 pt-0 text-white/60 text-[14px] leading-relaxed">{a}</div>}
    </div>
  );
};

export const IconemaEventPage = () => {
  const data = eventData;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] pt-28 text-white selection:bg-[#ff8a1f] selection:text-black">
      {/* Registration-style Background Design */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,138,31,0.16),transparent_22%),radial-gradient(circle_at_top_right,rgba(255,107,43,0.12),transparent_18%),linear-gradient(180deg,#050505_0%,#0a0a0a_45%,#050505_100%)]" />
        <div className="absolute inset-0 opacity-[0.045]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)',
            backgroundSize: '72px 72px'
        }} />
        <div className="absolute left-[10%] top-28 h-52 w-52 rounded-full bg-[#ff8a1f]/10 blur-[120px]" />
        <div className="absolute bottom-20 right-[12%] h-64 w-64 rounded-full bg-[#ff5a00]/10 blur-[150px]" />
      </div>

      {/* Hero Section */}
      <section className="relative max-w-[1400px] mx-auto px-8 lg:px-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <div className="inline-flex rounded-full border border-[#ff8a1f]/20 bg-[#ff8a1f]/8 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.26em] text-[#ffb347] mb-6">
              Neon Nostaliga
            </div>
            <BlurIn word={data.event_info.title} className="text-5xl md:text-7xl font-bold text-[#ff8a1f] tracking-tight mb-4" />
            <p className="text-xl md:text-2xl font-light text-white/55 mb-10 max-w-xl">{data.event_info.subtitle}</p>
            
            <a href={data.event_info.brochure_url} download className="inline-block">
              <Button variant="default" size="lg" neon={true} className="bg-black text-white border-white/20 hover:bg-white/5 hover:border-white/40 px-10 py-3 text-[16px] font-bold flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Download Brochure
              </Button>
            </a>
          </div>

          {/* Laptop Mockup */}
          <div className="relative">
             <div className="relative w-full max-w-[600px] mx-auto z-10">
              <div className="relative aspect-[16/10] bg-[#1a1a1a] rounded-t-xl border-4 border-[#333] shadow-2xl overflow-hidden p-2">
                <div className="relative w-full h-full bg-black rounded-sm overflow-hidden border border-[#222]">
                  <video ref={videoRef} src={data.video_preview.video_src} className="w-full h-full object-cover opacity-50" loop muted playsInline />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <button onClick={togglePlay} className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center hover:scale-110 transition-transform">
                      {isPlaying ? (
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
                      ) : (
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative w-[108%] -ml-[4%] h-6 bg-[#272727] rounded-b-xl border-2 border-[#333] flex justify-center items-start shadow-2xl z-0">
                <div className="w-28 h-2 bg-[#181818] rounded-b-sm"></div>
              </div>
              
              {/* Floating Badges */}
              {data.video_preview.badges.map((badge, idx) => {
                const posMap = { "top-left": "-top-4 -left-4", "top-right": "-top-4 -right-4", "bottom-left": "-bottom-4 -left-4", "bottom-right": "-bottom-4 -right-4" };
                return (
                  <div key={idx} className={`absolute z-20 ${posMap[badge.position]} bg-[#0c0c0c]/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 text-white/90 text-xs font-bold shadow-xl`}>
                    <IconBadge iconType={badge.icon} /> {badge.text}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Round Overview */}
      <section className="relative max-w-[1400px] mx-auto px-8 lg:px-12 py-20 bg-black/20">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-9 bg-[#ff8a1f] rounded-full"></div>
          <h2 className="text-3xl font-bold text-white">Event Overview</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {data.mission.map(m => (
            <div key={m.id} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#ff8a1f]/40 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#ff8a1f]/10 border border-[#ff8a1f]/30 flex items-center justify-center text-[#ff8a1f]">
                  <IconBadge iconType={m.icon} />
                </div>
                <h3 className="text-sm font-black tracking-[0.2em] text-[#ffb347] uppercase">{m.title}</h3>
              </div>
              <ul className="space-y-4">
                {m.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-[7px] bg-[#ff8a1f] shrink-0" />
                    <span className="text-sm text-white/60 leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Rules Section */}
      <section className="relative max-w-[1400px] mx-auto px-8 lg:px-12 py-20 text-left">
        <h2 className="text-3xl font-bold text-[#ff8a1f] mb-12">General Rules</h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {data.rules.map((rule, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
              <span className="text-[#ff8a1f] font-mono text-sm group-hover:scale-110 transition-transform">{i + 1}.</span>
              <p className="text-white/80 leading-relaxed text-[15px]">{rule}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mentor Section */}
      <section className="relative max-w-[1400px] mx-auto px-8 lg:px-12 py-20">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-white mb-12">Event Coordinator</h2>
          {data.mentors.map(mentor => (
            <div key={mentor.id} className="flex flex-col md:flex-row items-center gap-8 bg-white/5 border border-white/10 p-8 rounded-[2rem] max-w-lg w-full">
              <img src={mentor.image} className="w-32 h-32 rounded-full object-cover border-2 border-[#ff8a1f]" />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-[#ffb347] mb-1">{mentor.name}</h3>
                <p className="text-sm text-white/40 uppercase tracking-[0.2em]">{mentor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="relative max-w-[1400px] mx-auto px-8 lg:px-12 py-20 pb-32">
        <h2 className="text-3xl font-bold text-white mb-12">FAQs</h2>
        <div className="max-w-3xl mx-auto">
          {data.faqs.map(faq => <FaqItem key={faq.id} q={faq.question} a={faq.answer} />)}
        </div>
      </section>
    </div>
  );
};

export default IconemaEventPage;
