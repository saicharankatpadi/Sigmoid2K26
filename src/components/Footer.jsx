import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-[#0A0A0A] border-t border-white/[0.06] pt-6 pb-4 px-8 md:px-16">
            <div className="max-w-[1400px] mx-auto">
                {/* Top Row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
                    {/* Logo + Name */}
                    <div className="flex items-center gap-2.5 shrink-0">
                        <img 
                            src="https://res.cloudinary.com/djiivo0r7/image/upload/v1773280067/WhatsApp_Image_2026-03-11_at_18.46.50-removebg-preview_yfupc0.png" 
                            alt="Sigmoid Logo" 
                            className="w-8 h-8 object-contain"
                        />
                        <span className="text-white/90 font-semibold text-[15px] font-sans tracking-[-0.01em]">
                            SIGMOID2K26
                        </span>
                    </div>

                    {/* Nav Links */}
                    <nav className="flex flex-wrap items-center justify-center gap-1 text-[13px] font-sans">
                        <Link to="/about" className="text-white/50 hover:text-white/80 transition-colors px-2.5 py-1">About Us</Link>
                        <span className="text-white/15">|</span>
                        <Link to="/contact" className="text-white/50 hover:text-white/80 transition-colors px-2.5 py-1">Contact us</Link>
                        <span className="text-white/15">|</span>
                        <Link to="/register" className="text-white/50 hover:text-white/80 transition-colors px-2.5 py-1">Pricing</Link>
                    </nav>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3 shrink-0">
                        {/* Instagram */}
                        <a href="https://www.instagram.com/sigmoid_svuce?utm_source=qr&igsh=cG9la3h6a3RlNWN" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-md bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/sigmoid-tech-fest-286552356?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-sm bg-[#0077b5] flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        {/* YouTube */}
                        <a href="https://www.youtube.com/@sigmoid2k25_svuce" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-md bg-[#FF0000] flex items-center justify-center hover:opacity-80 transition-opacity">
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
