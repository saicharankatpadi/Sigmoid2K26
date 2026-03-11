import { useState, useEffect, useRef } from 'react'

import v1 from '../assets/testimonials/v1.mp4'
import v2 from '../assets/testimonials/v2.mp4'
import v3 from '../assets/testimonials/v3.mp4'
import v4 from '../assets/testimonials/v4.mp4'
import v5 from '../assets/testimonials/v5.mp4'
import v6 from '../assets/testimonials/v6.mp4'

/* ════════════════════════════════════════════════════════════════
   TESTIMONIALS DATA — Edit this JSON to add / remove / modify cards.
   Each item is either a "text" card or a "video" card.
   ════════════════════════════════════════════════════════════════ */

// Avatar colour palette — cycles automatically
const AVATAR_PALETTE = [
    '#2563EB', '#7C3AED', '#DB2777', '#D97706', '#059669',
    '#DC2626', '#0891B2', '#65A30D', '#9333EA', '#EA580C',
]

// Video-card background gradients
const VIDEO_GRADIENTS = [
    'linear-gradient(145deg,#12172a,#1e2d4a)',
    'linear-gradient(145deg,#0d1117,#1a2035)',
    'linear-gradient(145deg,#15102a,#2a1840)',
    'linear-gradient(145deg,#10180e,#1a2e18)',
    'linear-gradient(145deg,#1a150e,#2e2015)',
]

/* ── TOP ROW cards (scrolls left) ── */
const TOP_ROW = [
    {
        type: 'text',
        name: 'Shubham Tandon',
        text: "Hey Striver, I just wanted to send a huge thank you for your amazing A2Z DSA sheet. It was the most important resource in my preparation. Because of your sheet, I was able to crack my on campus interviews and I have just accepted an internship offer...",
        role: 'Full Stack Engineer Intern',
        college: { name: 'Coforge', logo: '🎓' },
    },
    {
        type: 'text',
        name: 'Rohit Sharma',
        text: "Getting selected as an SDE Intern at Amazon has been one of the biggest milestones of my journey so far and I owe a huge part of it to TUF+ and Striver.\nWhen I started my preparation, struggled with consistency and direction. That was when I...",
        role: 'SDE 1 Intern',
        college: { name: 'Amazon', logo: '📦' },
    },
    {
        type: 'video',
        name: 'Satyam Vyas',
        videoGradient: VIDEO_GRADIENTS[0],
        videoUrl: v1
    },
    {
        type: 'text',
        name: 'Anusha Jha',
        text: "My journey truly began in the third year of my college. As the General Secretary, I was deeply involved in extracurricular activities, but that also meant I lacked consistency in DSA practice even though my computer science fundamentals were strong...",
        role: 'ADMM(Application and Data Modernization) and Migration/Analyst',
        college: { name: 'Deloitte', logo: '💡' },
    },
    {
        type: 'text',
        name: 'Vishnupriya',
        text: "When I started college, I was initially more drawn to the management domain, as I believed the software field might not be the right fit for me. I explored consulting for a while, but I soon realized it did not excite me, as it lacked the constant...",
        role: 'Software Developer Intern',
        college: { name: 'Morgan Stanley', logo: '🏦' },
    },
    {
        type: 'text',
        name: 'Arjun Verma',
        text: "The mock interviews and curated problem sets are what set this apart from everything else I tried. I went from struggling with basic data structures to confidently solving hard problems in under 6 months...",
        role: 'Backend Engineer',
        college: { name: 'Google', logo: '🔍' },
    },
    {
        type: 'text',
        name: 'Sneha Iyer',
        text: "I had always struggled with system design concepts until I found this platform. The way concepts are broken down made all the difference. Within 3 months I cracked my dream company interview completely...",
        role: 'Systems Engineer',
        college: { name: 'Microsoft', logo: '🖥️' },
    },
    {
        type: 'video',
        name: 'Karthik Nair',
        videoGradient: VIDEO_GRADIENTS[1],
        videoUrl: v2
    },
    {
        type: 'text',
        name: 'Divya Reddy',
        text: "Coming from a non-CS background, I was terrified of DSA. But the beginner-friendly approach here made it accessible. The community support was incredible and I landed my first tech role within a year...",
        role: 'Product Engineer',
        college: { name: 'Swiggy', logo: '🍊' },
    },
    {
        type: 'text',
        name: 'Tanvi Singh',
        text: "A big thank you for the DSA sheet. It helped me get into the program and land an internship. The A2Z DSA sheet helped me stay consistent and structured. The preparation approach here is truly unmatched in quality...",
        role: 'Data Analyst',
        college: { name: 'Flipkart', logo: '🛍️' },
    },
    {
        type: 'text',
        name: 'Rahul Gupta',
        text: "The contest feature keeps me motivated every single day. My problem-solving speed has improved drastically and I recently cracked 3 interviews back to back at top product companies...",
        role: 'Software Engineer',
        college: { name: 'Adobe', logo: '🎨' },
    },
    {
        type: 'video',
        name: 'Priya Menon',
        videoGradient: VIDEO_GRADIENTS[2],
        videoUrl: v3
    },
    {
        type: 'text',
        name: 'Vikram Joshi',
        text: "It helped me practice DSA in a fully structured way without wasting time. The clear path, quality problems, and focused approach strengthened my role as a Software Engineer. I cannot thank this platform enough...",
        role: 'SDE Intern',
        college: { name: 'Infosys', logo: '⚙️' },
    },
]

