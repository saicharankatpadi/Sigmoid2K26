import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import VaporizeTextCycle, { Tag } from './vapour-text-effect';
import preloaderAudio from '../../assets/preloader_audio.mp3';

export function Preloader({ onComplete }) {
    const [fontSize, setFontSize] = React.useState("80px");
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
            
            const charWidthWeight = 0.62; 
            let calculatedSize = Math.floor(availableWidth / (text.length * charWidthWeight));

            const minSize = isMobile ? 18 : 30;
            const maxSize = isMobile ? 30 : 80;
            
            calculatedSize = Math.min(Math.max(calculatedSize, minSize), maxSize);
            setFontSize(`${calculatedSize}px`);
        };

        updateFontSize();
        window.addEventListener('resize', updateFontSize);

        // Play audio on mount
        const playAudio = () => {
            if (audioRef.current) {
                audioRef.current.volume = 0.6;
                audioRef.current.play()
                    .then(() => {
                        // Success - remove listeners
                        window.removeEventListener('mousedown', playAudio);
                        window.removeEventListener('keydown', playAudio);
                    })
                    .catch(e => console.log("Audio autoplay prevented", e));
            }
        };

        playAudio();
        window.addEventListener('mousedown', playAudio);
        window.addEventListener('keydown', playAudio);

        // Timer orchestrator
        const t1 = setTimeout(() => {
            onComplete();
            document.body.style.overflow = 'auto'; 
        }, 6000);

        return () => {
            clearTimeout(t1);
            window.removeEventListener('resize', updateFontSize);
            window.removeEventListener('mousedown', playAudio);
            window.removeEventListener('keydown', playAudio);
            document.body.style.overflow = 'auto';
            
            // Cleanup audio to prevent sound overlaps
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[99999] bg-[#050505] overflow-hidden flex justify-center items-center"
        >
            <div className="w-full h-full flex justify-center items-center px-6">
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
                        vaporizeDuration: 2.0, // Quick vaporize at the end
                        fadeInDuration: 0.5,
                        waitDuration: 3.5     // total 6.0s matching timeout
                    }}
                    direction="left-to-right"
                    alignment="center"
                    tag={Tag.H1}
                    loop={false} // Prevent indefinite cycling
                />
                {/* Audio Element */}
                <audio ref={audioRef} src={preloaderAudio} preload="auto" loop />
            </div>
        </motion.div>
    );
}
