import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MatrixText } from './matrix-text';

const CATEGORIES = ['Technical', 'Non-Technical', 'Workshops', 'E-sports'];

const EVENTS_DATA = [
    {
        id: 1,
        title: 'Techovate',
        category: 'Technical',
        image: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773297645/Your_paragraph_text_8_ouoziw.png',
        description: 'Design a captivating and informative paper presentation that effectively communicates your research to a broad audience of researchers at a conference or seminar.',
        route: '/techovate'
    },
    {
        id: 4,
        title: 'Posterize',
        category: 'Technical',
        image: '/thumbnail-posterize.png',
        description: 'Design a captivating and informative poster that effectively communicates your research to a broad audience. Present your findings to professors and win exciting prizes in this unique poster presentation event.',
        route: '/posterize'
    },
    {
        id: 10,
        title: 'Circuitrix',
        category: 'Technical',
        image: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773309745/Your_paragraph_text_10_mjd0ay.png',
        description: 'Master the art of circuit design and wiring. Test your theoretical knowledge and practical precision across two intense rounds of electronic challenges.',
        route: '/circuitrix'
    },
    {
        id: 5,
        title: 'Avishkar',
        category: 'Technical',
        image: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773309325/Your_paragraph_text_9_xzvar1.png',
        description: 'Avishkar is a dynamic event designed to celebrate creativity and hands-on learning. Present working models emphasizing Electronics, Sensors, and Software implementation.',
        route: '/avishkar'
    },
    {
        id: 11,
        title: 'Codex',
        category: 'Technical',
        image: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773310435/Your_paragraph_text_11_n3zpi7.png',
        video: 'https://res.cloudinary.com/djiivo0r7/video/upload/v1773379445/WhatsApp_Video_2026-03-12_at_22.14.00_rw3vjk.mp4',
        description: 'The ultimate coding showdown. Solve complex algorithmic challenges and demonstrate your programming prowess in this intense competitive coding event.',
        route: '/codex'
    },
    {
        id: 12,
        title: 'Quizmania',
        category: 'Technical',
        image: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773311114/Your_paragraph_text_12_mlbpof.png',
        description: 'A high-energy technical quiz that tests your speed, accuracy, and depth of knowledge. Compete against the best minds in a battle of intellect and wit!',
        route: '/quizmania'
    },
    {
        id: 2,
        title: 'Free Fire',
        category: 'E-sports',
        image: '/thumbnail-freefire-new.jpeg',
        video: 'https://res.cloudinary.com/djiivo0r7/video/upload/v1773312818/Free_Fire_Battle_-_College_Fest_Tournament_720p_caption_glufro.mp4',
        description: 'Drop into the ultimate battle royale experience. Survive the shrinking play zone, outlast your opponents, and secure the Booyah in this intense fast-paced survival shooter.',
    },
    {
        id: 8,
        title: 'BGMI',
        category: 'E-sports',
        image: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773312506/bgmi_logo_a4zthq.jpg',
        video: 'https://res.cloudinary.com/djiivo0r7/video/upload/v1773313214/College_Fest_PUBG_Mobile_Battle_720p_caption_qyt7zt.mp4',
        description: 'Squad up for the ultimate chicken dinner. Navigate varied terrains, master your loadouts, and showcase tactical brilliance in intense multiplayer battles.',
    },
    {
        id: 9,
        title: 'Click Fest',
        category: 'Non-Technical',
        image: '/thumbnail-clickfest.png',
        description: 'Capture stunning, creative images showcasing technical skills and unique perspectives. Only smartphones allowed. Frame your best shot and compete for the gallery spotlight.',
        route: '/click-fest'
    },
    {
        id: 13,
        title: 'Dumbcharades & Pictionary',
        category: 'Non-Technical',
        image: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773324699/Your_paragraph_text_13_nfgymi.png',
        description: 'Guess the move, sketch the vibe! A thrilling two-round competition featuring acting in Dumbcharades and drawing in Pictionary. Showcase your observation and teamwork skills.',
        route: '/dumbcharades'
    },
    {
        id: 14,
        title: "Kim's Game",
        category: 'Non-Technical',
        image: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773329743/Your_paragraph_text_15_ooikpw.png',
        video: 'https://res.cloudinary.com/djiivo0r7/video/upload/v1773379518/WhatsApp_Video_2026-03-12_at_22.17.43_lnwqdv.mp4',
        description: 'A fun-filled multi-round competition that combines puzzles, movie and app identification, treasure hunts, and team coordination challenges.',
        route: '/kims-game'
    },
    {
        id: 15,
        title: 'ICONEMA',
        category: 'Non-Technical',
        image: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773337470/Your_paragraph_text_16_imbuxm.png',
        video: 'https://res.cloudinary.com/djiivo0r7/video/upload/v1773379550/WhatsApp_Video_2026-03-12_at_22.13.59_nshvsd.mp4',
        description: 'A fun multi-round event that tests participants’ observation, knowledge, and teamwork through movie questions, app icon identification, and a treasure hunt.',
        route: '/iconema'
    },
    {
        id: 101,
        title: '',
        category: 'Workshops',
        image: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773369508/Your_paragraph_text_19_ayxkkj.png',
        description: '',
        route: '/workshop-web'
    },
    {
        id: 102,
        title: '',
        category: 'Workshops',
        image: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773369508/Your_paragraph_text_19_ayxkkj.png',
        description: '',
        route: '/workshop-ai'
    },
    {
        id: 103,
        title: '',
        category: 'Workshops',
        image: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773369508/Your_paragraph_text_19_ayxkkj.png',
        description: '',
        route: '/workshop-cyber'
    },
    {
        id: 104,
        title: '',
        category: 'Workshops',
        image: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773369508/Your_paragraph_text_19_ayxkkj.png',
        description: '',
        route: '/workshop-cloud'
    },
    {
        id: 105,
        title: '',
        category: 'Workshops',
        image: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773369508/Your_paragraph_text_19_ayxkkj.png',
        description: '',
        route: '/workshop-ui-ux'
    },
    {
        id: 106,
        title: '',
        category: 'Workshops',
        image: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773369508/Your_paragraph_text_19_ayxkkj.png',
        description: '',
        route: '/workshop-iot'
    }
];