/* ── BOTTOM ROW cards (scrolls right) ── */
const BOTTOM_ROW = [
    {
        type: 'text',
        name: 'Ganesh Patil',
        text: "I received offers from LTIMindtree, and I am more grateful for the path that brought me here. My journey was not easy. Staying on track with DSA, system design, and DBMS preparation was tough, but...",
        role: 'SDE 2 Backend',
        college: { name: 'LTIMindtree', logo: '💻' },
    },
    {
        type: 'text',
        name: 'Jeet Undaviya',
        text: "TUF+ helped me practice DSA in a fully structured way without wasting time. The clear path, quality problems, and focused approach strengthened my preparation. It played a major role in helping me secure my role as a Software Engineer at Oracle.",
        role: 'Software Engineer',
        college: { name: 'Oracle', logo: '🔴' },
    },
    {
        type: 'video',
        name: 'Subhajit Raha',
        videoGradient: VIDEO_GRADIENTS[0],
        videoUrl: v4
    },
    {
        type: 'text',
        name: 'Abilaash S. S',
        text: "My journey with takeUforward has been nothing short of transformational. When I started preparing for interviews, I was struggling with DSA concepts and felt overwhelmed by the sheer volume of problems to solve.\nStriver's explanations were a game...",
        role: 'Software Development Engineer',
        college: { name: 'JPMorgan', logo: '🏛️' },
    },
    {
        type: 'video',
        name: 'Rohit Sharma',
        videoGradient: VIDEO_GRADIENTS[3],
        videoUrl: v5
    },
    {
        type: 'text',
        name: 'Meera Pillai',
        text: "The structured learning path completely changed how I approach problem solving. Every concept builds on the previous one, which makes even complex topics feel manageable. Truly a game changer for my career...",
        role: 'Full Stack Developer',
        college: { name: 'Paypal', logo: '💳' },
    },
    {
        type: 'text',
        name: 'Saurabh Mishra',
        text: "I went from zero knowledge of DSA to cracking top product company interviews within 8 months. The roadmap made sure I never wasted time on unnecessary topics. Highly recommend to anyone starting their journey...",
        role: 'Assistant Software Development Engineer',
        college: { name: 'Walmart', logo: '🏪' },
    },
    {
        type: 'text',
        name: 'Ananya Das',
        text: "The A2Z DSA course was a lifesaver during my placement prep. The video explanations with code walkthroughs helped me understand not just the 'how' but also the 'why' behind every approach...",
        role: 'Software Engineer',
        college: { name: 'Razorpay', logo: '💰' },
    },
    {
        type: 'text',
        name: 'Nikhil Choudhary',
        text: "My journey truly began in the third year of my college. I lacked consistency in DSA practice even though my computer science fundamentals were strong. This platform completely turned things around for me...",
        role: 'Backend Engineer',
        college: { name: 'Zomato', logo: '🍴' },
    },
    {
        type: 'text',
        name: 'Ritu Agarwal',
        text: "From brute force to optimal — every approach explained step by step. This is what made TUF different from any other platform I tried. The way each problem is broken down is simply brilliant...",
        role: 'SDE Intern',
        college: { name: 'Samsung', logo: '📱' },
    },
    {
        type: 'video',
        name: 'Aditya Kumar',
        videoGradient: VIDEO_GRADIENTS[4],
        videoUrl: v6
    },
    {
        type: 'text',
        name: 'Pooja Sharma',
        text: "What sets this platform apart is the community. Whenever I was stuck on a problem, I could find discussions and alternative approaches. The quality of content here is unmatched for placement preparation...",
        role: 'Product Engineer',
        college: { name: 'Atlassian', logo: '🔵' },
    },
]

