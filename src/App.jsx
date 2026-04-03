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

            {/* ── Top Notification Bar ── */}
            <div className="bg-gradient-to-r from-[#ff8a1f] to-[#ff6b2b] text-white py-2 px-4 sm:px-6 w-full flex items-center justify-center gap-3 sm:gap-6 z-[60] relative top-0 left-0 hover:bg-[#ff8a1f]/90 transition-colors shadow-md">
                <span className="font-semibold text-xs sm:text-sm tracking-wide flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    Sigmoid 2K26 Event Schedule is now available!
                </span>
                <a 
                    href="/assets/documents/PROGRAM_SCHEDULE.pdf" 
                    download="Sigmoid_2K26_Schedule.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white/20 hover:bg-white/30 border border-white/30 text-white px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider backdrop-blur-sm transition-all shadow-[0_2px_10px_rgba(0,0,0,0.1)] flex items-center gap-2"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Download PDF
                </a>
            </div>

            <Navbar topOffset={44} />

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
