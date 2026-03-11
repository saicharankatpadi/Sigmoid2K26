// ── DATA ── Replace logoUrl with your actual college logo image paths
const colleges = [
    { id: 1, name: "MIT", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg" },
    { id: 2, name: "Stanford", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Stanford_Cardinal_logo.svg" },
    { id: 3, name: "Harvard", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/70/Harvard_University_logo.svg" },
    { id: 4, name: "Caltech", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Caltech_Logo.svg" },
    { id: 5, name: "Princeton", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/71/Princeton_University_Shield.svg" },
    { id: 6, name: "Yale", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/07/Yale_University_logo.svg" },
    { id: 7, name: "Columbia", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Columbia_University_Logo.svg" },
    { id: 8, name: "U Chicago", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d7/The_University_of_Chicago_Logo.svg" },
    { id: 9, name: "Penn", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/92/UPenn_logo.svg" },
    { id: 10, name: "Duke", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/Duke_Blue_Devils_logo.svg" },
    { id: 11, name: "Cornell", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/47/Cornell_University_seal.svg" },
    { id: 12, name: "NYU", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/17/NYU_Logo.svg" },
    { id: 13, name: "UCLA", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0d/The_UCLA_Bruins_logo.svg" },
    { id: 14, name: "U Michigan", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Seal_of_the_University_of_Michigan.svg" },
    { id: 15, name: "Georgia Tech", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Georgia_Tech_Yellow_Jackets_logo.svg" },
];

const row1 = [...colleges.slice(0, 8), ...colleges.slice(0, 8)];
const row2 = [...colleges.slice(7), ...colleges.slice(7)];

function LogoTile({ college }) {
    return (
        <div
            style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 36px",
                height: "60px",
                flexShrink: 0,
            }}
        >
            <img
                src={college.logoUrl}
                alt={college.name}
                style={{
                    height: "36px",
                    width: "auto",
                    maxWidth: "110px",
                    objectFit: "contain",
                    filter: "brightness(0) invert(1)",
                    opacity: 0.7,
                    userSelect: "none",
                    pointerEvents: "none",
                    background: "none",
                }}
                onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentNode.innerHTML = `<span style="color:#888;font-size:13px;font-family:sans-serif;font-weight:700;">${college.name}</span>`;
                }}
            />
        </div>
    );
}

function MarqueeRow({ items, direction = "left", speed = 30 }) {
    // Same outer wrapper pattern as TestimonialsSection ScrollTrack:
    // max-w-[1400px] mx-auto, paddingLeft/Right: 48px, fade mask on both sides
    const repeated = [...items, ...items, ...items, ...items];
    const totalWidth = items.length * 182;
    const duration = totalWidth / speed;
    const animName = `marquee_${direction}_${items[0].id}`;

    return (
        <div
            style={{
                maxWidth: "1400px",
                margin: "0 auto",
                overflow: "hidden",
                position: "relative",
                paddingLeft: "48px",
                paddingRight: "48px",
                boxSizing: "border-box",
                WebkitMaskImage: "linear-gradient(to right, transparent 0px, black 48px, black calc(100% - 48px), transparent 100%)",
                maskImage: "linear-gradient(to right, transparent 0px, black 48px, black calc(100% - 48px), transparent 100%)",
            }}
        >
            <div
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    animation: `${animName} ${duration}s linear infinite`,
                    willChange: "transform",
                }}
            >
                {repeated.map((college, i) => (
                    <LogoTile key={`${college.id}-${i}`} college={college} />
                ))}
            </div>
            <style>{`
        @keyframes ${animName} {
          from { transform: translateX(${direction === "right" ? `-${totalWidth}px` : "0"}); }
          to   { transform: translateX(${direction === "right" ? "0" : `-${totalWidth}px`}); }
        }
      `}</style>
        </div>
    );
}

function AnimatedBadge({ text }) {
    return (
        <>
            <style>{`
        @keyframes rotateBorder {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .badge-wrap {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 1.5px;
          overflow: hidden;
        }
        .badge-wrap::before {
          content: '';
          position: absolute;
          inset: -60px;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 75deg,
            #f97316cc 88deg,
            #fbbf24 95deg,
            #f97316cc 102deg,
            transparent 115deg,
            transparent 360deg
          );
          animation: rotateBorder 3s linear infinite;
        }
        .badge-inner {
          position: relative;
          z-index: 1;
          background: #111;
          border-radius: 999px;
          padding: 6px 20px;
          display: inline-flex;
          align-items: center;
        }
        .badge-text {
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: #fb923c;
          font-family: 'Segoe UI', sans-serif;
          white-space: nowrap;
          text-shadow: 0 0 10px #f9731644;
        }
      `}</style>
            <div className="badge-wrap">
                <div className="badge-inner">
                    <span className="badge-text">{text}</span>
                </div>
            </div>
        </>
    );
}

export default function CollegeLogoSection() {
    // ── Same 48px left-padding and max-w-[1400px] as CoachSection & TestimonialsSection ──
    const SIDE_PADDING = "48px";

    return (
        <section
            style={{
                background: "#0a0a0a",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                justifyContent: "center",
                padding: `80px 0`,
                overflow: "hidden",
                boxSizing: "border-box",
                width: "100%",
            }}
        >
            {/* ── Header block: matching structure to align properly ── */}
            <div
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    width: "100%",
                    padding: `0 ${SIDE_PADDING}`,
                    boxSizing: "border-box",
                    marginBottom: "48px",
                    textAlign: "left", // Ensure it perfectly matches other section headings
                }}
            >
                <h2
                    style={{
                        fontSize: "clamp(28px, 3.8vw, 48px)",
                        fontWeight: 800,
                        color: "#ffffff",
                        margin: "0 0 18px",
                        lineHeight: 1.1,
                        letterSpacing: "-1.2px",
                        whiteSpace: "nowrap",
                        fontFamily: "'Segoe UI', sans-serif",
                    }}
                >
                    Top Companies By <span style={{ color: "#F97316" }}>Our Students</span>
                </h2>

                <p
                    style={{
                        color: "rgba(255,255,255,0.4)",
                        fontSize: "14.5px",
                        lineHeight: 1.75,
                        margin: "0",
                        fontFamily: "'Segoe UI', sans-serif",
                        maxWidth: "600px",
                    }}
                >
                    Our students have gone on to build careers at some of the world's most renowned organizations. Their success is proof that the skills you gain here open doors to top opportunities across the industry.
                </p>
            </div>

            {/* ── Marquee rows: full section width, same fade+padding as Testimonials ── */}
            <div style={{ width: "100%" }}>
                <MarqueeRow items={row1} direction="left" speed={32} />
                <div style={{ height: "20px" }} />
                <MarqueeRow items={row2} direction="right" speed={26} />
            </div>
        </section>
    );
}
