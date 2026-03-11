import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MatrixText } from './matrix-text';

const CATEGORIES = ['Technical', 'Non-Technical', 'E-sports'];

const EVENTS_DATA = [
    {
        id: 1,
        title: 'TechFusion',
        category: 'Technical',
        image: '/assets/images/technical-event-thumbnails/techfusion.png',
        description: 'Compete in our flagship algorithmic coding contest. Solve real-world data structure problems, optimize your code under pressure, and win exciting prizes in this intense 3-hour competitive programming sprint.',
        route: '/event-wireframe'
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
        id: 5,
        title: 'Innovista',
        category: 'Technical',
        image: '/thumbnail-innovista.png',
        description: 'Design and showcase groundbreaking projects and DIY creations. Present working models emphasizing Electronics, Sensors, and Software implementation.',
        route: '/innovista'
    },
    {
        id: 2,
        title: 'Free Fire',
        category: 'E-sports',
        image: '/thumbnail-freefire-new.jpeg',
        description: 'Drop into the ultimate battle royale experience. Survive the shrinking play zone, outlast your opponents, and secure the Booyah in this intense fast-paced survival shooter.',
    },
    {
        id: 8,
        title: 'BGMI',
        category: 'E-sports',
        image: '/thumbnail-bgmi-new.jpeg',
        description: 'Squad up for the ultimate chicken dinner. Navigate varied terrains, master your loadouts, and showcase tactical brilliance in intense multiplayer battles.',
    },
    {
        id: 3,
        title: 'Cultural Night Gala',
        category: 'Non-Technical',
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=340&fit=crop',
        description: 'Join us for a spectacular evening of music, dance, and celebration. Let loose, connect with friends, and enjoy stunning performances by the best hidden talents in our college community.',
    },
    {
        id: 7,
        title: 'Guess Busters',
        category: 'Non-Technical',
        image: '/thumbnail-guessbusters.png',
        description: 'Test your creativity, quick thinking, and teamwork. Compete in individual visual clue guessing and team up for interactive movie trivia.',
        route: '/guess-busters'
    },
    {
        id: 9,
        title: 'Click Fest',
        category: 'Non-Technical',
        image: '/thumbnail-clickfest.png',
        description: 'Capture stunning, creative images showcasing technical skills and unique perspectives. Only smartphones allowed. Frame your best shot and compete for the gallery spotlight.',
        route: '/click-fest'
    },
];

export const EventsPage = () => {
    const { state } = useLocation();
    const [activeCategory, setActiveCategory] = useState(state?.category || 'Technical');
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredEvents.map(event => (
                        <div
                            key={event.id}
                            className="bg-[#131313] border border-white/[0.06] rounded-[22px] p-4 flex flex-col transition-all duration-300 group shadow-lg hover:border-white/30 hover:bg-white/[0.02] hover:backdrop-blur-md hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]"
                        >
                            {/* Image Box */}
                            <div className="w-full aspect-[16/9] rounded-[14px] overflow-hidden mb-5 bg-[#27272A] relative">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>

                            <div className="flex flex-col flex-1 px-1 pb-1">
                                <h3 className="text-[21px] leading-snug font-bold text-white mb-3 group-hover:text-[#F97316] transition-colors">
                                    {event.title}
                                </h3>

                                <p className="text-[#9CA3AF] text-[14.5px] leading-[1.6] mb-6 flex-1 pr-2 line-clamp-3">
                                    {event.description}
                                </p>

                                <div className="flex justify-end mt-auto">
                                    <button
                                        onClick={() => navigate(event.route || '/event-wireframe')}
                                        className="bg-[#EAB308] hover:bg-[#D97706] text-white font-bold py-[9px] px-8 rounded-full transition-all duration-200 text-[14px] shadow-[0_4px_14px_rgba(234,179,8,0.25)] hover:shadow-[0_6px_20px_rgba(234,179,8,0.4)] hover:-translate-y-0.5 active:translate-y-0"
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
