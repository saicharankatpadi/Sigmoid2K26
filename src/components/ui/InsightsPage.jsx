import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Dummy knowledge base
const INSIGHTS_DATA = {
    'innovista': "Innovista is our technical event focused on groundbreaking projects and DIY creations. Present working models emphasizing Electronics, Sensors, and Software implementation. Are you looking for the registration form?",
    'click fest': "Click Fest is a non-technical photography competition. Only smartphones are allowed! Capture stunning images showcasing technical skills and unique perspectives.",
    'clickfest': "Click Fest is a non-technical photography competition. Only smartphones are allowed! Capture stunning images showcasing technical skills and unique perspectives.",
    'passes': "We offer various passes for Sigmoid 2K26 including Day Passes, All-Access Passes, and VIP Passes. You can purchase them on our main registration portal. A basic day pass starts at ₹500.",
    'registration': "Registration for technical events is separate from non-technical ones. Head to the specific event page (like Innovista or Guess Busters) to find the individual registration links.",
    'cost': "Event costs vary. Most technical events require a base registration fee of ₹200-₹500 per team. E-sports like Free Fire and BGMI have a team entry fee of ₹300. Check individual event pages for exact details.",
    'default': "I'm still learning about Sigmoid 2K26! I can tell you about specific events like Innovista, Click Fest, or general info about passes and registration."
};

const PREDEFINED_QUESTIONS = [
    { id: 1, text: "What is Innovista about?", key: "innovista", icon: "💡" },
    { id: 2, text: "How much do the passes cost?", key: "cost", icon: "🎫" },
    { id: 3, text: "Tell me about Click Fest rules", key: "click fest", icon: "📸" },
    { id: 4, text: "How do I register for events?", key: "registration", icon: "📝" },
    { id: 5, text: "What are the rules for E-sports?", key: "esports", icon: "🎮" } // default trigger
];

