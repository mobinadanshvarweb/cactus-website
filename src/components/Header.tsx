import { useState } from "react";
import Navigation from "./Navigation";
import { PiCactus } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import DesktopNav from "./DesktopNav";

const Header = () => {
  const [hamMenu, setHamMenu] = useState(false);

  return (
    <header className="w-full min-h-screen relative">
      <img
        src="/imgs/banner.jpg"
        alt="banner"
        className="w-full h-screen object-cover"
      />
      <span className="absolute top-0 left-0 w-full h-screen z-10 bg-black/75"></span>
      <h1 className="absolute w-full flex justify-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-4xl sm:text-6xl md:text-8xl  lg:text-9xl font-bold z-20 text-white text-shadow-2xs">
        استیل کاکتوس
      </h1>

      <DesktopNav />
      {/* mobile nav (hamburgur menu) */}
      <nav className="w-full flex justify-between p-3 absolute z-20 top-0 left-0 lg:hidden">
        <div
          onClick={() => {
            setHamMenu(!hamMenu);
          }}
        >
          <RxHamburgerMenu
            size={40}
            className="text-green-700 text-shadow-lg"
          />
        </div>
        <div>
          <PiCactus size={40} className="text-green-700 text-shadow-lg" />
        </div>
      </nav>
      <div
        className={`fixed left-0 top-0 z-50 w-full  min-h-screen ${
          hamMenu ? "translate-x-[0]" : "translate-x-[100%]"
        }`}
        onClick={() => {
          setHamMenu(false);
        }}
      >
        <div
          className={`absolute  bg-[#bfc0b9] right-0 top-0 !z-50  shadow w-2/3 min-h-screen flex flex-col lg:hidden transition-all duration-500  ${
            hamMenu ? "translate-x-[0]" : "translate-x-[100%]"
          }`}
        >
          <span
            className="w-full p-3"
            onClick={() => {
              setHamMenu(false);
            }}
          >
            <IoClose size={30} className="text-[#393a3f]" />
          </span>
          <ul
            className="w-full flex flex-col gap-2"
            onClick={(e) => {
              e.stopPropagation();
              setHamMenu(false);
            }}
          >
            <Navigation
              href="#products"
              text="محصولات"
              classname="w-full flex justify-center items-center text-[#2c8039] font-bold text-xl my-2"
            />
            <Navigation
              href="#about"
              text="درباره ما"
              classname="w-full flex justify-center items-center text-[#2c8039] font-bold text-xl my-2"
            />
            <Navigation
              href="#contact"
              text="تماس با ما"
              classname="w-full flex justify-center items-center text-[#2c8039] font-bold text-xl my-2"
            />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
