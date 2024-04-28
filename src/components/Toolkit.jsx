import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaVuejs,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function Toolkit() {
  return (
    <div className="px-6 pb-24">
      <h1 className="my-16 text-center text-4xl font-bold bg-gradient-to-b from-cyan-500  to-color2 text-transparent bg-clip-text ">
        My Toolkit
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="border-[3px] border-neutral-300 rounded-2xl p-4">
          <FaHtml5 className="text-7xl text-orange-500" />
        </div>
        <div className="border-[3px] border-neutral-300 rounded-2xl p-4">
          <FaCss3Alt className="text-7xl text-blue-500" />
        </div>
        <div className="border-[3px] border-neutral-300 rounded-2xl p-4">
          <FaBootstrap className="text-7xl text-purple-500" />
        </div>
        <div className="border-[3px] border-neutral-300 rounded-2xl p-4">
          <SiTailwindcss className="text-7xl text-sky-500" />
        </div>
        <div className="border-[3px] border-neutral-300 rounded-2xl p-4">
          <FaVuejs className="text-7xl text-green-500" />
        </div>
        <div className="border-[3px] border-neutral-300 rounded-2xl p-4">
          <FaReact className="text-7xl text-cyan-500" />
        </div>
      </div>
    </div>
  );
}
