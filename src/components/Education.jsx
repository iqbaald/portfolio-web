import { EDUCATION } from "../constants";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaVuejs,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";

import { SiMongodb, SiTailwindcss, SiJavascript } from "react-icons/si";

export default function Education() {
  const iconTech = {
    HTML: <FaHtml5 className="text-orange-500" />,
    CSS: <FaCss3Alt className="text-blue-500" />,
    JavaScript: <SiJavascript className="text-yellow-400" />,
    Bootstrap: <FaBootstrap className=" text-purple-500" />,
    Tailwind: <SiTailwindcss className="text-sky-500" />,
    Vue: <FaVuejs className="text-green-500" />,
    React: <FaReact className="text-cyan-500" />,
    MongoDB: <SiMongodb className="text-green-500" />,
    Node: <FaNodeJs className="text-green-700" />,
  };

  const getIcon = (tech) => {
    return iconTech[tech];
  };
  return (
    <div className="px-6 pb-24">
      <h1 className="my-16 max-lg:mb-4 text-center text-4xl font-bold bg-gradient-to-b from-cyan-500  to-color2 text-transparent bg-clip-text">
        My Education
      </h1>

      <div>
        {EDUCATION.map((education, index) => (
          <div
            key={index}
            className="mx-24 mb-8 pb-8 flex flex-wrap lg:justify-center border-b border-neutral-300"
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-blue-600">{education.year}</p>
            </div>

            <div className="w-full max-w-xl lg:w-full ">
              <div className="w-full max-w-xl lg:w-full">
                <h6 className="mb-2 font-semibold">
                  {education.role} -{" "}
                  <span className="text-sm text-blue-600">
                    {" "}
                    {education.company}
                  </span>
                </h6>

                <p className="mb-4 text-neutral-400">{education.description}</p>

                {education.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 py-2 px-2 text-2xl inline-block rounded-md bg-neutral-300 "
                  >
                    {getIcon(tech)}
                  </span>
                ))}
              </div>
            </div>
            {/* <div className="w-full h-60 lg:w-2/6 py-5 "></div>

            <div className=" w-full max-w-full lg:w-3/5 max-lg:justify-center max-lg:text-center">
              <div className="mb-2 text-sm py-1 px-2 rounded bg-neutral-300 inline-flex items-center  max-lg:justify-center">
                <MdOutlineDateRange className="mr-2" />
                {education.year}
              </div>
              <h3 className="mb-1 text-2xl font-semibold">{education.title}</h3>

              <p className="mb-4 text-neutral-500 text-justify">
                {education.role}
              </p>

              {education.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 py-2 px-2 text-2xl inline-block rounded-md bg-neutral-300 "
                >
                  {getIcon(tech)}
                </span>
              ))}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
