import React, { useState } from 'react';
import { sortedCollegeStatsData } from '../data/stats-data';
import { ChevronDown, ChevronRight } from 'lucide-react';

export function StatsPage() {
    // Current view could be 'overview', 'most-wins', or an event name string.
    const [selectedView, setSelectedView] = useState('overview');

    // Accordions
    const [expandedSections, setExpandedSections] = useState({
        sigmoid: true,
        technical: false,
        nontechnical: false
    });

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    // Calculate podium data for Overview tables
    const topOverall = [...sortedCollegeStatsData].sort((a, b) => b.totalWins - a.totalWins || b.participants - a.participants).slice(0, 5);
    const topTech = [...sortedCollegeStatsData].sort((a, b) => b.techWins - a.techWins || b.participants - a.participants).filter(c => c.techWins > 0).slice(0, 5);
    const topNonTech = [...sortedCollegeStatsData].sort((a, b) => b.nonTechWins - a.nonTechWins || b.participants - a.participants).filter(c => c.nonTechWins > 0).slice(0, 5);

    // Hardcoded event names from sketch
    const technicalEvents = ['Codeverse', 'Quiztronics', 'TechFusion', 'Posterize', 'Innovista'];
    const nonTechnicalEvents = ['Click Fest', 'GuessBusters', 'kims game'];

    return (
        <div className="min-h-screen bg-black text-white pt-28 pb-20 font-sans relative overflow-hidden">
            {/* Dark Landing Page Background Blobs */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#3B82F6]/20 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#ff5a00]/10 blur-[120px]" />
            </div>

            <div className="max-w-[1500px] mx-auto px-4 sm:px-8 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row w-full">
                    
                    {/* ── Left Sidebar ── */}
                    <div className="w-full lg:w-[280px] shrink-0 lg:border-r lg:border-white/10 lg:pr-6 pb-8 lg:pb-0">
                        {/* Title matching exact bright blue from dark mode image */}
                        <div className="mb-6 pt-2">
                            <h2 className="text-[25px] font-black tracking-tight text-[#0052cc] drop-shadow-sm">
                                FILTER STATS
                            </h2>
                        </div>

                        <div className="flex flex-col font-bold text-sm tracking-wide">
                            
                            {/* OVERVIEW Menu (No Collapse) */}
                            <div className="w-full border-b border-white/10 pb-2 mb-2">
                                <button 
                                    onClick={() => setSelectedView('overview')}
                                    className={`w-full px-4 py-4 flex justify-between items-center transition-colors rounded-xl
                                        ${selectedView === 'overview' ? 'text-white bg-[#1a1c23]' : 'text-white hover:bg-white/5'}
                                    `}
                                >
                                    OVERVIEW
                                </button>
                            </div>

                            {/* SIGMOID 2K25 (3) Accordion */}
                            <div className="w-full border-b border-white/10 pb-2 mb-2">
                                <button 
                                    onClick={() => toggleSection('sigmoid')}
                                    className="w-full px-4 py-4 flex justify-between items-center transition-colors rounded-xl text-white hover:bg-white/5"
                                >
                                    SIGMOID 2K25 (3)
                                    <ChevronDown className={`w-5 h-5 transition-transform ${expandedSections.sigmoid ? 'rotate-180' : ''}`} />
                                </button>
                                
                                {expandedSections.sigmoid && (
                                    <div className="w-full pb-2 flex flex-col gap-1 px-3 mt-1">
                                        
                                        {/* MOST WINS Menu Item */}
                                        <button 
                                            onClick={() => setSelectedView('most-wins')}
                                            className={`w-full flex items-center text-left px-4 py-3 text-sm font-semibold transition-colors rounded-xl
                                                ${selectedView === 'most-wins' ? 'text-white bg-[#0a0f29]' : 'text-white/50 hover:text-white hover:bg-white/5'}
                                            `}
                                        >
                                            MOST WINS
                                        </button>

                                        {/* Technical Events Accordion (Nested) */}
                                        <div className="w-full mt-1">
                                            <button 
                                                onClick={() => toggleSection('technical')}
                                                className="w-full px-4 py-3 flex justify-between items-center transition-colors rounded-xl text-white/80 hover:bg-white/5 hover:text-white"
                                            >
                                                TECHNICAL EVENTS (6)
                                                <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.technical ? 'rotate-180' : ''}`} />
                                            </button>
                                            {expandedSections.technical && (
                                                <div className="w-full pb-2 flex flex-col gap-1 pl-6 pr-2 mt-1">
                                                    {technicalEvents.map(evt => (
                                                        <button 
                                                            key={evt}
                                                            onClick={() => setSelectedView(evt)}
                                                            className={`w-full flex items-center text-left px-3 py-2 text-[13px] transition-colors rounded-lg
                                                                ${selectedView === evt ? 'text-white bg-[#0a0f29]' : 'text-white/40 hover:text-white hover:bg-white/5'}
                                                            `}
                                                        >
                                                            {evt}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Non Technical Events Accordion (Nested) */}
                                        <div className="w-full mt-1">
                                            <button 
                                                onClick={() => toggleSection('nontechnical')}
                                                className="w-full px-4 py-3 flex justify-between items-center transition-colors rounded-xl text-white/80 hover:bg-white/5 hover:text-white"
                                            >
                                                NON TECHNICAL (5)
                                                <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.nontechnical ? 'rotate-180' : ''}`} />
                                            </button>
                                            {expandedSections.nontechnical && (
                                                <div className="w-full pb-2 flex flex-col gap-1 pl-6 pr-2 mt-1">
                                                    {nonTechnicalEvents.map(evt => (
                                                        <button 
                                                            key={evt}
                                                            onClick={() => setSelectedView(evt)}
                                                            className={`w-full flex items-center text-left px-3 py-2 text-[13px] transition-colors rounded-lg
                                                                ${selectedView === evt ? 'text-white bg-[#0a0f29]' : 'text-white/40 hover:text-white hover:bg-white/5'}
                                                            `}
                                                        >
                                                            {evt}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                    {/* ── Right Content Area ── */}
                    <div className="flex-1 w-full min-w-0 lg:pl-10 lg:pt-2">
                        {/* Title over everything */}
                        {selectedView === 'overview' && (
                            <div className="mb-6 flex items-center justify-between">
                                <h2 className="text-[28px] sm:text-3xl font-bold uppercase tracking-tight text-white drop-shadow-lg">
                                    SIGMOID 2K25 STATS
                                </h2>
                            </div>
                        )}

                        {selectedView === 'overview' && (
                            /* OVERVIEW TAB -> 3 Columns */
                            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
                                
                                <PodiumTable title="MOST OVERALL WINS" data={topOverall} valueType="totalWins" onViewFullTable={() => setSelectedView('most-wins')} />
                                <PodiumTable title="MOST WINS IN TECHNICAL" data={topTech} valueType="techWins" onViewFullTable={() => setSelectedView('most-wins')} />
                                <PodiumTable title="MOST WINS IN NON-TECHNICAL" data={topNonTech} valueType="nonTechWins" onViewFullTable={() => setSelectedView('most-wins')} />

                            </div>
                        )}

                        {selectedView === 'most-wins' && (
                            <MostWinsTable data={sortedCollegeStatsData} />
                        )}

                        {selectedView !== 'overview' && selectedView !== 'most-wins' && (
                            /* EVENT TAB (Dynamic Podium for Top 3) */
                            <EventDetailsCards eventName={selectedView} data={sortedCollegeStatsData} />
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

// Sub-component for rendering a column exactly like the Cricket UI reference but with Glassmorphism
function PodiumTable({ title, data, valueType, onViewFullTable }) {
    if (!data || data.length === 0) return null;

    return (
        <div className="bg-white/[0.03] backdrop-blur-xl border-2 border-white/10 hover:border-white/30 transition-colors duration-300 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex flex-col w-full h-full overflow-hidden">
            <div className="p-3 border-b border-white/10 bg-white/[0.02]">
                <h3 className="text-[11px] uppercase tracking-widest font-bold text-white/50 pl-2">{title}</h3>
            </div>

            <div className="flex flex-col">
                {data.map((college, idx) => {
                    const isFirst = idx === 0;
                    const value = college[valueType];
                    const rankStr = `0${idx + 1}`.slice(-2);

                    return (
                        <div key={college.id} className={`flex items-center px-4 py-3 w-full ${
                            isFirst 
                                ? 'bg-[#0a0f29] text-white py-5 shadow-inner border-b border-[#0a0f29]' // Solid dark navy highlight
                                : 'bg-transparent text-white border-b border-white/10 hover:bg-white/5 transition-colors'
                        }`}>
                            
                            {/* Rank Column */}
                            <div className={`w-8 shrink-0 text-[12px] font-bold ${isFirst ? 'text-white' : 'text-white/50'}`}>
                                {rankStr}
                            </div>
                            
                            {/* Avatar Column (Logo) */}
                            <div className="w-10 shrink-0">
                                <div className={`w-7 h-7 rounded-full overflow-hidden flex items-center justify-center font-bold text-[9px]
                                    ${isFirst ? 'bg-white text-[#15133C]' : 'bg-white/10 text-white/80'}
                                `}>
                                    {college.logoFallback}
                                </div>
                            </div>
                            
                            {/* Name Column - Uses min-w-0 to allow text truncation without blowing out the flex container */}
                            <div className="flex-1 min-w-0 pr-4">
                                <span className={`font-bold leading-tight block truncate w-full ${isFirst ? 'text-[14px] sm:text-[15px] text-white' : 'text-[13px] sm:text-sm text-white/90'}`}>
                                    {college.name}
                                </span>
                            </div>

                            {/* Score Column */}
                            <div className="w-10 shrink-0 text-right pr-2">
                                <span className={`font-black tracking-tighter tabular-nums ${isFirst ? 'text-[20px] sm:text-[22px] text-white' : 'text-[16px] sm:text-lg text-white/80'}`}>
                                    {value}
                                </span>
                            </div>

                        </div>
                    );
                })}
            </div>

            {/* View Full Table Link */}
            <button 
                onClick={onViewFullTable}
                className="w-full p-3 mt-auto flex items-center justify-center bg-white/[0.02] hover:bg-white/[0.06] transition-colors"
            >
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/60 hover:text-white transition-colors flex items-center gap-1 group">
                    VIEW FULL TABLE
                    <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </span>
            </button>
        </div>
    );
}

// Sub-component for rendering the full detailed Most Wins list matching the Cricket UI
function MostWinsTable({ data }) {
    // Filter to only include colleges with at least 2 wins anywhere, sorted by total wins descending
    const filteredData = [...data]
        .filter(c => c.totalWins >= 2 || c.techWins >= 2 || c.nonTechWins >= 2)
        .sort((a, b) => b.totalWins - a.totalWins || b.participants - a.participants);

    if (filteredData.length === 0) return null;

    return (
        <div className="w-full flex-1">
            <h3 className="text-3xl font-black uppercase tracking-tight text-[#0052cc] drop-shadow-sm mb-6">
                MOST WINS BY A COLLEGE
            </h3>

            <div className="w-full bg-white/[0.03] backdrop-blur-xl border-2 border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden">
                
                {/* Header Row */}
                <div className="flex items-center text-[12px] font-semibold text-white/50 px-6 py-4 bg-[#1a1c23] border-b border-white/10 uppercase tracking-wider">
                    <div className="w-12 shrink-0">Pos</div>
                    <div className="flex-1 min-w-0 pr-4">College Name</div>
                    <div className="w-24 shrink-0 text-center">Wins (Overall)</div>
                    <div className="w-28 shrink-0 text-center leading-tight sm:leading-normal">Technical Event Wins</div>
                    <div className="w-28 shrink-0 text-center leading-tight sm:leading-normal">Non-Technical Event Wins</div>
                </div>

                {/* Rows */}
                <div className="flex flex-col">
                    {filteredData.map((college, idx) => {
                        const isFirst = idx === 0;
                        const rankStr = idx + 1;

                        return (
                            <div key={college.id} className={`flex items-center px-6 transition-colors w-full ${
                                isFirst 
                                    ? 'bg-[#0a0f29] text-white py-5 shadow-inner border-b border-[#0a0f29]' 
                                    : idx % 2 === 1
                                        ? 'bg-[#1a1c23] text-white py-4 border-b border-white/10 hover:bg-white/5'
                                        : 'bg-transparent text-white py-4 border-b border-white/10 hover:bg-white/5'
                            }`}>
                                
                                {/* Rank */}
                                <div className={`w-12 shrink-0 flex items-center text-[15px] font-bold ${isFirst ? 'text-white' : 'text-white/80'}`}>
                                    <span className="w-4">{rankStr}</span>
                                    <div className={`ml-3 h-[18px] w-[2px] rounded-full ${isFirst ? 'bg-white/30' : 'bg-white/10'}`}></div>
                                </div>
                                
                                {/* Avatar + College Name */}
                                <div className="flex-1 min-w-0 flex items-center gap-3 pr-4">
                                    <div className={`w-7 h-7 rounded-full overflow-hidden flex items-center justify-center font-bold text-[9px] shrink-0
                                        ${isFirst ? 'bg-white text-[#15133C]' : 'bg-white/10 text-white/80'}
                                    `}>
                                        {college.logoFallback}
                                    </div>
                                    <span className={`font-bold leading-tight block truncate ${isFirst ? 'text-[15px] sm:text-base text-white' : 'text-[14px] sm:text-[15px] text-white/90'}`}>
                                        {college.name}
                                    </span>
                                </div>

                                {/* Wins (Overall) */}
                                <div className={`w-24 shrink-0 text-center font-black tabular-nums ${isFirst ? 'text-[22px] text-white' : 'text-[16px] text-white/90'}`}>
                                    {college.totalWins}
                                </div>
                                
                                {/* Technical Event Wins */}
                                <div className={`w-28 shrink-0 text-center font-bold tabular-nums ${isFirst ? 'text-[16px] sm:text-[18px] text-white' : 'text-[14px] sm:text-[15px] text-white/80'}`}>
                                    {college.techWins}
                                </div>
                                
                                {/* Non-Technical Event Wins */}
                                <div className={`w-28 shrink-0 text-center font-bold tabular-nums ${isFirst ? 'text-[16px] sm:text-[18px] text-white' : 'text-[14px] sm:text-[15px] text-white/80'}`}>
                                    {college.nonTechWins}
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

// Sub-component for rendering Event Winners with the White Team Icon and 3-Card structure
function EventDetailsCards({ eventName, data }) {
    // 1. Gather the 1st, 2nd, and 3rd place winners for this specific event from the data.
    const winners = { 1: null, 2: null, 3: null };

    data.forEach(college => {
        college.events.forEach(evt => {
            if (evt.eventName === eventName && evt.rank && evt.rank <= 3 && !winners[evt.rank]) {
                winners[evt.rank] = {
                    collegeName: college.name,
                    logoFallback: college.logoFallback,
                    ...evt
                };
            }
        });
    });

    const hasAnyWinners = winners[1] || winners[2] || winners[3];

    // Helper for rendering a single card exactly per specifications
    const renderCard = (rank, winner) => {
        if (!winner) return null;
        
        const rankTitles = { 1: 'WINNERS (1st PRIZE)', 2: 'RUNNERS (2nd prize)', 3: '3rd prize' };
        
        return (
            <div className="flex flex-col w-full max-w-[500px]">
                {/* Title OUTSIDE and ABOVE the bordered box */}
                <span className="text-white font-bold mb-3 uppercase tracking-wide text-[16px] pl-2">
                    {rankTitles[rank]}
                </span>
                
                <div className="flex w-full bg-white/[0.03] backdrop-blur-xl border-2 border-[#0052cc] border-b-[8px] rounded-2xl p-4 sm:p-6 gap-4 sm:gap-6 relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex-row items-stretch justify-start">
                    
                    {/* LEFT SIDE: Number, Logo, College, Members */}
                    <div className="flex-1 flex flex-col justify-start min-w-0 pr-4 border-r border-white/10 pb-2">
                        
                        {/* Header: 01 | Logo Name */}
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 pb-4 border-b border-white/10">
                            <span className="text-[24px] sm:text-[28px] font-black tabular-nums tracking-tighter text-white">
                                0{rank}
                            </span>
                            <div className="w-[2px] h-8 bg-white/20 shrink-0"></div>
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-[10px] sm:text-[12px] shrink-0 bg-white text-[#15133C]">
                                {winner.logoFallback}
                            </div>
                        </div>
                        {/* Content Split depending on Event Type (Individual vs Team) */}
                        {winner.winnerName ? (
                            <div className="flex flex-col gap-4 mt-2">
                                <span className="font-bold text-white text-[14px] sm:text-[16px] leading-tight break-words line-clamp-2">
                                    {winner.collegeName}
                                </span>
                            </div>
                        ) : (
                            <>
                                <span className="font-bold text-white text-[14px] sm:text-[16px] leading-tight break-words line-clamp-2">
                                    {winner.collegeName}
                                </span>
                                
                                {/* Members List (Only for teams) */}
                                <div className="flex flex-col gap-2 mt-4">
                                    {winner.members?.map((member, i) => (
                                        <div key={i} className="flex gap-3 items-center text-[14px] sm:text-[15px] font-semibold text-white/90">
                                            <span className="text-white text-sm tabular-nums">{i + 1}.</span>
                                            <span>{member.name}</span>
                                        </div>
                                    ))}
                                    {(!winner.members || winner.members.length === 0) && (
                                        <div className="text-sm italic text-white/40">No members listed.</div>
                                    )}
                                </div>
                            </>
                        )}
                    </div>

                    {/* RIGHT SIDE: Team Icon or Individual Winner Portrait */}
                    <div className="w-[100px] sm:w-[130px] shrink-0 flex flex-col items-center justify-center pl-2 sm:pl-4 pr-4 sm:pr-6 gap-2">
                        {winner.winnerName ? (
                            <>
                                <img 
                                    src={winner.winnerImageUrl} 
                                    alt={winner.winnerName} 
                                    className="w-full h-[90px] sm:h-[120px] object-contain drop-shadow-md shrink-0"
                                    style={{ marginBottom: '-6px' }}
                                />
                                <div className="bg-[#1a1c23] border border-white/5 w-full rounded px-1.5 py-1.5 flex items-center justify-center shadow-sm z-10 w-full min-w-[100px]">
                                    <span className="text-white text-[10px] sm:text-[12px] font-bold text-center leading-tight w-full break-words">
                                        {winner.winnerName}
                                    </span>
                                </div>
                            </>
                        ) : (
                            <img 
                                src={eventName === 'Codeverse' ? '/assets/images/codeverse-team.png' : '/assets/images/people-icon.png'} 
                                alt="Team Icon" 
                                className="w-full object-contain drop-shadow-md"
                                style={eventName === 'Codeverse' ? {} : { filter: "brightness(0) invert(1)", opacity: 0.9 }} 
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="w-full flex-1 pt-2">
            {/* Event Description */}
            <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-[28px] sm:text-3xl font-black uppercase tracking-tight text-white drop-shadow-sm border-l-4 border-[#0052cc] pl-4 flex items-center gap-3">
                        {eventName}
                        <img src="/assets/images/rocket.png" alt="Rocket" className="w-12 h-12 object-contain" />
                    </h3>
                </div>
                <p className="text-white/70 max-w-3xl leading-relaxed text-[15px]">
                    This is a placeholder description for the {eventName} event. It was an incredible showcase of talent, teamwork, and innovation, bringing together the brightest minds to compete for the ultimate prize.
                </p>
            </div>

            {!hasAnyWinners ? (
                <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-10 flex flex-col items-center justify-center text-center">
                    <p className="text-white/60">Data is currently being calculated for this event.</p>
                </div>
            ) : (
                <div className="flex flex-col gap-8 w-full pb-10">
                    {/* Top Row: 1st and 2nd Place */}
                    <div className="flex flex-col xl:flex-row gap-8 justify-center w-full max-w-6xl mx-auto">
                        {winners[1] && <div className="flex-1 flex justify-center xl:justify-end">{renderCard(1, winners[1])}</div>}
                        {winners[2] && <div className="flex-1 flex justify-center xl:justify-start">{renderCard(2, winners[2])}</div>}
                    </div>
                    
                    {/* Bottom Row: 3rd Place */}
                    {winners[3] && (
                        <div className="flex justify-center w-full mt-2">
                            {renderCard(3, winners[3])}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
