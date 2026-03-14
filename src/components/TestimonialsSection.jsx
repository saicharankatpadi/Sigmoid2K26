import { useState, useEffect, useRef } from 'react'

const v1 = 'https://res.cloudinary.com/djiivo0r7/video/upload/v1773210714/nikshep3_ya4fee.mp4'
const v2 = 'https://res.cloudinary.com/djiivo0r7/video/upload/v1773210620/nikshep4_rzj29t.mp4'
const v3 = 'https://res.cloudinary.com/djiivo0r7/video/upload/v1773210543/006_dngjue.mp4'
const v4 = 'https://res.cloudinary.com/djiivo0r7/video/upload/v1773210476/WhatsApp_Video_2026-03-10_at_23.23.45_wslq8e.mp4'
const v5 = 'https://res.cloudinary.com/djiivo0r7/video/upload/v1773209848/WhatsApp_Video_2026-03-10_at_23.10.08_omlmup.mp4'
const v6 = 'https://res.cloudinary.com/djiivo0r7/video/upload/v1773208225/007_yz4blo.mp4'
const v7 = 'https://res.cloudinary.com/djiivo0r7/video/upload/v1773370341/WhatsApp_Video_2026-03-12_at_19.26.18_vptd1e.mp4'
const v8 = 'https://res.cloudinary.com/djiivo0r7/video/upload/v1773370479/WhatsApp_Video_2026-03-12_at_19.53.38_gvqcuv.mp4'
const v9 = 'https://res.cloudinary.com/djiivo0r7/video/upload/v1773370611/WhatsApp_Video_2026-03-12_at_00.35.14_hmxh9r.mp4'
const v10 = 'https://res.cloudinary.com/djiivo0r7/video/upload/v1773396341/WhatsApp_Video_2026-03-13_at_03.03.55_fawfs6.mp4'

/* ════════════════════════════════════════════════════════════════
   TESTIMONIALS DATA — Edit this JSON to add / remove / modify cards.
   Each item is either a "text" card or a "video" card.
   ════════════════════════════════════════════════════════════════ */

// Avatar/Image logic
const boyImage = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773267186/WhatsApp_Image_2026-03-11_at_14.47.44_sdgm1x.jpg'
const girlImage = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773267324/WhatsApp_Image_2026-03-11_at_15.15.00_gxucuo.jpg'

// Provided User Icons
const u1 = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773373852/WhatsApp_Image_2026-03-12_at_19.29.21__1_-removebg-preview_l2ce7d.png'
const u2 = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773373818/WhatsApp_Image_2026-03-12_at_19.29.22-removebg-preview_lplmzj.png'
const u3 = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773373772/WhatsApp_Image_2026-03-12_at_19.29.21-removebg-preview_npkkqi.png'
const u4 = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773373634/WhatsApp_Image_2026-03-12_at_19.29.20__2_-removebg-preview_no93kf.png'
const u5 = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773373463/WhatsApp_Image_2026-03-12_at_19.29.19-removebg-preview_k4snap.png'
const u6 = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773370133/WhatsApp_Image_2026-03-12_at_19.29.16-removebg-preview_taq8oh.png'
const u7 = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773370286/WhatsApp_Image_2026-03-12_at_19.29.17-removebg-preview_cyef1g.png'
const u8 = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773370492/WhatsApp_Image_2026-03-12_at_19.29.18__2_-removebg-preview_foxqeq.png'
const u9 = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773373451/WhatsApp_Image_2026-03-12_at_19.29.18__3_-removebg-preview_exgiea.png'

