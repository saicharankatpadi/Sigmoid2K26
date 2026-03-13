import { useState, useRef, useEffect } from 'react'

const faqData = [
    {
        category: "General",
        questions: [
            { q: "What is Sigmoid?", a: "This is a placeholder answer for 'What is Sigmoid?'." },
            { q: "Who can participate in Sigmoid?", a: "This is a placeholder answer for 'Who can participate in Sigmoid?'." },
            { q: "Is Sigmoid open to students from other colleges?", a: "This is a placeholder answer for 'Is Sigmoid open to students from other colleges?'." },
            { q: "What are the dates and venue of the event?", a: "This is a placeholder answer for 'What are the dates and venue of the event?'." }
        ]
    },
    {
        category: "Registration",
        questions: [
            { q: "How do I register for Sigmoid?", a: "This is a placeholder answer for 'How do I register for Sigmoid?'." },
            { q: "Can I register as a team or only individually?", a: "This is a placeholder answer for 'Can I register as a team or only individually?'." },
            { q: "Is there a registration deadline?", a: "This is a placeholder answer for 'Is there a registration deadline?'." },
            { q: "Can I register for multiple events?", a: "This is a placeholder answer for 'Can I register for multiple events?'." },
            { q: "What happens after I register — will I get a confirmation?", a: "This is a placeholder answer for 'What happens after I register — will I get a confirmation?'." }
        ]
    },
    {
        category: "Pass & Payment",
        questions: [
            { q: "What is included in the event pass?", a: "This is a placeholder answer for 'What is included in the event pass?'." },
            { q: "How do I purchase a pass?", a: "This is a placeholder answer for 'How do I purchase a pass?'." },
            { q: "What payment methods are accepted?", a: "This is a placeholder answer for 'What payment methods are accepted?'." },
            { q: "Is the pass refundable if I cancel?", a: "This is a placeholder answer for 'Is the pass refundable if I cancel?'." },
            { q: "Can I transfer my pass to someone else?", a: "This is a placeholder answer for 'Can I transfer my pass to someone else?'." },
            { q: "Do I need a separate pass for each event or is it an all-access pass?", a: "This is a placeholder answer for 'Do I need a separate pass for each event or is it an all-access pass?'." }
        ]
    },
    {
        category: "Events",
        questions: [
            { q: "What events are being conducted at Sigmoid?", a: "This is a placeholder answer for 'What events are being conducted at Sigmoid?'." },
            { q: "Are there both technical and non-technical events?", a: "This is a placeholder answer for 'Are there both technical and non-technical events?'." },
            { q: "How do I know which events I'm registered for?", a: "This is a placeholder answer for 'How do I know which events I'm registered for?'." }
        ]
    },
    {
        category: "On the Day",
        questions: [
            { q: "What documents should I bring on the event day?", a: "This is a placeholder answer for 'What documents should I bring on the event day?'." },
            { q: "Will there be accommodation or food provided?", a: "This is a placeholder answer for 'Will there be accommodation or food provided?'." },
            { q: "Will participants receive certificates?", a: "This is a placeholder answer for 'Will participants receive certificates?'." }
        ]
    },
    {
        category: "Contact & Support",
        questions: [
            { q: "Who do I contact if I face issues with registration or payment?", a: "This is a placeholder answer for 'Who do I contact if I face issues with registration or payment?'." },
            { q: "Is there a helpline number or email for support?", a: "This is a placeholder answer for 'Is there a helpline number or email for support?'." }
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