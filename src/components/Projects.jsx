import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const allProjects = [
  {
    name: "GitGenius",
    short:
      "AI-powered CLI tool for analyzing Git commits, generating changelogs, and semantic search using LangChain and Gemini.",
    details: [
      "AI-powered commit analysis and categorization using Google Gemini.",
      "Semantic search — ask questions in natural language about your codebase.",
      "Auto-generate professional changelogs grouped by category.",
      "Export reports in JSON, Markdown, CSV, or beautiful HTML.",
      "Incremental processing — only analyze new commits.",
    ],
    tech: ["Node.js", "LangChain", "Gemini API", "Prisma", "SQLite"],
    repo: "#",
    live: "#",
  },
  {
    name: "FlowPay",
    short:
      "A simulated wallet system enabling peer-to-peer transfers and balance additions through a simulated bank.",
    details: [
      "Wallet simulation with transaction history.",
      "Peer-to-peer transfers and validation.",
      "Authentication and session handling.",
    ],
    tech: ["React", "Node.js", "MongoDB"],
    repo: "#",
    live: "#",
  },
  {
    name: "Feed-Wall",
    short:
      "A platform to collect feedback via embeddable widgets, analyze feedback, and generate AI-powered summaries.",
    details: [
      "Embeddable feedback widget for websites.",
      "AI-powered feedback summarization.",
      "Admin dashboard with analytics.",
    ],
    tech: ["Next.js", "PostgreSQL", "Prisma"],
    repo: "#",
    live: "#",
  },
  {
    name: "Extra Project 1",
    short: "Appears only when you click More Projects.",
    details: ["Extra project details here."],
    tech: ["Tech1", "Tech2"],
    repo: "#",
    live: "#",
  },
  {
    name: "Extra Project 2",
    short: "Another hidden project.",
    details: ["More details here."],
    tech: ["TechA", "TechB"],
    repo: "#",
    live: "#",
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
