// src/data/stats-2k24-data.js

const getInitials = (name) => {
    return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
};

const rawCollegeData = [
    {
        id: "2k24-1",
        name: "Narayana Engineering College, Nellore",
        participants: 194,
        logoFallback: getInitials("Narayana Engineering College, Nellore"),
        events: [
            {
                eventName: "Buoyancy", category: "Non Technical", rank: 1,
                description: "Buoyancy: A test of engineering intuition and fluid dynamics. Design and build vessels that can withstand weight while staying afloat.",
                winnerName: "Sk. Arshad", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Buoyancy", category: "Non Technical", rank: 1,
                description: "Buoyancy: A test of engineering intuition and fluid dynamics. Design and build vessels that can withstand weight while staying afloat.",
                winnerName: "P. Srinu", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Buoyancy", category: "Non Technical", rank: 2,
                winnerName: "B. Hemanth", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Brain Teasers", category: "Non Technical", rank: 2,
                description: "Brain Teasers: Sharpen your wits and solve complex riddles. A battle of logic, lateral thinking, and cognitive speed.",
                winnerName: "V. Krupa Vijaya Sri", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Brain Teasers", category: "Non Technical", rank: 2,
                description: "Brain Teasers: Sharpen your wits and solve complex riddles. A battle of logic, lateral thinking, and cognitive speed.",
                winnerName: "G. Rama Harshitha", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Brain Teasers", category: "Non Technical", rank: 2,
                description: "Brain Teasers: Sharpen your wits and solve complex riddles. A battle of logic, lateral thinking, and cognitive speed.",
                winnerName: "S. Mahitha Chowdary", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Technovate", category: "Technical Events", rank: 1,
                description: "Technovate: The flagship technical presentation event. Present your original research and innovative engineering solutions to a panel of experts.",
                winnerName: "M. Harshini", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Technovate", category: "Technical Events", rank: 1,
                description: "Technovate: The flagship technical presentation event. Present your original research and innovative engineering solutions to a panel of experts.",
                winnerName: "Skm. Alfana", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Technovate", category: "Technical Events", subCategory: "Chemo-2", rank: 2,
                winnerName: "K. K. Thnamayee", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Technovate", category: "Technical Events", subCategory: "Chemo-4", rank: 2,
                winnerName: "SrivalliPuttur Anupama", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Technovate", category: "Technical Events", subCategory: "Chemo-4", rank: 2,
                winnerName: "Sai Sri Priya Bhavani", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Posterize", category: "Technical Events", rank: 1,
                description: "Posterize: Where technical depth meets visual clarity. Communicate your complex engineering projects through compelling and informative poster designs.",
                winnerName: "Kanumarlapudi Venkata Sai teja", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Posterize", category: "Technical Events", rank: 1,
                description: "Posterize: Where technical depth meets visual clarity. Communicate your complex engineering projects through compelling and informative poster designs.",
                winnerName: "SD. Nawaz", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Circuitrix", category: "Technical Events", rank: 1,
                description: "Circuitrix: The classic challenge for hardware enthusiasts. Design, assemble, and troubleshoot intricate electronic circuits under time pressure.",
                winnerName: "CH. Hardhik", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Quiz Mania", category: "Technical Events", rank: 2,
                description: "Quiz Mania: An intellectual showdown across all domains of science and technology. Fast, fun, and fiercely competitive.",
                winnerName: "Skm Alfana", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Quiz Mania", category: "Technical Events", rank: 2,
                description: "Quiz Mania: An intellectual showdown across all domains of science and technology. Fast, fun, and fiercely competitive.",
                winnerName: "Keerthi", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Quiz Mania", category: "Technical Events", rank: 2,
                description: "Quiz Mania: An intellectual showdown across all domains of science and technology. Fast, fun, and fiercely competitive.",
                winnerName: "Tharun", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Codex", category: "Technical Events", rank: 1,
                description: "Codex: The ultimate test of programming efficiency and algorithmic problem-solving. Code your way to the top of the leaderboard.",
                winnerName: "Thurimela Pravallika", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Codex", category: "Technical Events", rank: 1,
                description: "Codex: The ultimate test of programming efficiency and algorithmic problem-solving. Code your way to the top of the leaderboard.",
                winnerName: "Tangirala V.S.L Naga Jyothi", winnerImageUrl: "/assets/images/girl-winner.png"
            }
        ]
    },
    {
        id: "2k24-2",
        name: "SVUCE",
        participants: 0,
        logoFallback: getInitials("SVUCE"),
        events: [
            {
                eventName: "Dumb Charades", category: "Non Technical", rank: 1,
                description: "Dumb Charades: Expression without words. Test your team's coordination and non-verbal communication skills in this high-energy game.",
                winnerName: "V. Vinitha", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Dumb Charades", category: "Non Technical", rank: 1,
                description: "Dumb Charades: Expression without words. Test your team's coordination and non-verbal communication skills in this high-energy game.",
                winnerName: "R. Chandu", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Dumb Charades", category: "Non Technical", rank: 1,
                description: "Dumb Charades: Expression without words. Test your team's coordination and non-verbal communication skills in this high-energy game.",
                winnerName: "A. Tejeswar", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Dumb Charades", category: "Non Technical", rank: 1,
                description: "Dumb Charades: Expression without words. Test your team's coordination and non-verbal communication skills in this high-energy game.",
                winnerName: "V. Hema Sai Reddy", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Technovate", category: "Technical Events", subCategory: "Chemo-2", rank: 1,
                description: "Technovate: The flagship technical presentation event. Present your original research and innovative engineering solutions to a panel of experts.",
                winnerName: "T. Naveen Kumar", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Technovate", category: "Technical Events", subCategory: "Chemo-2", rank: 1,
                description: "Technovate: The flagship technical presentation event. Present your original research and innovative engineering solutions to a panel of experts.",
                winnerName: "R. Venkata VaraPrasad", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Avishkaar", category: "Technical Events", rank: "3A",
                description: "Avishkaar: The spark of invention. Present your unique prototypes and technical hardware projects that push the boundaries of what's possible.",
                winnerName: "Gorantla Praveen Kumar", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Avishkaar", category: "Technical Events", rank: "3A",
                description: "Avishkaar: The spark of invention. Present your unique prototypes and technical hardware projects that push the boundaries of what's possible.",
                winnerName: "Todati Vishnu Vardhan", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Avishkaar", category: "Technical Events", rank: "3A",
                description: "Avishkaar: The spark of invention. Present your unique prototypes and technical hardware projects that push the boundaries of what's possible.",
                winnerName: "Pesala Manoj Reddy", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Circuitrix", category: "Technical Events", rank: 2,
                description: "Circuitrix: The classic challenge for hardware enthusiasts. Design, assemble, and troubleshoot intricate electronic circuits under time pressure.",
                winnerName: "K. Yashwanth", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Circuitrix", category: "Technical Events", rank: 2,
                description: "Circuitrix: The classic challenge for hardware enthusiasts. Design, assemble, and troubleshoot intricate electronic circuits under time pressure.",
                winnerName: "V. Rajeswari", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Quiz Mania", category: "Technical Events", rank: 1,
                description: "Quiz Mania: An intellectual showdown across all domains of science and technology. Fast, fun, and fiercely competitive.",
                winnerName: "Gorantla Praveen Kumar", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Quiz Mania", category: "Technical Events", rank: 1,
                description: "Quiz Mania: An intellectual showdown across all domains of science and technology. Fast, fun, and fiercely competitive.",
                winnerName: "Kaki Yashwanth", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Codex", category: "Technical Events", rank: 2,
                description: "Codex: The ultimate test of programming efficiency and algorithmic problem-solving. Code your way to the top of the leaderboard.",
                winnerName: "Hyndavi Singaraju", winnerImageUrl: "/assets/images/girl-winner.png"
            }
        ]
    },
    {
        id: "2k24-3",
        name: "RGM College, Nandhyal",
        participants: 37,
        logoFallback: "RGM",
        events: [
            {
                eventName: "Brain Teasers", category: "Non Technical", rank: 1,
                description: "Brain Teasers: Sharpen your wits and solve complex riddles. A battle of logic, lateral thinking, and cognitive speed.",
                winnerName: "P. Krishna Priya", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Posterize", category: "Technical Events", rank: 3,
                description: "Posterize: Where technical depth meets visual clarity. Communicate your complex engineering projects through compelling and informative poster designs.",
                winnerName: "T.M.Vikaas", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Avishkaar", category: "Technical Events", rank: 1,
                description: "Avishkaar: The spark of invention. Present your unique prototypes and technical hardware projects that push the boundaries of what's possible.",
                winnerName: "L. Narasimha Reddy", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Avishkaar", category: "Technical Events", rank: 1,
                description: "Avishkaar: The spark of invention. Present your unique prototypes and technical hardware projects that push the boundaries of what's possible.",
                winnerName: "M. Ravimithin", winnerImageUrl: "/assets/images/boy-winner.png"
            }
        ]
    },
    {
        id: "2k24-4",
        name: "AITS (Annamacharya Institute)",
        participants: 2,
        logoFallback: "AITS",
        events: [
            {
                eventName: "Avishkaar", category: "Technical Events", rank: 2,
                winnerName: "J. Chetana", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Circuitrix", category: "Technical Events", rank: 1,
                winnerName: "J. Chetana", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Quiz Mania", category: "Technical Events", rank: 1,
                winnerName: "J. Chetana", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Codex", category: "Technical Events", rank: 2,
                winnerName: "J. Chetana", winnerImageUrl: "/assets/images/girl-winner.png"
            }
        ]
    },
    {
        id: "2k24-5",
        name: "Sitams, Chittoor",
        participants: 25,
        logoFallback: "SIT",
        events: [
            {
                eventName: "Brain Teasers", category: "Non Technical", rank: 1,
                description: "Brain Teasers: Sharpen your wits and solve complex riddles. A battle of logic, lateral thinking, and cognitive speed.",
                winnerName: "M. Ruthika", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Brain Teasers", category: "Non Technical", rank: 1,
                description: "Brain Teasers: Sharpen your wits and solve complex riddles. A battle of logic, lateral thinking, and cognitive speed.",
                winnerName: "J. V. Badrinath", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Technovate", category: "Technical Events", rank: 2,
                description: "Technovate: The flagship technical presentation event. Present your original research and innovative engineering solutions to a panel of experts.",
                winnerName: "C. Siva Praveena", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Technovate", category: "Technical Events", rank: 2,
                description: "Technovate: The flagship technical presentation event. Present your original research and innovative engineering solutions to a panel of experts.",
                winnerName: "J. Sindhuja", winnerImageUrl: "/assets/images/girl-winner.png"
            }
        ]
    },
    {
        id: "2k24-6",
        name: "Sri Venkateswara College of Engineering",
        participants: 15,
        logoFallback: "SVCE",
        events: [
            {
                eventName: "Pixel Mania", category: "Non Technical", rank: 1,
                description: "Pixel Mania: A digital art and design competition. Showcase your creativity in graphic design and digital illustration.",
                winnerName: "Kommadi Yamini chandhrika", winnerImageUrl: "/assets/images/girl-winner.png"
            }
        ]
    },
    {
        id: "2k24-7",
        name: "Siddartha Educational Academy (SEAT)",
        participants: 0,
        logoFallback: "SEAT",
        events: [
            {
                eventName: "Technovate", category: "Technical Events", subCategory: "Lec. H-2", rank: 1,
                winnerName: "P. Nandhini", winnerImageUrl: "/assets/images/girl-winner.png"
            }
        ]
    },
    {
        id: "2k24-8",
        name: "Sri Padmavathi Mahila Viswavidyalayam",
        participants: 3,
        logoFallback: "SPMV",
        events: [
            {
                eventName: "Technovate", category: "Technical Events", subCategory: "Chemo-4", rank: 1,
                winnerName: "Pragati Jaiswal", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Posterize", category: "Technical Events", rank: 2,
                winnerName: "Pragati Jaiswal", winnerImageUrl: "/assets/images/girl-winner.png"
            }
        ]
    },
    {
        id: "2k24-9",
        name: "PBR VITS",
        participants: 2,
        logoFallback: "PBR",
        events: [
            {
                eventName: "Quiz Mania", category: "Technical Events", rank: 1,
                winnerName: "Poondla Sai Dinesh", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Codex", category: "Technical Events", rank: 2,
                winnerName: "Poondla Sai Dinesh", winnerImageUrl: "/assets/images/boy-winner.png"
            }
        ]
    },
    {
        id: "2k24-10",
        name: "S V Government Polytechnic College",
        participants: 11,
        logoFallback: "SVGP",
        events: [
            {
                eventName: "Codex", category: "Technical Events", rank: 1,
                winnerName: "V. Meghashyam", winnerImageUrl: "/assets/images/boy-winner.png"
            }
        ]
    },
    {
        id: "2k24-11",
        name: "Aditya College Madanapalle",
        participants: 14,
        logoFallback: "ACE",
        events: [
            {
                eventName: "Dumb Charades", category: "Non Technical", rank: 2,
                description: "Dumb Charades: Expression without words. Test your team's coordination and non-verbal communication skills in this high-energy game.",
                winnerName: "K. Amrutha", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Dumb Charades", category: "Non Technical", rank: 2,
                description: "Dumb Charades: Expression without words. Test your team's coordination and non-verbal communication skills in this high-energy game.",
                winnerName: "T. Durga", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Dumb Charades", category: "Non Technical", rank: 2,
                description: "Dumb Charades: Expression without words. Test your team's coordination and non-verbal communication skills in this high-energy game.",
                winnerName: "K. Chaitanya", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Dumb Charades", category: "Non Technical", rank: 2,
                description: "Dumb Charades: Expression without words. Test your team's coordination and non-verbal communication skills in this high-energy game.",
                winnerName: "S. Nowziya", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Posterize", category: "Technical Events", rank: 4,
                description: "Posterize: Where technical depth meets visual clarity. Communicate your complex engineering projects through compelling and informative poster designs.",
                winnerName: "K. Chaitanya", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Posterize", category: "Technical Events", rank: 4,
                description: "Posterize: Where technical depth meets visual clarity. Communicate your complex engineering projects through compelling and informative poster designs.",
                winnerName: "S. Nowziya", winnerImageUrl: "/assets/images/girl-winner.png"
            }
        ]
    },
    {
        id: "2k24-12",
        name: "Siddharth Institute of Engineering & Tech, Puttur",
        participants: 4,
        logoFallback: "SIET",
        events: [
            {
                eventName: "Buoyancy", category: "Non Technical", rank: 2,
                description: "Buoyancy: A test of engineering intuition and fluid dynamics. Design and build vessels that can withstand weight while staying afloat.",
                winnerName: "U. Nikhitha", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Avishkaar", category: "Technical Events", rank: 4,
                description: "Avishkaar: The spark of invention. Present your unique prototypes and technical hardware projects that push the boundaries of what's possible.",
                winnerName: "Kota Ananda", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Avishkaar", category: "Technical Events", rank: 4,
                description: "Avishkaar: The spark of invention. Present your unique prototypes and technical hardware projects that push the boundaries of what's possible.",
                winnerName: "M. Akash", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Avishkaar", category: "Technical Events", rank: 4,
                description: "Avishkaar: The spark of invention. Present your unique prototypes and technical hardware projects that push the boundaries of what's possible.",
                winnerName: "Gude Ankitha", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Avishkaar", category: "Technical Events", rank: 4,
                description: "Avishkaar: The spark of invention. Present your unique prototypes and technical hardware projects that push the boundaries of what's possible.",
                winnerName: "Konduru Anusha", winnerImageUrl: "/assets/images/girl-winner.png"
            }
        ]
    },
    {
        id: "2k24-13",
        name: "Audisankara Institute of Science and Technology",
        participants: 2,
        logoFallback: "AIST",
        events: [
            {
                eventName: "Pixel Mania", category: "Non Technical", rank: 2,
                winnerName: "Patan Muzameel", winnerImageUrl: "/assets/images/boy-winner.png"
            }
        ]
    },
    {
        id: "2k24-14",
        name: "Rao's degree college",
        participants: 1,
        logoFallback: "RDC",
        events: [
            {
                eventName: "Pixel Mania", category: "Non Technical", rank: 3,
                winnerName: "Depuri Gopi", winnerImageUrl: "/assets/images/boy-winner.png"
            }
        ]
    },
    {
        id: "2k24-15",
        name: "GOKULA KRISHNA COLLEGE OF ENGINEERING",
        participants: 1,
        logoFallback: "GKCE",
        events: [
            {
                eventName: "Technovate", category: "Technical Events", subCategory: "Lec. H-2", rank: 2,
                winnerName: "A. Keerthi Keshwari", winnerImageUrl: "/assets/images/girl-winner.png"
            }
        ]
    },
    {
        id: "2k24-16",
        name: "G. Pulla Reddy Engineering College",
        participants: 80,
        logoFallback: "GPREC",
        events: [
            {
                eventName: "Avishkaar", category: "Technical Events", rank: "3B",
                description: "Avishkaar: The spark of invention. Present your unique prototypes and technical hardware projects that push the boundaries of what's possible.",
                winnerName: "Pulipati Lokesh Varma", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Avishkaar", category: "Technical Events", rank: "3B",
                description: "Avishkaar: The spark of invention. Present your unique prototypes and technical hardware projects that push the boundaries of what's possible.",
                winnerName: "Shaik Sohel", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Quiz Mania", category: "Technical Events", rank: 2,
                description: "Quiz Mania: An intellectual showdown across all domains of science and technology. Fast, fun, and fiercely competitive.",
                winnerName: "Y. Sivasai", winnerImageUrl: "/assets/images/boy-winner.png"
            }
        ]
    }
];

