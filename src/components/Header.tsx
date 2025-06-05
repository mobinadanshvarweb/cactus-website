import { useState } from "react";
import Navigation from "./Navigation";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import DesktopNav from "./DesktopNav";

const Header = () => {
  const [hamMenu, setHamMenu] = useState(false);

  return (
    <header className="w-full min-h-screen relative" role="banner">
      <img
        src="/imgs/banner.jpg"
        alt="تصویر بنر کارخانه استیل کاکتوس"
        className="w-full h-screen object-cover"
        loading="eager"
      />
      <span
        className="absolute top-0 left-0 w-full h-screen z-10 bg-black/75"
        aria-hidden="true"
      ></span>
      <h1
        className="absolute w-full flex justify-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-4xl sm:text-6xl md:text-8xl  lg:text-9xl font-bold z-20 text-white text-shadow-2xs"
        tabIndex={-1}
      >
        استیل کاکتوس
      </h1>

      <DesktopNav />

      {/* mobile nav (hamburger menu) */}
      <nav
        className="w-full flex justify-between p-3 absolute z-20 top-0 left-0 lg:hidden"
        role="navigation"
        aria-label="منوی اصلی"
      >
        <button
          aria-label={hamMenu ? "بستن منو" : "باز کردن منو"}
          aria-expanded={hamMenu}
          onClick={() => {
            setHamMenu(!hamMenu);
          }}
          className="text-green-700 text-shadow-lg"
        >
          <RxHamburgerMenu size={40} aria-hidden="true" />
        </button>

        <div>
          <img src="/imgs/Color Fill 2.png" alt="" className="w-32" />
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
          role="menu"
          aria-label="منوی موبایل"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="w-full p-3 text-left"
            aria-label="بستن منوی موبایل"
            onClick={() => {
              setHamMenu(false);
            }}
          >
            <IoClose size={30} className="text-[#393a3f]" />
          </button>
          <ul className="w-full flex flex-col gap-2">
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
            <li className="w-full flex justify-center items-center">
              <img
                src="/imgs/Color Fill 2.png"
                alt="لوگوی استیل کاکتوس"
                className="w-40"
              />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
