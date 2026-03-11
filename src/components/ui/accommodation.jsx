import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button as MovingBorderButton } from './moving-border'
// import { Button } from './neon-button'
const girlsHostelImg = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773218160/girls_hostel_zl81gi.png'
const boysHostelImg = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773223585/boys_hostel_regszz.png'
const customerSupportImg = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773218149/customer_support_kkemrr.png'
const phoneIcon = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773218152/phone_icon_hwhv1z.png'
import { BlurIn } from './blur-in'

export function Accommodation() {
    const navigate = useNavigate();

    // Counts can be dynamically updated later
    const BOYS_COUNT = "100+";
    const GIRLS_COUNT = "70+";

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 sm:px-10 relative bg-[#0A0A0A] overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto space-y-16 relative z-10">
                <div className="text-center">
                    <BlurIn 
                        word="Accommodation" 
                        className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-wider"
                    />
                    <p className="text-zinc-400 text-lg">Find the perfect stay for your duration at SIGMOID2K26</p>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Boys Hostel Card */}
                    <div className="group relative rounded-[32px] overflow-hidden p-[1px] bg-gradient-to-b from-white/10 to-transparent">
                        <div className="relative h-full bg-[#111111]/80 backdrop-blur-xl rounded-[31px] p-8 md:p-10 flex flex-col justify-between border border-white/[0.05]">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
                            
                            <div className="relative z-10 flex-grow">
                                <div className="flex justify-between items-start mb-6">
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">BOYS<br/>HOSTEL</h2>
                                    <div className="bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-2xl flex flex-col items-center justify-center">
                                        <span className="text-xs text-blue-300 font-medium uppercase tracking-wider mb-1">Count</span>
                                        <span className="text-2xl font-bold text-blue-400 leading-none">{BOYS_COUNT}</span>
                                    </div>
                                </div>
                                
                                <div className="h-64 md:h-72 w-full rounded-2xl bg-gradient-to-tr from-white/5 to-white/10 border border-white/10 overflow-hidden mb-8 flex items-center justify-center relative p-6">
                                    <img 
                                        src={boysHostelImg}
                                        alt="Boys Hostel"
                                        className="h-full object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105"
                                    />
                                </div>
                            </div>
                            
                            <MovingBorderButton
                                borderRadius="1rem"
                                containerClassName="w-full h-[60px]"
                                borderClassName="bg-[radial-gradient(var(--blue-500)_40%,transparent_60%)]"
                                className="bg-[#111111]/80 hover:bg-blue-600/40 text-white font-semibold text-lg transition-colors border border-white/10 w-full h-full"
                                onClick={() => navigate('/accommodation/boys')}
                            >
                                More Info
                            </MovingBorderButton>
                        </div>
                    </div>

                    {/* Girls Hostel Card */}
                    <div className="group relative rounded-[32px] overflow-hidden p-[1px] bg-gradient-to-b from-white/10 to-transparent">
                        <div className="relative h-full bg-[#111111]/80 backdrop-blur-xl rounded-[31px] p-8 md:p-10 flex flex-col justify-between border border-white/[0.05]">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
                            
                            <div className="relative z-10 flex-grow">
                                <div className="flex justify-between items-start mb-6">
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">GIRLS<br/>HOSTEL</h2>
                                    <div className="bg-pink-500/20 border border-pink-500/30 px-4 py-2 rounded-2xl flex flex-col items-center justify-center">
                                        <span className="text-xs text-pink-300 font-medium uppercase tracking-wider mb-1">Count</span>
                                        <span className="text-2xl font-bold text-pink-400 leading-none">{GIRLS_COUNT}</span>
                                    </div>
                                </div>
                                
                                <div className="h-64 md:h-72 w-full rounded-2xl bg-gradient-to-tr from-white/5 to-white/10 border border-white/10 overflow-hidden mb-8 flex items-center justify-center relative p-6">
                                    <img 
                                        src={girlsHostelImg}
                                        alt="Girls Hostel"
                                        className="h-full object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105"
                                    />
                                </div>
                            </div>
                            
                            <MovingBorderButton
                                borderRadius="1rem"
                                containerClassName="w-full h-[60px]"
                                borderClassName="bg-[radial-gradient(var(--pink-500)_40%,transparent_60%)]"
                                className="bg-[#111111]/80 hover:bg-pink-600/40 text-white font-semibold text-lg transition-colors border border-white/10 w-full h-full"
                                onClick={() => navigate('/accommodation/girls')}
                            >
                                More Info
                            </MovingBorderButton>
                        </div>
                    </div>
                </div>

                {/* Helpdesk Section */}
                <div className="relative rounded-[32px] p-[1px] bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 mt-12 overflow-hidden overflow-visible">
                    <div className="relative bg-[#111]/90 backdrop-blur-xl rounded-[31px] p-8 md:p-12 border border-white/[0.05] flex flex-col md:flex-row items-center justify-between overflow-hidden">
                        
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-10 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
                        </div>

                        <div className="z-10 w-full md:w-2/3 mb-8 md:mb-0">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-wide">
                                YOUR CALL
                            </h2>
                            <p className="text-lg md:text-xl text-zinc-300 mb-6 font-medium">
                                For any Queries regarding Accommodation
                            </p>
                            <div className="flex flex-col gap-6 w-full max-w-xs">
                                <button 
                                    onClick={() => window.open('tel:+916305665343')}
                                    className="relative group w-full"
                                >
                                    <div className="flex items-center justify-center gap-4 bg-[#111] border border-white/10 px-6 py-4 rounded-2xl hover:bg-[#1a1a1a] transition-colors shadow-lg">
                                        <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                                            <img src={phoneIcon} alt="Phone" className="w-5 h-5 object-contain" />
                                        </div>
                                        <span className="text-white font-bold text-xl tracking-wide uppercase">Contact Us</span>
                                    </div>
                                </button>
                                
                                <div className="text-center sm:text-left">
                                    <p className="text-zinc-500 text-sm mt-1">Accommodation Leader, Name</p>
                                </div>
                            </div>
                        </div>

                        <div className="z-10 w-full md:w-1/3 flex justify-center md:justify-end">
                            <div className="relative w-48 h-48 md:w-56 md:h-56">
                                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
                                <img 
                                    src={customerSupportImg} 
                                    alt="Helpdesk" 
                                    className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                                />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
