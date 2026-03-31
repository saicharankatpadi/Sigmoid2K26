import React from 'react';

const ePass = {
    name: 'ePass',
    priceLabel: 'Online Access',
    description: 'Join Sigmoid workshops online and attend the sessions virtually from anywhere.',
    highlights: ['Online Workshops'],
    accent: 'from-[#ffb347] to-[#ff6b2b]',
    glow: 'rgba(255,107,43,0.2)',
    paymentLink: 'https://docs.google.com/forms/d/e/1FAIpQLSff-OTrMDOE50y8OEH95BIjEMCipfRphfAQSuNnmmUwtp7Iqw/viewform?usp=publish-editor',
    buttonLabel: 'Register Now',
};

const elitePass = {
    name: 'Elite Pass',
    originalPrice: 400,
    price: 350,
    description: 'Unlock the world of Sigmoid with the Elite pass, a base pass to experience Sigmoid, your access ticket to all non-tech events.',
    highlights: ['All Non-Tech Events'],
    accent: 'from-[#ff8a1f] to-[#ff5a00]',
    glow: 'rgba(255,138,31,0.22)',
    paymentLink: 'https://rzp.io/rzp/3PGscNv',
};

const supremePass = {
    name: 'Supreme Pass',
    originalPrice: 450,
    price: 400,
    description: 'Step into the spotlight with the Supreme Pass. Access to one event from the paid trio plus the free tech trio bundle and all non-tech events.',
    highlights: ['One Event', 'Technovate', 'Posterize', 'Avishkar', 'Free Tech Trio Bundle', 'All Non-Tech Events'],
    accent: 'from-[#ffb347] to-[#ff6b2b]',
    glow: 'rgba(255,107,43,0.2)',
    paymentLink: 'https://rzp.io/rzp/HQc6zlQ',
};

const primePass = {
    name: 'Prime Pass',
    originalPrice: 500,
    price: 450,
    description: 'Experience the essence of innovation with the Prime Pass. Access to your two favourites from the paid trio plus the free tech trio and all non-tech events.',
    highlights: ['Two favourites', 'Technovate', 'Posterize', 'Avishkar', 'Free Tech Trio Bundle', 'All Non-Tech Events'],
    accent: 'from-[#ff8a1f] to-[#ff5a00]',
    glow: 'rgba(255,138,31,0.22)',
    paymentLink: 'https://rzp.io/rzp/nvMRMaaB',
};

const ultimatePass = {
    name: 'Ultimate Pass',
    originalPrice: 550,
    price: 500,
    description: 'Embark on an unparalleled adventure with the Ultimate Pass. Your ticket to all the tech and non-tech events.',
    highlights: ['All the Tech and Non-Tech Events'],
    accent: 'from-[#ffb347] to-[#ff6b2b]',
    glow: 'rgba(255,107,43,0.2)',
    paymentLink: 'https://rzp.io/rzp/d4CmxVw',
};

const ultimateProPass = {
    name: 'Ultimate Pro Pass',
    originalPrice: 1500,
    price: 1350,
    description: 'Embark on an unparalleled adventure with the Ultimate Pro Pass. Your ticket to all the tech and non-tech events with an exclusive Rs150 discount.',
    highlights: ['All the Tech and Non-Tech Events'],
    accent: 'from-[#ff8a1f] to-[#ff5a00]',
    glow: 'rgba(255,138,31,0.22)',
    paymentLink: 'https://docs.google.com/forms/d/e/1FAIpQLScoBNWZe-KzXjuiGkkdGsXaT_0K0NoDbnneEFhNEsdEg27s2w/viewform?usp=publish-editor',
};

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

function PeopleIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5 shrink-0 text-[#ffd166]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
            <circle cx="9.5" cy="7" r="3" />
            <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 4.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}

function NotificationIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5 shrink-0 text-[#ffd166]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 0 0-4-5.65V4a2 2 0 1 0-4 0v1.35A6 6 0 0 0 6 11v3.2a2 2 0 0 1-.6 1.4L4 17h5" />
            <path d="M9.5 17a2.5 2.5 0 0 0 5 0" />
        </svg>
    );
}

function OfferMarquee() {
    const message = 'Get an offer of 150rs on buying Ultimate Pro Pass for a quantity of three people';

    return (
        <div className="mx-auto mb-12 max-w-5xl overflow-hidden rounded-full border border-[#ff8a1f]/25 bg-[linear-gradient(90deg,rgba(255,138,31,0.14),rgba(255,90,0,0.08),rgba(255,138,31,0.14))] shadow-[0_12px_40px_rgba(255,106,43,0.12)]">
            <div className="flex items-center justify-center gap-3 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.22em] text-[#fff1d6] sm:text-base">
                <NotificationIcon />
                <span>{message}</span>
                <PeopleIcon />
            </div>
        </div>
    );
}

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
                    {pass.priceLabel ? (
                        <div className="text-2xl font-medium text-[#ffd166] sm:text-[2.6rem]">
                            {pass.priceLabel}
                        </div>
                    ) : (
                        <div className="text-2xl font-light text-[#d7ba4c] sm:text-[2.6rem]">
                            <span className="mr-2 text-white/35 line-through">Rs{pass.originalPrice}</span>
                            <span className="font-medium text-[#ffd166]">Rs{pass.price}</span>
                        </div>
                    )}
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
                    {pass.disabled ? (
                        <span
                            className={`cursor-not-allowed rounded-full border border-white/40 bg-gradient-to-r ${pass.accent} px-8 py-3 text-lg font-medium text-white/80 shadow-[0_8px_30px_rgba(255,106,43,0.28)]`}
                        >
                            {pass.buttonLabel || 'Register Now'}
                        </span>
                    ) : (
                        <a
                            href={pass.paymentLink}
                            target="_self"
                            rel="noreferrer"
                            className={`rounded-full border border-white/70 bg-gradient-to-r ${pass.accent} px-8 py-3 text-lg font-medium text-white shadow-[0_8px_30px_rgba(255,106,43,0.28)] transition hover:scale-[1.03]`}
                        >
                            {pass.buttonLabel || 'Register Now'}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export function RegisterPage() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#0A0A0A] pt-28 text-white">
            <section className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-10">
                <header className="mx-auto max-w-4xl text-center">
                    <OfferMarquee />


                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-tight text-white mb-6 drop-shadow-md">
                        Choose Your <span className="text-[#ff7a00] drop-shadow-[0_0_15px_rgba(255,122,0,0.6)]">Pass</span>
                    </h1>

                    <p className="text-white/80 text-lg md:text-xl max-w-[700px] mx-auto leading-relaxed mb-10 font-semibold drop-shadow-sm">
                        Experience Sigmoid 2K26 your way
                    </p>
                </header>

                <div className="mx-auto mt-28 max-w-6xl text-center text-lg leading-10 text-white">
                    <p>Events in the free tech trio bundle are: Circuitrix, QuizMania, Codex</p>
                    <p className="mt-3 text-white/88">
                        Workshops will be available for all passes You have to choose wisely because,
                        Workshops will run parallelly. To choose workshops, google form will be provided for registered participants on 1st April.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 lg:grid-cols-2">
                    <PassCard pass={ePass} />
                    <PassCard pass={elitePass} />
                    <PassCard pass={supremePass} />
                    <PassCard pass={primePass} />
                    <PassCard pass={ultimatePass} />
                    <PassCard pass={ultimateProPass} />
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
