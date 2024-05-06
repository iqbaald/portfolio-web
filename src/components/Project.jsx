import { useState } from "react";
import { PROJECTS, ICONTECH } from "../constants";
import { motion } from "framer-motion";

// import { MdOutlineDateRange } from "react-icons/md";

export default function Project() {
  const getIcon = (tech) => {
    return ICONTECH[tech];
  };

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === "UI/UX") {
      return project.category === "UI/UX" || project.category === "Fullstack";
    } else if (activeFilter === "FrontEnd") {
      return (
        project.category === "FrontEnd" || project.category === "Fullstack"
      );
    } else if (activeFilter === "Data Analysis") {
      return project.category === "Data Analysis";
    }
    return true;
  });

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div id="project" className="px-6 pb-16">
      <h1 className="pt-24 mb-4 max-lg:mb-4 text-center text-4xl font-bold bg-gradient-to-b from-cyan-500  to-color2 text-transparent bg-clip-text">
        My Project
      </h1>

      <div className="flex justify-center mt-2 xs:mt-0">
        <button
          onClick={() => handleFilterChange("All")}
          className={`flex items-center justify-center px-3 max-lg:py-5 h-8 max-lg:w-1/4 text-sm max-lg:text-xs font-medium text-white rounded-s ${
            activeFilter === "All"
              ? "bg-blue-700"
              : "bg-blue-400 hover:bg-blue-500"
          }`}
        >
          All Projects
        </button>
        <button
          onClick={() => handleFilterChange("UI/UX")}
          className={`flex items-center justify-center px-3 max-lg:py-5  h-8 max-lg:w-1/4  text-sm max-lg:text-xs  font-medium max-lg:font-base text-white  border-s border-e  ${
            activeFilter === "UI/UX"
              ? "bg-blue-700"
              : "bg-blue-400 hover:bg-blue-500"
          }`}
        >
          UI/UX Design
        </button>
        <button
          onClick={() => handleFilterChange("FrontEnd")}
          className={`flex items-center justify-center px-3 max-lg:py-5  h-8 max-lg:w-1/4  text-sm max-lg:text-xs  font-medium max-lg:font-base text-white border-e ${
            activeFilter === "FrontEnd"
              ? "bg-blue-700"
              : "bg-blue-400 hover:bg-blue-500"
          }`}
        >
          FrontEnd Web
        </button>
        <button
          onClick={() => handleFilterChange("Data Analysis")}
          className={`flex items-center justify-center px-3 max-lg:py-5  h-8 max-lg:w-1/4  text-sm max-lg:text-xs  font-medium max-lg:font-base text-white rounded-e ${
            activeFilter === "Data Analysis"
              ? "bg-blue-700"
              : "bg-blue-400 hover:bg-blue-500"
          }`}
        >
          Data Analysis
        </button>
      </div>

      <div>
        {filteredProjects.map((project, index) => (
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            key={`${activeFilter}-${index}`}
            className="lg:mx-32 py-8 border-b border-neutral-300 flex flex-wrap justify-between items-center"
          >
            <div className="w-full lg:w-2/6 py-5 max-lg:py-0">
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 rounded-lg object-cover w-full h-auto"
              />
            </div>

            <div className=" w-full max-w-full lg:w-3/5 max-lg:justify-center max-lg:text-center">
              <h3 className="mb-1 text-2xl font-semibold">{project.title}</h3>

              <p className="mb-4 text-neutral-500 text-justify">
                {project.description}
              </p>
              <div className="flex flex-wrap max-lg:justify-center">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 py-2 mb-2 px-2 text-4xl inline-block rounded-md bg-neutral-300 "
                  >
                    {getIcon(tech)}
                  </span>
                ))}
              </div>
              <div className="flex items-center max-lg:justify-center mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
                >
                  Visit Website
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  type="button"
                  className=" inline-flex items-center justify-center px-0.5 py-0.5 text-center me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 group-hover:from-blue-500 group-hover:to-blue-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span className=" px-4 py-2 transition-all ease-in duration-75 bg-white text-blue-500 rounded-md group-hover:bg-opacity-0 hover:text-white">
                    {project.button}
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
