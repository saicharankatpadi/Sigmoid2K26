import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { BlurIn } from './blur-in.jsx';
import { Button } from './neon-button.jsx';
import { ThreeDPhotoCarousel } from './3d-carousel.jsx';
import { EventParticipantsExperience } from './EventParticipantsExperience.jsx';

// ==========================================
// DYNAMIC EVENT DATA (JSON FORMAT)
// Replace any field below for a different event
// ==========================================
const eventData = {
  event_info: {
    title: "Avishkar",
    emoji: "rocket",
    subtitle: "Project Expo and DIY",
    brochure_url: "/AVISHKAR.pdf",
    features: [
      { id: "01", content: "Register online or at the spot registration counter." },
      { id: "02", content: "A team of a maximum of 4 candidates is allowed per each project." },
      { id: "03", content: "The person in one team should not be allowed to participate in other teams of Avishkar." },
      { id: "04", content: "Breadboards and jumper wires provided only if informed in advance." },
      { id: "05", content: "Showcase domain knowledge of Electronics and sensors or software model." },
      { id: "06", content: "Machine Learning, Artificial Intelligence are also accepted." },
      { id: "07", content: "Submit project abstract via Google Form by 02-04-2026." },
      { id: "08", content: "Bring physical prepared model and abstract on Event Day." },
      { id: "09", content: "Participants must carry out their projects themselves." },
      { id: "10", content: "7-8 mins of presentation time followed by queries." },
      { id: "11", content: "No separate fee if fest entry is paid." },
      { id: "12", content: "Best projects sent to university and rewarded." }
    ]
  },

  mission: [
    {
      id: "foundation",
      icon: "target",
      title: "THE OBJECTIVE",
      points: [
        "Imagine a world where resistors, diodes, capacitors, and inductors obey your every command. That world is here  start building and take charge!",
        "Avishkar is a dynamic and innovative event designed to celebrate creativity, technical expertise, and hands-on learning.",
        "It serves as a platform for students to showcase their groundbreaking projects, experiment with DIY (Do-It-Yourself) creations, and inspire others through their ingenuity."
      ]
    },
    {
      id: "journey",
      icon: "rocket",
      title: "THE PROCESS",
      points: [
        "Register your team and submit the project abstract using the Google Form before the deadline.",
        "Participants must bring and carry out their projects directly. Breadboards provided only if informed in advance.",
        "Exhibit your working model physically on the event day. Best projects are awarded prizes and certifications!"
      ]
    }
  ],
  learnings: {
    title: "Domain Knowledge",
    items: [
      "Electronics", "Sensors", "Software Models", "Machine Learning",
      "Artificial Intelligence", "DIY Hardware", "Circuit Design", "IoT Implementations",
      "Embedded Systems", "Robotics", "Automation", "Prototyping"
    ],
    button_text: "And much more...",
    description: [
      "Showcase your practical understanding of complex systems and sensors.",
      "Get hands-on experience by building and demonstrating a working prototype.",
      "Learn to defend your design choices during the rigorous Q&A rounds.",
      "Network with other innovators and observe solutions to various technical problems.",
      "Compete for the chance to represent your college at the university level."
    ]
  },
  perks: {
    title: "Perks & Benefits",
    items: [
      { text: "Certificate of Excellence", icon: "academic", color: "#ec4899" },
      { text: "University Level Entry for Winners", icon: "globe", color: "#f89b29" },
      { text: "Expert Q&A Feedback", icon: "user", color: "#a855f7" },
      { text: "Showcase Your Craft", icon: "document", color: "#2dd4bf" },
      { text: "Networking Opportunities", icon: "users", color: "#10B981" },
      { text: "Exciting Rewards for Winners", icon: "diamond", color: "#f89b29" },
      { text: "Practical Engineering Experience", icon: "briefcase", color: "#10B981" },
      { text: "Explore AI/ML Applications", icon: "terminal", color: "#2dd4bf" }
    ]
  },
  mentors: [
    {
      id: "m1",
      name: "S K. LUQMAN",
      role: "Event Lead",
      image: "https://res.cloudinary.com/djiivo0r7/image/upload/v1773298518/WhatsApp_Image_2026-03-11_at_23.54.52_rkog46.jpg",
      phone: "",
      instagram: "",
      linkedin: ""
    }, {
      id: "m1",
      name: "J. ANUSHA ",
      role: "Event Lead",
      image: "https://res.cloudinary.com/djiivo0r7/image/upload/v1773548926/WhatsApp_Image_2026-03-12_at_02.32.00_1_ws5e4w.jpg",
      phone: "",
      instagram: "",
      linkedin: ""
    }
  ],

  faqs: [
    { id: "q1", question: "Do I need to pay extra for this event?", answer: "No, registering and paying the entry fee for the entire tech-fest covers this event." },
    { id: "q2", question: "Will breadboards be provided?", answer: "Please note that breadboards will only be provided to participants who inform us in advance." },
    { id: "q3", question: "Can I participate in multiple Avishkar projects?", answer: "No, a person in one team cannot participate in other teams of Avishkar." },
    { id: "q4", question: "Is the project abstract mandatory?", answer: "Yes, you must submit your project abstract through the Google form before the specified deadline of 02-04-2026." }
  ],
  gallery: [
    "https://res.cloudinary.com/djiivo0r7/image/upload/v1773350157/567A8795_zz67aa.jpg",
    "https://res.cloudinary.com/djiivo0r7/image/upload/v1773350177/IMG_1188_dbihrp.jpg",
    "https://res.cloudinary.com/djiivo0r7/image/upload/v1773350157/567A8798_ho0gki.jpg",
    "https://res.cloudinary.com/djiivo0r7/image/upload/v1773350189/IMG_1183_vxgyhf.jpg",
    "https://res.cloudinary.com/djiivo0r7/image/upload/v1773350200/IMG-20240328-WA0045_jzygqf.jpg",
    "https://res.cloudinary.com/djiivo0r7/image/upload/v1773350202/IMG-20240328-WA0050_ekcwmn.jpg",
    "https://res.cloudinary.com/djiivo0r7/image/upload/v1773350217/IMG_0568_k7mfoc.jpg",
    "https://res.cloudinary.com/djiivo0r7/image/upload/v1773350217/IMG_1194_nkfifp.jpg",
    "https://res.cloudinary.com/djiivo0r7/image/upload/v1773350215/IMG_0574_ldo9dk.jpg"
  ],
  video_preview: {
    video_src: "https://res.cloudinary.com/djiivo0r7/video/upload/v1773348542/AVISHKAR_2026_Promo_720p_caption_c99gn2.mp4",
    badges: [
      { position: "top-left", icon: "globe", text: "Global Entry" },
      { position: "top-right", icon: "cube", text: "Technical Expo" },
      { position: "bottom-left", icon: "diamond", text: "Innovation Award" },
      { position: "bottom-right", icon: "users", text: "Team Collaboration" }
    ]
  }
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

export const AvishkarEventPage = () => {
  const data = eventData;
  const [isAutoRotating, setIsAutoRotating] = useState(true);
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
      videoRef.current.currentTime = 0.5;
      setDuration(formatTime(videoRef.current.duration));
    }
  }, []);

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

      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 pt-28 pb-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-6">
          <div className="flex-1 min-w-0 lg:max-w-[50%]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-12 bg-[#f89b29] rounded-full"></div>
              <div className="flex items-center">
                <BlurIn
                  word={data.event_info.title}
                  className="text-4xl md:text-5xl font-black text-white tracking-tight text-left"
                />
                <img src="https://res.cloudinary.com/djiivo0r7/image/upload/v1773553850/__Rocket_Emoji__2_-removebg-preview_w56x6a.png" alt="rocket" className="ml-5 w-auto h-12 md:h-14 object-contain drop-shadow-[0_0_15px_rgba(248,155,41,0.5)]" />
              </div>
            </div>
            <p className="text-white/50 text-lg font-medium mb-8 pl-4">{data.event_info.subtitle}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {data.event_info.features.slice(0, 8).map(feature => (
                <div key={feature.id} className="flex items-center gap-0 bg-[#111111] border-2 border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#3a3a3a] transition-all duration-300 group cursor-default">
                  <div className="shrink-0 w-12 flex items-center justify-center py-3 px-2">
                    <span className="text-[#f89b29] font-black text-[15px] tracking-wider">{feature.id}</span>
                  </div>
                  <div className="shrink-0 w-[2px] h-[50%] bg-[#2a2a2a] group-hover:bg-[#3a3a3a] transition-colors rounded-full"></div>
                  <div className="flex-1 py-3 px-3">
                    <span className="text-white/90 text-[13px] leading-snug font-semibold">{feature.content}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 min-w-0 lg:max-w-[50%] flex flex-col items-center justify-center lg:pl-6">
            <div className="relative z-10 w-full max-w-[560px]">
              <div className="relative bg-[#181818] rounded-t-2xl border-t-2 border-x-2 border-[#333] p-3 shadow-[0_0_60px_rgba(0,0,0,0.6)]">
                <div className="relative w-full aspect-video bg-black rounded overflow-hidden border border-[#222] cursor-pointer" onMouseEnter={() => isPlaying && setShowControls(true)} onMouseLeave={() => setShowControls(false)}>
                  <video ref={videoRef} src={data.video_preview.video_src} className="w-full h-full object-cover" muted={isMuted} loop playsInline preload="metadata" onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata} />
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 group/play" onClick={togglePlay}>
                      <div className="absolute w-24 h-24 rounded-full border-2 border-white/20 opacity-0 group-hover/play:opacity-100" style={{ animation: 'playRadiate 2s ease-out infinite' }}></div>
                      <button className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] bg-white text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20">
                        <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </button>
                    </div>
                  )}
                  {isPlaying && (
                    <div className={`absolute bottom-0 left-0 right-0 z-30 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                      <div ref={progressRef} className="w-full h-1.5 bg-white/20 cursor-pointer hover:h-2 transition-all" onMouseDown={handleProgressMouseDown}>
                        <div className="h-full bg-[#f89b29]" style={{ width: `${progress}%` }}></div>
                      </div>
                      <div className="flex items-center gap-4 px-3 py-2 bg-black/60">
                        <button onClick={togglePlay} className="text-white hover:text-[#f89b29] transition-colors">{isPlaying ? <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg> : <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>}</button>
                        <button onClick={toggleMute} className="text-white hover:text-[#f89b29] transition-colors">{isMuted ? <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" /></svg> : <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" /></svg>}</button>
                        <span className="text-[12px] font-mono text-white/70">{currentTime} / {duration}</span>
                      </div>
                    </div>
                  )}
                </div>
                {data.video_preview.badges.map((badge, idx) => {
                  const posMap = { "top-left": "-top-6 -left-4 lg:-left-10", "top-right": "-top-6 -right-4 lg:-right-10", "bottom-left": "-bottom-4 -left-4 lg:-left-10", "bottom-right": "-bottom-4 -right-4 lg:-right-10" };
                  const floatAnims = ['floatBadge1 3s infinite', 'floatBadge2 3.5s infinite 0.3s', 'floatBadge3 4s infinite 0.6s', 'floatBadge4 3.2s infinite 0.9s'];
                  return (
                    <div key={idx} className={`hidden md:flex absolute z-20 ${posMap[badge.position]} bg-black border border-white/20 rounded-full px-4 py-2 items-center gap-2 text-white text-[12px] font-bold shadow-xl whitespace-nowrap`} style={{ animation: floatAnims[idx % 4] }}>
                      <IconBadge iconType={badge.icon} />
                      {badge.text}
                    </div>
                  );
                })}
              </div>
              <div className="relative w-[108%] -ml-[4%] h-5 bg-[#222] rounded-b-xl border-x-2 border-b-2 border-[#333] flex justify-center items-start">
                <div className="w-24 h-1.5 bg-[#111] rounded-b-sm"></div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <a href={data.event_info.brochure_url} download>
                <Button neon={true} className="px-10 py-3 text-[16px] font-bold flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Download Brochure
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 py-14">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-9 bg-[#f89b29] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-black text-white ">Our Mission</h2>
          </div>
          <div className="w-full h-[2px] bg-[#222] ml-4"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {data.mission.map(m => {
            const isFoundation = m.icon === 'target';
            const themeColor = isFoundation ? '#f89b29' : '#2dd4bf';
            return (
              <div key={m.id} className="bg-[#0a0a0a] border-2 border-[#222] rounded-2xl p-6 transition-colors hover:border-[#333]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#f89b29]/10 border-2 border-[#f89b29]/40">
                    {m.icon === 'target' ? (
                      <svg className="w-5 h-5" fill="none" stroke="#f89b29" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                        <circle cx="12" cy="12" r="6" strokeWidth="2" />
                        <circle cx="12" cy="12" r="2" strokeWidth="2" />
                      </svg>
                    ) : m.icon === 'rocket' ? (
                      <svg className="w-5 h-5" fill="none" stroke="#2dd4bf" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                        <path d="M9 12H4s.5-1 1-4c1.5 0 3 .5 3 .5L12 3c.5 3 1.5 5.5 3 5.5 0 2-1 3.5-3 4" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="#2dd4bf" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-[14px] font-bold tracking-[0.15em] uppercase" style={{ color: themeColor }}>{m.title}</h3>
                </div>
                <div className="w-full h-[2px] mb-5" style={{ background: `${themeColor}30` }}></div>
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

      {/* Learnings Section */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 py-14">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-9 bg-[#f89b29] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-black text-white ">{data.learnings.title}</h2>
          </div>
          <div className="w-full h-[2px] bg-[#222] ml-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-left">
          {data.learnings.items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-[#0a0a0a] rounded-xl px-4 py-3 border border-[#222] hover:border-[#333] transition-colors min-w-0">
              <div className="w-5 h-5 rounded-[6px] bg-[#f89b29] flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-white/80 text-[13px] md:text-[14px] font-medium truncate">{item}</span>
            </div>
          ))}
        </div>
        <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-6 md:p-8 mt-8 text-left">
          <ul className="space-y-4">
            {data.learnings.description.map((desc, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f89b29] mt-[9px] shrink-0"></div>
                <span className="text-[15px] text-white/80 font-medium leading-relaxed">{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Perks Section */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 py-14">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-9 bg-[#f89b29] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-black text-white ">Perks & Benefits</h2>
          </div>
          <div className="w-full h-[2px] bg-[#222] ml-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {data.perks.items.map((perk, i) => (
            <div key={i} className="flex items-center gap-4 bg-[#0a0a0a] border border-[#222] rounded-xl px-4 py-3.5 hover:border-[#333] transition-colors relative group">
              <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0" style={{ background: `${perk.color}15`, color: perk.color }}>
                <IconBadge iconType={perk.icon} />
              </div>
              <span className="text-[14px] font-medium text-white/80 leading-snug">{perk.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Mentors Section */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 py-14">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-9 bg-[#f89b29] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-black text-white  tracking-wider">Event Lead</h2>
          </div>
          <div className="w-full h-[2px] bg-[#222] ml-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {data.mentors.map((mentor) => (
            <div key={mentor.id} className="bg-[#0a0a0a] border border-[#222] rounded-3xl p-6 flex flex-col items-center hover:border-[#333] transition-colors relative group">
              <img src={mentor.image} alt={mentor.name} className="w-24 h-24 rounded-full object-cover object-top mb-4 shadow-lg border-2 border-[#333]" />
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">{mentor.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Certificate Section */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 py-14">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-9 bg-[#f89b29] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-black text-white ">Event Certificate</h2>
          </div>
          <div className="w-full h-[2px] bg-[#222] ml-4"></div>
        </div>
        <div className="bg-[#12100e] border border-[#2a2218] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-10 items-center justify-between shadow-2xl relative overflow-hidden text-left">
          <div className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-[#2a1a08] to-transparent opacity-40 pointer-events-none"></div>
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
          <div className="w-full md:w-[60%] lg:w-[55%] relative z-10 flex justify-end">
            <img src="https://res.cloudinary.com/djiivo0r7/image/upload/v1773297935/Blue_Modern_Achievement_Certificate_A4_Landscape.jpg_1_ud186o.jpg" alt="Course Certificate" className="w-full h-auto object-cover rounded-xl shadow-2xl border-[4px] border-[#1a1a1a]" />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 py-14">
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-3 mb-3 bg-[#f89b29]/5 px-6 py-2 rounded-full border border-[#f89b29]/20">
            <div className="w-1 h-6 bg-[#f89b29] rounded-full"></div>
            <h2 className="text-xl md:text-2xl font-black text-white tracking-wider">Event Gallery</h2>
          </div>
          <p className="text-white/40 text-sm mt-4 max-w-2xl italic">Capturing the spirit of innovation — witness the incredible projects and DIY creations showcased at Avishkar 2K25.</p>
        </div>
        <div className="relative group">
          <ThreeDPhotoCarousel images={data.gallery} autoRotate={isAutoRotating} />
        </div>
      </section>

      <EventParticipantsExperience
        testimonials={[
          {
            name: 'Rohan',
            year: 'B.Tech 3rd Year',
            branch: 'ECE',
            image: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773370133/WhatsApp_Image_2026-03-12_at_19.29.16-removebg-preview_taq8oh.png',
            content: 'Avishkar provided the perfect stage to showcase my DIY drone project. The queries from the judges were challenging and helped me refine my technical approach.',
            college: 'Mohan Babu University',
            logo: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773269951/mohn_babu-removebg-preview_rzn8tu.png'
          },
          {
            name: 'Anvitha',
            year: 'B.Tech 2nd Year',
            branch: 'ECE',
            image: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773395957/WhatsApp_Image_2026-03-12_at_19.29.20-removebg-preview_1_iyqsak.png',
            content: 'I loved the hands-on nature of the event. Presenting our working model physically and getting direct feedback from experts was an invaluable experience.',
            college: 'Bharath Institute of Technology',
            logo: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773269944/bharath_college-removebg-preview_kixrek.png'
          },
          {
            name: 'Vijay',
            year: 'B.Tech 4th Year',
            branch: 'CSE',
            image: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773373463/WhatsApp_Image_2026-03-12_at_19.29.19-removebg-preview_k4snap.png',
            content: 'Integrating AI into our hardware prototype for Avishkar was a great learning curve. The quality of projects from other teams was truly inspiring.',
            college: 'SITAMS, Chittoor',
            logo: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773269960/SITAMS-removebg-preview_uy6z3f.png'
          },
          {
            name: 'Deepika',
            year: 'B.Tech 3rd Year',
            branch: 'ECE',
            image: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773373634/WhatsApp_Image_2026-03-12_at_19.29.20__2_-removebg-preview_no93kf.png',
            content: 'Avishkar is not just an expo; it\'s a celebration of engineering craft. Winning recognition here has boosted my confidence in pursuing embedded systems.',
            college: 'SVCE, Tirupati',
            logo: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773269966/svce-removebg-preview_uh1mhu.png'
          }
        ]}
      />

      {/* FAQ Section */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 py-20 mb-20 text-left">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-9 bg-[#f89b29] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-black text-white ">Frequently Asked Questions</h2>
          </div>
          <div className="w-full h-[2px] bg-[#222] ml-4"></div>
        </div>
        <div className="w-full">
          {data.faqs.map(faq => <FaqItem key={faq.id} q={faq.question} a={faq.answer} />)}
        </div>
      </section>

    </div>
  );
};

export default AvishkarEventPage;
