import { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

const allExperiences = [
  {
    role: "Software Engineering Intern",
    company: "Automation Anywhere",
    location: "Bengaluru, India",
    duration: "Jul 2025 – Present",
    details: [
      "Automated end-to-end testing using Cypress, Playwright, and TypeScript, increasing overall test coverage by 85%.",
      "Developed scalable web applications with Java, JavaScript, and TypeScript; optimized CI/CD pipelines using Jenkins and AWS, reducing deployment time by 60%.",
      "Worked in an Agile environment using Jira, Confluence, and Bitbucket for project tracking, documentation, and version control."
    ],
  },
  {
    role: "Open-Source Contributor",
    company: "GirlScript Summer of Code 2024 (GSSoC)",
    location: "Remote",
    duration: "Jun 2024 – Aug 2024",
    details: [
      "Improved API performance by 20% through bug fixes and optimizations.",
      "Enhanced project usability by 30% by leading feature integrations and collaborating with distributed contributors using Git.",
      "Strengthened API development and collaborative coding practices in a real-world open-source environment."
    ],
  },
  {
    role: "Cybersecurity Virtual Intern – Palo Alto Networks",
    company: "AICTE - EduSkills Virtual Internship",
    location: "Remote",
    duration: "Sept 2023 – Nov 2023",
    details: [
      "Completed a 10-week cybersecurity program covering network security, cloud security, and SOC operations.",
      "Gained practical exposure to security fundamentals, threat analysis, and enterprise security practices."
    ],
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleExperiences = showAll
    ? allExperiences
    : allExperiences.slice(0, 2);

  return (
    <div className="space-y-6">
      {visibleExperiences.map((exp, index) => (
        <div
          key={index}
          className="border  border-[#2a2a2a] rounded-xl p-6 hover:border-gray-600 hover:shadow-[0_0_20px_#111] transition"
        >
          {/* Top Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <h3 className="text-xl font-semibold">{exp.role}</h3>

              {/* Company + Location */}
              <div className="flex items-center gap-3 text-gray-400 text-sm mt-1">
                <span>{exp.company}</span>
                <span className="flex items-center gap-1">
                  <HiOutlineLocationMarker className="text-gray-500" />
                  {exp.location}
                </span>
              </div>
            </div>

            <p className="text-gray-500 text-sm">{exp.duration}</p>
          </div>

          {/* Know More */}
          <div className="mt-4">
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="text-gray-500 text-sm hover:text-gray-300"
            >
              Know more {openIndex === index ? "▲" : "▼"}
            </button>

            {openIndex === index && (
              <>
                <div className="border-t border-[#1f1f1f] my-4" />
                <ul className="space-y-2 text-gray-400">
                  {exp.details.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      ))}

      {/* Show More / Less */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-gray-500 hover:text-white flex items-center gap-2"
        >
          {showAll ? "Show Less" : "More Experience"}
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
