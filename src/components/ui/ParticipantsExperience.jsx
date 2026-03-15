import React from 'react';
import { motion } from 'framer-motion';

const boyImage = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773267186/WhatsApp_Image_2026-03-11_at_14.47.44_sdgm1x.jpg';
const girlImage = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773267324/WhatsApp_Image_2026-03-11_at_15.15.00_gxucuo.jpg';

const TESTIMONIALS = [
    {
        name: 'Arjun Mehta',
        year: 'B.Tech 3rd Year',
        event: 'Codex - WebThon',
        college: 'S.V. University College of Engineering',
        logo: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773375271/250px-Sri_Venkateswara_University_logo_fdm8re.png',
        content: 'Competing in Codex was an exhilarating experience. The web development challenge pushed my technical boundaries and the atmosphere was incredibly supportive.',
        image: boyImage
    },
    {
        name: 'Sanya Sharma',
        year: 'B.Tech 2nd Year',
        event: 'Technovate - Paper Presentation',
        college: 'SITAMS, Chittoor',
        logo: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773269960/SITAMS-removebg-preview_uy6z3f.png',
        content: 'Presenting my research at Technovate gave me the confidence to articulate complex ideas. It was rewarding to receive feedback from such esteemed judges.',
        image: girlImage
    },
    {
        name: 'Rohan Gupta',
        year: 'B.Tech 4th Year',
        event: 'BGMI - Esports',
        college: 'SVCE, Tirupati',
        logo: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773269966/svce-removebg-preview_uh1mhu.png',
        content: 'The Esports tournament was flawlessly organized. The intensity of BGMI and the team spirit displayed by all participants made it a memorable event for me.',
        image: boyImage
    },
    {
        name: 'Anjali Varma',
        year: 'B.Tech 3rd Year',
        event: 'ICONEMA - Movie Logic',
        college: 'VEMU Institute of Technology',
        logo: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773269966/vemu-removebg-preview_evx8zg.png',
        content: 'ICONEMA was a unique blend of entertainment and skill. Identifying the movie logic was both fun and challenging. Looking forward to next year!',
        image: girlImage
    }
];

export const ParticipantsExperience = () => {
    return (
        <section className="bg-[#0A0A0A] py-20 px-6 md:px-12 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-1 h-10 bg-[#f89b29] rounded-full"></div>
                        <h2 className="text-3xl md:text-5xl font-black text-white px-2">
                            Participants Experience
                        </h2>
                    </div>
                    <p className="text-white/40 text-lg ml-4">Hear what our participants have to say about Sigmoid 2K26</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {TESTIMONIALS.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#111] border border-white/5 rounded-3xl p-6 flex flex-col hover:border-[#f89b29]/30 transition-all group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-white/10" />
                                <div>
                                    <h3 className="text-white font-bold text-lg leading-tight">{t.name}</h3>
                                    <p className="text-[#f89b29] text-xs font-semibold">{t.year}</p>
                                </div>
                            </div>

                            <p className="text-white/60 text-sm leading-relaxed mb-6 italic flex-1">
                                "{t.content}"
                            </p>

                            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                <div className="flex flex-col">
                                    <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1 italic">Event Participated</p>
                                    <p className="text-white/80 text-[13px] font-bold">{t.event}</p>
                                </div>
                                <div className="w-10 h-10 bg-white/5 rounded-xl p-1.5 flex items-center justify-center border border-white/5 group-hover:border-[#f89b29]/20">
                                    <img src={t.logo} alt={t.college} className="w-full h-full object-contain" />
                                </div>
                            </div>
                            <p className="text-white/20 text-[10px] mt-3 font-medium truncate">{t.college}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
