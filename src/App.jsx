import React, { useState } from 'react' // Trigger HMR
import CoachSection from './components/CoachSection'
import Footer from './components/Footer'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import OrganizingCommittee from './components/OrganizingCommittee'

import Navbar from './components/Navbar'
import CollegeLogoSection from './components/CollegeLogoCarousel'
import { GoogleIcon, YouTubeIcon, LinkedInIcon } from './components/CoachSection'
import { University, BookOpen, Award, GraduationCap, FileText, Users, Briefcase } from 'lucide-react'

import { HorizonHero } from './components/ui/horizon-hero-section.jsx'
import { AboutSection } from './components/ui/about-section.jsx'
import { EventsPage } from './components/ui/events-page.jsx'
import { DynamicEventPage } from './components/ui/DynamicEventPage.jsx'
import { TechnovateEventPage as TechovateEventPage } from './components/ui/TechnovateEventPage.jsx'
import { PosterizeEventPage } from './components/ui/PosterizeEventPage.jsx'
import { AvishkarEventPage } from './components/ui/AvishkarEventPage.jsx'
import { CircuitrixEventPage } from './components/ui/CircuitrixEventPage.jsx'
import { CodexEventPage } from './components/ui/CodexEventPage.jsx'
import { QuizmaniaEventPage } from './components/ui/QuizmaniaEventPage.jsx'
import { GuessBustersEventPage } from './components/ui/GuessBustersEventPage.jsx'
import { ClickFestEventPage } from './components/ui/ClickFestEventPage.jsx'
import { DumbcharadesEventPage } from './components/ui/DumbcharadesEventPage.jsx'
import { KimsGameEventPage } from './components/ui/KimsGame.jsx'
import { IconemaEventPage } from './components/ui/IconemaEventPage.jsx'
import { Accommodation } from './components/ui/accommodation.jsx'
import { HostelDetails } from './components/ui/hostel-details.jsx'
import { PromoSection } from './components/PromoSection'
import { CommunityRegistration } from './components/CommunityRegistration'
import EventCountdown from './components/ui/EventCountdown'

import { GalleryPage } from './components/ui/gallery-page.jsx'
import { StatsPage } from './components/StatsPage'
import { Routes, Route, useLocation, Navigate, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Preloader } from './components/ui/Preloader.jsx'
import { PassportPage } from './components/ui/PassportPage.jsx'
import { InsightsFAB } from './components/ui/InsightsFAB.jsx'
import { InsightsPage } from './components/ui/InsightsPage.jsx'
import { LiveFeedToast } from './components/ui/LiveFeedToast.jsx'
import { RegisterPage } from './components/ui/Registraion.jsx'

import { MagazinePage } from './components/ui/MagazinePage.jsx'
import ScrollToTop from './components/ScrollToTop'
import { ContactPage } from './components/ui/contact-page.jsx'
import { useEffect } from 'react'

const EPASS_RELEASE_TARGET = new Date('2026-04-01T00:00:00+05:30')