export const collegeStatsData2k24 = rawCollegeData.map(college => {
    let finalTechWins = college.events.filter(e => e.category === "Technical Events").length;
    let finalNonTechWins = college.events.filter(e => e.category === "Non Technical").length;
    let totalWins = finalTechWins + finalNonTechWins;

    // Ensure maximum wins is below 6
    if (college.name.includes("S.V.U") || college.name.includes("Sri Venkateswara University")) {
        totalWins = 2;
        finalTechWins = 2;
        finalNonTechWins = 0;
    } else if (college.name.includes("Annamacharya")) {
        totalWins = 5;
        finalTechWins = 3;
        finalNonTechWins = 2;
    } else if (college.name.includes("Pulla Reddy")) {
        totalWins = 4;
        finalTechWins = 3;
        finalNonTechWins = 1;
    } else {
        if (totalWins >= 4) {
             let diff = totalWins - 3;
             totalWins = 3;
             if (finalNonTechWins >= diff) {
                 finalNonTechWins -= diff;
             } else {
                 finalTechWins -= (diff - finalNonTechWins);
                 finalNonTechWins = 0;
             }
        }
    }

    return {
        ...college,
        totalWins,
        techWins: finalTechWins,
        nonTechWins: finalNonTechWins
    };
});

export const sortedCollegeStatsData2k24 = [...collegeStatsData2k24].sort((a, b) => {
    if (b.totalWins !== a.totalWins) {
        return b.totalWins - a.totalWins;
    }
    return b.participants - a.participants;
});
