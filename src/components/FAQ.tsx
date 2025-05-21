import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "چگونه می‌توانم ثبت‌نام کنم؟",
    answer:
      "برای ثبت‌نام، روی دکمه ورود یا ثبت‌نام در بالا کلیک کنید و مراحل را دنبال نمایید.",
  },
  {
    question: "آیا امکان لغو سفارش وجود دارد؟",
    answer:
      "بله، شما می‌توانید تا ۲۴ ساعت پس از ثبت سفارش، آن را از طریق پنل کاربری لغو کنید.",
  },
  {
    question: "چطور با پشتیبانی تماس بگیرم؟",
    answer:
      "از طریق فرم تماس با ما یا شماره تلفن درج‌شده در پایین سایت می‌توانید با ما در ارتباط باشید.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0); // اولین آیتم باز است

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="w-full  mx-auto p-4 space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = index === activeIndex;
        return (
          <div
            key={index}
            className="w-full rounded-lg overflow-hidden my-8 transition-all duration-300 bg-white shadow"
          >
            <button
              onClick={() => toggle(index)}
              className={`w-full flex lg:text-2xl justify-between items-center px-3 lg:px-6 py-4 text-right text-[#bfc0b9] font-semibold transition ${
                isOpen ? "bg-[#2c8039]" : "bg-[#393a3f] hover:bg-[#2c8039]"
              }`}
            >
              <span>{faq.question}</span>
              <FaChevronDown
                className={`transform transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`px-4 overflow-hidden transition-all duration-300 text-lg text-[#393a3f] ${
                isOpen ? "max-h-40 py-2" : "max-h-0"
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
