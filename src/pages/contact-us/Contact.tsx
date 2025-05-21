import MyMap from "../../components/Map";
import Title from "../../components/Title";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex flex-col justify-center items-center scroll-smooth"
    >
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
  );
};

export default Contact;
