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

    // Mocking elaborate win data for demonstration on the right panel
    
    // Explicitly set 1st, 2nd, 3rd for Codeverse to test the podium UI perfectly
    if (index === 0 || index === 1 || index === 2) {
        techWins += index === 0 ? 3 : index === 1 ? 2 : 1;
        events.push({
            id: `evt-t-codeverse-${index}`,
            eventName: "Codeverse",
            category: "Technical Events",
            rank: index + 1, // 1, 2, 3
            teamName: `Code Team ${index + 1}`,
            members: [
                { name: "Rahul Verma", isBoy: true },
                { name: "Priya Sharma", isBoy: false },
                { name: "Amit Kumar", isBoy: true },
                { name: "Sneha Reddy", isBoy: false },
            ]
        });
    } else if (index % 3 === 0) { // Other Technical Wins
        techWins += 1;
        events.push({
            id: `evt-t-${index}-2`,
            eventName: "Quiztronics",
            category: "Technical Events",
            rank: index % 2 === 0 ? 1 : 2,
            members: [
                { name: "Anjali Desai", isBoy: false },
                { name: "Kavya Iyer", isBoy: false }
            ]
        });
    }

    if (index === 0 || index === 1 || index === 2) { // Explicitly set 1st, 2nd, 3rd for Click Fest
        nonTechWins += index === 0 ? 3 : index === 1 ? 2 : 1;
        events.push({
            id: `evt-nt-clickfest-${index}`,
            eventName: "Click Fest",
            category: "Non Technical",
            rank: index + 1, // 1, 2, 3
            winnerName: index === 0 ? "N. Sravani" : index === 1 ? "K. Sai Charan" : "K. Mahalakshmi",
            winnerImageUrl: index === 1 ? "/assets/images/boy-winner.png" : "/assets/images/girl-winner.png"
        });
    } else if (index % 4 === 0 || index === 5 || index === 14 || index === 16) { // Other Non-Technical Wins
        nonTechWins += 2;
        events.push({
            id: `evt-nt-${index}-1`,
            eventName: "GuessBusters",
            category: "Non Technical",
            rank: 1,
            teamName: `Esports ${index} Squad`,
            members: [
                { name: "Vikram Singh", isBoy: true },
                { name: "Arjun Patel", isBoy: true },
                { name: "Rohan Das", isBoy: true },
                { name: "Neha Gupta", isBoy: false },
            ]
        });
        events.push({
            id: `evt-nt-${index}-2`,
            eventName: "kims game",
            category: "Non Technical",
            rank: 2,
            members: [
                { name: "Aditi Rao", isBoy: false }
            ]
        });
    }

    const totalWins = techWins + nonTechWins;

    return {
        id: `college-${index + 1}`,
        name: college.name,
        participants: college.participants, // Keep track of the actual participant metadata
        logoFallback: getInitials(college.name),
        totalWins,
        techWins,
        nonTechWins,
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
