// ── DATA ── Replace logoUrl with your actual college logo image paths
const colleges = [
    { id: 1, name: "Logo 1", logoUrl: "https://res.cloudinary.com/djiivo0r7/image/upload/v1773269934/32drfw5z.gwd-removebg-preview_pvs5db.png" },
    { id: 2, name: "AITS Rajampet", logoUrl: "https://res.cloudinary.com/djiivo0r7/image/upload/v1773269936/Annamacharya-Institute-of-Technology-Sciences-Rajampet-removebg-preview_mr4ii0.png" },
    { id: 3, name: "Logo 3", logoUrl: "https://res.cloudinary.com/djiivo0r7/image/upload/v1773269936/ah3gi0eq.feg-removebg-preview_smfnjn.png" },
    { id: 4, name: "Aditya College", logoUrl: "https://res.cloudinary.com/djiivo0r7/image/upload/v1773269936/aditya_coolege-removebg-preview_wgijux.png" },
    { id: 5, name: "ANITS", logoUrl: "https://res.cloudinary.com/djiivo0r7/image/upload/v1773269937/anits-removebg-preview_wmgmat.png" },
    { id: 6, name: "Ashoka Women's Eng", logoUrl: "https://res.cloudinary.com/djiivo0r7/image/upload/v1773269942/ashoka-women-s-engineering-college-kurnool-logo-removebg-preview_slaptc.png" },
    { id: 7, name: "Audi Sankar", logoUrl: "https://res.cloudinary.com/djiivo0r7/image/upload/v1773269943/audi_sankar-removebg-preview_ycenyb.png" },
    { id: 8, name: "Bharath College", logoUrl: "https://res.cloudinary.com/djiivo0r7/image/upload/v1773269944/bharath_college-removebg-preview_kixrek.png" },
    { id: 9, name: "CBIT", logoUrl: "https://res.cloudinary.com/djiivo0r7/image/upload/v1773269948/cbit3-removebg-preview_lvnhsg.png" },
    { id: 10, name: "JNN", logoUrl: "https://res.cloudinary.com/djiivo0r7/image/upload/v1773269949/JNN_Ins_Red_Seal-removebg-preview_zacyqh.png" },
    { id: 11, name: "Logo 11", logoUrl: "https://res.cloudinary.com/djiivo0r7/image/upload/v1773269949/kb4boiol.p21-removebg-preview_oe2kk8.png" },
    { id: 12, name: "Logo 12", logoUrl: "https://res.cloudinary.com/djiivo0r7/image/upload/v1773269950/logo-removebg-preview_b1x5bc.png" },
    { id: 13, name: "Mohan Babu", logoUrl: "https://res.cloudinary.com/djiivo0r7/image/upload/v1773269951/mohn_babu-removebg-preview_rzn8tu.png" },
    { id: 14, name: "MVGR", logoUrl: "https://res.cloudinary.com/djiivo0r7/image/upload/v1773269957/mvgr-removebg-preview_f31sky.png" },
    { id: 15, name: "Padmavathi", logoUrl: "https://res.cloudinary.com/djiivo0r7/image/upload/v1773269958/padmavathi-removebg-preview_xttmyj.png" },
    { id: 16, name: "Parvathan", logoUrl: "https://res.cloudinary.com/djiivo0r7/image/upload/v1773269959/parvarthan_clg-removebg-preview_peni5d.png" },
    { id: 17, name: "SITAMS", logoUrl: "https://res.cloudinary.com/djiivo0r7/image/upload/v1773269960/SITAMS-removebg-preview_uy6z3f.png" },
    { id: 18, name: "Srinagaram", logoUrl: "https://res.cloudinary.com/djiivo0r7/image/upload/v1773269965/srinagaram-removebg-preview_piuydf.png" },
    { id: 19, name: "SVCE", logoUrl: "https://res.cloudinary.com/djiivo0r7/image/upload/v1773269966/svce-removebg-preview_uh1mhu.png" },
    { id: 20, name: "VEMU", logoUrl: "https://res.cloudinary.com/djiivo0r7/image/upload/v1773269966/vemu-removebg-preview_evx8zg.png" },
];

const row1 = [...colleges.slice(0, 10), ...colleges.slice(0, 10)];
const row2 = [...colleges.slice(10), ...colleges.slice(10)];

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
                <div style={{ marginBottom: "16px" }}>
                    <AnimatedBadge text="PARTICIPANTS ACROSS ALL COLLEGES" />
                </div>
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
                    The Ultimate Gathering <span style={{ color: "#F97316" }}>Of Top Colleges</span>
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
                    The brightest college minds gather here to challenge themselves, exchange ideas, and showcase their potential through engaging events and competitions.
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
