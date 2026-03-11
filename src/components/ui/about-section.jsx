import React from 'react';
import './about-section.css';
const frontendDev = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773218155/frontend-developer_vestnr.jpg';
const figmaDev = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773218151/Figma_Developer_cl5rfh.jpg';
const teamLeader = 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773218173/team-leader_zriohu.jpg';

const TEAM_MEMBERS = [
    { name: 'N.Nikshep', img: figmaDev },
    { name: 'K.Sai Charan', img: frontendDev },
    { name: 'M.Balakrishna', img: teamLeader },
    { name: 'K.Yashwanth', img: '/assets/images/team/img1.jpeg' },
    { name: 'K.Charan Sai', img: '/assets/images/team/img8.jpeg' },
    { name: 'K. Uma Shankar', img: '/assets/images/team/img4.jpeg' },
    { name: 'K . Pavan', img: '/assets/images/team/img9.jpeg' },
];

const ALUMNI = [
    { name: 'S.K Arshad Ahmed', badge: 'Student Coordinator', img: '/assets/images/team/img6.jpeg' },
    { name: 'E. Tejaswi', badge: 'Student Coordinator', img: '/assets/images/team/img7.jpeg' },
];

const CORE_TEAM = [
    { name: 'B.Tharun', badge: 'Core Team', img: '/assets/images/team/img10.jpeg' },
    { name: 'K. Sudharshan', badge: 'Core Team', img: '/assets/images/team/img11.jpeg' },
];

const MARKETING_TEAM = [
    { name: 'P. Harsha Varsha Vardhan', badge: 'Marketing Head', img: '/assets/images/team/img12.jpeg' },
];

const HELP_DESK = [
    { name: 'K. Sudharshan', badge: 'Help Desk Head', img: '/assets/images/team/img11.jpeg' },
];

const STATS = [
    { number: '15+', label: 'Events Organized', sub: 'so far' },
    { number: '2000+', label: 'Students Participated', sub: 'across branches' },
    { number: '50+', label: 'Colleges', sub: 'involved' },
    { number: '500k+', label: 'Prize Pool', sub: 'distributed' },
];


export const AboutSection = () => {
    return (
        <div className="about-page">
            {/* HEADER */}
            <header className="about-header">
                <span className="about-header-welcome">Welcome to</span>
                <div className="about-logo-wrap">
                    <div className="about-logo-placeholder w-10 h-10" title="Sigmoid logo">
                        <img 
                            src="/assets/images/sigmoid-logo-transparent.png" 
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
                    Sigmoid 2K26, hosted by the Department of Computer Science and Engineering at Sri Venkateswara University College of Engineering (SVUCE), is a premier national-level technical symposium.
                    <br />
                    It serves as a dynamic platform for students to showcase their technical prowess, innovative thinking, and problem-solving skills.
                </p>
                <p>
                    Our vision is to foster a collaborative environment where future engineers can engage in a variety of events ranging from coding challenges to paper presentations. We aim to bridge the gap between academic learning and industry requirements, ensuring a holistic development for all participants.
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

            {/* FREE MATERIALS */}
            <p className="about-free-para">
                Sigmoid consists of all free materials, which can be a good place to start with, but if you're looking for a premium experience with the best study
                experience, our paid model is available.
            </p>

            {/* TECH AND EDITORS TEAM */}
            <section>
                <h2 className="about-section-title">Tech and Editors Team</h2>
                <div className="about-team-grid">
                    {TEAM_MEMBERS.map((member, i) => (
                        <div key={i} className="about-member">
                            <div className="about-member-photo">
                                <img src={member.img} alt={member.name} />
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
                <h2 className="about-section-title">Marketing Head</h2>
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
                <h2 className="about-section-title">Help Desk & Accommodation Head</h2>
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
