import React from 'react';
import './about-section.css';
const frontendDev = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773218155/frontend-developer_vestnr.jpg';
const figmaDev = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773279097/WhatsApp_Image_2026-03-11_at_11.15.10_2_smq6gb.jpg';
const teamLeader = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773218173/team-leader_zriohu.jpg';
const newTeamMemberImg = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773291270/WhatsApp_Image_2026-03-11_at_10.55.17_1_tzggkr.jpg';
const uma = "https://res.cloudinary.com/djiivo0r7/image/upload/v1773497453/WhatsApp_Image_2026-03-14_at_07.02.08_zoj4jz.jpg"
const praveen = "https://res.cloudinary.com/djiivo0r7/image/upload/v1773512636/WhatsApp_Image_2026-03-14_at_10.42.20_ohapjp.jpg"
const harika = "https://res.cloudinary.com/djiivo0r7/image/upload/v1773303686/WhatsApp_Image_2026-03-11_at_23.53.41_cy7bfa.jpg"

const sadvika = "https://res.cloudinary.com/djiivo0r7/image/upload/v1773299498/WhatsApp_Image_2026-03-11_at_23.49.15_agi7zm.jpg"
const tejaswi = "https://res.cloudinary.com/djiivo0r7/image/upload/v1773342985/WhatsApp_Image_2026-03-12_at_12.15.25_cvzwzh.jpg"
const TEAM_MEMBERS = [
    { name: 'N.Nikshep', img: figmaDev },
    { name: 'K.Sai Charan', img: frontendDev },
    { name: 'M.Balakrishna', img: teamLeader },
    { name: 'K.Yashwanth', img: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773614156/WhatsApp_Image_2026-03-15_at_15.32.40_1_yxkrkw.jpg' },
    { name: 'K.Charan Sai', img: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773613705/IMG_20251106_144857.jpg_2_p9d2dg.jpg' },
    { name: 'P.G. Bhanu Vamsidhar', img: newTeamMemberImg },
    { name: 'K. Uma Shankar', img: uma },
    { name: 'K . Pavan', img: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773614094/WhatsApp_Image_2026-03-15_at_15.32.40_vn0gsp.jpg' },
];

const ALUMNI = [
    { name: 'SK. Arshad Ahmad', badge: 'Student Coordinator', img: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773613508/WhatsApp_Image_2026-03-11_at_23.54.08_ijynkj.jpg' },
    { name: 'E. Tejaswi', badge: 'Student Coordinator', img: tejaswi },
];

const CORE_TEAM = [
    { name: 'B.Tharun', badge: 'Core Team', img: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773613842/IMG_6227.jpg_hzmbyp.jpg' },
    { name: 'K. Sudharshan Reddy', badge: 'Core Team', img: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773613507/WhatsApp_Image_2026-03-11_at_23.55.13_yfoiki.jpg' },
    { name: 'G.Praveen', badge: 'Core Team', img: praveen },
];

const MARKETING_TEAM = [
    { name: 'P. Harshavardhan', badge: 'Marketing Head', img: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773303805/WhatsApp_Image_2026-03-11_at_11.58.06_ctfutj.jpg' },
    { name: 'SK.Luqman', badge: 'Marketing Team', img: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773298518/WhatsApp_Image_2026-03-11_at_23.54.52_rkog46.jpg' },
    { name: 'C.Pavan', badge: 'Marketing Team', img: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773470171/WhatsApp_Image_2026-03-13_at_23.03.23_1_stkvz9.jpg' },
    { name: 'N.Sravani', badge: 'Marketing Team', img: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773298749/IMG_04657.JPG_mu1v4c.jpg' },
    { name: 'M.Pavithra', badge: 'Marketing Team', img: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773298748/IMG_00645.JPG_1_zs5gmk.jpg' },
    { name: 'B.Divya', badge: 'Marketing Team', img: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773298747/IMG_07994.JPG_zy2tc1.jpg' }
];

const HELP_DESK = [
    { name: 'K. Sudharshan Reddy', badge: 'Help Desk Head', img: '/assets/images/team/img11.jpeg' },
    { name: 'S. Sadvika', badge: 'Help Desk Head', img: sadvika },
    { name: 'P.Harika', badge: 'Help Desk Head', img: harika },

    { name: 'C.Meghana', badge: 'Help Desk Team', img: 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773298750/IMG_04656.JPG_vkpkwn.jpg' }
];

const STATS = [
    { number: '15+', label: 'Events Organized', sub: 'so far' },
    { number: '2000+', label: 'Students Participated', sub: 'across branches' },
    { number: '50+', label: 'Colleges', sub: 'involved' },
    { number: '100k+', label: 'Prize Pool', sub: 'distributed' },
];


export const AboutSection = () => {
    return (
        <div className="about-page">
            {/* HEADER */}
            <header className="about-header">
                <span className="about-header-welcome">Welcome to</span>
                <div className="about-logo-wrap">
                    <div className="about-logo-placeholder w-16 h-16" title="Sigmoid logo">
                        <img
                            src="https://res.cloudinary.com/djiivo0r7/image/upload/v1773280067/WhatsApp_Image_2026-03-11_at_18.46.50-removebg-preview_yfupc0.png"
                            alt="Sigmoid Logo"
                            className="w-full h-full object-contain drop-shadow-[0_2px_8px_rgba(255,255,255,0.1)]"
                        />
                    </div>
                    <span className="about-logo-text">Sigmoid</span>
                </div>
            </header>

            {/* INTRO */}
            <section className="about-intro">
                <p>
                    Sigmoid, hosted by the Department of Electronics and Communication Engineering at Sri Venkateswara University College of Engineering (SVUCE), is a premier national-level technical symposium. A legacy of innovation since its inception, Sigmoid has been a beacon for technical brilliance in the Rayalaseema region.
                    <br />
                    It serves as a dynamic platform for students to showcase their technical prowess, innovative thinking, and problem-solving skills, bringing together minds from across the country.
                </p>
                <p>
                    Our vision is to foster a collaborative environment where future engineers can engage in a variety of events ranging from coding challenges to paper presentations. We aim to bridge the gap between academic learning and industry requirements, ensuring holistic development through hands-on workshops and competitive spirit.
                    <br />
                    Join us in celebrating technology, innovation, and excellence at Sigmoid 2K26!
                </p>
            </section>

            {/* IMPACT IN NUMBERS */}
            <section>
                <h2 className="about-section-title">Our Impact in Numbers</h2>
                <div className="about-stats-grid">
                    {STATS.map((stat, i) => (
                        <div key={i} className="about-stat-card">
                            <div className="about-stat-circle">
                                <span className="about-stat-number">{stat.number}</span>
                            </div>
                            <div className="about-stat-label">{stat.label}</div>
                            <div className="about-stat-sub">{stat.sub}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* BRIDGE TO TOMORROW */}
            <div className="flex flex-col items-center text-center my-16 px-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 text-center">
                    The "Bridge to Tomorrow"
                </h2>
                <h3 className="text-xl sm:text-2xl font-bold text-[#ff4d00] mb-6 tracking-wide text-center">
                    Empowering the Next Generation
                </h3>
                <p className="text-[15px] sm:text-[16px] font-semibold text-[#e2e2e2] leading-[1.8] max-w-[1000px] text-center">
                    Sigmoid is more than a date on the calendar; it is a catalyst for professional transformation. Hosted annually by the Department of ECE, SVUCE, this symposium is designed to pull students out of their textbooks and thrust them into the heart of modern engineering challenges. By fostering a culture of high-stakes competition and intellectual exchange, Sigmoid prepares the engineers of today to become the innovators, entrepreneurs, and leaders of a tech-driven global future.
                </p>
            </div>

            {/* TECH AND EDITORS TEAM */}
            <section>
                <h2 className="about-section-title">Tech and Editors Team</h2>
                <div className="about-team-grid">
                    {TEAM_MEMBERS.map((member, i) => (
                        <div key={i} className="about-member">
                            <div className="about-member-photo">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-full object-contain bg-[#0a0a0a]"
                                />
                            </div>
                            <div className="about-member-name">{member.name}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ALUMNI */}
            <section className="about-alumni-section">
                <h2 className="about-section-title">Student Coordinators</h2>
                <div className="about-team-grid">
                    {ALUMNI.map((member, i) => (
                        <div key={i} className="about-member">
                            <div className="about-member-photo">
                                <img src={member.img} alt={member.name} />
                            </div>
                            <div className="about-member-name">{member.name}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CORE TEAM */}
            <section className="about-alumni-section">
                <h2 className="about-section-title">Core Team</h2>
                <div className="about-team-grid">
                    {CORE_TEAM.map((member, i) => (
                        <div key={i} className="about-member">
                            <div className="about-member-photo">
                                <img src={member.img} alt={member.name} />
                            </div>
                            <div className="about-member-name">{member.name}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* MARKETING TEAM */}
            <section className="about-alumni-section">
                <h2 className="about-section-title">Marketing Team</h2>
                <div className="about-team-grid">
                    {MARKETING_TEAM.map((member, i) => (
                        <div key={i} className="about-member">
                            <div className="about-member-photo">
                                <img src={member.img} alt={member.name} />
                            </div>
                            <div className="about-member-name">{member.name}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* HELP DESK & ACCOMMODATION */}
            <section className="about-alumni-section">
                <h2 className="about-section-title">Help Desk & Accommodation Team</h2>
                <div className="about-team-grid">
                    {HELP_DESK.map((member, i) => (
                        <div key={i} className="about-member">
                            <div className="about-member-photo">
                                <img src={member.img} alt={member.name} />
                            </div>
                            <div className="about-member-name">{member.name}</div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="about-bottom-gap" />
        </div>
    );
};

export default AboutSection;
