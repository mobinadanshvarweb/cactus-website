import Navigation from "./Navigation";
import { PiCactus } from "react-icons/pi";

const DesktopNav = () => {
  return (
    <nav className="absolute top-0 left-0 w-full  p-3 z-20 hidden  lg:flex justify-between px-8">
      <ul className="flex-1  flex items-center gap-6 justify-start text-green-700 text-xl">
        <Navigation
          href="#products"
          text="محصولات"
          classname="text-shadow-lg"
        />
        <Navigation href="#about" text="درباره ما" classname="text-shadow-lg" />
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
  );
};

export default DesktopNav;
