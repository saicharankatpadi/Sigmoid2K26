import { useState, useRef, useEffect } from 'react'

const faqData = [
    {
        category: "General",
        questions: [
            { q: "What is Sigmoid?", a: "Sigmoid 2K26 is a massive technical and non-technical fest organized by the ECE Department of SVUCE. It brings together innovators, creators, and competitors for a two-day celebration of technology." },
            { q: "Who can participate in Sigmoid?", a: "Students from all engineering colleges and branches are welcome to participate in various technical, non-technical, and e-sports events." },
            { q: "What are the dates and venue of the event?", a: "Sigmoid 2K26 will be held on April 3rd and 4th, 2026, at the SVU College of Engineering (SVUCE), Tirupati campus." }
        ]
    },
    {
        category: "Registration",
        questions: [
            { q: "How do I register for Sigmoid?", a: "You can register directly through our website by choosing a pass tier. Once registered, you'll receive a confirmation and can participate in events included in your pass." },
            { q: "Can I register as a team or only individually?", a: "Registration for the fest is individual, but many events like Codex, Circuitrix, and Iconema are team-based. Teams are often formed on-site or through randomly allotted groups." },
            { q: "Can I register for multiple events?", a: "Yes! Your pass determines which events you have access to. The Prime and Ultimate passes allow for the widest access to both technical and non-technical events." }
        ]
    },
    {
        category: "Pass & Payment",
        questions: [
            { q: "What is included in the event pass?", a: "We have 4 tiers: Elite (Non-tech only), Supreme (1 Paid Tech + Free Trio + Non-tech), Prime (2 Paid Tech + Free Trio + Non-tech), and Ultimate (All access). Workshops are included in all passes." },
            { q: "What is the price for the passes?", a: "Elite: ₹350, Supreme: ₹400, Prime: ₹450, and Ultimate: ₹500." },
            { q: "Is the pass refundable if I cancel?", a: "Passes are generally non-refundable. However, the Techfusion (Namaste DSA) masterclass has a specific 7-day refund policy." },
            { q: "Can I transfer my pass to someone else?", a: "No, passes are strictly non-transferable and tied to your registration identity." }
        ]
    },
    {
        category: "Events",
        questions: [
            { q: "What are the Paid Trio events?", a: "The Paid Trio includes Techfusion (DSA Masterclass), Posterize (Poster Presentation), and Innovista (Project Expo)." },
            { q: "What are the Free Tech Trio events?", a: "The Free Tech Trio bundle includes Circuitrix, QuizMania, and Codex. These are included with Supreme, Prime, and Ultimate passes." },
            { q: "Are there non-technical events?", a: "Yes, we have exciting non-tech events like Click Fest (Photography), Dumbcharades & Pictionary, Iconema, and Kim's Game." }
        ]
    },
    {
        category: "On the Day",
        questions: [
            { q: "What documents should I bring?", a: "Participants must carry their valid College ID and a Government-issued ID at all times for verification." },
            { q: "Is accommodation and food provided?", a: "Accommodation is available at ₹200/day in campus hostels. Food arrangements are finalized for both days of the event." },
            { q: "Will I get certificates?", a: "Yes, all active participants will receive certificates recognizing their participation in Sigmoid 2K26." }
        ]
    }
]

