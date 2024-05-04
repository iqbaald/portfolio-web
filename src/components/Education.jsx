import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <div className="px-6 pb-24 overflow-x-hidden">
      <h1 className="my-16 max-lg:mb-4 text-center text-4xl font-bold bg-gradient-to-b from-cyan-500  to-color2 text-transparent bg-clip-text">
        My Education Journey
      </h1>

      <div>
        {EDUCATION.map((education, index) => (
          <div
            key={index}
            className="mx-24 max-lg:mx-0 max-lg:w-[100%] max-lg:text-center mb-8 pb-8 flex flex-wrap lg:justify-center border-b border-neutral-300 "
          >
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full lg:w-1/4 mx-0"
            >
              <p className="mb-4 mtext-base text-blue-600">{education.year}</p>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full max-w-xl lg:w-full "
            >
              <div className="w-full max-w-xl lg:w-full ">
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