export const InsightsPage = () => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isThinking, setIsThinking] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isThinking]);

    const handleSend = (text) => {
        const query = (text || inputValue).trim();
        if (!query) return;

        // Add user message
        setMessages(prev => [...prev, { id: Date.now(), type: 'user', text: query }]);
        setInputValue('');
        setIsThinking(true);

        // Process response
        setTimeout(() => {
            const lowerQuery = query.toLowerCase();
            let responseText = INSIGHTS_DATA['default'];
            
            // Simple keyword matching
            for (const key of Object.keys(INSIGHTS_DATA)) {
                if (key !== 'default' && lowerQuery.includes(key)) {
                    responseText = INSIGHTS_DATA[key];
                    break;
                }
            }
            
            // Hardcode e-sports since it wasn't in the dict but is in pills
            if (lowerQuery.includes('esports') || lowerQuery.includes('e-sports')) {
                responseText = "We host BGMI and Free Fire tournaments! Check the ‘E-sports’ tab on the events page for specific rules regarding team sizes, emulators, and zone shrinking mechanics.";
            }

            setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: responseText }]);
            setIsThinking(false);
        }, 1500);
    };

    return (
        <React.Fragment>
            <style>{`
                .chat-scroll::-webkit-scrollbar {
                    width: 6px;
                }
                .chat-scroll::-webkit-scrollbar-track {
                    background: transparent;
                }
                .chat-scroll::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 10px;
                }
            `}</style>
        <div className="fixed inset-0 bg-[#0A0A0A] z-[100] flex flex-col font-sans h-[100dvh] w-screen overflow-hidden">
            {/* Background Watermark Logo - Reversed */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10 opacity-[0.03]">
                 <img src="/sigmoid-logo.png" alt="" className="w-1/2 max-w-[500px] object-contain" />
            </div>

            {/* Chat Header - Only visible when messages exist */}
            {messages.length > 0 && (
                <div className="flex items-center justify-between p-6 border-b border-white/5 relative z-10 bg-[#0A0A0A]">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#E10098] p-1.5 flex items-center justify-center shrink-0">
                            <img src="/sigmoid-logo.png" alt="Logo" className="w-full h-full object-contain rotate-12" />
                        </div>
                        <div className="flex items-center gap-3">
                            <h1 className="text-[22px] font-bold text-white tracking-tight">
                                SIGMOID Insights
                            </h1>
                            <span className="bg-white/10 text-white/70 text-[10px] font-bold px-2 py-0.5 rounded-full mt-0.5">
                                BETA
                            </span>
                        </div>
                    </div>
                    <button 
                        onClick={() => setMessages([])}
                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white/50 hover:text-white"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6L6 18M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
            )}

            {/* Floating Left Back Button for Initial State */}
            {messages.length === 0 && (
                <div className="absolute top-6 left-6 z-20">
                    <button 
                        onClick={() => navigate(-1)}
                        className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/50 hover:text-white"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6"/>
                        </svg>
                    </button>
                </div>
            )}

            {/* Main Content Area */}
            <div className={`flex-1 overflow-y-auto w-full max-w-3xl mx-auto px-6 flex flex-col relative z-10 ${messages.length === 0 ? 'justify-start pt-24 mt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]' : 'chat-scroll justify-end'}`}>
                {messages.length === 0 ? (
                    // Initial State
                    <div className="flex flex-col mb-auto">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-full bg-[#E10098] p-2 flex items-center justify-center shrink-0">
                                <img src="/sigmoid-logo.png" alt="Logo" className="w-full h-full object-contain rotate-12" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex items-end gap-3">
                                    <h1 className="text-[36px] md:text-[42px] leading-none font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] via-[#E10098] to-[#E10098] tracking-tighter uppercase mb-0.5">
                                        INSIGHTS
                                    </h1>
                                    <span className="bg-white/10 text-white/70 text-[11px] font-bold px-2.5 py-1 rounded-full mb-1">
                                        BETA
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <h2 className="text-[20px] font-semibold text-white/90 leading-snug mb-10 w-4/5">
                            Your go-to guide for SIGMOID 2K26 Campaign.
                        </h2>
                        
                        <div className="flex flex-col gap-3">
                            {PREDEFINED_QUESTIONS.map(q => (
                                <button
                                    key={q.id}
                                    onClick={() => handleSend(q.text)}
                                    className="flex items-center gap-3 w-fit px-6 py-4 rounded-full border border-white/10 bg-transparent hover:bg-white/5 transition-all text-left group"
                                >
                                    <span className="text-[#E10098] text-lg opacity-80 group-hover:opacity-100 transition-opacity">
                                        {q.icon}
                                    </span>
                                    <span className="text-[#D1D5DB] font-medium tracking-wide group-hover:text-white">
                                        {q.text}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    // Chat State
                    <div className="flex flex-col py-6 gap-8 min-h-full pb-8">
                        {messages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex flex-col ${msg.type === 'user' ? 'self-end max-w-[85%]' : 'self-start w-full'}`}
                            >
                                {msg.type === 'user' ? (
                                    <div className="bg-[#E10098] text-white px-6 py-3.5 rounded-[20px] rounded-tr-sm self-end font-medium shadow-md">
                                        {msg.text}
                                    </div>
                                ) : (
                                    <div className="flex items-start gap-3 md:gap-4 w-full max-w-[95%]">
                                        <div className="w-8 h-8 flex items-center justify-center shrink-0 mt-0.5">
                                           <img src="/sigmoid-logo.png" alt="Logo" className="w-full h-full object-contain rotate-12" />
                                        </div>
                                        <div className="text-white/90 text-[15.5px] leading-relaxed flex-1 pt-0.5">
                                            {msg.text.split('\n').map((line, i) => (
                                                <p key={i} className={i > 0 ? 'mt-2' : ''}>
                                                    {line}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                        
                        {isThinking && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex items-start gap-3 md:gap-4 self-start w-full"
                            >
                                <div className="w-8 h-8 flex items-center justify-center shrink-0 mt-0.5 opacity-60">
                                   <img src="/sigmoid-logo.png" alt="Logo" className="w-full h-full object-contain animate-pulse rotate-12" />
                                </div>
                                <div className="text-white/50 text-sm font-medium pt-1.5 animate-pulse">
                                    Thinking...
                                </div>
                            </motion.div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                )}
            </div>

            {/* Input Area */}
            <div className="w-full max-w-3xl mx-auto px-6 pb-6 relative z-10">
                <div className="relative flex items-center shadow-lg">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSend();
                        }}
                        placeholder="Type your question"
                        className="w-full bg-[#18181B] border border-white/10 rounded-[20px] py-[18px] pl-6 pr-14 text-white text-[15px] placeholder-white/30 focus:outline-none focus:border-white/20 focus:bg-[#202024] transition-all"
                    />
                    <button
                        onClick={() => handleSend()}
                        disabled={!inputValue.trim() || isThinking}
                        className={`absolute right-4 p-2 rounded-xl transition-colors ${
                            inputValue.trim() && !isThinking
                                ? 'text-[#E10098] hover:bg-white/5'
                                : 'text-white/20'
                        }`}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </div>
                
                <div className="flex flex-col items-center justify-center text-center mt-3">
                    <p className="text-[11.5px] text-white/40">
                        We are always learning. Recheck important details.
                    </p>
                    <p className="text-[11.5px] text-white/30 mt-0.5 font-medium flex items-center gap-1">
                        Powered by <strong className="text-white/60 tracking-wide ml-0.5 font-bold">NURIX</strong>
                    </p>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
};
