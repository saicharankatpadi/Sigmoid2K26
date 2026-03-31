import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const InsightsFAB = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Expand after 3s delay on landing
        const expandTimer = setTimeout(() => {
            setIsExpanded(true);
        }, 3000);

        // Collapse after 3 seconds of being expanded
        const collapseTimer = setTimeout(() => {
            setIsExpanded(false);
        }, 6000); // 3000ms delay + 3000ms expanded = 6000ms total

        return () => {
            clearTimeout(expandTimer);
            clearTimeout(collapseTimer);
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-end justify-end group">
            <motion.button
                onClick={() => navigate('/insights')}
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
                layout
                className="flex items-center justify-center bg-[#18181B] border border-white/10 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.15)] overflow-hidden transition-all duration-300 hover:border-[#F97316]/50 hover:shadow-[0_0_25px_rgba(249,115,22,0.3)] bg-gradient-to-r hover:from-[#18181B] hover:to-[#27272A]"
                style={{ height: '56px' }}
                initial={{ width: '56px' }}
                animate={{ width: isExpanded ? 'auto' : '56px' }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
                <div className="flex items-center h-full px-2 w-full">
                    {/* Compact Logo State */}
                    <motion.div
                        layout="position"
                        className="flex items-center justify-center shrink-0 w-10 h-10 rounded-full bg-[#3A3A3A] p-1.5 border border-white/5"
                    >
                         <img src="/assets/images/hostel/logo.png" alt="Sigmoid Logo" className="w-full h-full object-contain" />
                    </motion.div>

                    {/* Expanded Text State */}
                    <AnimatePresence mode="popLayout">
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, x: -10, width: 0 }}
                                animate={{ opacity: 1, x: 0, width: 'auto' }}
                                exit={{ opacity: 0, x: -10, width: 0 }}
                                transition={{ duration: 0.2 }}
                                className="flex flex-col items-start pr-4 pl-3 whitespace-nowrap"
                            >
                                <span className="text-white text-[15px] font-bold leading-tight tracking-wide">
                                    <span className="text-[#F97316]">SIGMOID</span> INSIGHTS
                                </span>
                                <span className="text-white/50 text-[11px] font-medium tracking-wider">
                                    ASK ME ANYTHING
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.button>
        </div>
    );
};
