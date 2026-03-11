import React from 'react';
import './about-section.css';
import figmaDev from '../../assets/Figma Developer.jpeg';
import frontendDev from '../../assets/FrontendDeveloper.jpeg';
import teamLeader from '../../assets/TeamLeader1.jpeg';

const TEAM_MEMBERS = [
    { name: 'Figma Developer', badge: 'Present', img: figmaDev },
    { name: 'Frontend Developer', badge: 'Present', img: frontendDev },
    { name: 'Team Leader', badge: 'Present', img: teamLeader },
];

const ALUMNI = [
    { name: 'Alumni 1', badge: 'Alumni', img: 'https://via.placeholder.com/150' },
    { name: 'Alumni 2', badge: 'Alumni', img: 'https://via.placeholder.com/150' },
    { name: 'Alumni 3', badge: 'Alumni', img: 'https://via.placeholder.com/150' },
    { name: 'Alumni 4', badge: 'Alumni', img: 'https://via.placeholder.com/150' },
    { name: 'Alumni 5', badge: 'Alumni', img: 'https://via.placeholder.com/150' },
];

const STATS = [
    { number: '165M', label: 'Youtube Views', sub: 'till date' },
    { number: '13M', label: 'Page Visits', sub: 'monthly' },
    { number: '2.7M', label: 'Sessions', sub: 'per month' },
    { number: '1.3M', label: 'Registered Users', sub: 'and growing' },
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
                    We started back in 2020 with our channel. The idea of building a website came into vision when our sheet on Google Docs crashed stating Too many
                    people are on it.
                    <br />
                    We started on a WordPress website in 2022 and shifted to a custom-made one in 2024.
                </p>
                <p>
                    Our vision is to make learning feel seamless and enjoyable, removing the mugging up factor which you find in most places. We cover DSA, Core Subjects,
                    System Design, and
                    <br />
                    OOPS as of today, and we plan to add much more in the future.
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

            {/* OUR AMAZING TEAM */}
            <section>
                <h2 className="about-section-title">Our Amazing Team</h2>
                <div className="about-team-grid">
                    {TEAM_MEMBERS.map((member, i) => (
                        <div key={i} className="about-member">
                            <div className="about-member-photo">
                                <img src={member.img} alt={member.name} />
                            </div>
                            <div className="about-member-name">{member.name}</div>
                            <div className="about-member-badges">
                                <span className="about-badge about-badge-present">Present</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ALUMNI */}
            <section className="about-alumni-section">
                <h2 className="about-section-title">Our Outstanding Alumni</h2>
                <div className="about-team-grid">
                    {ALUMNI.map((member, i) => (
                        <div key={i} className="about-member">
                            <div className="about-member-photo">
                                <img src={member.img} alt={member.name} />
                            </div>
                            <div className="about-member-name">{member.name}</div>
                            <div className="about-member-badges">
                                <span className="about-badge about-badge-alumni">Alumni</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="about-bottom-gap" />
        </div>
    );
};

export default AboutSection;
