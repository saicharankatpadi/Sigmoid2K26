import React, { useState, useEffect } from 'react';
const bgGif = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773218177/community-bg_fo9mvj.gif';
const leftLogo = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773266800/WhatsApp_Image_2026-03-11_at_15.04.14-removebg-preview_vaakxz.png';
const rightLogo = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773266990/WhatsApp_Image_2026-03-11_at_15.03.22-removebg-preview_xltpxs.png';
import { SparklesText } from './ui/sparkles-text';
import { animate } from 'framer-motion';

function AnimatedNumber() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const controls = animate(0, 1800, {
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
            colors={{ first: "#ff9100", second: "#ffcc00" }} 
            className="text-[clamp(48px,8vw,80px)] font-black tracking-[-0.03em] leading-tight text-[#ff7a00] mb-4 drop-shadow-[0_0_15px_rgba(255,122,0,0.6)]"
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
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.02em] text-white mb-6 drop-shadow-md">
                    Registrations in Sigmoid
                </h2>

                {/* Paragraph */}
                <p className="text-white/80 text-lg md:text-xl max-w-[700px] leading-relaxed mb-16 font-semibold drop-shadow-sm">
                    From all over the nation, talent arrives to shine together
                </p>

                {/* Platform Metric Badges / Cards */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 w-full relative">
                    
                    {/* Left Custom Logo Card */}
                    <div className="flex items-center gap-4 text-left group">
                        <div className="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                            <img src={leftLogo} alt="Logo Left" className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-extrabold text-xl tracking-tight drop-shadow-md">
                                800+ Registrations
                            </span>
                            <span className="text-white/70 font-bold text-sm">
                                Sigmoid 2024
                            </span>
                        </div>
                    </div>

                    {/* Divider for Desktop */}
                    <div className="hidden sm:block w-px h-12 bg-white/20 shadow-[0_0_8px_rgba(255,255,255,0.3)]" />

                    {/* Right Custom Logo Card */}
                    <div className="flex items-center gap-4 text-left group">
                        <div className="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                            <img src={rightLogo} alt="Logo Right" className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-extrabold text-xl tracking-tight drop-shadow-md">
                                1800+ Registrations
                            </span>
                            <span className="text-white/70 font-bold text-sm">
                                Sigmoid 2025
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
