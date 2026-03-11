import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Typewriter } from './typewriter-text'
import { LocationMap } from './expand-map'
import { BlurIn } from './blur-in'
import { Button } from './neon-button'
import { cn } from '../../lib/utils'
const food1Img = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773218168/food1_bkpkra.png'
const food2Img = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773218154/food2_cyzxhy.png'
const groupIcon = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773218173/group-icon_vmt5xe.png'
const homeIcon = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773218173/home-icon_kwn11t.png'

const frontendDevImg = ''
const teamLeaderImg = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773218173/team-leader_zriohu.jpg'
const profileImg = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773218168/profile_qkq92t.jpg'
import figmaDevImg from '../../assets/figma-developer.jpeg'

// Inline SVG components
const User = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
)

// Main Component
export function HostelDetails({ type }) {
    const navigate = useNavigate();
    const isBoys = type === 'boys';

    // Collapse states -> arrow down means COLLAPSE (false contextually), arrow up means OPEN (true contextually)
    const [teamOpen, setTeamOpen] = useState(true);
    const [vacanciesOpen, setVacanciesOpen] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [type]);

    // Theme values
    const primaryText = isBoys ? 'text-blue-400' : 'text-pink-400';
    const primaryFill = isBoys ? 'bg-blue-500' : 'bg-[#e91e63]';
    const accentBorderColor = isBoys ? 'rgba(59, 130, 246, 0.4)' : 'rgba(233, 30, 99, 0.4)';
    const accentFillColor = isBoys ? 'rgba(59, 130, 246, 0.2)' : 'rgba(233, 30, 99, 0.2)';

    // Glassmorphism containers
    const glassyContainer = "bg-[#111111]/30 backdrop-blur-xl border border-white/10 rounded-2xl";
    const innerGlassyContainer = "bg-[#1a1a2e]/60 border border-white/5 rounded-2xl";

    // Helper components
    const Title = ({ children }) => (
        <h3 className={cn("text-xl font-bold mb-4 tracking-wider text-white border-l-4 pl-3 uppercase flex items-center gap-3", isBoys ? 'border-blue-500' : 'border-[#e91e63]')}>
            {children}
        </h3>
    );

    // Food Match Card Style
    const FoodMatchCard = ({ day, meal, time, location, imgUrl, addBorderBottom }) => (
        <div className="bg-white p-4 flex items-center justify-between shadow-none relative">
            <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-xl border border-gray-200 overflow-hidden shrink-0 flex items-center justify-center p-1">
                    <img src={imgUrl} alt="Food" className="w-full h-full object-contain" />
                </div>
                <div>
                    <span className="text-gray-500 text-sm font-semibold mb-1 block">{day} - {time}</span>
                    <h5 className="text-xl font-bold text-[#0d163a] mb-1">{meal}</h5>
                    <p className="text-gray-500 text-sm">{location}</p>
                </div>
            </div>
            {addBorderBottom && (
                <div className="absolute bottom-0 left-6 right-6 h-px bg-black/10" />
            )}
        </div>
    );

    // Exact match for the bar chart image provided, with animations and tooltips
    const VacancyChart = ({ groundValue, topValue, title }) => {
        const [hoveredBar, setHoveredBar] = useState(null);

        return (
            <div className={cn("px-4 py-5 w-full relative", innerGlassyContainer)}>
                {/* Full grid lines EXACTLY MATCHING IMAGE: 4 horizontal, 3 vertical */}
                <div className="absolute left-6 right-6 top-8 bottom-12 flex flex-col justify-between pointer-events-none z-0">
                    <div className="h-px w-full bg-white/10" />
                    <div className="h-px w-full bg-white/10" />
                    <div className="h-px w-full bg-white/10" />
                    <div className="h-px w-full bg-white/10" />
                </div>
                <div className="absolute left-6 right-6 top-8 bottom-12 flex justify-between pointer-events-none z-0">
                    <div className="w-px h-full bg-white/10" />
                    <div className="w-px h-full bg-white/10" />
                    <div className="w-px h-full bg-white/10" />
                    <div className="w-px h-full bg-white/10" />
                </div>

                <div className="flex items-end justify-center gap-8 h-40 relative z-10 px-2 mt-2 pt-6 border-b border-white/5 mx-6">
                    {/* Ground floor bar starting exactly at bottom */}
                    <div
                        className="flex flex-col items-center w-16 h-full justify-end relative group"
                        onMouseEnter={() => setHoveredBar(`Ground Floor`)}
                        onMouseLeave={() => setHoveredBar(null)}
                    >
                        <span className="text-white font-bold text-sm mb-1">{groundValue}</span>
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${Math.max(10, groundValue)}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className={cn("w-full rounded-xl relative z-10", primaryFill)}
                        />
                        {/* Tooltip */}
                        <AnimatePresence>
                            {hoveredBar === 'Ground Floor' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="absolute -top-16 left-1/2 -translate-x-1/2 bg-[#0d112b] border rounded-lg px-4 py-3 z-[100] whitespace-nowrap"
                                    style={{ borderColor: accentBorderColor }}
                                >
                                    <div className="text-white font-bold text-sm mb-1">{title}</div>
                                    <div className="flex items-center gap-2">
                                        <div className={cn("w-3 h-3 rounded-sm", primaryFill)}></div>
                                        <span className="text-white/80 text-xs">Ground Floor: {groundValue}</span>
                                    </div>
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0d112b] rotate-45 border-b border-r" style={{ borderColor: accentBorderColor }}></div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Top floor bar starting exactly at bottom */}
                    <div
                        className="flex flex-col items-center w-16 h-full justify-end relative group"
                        onMouseEnter={() => setHoveredBar(`First Floor`)}
                        onMouseLeave={() => setHoveredBar(null)}
                    >
                        <span className="text-white font-bold text-sm mb-1">{topValue}</span>
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${Math.max(10, topValue)}%` }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                            className={cn("w-full rounded-xl relative z-10", primaryFill)}
                        />
                        {/* Tooltip */}
                        <AnimatePresence>
                            {hoveredBar === 'First Floor' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="absolute -top-16 left-1/2 -translate-x-1/2 bg-[#0d112b] border rounded-lg px-4 py-3 z-[100] whitespace-nowrap"
                                    style={{ borderColor: accentBorderColor }}
                                >
                                    <div className="text-white font-bold text-sm mb-1">{title}</div>
                                    <div className="flex items-center gap-2">
                                        <div className={cn("w-3 h-3 rounded-sm", primaryFill)}></div>
                                        <span className="text-white/80 text-xs">First Floor: {topValue}</span>
                                    </div>
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0d112b] rotate-45 border-b border-r" style={{ borderColor: accentBorderColor }}></div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Labels under the baseline */}
                <div className="flex justify-center gap-8 z-10 relative pt-3">
                    <div className="flex justify-center w-16">
                        <div className="flex items-center justify-center h-5 rounded px-2 bg-white text-[10px] text-gray-900 font-bold uppercase shadow">
                            GROUND
                        </div>
                    </div>
                    <div className="flex justify-center w-16">
                        <div className="flex items-center justify-center h-5 rounded px-2 bg-white text-[10px] text-gray-900 font-bold uppercase shadow">
                            1ST FLR
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 relative bg-[#070514] overflow-hidden">
            <div className="max-w-[1200px] mx-auto space-y-12 relative z-10 flex flex-col items-center">

                {/* Header Sub Nav */}
                <button
                    onClick={() => navigate('/accommodation')}
                    className="flex items-center text-zinc-400 hover:text-white transition-colors self-start"
                >
                    <span className="text-2xl mr-2">←</span>
                    Back to Accommodation
                </button>

                {/* Page Title with Typewriter */}
                <div className="relative text-center w-full">
                    <Typewriter
                        text={`DETAILS ABOUT ${isBoys ? 'BOYS' : 'GIRLS'} HOSTEL`}
                        speed={70}
                        className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-wider relative z-10 inline-block"
                    />
                </div>

                <div className="mt-8 w-full">

                    {/* MAIN CONTENT SPLIT */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                        {/* LEFT COLUMN: FOOD + ROADMAP */}
                        <div className="lg:col-span-6 space-y-12">
                            {/* FOOD */}
                            <section>
                                <Title>FOOD</Title>

                                <div className="space-y-8 pl-4 sm:pl-8"> {/* Moved to the right */}
                                    {/* Day 1 Container */}
                                    <BlurIn
                                        word={
                                            <div className="text-left w-full">
                                                <h4 className="text-white font-bold mb-3 text-lg">Day - 1</h4>
                                                <div className="bg-white rounded-xl overflow-hidden shadow-xl">
                                                    <FoodMatchCard
                                                        day="Day 1"
                                                        time="Morning"
                                                        meal="Breakfast Menu"
                                                        location="Viswakarma Block / G Block"
                                                        imgUrl={food1Img}
                                                        addBorderBottom={true}
                                                    />
                                                    <FoodMatchCard
                                                        day="Day 1"
                                                        time="Evening"
                                                        meal="Dinner Menu"
                                                        location="Viswakarma Block / G Block"
                                                        imgUrl={food2Img}
                                                        addBorderBottom={false}
                                                    />
                                                </div>
                                            </div>
                                        }
                                        duration={1.2}
                                        className="!text-left w-full block tracking-normal drop-shadow-none md:text-base md:leading-normal font-sans"
                                    />

                                    {/* Day 2 Container */}
                                    <BlurIn
                                        word={
                                            <div className="text-left w-full mt-8">
                                                <h4 className="text-white font-bold mb-3 text-lg">Day - 2</h4>
                                                <div className="bg-white rounded-xl overflow-hidden shadow-xl">
                                                    <FoodMatchCard
                                                        day="Day 2"
                                                        time="Morning"
                                                        meal="Breakfast Menu"
                                                        location="Viswakarma Block / G Block"
                                                        imgUrl={food1Img}
                                                        addBorderBottom={true}
                                                    />
                                                    <FoodMatchCard
                                                        day="Day 2"
                                                        time="Evening"
                                                        meal="Dinner Menu"
                                                        location="Viswakarma Block / G Block"
                                                        imgUrl={food2Img}
                                                        addBorderBottom={false}
                                                    />
                                                </div>
                                            </div>
                                        }
                                        duration={1.6}
                                        className="!text-left w-full block tracking-normal drop-shadow-none md:text-base md:leading-normal font-sans"
                                    />
                                </div>
                            </section>

                            {/* ROADMAP SECTION */}
                            <section>
                                <Title>ROADMAP</Title>
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="w-full">
                                        <div className="flex items-center gap-2 mb-2 text-white/50 text-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                            Viswakarma Block
                                        </div>
                                        <LocationMap
                                            location="Lat: 17.545°N, Lng: 78.572°E"
                                            coordinates=""
                                            color={isBoys ? "blue" : "pink"}
                                            className="h-full min-h-[160px]"
                                        />
                                    </div>
                                    <div className="w-full mt-4">
                                        <div className="flex items-center gap-2 mb-2 text-white/50 text-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                            G Block (Based on Allotment)
                                        </div>
                                        <LocationMap
                                            location="Lat: 17.546°N, Lng: 78.573°E"
                                            coordinates=""
                                            color={isBoys ? "blue" : "pink"}
                                            className="h-full min-h-[160px]"
                                        />
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* RIGHT COLUMN: ROOMS (VACANCIES) & TEAM & BUTTON */}
                        <div className="lg:col-span-6 space-y-12">

                            {/* ROOOMS / VACANCIES */}
                            <section>
                                <Title>VACANCIES</Title>
                                <div className={cn("p-4 sm:p-6 w-full max-w-[420px] lg:max-w-md mx-auto lg:mx-0 transition-all duration-300", glassyContainer)}>
                                    <div className={cn("flex items-center justify-between transition-all", vacanciesOpen ? "mb-6 pb-2" : "")}>
                                        <h4 className="text-white text-xl font-bold flex items-center gap-3">
                                            <img src={homeIcon} className="w-5 h-5 invert" alt="Rooms" />
                                            Rooms
                                        </h4>
                                        <div
                                            className="cursor-pointer w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/5 rounded-md transition-colors"
                                            onClick={() => setVacanciesOpen(!vacanciesOpen)}
                                        >
                                            {/* Arrow down means it's closed and we click it to open, but based on image reference mapping -> ▲ means close, ▼ means collapse */}
                                            <span className="text-white font-bold text-xs opacity-80">
                                                {vacanciesOpen ? '▲' : '▼'}
                                            </span>
                                        </div>
                                    </div>

                                    <div className={cn("flex flex-row flex-wrap justify-center gap-4 transition-all duration-300", vacanciesOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0 overflow-hidden")}>
                                        <div className="flex-1 min-w-[150px]">
                                            <VacancyChart
                                                title="Viswa Block"
                                                groundValue={88}
                                                topValue={76}
                                            />
                                            <h5 className="text-center text-white mt-4 font-bold tracking-wide">Viswa Block</h5>
                                        </div>
                                        <div className="flex-1 min-w-[150px]">
                                            <VacancyChart
                                                title="G Block"
                                                groundValue={72}
                                                topValue={67}
                                            />
                                            <h5 className="text-center text-white mt-4 font-bold tracking-wide">G Block</h5>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* TEAM */}
                            <section>
                                <Title>ACCOMMODATION TEAM</Title>
                                <div className={cn("p-4 sm:p-6 w-full max-w-[420px] lg:max-w-md mx-auto lg:mx-0 transition-all duration-300", glassyContainer)}>
                                    <div className={cn("flex items-center justify-between transition-all", teamOpen ? "mb-6 pb-2" : "")}>
                                        <h4 className="text-white text-xl font-bold flex items-center gap-3">
                                            <img src={groupIcon} alt="Team" className="w-6 h-6 invert" />
                                            Accommodation Team
                                        </h4>
                                        <div
                                            className="cursor-pointer w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/5 rounded-md transition-colors"
                                            onClick={() => setTeamOpen(!teamOpen)}
                                        >
                                            <span className="text-white font-bold text-xs opacity-80">
                                                {teamOpen ? '▲' : '▼'}
                                            </span>
                                        </div>
                                    </div>

                                    <div className={cn("space-y-0 text-left transition-all duration-300 overflow-hidden", teamOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0")}>
                                        {[
                                            { name: 'K. Saicharan', role: 'Head', subtitle: 'B.Tech Final Year (ECE)', img: teamLeaderImg },
                                            { name: 'M. Balakrishna', role: 'Guide', subtitle: 'B.Tech Final Year (ECE)', img: frontendDevImg },
                                            { name: 'Aakash Varma', role: 'Lead', subtitle: 'B.Tech 3rd Year (CSE)', img: profileImg },
                                            { name: 'Rohit Sharma', role: 'Support', subtitle: 'B.Tech 3rd Year (IT)', img: figmaDevImg }
                                        ].map((member, i) => (
                                            <div key={i} className="flex items-center gap-5 py-4 border-b border-white/10 last:border-0 relative">
                                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 overflow-hidden border border-white/20">
                                                    {member.img ? (
                                                        <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <User className="w-6 h-6 text-[#ccc]" />
                                                    )}
                                                </div>
                                                <div className="flex-grow flex flex-col items-start justify-center">
                                                    <h5 className="text-base font-bold text-white mb-0.5">{member.name}</h5>
                                                    <div className="flex items-center gap-2 opacity-60">
                                                        <span className="text-white text-xs font-medium">{member.subtitle}</span>
                                                    </div>
                                                </div>
                                                <div className="shrink-0 ml-auto">
                                                    <div className={cn("px-4 py-1.5 rounded-full border border-white/10 text-white font-bold text-xs shadow-inner flex items-center gap-1.5 focus:outline-none bg-white/5")}>
                                                        {member.role}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* BOOK NOW NEON BUTTON */}
                            <section className="flex justify-center pt-8">
                                <Button
                                    neon={true}
                                    variant="solid"
                                    size="lg"
                                    className={cn(
                                        "rounded-full px-12 py-3 hover:scale-105 transition-all text-white text-xl font-bold uppercase tracking-widest",
                                        isBoys ? "bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.5)]" : "bg-[#e91e63] hover:bg-[#c2185b] shadow-[0_0_20px_rgba(233,30,99,0.5)]"
                                    )}
                                    onClick={() => navigate(`/accommodation/register?type=${type}`)}
                                >
                                    Book Now
                                </Button>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
