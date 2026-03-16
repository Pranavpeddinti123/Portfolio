import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const personalDetails = {
  name: "Pranav Peddinti",
  title: "Full Stack Web Developer",
  email: "2300031787cseh1@gmail.com",
  phone: "+91-9959048225",
  location: "India",
  socials: {
    github: "https://github.com/Pranavpeddinti123",
    linkedin: "http://www.linkedin.com/in/pranav-peddinti-87b6a1330",
  }
};

export const emailConfig = {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY",
};

export const education = [
  {
    degree: "B.Tech CSE",
    institution: "KL University",
    year: "Expected 2027",
    description: "Pursuing Bachelor of Technology in Computer Science and Engineering."
  },
  {
    degree: "Intermediate MPC",
    institution: "Sasi Junior College",
    year: "2022",
    description: "Completed Intermediate education with focus on Mathematics, Physics, and Chemistry."
  },
  {
    degree: "Secondary School",
    institution: "Sri Siddhartha High School",
    year: "2020",
    description: "Completed secondary school education."
  }
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["Java", "Python"]
  },
  {
    category: "Web Technologies",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["React.js", "Node.js", "Express.js", "Spring Boot", "Tailwind CSS"]
  },
  {
    category: "Data Science & ML",
    items: ["NumPy", "Pandas", "Matplotlib", "PyTorch", "Langchain", "Langgraph"]
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL"]
  },
  {
    category: "Core Competencies",
    items: ["REST APIs", "JWT Authentication", "Agile Development", "Unit Testing (Jest)"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Chatify",
    description: "A real-time chat application with modern UI and seamless messaging experience. Built with React and Node.js for efficient communication.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/Pranavpeddinti123/chatify",
    demo: "https://chatify-c0pfs.sevalla.app/login",
    image: "/chatify-project.png"
  },
  {
    id: 2,
    title: "Translator",
    description: "A comprehensive translation application seamlessly converting languages. Built with Python, FastAPI, and React for a robust user experience.",
    tech: ["Python", "FastAPI", "React"],
    github: "https://github.com/Pranavpeddinti123/Hackathon",
    demo: "https://peddintipranav.pythonanywhere.com/",
    image: "/translator.png"
  },
  {
    id: 3,
    title: "Face Recognizer",
    description: "A real-time face recognition system using OpenCV. Detects and recognizes faces with high accuracy.",
    tech: ["Python", "OpenCV"],
    github: "https://github.com/Pranavpeddinti123/openCV.git",
    demo: "#",
    image: "/face-recognition.png"
  },
  {
    id: 4,
    title: "MCP Tools",
    description: "A collection of Model Context Protocol (MCP) tools for extending LLM capabilities.",
    tech: ["TypeScript", "Node.js"],
    github: "https://github.com/Pranavpeddinti123/MCP.git",
    demo: "#",
    image: "https://placehold.co/600x400/1f2937/ffffff?text=MCP+Tools"
  },
  {
    id: 5,
    title: "Hospital Management System",
    description: "A comprehensive full-stack hospital management solution facilitating efficient administration and patient care.",
    tech: ["Full Stack"],
    github: "#",
    demo: "https://hospitalmanagement7.netlify.app/",
    image: "/hospital-management.png"
  }
];

export const certifications = [
  {
    id: 1,
    title: "Certification Name 1",
    issuer: "Issuing Organization",
    date: "2024",
    link: "#",
    image: "https://placehold.co/100x100/2563eb/ffffff?text=C1"
  },
  {
    id: 2,
    title: "Certification Name 2",
    issuer: "Issuing Organization",
    date: "2023",
    link: "#",
    image: "https://placehold.co/100x100/2563eb/ffffff?text=C2"
  },
  {
    id: 3,
    title: "Certification Name 3",
    issuer: "Issuing Organization",
    date: "2023",
    link: "#",
    image: "https://placehold.co/100x100/2563eb/ffffff?text=C3"
  }
];
