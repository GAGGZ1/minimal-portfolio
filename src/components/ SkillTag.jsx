import {
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiDocker,
  SiPostman,
  SiGit,
} from "react-icons/si";

// Simple Icons (si)
import {
  SiC,
  SiCplusplus,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiRedux,
  SiMysql,
  SiCypress,
  SiJenkins,
  SiGithub,
  SiGithubcopilot,
  SiBitbucket,
  SiJira,
  SiConfluence,
  SiSlack
} from "react-icons/si";

// Font Awesome (fa)
import { FaJava, FaPython, FaDatabase, FaAws ,
  FaGlasses} from "react-icons/fa";

const groups = [
  {
    title: "Programming Languages",
    items: [
      { name: "C", icon: SiC, color: "text-blue-500" },
      { name: "C++", icon: SiCplusplus, color: "text-blue-400" },
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "Python", icon: FaPython, color: "text-blue-400" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "SQL", icon: FaDatabase, color: "text-gray-300" },
    ],
  },
  {
    title: "Web Technologies",
    items: [
      { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "React.js", icon: SiReact, color: "text-cyan-400" },
      { name: "Redux", icon: SiRedux, color: "text-purple-400" },
      { name: "Redux Toolkit", icon: SiRedux, color: "text-purple-300" },
      { name: "Flask", icon: FaPython, color: "text-blue-400" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    ],
  },
  {
    title: "Testing Frameworks",
    items: [
      { name: "Cypress", icon: SiCypress, color: "text-green-500" },
      { name: "Playwright", icon: FaGlasses, color: "text-green-400" },
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      { name: "AWS", icon: FaAws, color: "text-yellow-500" },
      { name: "Jenkins", icon: SiJenkins, color: "text-red-500" },
      { name: "Git", icon: SiGit, color: "text-orange-600" },
      { name: "GitHub", icon: SiGithub, color: "text-gray-300" },
      { name: "GitHub Copilot", icon: SiGithubcopilot, color: "text-gray-400" },
      { name: "Bitbucket", icon: SiBitbucket, color: "text-blue-500" },
    ],
  },
  {
    title: "Collaboration Tools",
    items: [
      { name: "Jira", icon: SiJira, color: "text-blue-500" },
      { name: "Confluence", icon: SiConfluence, color: "text-blue-400" },
      { name: "Microsoft 365", icon: FaDatabase, color: "text-orange-500" },
      { name: "Slack", icon: SiSlack, color: "text-purple-500" },
    ],
  },
];


export default function Skills() {
  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <div key={group.title}>
          {/* Group Title */}
          <h3 className="text-gray-500 text-sm uppercase tracking-widest mb-4">
            {group.title}
          </h3>

          {/* Pills */}
          <div className="flex flex-wrap gap-4">
            {group.items.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 px-5 py-3 bg-[#0b0b0b] border border-[#2a2a2a] rounded-xl hover:border-gray-600 hover:shadow-[0_0_15px_#111] transition"
                >
                  <Icon className={`text-lg ${skill.color}`} />
                  <span className="text-gray-200 text-sm">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
