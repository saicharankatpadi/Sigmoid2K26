import React, { useState } from 'react'
import CoachSection from './components/CoachSection'
import Footer from './components/Footer'
import FAQSection from './components/FAQSection'
import TestimonialsSection from './components/TestimonialsSection'
import Navbar from './components/Navbar'
import CollegeLogoSection from './components/CollegeLogoCarousel'
import { GoogleIcon, YouTubeIcon, LinkedInIcon } from './components/CoachSection'

import { HorizonHero } from './components/ui/horizon-hero-section.jsx'
import { AboutSection } from './components/ui/about-section.jsx'
import { EventsPage } from './components/ui/events-page.jsx'
import { DynamicEventPage } from './components/ui/DynamicEventPage.jsx'
import { PosterizeEventPage } from './components/ui/PosterizeEventPage.jsx'
import { InnovistaEventPage } from './components/ui/InnovistaEventPage.jsx'
import { GuessBustersEventPage } from './components/ui/GuessBustersEventPage.jsx'
import { ClickFestEventPage } from './components/ui/ClickFestEventPage.jsx'
import { Accommodation } from './components/ui/accommodation.jsx'
import { HostelDetails } from './components/ui/hostel-details.jsx'
import { PromoSection } from './components/PromoSection'
import { CommunityRegistration } from './components/CommunityRegistration'
 
import { GalleryPage } from './components/ui/gallery-page.jsx'
import { StatsPage } from './components/StatsPage'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Preloader } from './components/ui/Preloader.jsx'
import { PassportPage } from './components/ui/PassportPage.jsx'
import { InsightsFAB } from './components/ui/InsightsFAB.jsx'
import { InsightsPage } from './components/ui/InsightsPage.jsx'
import { RegisterPage } from './components/ui/Registraion.jsx'


/* ── Coach Image Assets ── */
const coach1 = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773224144/new_coach1_iwdt2h.jpg'
const coach2 = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773218150/new_coach2_gumeol.jpg'
const coach3 = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773218151/new_coach3_z0djnw.jpg'

/* ── Badge Component ── */
function Badge({ children, className = "" }) {
    return (
        <div className={`absolute z-20
            inline-flex items-center gap-2.5
            bg-[rgba(8,8,8,0.72)] backdrop-blur-[28px] backdrop-saturate-[160%]
            border border-white/[0.14] border-t-white/[0.22]
            rounded-full py-2.5 px-[18px] pl-3
            shadow-[0_12px_40px_rgba(0,0,0,0.75),0_4px_12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.3)]
            whitespace-nowrap ${className}`}>
            {children}
        </div>
    )
}

