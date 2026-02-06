import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiPeerlist } from "react-icons/si";

const links = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    color: "text-[#0A66C2]",
    href: "https://www.linkedin.com/in/gaganchauhan/",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "text-white",
    href: "https://github.com/GAGGZ1",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    color: "text-white",
    href: "https://x.com/CHAUHAN702",
  },
  {
    name: "Email",
    icon: MdEmail,
    color: "text-[#EA4335]",
    href: "mailto:chauhangagan117@gmail.com",
  },
  {
    name: "Peerlist",
    icon: SiPeerlist,
    color: "text-[#00AA45]",
    href: "https://peerlist.io/gaggz",
  },
];

export default function Connect() {
  return (
    <div className="flex flex-wrap gap-4">
      {links.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 bg-[#0b0b0b] border border-border rounded-xl hover:border-gray-600 hover:shadow-[0_0_15px_#111] transition"
          >
            <Icon className={`text-xl ${item.color}`} />
            <span className="text-gray-200">{item.name}</span>
          </a>
        );
      })}
    </div>
  );
}
