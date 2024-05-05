import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

export default function Toolkit() {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: 0,
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className="px-6 ">
      <h1 className="my-16 text-center text-4xl font-bold bg-gradient-to-b from-cyan-500  to-color2 text-transparent bg-clip-text ">
        My Toolkit
      </h1>

      <motion.div
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="border-[3px] border-neutral-300 rounded-2xl p-4"
        >
          <FaFigma className="text-7xl text-pink-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="border-[3px] border-neutral-300 rounded-2xl p-4"
        >
          <FaHtml5 className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="border-[3px] border-neutral-300 rounded-2xl p-4"
        >
          <FaCss3Alt className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="border-[3px] border-neutral-300 rounded-2xl p-4"
        >
          <FaBootstrap className="text-7xl text-purple-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="border-[3px] border-neutral-300 rounded-2xl p-4"
        >
          <SiTailwindcss className="text-7xl text-sky-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="border-[3px] border-neutral-300 rounded-2xl p-4"
        >
          <FaReact className="text-7xl text-cyan-500" />
        </motion.div>
      </motion.div>
    </div>
  );
}
