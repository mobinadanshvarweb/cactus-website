import { PiCactus } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
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
        <div className="flex-1 w-full flex flex-wrap justify-center items-center ">
          <div className="w-full lg:w-1/2 px-3 lg:px-16 bg-[#393a3f] flex flex-col gap-4 items-center justify-center  text-[#bdc4ce] h-[400px] py-16 lg:py-0">
            <div className="flex w-full h-1/2 items-center justify-center">
              <div className="w-full flex flex-wrap gap-1 justify-center items-center">
                <div className="flex w-full flex-col lg:flex-row justify-center items-center gap-2">
                  <div className="flex flex-col lg:flex-row justify-center items-center">
                    <span>
                      <IoLocationOutline size={50} />
                    </span>
                    <p className="cursor-auto text-xl">آدرس:</p>
                  </div>
                  <p className="flex-1 text-lg text-center">
                    شهرستان پاکدشت، شریف آباد، شهرک صنعتی شن زار
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap h-fit lg:h-1/2 w-full">
              <div className="w-full flex flex-wrap gap-1 justify-center items-center">
                <div className="flex w-full flex-col lg:flex-row justify-center items-center gap-2">
                  <div className="flex flex-col lg:flex-row justify-center items-center gap-1">
                    <span>
                      <FiPhone size={40} />
                    </span>
                    <p className="cursor-auto text-xl">شماره تماس:</p>
                  </div>
                  <div className="w-full flex flex-col flex-1 gap-4">
                    <div className="flex flex-wrap w-full">
                      <span className="w-1/2 flex justify-center items-center">
                        09127203922
                      </span>
                      <span className="w-1/2 flex justify-center items-center">
                        02135000252
                      </span>
                    </div>
                    <div className="flex flex-wrap">
                      <span className="w-1/2 flex justify-center items-center">
                        09127203922
                      </span>
                      <span className="w-1/2 flex justify-center items-center">
                        02135000252
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex items-center">
            <MyMap />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
