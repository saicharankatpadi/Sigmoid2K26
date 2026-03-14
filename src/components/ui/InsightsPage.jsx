import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Comprehensive Sigmoid 2K26 Knowledge Base
const INSIGHTS_DATA = {
    // Technical Events
    'technovate': "Technovate is our Paper Presentation event. Objective: Design a captivating MS-PPT to communicate research. Topics: 5G, E-Waste, IoT, VLSI, AI/ML, Robotics, etc. Rounds: 1. Online Submission, 2. PPT Presentation (8+2 mins), 3. Viva Voce. IEEE format mandatory. AI tools like ChatGPT prohibited. Coordinators: Sadvika (+91 9182995727), Dhanunjaya (+91 9392583330).",
    'techfusion': "Technovate (formerly Techfusion in some drafts) is the official Paper Presentation event of SIGMOID 2K26. It focuses on research communication using MS-PPT.",
    'posterize': "Posterize: Showcase your research visually. Domains: AI, ML, IoT, VLSI, Embedded, Cyber, Robotics, Cloud. Submit abstract by April 2nd. 7-8 min presentation on event day. Carry physical poster.",
    'innovista': "Innovista (Avishkar): Project Expo & DIY. Showcase Electronics, Sensors, and Software models. Physically exhibit working model + abstract. Coordinators: Luqman (+91 89781 03095), Ganesh (+91 79811 14228), Vishnu (+91 80744 87843), Anusha, Meena, Siri Sree, Vajaswani.",
    'avishkar': "Avishkar is now Innovista! redifine innovation with Project Expo and DIY awards.",
    'circuitrix': "Circuitrix: Round 1 (Day 1) is a 25-question QR quiz (Analog/Digital, Network Theory, Devices). Round 2 (Day 2) is circuit building & viva in teams of 3. Coordinators: V. Rajeswari (+91 86391 55953), T. Karthik Veera (+91 90636 02411), Hensi (+91 99088 80334), Navya Sri (+91 96425 92212), Hari Prasad (+91 93812 43316), Naveen (+91 63052 31235), Hansika (+91 91829 19932).",
    'codex': "Codex: Round 1 (Logic Wars) - 20 timed MCQs (C, Python, Java) at MB107. Round 2 (WebThon) - 75 mins Fullstack app development in teams. Top 30 qualify. Coordinators: C. Sairabhanu (#9398073899), Mani Prabhas (#9490210698), Subramanyam (#9391361665), Lavanya (#7013640048), Meena (#7780762115), S. Karthikeya (#91772 26748), V. Vasavi (#8074270643).",
    'quizmania': "QuizMania: Tech-Q event. 3 rounds: Qualifier (paper quiz), Collaborative (teams of 4), and Championship (bit-scoring). Coordinators: M. Supriya (+91 63045 03230), Bmd. Nisar (+91 76708 35228), B. Harish (+91 91602 50442), N. Plavyasri (+91 83282 42635), G. Rajitha (+91 76708 94344).",
    
    // Non-Technical Events
    'click fest': "Click Fest: Smartphone Photography only. No AI. Finalists featured in online gallery. Coordinators: N. Vineeth (#9491040770), N. Sravani (#95026 11644), KS. Sohail (#9398767095), S. Mehak (#8885290919).",
    'dumbcharades': "Dumbcharades & Pictionary: Round 1 - Acting. Round 2 - Drawing. Top 5 teams advance. Coordinators: Vinusha (+91 90633 11805), Samad (+91 96526 10402), Dinesh (+91 91820 58605), Gowtham Kumar (+91 72078 79396), Prameela, NagaLakshmi, Nandini, Thanmai, Abuzar, Mahendra.",
    'guessbusters': "GuessBusters: The ultimate Tech Quiz. Test your knowledge across core ECE subjects and general tech. Coordinators: S. Sreeja (#8309121655), B. Chandhu (#7386041695).",
    'dynamic': "Dynamic is a part of our Techfusion masterclass series, focusing on rapid problem-solving and algorithmic thinking.",

    // General
    'department': "The ECE Department at SVUCE is led by Dr. T. Ramashri (HOD). It is known for its academic excellence, research in signal processing/VLSI, and hosting SIGMOID annually.",
    'principal': "Dr. G. Srinivasulu is the current Principal of SVU College of Engineering (SVUCE).",
    'hod': "Dr. T. Ramashri is the Head of the Department (HOD) of Electronics and Communication Engineering at SVUCE.",
    'passes': "Sigmoid 2K26 Pass Tiers:\n- Elite (₹350): Non-Tech events.\n- Supreme (₹400): 1 Paid Tech + Free Trio + Non-Tech.\n- Prime (₹450): 2 Paid Tech + Free Trio + Non-Tech.\n- Ultimate (₹500): All events access.",
    'about': "SIGMOID 2K26: Annual Technical extravaganza by SVUCE ECE Department. A legacy event since 2003, redefine Innovation on April 3-4, 2026.",
    'coordinators': "Major Coordinators:\n- Technovate: Sadvika (+91 9182995727)\n- Innovista: Luqman (+91 89781 03095)\n- Circuitrix: Rajeswari (+91 86391 55953)\n- QuizMania: Supriya (+91 63045 03230)\n- Click Fest: Vineeth (#9491040770)",
    'accommodation': "Accommodation costs ₹200/day. Hostels for boys/girls available. Verify with logistics at the registration desk.",
    'venue': "Held at SVU College of Engineering (SVUCE), Tirupati. Events mainly in ECE blocks MB107, Seminar Hall, etc.",
    'default': "Ask me about any event (Technovate, Codex, GuessBusters), pass prices (Prime, Ultimate), or SVUCE leadership info."
};