export const EventsPage = () => {
    const { state } = useLocation();
    const [activeCategory, setActiveCategory] = useState(state?.category || 'Technical');
    const [hoveredEventId, setHoveredEventId] = useState(null);
    const navigate = useNavigate();

    const filteredEvents = EVENTS_DATA.filter(event =>
        event.category === activeCategory
    );

    React.useEffect(() => {
        if (state?.category) {
            setActiveCategory(state.category);
        }
    }, [state?.category]);

    return (
        <div className="min-h-screen bg-[#0A0A0A] pt-[120px] pb-24 px-6 md:px-12 font-sans selection:bg-[#F97316]/30">
            <div className="max-w-[1280px] mx-auto">
                <MatrixText
                    text="Explore Events"
                    className="justify-start text-[#F97316] mb-10"
                />

                {/* Categories Filter */}
                <div className="flex flex-wrap items-center gap-3 mb-12">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-[13.5px] font-bold transition-all duration-200 border ${activeCategory === cat
                                ? 'bg-[#A7F3D0] text-[#064E3B] border-transparent shadow-[0_0_15px_rgba(167,243,208,0.2)]'
                                : 'bg-[#18181B] text-[#D1D5DB] border-white/5 hover:bg-[#27272A] hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredEvents.map(event => (
                        <div
                            key={event.id}
                            onMouseEnter={() => setHoveredEventId(event.id)}
                            onMouseLeave={() => setHoveredEventId(null)}
                            className="group flex flex-col bg-[#18181B] rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-white/5 hover:border-white group-hover:brightness-110"
                        >
                            <div className="relative w-full h-40 md:h-48 overflow-hidden bg-black">
                                {event.video && hoveredEventId === event.id ? (
                                    <video
                                        src={event.video}
                                        autoPlay
                                        loop
                                        playsInline
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent pointer-events-none"></div>
                            </div>

                            <div className="flex flex-col px-5 py-5 flex-1">
                                <h3 className="text-[20px] md:text-[22px] leading-snug font-bold text-[#FDBA74] mb-3 group-hover:text-white transition-colors line-clamp-1">
                                    {event.title}
                                </h3>

                                {event.category === 'Workshops' ? (
                                    <div className="flex-1 flex items-center justify-center mb-6">
                                        <span className="text-[#F97316] text-[18px] md:text-[20px] font-black tracking-[0.15em] uppercase">
                                            Coming Soon
                                        </span>
                                    </div>
                                ) : (
                                    <p className="text-[#D1D5DB] text-[14px] md:text-[15px] leading-relaxed mb-6 pr-1 line-clamp-3">
                                        {event.description}
                                    </p>
                                )}

                                <div className="flex justify-end mt-auto">                                    <button
                                        onClick={() => navigate(event.route || '/event-wireframe')}
                                        className="bg-[#EAB308] hover:bg-[#D97706] text-white font-bold py-[6px] px-5 rounded-full transition-all duration-200 text-[12px] shadow-[0_3px_10px_rgba(234,179,8,0.2)] hover:shadow-[0_5px_15px_rgba(234,179,8,0.35)] hover:-translate-y-0.5 active:translate-y-0"
                                    >
                                        More info
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventsPage;
