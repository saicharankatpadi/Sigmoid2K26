// src/components/ui/gallery-page.jsx
import React, { useState, useEffect, useRef } from 'react';
import { galleryStories, galleryHeroCards, gallery2025Images, gallery2025Masonry, gallery2024Images, gallery2024Masonry } from '../../data/gallery-data';
import { TypingAnimation } from './typing-animation';
import { AnimatedText } from './animated-shiny-text';

export function GalleryPage() {
    // We now have two sets of stories that could be viewed in the modal.
    // selectedStory keeps track of which story index AND which dataset is active.
    const [activeStoryData, setActiveStoryData] = useState({
        stories: [],
        index: null
    });

    return (
        <div className="bg-[#0A0A0A] w-full min-h-screen text-white pt-24 pb-16 font-sans overflow-x-hidden">
            
            {/* ── Story Carousel Section ── */}
            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <StoryCarousel 
                    stories={galleryStories} 
                    onStoryClick={(index) => setActiveStoryData({ stories: galleryStories, index })} 
                />
            </div>

            {/* ── Heading Above Hero ── */}
            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-6">
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white/90">
                    SIGMOID 2K26 (Promotional Content)
                </h2>
            </div>

            {/* ── Gallery Hero Section ── */}
            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <GalleryHero cards={galleryHeroCards} />
            </div>

            {/* ── SIGMOID 2K25 Story Carousel Section ── */}
            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-16 relative">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white/90 uppercase mb-8 drop-shadow-md border-l-4 border-[#2563EB] pl-3">
                    SIGMOID 2K25
                </h2>
                <div className="w-full">
                    <StoryCarousel 
                        stories={gallery2025Images} 
                        onStoryClick={(index) => setActiveStoryData({ stories: gallery2025Images, index })} 
                    />
                </div>

                {/* ── Masonry Image Scroller ── */}
                <div className="w-full mt-10 overflow-hidden relative border-t border-white/10 pt-8 -ml-4 sm:-ml-6 lg:-ml-8 pr-4 sm:pr-6 lg:pr-8 w-[calc(100%+32px)] sm:w-[calc(100%+48px)] lg:w-[calc(100%+64px)]">
                     {/* Fade mask for the left side so images smoothly disappear */}
                     <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
                     {/* Fade mask for the right side so images smoothly appear */}
                     <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
                     <MasonryImageScroll images={gallery2025Masonry} />
                </div>
            </div>

            {/* ── SIGMOID 2K24 Section ── */}
            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-16 relative">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white/90 uppercase mb-8 drop-shadow-md border-l-4 border-[#ff5a00] pl-3">
                    SIGMOID 2K24
                </h2>
                <div className="w-full">
                    <StoryCarousel 
                        stories={gallery2024Images} 
                        onStoryClick={(index) => setActiveStoryData({ stories: gallery2024Images, index })} 
                    />
                </div>

                {/* ── Masonry Image Scroller (2K24) ── */}
                <div className="w-full mt-10 overflow-hidden relative border-t border-white/10 pt-8 -ml-4 sm:-ml-6 lg:-ml-8 pr-4 sm:pr-6 lg:pr-8 w-[calc(100%+32px)] sm:w-[calc(100%+48px)] lg:w-[calc(100%+64px)]">
                     <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
                     <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
                     <MasonryImageScroll images={gallery2024Masonry} />
                </div>
            </div>

            {/* ── StoryViewer Modal ── */}
            {activeStoryData.index !== null && (
                <StoryViewer 
                    stories={activeStoryData.stories} 
                    currentIndex={activeStoryData.index} 
                    onClose={() => setActiveStoryData({ stories: [], index: null })}
                    onNavigate={(newIndex) => setActiveStoryData(prev => ({ ...prev, index: newIndex }))}
                />
            )}
        </div>
    );
}

// ── Icons ──
const CheckCircleIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="#3B82F6" className="inline-block ml-1 relative -top-[1px]">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#3B82F6" />
    </svg>
);

// ── Components ──

