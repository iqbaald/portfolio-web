import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose, MdOutlineMail } from "react-icons/md";
import { FaLinkedinIn, FaBehance, FaGithub } from "react-icons/fa";

import { useState } from "react";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <nav className="w-full lg:px-6 h-20 flex flex-col justify-center sticky top-0 z-50 bg-gradient-to-r from-color1 to-color2 lg:shadow-2xl">
      <div className="w-full">
        <div className="lg:w-4/5 w-11/12 mx-auto h-full flex justify-between items-center">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2 cursor-pointer">
              <h2 className="text-white font-bold text-lg">IqbaalDhoifulloh</h2>
            </div>
          </div>
          {/* <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
            <a
              href="#"
              className="leading-normal no-underline text-white text-lg hover:text-dark"
            >
              Home
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-white text-lg hover:text-dark"
            >
              Portofolio
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-white text-lg hover:text-dark"
            >
              CV
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-white text-lg hover:text-dark"
            >
              Contact
            </a>
          </ul> */}
          <div className="flex gap-4 max-lg:hidden">
            <a
              href="https://www.linkedin.com/in/muhamad-iqbaal-dhoifulloh-8841b3295/"
              className="bg-dark rounded-full shadow h-10 w-10 outline-none text-white hover:bg-white hover:text-dark cursor-pointer text-base transition-bg hover:border-dark"
            >
              <FaLinkedinIn className="w-full h-full p-2" />
            </a>
            <a
              href="https://www.behance.net/iqbaal"
              className="bg-dark rounded-full shadow h-10 w-10 outline-none text-white hover:bg-white hover:text-dark cursor-pointer text-base transition-bg hover:border-dark"
            >
              <FaBehance className="w-full h-full p-2" />
            </a>
            <a
              href="https://github.com/iqbaald"
              className="bg-dark rounded-full shadow h-10 w-10 outline-none text-white hover:bg-white hover:text-dark cursor-pointer text-base transition-bg hover:border-dark"
            >
              <FaGithub className="w-full h-full p-2" />
            </a>
            <a
              href="mailto:iqbaaldhoifulloh@gmail.com"
              className="bg-dark rounded-full shadow h-10 w-10 outline-none text-white hover:bg-white hover:text-dark cursor-pointer text-base transition-bg hover:border-dark"
            >
              <MdOutlineMail className="w-full h-full p-2" />
            </a>
          </div>

          {/* tombol dropdown */}
          {dropdown ? (
            <div
              onClick={showDropdown}
              className="lg:hidden text-[22px] cursor-pointer text-black"
            >
              <MdClose />
            </div>
          ) : (
            <div
              onClick={showDropdown}
              className="lg:hidden text-[22px] cursor-pointer text-black"
            >
              <HiMenuAlt3 />
            </div>
          )}
        </div>
        {dropdown && (
          <div className="lg:hidden w-full fixed top-[4.5rem] bg-gradient-to-r from-color1 to-color2  transition-all">
            <div className="w-full flex flex-col items-baseline gap-4 p-4 pt-0">
              <ul className="flex flex-col justify-center w-full">
                <a
                  href="#"
                  className="flex justify-center py-2 leading-normal no-underline text-white text-lg hover:text-dark"
                >
                  Linkedin
                </a>
                <a
                  href="#"
                  className="flex justify-center py-2 leading-normal no-underline text-white text-lg hover:text-dark"
                >
                  Behance
                </a>
                <a
                  href="#"
                  className="flex justify-center py-2 leading-normal no-underline text-white text-lg hover:text-dark"
                >
                  Github
                </a>
                <a
                  href="#"
                  className="flex justify-center py-2 leading-normal no-underline text-white text-lg hover:text-dark"
                >
                  Email
                </a>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
