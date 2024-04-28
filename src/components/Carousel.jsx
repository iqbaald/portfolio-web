import { HiArrowNarrowRight } from "react-icons/hi";

export default function Carousel() {
  const slides = ["./img2.png", "./img4.png", "title.png"];
  return (
    <>
      <div className="h-32 w-3  rounded-full border border-solid border-gray-200">
        <img src={slides[1]} alt="image" className="w-full h-full m-auto" />
        {/* {slides.map((s) => {
          <img src={s} alt="image" className="w-full h-full m-auto" />;
        })} */}
        <button className="bg-dark text-white px-2 py-1 rounded-lg text-sm font-semibold absolute top-2 -left-2">
          My Toolkit
        </button>
        <button className="text-white bg-dark hover:bg-light  rounded-full shadow-2xl absolute w-10 h-10 top-16 right-[-24px] x-10 flex items-center justify-center">
          <HiArrowNarrowRight size={20} />
        </button>
        <p className="uppercase font-bold absolute -bottom-6 right-10 text-blue-950">
          React JS
        </p>
      </div>
    </>
  );
}