// College Logos
const l_sitams = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773269960/SITAMS-removebg-preview_uy6z3f.png'
const l_svce = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773269966/svce-removebg-preview_uh1mhu.png'
const l_aits = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773269936/Annamacharya-Institute-of-Technology-Sciences-Rajampet-removebg-preview_mr4ii0.png'
const l_vemu = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773269966/vemu-removebg-preview_evx8zg.png'
const l_mvgr = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773269957/mvgr-removebg-preview_f31sky.png'
const l_cbit = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773269948/cbit3-removebg-preview_lvnhsg.png'
const l_anits = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773269937/anits-removebg-preview_wmgmat.png'
const l_aditya = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773269936/aditya_coolege-removebg-preview_wgijux.png'
const l_svuce = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773375271/250px-Sri_Venkateswara_University_logo_fdm8re.png'

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
        name: 'Rahul',
        avatar: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773396178/WhatsApp_Image_2026-03-12_at_19.29.21__2_-removebg-preview_zc1wux.png',
        text: "Codex was the most challenging event! The algorithmic rounds really tested my logical limits and coding speed. It was a perfect platform to showcase my programming prowess.",
        college: { name: 'SITAMS', logo: l_sitams },
    },
    {
        type: 'text',
        name: 'Karthik',
        avatar: u3,
        text: "Designing and debugging circuits at Circuitrix was intense. Winning the top prize was a dream come true for an ECE student! Highly recommended for all tech enthusiasts.",
        college: { name: 'AITS Rajampet', logo: l_aits },
    },
    {
        type: 'video',
        name: 'Kavya, B.Tech 2nd Year (SITAMS ,Chittoor) ',
        hook: 'A Journey of Innovation',
        description: 'Exploring the depths of electronics and communication.',
        videoGradient: VIDEO_GRADIENTS[0],
        videoUrl: v7
    },
    {
        type: 'text',
        name: 'Sneha',
        avatar: u4,
        text: "Posterize allowed me to combine technical depth with creative design. It was a perfect platform for me to showcase my research and gain insights.",
        college: { name: 'VEMU', logo: l_vemu },
    },
    {
        type: 'text',
        name: 'Vikram',
        avatar: u5,
        text: "Avishkar was all about high-end innovation. Seeing other working models and prototypes was very inspiring for my own engineering project development.",
        college: { name: 'MVGR', logo: l_mvgr },
    },
    {
        type: 'video',
        name: 'Ananya (B.Tech 3rd Year),SVCE,Tirupathi',
        hook: 'Skills that Spark',
        description: 'Highlighting the brilliance of modern engineering.',
        videoGradient: VIDEO_GRADIENTS[2],
        videoUrl: v10
    },
]

/* ── BOTTOM ROW cards (scrolls right) ── */
const BOTTOM_ROW = [
    {
        type: 'text',
        name: 'Pooja',
        avatar: u8,
        text: "ICONEMA was a perfect blend of fun and observation. Our team had a blast identifying the icons and solving puzzles!",
        college: { name: 'Aditya College', logo: l_aditya },
    },
    {
        type: 'text',
        name: 'Siri ',
        avatar: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773395958/WhatsApp_Image_2026-03-12_at_19.29.18__1_-removebg-preview_d55ant.png',
        text: "The technical sessions at Sigmoid were top-notch. As a B.Tech CSE student from Vemu, I found the workshops extremely insightful and relevant for my future career development in technology.",
        college: { name: 'Vemu', logo: l_vemu },
    },
    {
        type: 'video',
        name: 'Navya B.Tech 2nd Year ECE,SVUCE',
        hook: 'Defining Excellence',
        description: 'Redefining the standards of technical symposiums.',
        videoGradient: VIDEO_GRADIENTS[1],
        videoUrl: v8
    },
    {
        type: 'text',
        name: 'Rahul',
        avatar: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773396178/WhatsApp_Image_2026-03-12_at_19.29.21__2_-removebg-preview_zc1wux.png',
        text: "Codex was the most challenging event! The algorithmic rounds really tested my logical limits and coding speed.",
        college: { name: 'SITAMS', logo: l_sitams },
    },
    {
        type: 'text',
        name: 'Sneha',
        avatar: u4,
        text: "Posterize allowed me to combine technical depth with creative design. It was a perfect platform.",
        college: { name: 'VEMU', logo: l_vemu },
    },
    {
        type: 'video',
        name: 'K .Mahalakshmi B.Tech 1st Year,(Vemu,Tirupati)',
        hook: 'Core Engineering Pulse',
        description: 'Where theoretical concepts meet real-world applications.',
        videoGradient: VIDEO_GRADIENTS[2],
        videoUrl: v9
    },
    {
        type: 'text',
        name: 'Karthik',
        avatar: u3,
        text: "Designing and debugging circuits at Circuitrix was intense. Winning the top prize was a dream come true!",
        college: { name: 'AITS Rajampet', logo: l_aits },
    },
    {
        type: 'text',
        name: 'Vikram',
        avatar: u5,
        text: "Avishkar was all about high-end innovation. Seeing other working models and prototypes was very inspiring.",
        college: { name: 'MVGR', logo: l_mvgr },
    },
]

