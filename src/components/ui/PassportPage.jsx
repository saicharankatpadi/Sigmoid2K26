import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShineBorder } from './shine-border';
const passportImg = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773510245/Happy_Birthday_Best_Friend_Instagram_Post_2_whr2wo.png';
const roadmapImg = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773218177/roadmap_ciw7sz.png';
const passportIcon = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773218151/passport-icon_wlvayt.png';

export function PassportPage() {
    const [viewFull, setViewFull] = useState(false);

    return (
        <div className="min-h-screen pt-28 pb-12 px-6 flex flex-col items-center justify-center relative overflow-hidden bg-[#0A0A0A]">

  

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-[1000px] flex flex-col items-center justify-center relative z-10"
            >
                <div className="flex flex-col items-start gap-4 w-full max-w-[420px]">
                    <div className="flex items-center gap-4 px-2 w-full justify-center mb-2">
                        <h2 className="text-white m-0 text-[22px] md:text-[28px] font-extrabold tracking-wide text-center" style={{ textShadow: '-2px 0px 0px #0ff, 2px 0px 0px #f00' }}>SIGMOID 2K26 PASSPORT</h2>
                        <div className="border-2 border-white/40 rounded-lg p-1.5 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                            <img src={passportIcon} alt="Passport Icon" className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] brightness-0 invert" />
                        </div>
                    </div>
                    
                    <ShineBorder 
                        borderRadius={24} 
                        borderWidth={2} 
                        duration={3} 
                        color={["#FF6B2B", "#a855f7", "#3b82f6"]}
                        className="bg-[#111]/40 transition-all duration-300 pointer-events-auto w-full"
                    >
                        <div className="flex flex-col items-center p-2 w-full">
                            <img src={passportImg} alt="Sigmoid Passport" className="w-full max-w-[340px] h-auto rounded-[20px] shadow-[0_12px_40px_rgba(0,0,0,0.6)] object-contain mb-6" />

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-3 w-full px-2 mb-2">
                                <button
                                    onClick={() => setViewFull(true)}
                                    className="w-full text-center relative group overflow-hidden rounded-xl bg-transparent border border-white/20 p-4 transition-all hover:bg-yellow-500 hover:text-black hover:border-yellow-500 active:bg-yellow-600 active:scale-[0.98] cursor-pointer"
                                >
                                    <span className="text-[16px] font-bold group-hover:text-black text-white transition-colors">
                                        Click here to see full passport
                                    </span>
                                </button>

                                <a
                                    href="/Sigmoid_2K26_Passport.pdf"
                                    download="Sigmoid_2K26_Passport.pdf"
                                    className="w-full text-center relative group overflow-hidden rounded-xl bg-transparent border border-white/20 p-4 transition-all hover:bg-yellow-500 hover:text-black hover:border-yellow-500 active:bg-yellow-600 active:scale-[0.98] block no-underline cursor-pointer"
                                >
                                    <span className="text-[16px] font-bold group-hover:text-black text-white transition-colors">
                                        Download Your Passport
                                    </span>
                                </a>
                            </div>
                        </div>
                    </ShineBorder>

                    {/* Description Outside the Card, Aligned Left (respects max-w container padding) */}
                    <div className="w-full text-left px-2 mt-2">
                        <p className="text-white/70 text-[15px] leading-relaxed m-0 font-sans">
                            The passport is used to identify the venue locations of event very easily...
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* In-page Roadmap Modal */}
            <AnimatePresence>
                {viewFull && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-md"
                        onClick={() => setViewFull(false)}
                    >
                        <motion.div 
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            className="relative w-full max-w-[1200px] max-h-[90vh] bg-[#111] rounded-2xl border border-white/10 p-2 shadow-[0_16px_40px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close icon */}
                            <button
                                onClick={() => setViewFull(false)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-red-500 hover:text-white hover:border-red-500 flex items-center justify-center text-white/70 transition-colors cursor-pointer border border-transparent"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                            <img src={roadmapImg} alt="Roadmap View" className="w-full h-full object-contain max-h-[85vh] rounded-[24px]" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
