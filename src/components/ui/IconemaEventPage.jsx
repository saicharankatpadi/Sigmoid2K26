import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BlurIn } from './blur-in.jsx';
import { EventParticipantsExperience } from './EventParticipantsExperience';
import { ThreeDPhotoCarousel } from './3d-carousel.jsx';
import { Button } from './neon-button.jsx';

const eventData = {
  "event_info": {
    "title": "Iconema",
    "emoji": "🎬",
    "subtitle": "Observation, Knowledge & Teamwork",
    "brochure_url": "/ICONEMA_BROCHURE.pdf",
    "features": [
      { "id": "01", "content": "Test your situational awareness through cinematic observation." },
      { "id": "02", "content": "Challenge your familiarity with the digital landscape." },
      { "id": "03", "content": "Engage in a thrilling race against time." },
      { "id": "04", "content": "Work in a team environment to solve complex riddles." }
    ]
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
      "Showcase your ability to spot subtle details in cinematic sequences.",
      "Identify global brands and digital icons with lightning speed.",
      "Solve intricate puzzles that require both logic and creativity.",
      "Strengthen team collaboration under high-pressure competitive scenarios."
    ]
  },
  "perks": {
    "title": "Perks & Benefits",
    "items": [
      { "text": "Participation Certificate", "icon": "academic", "color": "#ec4899" },
      { "text": "Exciting Cash Rewards", "icon": "diamond", "color": "#f89b29" },
      { "text": "Peer Networking", "icon": "users", "color": "#10B981" },
      { "text": "Analytical Skills", "icon": "briefcase", "color": "#a855f7" }
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
      "name": "V . KAVYA",

      "image": "https://res.cloudinary.com/djiivo0r7/image/upload/v1773521280/WhatsApp_Image_2026-03-11_at_23.52.50_1_dsoax4.jpg",
      "phone": "+91 96526 10402",
      "instagram": "",
      "linkedin": ""
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

const IconBadgeLocal = ({ iconType }) => {
  switch (iconType) {
    case 'video': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;
    case 'cube': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;
    case 'diamond': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
    case 'users': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
    case 'academic': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>;
    case 'briefcase': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
    case 'linkedin': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" stroke="none" fill="currentColor" /></svg>;
    case 'target': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2" /><circle cx="12" cy="12" r="6" strokeWidth="2" /><circle cx="12" cy="12" r="2" strokeWidth="2" /></svg>;
    case 'rocket': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
    default: return null;
  }
};

const ThreeDGallery = ({ images }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden perspective-1000">
      <div className="relative w-full max-w-[800px] aspect-[16/9] flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          {images.map((img, i) => {
            const offset = (i - index + images.length) % images.length;
            const isCenter = offset === 0;
            const isLeft = offset === images.length - 1;
            const isRight = offset === 1;

            if (!isCenter && !isLeft && !isRight) return null;

            return (
              <motion.div
                key={img}
                className="absolute w-[300px] md:w-[500px] aspect-video rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl"
                initial={false}
                animate={{
                  x: isCenter ? 0 : isLeft ? -250 : 250,
                  scale: isCenter ? 1 : 0.8,
                  rotateY: isCenter ? 0 : isLeft ? 45 : -45,
                  zIndex: isCenter ? 10 : 5,
                  opacity: isCenter ? 1 : 0.4,
                }}
                transition={{ duration: 0.6, ease: "circOut" }}
                onClick={() => setIndex(i)}
                style={{ cursor: 'pointer' }}
              >
                <img src={img} alt="Gallery" className="w-full h-full object-cover" />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        <button
          onClick={() => setIndex((index - 1 + images.length) % images.length)}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#ff8a1f]/20 border border-white/10 flex items-center justify-center transition-all"
        >
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
        </button>
        <button
          onClick={() => setIndex((index + 1) % images.length)}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#ff8a1f]/20 border border-white/10 flex items-center justify-center transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
};

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
      {open && <div className="px-5 pb-5 pt-0 text-white/60 text-[14px] leading-relaxed">{a}</div>}
    </div>
  );
};

export const IconemaEventPage = () => {
  const data = eventData;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [showControls, setShowControls] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const videoRef = useRef(null);
  const progressRef = useRef(null);

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
    <div className="min-h-screen bg-[#000000] text-white font-sans overflow-x-hidden selection:bg-[#ff8a1f] selection:text-black">



      <style>{`
        @keyframes floatBadge1 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes floatBadge2 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes floatBadge3 { 0%,100% { transform: translateY(-4px); } 50% { transform: translateY(6px); } }
        @keyframes floatBadge4 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes playRadiate {
          0% { opacity: 0.5; transform: scale(1); }
          100% { opacity: 0; transform: scale(2.5); }
        }
      `}</style>

      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 pt-28 pb-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-6">
          {/* Left Column */}
          <div className="flex-1 min-w-0 lg:max-w-[50%]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-12 bg-[#ff8a1f] rounded-full"></div>
              <div className="flex items-center">
                <BlurIn word={data.event_info.title} className="text-4xl md:text-5xl font-black text-white tracking-tight text-left" />
                <span className="text-3xl lg:text-4xl ml-3 lg:ml-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">{data.event_info.emoji}</span>
              </div>
            </div>
            <p className="text-white/50 text-lg font-medium mb-8 pl-4">{data.event_info.subtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {data.event_info.features.map(feature => (
                <div key={feature.id} className="flex items-center gap-0 bg-[#111111] border-2 border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#3a3a3a] transition-all duration-300 group cursor-default">
                  <div className="shrink-0 w-12 flex items-center justify-center py-3 px-2">
                    <span className="text-[#ff8a1f] font-black text-[15px] tracking-wider">{feature.id}</span>
                  </div>
                  <div className="flex items-center self-stretch">
                    <div className="w-[2px] h-[50%] bg-[#2a2a2a] group-hover:bg-[#3a3a3a] transition-colors rounded-full"></div>
                  </div>
                  <div className="flex-1 py-3 px-3 overflow-hidden">
                    <span className="text-white/90 text-[13px] leading-snug font-semibold line-clamp-2 md:line-clamp-none">{feature.content}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Laptop Mockup */}
          <div className="flex-1 min-w-0 lg:max-w-[50%] flex flex-col items-center justify-center lg:pl-6">
            <div className="relative z-10 w-full max-w-[560px]">
              <div className="relative bg-[#181818] rounded-t-2xl border-t-2 border-x-2 border-[#333] p-3 shadow-[0_0_60px_rgba(0,0,0,0.6)]">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#444]"></div>
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
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                  />
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 group/play" onClick={togglePlay}>
                      <div className="absolute w-24 h-24 rounded-full border-2 border-white/20 opacity-0 group-hover/play:opacity-100" style={{ animation: 'playRadiate 2s ease-out infinite' }}></div>
                      <div className="absolute w-24 h-24 rounded-full border-2 border-white/15 opacity-0 group-hover/play:opacity-100" style={{ animation: 'playRadiate 2s ease-out infinite 0.6s' }}></div>
                      <div className="absolute w-24 h-24 rounded-full border-2 border-white/10 opacity-0 group-hover/play:opacity-100" style={{ animation: 'playRadiate 2s ease-out infinite 1.2s' }}></div>
                      <button className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] bg-white/90 rounded-full flex items-center justify-center border-[3px] border-white transition-all duration-300 hover:scale-110 z-20 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </button>
                    </div>
                  )}
                  {isPlaying && (
                    <div className={`absolute bottom-0 left-0 right-0 z-30 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`} onMouseEnter={() => setShowControls(true)}>
                      <div ref={progressRef} className="w-full h-1.5 bg-white/20 cursor-pointer group/progress hover:h-2.5 transition-all" onMouseDown={handleProgressMouseDown}>
                        <div className="h-full bg-[#ff8a1f] relative" style={{ width: `${progress}%` }}>
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#ff8a1f] opacity-0 group-hover/progress:opacity-100 transition-opacity shadow-md border border-white/30"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2 bg-gradient-to-t from-black/80 to-black/40">
                        <button onClick={(e) => { e.stopPropagation(); togglePlay(); }} className="text-white hover:text-white/80 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            {isPlaying ? <><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></> : <path d="M8 5v14l11-7z" />}
                          </svg>
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); toggleMute(); }} className="text-white hover:text-white/80 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            {isMuted ? <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" /> : <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />}
                          </svg>
                        </button>
                        <span className="text-white/70 text-[12px] font-mono ml-1">{currentTime} / {duration}</span>
                      </div>
                    </div>
                  )}
                </div>
                {data.video_preview.badges.map((badge, idx) => {
                  const posMap = { "top-left": "-top-6 -left-4 lg:-left-10", "top-right": "-top-6 -right-4 lg:-right-10", "bottom-left": "-bottom-4 -left-4 lg:-left-10", "bottom-right": "-bottom-4 -right-4 lg:-right-10", "top-center": "-top-12 left-1/2 -translate-x-1/2" };
                  const floatAnims = ['floatBadge1 3s ease-in-out infinite', 'floatBadge2 3.5s ease-in-out infinite 0.3s', 'floatBadge3 4s ease-in-out infinite 0.6s', 'floatBadge4 3.2s ease-in-out infinite 0.9s'];
                  return (
                    <div key={idx} className={`hidden md:flex absolute z-20 ${posMap[badge.position]} bg-[#0c0c0c] border-2 border-[#2a2a2a] rounded-full px-5 py-2.5 items-center gap-2.5 text-white text-[14px] font-bold shadow-[0_8px_32px_rgba(0,0,0,0.6)] whitespace-nowrap cursor-default`} style={{ animation: floatAnims[idx % 4] }}>
                      <IconBadgeLocal iconType={badge.icon} />
                      {badge.text}
                    </div>
                  )
                })}
              </div>
              <div className="relative w-[108%] -ml-[4%] h-6 bg-[#272727] rounded-b-xl border-2 border-[#333] flex justify-center items-start shadow-2xl z-0">
                <div className="w-28 h-2 bg-[#181818] rounded-b-sm"></div>
              </div>
            </div>
            <div className="mt-12">
              <a href={data.event_info.brochure_url} download className="inline-block">
                <Button variant="default" size="lg" neon={true} className="bg-black text-white border-white/20 hover:bg-white/5 hover:border-white/40 px-10 py-3 text-[16px] font-bold flex items-center gap-3 cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Download Brochure
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 py-14">
        <div className="mb-7">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-9 bg-[#ff8a1f] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-black text-white">Our Mission</h2>
          </div>
          <div className="w-full h-[2px] bg-[#222] ml-4"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {data.mission.map(m => (
            <div key={m.id} className="bg-[#0a0a0a] border-2 border-[#222] rounded-2xl p-6 transition-colors hover:border-[#333]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#ff8a1f]/10 border-2 border-[#ff8a1f]/40">
                  <IconBadgeLocal iconType={m.icon} />
                </div>
                <h3 className="text-[14px] font-bold tracking-[0.15em] text-[#ffb347]">{m.title}</h3>
              </div>
              <div className="w-full h-[2px] mb-5 bg-[#ff8a1f]/30"></div>
              <ul className="space-y-3.5">
                {m.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0 bg-[#ff8a1f]"></div>
                    <span className="text-[14px] text-white/60 leading-relaxed overflow-hidden">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Evaluated */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 py-14">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-9 bg-[#ff8a1f] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-black text-white">{data.learnings.title}</h2>
          </div>
          <div className="w-full h-[2px] bg-[#222] ml-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-left">
          {data.learnings.items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-[#0a0a0a] rounded-xl px-4 py-3 border border-[#222] hover:border-[#333] transition-colors min-w-0">
              <div className="w-5 h-5 rounded-[6px] bg-[#ff8a1f] flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-white/80 text-[13px] md:text-[14px] font-medium truncate">{item}</span>
            </div>
          ))}
        </div>
        <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-6 md:p-8 text-left mt-8">
          <ul className="space-y-4">
            {data.learnings.description.map((desc, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff8a1f] mt-[9px] shrink-0"></div>
                <span className="text-[15px] text-white/80 font-medium leading-relaxed">{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 py-14">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-9 bg-[#ff8a1f] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-black text-white">{data.perks.title}</h2>
          </div>
          <div className="w-full h-[2px] bg-[#222] ml-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.perks.items.map((perk, i) => (
            <div key={i} className="flex items-center gap-4 bg-[#0a0a0a] border border-[#222] rounded-xl px-4 py-3.5 hover:border-[#333] transition-colors relative group">
              <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0" style={{ background: `${perk.color}15`, color: perk.color }}>
                <IconBadgeLocal iconType={perk.icon} />
              </div>
              <span className="text-[14px] font-medium text-white/80 leading-snug">{perk.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Rules */}
      <section className="relative max-w-[1400px] mx-auto px-8 lg:px-12 py-14 text-left">
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

      {/* Event Lead Section */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 py-14">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-9 bg-[#ff8a1f] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-black text-white">Event Lead</h2>
          </div>
          <div className="w-full h-[2px] bg-[#222] ml-4"></div>
        </div>
        <div className="flex flex-col items-center justify-center mt-6">
          {data.mentors.map((mentor) => (
            <div key={mentor.id} className="bg-[#0a0a0a] border border-[#222] rounded-3xl p-8 flex flex-col items-center hover:border-[#333] transition-colors relative group max-w-sm w-full">
              <img src={mentor.image} alt={mentor.name} className="w-32 h-32 rounded-full object-cover object-top mb-4 shadow-[0_0_20px_rgba(0,0,0,0.5)] border-2 border-[#333]" />
              <h3 className="text-xl font-bold text-white mb-2 tracking-wider uppercase">{mentor.name}</h3>
              <p className="text-[#ff8a1f] font-bold text-sm uppercase tracking-widest">{mentor.role}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Participation Certificate Section */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12 py-14">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-9 bg-[#ff8a1f] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-black text-white">Event Certificate</h2>
          </div>
          <div className="w-full h-[2px] bg-[#222] ml-4"></div>
        </div>
        <div className="bg-[#12100e] border border-[#2a2218] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-10 items-center justify-between shadow-2xl relative overflow-hidden text-left">
          <div className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-[#2a1a08] to-transparent opacity-40 pointer-events-none"></div>
          <div className="flex-1 w-full relative z-10 lg:pl-4">
            <div className="relative mb-8 text-left">
              <img src="https://res.cloudinary.com/djiivo0r7/image/upload/v1773514921/certificate-ribbon__2_-removebg-preview_hnasix.png" alt="Ribbon" className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_0_15px_rgba(248,155,41,0.4)]" />
              <h3 className="text-[28px] md:text-[34px] leading-[1.2] font-semibold text-white/90 tracking-[-0.01em] relative z-10">
                Official <span className="text-[#ff8a1f] font-bold">Participation</span> Certificate
                <img src="/rocket-icon.png" alt="Rocket" className="inline-block w-8 h-8 ml-3 -mt-2 align-middle object-contain" />
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70">
                <IconBadgeLocal iconType="academic" />
                <span className="text-[14px]">Add this certificate to your Resume!</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <IconBadgeLocal iconType="linkedin" />
                <span className="text-[14px]">Share it with your LinkedIn network 🚀</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[60%] lg:w-[55%] relative z-10 flex justify-end">
            <div className="relative w-full">
              <img
                src="https://res.cloudinary.com/djiivo0r7/image/upload/v1773297935/Blue_Modern_Achievement_Certificate_A4_Landscape.jpg_1_ud186o.jpg"
                alt="Participation Certificate"
                className="w-full h-auto object-cover rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] border-[4px] border-[#1a1a1a]"
              />
            </div>
          </div>
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
