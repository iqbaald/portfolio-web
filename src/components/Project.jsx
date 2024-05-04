import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaVuejs,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript } from "react-icons/si";
// import { MdOutlineDateRange } from "react-icons/md";

export default function Project() {
  const iconTech = {
    HTML: <FaHtml5 className="text-orange-500" />,
    CSS: <FaCss3Alt className="text-blue-500" />,
    JavaScript: <SiJavascript className="text-yellow-400" />,
    Bootstrap: <FaBootstrap className=" text-purple-500" />,
    Tailwind: <SiTailwindcss className="text-sky-500" />,
    Vue: <FaVuejs className="text-green-500" />,
    React: <FaReact className="text-cyan-500" />,
    MongoDB: <SiMongodb className="text-green-500" />,
    "Node.js": <FaNodeJs className="text-green-700" />,
  };

  const getIcon = (tech) => {
    return iconTech[tech];
  };

  return (
    <div className="px-6 pb-24">
      <h1 className="mt-16 mb-4 max-lg:mb-4 text-center text-4xl font-bold bg-gradient-to-b from-cyan-500  to-color2 text-transparent bg-clip-text">
        My Project
      </h1>

      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            key={index}
            className="lg:mx-32 py-8 border-b border-neutral-300 flex flex-wrap justify-between max-lg:text-center items-center"
          >
            <div className="w-full h-60 lg:w-2/6 py-5 ">
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 rounded-lg object-cover lg:w-[356px] lg:h-[200px] w-full h-[2/3] "
              />
            </div>

            <div className=" w-full max-w-full lg:w-3/5 max-lg:justify-center max-lg:text-center">
              {/* <div className="mb-2 text-sm py-1 px-2 rounded bg-neutral-300 inline-flex items-center  max-lg:justify-center">
                <MdOutlineDateRange className="mr-2" />
                {project.date}
              </div> */}
              <h3 className="mb-1 text-2xl font-semibold">{project.title}</h3>

              <p className="mb-4 text-neutral-500 text-justify">
                {project.description}
              </p>

              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 py-2 px-2 max-lg:text-4xl text-2xl inline-block rounded-md bg-neutral-300 "
                >
                  {getIcon(tech)}
                </span>
              ))}

              <div className="flex items-center justify-start mt-4">
                <a
                  href={project.website}
                  target="_blank"
                  type="button"
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
                >
                  Visit Website
                </a>

                <a
                  href={project.documentation}
                  target="_blank"
                  type="button"
                  className=" inline-flex items-center justify-center px-0.5 py-0.5 text-center me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 group-hover:from-blue-500 group-hover:to-blue-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span className=" px-4 py-2 transition-all ease-in duration-75 bg-white text-blue-500 rounded-md group-hover:bg-opacity-0 hover:text-white">
                    Project Documentation
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