/* ── Section header config ── */
const SECTION_CONFIG = {
    badgeText: '14,56,768+ Learners!',  // Change this to your count
    titleDimmed: 'Coders that',
    titleBold: 'turned around',
    titleBold2: 'their careers',
}

/* ════════════════════════════════════════════════════════════════
   HELPER FUNCTIONS
   ════════════════════════════════════════════════════════════════ */

function getInitials(name) {
    return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
}

function getAvatarColor(index) {
    return AVATAR_PALETTE[index % AVATAR_PALETTE.length]
}

/* ════════════════════════════════════════════════════════════════
   SUB-COMPONENTS
   ════════════════════════════════════════════════════════════════ */

function TextCard({ card, index }) {
    const [isExpanded, setIsExpanded] = useState(false);
    
    return (
        <div
            className={`w-72 rounded-2xl flex-shrink-0 flex flex-col gap-[13px] group ${isExpanded ? 'h-auto min-h-[380px]' : 'h-[380px]'}`}
            style={{
                background: '#191919',
                border: '1.5px solid rgba(255,255,255,0.055)',
                padding: '20px 18px 18px',
                transition: 'border-color 0.22s ease, box-shadow 0.22s ease, background 0.22s ease',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'
                e.currentTarget.style.boxShadow = '0 0 0 1px rgba(255,255,255,0.08), 0 0 0 3px rgba(255,255,255,0.04), 0 0 24px 6px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.5)'
                e.currentTarget.style.background = '#1e1e1e'
            }}
            onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.055)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.background = '#191919'
            }}
        >
            {/* Header: avatar + name + linkedin badge */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <div
                        className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                        style={{
                            background: getAvatarColor(index),
                            fontSize: '12.5px',
                            fontWeight: 700,
                            color: 'white',
                            letterSpacing: '0.4px',
                        }}
                    >
                        {getInitials(card.name)}
                    </div>
                    <span
                        className="font-semibold"
                        style={{
                            color: 'rgba(255,255,255,0.92)',
                            fontSize: '14.5px',
                            letterSpacing: '-0.015em',
                        }}
                    >
                        {card.name}
                    </span>
                </div>
            </div>

            {/* Body text */}
            <div
                className={`flex-1 relative ${!isExpanded ? 'overflow-hidden' : ''}`}
                style={{
                    color: 'rgba(255,255,255,0.66)',
                    fontSize: '13.5px',
                    lineHeight: 1.74,
                    fontWeight: 400,
                    letterSpacing: '-0.004em',
                }}
            >
                {/* 
                  If expanded, show all text. 
                  If collapsed, show masked text to simulate a fade out.
                */}
                <div 
                    className={!isExpanded ? 'line-clamp-6' : ''}
                    style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: isExpanded ? 'unset' : 6,
                        overflow: 'hidden'
                    }}
                >
                    {card.text.split('\n').map((line, i) => (
                        <span key={i}>
                            {line}
                            {i < card.text.split('\n').length - 1 && <br />}
                        </span>
                    ))}
                </div>
                
                {/* Button container ensures alignment */}
                <div className={isExpanded ? 'mt-2' : ''}>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="cursor-pointer hover:text-white mt-1 border-none bg-transparent p-0 text-left"
                        style={{
                            color: 'rgba(255,107,43,0.9)',
                            fontSize: '13.5px',
                            transition: 'color 0.15s',
                            fontWeight: 'bold',
                            fontFamily: 'inherit'
                        }}
                    >
                        {isExpanded ? 'Show less' : 'Read more'}
                    </button>
                </div>
            </div>

            {/* Footer: logo | divider | role & college */}
            <div
                className="flex items-center mt-auto"
                style={{
                    paddingTop: '13px',
                    borderTop: '1px solid rgba(255,255,255,0.055)',
                }}
            >
                <div
                    className="flex items-center justify-center shrink-0"
                    style={{
                        width: 34,
                        height: 34,
                        borderRadius: '7px',
                        background: '#242424',
                        border: '1px solid rgba(255,255,255,0.08)',
                        fontSize: '16px',
                    }}
                >
                    {card.college.logo}
                </div>
                <div
                    className="shrink-0"
                    style={{
                        width: 1,
                        height: 30,
                        background: 'rgba(255,255,255,0.1)',
                        margin: '0 12px',
                    }}
                />
                <div className="flex-1 min-w-0">
                    <div
                        className="truncate"
                        style={{
                            color: 'rgba(255,255,255,0.88)',
                            fontSize: '12.5px',
                            fontWeight: 600,
                            lineHeight: 1.3,
                            letterSpacing: '-0.012em',
                        }}
                    >
                        {card.role}
                    </div>
                    <div
                        style={{
                            color: 'rgba(255,255,255,0.32)',
                            fontSize: '11.5px',
                            fontWeight: 400,
                            marginTop: '2px',
                        }}
                    >
                        {card.college.name}
                    </div>
                </div>
            </div>
        </div>
    )
}