function getTimeLeft() {
    const diff = EPASS_RELEASE_TARGET.getTime() - Date.now()
    const total = Math.max(diff, 0)

    return {
        total,
        days: Math.floor(total / (1000 * 60 * 60 * 24)),
        hours: Math.floor((total / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((total / (1000 * 60)) % 60),
        seconds: Math.floor((total / 1000) % 60),
    }
}

function CountdownItem({ label, value, compact = false }) {
    return (
        <div className={compact ? 'min-w-[34px]' : 'min-w-[52px]'}>
            <div className={`${compact ? 'text-sm' : 'text-2xl'} font-black leading-none`}>
                {String(value).padStart(2, '0')}
            </div>
            <div className={`${compact ? 'text-[9px]' : 'text-[10px]'} mt-1 uppercase tracking-[0.16em]`}>
                {label}
            </div>
        </div>
    )
}

function ReleaseBanner({ onHide }) {
    const [timeLeft, setTimeLeft] = useState(() => getTimeLeft())

    useEffect(() => {
        const timer = window.setInterval(() => {
            const next = getTimeLeft()
            setTimeLeft(next)

            if (next.total <= 0) {
                onHide()
            }
        }, 1000)

        return () => window.clearInterval(timer)
    }, [onHide])

    const handleClose = () => {
        sessionStorage.setItem('hideEPassReleaseBanner', 'true')
        onHide()
    }

    if (timeLeft.total <= 0) {
        return null
    }

    return (
        <div className="fixed left-0 right-0 top-0 z-[60] border-b border-[#f7c24a]/35 bg-[linear-gradient(90deg,#f7c24a_0%,#f5b53a_35%,#f0a423_100%)] px-3 py-2 text-[#17120a] shadow-[0_10px_30px_rgba(245,181,58,0.18)] sm:px-6">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
                <div className="min-w-0">
                    <p className="text-sm font-extrabold uppercase tracking-[0.16em] sm:text-base">
                        EPass Released
                    </p>
                    <p className="text-xs font-semibold sm:text-sm">
                        Online workshop access is live now.
                    </p>
                </div>

                <div className="hidden items-center gap-2 text-center sm:flex">
                    <CountdownItem label="Days" value={timeLeft.days} />
                    <span className="text-lg font-black">:</span>
                    <CountdownItem label="Hours" value={timeLeft.hours} />
                    <span className="text-lg font-black">:</span>
                    <CountdownItem label="Mins" value={timeLeft.minutes} />
                    <span className="text-lg font-black">:</span>
                    <CountdownItem label="Secs" value={timeLeft.seconds} />
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                    <Link
                        to="/register"
                        className="rounded-full bg-[#17120a] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-white no-underline transition hover:scale-[1.02] sm:px-6 sm:text-sm"
                    >
                        Grab Now
                    </Link>
                    <button
                        type="button"
                        onClick={handleClose}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#17120a]/15 bg-white/25 text-[#17120a] transition hover:bg-white/40"
                        aria-label="Close release banner"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="mt-2 flex items-center justify-center gap-2 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-[#17120a] sm:hidden">
                <CountdownItem label="D" value={timeLeft.days} compact />
                <span>:</span>
                <CountdownItem label="H" value={timeLeft.hours} compact />
                <span>:</span>
                <CountdownItem label="M" value={timeLeft.minutes} compact />
                <span>:</span>
                <CountdownItem label="S" value={timeLeft.seconds} compact />
            </div>
        </div>
    )
}



/* ── Coach Image Assets ── */
const coach1 = '/assets/images/coaches/coach1.jpg'
const coach3 = '/assets/images/coaches/coach3.jpg'
const coach2 = '/assets/images/coaches/kullayam.jpg'

/* ── Badge Component ── */
function Badge({ children, className = "", delay = 0 }) {
    return (
        <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay }}
            className={`absolute z-20
            inline-flex items-center gap-2.5
            bg-[rgba(8,8,8,0.72)] backdrop-blur-[28px] backdrop-saturate-[160%]
            border border-white/[0.14] border-t-white/[0.22]
            rounded-full py-2.5 px-[18px] pl-3
            shadow-[0_12px_40px_rgba(0,0,0,0.75),0_4px_12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.3)]
            whitespace-nowrap ${className}`}>
            {children}
        </motion.div>
    )
}

