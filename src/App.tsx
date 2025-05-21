import { PiCactus } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Product from "./pages/products/Product";
import Contact from "./pages/contact-us/Contact";
import About from "./pages/about-us/About";
import Navigation from "./components/Navigation";
const App = () => {
  const [hamMenu, setHamMenu] = useState(false);
  return (
    <div className="w-full flex flex-col min-h-screen justify-center items-center font-myFont">
      {/* header */}
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
        {/* desktop nav */}
        <nav className="absolute top-0 left-0 w-full  p-3 z-20 hidden  lg:flex justify-between px-8">
          <ul className="flex-1  flex items-center gap-6 justify-start text-green-700 text-xl">
            <Navigation
              href="#products"
              text="محصولات"
              classname="text-shadow-lg"
            />
            <Navigation
              href="#about"
              text="درباره ما"
              classname="text-shadow-lg"
            />
            <Navigation
              href="#contact"
              text="تماس با ما"
              classname="text-shadow-lg"
            />
          </ul>
          <div className="">
            <a href="#">
              <PiCactus size={40} className="text-green-700 text-shadow-lg" />
            </a>
          </div>
        </nav>
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
      </header>
      <About />
      <Product />
      <Contact />
      {/*  */}
      <section className="h-screen w-full"></section>
    </div>
  );
};

export default App;
