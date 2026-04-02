import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Rocket } from 'lucide-react';

const EventCountdown = () => {
  const [isExpired, setIsExpired] = useState(false);
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

      if (distance <= 0) {
        clearInterval(timer);
        setIsExpired(true);
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

  if (isExpired) {
    return null;
  }

  return (
    <div className="relative py-20 overflow-hidden bg-[#0A0A0A]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0052cc]/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#ff6b00]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 flex justify-center">
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
          <p className="text-[#ff6b2b] text-[16px] sm:text-[18px] font-black leading-tight px-2 uppercase tracking-wide animate-pulse">
            ⏳ Last few minutes left for registration!
          </p>
          <p className="text-white/80 text-[14px] font-semibold leading-relaxed max-w-[280px] mx-auto">
            Hurry! Registrations for <span className="text-[#ffd166]">ePass</span> &amp; <span className="text-[#ffd166]">Elite Pass</span> closing very soon.
          </p>
          <a
            href="/register"
            className="inline-block mt-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#ff8a1f] to-[#ff6b2b] text-white font-black text-[14px] uppercase tracking-widest shadow-[0_8px_30px_rgba(255,106,43,0.35)] hover:scale-105 transition-transform no-underline"
          >
            Register Now
          </a>
        </div>
        </div>
      </motion.div>
    </div>
  </div>
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