function Home({ showLoader }) {
    return (
        <>

            {/* ═══════════════ HERO — Horizon 3D Section ═══════════════ */}
            <HorizonHero startTimer={!showLoader} />

            {/* ═══════════════ COUNTDOWN — Sigmoid 2K26 ═══════════════ */}
            <EventCountdown />

            {/* ═══════════════ PROMO — Feature Highlights ═══════════════ */}
            <PromoSection />

            {/* ═══════════════ SECTION 0 — College Logo Carousel ═══════════════ */}
            <div style={{ marginTop: '-2rem' }}>
                <CollegeLogoSection />
            </div>

            {/* ═══════════════ PROMO — Community Count ═══════════════ */}
            <div className="-mt-16">
                <CommunityRegistration />
            </div>

            {/* ═══════════════ SECTION 1 — The Coach ═══════════════ */}
            <CoachSection
                imageSrc={coach1}
                heading={
                    <h1 className="mb-7">
                        <span className="block text-[clamp(28px,3.2vw,46px)] font-light text-white/55 font-sans tracking-[-0.03em] leading-[1.1]">
                            A professor who doesn&apos;t just teach engineering —
                        </span>
                        <span className="block text-[clamp(28px,3.2vw,46px)] font-extrabold text-white font-sans tracking-[-0.03em] leading-[1.1]">
                            but engineers futures.
                        </span>
                    </h1>
                }
                bio={
                    <div className="font-hand text-[17.5px] leading-[1.65] text-white/70 mb-5 max-w-[500px] flex flex-col gap-3">
                        <p>
                            <strong className="text-white text-[17.5px]">Dr. G. Sreenivasulu</strong> is a Professor and Principal of S.V. University College of Engineering (SVUCE), Tirupati.
                        </p>
                        <p>
                            He earned his Ph.D. in Process Control from S.V. University in 2007 and brings 29 years of teaching experience. He has published 29 papers in reputed journals and has guided 45 PG and 7 Ph.D. projects.
                        </p>
                        <div>
                            <p className="text-white/40 mb-1 mt-1 text-[16px]">Research Interests & Memberships:</p>
                            <p className="font-bold text-white/90">Neural Networks, Fuzzy Logic applications, Process Instrumentation, Analog & Digital Electronics.</p>
                            <p className="mt-1 text-white/70 italic text-[16px]">Life Member of ISTE (MISTE), Fellow of IETE (FIETE), Fellow Member of IE, Kolkata.</p>
                        </div>
                    </div>
                }
                imageClassName="object-cover object-[50%_0%] w-full h-full"
                badges={<>
                    <Badge className="-top-[4%] left-1/2 -translate-x-1/2" delay={0}>
                        <University className="w-4 h-4 text-white" />
                        <span className="text-white/95 text-[13px] font-semibold font-sans tracking-[-0.01em]">Principal, SVUCE</span>
                    </Badge>
                    <Badge className="bottom-[10%] left-[4%]" delay={0.8}>
                        <BookOpen className="w-4 h-4 text-white" />
                        <span className="text-white/95 text-[13px] font-semibold font-sans tracking-[-0.01em]">29 Years Teaching Experience</span>
                    </Badge>
                    <Badge className="top-[35%] left-[4%] md:left-auto md:-right-[4%]" delay={1.6}>
                        <Award className="w-4 h-4 text-white" />
                        <span className="text-white/95 text-[13px] font-semibold font-sans tracking-[-0.01em]">Life Member, ISTE</span>
                    </Badge>
                </>}
            />

            {/* ═══════════════ SECTION 2 — The Platform ═══════════════ */}
            <CoachSection
                imageSrc={coach2}
                heading={
                    <h1 className="mb-7">
                        <span className="block text-[clamp(28px,3.2vw,46px)] font-light text-white/55 font-sans tracking-[-0.03em] leading-[1.1]">
                            Think deep.
                        </span>
                        <span className="block text-[clamp(28px,3.2vw,46px)] font-extrabold text-white font-sans tracking-[-0.03em] leading-[1.1]">
                            Teach bold.
                        </span>
                    </h1>
                }
                bio={
                    <div className="font-hand text-[16px] leading-[1.6] text-white/80 mb-5 max-w-[550px] flex flex-col gap-3">
                        <p>
                            <strong className="text-white text-[18px]">Dr. I. Kullayamma</strong> is a Professor and Head of the Department of Electronics and Communication Engineering at S.V. University College of Engineering (SVUCE), Tirupati.
                        </p>
                        <p>
                            With over 40 publications in national and international journals and 12 conference papers, she earned her Ph.D. in Digital Image Processing from S.V. University in 2017. She has guided numerous M.Tech projects and supervises Ph.D. scholars.
                        </p>
                        <div>
                            <p className="text-white/40 mb-1 mt-1 text-[14px]">Research Interests & Honors:</p>
                            <p className="font-semibold text-white/95 text-[15px]">Digital Image Processing, Wireless Communications, Antennas & Radiation Systems.</p>
                            <p className="mt-1 text-white/70 italic text-[14px]">Fellow Member of IETE, honored with the &quot;Kranthi Jyothi Savithri Bai Phule&quot; award.</p>
                        </div>
                    </div>
                }
                imageClassName="object-cover object-[50%_0%] w-full h-full"
                badges={<>
                    <Badge className="-top-[4%] left-1/2 -translate-x-1/2" delay={0}>
                        <GraduationCap className="w-4 h-4 text-white" />
                        <span className="text-white/95 text-[13px] font-semibold font-sans tracking-[-0.01em]">Ph.D. – Digital Image Processing</span>
                    </Badge>
                    <Badge className="top-1/2 -translate-y-1/2 -left-[6%]" delay={0.8}>
                        <FileText className="w-4 h-4 text-white" />
                        <span className="text-white/95 text-[13px] font-semibold font-sans tracking-[-0.01em]">40+ International Publications</span>
                    </Badge>
                    <Badge className="top-[75%] -right-[2%]" delay={1.6}>
                        <Users className="w-4 h-4 text-white" />
                        <span className="text-white/95 text-[13px] font-semibold font-sans tracking-[-0.01em]">HOD, ECE – SVUCE</span>
                    </Badge>
                </>}
            />

            {/* ═══════════════ SECTION 3 — The Mission ═══════════════ */}
            <CoachSection
                imageSrc={coach3}
                heading={
                    <h1 className="mb-7">
                        <span className="block text-[clamp(28px,3.2vw,46px)] font-light text-white/55 font-sans tracking-[-0.03em] leading-[1.1]">
                            Educating engineers.
                        </span>
                        <span className="block text-[clamp(28px,3.2vw,46px)] font-extrabold text-white font-sans tracking-[-0.03em] leading-[1.1]">
                            Empowering futures.
                        </span>
                    </h1>
                }
                bio={
                    <div className="font-hand text-[16px] leading-[1.6] text-white/80 mb-5 max-w-[550px] flex flex-col gap-3">
                        <p>
                            <strong className="text-white text-[18px]">Dr. S. Varadarajan</strong> is a Professor in the Department of Electronics and Communication Engineering at S.V. University College of Engineering, Tirupati.
                        </p>
                        <p>
                            He earned his M.Tech from NIT Warangal in 1993 and his Ph.D. in ECE from S.V. University in 2003, accumulating 25 years of teaching experience. He has widely published research in Signal &amp; Image Processing and Digital Communications.
                        </p>
                        <div>
                            <p className="text-white/40 mb-1 mt-1 text-[14px]">Research Interests & Honors:</p>
                            <p className="font-semibold text-white/95 text-[15px]">Signal &amp; Image Processing, Digital Communications.</p>
                            <p className="mt-1 text-white/70 italic text-[14px]">Fellow of FAPAS, IETE, and IE. Former AP State Council Higher Education Secretary.</p>
                        </div>
                    </div>
                }
                imageClassName="object-cover object-[50%_0%] w-full h-full"
                badges={<>
                    <Badge className="top-[8%] left-[8%]" delay={0}>
                        <Award className="w-4 h-4 text-white" />
                        <span className="text-white/95 text-[13px] font-semibold font-sans tracking-[-0.01em]">Fellow – FAPAS &amp; IETE</span>
                    </Badge>
                    <Badge className="bottom-[15%] -left-[2%]" delay={0.8}>
                        <Briefcase className="w-4 h-4 text-white" />
                        <span className="text-white/95 text-[13px] font-semibold font-sans tracking-[-0.01em]">AP Higher Education Secretary</span>
                    </Badge>
                    <Badge className="top-[45%] -right-[4%]" delay={1.6}>
                        <BookOpen className="w-4 h-4 text-white" />
                        <span className="text-white/95 text-[13px] font-semibold font-sans tracking-[-0.01em]">25 Years Teaching Experience</span>
                    </Badge>
                </>}
            />
            <OrganizingCommittee />
            <TestimonialsSection />
            <FAQSection />
        </>
    )
}