/* ── Section header config ── */
const SECTION_CONFIG = {
    badgeText: 'Top Ranked Events!',
    titleDimmed: 'Participants that',
    titleBold: 'shined at',
    titleBold2: 'Sigmoid Events',
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

    return (
        <div
            className={`w-72 h-[380px] rounded-2xl flex-shrink-0 flex flex-col gap-[13px] group`}
            style={{
                background: '#191919',
                border: '1.5px solid rgba(255,255,255,0.055)',
                padding: '24px 20px 20px',
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
            {/* Header: avatar | name */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div
                        className="w-[42px] h-[42px] rounded-full overflow-hidden flex items-center justify-center border border-white/5"
                        style={{
                            background: getAvatarColor(index),
                        }}
                    >
                        {card.avatar ? (
                            <img src={card.avatar} alt={card.name} className="w-full h-full object-cover rounded-full" />
                        ) : (
                            <span style={{ fontSize: '12.5px', fontWeight: 700, color: 'white' }}>
                                {getInitials(card.name)}
                            </span>
                        )}
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
                className={`flex-1 relative overflow-hidden`}
                style={{
                    color: 'rgba(255,255,255,0.66)',
                    fontSize: '13.5px',
                    lineHeight: 1.6,
                    fontWeight: 400,
                    letterSpacing: '-0.004em',
                }}
            >
                <div
                    className="line-clamp-6"
                    style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 6,
                        overflow: 'hidden'
                    }}
                >
                    {card.text}
                </div>
            </div>

            {/* Footer: logo | college name */}
            <div
                className="flex items-center mt-auto gap-3"
                style={{
                    paddingTop: '13px',
                    borderTop: '1px solid rgba(255,255,255,0.055)',
                }}
            >
                <div
                    className="flex items-center justify-center shrink-0 overflow-hidden"
                    style={{
                        width: 48,
                        height: 48,
                        borderRadius: '10px',
                        background: '#242424',
                        border: '1px solid rgba(255,255,255,0.08)',
                    }}
                >
                    {card.college.logo.startsWith('http') ? (
                        <img src={card.college.logo} alt={card.college.name} className="w-full h-full object-contain p-1.5" />
                    ) : (
                        <span className="text-xl">{card.college.logo}</span>
                    )}
                </div>
                <div className="flex flex-col">
                    <span
                        style={{
                            color: 'rgba(255,255,255,0.85)',
                            fontSize: '13.5px',
                            fontWeight: 600,
                            letterSpacing: '-0.012em',
                        }}
                    >
                        {card.college.name}
                    </span>
                    <span
                        style={{
                            color: 'rgba(255,255,255,0.32)',
                            fontSize: '11.5px',
                            fontWeight: 400,
                            marginTop: '2px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}
                    >
                        Verified Participant
                    </span>
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

            {/* Hook and Description Overlay */}
            <div
                className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            >
                <div className="mb-12">
                    <div className="text-[#F97316] text-sm font-bold uppercase tracking-wider mb-1">
                        {card.hook}
                    </div>
                    <div className="text-white/80 text-xs leading-relaxed max-w-[200px]">
                        {card.description}
                    </div>
                </div>
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