function Home() {
    return (
        <>

            {/* ═══════════════ HERO — Horizon 3D Section ═══════════════ */}
            <HorizonHero />

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
                            Your Coach, <strong className="font-extrabold text-white">Not</strong>
                        </span>
                        <span className="block text-[clamp(28px,3.2vw,46px)] font-extrabold text-white font-sans tracking-[-0.03em] leading-[1.1]">
                            Just A Creator
                        </span>
                    </h1>
                }
                bio={
                    <div className="font-hand text-[17.5px] leading-[1.65] text-white/70 mb-5 max-w-[500px] flex flex-col gap-3">
                        <p>Hey, I&apos;m Raj, Founder &amp; CEO of takeUforward, formerly known as Striver.</p>
                        <p>
                            I began my journey at Media.net, moved to Google, and spent three incredible years there before choosing a different path; building something of my own. Today, I run takeUforward full-time, a platform born from passion, persistence, and the desire to make learning truly accessible.
                        </p>
                        <div>
                            <p className="text-white/40 mb-1 mt-1">Remember:</p>
                            <p className="font-bold text-white/90">You don&apos;t need a perfect background to build a great future.</p>
                            <p className="font-bold text-white/90">You just need direction, discipline, and the courage to start.</p>
                            <p className="mt-1">Let&apos;s move forward, one step, one skill, one leap at a time.</p>
                        </div>
                    </div>
                }
                imageClassName="object-cover object-[50%_15%] w-full h-full"
                badges={<>
                    <Badge className="top-[5%] right-[2%]">
                        <div className="shrink-0 flex items-center justify-center w-[26px] h-[26px]"><GoogleIcon /></div>
                        <span className="text-white/95 text-[13px] font-semibold font-sans tracking-[-0.01em]">Software Engineer III @ Google</span>
                    </Badge>
                    <Badge className="bottom-[25%] left-[2%]">
                        <span className="text-white/95 text-[13px] font-semibold font-sans tracking-[-0.01em]">Founder &amp; CEO, takeUforward</span>
                        <span className="text-white/45 text-[11.5px] font-sans italic">TUF+</span>
                    </Badge>
                    <Badge className="bottom-[5%] right-[2%] px-3">
                        <div className="shrink-0 flex items-center justify-center w-[26px] h-[26px]">
                            <svg width="20" height="20" viewBox="0 0 100 100"><text y="0.9em" fontSize="90" fill="#FF9900">a</text></svg>
                        </div>
                        <span className="text-white/95 text-[13px] font-semibold font-sans tracking-[-0.01em]">Worked at Amazon</span>
                    </Badge>
                </>}
            />

            {/* ═══════════════ SECTION 2 — The Platform ═══════════════ */}
            <CoachSection
                imageSrc={coach2}
                heading={
                    <h1 className="mb-7">
                        <span className="block text-[clamp(28px,3.2vw,46px)] font-light text-white/55 font-sans tracking-[-0.03em] leading-[1.1]">
                            Learn With <strong className="font-extrabold text-white">Structure,</strong>
                        </span>
                        <span className="block text-[clamp(28px,3.2vw,46px)] font-extrabold text-white font-sans tracking-[-0.03em] leading-[1.1]">
                            Not Just Tutorials
                        </span>
                    </h1>
                }
                bio={
                    <div className="font-hand text-[17.5px] leading-[1.65] text-white/70 mb-5 max-w-[500px] flex flex-col gap-3">
                        <p>takeUforward isn&apos;t just another tutorial platform — it&apos;s a complete learning system designed to take you from zero to placement-ready.</p>
                        <p>
                            With curated sheets like the Striver&apos;s SDE Sheet, A2Z DSA course, and in-depth CS fundamentals, every topic is structured so you never feel lost.
                        </p>
                        <div>
                            <p className="text-white/40 mb-1 mt-1">What makes it different:</p>
                            <p className="font-bold text-white/90">Structured roadmaps. Real company questions. Zero fluff.</p>
                            <p className="font-bold text-white/90">From brute force to optimal — every approach explained.</p>
                            <p className="mt-1">Master DSA the right way, step by step.</p>
                        </div>
                    </div>
                }
                imageClassName="object-cover object-[50%_0%] w-full h-full"
                badges={<>
                    <Badge className="top-[5%] right-[2%]">
                        <span className="text-[16px]">📚</span>
                        <span className="text-white/95 text-[13px] font-semibold font-sans tracking-[-0.01em]">Striver&apos;s SDE Sheet</span>
                    </Badge>
                    <Badge className="bottom-[25%] left-[2%]">
                        <span className="text-[16px]">🎯</span>
                        <span className="text-white/95 text-[13px] font-semibold font-sans tracking-[-0.01em]">A2Z DSA Course</span>
                        <span className="text-white/45 text-[11.5px] font-sans italic">450+ problems</span>
                    </Badge>
                    <Badge className="bottom-[5%] right-[2%]">
                        <span className="text-[16px]">🏆</span>
                        <span className="text-white/95 text-[13px] font-semibold font-sans tracking-[-0.01em]">Trusted by 1M+ students</span>
                    </Badge>
                </>}
            />

            {/* ═══════════════ SECTION 3 — The Mission ═══════════════ */}
            <CoachSection
                imageSrc={coach3}
                heading={
                    <h1 className="mb-7">
                        <span className="block text-[clamp(28px,3.2vw,46px)] font-light text-white/55 font-sans tracking-[-0.03em] leading-[1.1]">
                            Built For <strong className="font-extrabold text-white">Students,</strong>
                        </span>
                        <span className="block text-[clamp(28px,3.2vw,46px)] font-extrabold text-white font-sans tracking-[-0.03em] leading-[1.1]">
                            Not For Profit
                        </span>
                    </h1>
                }
                bio={
                    <div className="font-hand text-[17.5px] leading-[1.65] text-white/70 mb-5 max-w-[500px] flex flex-col gap-3">
                        <p>Most of takeUforward&apos;s content is free — because education shouldn&apos;t have a paywall.</p>
                        <p>
                            From the A2Z DSA Course to CS fundamentals, from system design to competitive programming — the mission has always been to help students who can&apos;t afford expensive courses.
                        </p>
                        <div>
                            <p className="text-white/40 mb-1 mt-1">Our belief:</p>
                            <p className="font-bold text-white/90">Quality education should be accessible to everyone.</p>
                            <p className="font-bold text-white/90">Your financial background should never limit your potential.</p>
                            <p className="mt-1">Join the community. Learn. Grow. Give back.</p>
                        </div>
                    </div>
                }
                imageClassName="object-cover object-[50%_15%] w-full h-full"
                badges={<>
                    <Badge className="top-[5%] right-[2%]">
                        <span className="text-[16px]">🌍</span>
                        <span className="text-white/95 text-[13px] font-semibold font-sans tracking-[-0.01em]">100% Free Core Content</span>
                    </Badge>
                    <Badge className="bottom-[25%] left-[2%]">
                        <span className="text-[16px]">👥</span>
                        <span className="text-white/95 text-[13px] font-semibold font-sans tracking-[-0.01em]">Community of 1M+ learners</span>
                    </Badge>
                    <Badge className="bottom-[5%] right-[2%]">
                        <span className="text-[16px]">💼</span>
                        <span className="text-white/95 text-[13px] font-semibold font-sans tracking-[-0.01em]">10k+ placed at top companies</span>
                    </Badge>
                </>}
            />
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
            <AnimatePresence>
                {showLoader && (
                    <Preloader onComplete={handlePreloaderComplete} />
                )}
            </AnimatePresence>

            <Navbar />

            <div className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutSection />} />
                    <Route path="/events" element={<EventsPage />} />
                    <Route path="/event-wireframe" element={<DynamicEventPage />} />
                    <Route path="/posterize" element={<PosterizeEventPage />} />
                    <Route path="/innovista" element={<InnovistaEventPage />} />
                    <Route path="/guess-busters" element={<GuessBustersEventPage />} />
                    <Route path="/click-fest" element={<ClickFestEventPage />} />
                    <Route path="/accommodation" element={<Accommodation />} />
                    <Route path="/accommodation/boys" element={<HostelDetails type="boys" />} />
                    <Route path="/accommodation/girls" element={<HostelDetails type="girls" />} />
                 
                    <Route path="/stats" element={<StatsPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/passport" element={<PassportPage />} />
                    <Route path="/insights" element={<InsightsPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </div>

            {!isAboutPage && <Footer />}
            
            {/* Floating Action Button for Insights Chatbot */}
            <InsightsFAB />
        </div>
    )
}

export default App
