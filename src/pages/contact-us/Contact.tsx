import MyMap from "../../components/Map";
import Title from "../../components/Title";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { toPersianDigits } from "../../util/convert-number-fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full  flex flex-col justify-center items-center scroll-smooth border-b-2 border-[#bfc0b9]"
    >
      <Title text="تماس با ما" />
      <div className="flex-1 w-full flex flex-wrap justify-end items-center bg-[#393a3f] lg:bg-white">
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
                    <span className="w-1/2 flex justify-center lg:justify-end items-center">
                      <a href="tel:02134754">{toPersianDigits("02134754")}</a>
                    </span>
                    <span className="w-1/2 flex justify-center lg:justify-end items-center">
                      <a href="tel:02135000252">
                        {toPersianDigits("02135000252")}
                      </a>
                    </span>
                  </div>
                  <div className="flex flex-wrap">
                    <span className="w-1/2 flex justify-center lg:justify-end items-center">
                      <a href="tel:+989007203922">
                        {toPersianDigits("09007203922")}
                      </a>
                    </span>
                    <span className="w-1/2 flex justify-center lg:justify-end items-center">
                      <a href="https://wa.me/989127203922">
                        {toPersianDigits("09127203922")}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center h-[400px] bg-[#393a3f]">
          <MyMap />
        </div>
      </div>
    </section>
  );
};

export default Contact;
