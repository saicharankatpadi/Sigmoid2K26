import React from 'react';
import { Zap, Crosshair, Trophy, Lightbulb, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AnimatedCardStack } from './ui/animate-card-animation';

export function PromoSection() {
    const navigate = useNavigate();
    return (
        <section className="relative w-full bg-[#0A0A0A] text-white py-16 lg:py-24 overflow-hidden border-t-0">
            <div className="max-w-[1300px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-12">

                {/* Left Side Content */}
                <div className="flex-1 space-y-8 flex flex-col items-start text-left max-w-xl">
                    {/* Headlines */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.1]">
                        ONE PLATFORM <br />
                        ENDLESS <br />
                        POSSIBILITIES
                    </h1>

                    {/* Subtext */}
                    <p className="text-lg text-white/50 max-w-lg leading-relaxed font-medium">
                        Be part of a platform where creativity meets competition. Explore exciting opportunities, challenge your abilities, and shine among talented minds.
                    </p>

                    {/* Single Call to Action */}
                    <div className="pt-2">
                        <button
                            onClick={() => navigate('/register')}
                            className="flex items-center gap-3 sm:gap-4 rounded-full bg-[#ff5a00] px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl lg:px-12 lg:py-6 lg:text-2xl font-black text-white transition-all hover:bg-[#ff5a00]/90 shadow-[0_8px_40px_rgba(255,90,0,0.5)] hover:scale-[1.05] w-full max-w-full sm:max-w-[280px] lg:max-w-[320px] justify-center group"
                        >
                            Register Now <ArrowRight strokeWidth={4} size={24} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Perks List */}
                    <ul className="space-y-4 pt-6 mt-6 border-t border-white/10 text-white/80 font-medium text-sm sm:text-base">
                        <li className="flex items-center gap-3">
                            <Zap size={20} className="text-white" />
                            Exciting events designed to challenge your creativity and skills.
                        </li>
                        <li className="flex items-center gap-3">
                            <Crosshair size={20} className="text-white" />
                            Opportunities to compete, innovate, and showcase your talent.
                        </li>
                        <li className="flex items-center gap-3">
                            <Trophy size={20} className="text-white" />
                            Leaderboard and competitions to highlight top performers.
                        </li>
                        <li className="flex items-center gap-3">
                            <Lightbulb size={20} className="text-white" />
                            A platform to present ideas, collaborate, and make an impact.
                        </li>
                    </ul>
                </div>

                {/* Right Side - Animated Cards Component */}
                <div className="flex-1 flex justify-center lg:justify-end w-full pt-2 lg:pt-0">
                    <AnimatedCardStack />
                </div>

            </div>
        </section>
    );
}
