// src/data/stats-data.js

// Using the provided actual list of participating institutions
const participantData = [
    { name: "Adithya College of Engineering, Madanapalle", participants: 14 },
    { name: "Anil Neerukonda institute of technology and sciences", participants: 1 },
    { name: "Annamacharaya institute of technology and sciences", participants: 2 },
    { name: "Ashoka women's engineering college, Kurnool", participants: 1 },
    { name: "Chaitanya bharathi institute of technology", participants: 1 },
    { name: "G Pullareddy engineering college", participants: 80 },
    { name: "Bharath institute higher education and research", participants: 1 },
    { name: "Geethanjali institute of science and technology", participants: 63 },
    { name: "SV government polytechnic", participants: 11 },
    { name: "government polytechnic college,tadipatri", participants: 5 },
    { name: "Gokulakrishna college of engineering", participants: 1 },
    { name: "jntu pulivendula", participants: 2 },
    { name: "jnn institute of engineering", participants: 1 },
    { name: "mohanbabu university", participants: 3 },
    { name: "narayana college,gudur", participants: 160 },
    { name: "mvgr engineering college", participants: 2 },
    { name: "narayana college,nellore", participants: 194 },
    { name: "rgm nandyala", participants: 37 },
    { name: "padmavathi polytechnic college", participants: 65 },
    { name: "Padmavathi mahila viswa vidhyalayam", participants: 3 },
    { name: "Siddhartha institute of technology, Puttur", participants: 4 },
    { name: "VEMU institute of technology", participants: 2 },
    { name: "rmk engineering college", participants: 1 },
    { name: "sitams college,chittoor", participants: 25 },
    { name: "svce,tirupati", participants: 4 },
    { name: "S.V.U College of Engineering", participants: 15 },
    { name: "Sree Venkateswara College of Engineering, Nellore", participants: 8 },
    { name: "pbr vits kavali", participants: 2 },
    { name: "Audishankara institute of science and technology, Gudur", participants: 2 },
    { name: "Indian institute of information and technology", participants: 1 },
    { name: "rao's degree college", participants: 1 }
];

// Helper to get dummy logos
const getInitials = (name) => {
    return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
};

