import { Clock3, Mail, MapPin, Phone } from 'lucide-react'

const supportIllustration =
    'https://res.cloudinary.com/djiivo0r7/image/upload/v1773218149/customer_support_kkemrr.png'

const contactItems = [
    {
        icon: Phone,
        label: '6304700356',
        href: 'tel:6304700356',
    },
    {
        icon: Mail,
        label: 'sigmoid2k26@gmail.com',
        href: 'mailto:sigmoid2k26@gmail.com',
    },
    {
        icon: MapPin,
        label: 'Sri Venkateswara University, Tirupati, Andhra Pradesh 517502',
        href: 'https://maps.google.com/?q=Sri+Venkateswara+University+Tirupati+Andhra+Pradesh+517502',
    },
    {
        icon: Clock3,
        label: 'Daily-8:00 am - 5:00 pm',
    },
]

function ContactRow({ icon: Icon, label, href }) {
    const content = (
        <div className="flex items-start gap-4 rounded-[24px] border border-white/8 bg-white/[0.03] px-4 py-4 backdrop-blur-sm transition-all duration-300 hover:border-[#FF6B2B]/30 hover:bg-white/[0.05]">
            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF6B2B]/12 text-[#FF6B2B] shadow-[0_0_20px_rgba(255,107,43,0.12)]">
                <Icon size={18} strokeWidth={2.4} />
            </div>
            <p className="max-w-[28rem] text-base font-medium leading-7 text-white/78">
                {label}
            </p>
        </div>
    )

    if (!href) {
        return content
    }

    return (
        <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
            className="block rounded-2xl transition-transform duration-300 hover:translate-x-1"
        >
            {content}
        </a>
    )
}

export function ContactPage() {
    return (
        <section className="relative overflow-hidden bg-[#0A0A0A] px-6 pb-16 pt-32 text-white sm:px-10 lg:px-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_24%)]" />
            <div className="pointer-events-none absolute left-10 top-24 h-40 w-40 rounded-full bg-[#FF6B2B]/14 blur-3xl" />
            <div className="pointer-events-none absolute bottom-16 right-16 h-56 w-56 rounded-full bg-[#f97316]/18 blur-3xl" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-6 sm:gap-10 overflow-hidden rounded-[40px] border border-white/[0.08] bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-14">
                <div className="space-y-8 sm:space-y-10">
                    <div className="space-y-5">
                        <span className="inline-flex rounded-full border border-[#FF6B2B]/20 bg-[#FF6B2B]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#FF8A57]">
                            Contact
                        </span>
                        <div className="space-y-4">
                            <h1 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                                Contact Us
                            </h1>
                            <p className="max-w-xl text-base leading-7 text-white/58 sm:text-lg">
                                Reach out for event queries, registrations, partnerships, or anything
                                else around SIGMOID 2K26. We are happy to help over call or email.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-5 sm:space-y-6">
                        {contactItems.map((item) => (
                            <ContactRow key={item.label} {...item} />
                        ))}
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-[540px]">
                    <div className="absolute inset-x-8 bottom-0 top-10 rounded-[36px] bg-[linear-gradient(180deg,#FF6B2B_0%,#B53E0B_100%)] shadow-[0_22px_50px_rgba(249,115,22,0.28)]" />
                    <div className="absolute inset-x-14 bottom-6 top-16 rounded-[30px] border border-white/10 bg-black/12" />
                    <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-[#FFB088]/45 blur-2xl" />
                    <div className="absolute bottom-4 right-4 h-24 w-24 rounded-full bg-[#FF6B2B]/45 blur-2xl" />

                    <div className="relative flex min-h-[260px] items-center justify-center px-6 pt-8 sm:min-h-[470px] sm:px-10">
                        <img
                            src={supportIllustration}
                            alt="Customer support representative"
                            className="relative z-10 max-h-[220px] sm:max-h-[520px] w-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