function VideoCard({ card, onClick }) {
    return (
        <div
            className="w-72 h-[380px] rounded-2xl overflow-hidden flex-shrink-0 relative cursor-pointer group"
            style={{
                border: '1.5px solid rgba(255,255,255,0.055)',
                transition: 'border-color 0.22s ease, box-shadow 0.22s ease',
                minHeight: '100%',
            }}
            onClick={() => onClick(card)}
            onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'
                e.currentTarget.style.boxShadow = '0 0 0 1px rgba(255,255,255,0.08), 0 0 0 3px rgba(255,255,255,0.04), 0 0 24px 6px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.5)'
            }}
            onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.055)'
                e.currentTarget.style.boxShadow = 'none'
            }}
        >
            {/* Background Video Preview */}
            <div
                className="w-full h-full flex items-center justify-center bg-black overflow-hidden relative"
                style={{ minHeight: '100%' }}
            >
                {card.videoUrl ? (
                    <video 
                        src={card.videoUrl} 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                ) : (
                    <div className="w-full h-full" style={{ background: card.videoGradient || VIDEO_GRADIENTS[0] }}>
                        <svg className="opacity-10 w-full h-full object-cover" viewBox="0 0 90 100" fill="white">
                            <circle cx="45" cy="32" r="20" />
                            <ellipse cx="45" cy="78" rx="32" ry="20" />
                        </svg>
                    </div>
                )}
            </div>

            {/* Play button */}
            <div
                className="absolute top-1/2 left-1/2 flex items-center justify-center group-hover:scale-110"
                style={{
                    transform: 'translate(-50%, -54%)',
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.13)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1.5px solid rgba(255,255,255,0.28)',
                    transition: 'background 0.2s, transform 0.2s',
                }}
            >
                <div
                    style={{
                        width: 0,
                        height: 0,
                        borderTop: '9px solid transparent',
                        borderBottom: '9px solid transparent',
                        borderLeft: '16px solid white',
                        marginLeft: 4,
                    }}
                />
            </div>

            {/* Name bar */}
            <div
                className="absolute bottom-3 left-3 inline-flex items-center gap-[7px]"
                style={{
                    background: 'rgba(22, 22, 22, 0.75)',
                    backdropFilter: 'blur(14px)',
                    WebkitBackdropFilter: 'blur(14px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 8,
                    padding: '6px 12px',
                    maxWidth: 'calc(100% - 24px)',
                }}
            >
                <span
                    className="truncate"
                    style={{
                        color: 'rgba(255,255,255,0.92)',
                        fontWeight: 500,
                        fontSize: 13,
                        letterSpacing: '-0.008em',
                    }}
                >
                    {card.name}
                </span>
            </div>
        </div>
    )
}