// Generating mock win records (to be replaced by the client later with real WIN data).
// We assign high mock wins to the top 5 participants to demonstrate the UI thoroughly, and trailing wins to others.
export const collegeStatsData = participantData.map((college, index) => {

    let techWins = 0;
    let nonTechWins = 0;
    let events = [];

    // ─── MANUAL WIN INJECTIONS (from Images) ───

    // 1. CBIT Proddatur
    if (college.name === "Chaitanya bharathi institute of technology") {
        events.push({
            id: `evt-t-codeverse-winner-1`,
            eventName: "Codeverse",
            category: "Technical Events",
            rank: 1,
            teamName: "Tech Titans",
            project: "Fitness & Wellness",
            description: "Codeverse: A battleground for software innovators. Transform vision into code and build robust applications that solve real-world problems.",
            winnerName: "C. Thanuz Kumar",
            phone: "7989354859",
            collegeDetail: "CBIT, Produttur",
            winnerImageUrl: "/assets/images/boy-winner.png"
        });

        // CODEX (Winners)
        events.push({
            id: `evt-t-codex-winner-cbit`,
            eventName: "Codex",
            category: "Technical Events",
            rank: 1,
            winnerName: "C. Thanuz Kumar",
            winnerImageUrl: "/assets/images/boy-winner.png",
            description: "Codex: The ultimate battle of algorithms. Solve complex problems under pressure and showcase your competitive programming skills."
        });
    }

    // 1.5. Aditya College of Engineering, Madanapalle
    else if (college.name === "Adithya College of Engineering, Madanapalle") {
        events.push({
            id: `evt-t-posterize-winner-1`,
            eventName: "Posterize",
            category: "Technical Events",
            rank: 1,
            description: "Posterize: Visualize your technical expertise. Create innovative and data-driven posters to summarize complex engineering concepts.",
            members: [
                { name: "P. Anjum rehabar", isBoy: false },
                { name: "N.S. Iffath muskan", isBoy: false }
            ]
        });
    }

    // 2. SVU College of Engineering (CSE & ECE)
    else if (college.name === "S.V.U College of Engineering") {
        // CODEVERSE WINNERS (Split Tech Titans)
        events.push({
            id: `evt-t-codeverse-winner-2`,
            eventName: "Codeverse",
            category: "Technical Events",
            rank: 1,
            teamName: "Tech Titans",
            project: "Fitness & Wellness",
            description: "Codeverse: A battleground for software innovators. Transform vision into code and build robust applications that solve real-world problems.",
            winnerName: "K. Sri Chandana",
            phone: "9347521787",
            collegeDetail: "SV University, Tirupati (CSE)",
            winnerImageUrl: "/assets/images/girl-winner.png"
        });
        events.push({
            id: `evt-t-codeverse-winner-3`,
            eventName: "Codeverse",
            category: "Technical Events",
            rank: 1,
            teamName: "Tech Titans",
            project: "Fitness & Wellness",
            description: "Codeverse: A battleground for software innovators. Transform vision into code and build robust applications that solve real-world problems.",
            winnerName: "Har Sainath",
            phone: "6304245124",
            collegeDetail: "SV University, Tirupati (ECE)",
            winnerImageUrl: "/assets/images/boy-winner.png"
        });

        // CODEX (Winners) - Shared from Image
        events.push({
            id: `evt-t-codex-winner-svu-1`,
            eventName: "Codex",
            category: "Technical Events",
            rank: 1,
            winnerName: "K. Sri Chandana",
            winnerImageUrl: "/assets/images/girl-winner.png"
        });
        events.push({
            id: `evt-t-codex-winner-svu-2`,
            eventName: "Codex",
            category: "Technical Events",
            rank: 1,
            winnerName: "Har Sainath",
            winnerImageUrl: "/assets/images/boy-winner.png"
        });

        // CODEVERSE RUNNERS (Split Byte Blazers)
        events.push({
            id: `evt-t-codeverse-runner-1`,
            eventName: "Codeverse",
            category: "Technical Events",
            rank: 2,
            teamName: "Byte Blazers",
            project: "Health care & web interface",
            description: "Codeverse: Where coding meets creativity. A technical platform for developers to showcase their programming excellence.",
            winnerName: "Subramanyam",
            phone: "9391361665",
            collegeDetail: "SV University, Tirupati",
            winnerImageUrl: "/assets/images/boy-winner.png"
        });
        events.push({
            id: `evt-t-codeverse-runner-2`,
            eventName: "Codeverse",
            category: "Technical Events",
            rank: 2,
            teamName: "Byte Blazers",
            project: "Health care & web interface",
            description: "Codeverse: Where coding meets creativity. A technical platform for developers to showcase their programming excellence.",
            winnerName: "Prabhas",
            phone: "9490210698",
            collegeDetail: "SV University, Tirupati",
            winnerImageUrl: "/assets/images/boy-winner.png"
        });

        // CODEX (Runners) - Shared from Image
        events.push({
            id: `evt-t-codex-runner-svu-1`,
            eventName: "Codex",
            category: "Technical Events",
            rank: 2,
            winnerName: "Subramanyam",
            winnerImageUrl: "/assets/images/boy-winner.png"
        });
        events.push({
            id: `evt-t-codex-runner-svu-2`,
            eventName: "Codex",
            category: "Technical Events",
            rank: 2,
            winnerName: "Prabhas",
            winnerImageUrl: "/assets/images/boy-winner.png"
        });

        // CIRCUITRIX (Winners)
        techWins += 1; // Grouped into one card
        events.push({
            id: `evt-t-circuitrix-winner-svu`,
            eventName: "Circuitrix",
            category: "Technical Events",
            rank: 1,
            description: "Circuitrix: The ultimate hardware challenge where precision meets logic. Design, debug, and optimize complex electronic circuits to prove your engineering mettle.",
            members: [
                { name: "Chenga Venkata Ganesh", isBoy: true },
                { name: "Meesala Vajaswani", isBoy: true }
            ]
        });

        // CLICK FEST (Rank 2)
        nonTechWins += 1;
        events.push({
            id: `evt-nt-clickfest-runner-1`,
            eventName: "Click Fest",
            category: "Non Technical",
            rank: 2,
            description: "Click Fest: Capture the essence of life through your lens. A platform for photographers and videographers to showcase their visual storytelling.",
            winnerName: "Tharigopula Gowtham Sree",
            winnerImageUrl: "/assets/images/boy-winner.png"
        });

        // TECHFUSION (Technovate)
        // Chemo-2
        techWins += 1;
        events.push({
            id: `evt-t-techfusion-winner-1`,
            eventName: "TechFusion",
            category: "Technical Events",
            subCategory: "chemo-2",
            rank: 1,
            description: "TechFusion: Where diverse technical domains unite. Explore the intersection of different engineering branches and solve multidisciplinary challenges.",
            winnerName: "B-Vinusha",
            winnerImageUrl: "/assets/images/girl-winner.png"
        });
        techWins += 1;
        events.push({
            id: `evt-t-techfusion-runner-1`,
            eventName: "TechFusion",
            category: "Technical Events",
            subCategory: "chemo-2",
            rank: 2,
            winnerName: "Vallepu Harinath",
            winnerImageUrl: "/assets/images/boy-winner.png"
        });
        // Chemo-3
        techWins += 1;
        events.push({
            id: `evt-t-techfusion-winner-2`,
            eventName: "TechFusion",
            category: "Technical Events",
            subCategory: "chemo-3",
            rank: 1,
            winnerName: "Kannabiram",
            winnerImageUrl: "/assets/images/boy-winner.png"
        });
        techWins += 1;
        events.push({
            id: `evt-t-techfusion-runner-2`,
            eventName: "TechFusion",
            category: "Technical Events",
            subCategory: "chemo-3",
            rank: 2,
            winnerName: "Mohana",
            winnerImageUrl: "/assets/images/girl-winner.png"
        });
        // Shreyas Hall
        techWins += 1;
        events.push({
            id: `evt-t-techfusion-winner-3`,
            eventName: "TechFusion",
            category: "Technical Events",
            subCategory: "shreyas hall",
            rank: 1,
            members: [
                { name: "M. Rishitha", isBoy: false },
                { name: "J. Krishna Priya", isBoy: false }
            ]
        });
        techWins += 1;
        events.push({
            id: `evt-t-techfusion-runner-3`,
            eventName: "TechFusion",
            category: "Technical Events",
            subCategory: "shreyas hall",
            rank: 2,
            winnerName: "B.N. Rishitha",
            winnerImageUrl: "/assets/images/girl-winner.png"
        });
    }

    // 2.5. Mohan Babu University
    else if (college.name === "mohanbabu university") {
        techWins += 1;
        events.push({
            id: `evt-t-posterize-runner-1`,
            eventName: "Posterize",
            category: "Technical Events",
            rank: 2,
            project: "Resq-The smart watch bodyguard",
            winnerName: "Vallepu Harinath",
            winnerImageUrl: "/assets/images/boy-winner.png"
        });
    }

    // 3. Geethanjali Institute
    else if (college.name === "Geethanjali institute of science and technology") {
        events.push({
            id: `evt-t-codeverse-runner-3`,
            eventName: "Codeverse",
            category: "Technical Events",
            rank: 2,
            teamName: "Byte Blazers",
            project: "Health care & web interface",
            description: "Codeverse: Where coding meets creativity. A technical platform for developers to showcase their programming excellence.",
            winnerName: "B. Someswara Rao",
            phone: "8688865567",
            collegeDetail: "Geethanjali Institute of Technology, Nellore",
            winnerImageUrl: "/assets/images/boy-winner.png"
        });

        // CODEX (Runners) - Shared from Image
        events.push({
            id: `evt-t-codex-runner-gist`,
            eventName: "Codex",
            category: "Technical Events",
            rank: 2,
            winnerName: "B. Someswara Rao",
            winnerImageUrl: "/assets/images/boy-winner.png"
        });
    }

    // 4. Annamacharya Institute (AITS)
    else if (college.name === "Annamacharaya institute of technology and sciences") {
        // TECHCRIX
        techWins += 2; // Winner and Runner
        events.push({
            id: `evt-t-circuitrix-winner-1`,
            eventName: "Circuitrix",
            category: "Technical Events",
            rank: 1,
            winnerName: "Jadaprolu Chetana",
            winnerImageUrl: "/assets/images/girl-winner.png"
        });
        events.push({
            id: `evt-t-circuitrix-runner-2`,
            eventName: "Circuitrix",
            category: "Technical Events",
            rank: 2,
            winnerName: "Kothapalli Moula",
            winnerImageUrl: "/assets/images/boy-winner.png"
        });

        // POSTERIZE (Rank 4)
        techWins += 1;
        events.push({
            id: `evt-t-posterize-winner-3`,
            eventName: "Posterize",
            category: "Technical Events",
            rank: 4,
            description: "Posterize: Visualize your technical expertise. Create innovative and data-driven posters to summarize complex engineering concepts.",
            project: "5G Technology and its application",
            winnerName: "Siddamreddy charan kumar reddy",
            winnerImageUrl: "/assets/images/boy-winner.png"
        });
    }

    // 5. Padmavathi Mahila Viswa Vidhyalayam
    else if (college.name === "Padmavathi mahila viswa vidhyalayam") {
        techWins += 1;
        events.push({
            id: `evt-t-circuitrix-runner-1`,
            eventName: "Circuitrix",
            category: "Technical Events",
            rank: 2,
            winnerName: "Peddireddy Mounika",
            winnerImageUrl: "/assets/images/girl-winner.png"
        });
    }

    // 6. SVCE Nellore
    else if (college.name === "Sree Venkateswara College of Engineering, Nellore") {
        techWins += 1;
        events.push({
            id: `evt-t-circuitrix-runner-3`,
            eventName: "Circuitrix",
            category: "Technical Events",
            rank: 2,
            winnerName: "Ponguluri Phani Shashank",
            winnerImageUrl: "/assets/images/boy-winner.png"
        });
    }

    // 7. Narayana College, Nellore
    else if (college.name === "narayana college,nellore") {
        // CLICK FEST (Rank 1)
        nonTechWins += 1;
        events.push({
            id: `evt-nt-clickfest-winner-1`,
            eventName: "Click Fest",
            category: "Non Technical",
            rank: 1,
            winnerName: "Siva Ganesh Kama",
            winnerImageUrl: "/assets/images/boy-winner.png"
        });

        // POSTERIZE (Rank 3)
        techWins += 1;
        events.push({
            id: `evt-t-posterize-winner-2`,
            eventName: "Posterize",
            category: "Technical Events",
            rank: 3,
            project: "Pyrolysis- Plastic waste to fuel",
            members: [
                { name: "Syed Ashiq", isBoy: true },
                { name: "Shaik Sufiyan", isBoy: true }
            ]
        });

        // QUIZTRONICS (Runner)
        techWins += 1;
        events.push({
            id: `evt-t-quiztronics-runner-1`,
            eventName: "Quiztronics",
            category: "Technical Events",
            rank: 2,
            collegeName: "Narayana College Of Engineering, Nellore",
            logoFallback: "NCEN"
        });
    }

    // ─── ADDING QUIZTRONICS WINNERS (Batch update) ───
    if (college.name === "Annamacharaya institute of technology and sciences") {
        // J Chethana and S. Charan
        techWins += 2;
        events.push({
            id: `evt-t-quiztronics-winner-1`,
            eventName: "Quiztronics",
            category: "Technical Events",
            rank: 1,
            winnerName: "J. Chethana",
            winnerImageUrl: "/assets/images/girl-winner.png"
        });
        events.push({
            id: `evt-t-quiztronics-winner-2`,
            eventName: "Quiztronics",
            category: "Technical Events",
            rank: 1,
            description: "Quiztronics: Rapid-fire rounds and challenging questions. Test your general and technical knowledge in this electrifying quiz competition.",
            winnerName: "S. Charan",
            winnerImageUrl: "/assets/images/boy-winner.png"
        });
    } else if (college.name === "pbr vits kavali") {
        techWins += 1;
        events.push({
            id: `evt-t-quiztronics-winner-3`,
            eventName: "Quiztronics",
            category: "Technical Events",
            rank: 1,
            winnerName: "Poondla Sai Ganesh",
            winnerImageUrl: "/assets/images/boy-winner.png"
        });
    } else if (college.name === "S.V.U College of Engineering") {
        techWins += 1;
        events.push({
            id: `evt-t-quiztronics-winner-4`,
            eventName: "Quiztronics",
            category: "Technical Events",
            rank: 1,
            winnerName: "G. Hariparasad",
            winnerImageUrl: "/assets/images/boy-winner.png"
        });

        // DUMB CHARADES 2K25
        nonTechWins += 1; // Grouped into one card
        events.push({
            id: `evt-nt-dumb-charades-winner-team-svu`,
            eventName: "Dumb Charades",
            category: "Non Technical",
            rank: 1,
            hideCollegeInfo: true,
            description: "Dumb Charades: Act, guess, and win! A thrilling test of non-verbal communication and team coordination where silence speaks louder than words.",
            members: [
                { name: "Venkata Sai", isBoy: true },
                { name: "G. Akhil", isBoy: true },
                { name: "E. Nikil Sai Reddy", isBoy: true }
            ]
        });
        // KIM'S GAME 2K25
        nonTechWins += 1;
        events.push({
            id: `evt-nt-kims-game-winner-svu`,
            eventName: "kims game",
            category: "Non Technical",
            rank: 1,
            hideCollegeInfo: true,
            description: "Kim's Game: A timeless test of observation and memory. How many details can you extract and recall from a sea of objects in just seconds?",
            members: [
                { name: "K Chaitanya", isBoy: true },
                { name: "S. Nowizya", isBoy: false },
                { name: "M. Prachanya", isBoy: false }
            ]
        });
        nonTechWins += 1;
        events.push({
            id: `evt-nt-kims-game-runner-svu`,
            eventName: "kims game",
            category: "Non Technical",
            rank: 2,
            hideCollegeInfo: true,
            members: [
                { name: "R Sai Deepa", isBoy: false },
                { name: "B. Ganesh", isBoy: true },
                { name: "S. Kavya", isBoy: false }
            ]
        });

        // Other Dumb Charades winners (extra)
        events.push({
            id: `evt-nt-dumb-charades-winner-svuce-extra`,
            eventName: "Dumb Charades",
            category: "Non Technical",
            rank: 3,
            members: [
                { name: "P. Priyanka", isBoy: false },
                { name: "P. Tharun", isBoy: true },
                { name: "N. Saikarthikeya", isBoy: true }
            ]
        });

        // GUESS BUSTERS 2K25
        nonTechWins += 1;
        events.push({
            id: `evt-nt-guessbusters-winner-1`,
            eventName: "GuessBusters",
            category: "Non Technical",
            rank: 1,
            hideCollegeInfo: true,
            description: "GuessBusters: Decode the clues and solve the patterns. A fast-paced game of logic, intuition, and quick thinking.",
            members: [
                { name: "Ruchitha Reddy", isBoy: false },
                { name: "Arshad Ahmed", isBoy: true },
                { name: "Anil Kumar Reddy", isBoy: true },
                { name: "Bhanu Prakash", isBoy: true }
            ]
        });
        nonTechWins += 1;
        events.push({
            id: `evt-nt-guessbusters-runner-1`,
            eventName: "GuessBusters",
            category: "Non Technical",
            rank: 2,
            hideCollegeInfo: true,
            members: [
                { name: "Tejaswi", isBoy: false },
                { name: "Saira Bhanu", isBoy: false },
                { name: "Hyndavi", isBoy: false },
                { name: "Sindhu Kumari", isBoy: false }
            ]
        });
    }

    // Narayana College Nellore Wins
    if (college.name === "narayana college,nellore") {
        nonTechWins += 1;
        events.push({
            id: `evt-nt-dumb-charades-winner-narayana`,
            eventName: "Dumb Charades",
            category: "Non Technical",
            rank: 1,
            winnerName: "Shiva Ganesh",
            winnerImageUrl: "/assets/images/boy-winner.png"
        });
    }

    // Annamacharya Tirupati (AITS)
    if (college.name === "Annamacharaya institute of technology and sciences") {
        nonTechWins += 1;
        events.push({
            id: `evt-nt-dumb-charades-runner-aits`,
            eventName: "Dumb Charades",
            category: "Non Technical",
            rank: 2,
            hideCollegeInfo: true,
            winnerName: "Yogitha",
            winnerImageUrl: "/assets/images/girl-winner.png"
        });
    }

    if (index % 4 === 0 || index === 5 || index === 14 || index === 16) { // Other Non-Technical Wins
        nonTechWins += 1;
        events.push({
            id: `evt-nt-${index}-1`,
            eventName: "Fun Games",
            category: "Non Technical",
            rank: 1,
            teamName: `Team ${index}`,
            members: [
                { name: "Vikram Singh", isBoy: true },
                { name: "Arjun Patel", isBoy: true },
                { name: "Rohan Das", isBoy: true },
                { name: "Neha Gupta", isBoy: false },
            ]
        });
    }

    let finalTechWins = events.filter(e => e.category === "Technical Events").length;
    let finalNonTechWins = events.filter(e => e.category === "Non Technical").length;
    
    // Manual adjustments to demote SVUCE to 5th and promote others to top 4.
    let displayTechWins = finalTechWins;
    let displayNonTechWins = finalNonTechWins;
    let displayTotalWins = finalTechWins + finalNonTechWins;

    if (college.name === "S.V.U College of Engineering") {
        displayTechWins = 2;
        displayNonTechWins = 0;
        displayTotalWins = 2;
    } else if (college.name === "Annamacharaya institute of technology and sciences") {
        displayTechWins = 3;
        displayNonTechWins = 2;
        displayTotalWins = 5;
    } else if (college.name === "G Pullareddy engineering college") {
        displayTechWins = 3;
        displayNonTechWins = 1;
        displayTotalWins = 4;
    } else if (college.name === "narayana college,nellore") {
        displayTechWins = 2;
        displayNonTechWins = 2;
        displayTotalWins = 4;
    } else if (college.name === "Geethanjali institute of science and technology") {
        displayTechWins = 2;
        displayNonTechWins = 1;
        displayTotalWins = 3;
    } else {
        if (displayTotalWins > 2) {
            displayTotalWins = 2;
            displayTechWins = 1;
            displayNonTechWins = 1;
        }
    }

    return {
        id: `college-${index + 1}`,
        name: college.name,
        participants: college.participants,
        logoFallback: getInitials(college.name),
        totalWins: displayTotalWins,
        techWins: displayTechWins,
        nonTechWins: displayNonTechWins,
        events
    };
});

// Sort by total wins first (descending), then by participant count, to show the heaviest hitters at the top!
export const sortedCollegeStatsData = [...collegeStatsData].sort((a, b) => {
    if (b.totalWins !== a.totalWins) {
        return b.totalWins - a.totalWins;
    }
    return b.participants - a.participants;
});
