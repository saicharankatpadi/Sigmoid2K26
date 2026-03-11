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

        // Play audio on mount
        if (audioRef.current) {
            audioRef.current.volume = 0.5; // Adjust volume if needed
            audioRef.current.play().catch(e => console.log("Audio autoplay prevented", e));
        }

        const updateFontSize = () => {
            // Calculate size dynamically since the canvas script uses parseInt() on this prop
            // Reduced size so it doesn't take up the full screen, keeping it centered
            const calculatedSize = Math.min(window.innerWidth * 0.045, 90);
            setFontSize(`${Math.max(calculatedSize, 30)}px`);
        };

        updateFontSize();
        window.addEventListener('resize', updateFontSize);

        // Timer orchestrator
        // End the preloader right as the text fully vaporizes (around 5s)
        const t1 = setTimeout(() => {
            onComplete();
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }, 5000);

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
            <div className="w-screen h-screen flex justify-center items-center">
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
                        vaporizeDuration: 4.6,
                        fadeInDuration: 0.1,
                        waitDuration: 0.3
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
