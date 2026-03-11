import React, { useState, useRef, useEffect, useCallback } from 'react';
import { BlurIn } from './blur-in.jsx';
import { Button } from './neon-button.jsx';

// ==========================================
// DYNAMIC EVENT DATA (JSON FORMAT)
// Replace any field below for a different event
// ==========================================
const eventData = {
  event_info: {
    title: "Click Fest",
    emoji: "📸",
    subtitle: "Photography Context",
    brochure_url: "#",
    features: [
      { id: "01", content: "Individual participation only" },
      { id: "02", content: "Capture stunning, creative images" },
      { id: "03", content: "Photography with smartphone only" },
      { id: "04", content: "Secret Themes disclosed on-site" },
      { id: "05", content: "AI manipulation strictly prohibited" },
      { id: "06", content: "Judge’s decisions are final" }
    ]
  },
  video_preview: {
    video_src: "/video-clickfest.mp4",
    badges: [
      { position: "top-left", icon: "user", text: "Phone Photography" },
      { position: "top-right", icon: "diamond", text: "Creative Angles" },
      { position: "bottom-left", icon: "users", text: "Individual Showcase" },
      { position: "bottom-right", icon: "academic", text: "Final Gallery" }
    ]
  },
  mission: [
    {
      id: "foundation",
      icon: "target",
      title: "THE OBJECTIVE",
      points: [
        "Photography context refers to capturing stunning, creative images showcasing technical skills and unique perspectives on daily life.",
        "Use your smartphone to present your best visual story and interpretation of the given themes.",
        "Let your lens do the talking and capture moments that speak louder than words."
      ]
    },
    {
      id: "journey",
      icon: "rocket",
      title: "THE PROCESS",
      points: [
        "Register online via our website or directly at the spot registration counter on the event day.",
        "The specific photography themes will be disclosed entirely on-site to test your spontaneous creativity.",
        "Final 3 entries are chosen based on creativity and adherence to themes. Finalists will be featured in an online gallery, competing for the title and prizes."
      ]
    }
  ],
  learnings: {
    title: "Skills Evaluated",
    items: [
      "Composition", "Lighting", "Framing", "Visual Storytelling",
      "Creativity", "Spontaneity", "Perspective", "Color Theory",
      "Subject Focus", "Contrast", "Originality", "Smartphone Mastery"
    ],
    button_text: "And much more...",
    description: [
      "Demonstrate your ability to find beauty and compelling narratives in ordinary scenes.",
      "Adapt quickly to unexpected themes and environmental conditions on-site.",
      "Showcase technical proficiency with lighting and composition using just a smartphone camera.",
      "Bring out unique perspectives that stand out from the conventional shots.",
      "Rely purely on your raw talent—AI enhancements and manipulations are completely prohibited."
    ]
  },
  perks: {
    title: "Perks & Benefits",
    items: [
      { text: "Certificate of Participation", icon: "academic", color: "#ec4899" },
      { text: "Featured in Online Gallery", icon: "globe", color: "#f89b29" },
      { text: "Prizes for Top 3 Winners", icon: "diamond", color: "#a855f7" },
      { text: "Showcase Creative Skills", icon: "document", color: "#2dd4bf" },
      { text: "Networking with Photographers", icon: "users", color: "#10B981" },
      { text: "Title of Campus Best Photographer", icon: "academic", color: "#f89b29" },
      { text: "Professional Recognition", icon: "briefcase", color: "#10B981" },
      { text: "Gain Real-time Feedback", icon: "terminal", color: "#2dd4bf" }
    ]
  },
  mentors: [
    { 
      id: "m1", 
      name: "Event Coordinator 1", 
      role: "Logistics", 
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      phone: "",
      instagram: "",
      linkedin: ""
    },
    { 
      id: "m2", 
      name: "Event Coordinator 2", 
      role: "Logistics", 
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      phone: "",
      instagram: "",
      linkedin: ""
    }
  ],
  testimonials: [
    { 
      id: "t1", 
      name: "Previous Finalist", 
      quote: "Click Fest was amazing! The on-site theme release forced me to think on my feet and captured the best photo I've ever taken on my phone.", 
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      college_logo: ""
    },
    { 
      id: "t2", 
      name: "Photography Enthusiast", 
      quote: "Being featured in the online gallery for the top 3 was a huge confidence boost. It’s a pure test of raw skill without AI, which makes it authentic.", 
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      college_logo: ""
    }
  ],
  faqs: [
    { id: "q1", question: "Can I use a DSLR or Mirrorless camera?", answer: "No, participants are only allowed to use smartphones for this contest." },
    { id: "q2", question: "Is team participation allowed?", answer: "No, this is strictly an individual participation event." },
    { id: "q3", question: "Can I edit my photos using AI?", answer: "No, AI tools and extreme manipulation are strictly prohibited. Minor color corrections may be allowed based on judge discretion, but RAW authentic shots are preferred." },
    { id: "q4", question: "When will the themes be announced?", answer: "The secret photography themes will be disclosed solely on-site during the event." }
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

export const ClickFestEventPage = () => {
  const data = eventData;
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [showControls, setShowControls] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const formatTime = (s) => {
    if (!s || isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        // Unmute on play
        videoRef.current.muted = false;
        setIsMuted(false);
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current && !isDragging) {
      const v = videoRef.current;
      const pct = (v.currentTime / v.duration) * 100;
      setProgress(pct || 0);
      setCurrentTime(formatTime(v.currentTime));
    }
  }, [isDragging]);

  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      // Show second frame instead of first
      videoRef.current.currentTime = 0.5;
      setDuration(formatTime(videoRef.current.duration));
    }
  }, []);

  // Seek to position from mouse event
  const seekToPosition = useCallback((e) => {
    if (videoRef.current && progressRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const pct = x / rect.width;
      videoRef.current.currentTime = pct * videoRef.current.duration;
      setProgress(pct * 100);
      setCurrentTime(formatTime(pct * videoRef.current.duration));
    }
  }, []);

  const handleProgressMouseDown = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
    seekToPosition(e);

    const onMouseMove = (ev) => seekToPosition(ev);
    const onMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }, [seekToPosition]);

  return (
    <div className="min-h-screen bg-[#000000] text-white font-sans overflow-x-hidden selection:bg-[#f89b29] selection:text-black">

      {/* Keyframes */}
      <style>{`
        @keyframes floatBadge1 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes floatBadge2 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes floatBadge3 { 0%,100% { transform: translateY(-4px); } 50% { transform: translateY(6px); } }
        @keyframes floatBadge4 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
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
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 pt-28 pb-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-6">

          {/* ── LEFT COLUMN ── */}
          <div className="flex-1 min-w-0 lg:max-w-[50%]">

            {/* Title Row */}
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

            {/* Subtitle */}
            <p className="text-white/50 text-lg font-medium mb-8 pl-4">
              {data.event_info.subtitle}
            </p>

            {/* ── Feature Cards — 2-column grid ── */}
            <div className="grid grid-cols-2 gap-2.5">
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
          </div>

          {/* ── RIGHT COLUMN — vertically centered, pushed right ── */}
          <div className="flex-1 min-w-0 lg:max-w-[50%] flex flex-col items-center justify-center lg:pl-6">

            {/* Laptop Mockup */}
            <div className="relative z-10 w-full max-w-[560px]">
              {/* Screen Frame */}
              <div className="relative bg-[#181818] rounded-t-2xl border-t-2 border-x-2 border-[#333] p-3 shadow-[0_0_60px_rgba(0,0,0,0.6)]">
                {/* Camera dot */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#444]"></div>

                {/* Screen Content — Video */}
                <div
                  className="relative w-full aspect-video bg-black rounded overflow-hidden border border-[#222] cursor-pointer"
                  onMouseEnter={() => isPlaying && setShowControls(true)}
                  onMouseLeave={() => setShowControls(false)}
                >
                  <video
                    ref={videoRef}
                    src={data.video_preview.video_src}
                    className="w-full h-full object-cover"
                    muted={isMuted}
                    loop
                    playsInline
                    preload="metadata"
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={() => setIsPlaying(false)}
                  />

                  {/* Play Button Overlay — solid, thick, NOT glassy */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 group/play" onClick={togglePlay}>
                      {/* Radiation rings — ONLY on hover */}
                      <div className="absolute w-24 h-24 rounded-full border-2 border-white/20 opacity-0 group-hover/play:opacity-100" style={{ animation: 'playRadiate 2s ease-out infinite' }}></div>
                      <div className="absolute w-24 h-24 rounded-full border-2 border-white/15 opacity-0 group-hover/play:opacity-100" style={{ animation: 'playRadiate 2s ease-out infinite 0.6s' }}></div>
                      <div className="absolute w-24 h-24 rounded-full border-2 border-white/10 opacity-0 group-hover/play:opacity-100" style={{ animation: 'playRadiate 2s ease-out infinite 1.2s' }}></div>

                      {/* Solid play button */}
                      <button
                        className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] bg-white/90 rounded-full flex items-center justify-center border-[3px] border-white transition-all duration-300 hover:scale-110 z-20 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                      >
                        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </button>
                    </div>
                  )}

                  {/* YouTube-style Controls Bar */}
                  {isPlaying && (
                    <div className={`absolute bottom-0 left-0 right-0 z-30 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
                      onMouseEnter={() => setShowControls(true)}
                    >
                      {/* Progress Bar — draggable */}
                      <div
                        ref={progressRef}
                        className="w-full h-1.5 bg-white/20 cursor-pointer group/progress hover:h-2.5 transition-all"
                        onMouseDown={handleProgressMouseDown}
                      >
                        <div
                          className="h-full bg-[#f89b29] relative"
                          style={{ width: `${progress}%` }}
                        >
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#f89b29] opacity-0 group-hover/progress:opacity-100 transition-opacity shadow-md border border-white/30"></div>
                        </div>
                      </div>

                      {/* Control Buttons */}
                      <div className="flex items-center gap-3 px-3 py-2 bg-gradient-to-t from-black/80 to-black/40">
                        {/* Play/Pause */}
                        <button onClick={(e) => { e.stopPropagation(); togglePlay(); }} className="text-white hover:text-white/80 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            {isPlaying
                              ? <><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></>
                              : <path d="M8 5v14l11-7z" />
                            }
                          </svg>
                        </button>

                        {/* Volume */}
                        <button onClick={(e) => { e.stopPropagation(); toggleMute(); }} className="text-white hover:text-white/80 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            {isMuted
                              ? <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                              : <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                            }
                          </svg>
                        </button>

                        {/* Time */}
                        <span className="text-white/70 text-[12px] font-mono ml-1">
                          {currentTime} / {duration}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Floating Badges — positioned outside video area to avoid control overlap */}
                {data.video_preview.badges.map((badge, idx) => {
                  const posMap = {
                    "top-left": "-top-6 -left-4 lg:-left-12",
                    "top-right": "-top-6 -right-4 lg:-right-12",
                    "bottom-left": "-bottom-4 -left-4 lg:-left-12",
                    "bottom-right": "-bottom-4 -right-4 lg:-right-12"
                  };
                  const floatAnims = [
                    'floatBadge1 3s ease-in-out infinite',
                    'floatBadge2 3.5s ease-in-out infinite 0.3s',
                    'floatBadge3 4s ease-in-out infinite 0.6s',
                    'floatBadge4 3.2s ease-in-out infinite 0.9s'
                  ];
                  return (
                    <div
                      key={idx}
                      className={`hidden md:flex absolute z-20 ${posMap[badge.position]} bg-[#0c0c0c] border-2 border-[#2a2a2a] rounded-full px-5 py-2.5 items-center gap-2.5 text-white text-[14px] font-bold shadow-[0_8px_32px_rgba(0,0,0,0.6)] whitespace-nowrap cursor-default`}
                      style={{ animation: floatAnims[idx % 4] }}
                    >
                      <IconBadge iconType={badge.icon} />
                      {badge.text}
                    </div>
                  )
                })}
              </div>

              {/* Laptop Base */}
              <div className="relative w-[108%] -ml-[4%] h-6 bg-[#272727] rounded-b-xl border-2 border-[#333] flex justify-center items-start shadow-2xl z-0">
                <div className="w-28 h-2 bg-[#181818] rounded-b-sm"></div>
              </div>
            </div>

            {/* Download Brochure — Neon Button */}
            <div className="mt-12">
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
          SECTION 4 — Judge
       ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 py-14">
        {/* Section Title with accent bar */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-9 bg-[#f89b29] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-black text-white">Judge</h2>
          </div>
          <div className="w-full h-[2px] bg-[#222] ml-4"></div>
        </div>

        <div className="bg-[#0a0a0a] border border-[#222] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-stretch mt-6">
          {/* Image & Socials */}
          <div className="w-full md:w-[30%] flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2670&auto=format&fit=crop" alt="Event Judge" className="w-full aspect-[4/5] object-cover rounded-2xl md:mb-0 mb-6 shadow-[0_0_20px_rgba(0,0,0,0.8)]" />
          </div>
          
          {/* Details Content */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-[#2dd4bf] mb-1">Esteemed Evaluation Committee</h3>
              <p className="text-white/40 text-[14px]">{"// Professors & Domain Experts"}</p>
            </div>
            
            <div className="bg-[#111111] border border-[#222] rounded-2xl p-6 md:p-8 mb-6 h-full text-[14.5px] leading-relaxed text-white/60 space-y-4 font-normal shadow-inner">
              <p>
                The projects will be rigorously evaluated by a panel of tech professionals and established researchers specializing in domains like AI, ML, Sensors, and DIY Electronics. The judges possess years of practical, real-world experience, ensuring an authentic evaluation of your model's design logic and innovation.
              </p>
              <p>
                Following your 6-8 minute presentation, the panel will ask critical questions and offer constructive feedback. This interaction is designed to strengthen your technical foundation and gear you up for advancing your project to higher university-level scopes and startup potential.
              </p>
            </div>

            {/* Stat Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#0f0f0f] border border-[#222] rounded-xl p-4 flex flex-col items-center justify-center hover:border-[#333] transition-colors gap-2">
                <div className="text-[#f89b29] scale-110 mb-1"><IconBadge iconType="users" /></div>
                <h4 className="text-xl font-black text-[#f89b29]">25+</h4>
                <span className="text-[12px] text-white/50">Expert Panels</span>
              </div>
              <div className="bg-[#0f0f0f] border border-[#222] rounded-xl p-4 flex flex-col items-center justify-center hover:border-[#333] transition-colors gap-2">
                <svg className="w-[1.4rem] h-[1.4rem] text-[#f89b29] mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                <h4 className="text-xl font-black text-[#f89b29]">15+</h4>
                <span className="text-[12px] text-white/50">Years Experience</span>
              </div>
              <div className="bg-[#0f0f0f] border border-[#222] rounded-xl p-4 flex flex-col items-center justify-center hover:border-[#333] transition-colors gap-2 text-center">
                <div className="text-[#f89b29] scale-110 mb-1"><IconBadge iconType="briefcase" /></div>
                <h4 className="text-xl font-black text-[#f89b29] leading-tight">Top Univ.</h4>
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
              <h3 className="text-xl font-bold text-white mb-1">{mentor.name}</h3>
              <p className="text-[13px] text-white/50 mb-6 text-center">{mentor.role}</p>
              
              {/* Social Buttons (Square) */}
              <div className="flex items-center gap-4">
                {mentor.phone && (
                  <a href={`tel:${mentor.phone}`} className="w-11 h-11 flex items-center justify-center rounded-2xl bg-[#111] border border-[#222] text-blue-500 hover:bg-blue-500/10 transition-all" title="Call">
                    <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </a>
                )}
                {mentor.instagram && (
                  <a href={mentor.instagram} target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-2xl bg-[#111] border border-[#222] text-red-500 hover:bg-red-500/10 transition-all" title="Instagram">
                    <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="6" ry="6" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" /></svg>
                  </a>
                )}
                {mentor.linkedin && (
                  <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-2xl bg-[#111] border border-[#222] text-blue-600 hover:bg-blue-600/10 transition-all" title="LinkedIn">
                    <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" stroke="none" fill="currentColor"/></svg>
                  </a>
                )}
              </div>
            </div>
          ))}
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
            {/* Ribbon Badge (Replaces Logo) */}
            <div className="mb-6">
              <img 
                src="/certificate-ribbon-new.png" 
                alt="Ribbon" 
                className="w-16 md:w-20 h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]" 
              />
            </div>
            
            <div className="relative mb-8">
              <h3 className="text-[28px] md:text-[34px] leading-[1.2] font-semibold text-white/90 tracking-[-0.01em] relative z-10">
                Official <span className="text-[#f89b29] font-bold">Participation</span> Certificate 
                <img src="/rocket-icon.png" alt="Rocket" className="inline-block w-8 h-8 ml-3 -mt-2 align-middle object-contain" />
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
                src="/namaste_dsa_cert.webp" 
                alt="Course Certificate" 
                className="w-full h-auto object-cover rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] border-[4px] border-[#1a1a1a]" 
              />
              {/* Ribbon Badge */}
              <img 
                src="/certificate-ribbon.png" 
                alt="Ribbon" 
                className="absolute -top-6 -left-6 w-32 md:w-36 h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-20 pointer-events-none" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — Testimonials
       ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 py-20">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-9 bg-[#f89b29] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-black text-white">Our Testimonials</h2>
          </div>
          <div className="w-full h-[2px] bg-[#222] ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.testimonials.map((t, idx) => (
            <div key={idx} className="bg-[#111] border border-[#222] rounded-[1.25rem] p-6 hover:bg-[#151515] transition-colors relative flex flex-col justify-between">
              
              {/* Header: Profile, Name/Role, College Logo */}
              <div className="flex justify-between items-start mb-5 h-14">
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-[#333]" />
                  <div className="flex items-center h-full">
                    <h4 className="font-bold text-white/95 text-[15px]">{t.name}</h4>
                  </div>
                </div>
                
                {t.college_logo && (
                  <div className="h-full flex items-center">
                    <img src={t.college_logo} alt="College Logo" className="h-[26px] object-contain opacity-70" />
                  </div>
                )}
              </div>

              {/* Quote Text */}
              <p className="text-[14px] text-white/70 leading-[1.6]">{t.quote}</p>
            </div>
          ))}
        </div>
      </section>

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
