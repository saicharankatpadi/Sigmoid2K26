import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar({ topOffset = 0 }) {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const links = [
        {
            label: 'Home',
            href: '/',
            icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
            )
        },
        {
            label: 'Events',
            href: '/events',
            icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
            )
        },
        {
            label: 'Register',
            href: '/register',
            icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                </svg>
            )
        },
        {
            label: 'Stats',
            href: '/stats',
            icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
            )
        },
        {
            label: 'Accommodation',
            href: '/accommodation',
            icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"></path>
                    <path d="M4 10V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5"></path>
                    <line x1="12" y1="4" x2="12" y2="20"></line>
                    <line x1="2" y1="14" x2="22" y2="14"></line>
                </svg>
            )
        },
        {
            label: 'AboutUs',
            href: '#about',
            icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
            )
        },
        {
            label: 'Gallery',
            href: '/gallery',
            icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
            )
        },
        {
            label: 'Passport',
            href: '/passport',
            icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
            )
        },
        {
            label: 'Magazines',
            href: '/magazines',
            icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
            )
        },
    ]

    return (
        <>
            {/* ── Keyframes and Custom Styles ── */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Pirata+One&display=swap');

                @keyframes navSlideDown {
                    from { opacity: 0; transform: translateY(-12px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .nav-link {
                    color: rgba(255, 255, 255, 0.65);
                    transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .nav-link:hover {
                    color: #FF6B2B !important;
                    background: rgba(255, 107, 43, 0.08);
                }
                .nav-link svg {
                    transition: transform 0.25s ease;
                }
                .nav-link:hover svg {
                    transform: translateY(-1px);
                }
            `}</style>

            <nav
                className="fixed left-0 right-0 z-50 transition-all duration-500 ease-out"
                style={{
                    top: scrolled ? '0px' : `${topOffset}px`,
                    padding: scrolled ? '10px 24px' : '0 0',
                }}
            >
                <div
                    className="transition-all duration-500 ease-out"
                    style={{
                        maxWidth: scrolled ? '1400px' : '100%',
                        margin: '0 auto',
                        background: scrolled
                            ? 'rgba(15, 15, 15, 0.65)'
                            : 'rgba(10, 10, 10, 0.95)',
                        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
                        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
                        borderRadius: scrolled ? '9999px' : '0',
                        border: scrolled
                            ? '1px solid rgba(255,255,255,0.08)'
                            : '1px solid transparent',
                        borderBottom: scrolled
                            ? '1px solid rgba(255,255,255,0.08)'
                            : '1px solid transparent',
                        boxShadow: scrolled
                            ? '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.03) inset'
                            : 'none',
                        padding: scrolled ? '10px 28px' : '14px 40px',
                    }}
                >
                    <div className="flex items-center justify-between w-full">
                        {/* ── Left: Logo + Title ── */}
                        <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 no-underline group shrink-0">
                            {/* New Sigmoid 2k26 Logo */}
                            <img 
                                src="/assets/images/hostel/logo.png" 
                                alt="Sigmoid Logo" 
                                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_2px_8px_rgba(255,255,255,0.1)]"
                            />
                            <span
                                className="font-bold tracking-tight text-white text-xl md:text-2xl"
                                style={{ 
                                    fontFamily: 'Inter, sans-serif',
                                }}
                            >
                                SIGMOID 2K26
                            </span>
                        </Link>

                        {/* ── Center: Nav Links (desktop) ── */}
                        <div className="hidden lg:flex items-center gap-0.5">
                            {links.map((link) => {
                                const isRouterLink = ['Home', 'AboutUs', 'Events', 'Register', 'Accommodation', 'Gallery', 'Passport', 'Magazines'].includes(link.label);
                                if (isRouterLink) {
                                    return (
                                        <Link
                                            key={link.label}
                                            to={link.label === 'AboutUs' ? '/about' : link.href}
                                            className="nav-link flex items-center gap-2 px-3.5 py-2 text-[13px] font-medium no-underline rounded-full"
                                            style={{ fontFamily: 'Inter, sans-serif' }}
                                        >
                                            <span className="flex items-center justify-center opacity-90">{link.icon}</span>
                                            <span>{link.label}</span>
                                        </Link>
                                    )
                                }
                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="nav-link flex items-center gap-2 px-3.5 py-2 text-[13px] font-medium no-underline rounded-full"
                                        style={{ fontFamily: 'Inter, sans-serif' }}
                                    >
                                        <span className="flex items-center justify-center opacity-90">{link.icon}</span>
                                        <span>{link.label}</span>
                                    </a>
                                )
                            })}
                        </div>

                        {/* ── Right: Menu icon ── */}
                        <div className="flex items-center lg:hidden">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="flex items-center justify-center bg-transparent border-none cursor-pointer outline-none transition-all duration-200"
                                style={{
                                    width: 40, height: 40,
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = 'rgba(255,107,43,0.1)'
                                    e.currentTarget.style.borderColor = 'rgba(255,107,43,0.3)'
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                                }}
                            >
                                {/* Hamburger icon */}
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                    stroke={menuOpen ? "#FF6B2B" : "rgba(255,255,255,0.75)"}
                                    strokeWidth="2.5"
                                    strokeLinecap="round" strokeLinejoin="round"
                                >
                                    <path d={menuOpen ? "M18 6L6 18" : "M4 7h16"} className="transition-all duration-300" />
                                    <path d={menuOpen ? "M6 6l12 12" : "M4 12h16"} className="transition-all duration-300"
                                        style={{ opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
                                    <path d={menuOpen ? "M6 6L18 18" : "M4 17h16"} className="transition-all duration-300" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── Mobile Menu Dropdown ── */}
                <div
                    className="lg:hidden overflow-hidden transition-all duration-400 px-6"
                    style={{
                        maxHeight: menuOpen ? '500px' : '0',
                        opacity: menuOpen ? 1 : 0,
                        marginTop: menuOpen ? '8px' : '0',
                        transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease, margin-top 0.3s ease',
                    }}
                >
                    <div
                        style={{
                            background: 'rgba(15, 15, 15, 0.92)',
                            backdropFilter: 'blur(24px) saturate(180%)',
                            WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                            borderRadius: '24px',
                            border: '1px solid rgba(255,255,255,0.08)',
                            padding: '12px 8px',
                            maxWidth: '1200px',
                            margin: '0 auto',
                        }}
                    >
                        {links.map((link, i) => {
                            const isRouterLink = ['Home', 'AboutUs', 'Events', 'Register', 'Accommodation', 'Gallery', 'Passport', 'Magazines'].includes(link.label);
                            const style = {
                                fontFamily: 'Inter, sans-serif',
                                animation: menuOpen ? `navSlideDown 0.4s cubic-bezier(0.22,1,0.36,1) both` : 'none',
                                animationDelay: `${i * 50}ms`,
                            };
                            const className = "nav-link flex items-center gap-3 px-5 py-3.5 text-[14px] font-medium no-underline rounded-xl transition-all duration-200";

                            if (isRouterLink) {
                                return (
                                    <Link
                                        key={link.label}
                                        to={link.label === 'AboutUs' ? '/about' : link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className={className}
                                        style={style}
                                    >
                                        <span className="opacity-80">{link.icon}</span>
                                        <span>{link.label}</span>
                                    </Link>
                                )
                            }
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={className}
                                    style={style}
                                >
                                    <span className="opacity-80">{link.icon}</span>
                                    <span>{link.label}</span>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </nav>
        </>
    )
}
