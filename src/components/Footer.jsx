import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-[#0A0A0A] border-t border-white/[0.06] pt-10 pb-6 px-8 md:px-16">
            <div className="max-w-[1400px] mx-auto">
                {/* Top Row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
                    {/* Logo + Name */}
                    <div className="flex items-center gap-2.5 shrink-0">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F97316] to-[#ea580c] flex items-center justify-center">
                            <span className="text-white font-extrabold text-[14px] font-sans">S</span>
                        </div>
                        <span className="text-white/90 font-semibold text-[15px] font-sans tracking-[-0.01em]">
                            SIGMOID2K26
                        </span>
                    </div>

                    {/* Nav Links */}
                    <nav className="flex flex-wrap items-center justify-center gap-1 text-[13px] font-sans">
                        <Link to="/about" className="text-white/50 hover:text-white/80 transition-colors px-2.5 py-1">About Us</Link>
                        <span className="text-white/15">|</span>
                        <a href="#" className="text-white/50 hover:text-white/80 transition-colors px-2.5 py-1">Contact us</a>
                        <span className="text-white/15">|</span>
                        <a href="#" className="text-white/50 hover:text-white/80 transition-colors px-2.5 py-1">Pricing</a>
                        <span className="text-white/15">|</span>
                        <a href="#" className="text-white/50 hover:text-white/80 transition-colors px-2.5 py-1">Terms and Conditions</a>
                        <span className="text-white/15">|</span>
                        <a href="#" className="text-white/50 hover:text-white/80 transition-colors px-2.5 py-1">Cancellation and Refund Policy</a>
                    </nav>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3 shrink-0">
                        {/* Instagram */}
                        <a href="#" className="w-7 h-7 rounded-md bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </a>
                        {/* X / Twitter */}
                        <a href="#" className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="#" className="w-7 h-7 rounded-md bg-[#0A66C2] flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM3.56 20.45h3.55V9H3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                            </svg>
                        </a>
                        {/* YouTube */}
                        <a href="#" className="w-7 h-7 rounded-md bg-[#FF0000] flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                                <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-white/30 text-[12px] font-sans italic">
                        Copyright © 2026 SIGMOID2K26 | All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}
