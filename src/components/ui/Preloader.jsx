import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VaporizeTextCycle, { Tag } from './vapour-text-effect';
const preloaderAudio = 'https://res.cloudinary.com/djiivo0r7/video/upload/v1773218169/preloader_audio_uxcfmm.mp3';

export function Preloader({ onComplete }) {
    const [fontSize, setFontSize] = useState("80px");
    const [isStarted, setIsStarted] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        // Prevent scrolling
        document.body.style.overflow = 'hidden';

        const updateFontSize = () => {
            const containerWidth = window.innerWidth;
            const isMobile = containerWidth < 768;
            
            const text = "WELCOME TO SIGMOID 2K26";
            const margin = isMobile ? 48 : 80; 
            const availableWidth = containerWidth - margin;
            
            // Increased weight to be more conservative and prevent sticking to edges
            const charWidthWeight = 0.62; 
            let calculatedSize = Math.floor(availableWidth / (text.length * charWidthWeight));

            const minSize = isMobile ? 18 : 30;
            const maxSize = isMobile ? 30 : 80;
            
            calculatedSize = Math.min(Math.max(calculatedSize, minSize), maxSize);
            setFontSize(`${calculatedSize}px`);
        };

        updateFontSize();
        window.addEventListener('resize', updateFontSize);

        if (!isStarted) {
            return () => {
                window.removeEventListener('resize', updateFontSize);
            };
        }

        // Play audio when started
        if (audioRef.current) {
            audioRef.current.volume = 0.6;
            audioRef.current.play().catch(e => console.log("Audio play failed", e));
        }

        // Timer orchestrator
        const t1 = setTimeout(() => {
            onComplete();
            document.body.style.overflow = 'auto'; 
        }, 4000);

        return () => {
            clearTimeout(t1);
            window.removeEventListener('resize', updateFontSize);
            document.body.style.overflow = 'auto';
        };
    }, [isStarted, onComplete]);

    const handleStart = () => {
        setIsStarted(true);
    };

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[99999] bg-[#050505] overflow-hidden flex justify-center items-center"
        >
            <AnimatePresence>
                {!isStarted && (
                    <motion.div 
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex flex-col justify-center items-center z-[100000] bg-[#050505]"
                    >
                        <motion.button 
                            onClick={handleStart}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md text-white/90 font-sans text-sm font-medium tracking-[0.05em] shadow-[0_4px_24px_rgba(0,0,0,0.5)] flex items-center gap-2 group hover:border-white/20 transition-colors"
                        >
                            <span>TAP TO ENTER</span>
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                        </motion.button>
                        <span className="text-white/30 text-[11px] font-sans mt-3 tracking-wide">Unlocks immersive audio</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className={`w-full h-full flex justify-center items-center px-6 transition-opacity duration-500 ${isStarted ? 'opacity-100' : 'opacity-0'}`}>
                {isStarted && (
                    <VaporizeTextCycle
                        texts={["WELCOME TO SIGMOID 2K26"]}
                        font={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: fontSize, 
                            fontWeight: 900
                        }}
                        color="rgb(253, 245, 230)" 
                        spread={8}
                        density={6}
                        animation={{
                            vaporizeDuration: 3.5,
                            fadeInDuration: 0.1,
                            waitDuration: 0.1
                        }}
                        direction="left-to-right"
                        alignment="center"
                        tag={Tag.H1}
                    />
                )}
                {/* Audio Element */}
                <audio ref={audioRef} src={preloaderAudio} preload="auto" />
            </div>
        </motion.div>
    );
}