const RELATED_QUESTIONS_MAP = {
    'technovate': ["Technovate rules?", "Technovate coordinators?"],
    'department': ["Who is the HOD?", "Principal of SVUCE?"],
    'innovista': ["Rules for Innovista?", "Innovista coordinators?"],
    'codex': ["Codex Round 1 info?", "Codex coordinators?"],
    'circuitrix': ["Circuitrix rounds?", "Circuitrix coordinators?"],
    'quizmania': ["QuizMania rounds?", "QuizMania coordinators?"],
    'click fest': ["Click Fest rules?", "Click Fest coordinators?"],
    'dumbcharades': ["Dumbcharades rounds?", "Dumbcharades coordinators?"],
    'passes': ["What is Ultimate Pass?", "Elite vs Supreme pass?"],
    'about': ["What events are there?", "Show me passes pricing"],
    'coordinators': ["Coordinators for Codex", "Coordinators for Innovista"]
};

const PREDEFINED_QUESTIONS = [
    { id: 1, text: "Tell me about Sigmoid", key: "about", icon: "🏢" },
    { id: 2, text: "Event Coordinators info", key: "coordinators", icon: "📞" },
    { id: 3, text: "Tell me about Technovate", key: "technovate", icon: "📄" },
    { id: 4, text: "Show me the Pass pricing", key: "passes", icon: "🎫" },
    { id: 5, text: "Coordinators for Codex", key: "codex", icon: "👨‍💻" },
    { id: 6, text: "Accommodation details", key: "accommodation", icon: "🏨" }
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
            let relatedQuestions = [];

            // Refined multi-word matching
            const sortedKeys = Object.keys(INSIGHTS_DATA).sort((a, b) => b.length - a.length);

            for (const key of sortedKeys) {
                if (key !== 'default' && lowerQuery.includes(key)) {
                    responseText = INSIGHTS_DATA[key];
                    relatedQuestions = RELATED_QUESTIONS_MAP[key] || [];
                    break;
                }
            }

            // Contextual additions
            if (lowerQuery.includes('esports') || lowerQuery.includes('e-sports') || lowerQuery.includes('bgmi') || lowerQuery.includes('free fire')) {
                responseText = "E-sports like BGMI and Free Fire have specific team entry fees (₹300). Check the E-sports category on the events page for rules on emulators and team sizes.";
                relatedQuestions = ["BGMI rules?", "Free Fire rounds?"];
            }

            setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: responseText, related: relatedQuestions }]);
            setIsThinking(false);
        }, 800);
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
            <div className="fixed inset-0 bg-[#1A1A1A] z-[100] flex flex-col font-sans h-[100dvh] w-screen overflow-hidden">
                {/* Background Watermark Logo - Reversed */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
                    <img src="https://res.cloudinary.com/djiivo0r7/image/upload/v1773280067/WhatsApp_Image_2026-03-11_at_18.46.50-removebg-preview_yfupc0.png" alt="" className="h-[60vh] max-h-[600px] w-auto object-contain opacity-20" />
                </div>

                {/* Chat Header - Only visible when messages exist */}
                {messages.length > 0 && (
                    <div className="flex items-center justify-between p-6 border-b border-white/5 relative z-10 bg-[#1A1A1A]">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#3A3A3A] p-1.5 flex items-center justify-center shrink-0">
                                <img src="https://res.cloudinary.com/djiivo0r7/image/upload/v1773280067/WhatsApp_Image_2026-03-11_at_18.46.50-removebg-preview_yfupc0.png" alt="Logo" className="w-full h-full object-contain" />
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
                                <path d="M18 6L6 18M6 6l12 12" />
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
                                <path d="M15 18l-6-6 6-6" />
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
                                <div className="w-16 h-16 rounded-full bg-[#3A3A3A] p-2 flex items-center justify-center shrink-0">
                                    <img src="https://res.cloudinary.com/djiivo0r7/image/upload/v1773280067/WhatsApp_Image_2026-03-11_at_18.46.50-removebg-preview_yfupc0.png" alt="Logo" className="w-full h-full object-contain" />
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


                            <div className="flex flex-col gap-3 mb-16">
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
                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-start gap-3 md:gap-4 w-full max-w-[95%]">
                                                <div className="w-8 h-8 flex items-center justify-center shrink-0 mt-0.5">
                                                    <img src="https://res.cloudinary.com/djiivo0r7/image/upload/v1773280067/WhatsApp_Image_2026-03-11_at_18.46.50-removebg-preview_yfupc0.png" alt="Logo" className="w-full h-full object-contain" />
                                                </div>
                                                <div className="text-white/90 text-[15.5px] leading-relaxed flex-1 pt-0.5">
                                                    {msg.text.split('\n').map((line, i) => (
                                                        <p key={i} className={i > 0 ? 'mt-2' : ''}>
                                                            {line}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* Related Questions Chips */}
                                            {msg.related && msg.related.length > 0 && (
                                                <div className="flex flex-wrap gap-2 ml-11 md:ml-12">
                                                    {msg.related.map((q, idx) => (
                                                        <button
                                                            key={idx}
                                                            onClick={() => handleSend(q)}
                                                            className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-[13px] transition-all"
                                                        >
                                                            {q}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
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
                                        <img src="https://res.cloudinary.com/djiivo0r7/image/upload/v1773280067/WhatsApp_Image_2026-03-11_at_18.46.50-removebg-preview_yfupc0.png" alt="Logo" className="w-full h-full object-contain animate-pulse" />
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
                <div className="w-full max-w-3xl mx-auto px-6 pb-[50px] relative z-10 bg-transparent pt-4">
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
                            className={`absolute right-4 p-2 rounded-xl transition-colors ${inputValue.trim() && !isThinking
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
                            Powered by <strong className="text-white/60 tracking-wide ml-0.5 font-bold">SIGMOID 2K26</strong>
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
