import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Rocket } from 'lucide-react';

const EventCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date('2026-04-03T09:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="bg-[#1a1c23]/60 backdrop-blur-xl rounded-[40px] px-4 py-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-full max-w-[90vw] sm:max-w-[400px] text-center border border-white/10 mx-auto">
        <h3 className="text-white/60 text-[12px] sm:text-[14px] font-black tracking-[0.2em] uppercase mb-6 sm:mb-8">
          Countdown
        </h3>

        {/* Timer Bar */}
        <div className="bg-[#0A0A0A]/80 rounded-3xl flex items-center justify-between p-4 sm:p-6 mb-8 sm:mb-10 shadow-inner relative overflow-hidden border border-white/5">
          {/* Subtle gradient overlay for the bar */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent pointer-events-none"></div>
          
          <TimeUnit value={timeLeft.days} label="Days" />
          <div className="w-[1px] h-8 bg-white/10"></div>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <div className="w-[1px] h-8 bg-white/10"></div>
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <div className="w-[1px] h-8 bg-white/10"></div>
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>

        <div className="space-y-4">
          <p className="text-white text-[18px] sm:text-[20px] font-bold leading-tight px-2">
            Get Ready for SIGMOID 2K26! Build your logic and ignite your innovation.
          </p>
          <p className="text-gray-400 text-[13px] font-medium leading-relaxed max-w-[280px] mx-auto">
            Experience the synergy of engineering and creativity at the most awaited tech-fest.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const TimeUnit = ({ value, label }) => (
  <div className="flex flex-col items-center flex-1">
    <span className="text-white text-2xl sm:text-3xl font-black tabular-nums tracking-tighter">
      {String(value).padStart(2, '0')}
    </span>
    <span className="text-white/40 text-[9px] uppercase font-black tracking-widest mt-1">
      {label}
    </span>
  </div>
);

export default EventCountdown;
