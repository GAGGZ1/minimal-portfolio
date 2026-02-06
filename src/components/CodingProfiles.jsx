import { SiCodeforces,SiLeetcode,SiCodechef,SiGeeksforgeeks} from "react-icons/si";
import { FaCode, FaTrophy,FaHackerrank  } from "react-icons/fa";

export default function CodingProfiles() {
  const profiles = [
    {
      name: "LeetCode",
      icon: SiLeetcode,
      color: "text-yellow-500",
      subtitle: "Max Rating: 1611 • 750+ Problems",
      link: "https://leetcode.com/u/gaggz/",
    },
    {
      name: "Codeforces",
      icon: SiCodeforces,
      color: "text-blue-400",
      subtitle: "Max Rating: 1018",
      link: "https://codeforces.com/profile/GAGGZ",
    },
    {
      name: "CodeChef",
      icon: SiCodechef,
      color: "text-orange-400",
      subtitle: "Max Rating: 1515",
      link: "https://www.codechef.com/users/gaganchauhan",
    },
    {
      name: "GeeksforGeeks",
      icon: SiGeeksforgeeks,
      color: "text-green-500",
      subtitle: "Rating: 1664 • 150+ Problems",
      link: "https://www.geeksforgeeks.org/profile/gaganchauhan",
    },
    {
      name: "Hackerrank",
      icon: FaHackerrank,
      color: "text-white",
      subtitle: "5 Star Java • 3 Star SQL",
      link: "https://www.hackerrank.com/profile/GAGGZ",
    },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {profiles.map((p) => {
        const Icon = p.icon;
        return (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col gap-2 px-6 py-4 bg-[#0b0b0b] border border-[#2a2a2a] rounded-xl hover:border-gray-600 hover:shadow-[0_0_15px_#111] transition"
          >
            <div className="flex items-center gap-3">
              <Icon className={`text-xl ${p.color}`} />
              <span className="text-gray-200 font-medium">{p.name}</span>
            </div>
            <span className="text-gray-400 text-sm">{p.subtitle}</span>
          </a>
        );
      })}
    </div>
  );
}
