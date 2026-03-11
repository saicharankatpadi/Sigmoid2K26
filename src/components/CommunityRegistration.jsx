import React, { useState, useEffect } from 'react';
import bgGif from '../assets/community-bg.gif';
import youtubeIcon from '../assets/youtube-icon.svg';
import linkedinIcon from '../assets/linkedin-icon.svg';
import { SparklesText } from './ui/sparkles-text';
import { animate } from 'framer-motion';

function AnimatedNumber() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const controls = animate(0, 1460189, {
            duration: 2.5,
            ease: "easeOut",
            onUpdate(val) {
                setCount(Math.round(val));
            }
        });
        return controls.stop;
    }, []);

    const formatted = count.toLocaleString('en-IN');

    return (
        <SparklesText 
            text={`${formatted}+`}
            colors={{ first: "#ff7b00", second: "#ffb700" }} 
            className="text-[clamp(48px,8vw,80px)] font-black tracking-[-0.03em] leading-tight text-[#ff5a00] mb-4"
        />
    );
}

export function CommunityRegistration() {
    return (
        <section className="relative w-full bg-[#0A0A0A] pt-16 pb-32 overflow-hidden flex justify-center items-center">
            
            {/* Background GIF with Heavy Overlay Blending */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1100px] aspect-[16/9] pointer-events-none z-0">
                <img 
                    src={bgGif} 
                    alt="Community Background" 
                    className="w-full h-full object-cover opacity-70 filter-none"
                />
                {/* Radial gradient mask to seamlessly fade edges to #0A0A0A */}
                <div 
                    className="absolute inset-0" 
                    style={{ background: 'radial-gradient(ellipse at center, transparent 0%, #0A0A0A 70%)' }} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-[#0A0A0A] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A] pointer-events-none" />
            </div>

            {/* Foreground Centered Content */}
            <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 text-center flex flex-col items-center">
                
                {/* Main Heading Stat */}
                <AnimatedNumber />

                {/* Subheading */}
                <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em] text-white mb-6">
                    Engineers learning on TUF
                </h2>

                {/* Paragraph */}
                <p className="text-white/60 text-lg md:text-xl max-w-[700px] leading-relaxed mb-16 font-medium">
                    From YouTube to LinkedIn, our global community keeps growing every day. 
                    TUF is the go-to place for engineers preparing for tech interviews.
                </p>

                {/* Platform Metric Badges / Cards */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 w-full">
                    
                    {/* YouTube Card */}
                    <div className="flex items-center gap-4 text-left group">
                        <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#ff0000]/10 flex items-center justify-center transition-transform group-hover:scale-110">
                            <img src={youtubeIcon} alt="YouTube" className="w-8 h-8 object-contain" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-xl tracking-tight">
                                600+ Registrations
                            </span>
                            <span className="text-white/50 font-medium text-sm">
                                Sigmoid 2024
                            </span>
                        </div>
                    </div>

                    {/* Divider for Desktop */}
                    <div className="hidden sm:block w-px h-12 bg-white/10" />

                    {/* LinkedIn Card */}
                    <div className="flex items-center gap-4 text-left group">
                        <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#0077b5]/10 flex items-center justify-center transition-transform group-hover:scale-110">
                            <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 object-contain" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-xl tracking-tight">
                                1400+ registrations
                            </span>
                            <span className="text-white/50 font-medium text-sm">
                                Sigmoid 2025
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
