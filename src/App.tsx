import { PiCactus } from "react-icons/pi";
import Title from "./components/Title";
import MyMap from "./components/Map";
const App = () => {
  return (
    <div className="w-full flex flex-col min-h-screen justify-center items-center font-myFont">
      <header className="w-full min-h-screen bg-red-300 relative">
        <img
          src="/imgs/banner.jpg"
          alt="banner"
          className="w-full h-screen object-cover"
        />
        <span className="absolute top-0 left-0 w-full h-screen z-10 bg-black/75"></span>
        <h1 className="absolute w-full flex justify-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-4xl sm:text-6xl md:text-8xl  lg:text-9xl font-bold z-20 text-white text-shadow-2xs">
          استیل کاکتوس
        </h1>
        <nav className="absolute top-0 left-0 w-full  p-3 z-20  flex justify-between px-8">
          <ul className="flex-1  flex items-center gap-6 justify-start text-green-700 text-xl">
            <li className="text-shadow-lg cursor-pointer ">محصولات</li>
            <li className="text-shadow-lg cursor-pointer ">درباره ما</li>
            <li className="text-shadow-lg cursor-pointer ">تماس با ما</li>
          </ul>
          <div className="">
            <PiCactus size={40} className="text-green-700 text-shadow-lg" />
          </div>
        </nav>
      </header>
      {/* about us */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center">
        <Title text="درباره ما" />
        <div className="flex-1 bg-gray-200 w-full"></div>
      </section>
      {/* products */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center">
        <Title text="محصولات" />
        <div className="flex-1 bg-gray-200 w-full"></div>
      </section>
      {/* contact */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center">
        <Title text="تماس با ما" />
        <div className="flex-1 bg-gray-200 w-full flex justify-center items-center">
          <div className="w-1/2"></div>
          <div className="w-1/2">
            <MyMap />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
