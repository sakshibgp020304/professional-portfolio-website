// Centralized content for the portfolio.
// Edit the values here to update the site — no need to touch components.

export const personalInfo = {
  name: "Sakshi Singh",
  title: "Java Full Stack Developer",
  tagline: "Building clean, responsive web experiences with Java, React & SQL.",
  intro:
    "Passionate frontend developer and Java Full Stack learner. I love building beautiful, responsive websites and solving real-world problems with code.",
  email: "sakshi@gmail.com",
  phone: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  location: "Patna, Bihar, India",
  mapsUrl: "https://www.google.com/maps/place/Patna,+Bihar",
  resumeUrl: "public/resume/Sakshi-Singh-Resume (1).pdf",
  profileImage: "/hero-image.jpeg",
  socials: {
    github: "https://github.com/sakshibgp020304-creator",
    linkedin:
      "https://www.linkedin.com/in/sakshi-singh-067595394?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    leetcode: "https://leetcode.com/u/sakshi-singh-p",
    facebook: "https://facebook.com/",
  },
};

export const about = {
  heading: "Frontend Developer & Java Full Stack Learner",
  paragraphs: [
    "I'm currently pursuing my BCA and training in Java Full Stack Development, with hands-on internship experience at Infosys Foundation and Bajaj Finserv.",
    "I enjoy designing modern, responsive interfaces and solving programming problems that connect frontend design with solid backend logic.",
  ],
  objective:
    "My goal is to grow into a Software Engineer role and build impactful, real-world web applications.",
  educationSummary:
    "BCA (Java Full Stack focus) — Oxford Business College, Patna, 2023–2026",
};

export const skills = [
  { name: "HTML", level: 90, icon: "fa-brands fa-html5" },
  { name: "CSS", level: 85, icon: "fa-brands fa-css3-alt" },
  { name: "JavaScript", level: 75, icon: "fa-brands fa-square-js" },
  { name: "React", level: 70, icon: "fa-brands fa-react" },
  { name: "Java", level: 80, icon: "fa-solid fa-mug-hot" },
  { name: "SQL", level: 75, icon: "fa-solid fa-database" },
  { name: "Git", level: 70, icon: "fa-brands fa-git-alt" },
  { name: "GitHub", level: 72, icon: "fa-brands fa-github" },
];

export const projects = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built with React and plain CSS, featuring glassmorphism UI and scroll animations.",
    longDescription:
      "This portfolio was designed from scratch to showcase my projects and skills as a Java Full Stack learner. It uses a dark navy theme with cyan and violet accents, glassmorphism cards, and scroll-reveal animations, all built without any UI framework.",
    image: "/portfolio-project.jpg",
    tech: ["React", "Vite", "CSS3", "JavaScript"],
    liveUrl: "",
    githubUrl: "",
    features: [
      "Fully responsive dark-themed layout",
      "Glassmorphism cards and gradient accents",
      "Scroll reveal and hover animations",
      "Reusable component-based structure",
    ],
  },
  {
    id: "blood-bank-management",
    title: "Blood Bank Management System",
    description:
      "A web application for managing blood donors, blood groups, blood availability and emergency blood requirements.",
    longDescription:
      "Blood Bank Management System is a web application developed using PHP, MySQL, HTML, CSS and JavaScript that helps manage donor records, blood groups and blood availability. It provides an easy-to-use interface for registering donors, searching for required blood groups and managing blood-related records efficiently.",
    image: "/blood-bank.png",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    liveUrl: "",
    githubUrl: "",
    features: [
      "Donor registration and record management",
      "Blood group and blood availability management",
      "Search for required blood groups",
      "Database integration using MySQL",
      "User-friendly interface for managing blood records",
    ],
  },
  {
    id: "online-test-management",
    title: "Online Test Management System",
    description:
      "A web application for conducting and managing online examinations end-to-end.",
    longDescription:
      "OTMS is a full Java web application built with JSP/Servlets, MySQL and Maven/Tomcat that lets admins create tests and students attempt them online, with automatic evaluation and result tracking.",
    image: "/test-management.jpg",
    tech: ["JSP", "Servlets", "MySQL", "Maven", "Tomcat"],
    liveUrl: "",
    githubUrl: "",
    features: [
      "Admin panel to create and manage tests",
      "Timed test-taking interface for students",
      "Automatic evaluation and score generation",
      "Result history and reporting",
    ],
  },
];

export const education = [
  {
    course: "BCA (Java Full Stack Development)",
    institute: "Oxford Business College, Patna",
    year: "2023 – 2026",
    description:
      "Affiliated with Patliputra University, focused on Java Full Stack Development.",
  },
  {
    course: "12th Standard",
    institute: "Muslim Minority College Bhagalpur",
    year: "2023",
    description: "Completed senior secondary education.",
  },
  {
    course: "10th Standard",
    institute: "Sri Ramkrishna Vidya Mandir",
    year: "2021",
    description: "Completed secondary education.",
  },
];
