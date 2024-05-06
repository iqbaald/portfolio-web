import { useState } from "react";
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

export default function Education() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredEducation = EDUCATION.filter((project) => {
    let year = project.year;
    if (activeFilter === "2021") {
      return project.year.includes("2021");
    } else if (activeFilter === "2022") {
      return year.includes("2022") || year.includes("Present");
    } else if (activeFilter === "2023") {
      return year.includes("2023") || year.includes("Present");
    } else if (activeFilter === "2024") {
      return year.includes("2024") || year.includes("Present");
    }
    return true;
  });

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div id="education" className="px-6  overflow-x-hidden">
      <h1 className="pt-24  max-lg:mb-1  text-center text-4xl font-bold bg-gradient-to-b from-cyan-500  to-color2 text-transparent bg-clip-text">
        My Education Journey
      </h1>

      <div className="flex justify-center mt-4 mb-8 xs:mt-0">
        <button
          onClick={() => handleFilterChange("All")}
          className={`flex items-center justify-center px-3 max-lg:py-5 h-8 max-lg:w-1/4 text-sm max-lg:text-xs font-medium border-e text-white rounded-s ${
            activeFilter === "All"
              ? "bg-blue-700"
              : "bg-blue-400 hover:bg-blue-500"
          }`}
        >
          All Edcuation
        </button>
        <button
          onClick={() => handleFilterChange("2021")}
          className={`flex items-center justify-center px-3 max-lg:py-5  h-8 max-lg:w-1/4  text-sm max-lg:text-xs  font-medium max-lg:font-base text-white  border-e  ${
            activeFilter === "2021"
              ? "bg-blue-700"
              : "bg-blue-400 hover:bg-blue-500"
          }`}
        >
          2021
        </button>
        <button
          onClick={() => handleFilterChange("2022")}
          className={`flex items-center justify-center px-3 max-lg:py-5  h-8 max-lg:w-1/4  text-sm max-lg:text-xs  font-medium max-lg:font-base text-white  border-e  ${
            activeFilter === "2022"
              ? "bg-blue-700"
              : "bg-blue-400 hover:bg-blue-500"
          }`}
        >
          2022
        </button>
        <button
          onClick={() => handleFilterChange("2023")}
          className={`flex items-center justify-center px-3 max-lg:py-5  h-8 max-lg:w-1/4  text-sm max-lg:text-xs  font-medium max-lg:font-base text-white   border-e  ${
            activeFilter === "2023"
              ? "bg-blue-700"
              : "bg-blue-400 hover:bg-blue-500"
          }`}
        >
          2023
        </button>
        <button
          onClick={() => handleFilterChange("2024")}
          className={`flex items-center justify-center px-3 max-lg:py-5  h-8 max-lg:w-1/4  text-sm max-lg:text-xs  font-medium max-lg:font-base text-white rounded-e  ${
            activeFilter === "2024"
              ? "bg-blue-700"
              : "bg-blue-400 hover:bg-blue-500"
          }`}
        >
          2024
        </button>
      </div>

      <div>
        {filteredEducation.map((education, index) => (
          <div
            key={`${activeFilter} - ${index}`}
            className="mx-24 max-lg:mx-0 max-lg:w-3/3 max-lg:text-center  mb-8 pb-8 flex flex-wrap lg:justify-center border-b border-neutral-300  "
          >
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/4 mx-0"
            >
              <p className="mb-4 text-base text-blue-600">{education.year}</p>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-2/3 "
            >
              <div className="w-full lg:w-full ">
                <h6 className="mb-2 text-base font-semibold">
                  {education.role} -{" "}
                  <span className="text-base text-blue-600">
                    {" "}
                    {education.company}
                  </span>
                </h6>

                <p className="mb-6 text-neutral-400 max-lg:text-justify">
                  {education.description}
                </p>
                <a
                  href={education.link}
                  target="_blank"
                  type="button"
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  {education.button}
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
