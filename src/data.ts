export const personalInfo = {
  name: "Aman Kumar",
  role: "Full-Stack Developer",
  email: "amansaini21892@gmail.com",
  phone: "+91 9350910136",
  address: "718 House number, YamunaNagar, Haryana 135001",
  linkedin: "https://linkedin.com/in/aman-kumar-ak004",
  github: "https://github.com/AMANkumar0004",
};

export const education = {
  institution: "Seth Jai Parkash Mukand Lal Institue of Engineering and technology",
  degree: "Bachelor of Technology in Computer Science",
  duration: "Sep. 2022 – Aug. 2026",
  location: "YamunaNagar, Haryana",
  coursework: ["Data Structures", "Algorithms Analysis", "Database Management", "Oops", "Computer Networks"],
};

export const projects = [
  {
    title: "Roast My Site",
    subtitle: "AI-powered roast and suggestions for any deployed URL.",
    link: "https://roastme-delta.vercel.app/",
    image: "/roastme.png",
    stack: ["React", "TypeScript", "Vercel"],
    date: "May 2026",
    details: [
      "Built a Vercel-hosted experience where users receive playful, AI-written roasts from their prompts or inputs.",
      "Implemented a responsive layout with loading and error handling around generative API calls.",
      "Configured production deployment with environment variables for secure API access."
    ]
  },
  {
    title: "ChatApp",
    subtitle: "Real-Time Chat Application",
    link: "https://chat-app-psi-teal.vercel.app/",
    image: "/chat-app.png",
    stack: ["MERN Stack", "Socket.io", "TypeScript", "JWT"],
    date: "April 2026",
    details: [
      "Built a full-stack real-time chat application supporting one-on-one and group conversations using Socket.io for bidirectional, event-driven communication.",
      "Implemented live online/last-seen status, message deletion, chat clearing, and browser notification sounds triggered only when the relevant chat is not in focus.",
      "Developed secure user authentication and authorization using JWT, with protected REST API routes built on Express.js.",
      "Managed conversation and message persistence with MongoDB."
    ]
  },
  {
    title: "SigmaGPT",
    subtitle: "AI Chatbot Web App",
    link: "https://sigma-gpt-wqqi.vercel.app/",
    image: "/sigma-gpt.png",
    stack: ["MERN Stack", "GeminiAI API"],
    date: "September 2025",
    details: [
      "Developed a ChatGPT-like AI chatbot using Google’s GeminiAI for natural language responses.",
      "Built a MERN-based architecture with Express backend and React frontend for real-time chat.",
      "Integrated MongoDB for thread-based conversation storage and API data handling.",
      "Optimized response latency and deployed the app on Vercel with secure environment setup."
    ]
  },
  {
    title: "WanderLust",
    subtitle: "Travel Listing Web Application",
    link: "https://wanderlust-wkeg.onrender.com/listings",
    image: "/wanderlust.png",
    stack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS"],
    date: "June 2025",
    details: [
      "Developed a full-stack travel web application supporting user-generated listings, image uploads, reviews, and bookings.",
      "Implemented MVC architectural pattern, separating data models, business logic, and view rendering.",
      "Integrated Cloudinary API for secure image storage and management.",
      "Developed secure user authentication and authorization using Passport.js.",
      "Utilized MongoDB Atlas for cloud-hosted, scalable database storage.",
      "Practiced environment variable management and RESTful route structuring in Express."
    ]
  }
];

export const experience = [
  {
    title: "Code Quotient",
    role: "SDE Intern",
    date: "March 2026 - Present",
    location: "Onsite",
    details: [
      "Contributing to full-stack development using modern web technologies.",
      "Collaborating with the team to build and optimize scalable applications.",
      "Participating in code reviews and improving overall codebase quality."
    ]
  },
  {
    title: "Hacktoberfest 2025",
    role: "Open Source Contributor",
    date: "October 2025",
    location: "Remote",
    details: [
      "Participated in Hacktoberfest 2025 by contributing to various open-source repositories on GitHub.",
      "Successfully created and merged 6 meaningful pull requests across different projects focused on web development.",
      "Enhanced existing codebases by fixing bugs, improving documentation, and optimizing frontend components.",
      "Strengthened collaboration skills by engaging in issue discussions and following open-source contribution guidelines."
    ]
  },
  {
    title: "GirlScript Summer of Code 2025",
    role: "Open Source Contributor",
    date: "August 2025 - September 2025",
    location: "Remote",
    details: [
      "Contributed to multiple open-source repositories during the 2-month summer of code program.",
      "Collaborated with project maintainers and global contributors to enhance codebase features and documentation.",
      "Resolved issues, submitted pull requests, and actively engaged in peer code reviews.",
      "Gained hands-on experience in open-source development workflows, Git version control, and team collaboration."
    ]
  }
];

export const skills = {
  languages: ["Java", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  tools: ["MERN Stack", "Socket.io", "Docker", "Git", "GitHub", "VS Code"],
};

export type CodingProfile = {
  title: string;
  subtitle: string;
  username: string;
  profileUrl: string;
  /** Optional direct preview URL (e.g. LeetCard SVG). If omitted, a page screenshot preview is used. */
  previewSrc?: string;
};

export const codingProfiles: CodingProfile[] = [
  {
    title: "LeetCode",
    subtitle: "Problems, ratings, and last 52 weeks submission heatmap (live via LeetCard).",
    username: "AmanKumar_2004",
    profileUrl: "https://leetcode.com/u/AmanKumar_2004/",
    previewSrc:
      "https://leetcard.jacoblin.cool/AmanKumar_2004?theme=dark&font=noto_sans&extension=heatmap",
  },
  {
    title: "takeUforward",
    subtitle: "DSA progress, topics, and platform stats — preview from your saved profile screenshot.",
    username: "Aman93509",
    profileUrl: "https://takeuforward.org/profile/Aman93509",
    previewSrc: "/tuf-profile.png",
  },
];
