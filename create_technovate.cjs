const fs = require('fs');

const sourcePath = 'c:\\Users\\Acer\\Desktop\\sigmoid\\src\\components\\ui\\PosterizeEventPage.jsx';
const destPath = 'c:\\Users\\Acer\\Desktop\\sigmoid\\src\\components\\ui\\TechnovateEventPage.jsx';

let content = fs.readFileSync(sourcePath, 'utf8');

const newEventData = {
  event_info: {
    title: "TECHNOVATE",
    emoji: "📄",
    subtitle: "Paper Presentation",
    brochure_url: "/TECHNOVATE.docx",
    features: [
      { id: "01", content: "Submit through Google form online before March 31st 6pm" },
      { id: "02", content: "Judges finalize shortlist after submission" },
      { id: "03", content: "Present MS-PPT physically along with documentation (A4)" },
      { id: "04", content: "Max 2 candidates per paper" },
      { id: "05", content: "Viva voce examination for finalized candidates" },
      { id: "06", content: "Prizes and certificates for best performers and outstanding papers" },
      { id: "07", content: "No help from ChatGPT/Copilot (strictly prohibited)" },
      { id: "08", content: "Theme: The Future of Small Satellite, Robots: Boon or Curse?" }
    ]
  },
  video_preview: {
    video_src: "https://res.cloudinary.com/djiivo0r7/video/upload/v1773297822/TECHNOVATE_Paper_Presentation_Guide_720p_caption_qmfwbu.mp4",
    badges: [
      { position: "top-left", icon: "users", text: "Max 2 Candidates" },
      { position: "top-right", icon: "document", text: "A4 Size Documentation" },
      { position: "bottom-left", icon: "clock", text: "8 Min Present + 2 Min Q&A" },
      { position: "bottom-right", icon: "academic", text: "Prizes & Certifications" }
    ]
  },
  mission: [
    {
      id: "foundation",
      icon: "target",
      title: "THE OBJECTIVE",
      points: [
        "Design a captivating and informative paper presentation that effectively communicates your research to a broad audience of researchers at a conference or seminar.",
        "A paper presentation is an event where participants create a paper about a specific topic or area and then present it in front of a jury or audience.",
        "It combines written research with effective communication to share knowledge and insights with others."
      ]
    },
    {
      id: "journey",
      icon: "rocket",
      title: "THE PROCESS",
      points: [
        "Round 1: Google form submission through online. After submission judges finalize the shortlist.",
        "Round 2: The selected candidates present their ppt’s (8 mins presentation, 2 mins queries).",
        "Round 3: The final shortlisted participants attend the viva voce examination."
      ]
    }
  ],
  learnings: {
    title: "Topics Covered",
    items: [
      "5G Technology", "Internet of Things", "VLSI & Embedded", "Nano Electronics",
      "Image Processing", "Wireless Comm.", "Blockchain Tech", "Robotics Automation",
      "Space Technology", "AI & ML", "Data Analytics", "Antenna Design"
    ],
    button_text: "And other innovative topics...",
    description: [
      "Showcase your latest research and findings in cutting-edge technological domains.",
      "Engage with a broad audience of researchers and domain experts through a paper presentation.",
      "Build your confidence by presenting and defending your ideas during the interactive Q&A session.",
      "Get evaluated by esteemed professors and gain valuable feedback on your work.",
      "Experience a professional seminar environment and network with like-minded innovators."
    ]
  },
  perks: {
    title: "Perks & Benefits",
    items: [
      { text: "Certificate of Participation", icon: "academic", color: "#ec4899" },
      { text: "Prizes for Outstanding Papers", icon: "diamond", color: "#f89b29" },
      { text: "Networking with Professors", icon: "users", color: "#10B981" },
      { text: "Improve Presentation Skills", icon: "user", color: "#a855f7" },
      { text: "Showcase Research Work", icon: "document", color: "#2dd4bf" },
      { text: "Professional Evaluation", icon: "clipboard", color: "#f89b29" },
      { text: "Theme-based Innovation", icon: "cube", color: "#eab308" },
      { text: "Boost your Resume", icon: "briefcase", color: "#10B981" }
    ]
  },
  mentors: [
    { 
      id: "m1", 
      name: "Evaluation Expert 1", 
      role: "Review Committee", 
      image: "/mentor1-posterize.jpeg",
      phone: "",
      instagram: "",
      linkedin: ""
    },
    { 
      id: "m2", 
      name: "Evaluation Expert 2", 
      role: "Review Committee", 
      image: "/mentor2-posterize.jpeg",
      phone: "",
      instagram: "",
      linkedin: ""
    }
  ],
  testimonials: [
    { 
      id: "t1", 
      name: "Participant A", 
      quote: "The Technovate event was an amazing platform to showcase my research. The feedback from the judges was invaluable.", 
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      college_logo: ""
    },
    { 
      id: "t2", 
      name: "Participant B", 
      quote: "I loved the way this event was structured. Presenting my paper helped me improve my communication skills significantly.", 
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      college_logo: ""
    },
    { 
      id: "t3", 
      name: "Participant C", 
      quote: "Winning the outstanding paper award was a proud moment. The whole experience was highly professional.", 
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      college_logo: ""
    }
  ],
  faqs: [
    { id: "q1", question: "Can I participate individually?", answer: "Yes, a maximum of 2 candidates are allowed per paper, but even a single candidate can submit and present." },
    { id: "q2", question: "Can I use AI tools like ChatGPT?", answer: "No help from Online tools like ChatGPT, Microsoft Copilot…etc. All such papers are rejected and ultimately prohibited." },
    { id: "q3", question: "What sizes are required for the printed document?", answer: "All accepted candidates must present MS-PPT physically along with a hard copy of their paper or documentation on A4 paper." },
    { id: "q4", question: "How will I know if my paper is shortlisted?", answer: "Accepted papers will be intimated through their respective mail IDs and WhatsApp prior to 2 days before the event." },
    { id: "q5", question: "How should I name my submission file?", answer: "The name of the documentation must be in the format of ParticipantName_CollegeName.pdf (prefer .pdf format)." }
  ]
};

// Find the start and end of the eventData object in the source file
const startIndex = content.indexOf('const eventData = {');
// Find the next comment block that marks the end of the JSON area
const endIndex = content.indexOf('// ==========================================\n// ICON HELPERS\n// ==========================================');

if (startIndex !== -1 && endIndex !== -1) {
  const jsonStr = 'const eventData = ' + JSON.stringify(newEventData, null, 2) + ';\n\n';
  content = content.substring(0, startIndex) + jsonStr + content.substring(endIndex);
}

// Replace component name
content = content.replace(/export const PosterizeEventPage/g, 'export const TechnovateEventPage');
// Change certificate image
content = content.replace(/\/namaste_dsa_cert\.webp/g, 'https://res.cloudinary.com/djiivo0r7/image/upload/v1773297935/Blue_Modern_Achievement_Certificate_A4_Landscape.jpg_1_ud186o.jpg');

fs.writeFileSync(destPath, content, 'utf8');

console.log("Successfully created TechnovateEventPage.jsx");
