import { useState, useRef, useEffect } from 'react'

const faqData = [
    {
        category: "Subscription & Future Updates",
        questions: [
            {
                q: "Will I get access to new features or content released in the future?",
                a: <>Absolutely!<br /><strong>Pinnacle users</strong> receive all upcoming features and content at <strong>no additional cost</strong> throughout their subscription period.<br /><br /><strong>Sprint users</strong> can also enjoy upcoming content by upgrading their plan anytime, ensuring they get access to new features as soon as they are released.</>
            },
            {
                q: "Will the videos be downloadable after the subscription ends?",
                a: "We're really sorry, but video downloads are not permitted. This helps us protect the content and maintain fairness for all learners. You will have full access to all videos as long as your subscription is active."
            },
            {
                q: "Can I upgrade from Sprint later?",
                a: "Yes, sprint users can upgrade anytime. You simply need to pay the difference amount, and your access automatically extends!"
            },
            {
                q: "Can we extend the validity after expiry?",
                a: "Yes. Once your plan expires, you can purchase any plan of your choice to continue learning. Upgrading the plan post expiry is not allowed."
            },
            {
                q: "Where can I find the course validity information?",
                a: "The course validity period is clearly mentioned on each pricing card. You can find the validity duration displayed on the plan cards before making a purchase."
            },
            {
                q: "Can two learners buy together or share an account?",
                a: "No, each account is for individual use only. Sharing accounts is not permitted as it violates our terms of service and may result in account suspension."
            },
            {
                q: "Is there any free trial session available?",
                a: "Currently we do not offer a free trial. However, we have plenty of free content available on our YouTube channel and website that you can explore before making a purchase."
            }
        ]
    },
    {
        category: "Features & Functionality",
        questions: [
            {
                q: "What exactly is Code Review and how does it work?",
                a: "Code Review is a premium feature designed to help you write interview-ready, clean, and optimized code. It provides line-by-line analysis of your solution, suggestions to improve code quality and structure, comparison with industry-standard solutions, and automatic evaluation of time and space complexity."
            },
            {
                q: "For aptitude, do we have any videos?",
                a: "Aptitude videos are not there, but they are planned for future updates. However, we currently provide aptitude practice tests."
            },
            {
                q: "Can I track my progress across courses?",
                a: "Yes! Our platform provides a comprehensive progress tracker that shows your completion percentage, streaks, and performance analytics across all courses."
            }
        ]
    },
    {
        category: "Course Content & Curriculum",
        questions: [
            {
                q: "What topics are covered in the DSA course?",
                a: "Everything from basics to advanced topics, including: problem-solving, editorial videos, contests, multiple difficulty-level questions, and interview follow-ups."
            },
            {
                q: "Is the content updated regularly?",
                a: "Yes, we update content based on the latest interview patterns and company requirements to ensure you're always learning the most relevant material."
            },
            {
                q: "Are the problems sorted by difficulty?",
                a: "Yes, problems are carefully curated and sorted by difficulty level — from easy to hard — so you can progressively build your skills."
            }
        ]
    },
    {
        category: "Account Management",
        questions: [
            {
                q: "How do I reset my password?",
                a: "You can reset your password from the login page by clicking 'Forgot Password'. A reset link will be sent to your registered email address."
            },
            {
                q: "Can I change my registered email?",
                a: "Please contact our support team to request an email change. We'll verify your identity and update your account accordingly."
            }
        ]
    },
    {
        category: "Course Access & Technical Support",
        questions: [
            {
                q: "I'm unable to access my course. What should I do?",
                a: "Please try clearing your browser cache and logging in again. If the issue persists, contact our support team with your registered email and order details."
            },
            {
                q: "Which devices are supported?",
                a: "Our platform works on all modern browsers across desktop, laptop, tablet, and mobile devices."
            }
        ]
    },
    {
        category: "Mentorship & Community Support",
        questions: [
            {
                q: "Is there any mentorship program available?",
                a: "Yes, we offer mentorship through our community channels where experienced learners and mentors guide you through your preparation journey."
            },
            {
                q: "How can I join the community?",
                a: "You can join our Discord and Telegram communities for free. Links are available on our website."
            }
        ]
    },
    {
        category: "Certification",
        questions: [
            {
                q: "Do I get a certificate after completing the course?",
                a: "Yes, upon completing the course you'll receive a certificate of completion that you can share on your LinkedIn profile and resume."
            }
        ]
    },
    {
        category: "Career Guidance",
        questions: [
            {
                q: "Do you provide career guidance or mock interviews?",
                a: "We provide career guidance through our content and community. Mock interviews and resume reviews are available for premium members."
            }
        ]
    },
    {
        category: "Internships & Job Assistance",
        questions: [
            {
                q: "Do you help with internship or job placements?",
                a: "While we don't directly place students, our courses are designed to make you placement-ready. Many of our students have successfully landed roles at top companies."
            }
        ]
    },
    {
        category: "Payment & Refunds",
        questions: [
            {
                q: "What payment modes are available?",
                a: "Multiple payment options are available at checkout including UPI, Credit/Debit cards, Cardless EMI, and various EMI options."
            },
            {
                q: "Is there a refund policy?",
                a: "Please refer to our Cancellation and Refund Policy page for detailed information about our refund process and eligibility criteria."
            }
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