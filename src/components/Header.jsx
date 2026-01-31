import { FaGithub } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { HiFolder } from "react-icons/hi2";

export default function Header() {
  return (
    <div className="mb-20">
      {/* Name */}
      <h1 className="text-4xl md:text-6xl font-semibold mb-3">
    Gagan Chauhan
      </h1>

      {/* Role */}
      <p className="text-gray-400 text-lg md:text-xl mb-4">
        Full-Stack Developer | Java | MERN | Flask
      </p>

      {/* Value statement */}
      <p className="text-gray-500 max-w-2xl leading-relaxed mb-8">
        I design and build scalable full-stack applications with clean UI,
        solid backend architecture, and real-world impact.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          className="flex items-center gap-2 px-6 py-3 bg-[#0b0b0b] border border-[#2a2a2a] rounded-xl hover:border-gray-600 transition"
        >
          <HiFolder className="text-lg text-gray-300" />
          Projects
        </a>

        <a
          href="https://github.com/GAGGZ1"
          target="_blank"
          className="flex items-center gap-2 px-6 py-3 bg-[#0b0b0b] border border-[#2a2a2a] rounded-xl hover:border-gray-600 transition"
        >
          <FaGithub className="text-lg text-white" />
          GitHub
        </a>

        <a
          href="https://drive.google.com/file/d/1-VPdut8cHWvaDTZgZNuOe8M2Ty_VApJ4/view?usp=sharing"   target="_blank"
          className="flex items-center gap-2 px-6 py-3 bg-[#0b0b0b] border border-[#2a2a2a] rounded-xl hover:border-gray-600 transition"
        >
          <HiOutlineDocumentText className="text-lg text-gray-300" />
          Resume
        </a>

        <a
          href="#contact"
          className="flex items-center gap-2 px-6 py-3 bg-[#0b0b0b] border border-[#2a2a2a] rounded-xl hover:border-gray-600 transition"
        >
          <MdEmail className="text-lg text-red-400" />
          Contact
        </a>
      </div>
    </div>
  );
}
