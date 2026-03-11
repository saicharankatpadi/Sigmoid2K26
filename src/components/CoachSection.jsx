import coachPhoto from '../assets/coach_final.jpg'
import { motion } from 'framer-motion'


/* ── tiny inline SVG icons ── */
const YouTubeIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#FF0000">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
    </svg>
)

const LinkedInIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#0A66C2">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.55V9H3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
)

const GoogleIcon = () => (
    <svg width="18" height="18" viewBox="0 0 48 48">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
)

const ArrowIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
)

export default function CoachSection({
    imageSrc,
    heading,
    bio,
    ctaText = "Get Started Now",
    badges,
    socialCards,
    fadeEdges = false,
    imageClassName = "object-cover object-center",
}) {
    return (
        <section className="bg-[#0A0A0A] flex items-stretch py-8 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-[10%] -left-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(249,115,22,0.05)_0%,transparent_70%)] pointer-events-none z-0" />

            <div className="max-w-[1400px] mx-auto px-[48px] w-full relative z-[1]">
                {/* 
                    We use a two-column grid where items stretch. 
                    The right side (image) will stretch to exactly match the height 
                    of the left side (heading + bio + socialCards). 
                */}
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-x-12 items-stretch">
                    
                    {/* ── Left Column (Text content) ── */}
                    <div className="flex flex-col justify-start w-full lg:pr-12 h-full py-4">
                        <div>
                            {/* Heading */}
                            <div className="mb-4">
                                {heading}
                            </div>
                            
                            {/* Bio */}
                            <div className="flex flex-col justify-start">
                                {bio}
                            </div>
                        </div>

                        {/* CTA / Social Cards */}
                        {socialCards && (
                            <div className="mt-6 w-full">
                                {socialCards}
                            </div>
                        )}
                    </div>

                    {/* ── Right Column Image Frame ── */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-full h-full min-h-[350px] object-cover justify-self-center md:justify-self-end rounded-[2rem] border border-white/10 bg-[#111]/40 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-2">
                        {/* Image */}
                        <img
                            className={`absolute inset-0 w-[calc(100%-16px)] h-[calc(100%-16px)] m-2 block rounded-[1.5rem] z-10 ${imageClassName}`}
                            src={imageSrc || coachPhoto}
                            alt="Coach"
                        />
                        
                        {/* Edge fades for blending into background */}
                        {fadeEdges && (
                            <>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent z-10 pointer-events-none rounded-[1.5rem]" />
                                <div className="absolute inset-0 bg-gradient-to-l from-[#0A0A0A]/60 via-transparent to-transparent z-10 pointer-events-none rounded-[1.5rem]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10 pointer-events-none rounded-[1.5rem]" />
                                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-transparent to-transparent z-10 pointer-events-none rounded-[1.5rem]" />
                            </>
                        )}

                        {/* ── GLASSMORPHISM BADGES ── */}
                        {badges}
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

/* ── Re-export icons for use in App.jsx ── */
export { GoogleIcon, YouTubeIcon, LinkedInIcon, ArrowIcon }
