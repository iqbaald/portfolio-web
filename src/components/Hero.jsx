// import Carousel from "./Carousel";
import { HERO_CONTENT, IMAGE } from "../constants";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className=" lg:py-0 py-16 overflow-hidden">
      <div className="xl:w-4/5 px-6 max-w-[1400px] mx-auto relative lg:h-[70vh] flex flex-col justify-center">
        <div className="absolute top-24 right-40 lg:block hidden">
          <p className="lg:text-[12rem] font-semibold opacity-10 text-dark italic -tracking-widest">
            Dhoifulloh
          </p>
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="h-full flex justify-center items-center w-full lg:w-1/3 lg:absolute right-0  overflow-hidden"
        >
          <div className="bg-gradient-to-t from-color1 to-color2 rounded-lg shadow relative lg:w-64 w-64 lg:h-74 h-64 "></div>

          <img
            src={IMAGE}
            alt=""
            className=" w-4/5 sm:w-4/12 lg:w-11/12 absolute lg:pl-30 lg:pb-31 pb-160 z-10"
          />
        </motion.div>

        <div className="lg:absolute lg:w-2/4 z-20 ">
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-lg:text-center text-gray-500 text-xl font-bold"
          >
            I am a
          </motion.p>
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className=" text-5xl max-lg:text-center font-bold py-3 bg-gradient-to-t from-cyan-500  to-color2 inline-block text-transparent bg-clip-text"
          >
            Frontend Developer
          </motion.h2>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-blue-950 text-justify"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>

        {/* <div className="rounded-full shadow-2xl bg-gradient-to-r from-color2 to-color1 h-40 w-40 absolute right-[10%] lg:mt-32 lg:flex hidden items-center justify-center">
          <Carousel />
        </div> */}
      </div>
    </div>
  );
}