function StoryCarousel({ stories, onStoryClick }) {
    return (
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 scrollbar-hide snap-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {stories.map((story, index) => (
                <div 
                    key={story.id} 
                    className="flex flex-col items-center gap-2 shrink-0 cursor-pointer group w-[90px] sm:w-[124px] snap-start"
                    onClick={() => onStoryClick(index)}
                >
                    {/* Circular Avatar */}
                    <div className="relative p-[3px] rounded-full bg-gradient-to-tr from-[#FF6B2B] via-[#FF8F1F] to-[#2563EB] transition-transform duration-300 group-hover:scale-105">
                        <div className="p-[3px] bg-[#0A0A0A] rounded-full relative">
                            {story.thumbnailUrl?.includes('.mp4') ? (
                                <video 
                                    src={`${story.thumbnailUrl}#t=0.1`}
                                    className="w-[76px] h-[76px] sm:w-[94px] sm:h-[94px] rounded-full object-cover border border-white/10 group-hover:border-white/20 transition-colors"
                                    preload="metadata"
                                    muted
                                    playsInline
                                />
                            ) : (
                                <img 
                                    src={story.thumbnailUrl} 
                                    alt={story.title} 
                                    className="w-[76px] h-[76px] sm:w-[94px] sm:h-[94px] rounded-full object-cover border border-white/10 group-hover:border-white/20 transition-colors"
                                />
                            )}
                            
                            {/* Play Icon Overlay */}
                            <div className="absolute inset-0 z-10 flex items-center justify-center p-[3px]">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 backdrop-blur-[2px] border border-white/30 flex items-center justify-center group-hover:bg-[#3B82F6]/50 group-hover:border-[#3B82F6] transition-all duration-300">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white" className="ml-1 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform">
                                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Title & Description */}
                    <div className="flex flex-col items-center mt-1">
                        {story.subtitle && (
                            <p className={`text-[10px] sm:text-[11px] font-bold text-center uppercase tracking-wider mb-0.5 ${story.subtitle.includes('2K25') ? 'text-[#3B82F6]' : 'text-[#ff5a00]'}`}>
                                {story.subtitle}
                            </p>
                        )}
                        <p className="text-[12px] sm:text-[13px] font-semibold text-center text-white/90 leading-tight line-clamp-1 opacity-90 group-hover:opacity-100 transition-opacity">
                            {story.title}
                        </p>
                        {story.description && (
                            <p className="text-[10px] sm:text-[11px] font-medium text-center text-white/50 leading-tight line-clamp-2 mt-0.5 px-1">
                                {story.description}
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

function GalleryHero({ cards }) {
    return (
        <div className="relative w-full overflow-visible flex flex-col justify-end pb-0 mt-8 mb-24 sm:mb-32 rounded-2xl md:rounded-3xl border-2 border-white/20">
            
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0 bg-[#0A0A0A]">
                <img 
                    src="/hero-bg.jpeg" 
                    alt="Hero Background" 
                    className="w-full h-full object-cover object-top opacity-50 md:opacity-80 rounded-2xl md:rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/40 rounded-2xl md:rounded-3xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent rounded-2xl md:rounded-3xl" />
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 pt-8 lg:pt-10 flex flex-col items-center">

                {/* Titles - Centered entirely (SIGMOID 2K26 above RETRO FUTURISM) */}
                <div className="max-w-4xl flex flex-col items-center text-center gap-4 sm:gap-6 relative z-30 mb-8 sm:mb-12 mt-2">
                    <TypingAnimation 
                        text="SIGMOID 2K26"
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-[0.2em] drop-shadow-lg"
                    />
                    <AnimatedText 
                        text="RETRO FUTURISM"
                        textClassName="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase drop-shadow-md"
                        gradientColors="linear-gradient(90deg, #FF8F1F, #FFD700, #FF8F1F)"
                    />
                </div>

                {/* Video Cards Row */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-4 z-30 relative translate-y-20 sm:translate-y-28">
                    {cards.map((card, index) => (
                        <CardItem key={card.id} card={card} isLeftmost={index === 0} />
                    ))}
                </div>

            </div>
        </div>
    );
}

function CardItem({ card, isLeftmost }) {
    return (
        <div className="group cursor-pointer flex flex-col gap-3">
            {/* Thumbnail Box */}
            <div className="relative aspect-[16/9] md:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-transparent group-hover:border-white/20 transition-all duration-300">
                <img 
                    src={card.thumbnailUrl} 
                    alt={card.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 md:opacity-80"
                />
                
                {/* Dark Blue Left Gradient Overlay (mimicking reference #3) */}
                <div 
                    className="absolute inset-0 z-10"
                    style={{
                        background: 'linear-gradient(105deg, #0A0A2A 0%, #0A0A2A 45%, transparent 60%)'
                    }}
                />

                {/* Right Bottom Zig-Zag Graphic */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 z-20 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
                    <div 
                        className="absolute inset-0"
                        style={{
                            background: '#FF1493',
                            clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 70% 30%, 40% 10%, 20% 50%)',
                            transform: 'scale(1.1)'
                        }}
                    />
                    <div 
                        className="absolute inset-0"
                        style={{
                            background: '#00D8FF',
                            clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 70% 30%, 40% 10%, 20% 50%)',
                        }}
                    />
                </div>

                {/* Play Button Setup */}
                <div className="absolute inset-0 z-30 p-4 sm:p-6 flex flex-col justify-between">
                    {/* Top Circle Play Button */}
                    <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-1">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                    </div>

                    {/* Left overlay text (e.g. SANTNER SPEAKS) */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-white font-extrabold text-xl sm:text-2xl uppercase leading-none w-3/4 drop-shadow-md">
                            {card.tags[0] || "PROMO VIDEO"}
                        </h3>
                    </div>
                </div>
            </div>

            {/* Info Section Below Card */}
            <div className="flex flex-col gap-1 px-1">
                <p className="text-white/60 text-[12px] md:text-[13px] font-semibold tracking-wide italic uppercase">
                    SIGMOID 2K26
                </p>
                <h4 className="text-white text-[14px] md:text-[15px] font-bold leading-snug group-hover:text-[#3B82F6] transition-colors">
                    {card.title}
                </h4>
            </div>
        </div>
    );
}

// ── Story Viewer Modal Component ──
function StoryViewer({ stories, currentIndex, onClose, onNavigate }) {
    const story = stories[currentIndex];
    const videoRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(false);

    // Progress bar effect
    useEffect(() => {
        let animationFrame;
        const updateProgress = () => {
            if (videoRef.current) {
                const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
                setProgress(percentage || 0);
            }
            if (isPlaying) {
                animationFrame = requestAnimationFrame(updateProgress);
            }
        };
        
        if (isPlaying) {
            animationFrame = requestAnimationFrame(updateProgress);
        }
        return () => cancelAnimationFrame(animationFrame);
    }, [isPlaying]);

    // Handle video end
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleEnded = () => {
            if (currentIndex < stories.length - 1) {
                onNavigate(currentIndex + 1);
            } else {
                onClose(); // Close if it's the last story
            }
        };

        video.addEventListener('ended', handleEnded);
        return () => video.removeEventListener('ended', handleEnded);
    }, [currentIndex, stories.length, onClose, onNavigate]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight' && currentIndex < stories.length - 1) onNavigate(currentIndex + 1);
            if (e.key === 'ArrowLeft' && currentIndex > 0) onNavigate(currentIndex - 1);
            if (e.key === ' ') {
                e.preventDefault();
                togglePlay();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex, stories.length, onClose, onNavigate]);

    const handlePrevious = (e) => {
        e.stopPropagation();
        if (currentIndex > 0) onNavigate(currentIndex - 1);
    };

    const handleNext = (e) => {
        e.stopPropagation();
        if (currentIndex < stories.length - 1) onNavigate(currentIndex + 1);
        else onClose();
    };

    const togglePlay = (e) => {
        if(e) e.stopPropagation();
        if (videoRef.current) {
            if (isPlaying) videoRef.current.pause();
            else videoRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = (e) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md">
            
            {/* Close Button */}
            <button 
                onClick={onClose}
                className="absolute top-6 right-6 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>

            {/* Desktop Navigation Overlays (Click outside video to navigate) */}
            <div className="absolute inset-y-0 left-0 w-1/3 cursor-w-resize z-10 hidden md:block" onClick={handlePrevious} />
            <div className="absolute inset-y-0 right-0 w-1/3 cursor-e-resize z-10 hidden md:block" onClick={handleNext} />

            {/* Main Story Container */}
            <div className="relative w-full max-w-[400px] h-[100dvh] md:h-[85vh] md:rounded-[2rem] overflow-hidden bg-[#1A1A1A] flex flex-col items-center justify-center shadow-2xl z-20"
                 onClick={togglePlay}
            >
                
                {/* Progress Bar Container */}
                <div className="absolute top-0 left-0 right-0 z-30 flex gap-1 p-4 px-3 pt-5 pointer-events-none">
                    {stories.map((_, i) => (
                        <div key={i} className="flex-1 h-1 rounded-full bg-white/30 overflow-hidden">
                            <div 
                                className="h-full bg-white transition-all duration-100 ease-linear"
                                style={{ 
                                    width: i < currentIndex ? '100%' : i === currentIndex ? `${progress}%` : '0%' 
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Top Overlay Info */}
                <div className="absolute top-8 left-0 right-0 z-30 px-4 flex justify-between items-start pointer-events-none mt-2">
                    <div className="flex flex-col gap-1 w-3/4">
                        <span className="text-white text-sm font-bold shadow-md truncate pr-4">{story.title}</span>
                        {story.description && (
                            <span className="text-white/80 text-[11px] leading-snug drop-shadow-md line-clamp-3">
                                {story.description}
                            </span>
                        )}
                    </div>
                </div>

                {/* Right Side Actions */}
                <div className="absolute top-16 right-4 z-40 flex flex-col gap-5 items-center">
                    <button onClick={toggleMute} className="p-2 text-white drop-shadow-lg opacity-90 hover:opacity-100 transition-opacity">
                        {isMuted ? (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
                        ) : (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                        )}
                    </button>
                    <button onClick={togglePlay} className="p-2 text-white drop-shadow-lg opacity-90 hover:opacity-100 transition-opacity">
                        {isPlaying ? (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                        ) : (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        )}
                    </button>
                    <button className="p-2 text-white drop-shadow-lg opacity-90 hover:opacity-100 transition-opacity">
                         <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </button>
                </div>

                {/* Video Element */}
                <video 
                    ref={videoRef}
                    src={story.videoUrl}
                    poster={story.thumbnailUrl}
                    className="w-full h-full object-cover"
                    autoPlay
                    playsInline
                    muted={isMuted}
                />

                {/* Bottom Graphic Overlay (matching ICC style) */}
                <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none">
                    {/* Pink/Blue jagged shape overlay */}
                    <div 
                        className="absolute bottom-0 left-0 w-full h-[120%]"
                        style={{
                            background: 'linear-gradient(135deg, transparent 40%, #E11D48 40%, #E11D48 100%)',
                            clipPath: 'polygon(0 80%, 20% 100%, 0 100%)',
                        }}
                    />
                    <div 
                        className="absolute bottom-0 left-0 w-full h-full"
                        style={{
                            background: '#FF1493', // Vibrant pink
                            clipPath: 'polygon(0 100%, 0 60%, 15% 75%, 30% 60%, 45% 85%, 60% 70%, 75% 95%, 90% 80%, 100% 100%)',
                            opacity: 0.9
                        }}
                    />
                    
                    {/* Dark Title Card Overlaid */}
                    <div className="absolute bottom-12 left-6 right-6 bg-[#0B0B2A] rounded-lg p-4 border border-[#3B82F6]/30 shadow-2xl">
                        <h3 className="text-white font-extrabold text-sm uppercase leading-tight">
                            {story.title}
                        </h3>
                    </div>
                </div>
            </div>

            {/* Desktop Arrow Navigation Buttons */}
            <button 
                onClick={handlePrevious}
                className="hidden md:flex absolute left-[calc(50%-280px)] top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm transition-colors z-50 pointer-events-auto"
                disabled={currentIndex === 0}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button 
                onClick={handleNext}
                className="hidden md:flex absolute right-[calc(50%-280px)] top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm transition-colors z-50 pointer-events-auto"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>

        </div>
    );
}

function MasonryMedia({ item }) {
    if (!item) return null;
    const isVideo = item.url?.toLowerCase().endsWith('.mp4');
    return (
        <>
            {isVideo ? (
                <video 
                    src={`${item.url}#t=0.1`} 
                    className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                    preload="metadata"
                    muted
                    playsInline
                />
            ) : (
                <img 
                    src={item.url} 
                    alt={item.alt} 
                    className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700" 
                />
            )}
            <div className="absolute inset-0 bg-black/10 group-hover/card:bg-transparent transition-colors" />
        </>
    );
}

// ── Masonry Image Scroll Component ──
function MasonryImageScroll({ images }) {
    // Group into chunks of 6 to match the pattern: [1 Tall] [2 Stacked] [1 Large] [2 Stacked]
    const chunks = [];
    for (let i = 0; i < images.length; i += 6) {
        chunks.push(images.slice(i, i + 6));
    }

    // Duplicate chunks array so the CSS marquee can loop seamlessly
    const duplicatedChunks = [...chunks, ...chunks];

    return (
        <div className="relative w-full overflow-hidden flex pb-4 pt-2 group">
            
            {/* Inline CSS for limitless scrolling animation */}
            <style>
                {`
                    @keyframes scroll-left {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-scroll-left {
                        animation: scroll-left 50s linear infinite;
                    }
                    .animate-scroll-left:hover {
                        animation-play-state: paused;
                    }
                `}
            </style>

            <div className="flex gap-4 sm:gap-6 w-max animate-scroll-left pl-4">
                {duplicatedChunks.map((chunk, chunkIndex) => (
                    <div key={chunkIndex} className="flex gap-4 sm:gap-6 shrink-0 h-[200px] sm:h-[300px]">
                        
                        {/* Column 1: Tall Vertical Image */}
                        {chunk[0] && (
                            <div className="w-[120px] sm:w-[180px] h-full rounded-2xl overflow-hidden shrink-0 group/card relative transition-colors">
                                <MasonryMedia item={chunk[0]} />
                            </div>
                        )}

                        {/* Column 2: Stacked Small Images */}
                        <div className="flex flex-col gap-4 sm:gap-6 shrink-0 w-[140px] sm:w-[220px]">
                            {chunk[1] && (
                                <div className="flex-1 rounded-2xl overflow-hidden group/card relative transition-colors">
                                    <MasonryMedia item={chunk[1]} />
                                </div>
                            )}
                            {chunk[2] && (
                                <div className="flex-1 rounded-2xl overflow-hidden group/card relative transition-colors">
                                    <MasonryMedia item={chunk[2]} />
                                </div>
                            )}
                        </div>

                        {/* Column 3: Large Center Image */}
                        {chunk[3] && (
                            <div className="w-[200px] sm:w-[320px] h-full rounded-2xl overflow-hidden shrink-0 group/card relative transition-colors">
                                <MasonryMedia item={chunk[3]} />
                            </div>
                        )}

                        {/* Column 4: Stacked Small Images */}
                        <div className="flex flex-col gap-4 sm:gap-6 shrink-0 w-[140px] sm:w-[220px]">
                            {chunk[4] && (
                                <div className="flex-1 rounded-2xl overflow-hidden group/card relative transition-colors">
                                    <MasonryMedia item={chunk[4]} />
                                </div>
                            )}
                            {chunk[5] && (
                                <div className="flex-1 rounded-2xl overflow-hidden group/card relative transition-colors">
                                    <MasonryMedia item={chunk[5]} />
                                </div>
                            )}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
