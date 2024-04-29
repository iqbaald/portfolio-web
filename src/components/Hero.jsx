// import Carousel from "./Carousel";
import { HERO_CONTENT, IMAGE } from "../constants";

export default function Hero() {
  return (
    <div className=" lg:py-0 py-16 overflow-hidden">
      <div className="xl:w-4/5 px-6 max-w-[1400px] mx-auto relative lg:h-[70vh] flex flex-col justify-center">
        <div className="absolute top-24 right-40 lg:block hidden">
          <p className="lg:text-[12rem] font-semibold opacity-10 text-dark italic -tracking-widest">
            Dhoifulloh
          </p>
        </div>

        <div className="h-full flex justify-center items-center w-full lg:w-1/3 lg:absolute right-0  overflow-hidden">
          <div className="bg-gradient-to-t from-color1 to-color2 rounded-lg shadow relative lg:w-64 w-64 lg:h-74 h-64 "></div>

          <img
            src={IMAGE}
            alt=""
            className=" w-4/5 sm:w-4/12 lg:w-11/12 absolute lg:pl-30 lg:pb-31 pb-160 z-10"
          />
        </div>

        <div className="lg:absolute lg:w-2/4 z-20 ">
          <p className="max-lg:text-center text-gray-500 text-xl font-bold">
            I am a
          </p>
          <h2 className=" text-5xl max-lg:text-center font-bold py-3 bg-gradient-to-t from-cyan-500  to-color2 inline-block text-transparent bg-clip-text">
            Frontend Developer
          </h2>
          <p className="text-blue-950 text-justify">{HERO_CONTENT}</p>
        </div>

        {/* <div className="rounded-full shadow-2xl bg-gradient-to-r from-color2 to-color1 h-40 w-40 absolute right-[10%] lg:mt-32 lg:flex hidden items-center justify-center">
          <Carousel />
        </div> */}
      </div>
    </div>
  );
}