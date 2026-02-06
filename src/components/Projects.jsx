import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const allProjects = [
  {
    name: "e-Chikitsalaya – Telemedicine Platform",
    short:
      "Full-stack healthcare platform with appointments, Stripe payments, real-time video calls, chatbot, and messaging system.",
    details: [
      "Built using Flask, MySQL, Socket.IO for real-time video consultations.",
      "Integrated Stripe for secure appointment payments.",
      "Chatbot, messaging system, dark/light mode for enhanced UX.",
      "Doctor–patient booking workflow with authentication and DB models.",
      "Designed complete healthcare workflow from scratch.",
    ],
    tech: ["Python", "Flask", "MySQL", "Stripe", "Socket.IO", "HTML", "CSS", "JavaScript"],
    repo: "https://github.com/YOUR_USERNAME/e-chikitsalaya",
    live: "#",
  },
  {
    name: "Travel Story – Personal Travel Timeline (MERN)",
    short:
      "Secure MERN app to create, edit, delete travel stories with images, JWT auth, filters, and pinning.",
    details: [
      "JWT authentication and protected routes.",
      "Image uploads with date-based filtering and story pinning.",
      "REST APIs using Node.js and Express.",
      "Dynamic responsive UI built with React.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    repo: "https://github.com/YOUR_USERNAME/travel-story",
    live: "#",
  },
  {
    name: "AI Note-Taking Assistant (NextJS + OpenAI + DALL·E)",
    short:
      "AI-powered note assistant with autocomplete, OpenAI integration, and image generation using DALL·E.",
    details: [
      "Built with NextJS 13 App Router and TypeScript.",
      "OpenAI API for smart note writing and autocomplete.",
      "DALL·E integration for AI image generation.",
      "Drizzle ORM and modern UI using Shadcn + Tailwind.",
    ],
    tech: ["NextJS", "TypeScript", "OpenAI", "DALL·E", "DrizzleORM", "Tailwind"],
    repo: "https://github.com/GAGGZ1/AI-Note-Taking-Assistant",
    live: "#",
  },
  {
    name: "Flask Blog – Dynamic Web Application",
    short:
      "Secure Flask blog with authentication, image uploads, date search, and optimized DB models.",
    details: [
      "User authentication using Flask-Login and Flask-WTF.",
      "Image upload feature and date-based search.",
      "SQLAlchemy database models with session handling.",
      "Secure and optimized backend architecture.",
    ],
    tech: ["Python", "Flask", "SQLAlchemy", "Jinja2", "HTML", "CSS", "JavaScript"],
    repo: "https://github.com/YOUR_USERNAME/flask-blog",
    live: "#",
  },
  {
    name: "CodePlayground – Live HTML/CSS/JS Editor",
    short:
      "Browser-based live code editor to write and preview HTML, CSS, and JS in real time.",
    details: [
      "Separate panels for HTML, CSS, and JS input.",
      "Live DOM preview without any frameworks.",
      "Pure JavaScript DOM manipulation and event handling.",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/YOUR_USERNAME/codeplayground",
    live: "#",
  },
  {
    name: "React Weather App",
    short:
      "Weather app using OpenWeatherMap API with dynamic backgrounds and search functionality.",
    details: [
      "API integration with OpenWeatherMap.",
      "Dynamic UI updates using React hooks.",
      "Error handling for invalid cities.",
    ],
    tech: ["React", "MUI", "API", "CSS"],
    repo: "https://github.com/YOUR_USERNAME/weather-app",
    live: "#",
  },
  {
    name: "To-Do List App (Flask)",
    short:
      "Simple task manager with add/delete functionality using Flask and SQLite.",
    details: [
      "CRUD operations with Flask.",
      "Lightweight SQLite database.",
      "Clean UI with server-side rendering.",
    ],
    tech: ["Python", "Flask", "SQLite", "HTML", "CSS"],
    repo: "https://github.com/GAGGZ1/To-Do-List-Python-and-Flask-",
    live: "#",
  },
  {
    name: "Frontend Mini Projects Collection",
    short:
      "Collection of beginner frontend projects: RGB Generator, Amazon Clone, Tailwind Landing Page.",
    details: [
      "RGB color generator with clipboard copy.",
      "Amazon clone using HTML & CSS.",
      "Responsive Tailwind CSS landing page.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Tailwind"],
    repo: "https://github.com/YOUR_USERNAME",
    live: "https://gaggz1.github.io/tailwind-landing-page/",
  },
];


export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? allProjects
    : allProjects.slice(0, 3);

  return (
    <div className="space-y-6">
      {visibleProjects.map((project, index) => (
        <div
          key={index}
          className="bg border border-[#2a2a2a] rounded-xl p-6 hover:border-gray-600 hover:shadow-[0_0_20px_#111] transition"
        >
          {/* Title */}
          <h3 className="text-xl font-semibold mb-3">
            {project.name}
          </h3>

          {/* Short description */}
          <p className="text-gray-400 leading-relaxed mb-4">
            {project.short}
          </p>

          {/* Expanded content */}
          {openIndex === index && (
            <>
              <div className="border-t border-[#1f1f1f] my-6" />

              <ul className="space-y-2 text-gray-400 mb-6">
                {project.details.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-[#111] border border-[#2a2a2a] rounded-lg text-sm text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </>
          )}

          {/* Bottom row */}
          <div className="flex items-center justify-between text-sm">
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="text-gray-500 hover:text-gray-300"
            >
              Know more {openIndex === index ? "▲" : "▼"}
            </button>

            <div className="flex items-center gap-6">
              <a
                href={project.repo}
                className="flex items-center gap-2 text-gray-400 hover:text-white"
              >
                <FaGithub />
                Repo
              </a>

              <a
                href={project.live}
                className="flex items-center gap-2 text-orange-400 hover:text-orange-300"
              >
                Visit <HiArrowRight />
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Show More / Less */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-gray-500 hover:text-white flex items-center gap-2"
        >
          {showAll ? "Show Less" : "More Projects"}
          <span
            className={`transition-transform ${
              showAll ? "rotate-180" : ""
            }`}
          >
            ↓
          </span>
        </button>
      </div>
    </div>
  );
}
