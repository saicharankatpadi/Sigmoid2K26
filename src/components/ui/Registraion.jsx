import React from 'react';

const passes = [
    {
        name: 'Elite Pass',
        originalPrice: 400,
        price: 350,
        description: 'Unlock the world of Sigmoid with the Elite pass, a base pass to experience Sigmoid, your access ticket to all non-tech events.',
        highlights: ['All Non-Tech Events'],
        accent: 'from-[#ff8a1f] to-[#ff5a00]',
        glow: 'rgba(255,138,31,0.22)',
    },
    {
        name: 'Supreme Pass',
        originalPrice: 450,
        price: 400,
        description: 'Step into the spotlight with the Supreme Pass. Access to one event from the paid trio plus the free tech trio bundle and all non-tech events.',
        highlights: ['One Event', 'Techfusion', 'Posterize', 'Innovista', 'Free Tech Trio Bundle', 'All Non-Tech Events'],
        accent: 'from-[#ffb347] to-[#ff6b2b]',
        glow: 'rgba(255,107,43,0.2)',
    },
    {
        name: 'Prime Pass',
        originalPrice: 500,
        price: 450,
        description: 'Experience the essence of innovation with the Prime Pass. Access to your two favourites from the paid trio plus the free tech trio and all non-tech events.',
        highlights: ['Two favourites', 'Techfusion', 'Posterize', 'Innovista', 'Free Tech Trio Bundle', 'All Non-Tech Events'],
        accent: 'from-[#ff8a1f] to-[#ff5a00]',
        glow: 'rgba(255,138,31,0.22)',
    },
    {
        name: 'Ultimate Pass',
        originalPrice: 550,
        price: 500,
        description: 'Embark on an unparalleled adventure with the Ultimate Pass. Your ticket to all the tech and non-tech events.',
        highlights: ['All the Tech and Non-Tech Events'],
        accent: 'from-[#ffb347] to-[#ff6b2b]',
        glow: 'rgba(255,107,43,0.2)',
    },
];

const guidelines = [
    {
        title: 'Pass Validity',
        text: 'Passes are valid for the entire duration of Sigmoid 2K26. Early registrations get added benefits. Passes must be activated within the first day of the event.',
    },
    {
        title: 'Decision of Judges',
        text: 'All decisions made by the judges during competitions and events are final. No correspondence regarding the results will be entertained after the announcement.',
    },
    {
        title: 'Pass Non-Transferable',
        text: 'Passes are strictly non-transferable and must be used only by the registered participant. Any violation will result in immediate cancellation without refund.',
    },
    {
        title: 'Identity Check',
        text: 'Participants must carry valid college ID and government ID at all times. Random verification may be conducted during the event.',
    },
    {
        title: 'Data Protection',
        text: 'Your personal information is protected under our privacy policy. Data collected will be used only for event-related communications and requirements.',
    },
    {
        title: 'Code of Conduct',
        text: 'Participants must maintain professional behavior throughout the event. Any misconduct will result in immediate disqualification and removal from the event.',
    },
];

function PassCard({ pass }) {
    return (
        <div className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.22))] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.35)] transition duration-500 hover:-translate-y-1 hover:border-[#ff8a1f]/40">
            <div className={`absolute inset-x-8 top-0 h-px bg-gradient-to-r ${pass.accent} opacity-80`} />
            <div className="absolute inset-0 opacity-100">
                <div
                    className="absolute -right-16 top-8 h-40 w-40 rounded-full blur-[100px]"
                    style={{ backgroundColor: pass.glow }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02),transparent_35%,transparent_65%,rgba(255,138,31,0.04))]" />
            </div>

            <div className="relative z-10">
                <div className="mx-auto mb-6 inline-flex rounded-full border border-[#ff8a1f]/20 bg-[#ff8a1f]/8 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-[#ffb347]">
                    Sigmoid 2K26
                </div>

                <h3 className="text-center text-[2rem] font-light tracking-[-0.04em] text-[#ffd7a3]">{pass.name}</h3>

                <div className="mt-8 text-center">
                    <div className="text-2xl font-light text-[#d7ba4c] sm:text-[2.6rem]">
                        <span className="mr-2 text-white/35 line-through">Rs{pass.originalPrice}</span>
                        <span className="font-medium text-[#ffd166]">Rs{pass.price}</span>
                    </div>
                </div>

                <p className="mx-auto mt-8 max-w-xl text-center text-[1rem] leading-8 text-white/58">
                    {pass.description}{' '}
                    {pass.highlights.map((item, index) => (
                        <span key={item} className="text-[#ff9f43]">
                            {item}
                            {index < pass.highlights.length - 1 ? ', ' : '.'}
                        </span>
                    ))}
                </p>

                <div className="mt-10 flex justify-center">
                    <button
                        type="button"
                        className={`rounded-full border border-white/70 bg-gradient-to-r ${pass.accent} px-8 py-3 text-lg font-medium text-white shadow-[0_8px_30px_rgba(255,106,43,0.28)] transition hover:scale-[1.03]`}
                    >
                        Register Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export function RegisterPage() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#050505] pt-28 text-white">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,138,31,0.16),transparent_22%),radial-gradient(circle_at_top_right,rgba(255,107,43,0.12),transparent_18%),linear-gradient(180deg,#050505_0%,#0a0a0a_45%,#050505_100%)]" />
                <div className="absolute inset-0 opacity-[0.045]" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)',
                    backgroundSize: '72px 72px'
                }} />
                <div className="absolute left-[10%] top-28 h-52 w-52 rounded-full bg-[#ff8a1f]/10 blur-[120px]" />
                <div className="absolute bottom-20 right-[12%] h-64 w-64 rounded-full bg-[#ff5a00]/10 blur-[150px]" />
            </div>

            <section className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-10">
                <header className="mx-auto max-w-4xl text-center">
                    <div className="inline-flex rounded-full border border-[#ff8a1f]/20 bg-[#ff8a1f]/8 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.26em] text-[#ffb347]">
                        Neon Nostaliga
                    </div>
                    <h1 className="mt-8 text-5xl font-light tracking-[-0.05em] text-[#ff8a1f] sm:text-6xl md:text-7xl">
                        Choose Your Pass
                    </h1>
                    <p className="mt-10 text-2xl font-light text-white/55 sm:text-3xl">
                        Experience Sigmoid 2K26 your way
                    </p>
                </header>

                <div className="mx-auto mt-28 max-w-6xl text-center text-lg leading-10 text-white">
                    <p>Events in the free tech trio bundle are: Circuitrix, QuizMania, Codex</p>
                    <p className="mt-3 text-white/88">
                        Workshops will be available for all passes but hands-on workshops (Mobile Assembly, IOT) will be available for Supreme, Prime and Ultimate Passes only.
                        Workshops will run parallelly. To choose workshops, google form will be provided for registered participants on 21st March.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 lg:grid-cols-2">
                    {passes.map((pass) => (
                        <PassCard key={pass.name} pass={pass} />
                    ))}
                </div>

                <section className="mt-24">
                    <h2 className="text-center text-4xl font-light tracking-[-0.04em] text-[#ff8a1f] sm:text-5xl">
                        Registration Guidelines
                    </h2>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {guidelines.map((item) => (
                            <div key={item.title} className="rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.28))] p-8 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
                                <h3 className="text-2xl font-light tracking-[-0.04em] text-[#ffb347]">{item.title}</h3>
                                <p className="mt-6 text-lg leading-10 text-white/82">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </div>
    );
}

export default RegisterPage;
