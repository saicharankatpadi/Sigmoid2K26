import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import VaporizeTextCycle, { Tag } from './vapour-text-effect';
const preloaderAudio = 'https://res.cloudinary.com/djiivo0r7/video/upload/v1773218169/preloader_audio_uxcfmm.mp3';

export function Preloader({ onComplete }) {
    const [fontSize, setFontSize] = React.useState("80px");
    const audioRef = useRef(null);

    useEffect(() => {
        // Prevent scrolling
        document.body.style.overflow = 'hidden';

        // Play audio on mount
        if (audioRef.current) {
            audioRef.current.volume = 0.5; // Adjust volume if needed
            audioRef.current.play().catch(e => console.log("Audio autoplay prevented", e));
        }

        const updateFontSize = () => {
            const isMobile = window.innerWidth < 768;
            // Cap the scale factor and max size for mobile to ensure it fits on one line
            const scaleFactor = isMobile ? 0.04 : 0.045;
            const minSize = isMobile ? 16 : 30;
            const maxSize = isMobile ? 24 : 90;
            
            const calculatedSize = Math.min(window.innerWidth * scaleFactor, maxSize);
            setFontSize(`${Math.max(calculatedSize, minSize)}px`);
        };

        updateFontSize();
        window.addEventListener('resize', updateFontSize);

        // Timer orchestrator
        // End the preloader right as the text fully vaporizes (around 4s)
        const t1 = setTimeout(() => {
            onComplete();
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }, 4000);

        return () => {
            clearTimeout(t1);
            window.removeEventListener('resize', updateFontSize);
            document.body.style.overflow = 'auto';
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[99999] bg-[#050505]"
        >
            <div className="w-screen h-screen flex justify-center items-center px-6">
                <VaporizeTextCycle
                    texts={["WELCOME TO SIGMOID 2K26"]}
                    font={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: fontSize, // Computed explicitly to valid px (e.g. "120px")
                        fontWeight: 900
                    }}
                    color="rgb(253, 245, 230)" // Cream color
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
                {/* Audio Element */}
                <audio ref={audioRef} src={preloaderAudio} preload="auto" />
            </div>
        </motion.div>
    );
}