/* ── Animated accordion item with real height measurement ── */
function AccordionItem({ item, index, isOpen, onToggle }) {
    const contentRef = useRef(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if (contentRef.current) {
            setHeight(contentRef.current.scrollHeight)
        }
    }, [item.a])

    return (
        <div
            className="border-b border-white/[0.08] last:border-b-0"
            style={{
                animation: `faqItemIn 0.4s cubic-bezier(0.22,1,0.36,1) both`,
                animationDelay: `${index * 55}ms`,
            }}
        >
            <button
                onClick={() => onToggle(index)}
                className="w-full flex justify-between items-center text-left py-5 px-6 gap-4 bg-transparent border-none cursor-pointer outline-none group"
            >
                <span
                    className="text-[15px] font-semibold font-sans leading-snug transition-colors duration-200"
                    style={{ color: isOpen ? '#ffffff' : 'rgba(255,255,255,0.85)' }}
                >
                    {item.q}
                </span>
                {/* Chevron with circle bg */}
                <span
                    className="shrink-0 flex items-center justify-center rounded-full transition-all duration-300"
                    style={{
                        width: 28, height: 28,
                        background: isOpen ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.04)',
                        border: isOpen ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(255,255,255,0.08)',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        style={{ color: isOpen ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.35)' }}
                    >
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </span>
            </button>

            {/* Answer — smooth height animation */}
            <div
                style={{
                    maxHeight: isOpen ? `${height}px` : '0px',
                    opacity: isOpen ? 1 : 0,
                    overflow: 'hidden',
                    transition: isOpen
                        ? 'max-height 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease 0.05s'
                        : 'max-height 0.25s cubic-bezier(0.4,0,1,1), opacity 0.15s ease',
                }}
            >
                <div
                    ref={contentRef}
                    className="text-white/50 text-[14px] font-sans leading-[1.8] px-6 pr-12 pb-6"
                    style={{
                        transform: isOpen ? 'translateY(0)' : 'translateY(-6px)',
                        transition: isOpen
                            ? 'transform 0.4s cubic-bezier(0.22,1,0.36,1) 0.05s'
                            : 'transform 0.2s ease',
                    }}
                >
                    {item.a}
                </div>
            </div>
        </div>
    )
}

export default function FAQSection() {
    const [activeCategory, setActiveCategory] = useState(faqData[0].category)
    const [openIndex, setOpenIndex] = useState(null)
    const [animKey, setAnimKey] = useState(0)

    const activeQuestions = faqData.find(d => d.category === activeCategory)?.questions || []

    const handleCategoryClick = (category) => {
        if (category === activeCategory) return
        setActiveCategory(category)
        setOpenIndex(null)
        setAnimKey(k => k + 1)
    }

    return (
        <>
            {/* Keyframes */}
            <style>{`
                @keyframes faqItemIn {
                    from { opacity: 0; transform: translateY(16px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            <section className="bg-[#0A0A0A] text-white py-20 px-6 md:px-16">
                <div className="max-w-[1200px] mx-auto">
                    {/* Heading */}
                    <h2 className="text-[clamp(32px,4.5vw,52px)] font-extrabold font-sans tracking-[-0.03em] leading-[1.15] mb-16">
                        Frequently Asked<br />Questions
                    </h2>

                    <div className="flex flex-col md:flex-row gap-10 md:gap-14">
                        {/* ── Left Sidebar — Categories ── */}
                        <div className="md:w-[260px] shrink-0 flex flex-col gap-2.5">
                            {faqData.map((item) => {
                                const isActive = activeCategory === item.category
                                return (
                                    <button
                                        key={item.category}
                                        onClick={() => handleCategoryClick(item.category)}
                                        className={`text-left px-5 py-2.5 rounded-full text-[13px] font-sans font-medium cursor-pointer outline-none transition-all duration-200
                                            ${isActive
                                                ? 'bg-white/[0.06] text-white border border-white/[0.25]'
                                                : 'bg-transparent text-white/70 border border-white/[0.1] hover:border-white/[0.2] hover:text-white hover:translate-x-[3px]'
                                            }`}
                                        style={{ width: 'fit-content' }}
                                    >
                                        {item.category}
                                    </button>
                                )
                            })}
                        </div>

                        {/* ── Right — Accordion ── */}
                        <div className="flex-1 -mt-1">
                            <div
                                className="border border-white/[0.1] rounded-2xl overflow-hidden"
                                key={animKey}
                            >
                                {activeQuestions.map((item, index) => (
                                    <AccordionItem
                                        key={`${animKey}-${index}`}
                                        item={item}
                                        index={index}
                                        isOpen={openIndex === index}
                                        onToggle={(i) => setOpenIndex(openIndex === i ? null : i)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}