function TestimonialModal({ isOpen, card, onClose }) {
    useEffect(() => {
        const handleEsc = e => { if (e.key === 'Escape') onClose() }
        if (isOpen) document.addEventListener('keydown', handleEsc)
        return () => document.removeEventListener('keydown', handleEsc)
    }, [isOpen, onClose])

    if (!isOpen || !card) return null

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{
                background: 'rgba(0,0,0,0.84)',
                animation: 'mFade 0.18s ease',
            }}
            onClick={e => { if (e.target === e.currentTarget) onClose() }}
        >
            <div
                className="relative w-[92%] max-w-[596px] overflow-hidden"
                style={{
                    background: '#1a1a1a',
                    borderRadius: 18,
                    border: '1px solid rgba(255,255,255,0.1)',
                    animation: 'mScale 0.25s cubic-bezier(0.22,1,0.36,1)',
                }}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-2.5 right-2.5 w-[30px] h-[30px] rounded-full flex items-center justify-center border-none cursor-pointer z-[2] hover:bg-white/20"
                    style={{
                        background: 'rgba(255,255,255,0.1)',
                        color: 'white',
                        fontSize: 14,
                        transition: 'background 0.15s',
                    }}
                >
                    ✕
                </button>

                {/* Content area */}
                <div
                    className={`w-full flex items-center justify-center ${card.type === 'video' ? 'bg-black' : 'bg-[#191919]'}`}
                    style={{
                        aspectRatio: card.type === 'video' ? '16/9' : 'auto',
                        minHeight: card.type === 'text' ? '300px' : 'auto',
                        padding: card.type === 'text' ? '40px 32px' : '0'
                    }}
                >
                    {card.type === 'video' ? (
                        card.videoUrl ? (
                            <video 
                                src={card.videoUrl} 
                                controls 
                                autoPlay 
                                className="w-full h-full"
                            />
                        ) : (
                            <span style={{ color: 'rgba(255,255,255,0.14)', fontSize: 13 }}>▶ Video Testimonial</span>
                        )
                    ) : (
                        <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', lineHeight: 1.8 }}>
                            {card.text.split('\n').map((line, i) => (
                                <span key={i}>
                                    {line}
                                    {i < card.text.split('\n').length - 1 && <br />}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div
                    className="flex items-center gap-2"
                    style={{
                        padding: '13px 16px 15px',
                        borderTop: '1px solid rgba(255,255,255,0.07)',
                    }}
                >
                    <span className="font-semibold text-white" style={{ fontSize: 14 }}>{card.name}</span>
                    <span
                        className="shrink-0 font-bold"
                        style={{
                            background: '#0A66C2',
                            borderRadius: 5,
                            padding: '2px 7px',
                            fontSize: 11,
                            color: 'white',
                        }}
                    >
                        in
                    </span>
                </div>
            </div>
        </div>
    )
}

/* ════════════════════════════════════════════════════════════════
   SCROLLING TRACK
   ════════════════════════════════════════════════════════════════ */

function ScrollTrack({ cards, direction, onVideoClick }) {
    const trackRef = useRef(null)

    // Duplicate cards for seamless loop
    const doubled = [...cards, ...cards]

    return (
        <div
            className="max-w-[1400px] mx-auto relative py-2 mb-8"
            style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent 0px, transparent 48px, black 48px, black calc(100% - 48px), transparent calc(100% - 48px), transparent 100%)',
                maskImage: 'linear-gradient(to right, transparent 0px, transparent 48px, black 48px, black calc(100% - 48px), transparent calc(100% - 48px), transparent 100%)',
            }}
        >
            <div
                ref={trackRef}
                className="flex items-stretch gap-3.5"
                style={{
                    width: 'max-content',
                    willChange: 'transform',
                    paddingLeft: 48,
                    paddingRight: 48,
                    animation: `${direction === 'left' ? 'testimonialScrollLeft' : 'testimonialScrollRight'} ${direction === 'left' ? '120s' : '130s'} linear infinite`,
                }}
                onMouseEnter={() => { if (trackRef.current) trackRef.current.style.animationPlayState = 'paused' }}
                onMouseLeave={() => { if (trackRef.current) trackRef.current.style.animationPlayState = 'running' }}
            >
                {doubled.map((card, i) => {
                    const originalIndex = i % cards.length
                    if (card.type === 'video') {
                        return <VideoCard key={`${card.name}-${i}`} card={card} onClick={onVideoClick} />
                    }
                    return <TextCard key={`${card.name}-${i}`} card={card} index={originalIndex} />
                })}
            </div>
        </div>
    )
}

