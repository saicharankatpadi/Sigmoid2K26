import React, { useState, useEffect } from 'react';
const bgGif = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773218177/community-bg_fo9mvj.gif';
const leftLogo = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773266800/WhatsApp_Image_2026-03-11_at_15.04.14-removebg-preview_vaakxz.png';
const rightLogo = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773266990/WhatsApp_Image_2026-03-11_at_15.03.22-removebg-preview_xltpxs.png';
import { SparklesText } from './ui/sparkles-text';
import { animate } from 'framer-motion';

function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 768);
    useEffect(() => {
        const mq = window.matchMedia('(min-width: 768px)');
        const handler = (e) => setIsDesktop(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);
    return isDesktop;
}

function AnimatedNumber() {
    const isDesktop = useIsDesktop();
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isDesktop) return;
        const controls = animate(0, 1800, {
            duration: 2.5,
            ease: "easeOut",
            onUpdate(val) {
                setCount(Math.round(val));
            }
        });
        return controls.stop;
    }, [isDesktop]);

    const displayCount = isDesktop ? count : 1800;
    const formatted = displayCount.toLocaleString('en-IN');

    return (
        <SparklesText
            text={`${formatted}+`}
            colors={{ first: "#ff9100", second: "#ffcc00" }}
            className="text-[clamp(48px,8vw,80px)] font-black tracking-[-0.03em] leading-tight text-[#ff7a00] mb-4 drop-shadow-[0_0_15px_rgba(255,122,0,0.6)]"
        />
    );
}

function AnimatedCountDown({ target, from }) {
    const isDesktop = useIsDesktop();
    const [count, setCount] = useState(from);

    useEffect(() => {
        if (!isDesktop) return;
        const controls = animate(from, target, {
            duration: 2.5,
            ease: "easeOut",
            onUpdate(val) {
                setCount(Math.round(val));
            }
        });
        return controls.stop;
    }, [isDesktop, from, target]);

    if (!isDesktop) return <span>{target}+</span>;
    return <span>{count}+</span>;
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
            <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6 text-center flex flex-col items-center md:flex-row md:justify-between md:gap-10">

                <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
                    {/* Main Heading Stat */}
                    <AnimatedNumber />

                    {/* Subheading */}
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.02em] text-white mb-4 md:mb-6 drop-shadow-md">
                        Registrations
                    </h2>

                    {/* Paragraph */}
                    <p className="text-white/80 text-lg md:text-xl max-w-[500px] leading-relaxed mb-8 md:mb-0 font-semibold drop-shadow-sm">
                        From all over the nation, talent arrives to shine together at Sigmoid.
                    </p>
                </div>

                {/* Platform Metric Badges / Cards */}
                <div className="flex flex-row items-center justify-center gap-4 sm:gap-12 relative flex-1 mt-4 md:mt-0">

                    {/* Left Custom Logo Card */}
                    <div className="flex flex-col items-center gap-2 text-center group scale-90 sm:scale-100">
                        <div className="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                            <img src={leftLogo} alt="Logo Left" className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-extrabold text-xl tracking-tight drop-shadow-md">
                                <AnimatedCountDown target={800} from={1200} /> Registrations
                            </span>
                            <span className="text-white/70 font-bold text-sm">
                                Sigmoid 2k24
                            </span>
                        </div>
                    </div>

                    {/* Divider for Mobile (Thick) and Desktop */}
                    <div className="w-[2px] h-12 bg-white/20 shadow-[0_0_8px_rgba(255,255,255,0.3)] md:w-px" />

                    {/* Right Custom Logo Card */}
                    <div className="flex flex-col items-center gap-2 text-center group scale-90 sm:scale-100">
                        <div className="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                            <img src={rightLogo} alt="Logo Right" className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] scale-[1.2]" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-extrabold text-xl tracking-tight drop-shadow-md">
                                <AnimatedCountDown target={1000} from={1500} /> Registrations
                            </span>
                            <span className="text-white/70 font-bold text-sm">
                                Sigmoid 2k25
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