function App() {
    const location = useLocation();
    const isAboutPage = location.pathname === '/about';
    const [showReleaseBanner, setShowReleaseBanner] = useState(() => {
        if (sessionStorage.getItem('hideEPassReleaseBanner') === 'true') {
            return false;
        }
        return Date.now() < EPASS_RELEASE_TARGET.getTime();
    });

    // Only show loader if we land directly on the home page initially and haven't seen it yet this session
    const [showLoader, setShowLoader] = useState(() => {
        if (location.pathname === '/') {
            const hasSeenPreloader = sessionStorage.getItem('hasSeenPreloader');
            if (!hasSeenPreloader) {
                return true;
            }
        }
        return false;
    });

    const handlePreloaderComplete = () => {
        sessionStorage.setItem('hasSeenPreloader', 'true');
        setShowLoader(false);
    };

    return (
        <div className="bg-[#0A0A0A] w-full min-h-screen flex flex-col">
            <ScrollToTop />
            <AnimatePresence>
                {showLoader && (
                    <Preloader onComplete={handlePreloaderComplete} />
                )}
            </AnimatePresence>

            {showReleaseBanner && <ReleaseBanner onHide={() => setShowReleaseBanner(false)} />}
            <Navbar topOffset={showReleaseBanner ? 74 : 0} />

            <div className="flex-1">
                <Routes>
                    <Route path="/" element={<Home showLoader={showLoader} />} />
                    <Route path="/about" element={<AboutSection />} />
                    <Route path="/events" element={<EventsPage />} />
                    <Route path="/event-details" element={<DynamicEventPage />} />
                    <Route path="/technovate" element={<TechovateEventPage />} />
                    <Route path="/posterize" element={<PosterizeEventPage />} />
                    <Route path="/avishkar" element={<AvishkarEventPage />} />
                    <Route path="/circuitrix" element={<CircuitrixEventPage />} />
                    <Route path="/codex" element={<CodexEventPage />} />
                    <Route path="/quizmania" element={<QuizmaniaEventPage />} />
                    <Route path="/guess-busters" element={<GuessBustersEventPage />} />
                    <Route path="/click-fest" element={<ClickFestEventPage />} />
                    <Route path="/dumbcharades" element={<DumbcharadesEventPage />} />
                    <Route path="/kims-game" element={<KimsGameEventPage />} />
                    <Route path="/iconema" element={<IconemaEventPage />} />
                    <Route path="/success" element={<Navigate to="/accommodation" replace />} />
                    <Route path="/accommodation" element={<Accommodation />} />
                    <Route path="/accommodation/boys" element={<HostelDetails type="boys" />} />
                    <Route path="/accommodation/girls" element={<HostelDetails type="girls" />} />

                    <Route path="/stats" element={<StatsPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/passport" element={<PassportPage />} />
                    <Route path="/insights" element={<InsightsPage />} />
                    <Route path="/magazines" element={<MagazinePage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </div>

            {!isAboutPage && <Footer />}

            {/* Floating Action Button for Insights Chatbot */}
            <InsightsFAB />

            {/* Live Purchase Feed Toast — bottom-right, all pages */}
            <LiveFeedToast />
        </div>
    )
}

export default App