/* ════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════ */

export default function TestimonialsSection() {
    const [modalOpen, setModalOpen] = useState(false)
    const [activeCard, setActiveCard] = useState(null)

    const openModal = card => { setActiveCard(card); setModalOpen(true) }
    const closeModal = () => setModalOpen(false)

    return (
        <>
            {/* Keyframes */}
            <style>{`
                @keyframes testimonialScrollLeft {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes testimonialScrollRight {
                    0%   { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                @keyframes mFade {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
                @keyframes mScale {
                    from { transform: scale(0.92); opacity: 0; }
                    to   { transform: scale(1); opacity: 1; }
                }
            `}</style>

            <section className="bg-[#0A0A0A] overflow-hidden" style={{ padding: '72px 0 88px' }}>
                {/* ── Header ── */}
                <div
                    className="flex items-end justify-between flex-wrap gap-5 max-w-[1400px] mx-auto"
                    style={{ padding: '0 48px', marginBottom: 56 }}
                >
                    <div className="flex flex-col">
                        {/* Medal icon */}
                        <div className="mb-[18px]">
                            <svg width="46" height="50" viewBox="0 0 46 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 4 L10 18 L20 18 Z" fill="#EA580C" />
                                <path d="M31 4 L36 18 L26 18 Z" fill="#EA580C" />
                                <path d="M20 4 L26 4 L23 14 Z" fill="#F97316" />
                                <circle cx="23" cy="34" r="14" fill="#7C3400" />
                                <circle cx="23" cy="34" r="12" fill="#C2520A" />
                                <path d="M23 27 L24.8 31.6 L29.8 31.6 L25.9 34.4 L27.3 39 L23 36.2 L18.7 39 L20.1 34.4 L16.2 31.6 L21.2 31.6 Z" fill="#F97316" />
                            </svg>
                        </div>

                        <h2
                            className="font-extrabold text-white"
                            style={{
                                fontSize: 'clamp(32px, 4.8vw, 56px)',
                                lineHeight: 1.1,
                                letterSpacing: '-0.035em',
                            }}
                        >
                            <span className="block mb-0.5" style={{ color: 'rgba(255,255,255,0.36)' }}>
                                {SECTION_CONFIG.titleDimmed}
                            </span>
                            {SECTION_CONFIG.titleBold}
                            <br />
                            {SECTION_CONFIG.titleBold2}
                        </h2>
                    </div>

                    <div
                        className="font-extrabold whitespace-nowrap self-end"
                        style={{
                            color: '#F97316',
                            fontSize: 'clamp(16px, 2vw, 22px)',
                            letterSpacing: '-0.015em',
                            paddingBottom: 6,
                        }}
                    >
                        {SECTION_CONFIG.badgeText}
                    </div>
                </div>

                {/* ── Top row (scrolls left) ── */}
                <ScrollTrack cards={TOP_ROW} direction="left" onVideoClick={openModal} />

                {/* ── Bottom row (scrolls right) ── */}
                <ScrollTrack cards={BOTTOM_ROW} direction="right" onVideoClick={openModal} />
            </section>

            {/* ── Modal ── */}
            <TestimonialModal isOpen={modalOpen} card={activeCard} onClose={closeModal} />
        </>
    )
}
