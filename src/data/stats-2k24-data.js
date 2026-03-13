// src/data/stats-2k24-data.js

const getInitials = (name) => {
    return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
};

export const collegeStatsData2k24 = [
    {
        id: "2k24-1",
        name: "Narayana Engineering College, Nellore",
        participants: 194,
        logoFallback: getInitials("Narayana Engineering College, Nellore"),
        totalWins: 5,
        techWins: 4,
        nonTechWins: 1,
        events: [
            {
                eventName: "Buoyancy", category: "Non Technical", rank: 1,
                members: [{ name: "Sk. Arshad", isBoy: true }, { name: "P. Srinu", isBoy: true }]
            },
            {
                eventName: "Buoyancy", category: "Non Technical", rank: 2,
                members: [{ name: "B. Hemanth", isBoy: true }] // Assuming from the same college
            },
            {
                eventName: "Brain Teasers", category: "Non Technical", rank: 2,
                members: [{ name: "V. Krupa Vijaya Sri", isBoy: false }, { name: "G. Rama Harshitha", isBoy: false }, { name: "S. Mahitha Chowdary", isBoy: false }]
            },
            {
                eventName: "Technovate", category: "Technical Events", rank: 1,
                members: [{ name: "M. Harshini", isBoy: false }, { name: "Skm. Alfana", isBoy: false }]
            },
            {
                eventName: "Technovate", category: "Technical Events", subCategory: "Chemo-2", rank: 2,
                members: [{ name: "K. K. Thnamayee", isBoy: false }]
            },
            {
                eventName: "Technovate", category: "Technical Events", subCategory: "Chemo-4", rank: 2,
                members: [{ name: "SrivalliPuttur Anupama", isBoy: false }, { name: "Sai Sri Priya Bhavani", isBoy: false }]
            },
            {
                eventName: "Posterize", category: "Technical Events", rank: 1,
                members: [{ name: "Kanumarlapudi Venkata Sai teja", isBoy: true }, { name: "SD. Nawaz", isBoy: true }]
            },
            {
                eventName: "Circuitrix", category: "Technical Events", rank: 1,
                members: [{ name: "CH. Hardhik", isBoy: true }] // Wait, J. Chetana was Annamacharya, Hardhik is Narayana
            },
            {
                eventName: "Quiz Mania", category: "Technical Events", rank: 2,
                members: [{ name: "Skm Alfana", isBoy: false }, { name: "Keerthi", isBoy: false }, { name: "Tharun", isBoy: true }]
            },
            {
                eventName: "Codex", category: "Technical Events", rank: 1,
                members: [{ name: "Thurimela Pravallika", isBoy: false }, { name: "Tangirala V.S.L Naga Jyothi", isBoy: false }]
            }
        ]
    },
    {
        id: "2k24-2",
        name: "SVUCE",
        participants: 0,
        logoFallback: getInitials("SVUCE"),
        totalWins: 3,
        techWins: 2,
        nonTechWins: 1,
        events: [
            {
                eventName: "Dumb Charades", category: "Non Technical", rank: 1,
                members: [{ name: "V. Vinitha", isBoy: false }, { name: "R. Chandu", isBoy: true }, { name: "A. Tejeswar", isBoy: true }, { name: "V. Hema Sai Reddy", isBoy: true }]
            },
            {
                eventName: "Technovate", category: "Technical Events", subCategory: "Chemo-2", rank: 1,
                members: [{ name: "T. Naveen Kumar", isBoy: true }, { name: "R. Venkata VaraPrasad", isBoy: true }]
            },
            {
                eventName: "Avishkaar", category: "Technical Events", rank: "3A",
                members: [{ name: "Gorantla Praveen Kumar", isBoy: true }, { name: "Todati Vishnu Vardhan", isBoy: true }, { name: "Pesala Manoj Reddy", isBoy: true }]
            },
            {
                eventName: "Circuitrix", category: "Technical Events", rank: 2,
                members: [{ name: "K. Yashwanth", isBoy: true }, { name: "V. Rajeswari", isBoy: false }]
            },
            {
                eventName: "Quiz Mania", category: "Technical Events", rank: 1,
                members: [{ name: "Gorantla Praveen Kumar", isBoy: true }, { name: "Kaki Yashwanth", isBoy: true }]
            },
            {
                eventName: "Codex", category: "Technical Events", rank: 2,
                members: [{ name: "Hyndavi Singaraju", isBoy: false }]
            }
        ]
    },
    {
        id: "2k24-3",
        name: "RGM College, Nandhyal",
        participants: 37,
        logoFallback: "RGM",
        totalWins: 2,
        techWins: 1,
        nonTechWins: 1,
        events: [
            {
                eventName: "Brain Teasers", category: "Non Technical", rank: 1,
                winnerName: "P. Krishna Priya", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Posterize", category: "Technical Events", rank: 3,
                winnerName: "T.M.Vikaas", winnerImageUrl: "/assets/images/boy-winner.png"
            },
            {
                eventName: "Avishkaar", category: "Technical Events", rank: 1,
                members: [{ name: "L. Narasimha Reddy", isBoy: true }, { name: "M. Ravimithin", isBoy: true }]
            }
        ]
    },
    {
        id: "2k24-4",
        name: "AITS (Annamacharya Institute)",
        participants: 2,
        logoFallback: "AITS",
        totalWins: 2,
        techWins: 2,
        nonTechWins: 0,
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
        totalWins: 1,
        techWins: 0,
        nonTechWins: 1,
        events: [
            {
                eventName: "Brain Teasers", category: "Non Technical", rank: 1,
                members: [{ name: "M. Ruthika", isBoy: false }, { name: "J. V. Badrinath", isBoy: true }]
            },
            {
                eventName: "Technovate", category: "Technical Events", rank: 2,
                members: [{ name: "C. Siva Praveena", isBoy: false }, { name: "J. Sindhuja", isBoy: false }]
            }
        ]
    },
    {
        id: "2k24-6",
        name: "Sri Venkateswara College of Engineering",
        participants: 15,
        logoFallback: "SVCE",
        totalWins: 1,
        techWins: 0,
        nonTechWins: 1,
        events: [
            {
                eventName: "Pixel Mania", category: "Non Technical", rank: 1,
                winnerName: "Kommadi Yamini chandhrika", winnerImageUrl: "/assets/images/girl-winner.png"
            }
        ]
    },
    {
        id: "2k24-7",
        name: "Siddartha Educational Academy (SEAT)",
        participants: 0,
        logoFallback: "SEAT",
        totalWins: 1,
        techWins: 1,
        nonTechWins: 0,
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
        totalWins: 1,
        techWins: 1,
        nonTechWins: 0,
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
        totalWins: 1,
        techWins: 1,
        nonTechWins: 0,
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
        totalWins: 1,
        techWins: 1,
        nonTechWins: 0,
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
        totalWins: 1, techWins: 0, nonTechWins: 1,
        events: [
            {
                eventName: "Dumb Charades", category: "Non Technical", rank: 2,
                members: [{ name: "K. Amrutha", isBoy: false }, { name: "T. Durga", isBoy: false }, { name: "K. Chaitanya", isBoy: true }, { name: "S. Nowziya", isBoy: false }]
            },
            {
                eventName: "Posterize", category: "Technical Events", rank: 4, // Might not render rank 4, but let's include
                members: [{ name: "K. Chaitanya", isBoy: true }, { name: "S. Nowziya", isBoy: false }]
            }
        ]
    },
    {
        id: "2k24-12",
        name: "Siddharth Institute of Engineering & Tech, Puttur",
        participants: 4,
        logoFallback: "SIET",
        totalWins: 0, techWins: 0, nonTechWins: 0,
        events: [
            {
                eventName: "Buoyancy", category: "Non Technical", rank: 2,
                winnerName: "U. Nikhitha", winnerImageUrl: "/assets/images/girl-winner.png"
            },
            {
                eventName: "Avishkaar", category: "Technical Events", rank: 4,
                members: [{ name: "Kota Ananda", isBoy: true }, { name: "M. Akash", isBoy: true }, { name: "Gude Ankitha", isBoy: false }, { name: "Konduru Anusha", isBoy: false }]
            }
        ]
    },
    {
        id: "2k24-13",
        name: "Audisankara Institute of Science and Technology",
        participants: 2,
        logoFallback: "AIST",
        totalWins: 0, techWins: 0, nonTechWins: 0,
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
        totalWins: 0, techWins: 0, nonTechWins: 0,
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
        totalWins: 0, techWins: 0, nonTechWins: 0,
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
        totalWins: 0,
        techWins: 0,
        nonTechWins: 0,
        events: [
            {
                eventName: "Avishkaar", category: "Technical Events", rank: "3B",
                members: [{ name: "Pulipati Lokesh Varma", isBoy: true }, { name: "Shaik Sohel", isBoy: true }]
            },
            {
                eventName: "Quiz Mania", category: "Technical Events", rank: 2,
                winnerName: "Y. Sivasai", winnerImageUrl: "/assets/images/boy-winner.png"
            }
        ]
    }
];

export const sortedCollegeStatsData2k24 = [...collegeStatsData2k24].sort((a, b) => {
    if (b.totalWins !== a.totalWins) {
        return b.totalWins - a.totalWins;
    }
    return b.participants - a.participants;
});
