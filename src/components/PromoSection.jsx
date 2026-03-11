import React from 'react';
import { FileText, Video, Trophy, MessageCircle, ArrowRight } from 'lucide-react';
import { AnimatedCardStack } from './ui/animate-card-animation';

export function PromoSection() {
    return (
        <section className="relative w-full bg-[#0A0A0A] text-white py-24 overflow-hidden border-t-0">
            <div className="max-w-[1300px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
                
                {/* Left Side Content */}
                <div className="flex-1 space-y-8 flex flex-col items-start text-left max-w-xl">
                    {/* Badge */}
                    <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-md border border-white/5 shadow-sm">
                        14,60,184+ Learners
                    </div>

                    {/* Headlines */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.1]">
                        ONE STOP <br />
                        Learning Platform <br />
                        For TECH Interviews
                    </h1>

                    {/* Subtext */}
                    <p className="text-lg text-white/50 max-w-lg leading-relaxed font-medium">
                        Learn DSA, System Design, and Core CS Subjects with personalised roadmaps, expert videos, and practice built for results.
                    </p>

                    {/* Single Call to Action */}
                    <div className="pt-2">
                        <button className="flex items-center gap-2 rounded-full bg-[#ff5a00] px-8 py-3.5 text-base font-bold text-white transition-all hover:bg-[#ff5a00]/90 shadow-[0_4px_20px_rgba(255,90,0,0.3)] hover:scale-105">
                            Register Now <ArrowRight strokeWidth={2.5} size={18} />
                        </button>
                    </div>

                    {/* Perks List */}
                    <ul className="space-y-4 pt-6 mt-6 border-t border-white/10 text-white/80 font-medium text-sm sm:text-base">
                        <li className="flex items-center gap-3">
                            <FileText size={20} className="text-white/60" />
                            Curated sheets designed for a better learning experience.
                        </li>
                        <li className="flex items-center gap-3">
                            <Video size={20} className="text-white/60" />
                            Detailed videos and editorials to help you master every problem.
                        </li>
                        <li className="flex items-center gap-3">
                            <Trophy size={20} className="text-white/60" />
                            Stay consistent with streaks and leaderboard competition.
                        </li>
                        <li className="flex items-center gap-3">
                            <MessageCircle size={20} className="text-white/60" />
                            AI-powered instant doubt support for faster learning.
                        </li>
                    </ul>
                </div>

                {/* Right Side - Animated Cards Component */}
                <div className="flex-1 flex justify-center lg:justify-end w-full pt-12 lg:pt-0">
                    <AnimatedCardStack />
                </div>
                
            </div>
        </section>
    );
}
