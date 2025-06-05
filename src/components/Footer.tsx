import { FaInstagram, FaTelegram, FaWhatsapp, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#393a3f] text-[#bdc4ce] pt-10 pb-6 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* معرفی */}
        <div>
          <h3 className="text-xl font-bold mb-4">درباره ما</h3>
          <p className="text-sm leading-6">
            ما یک تیم حرفه‌ای هستیم که با هدف ارائه بهترین خدمات و محصولات برای
            مشتریان تلاش می‌کنیم.
          </p>
        </div>

        {/* لینک‌های سریع */}
        <nav aria-label="لینک‌های دسترسی سریع">
          <h3 className="text-xl font-bold mb-4">دسترسی سریع</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#products" className="hover:text-[#2ecc71] transition">
                محصولات
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#2ecc71] transition">
                درباره ما
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#2ecc71] transition">
                تماس با ما
              </a>
            </li>
          </ul>
        </nav>

        {/* شبکه‌های اجتماعی */}
        <div>
          <h3 className="text-xl font-bold">ما را دنبال کنید</h3>
          <div className="flex gap-4 text-xl  items-center">
            <a
              href="#"
              rel="noopener noreferrer"
              aria-label="وب‌سایت"
              className="hover:text-[#2ecc71] transition"
            >
              <FaGlobe />
            </a>
            <a
              href="tel:+989007203922"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تلگرام"
              className="hover:text-[#2ecc71] transition"
            >
              <FaTelegram />
            </a>
            <a
              href="https://www.instagram.com/steel.cactus"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="اینستاگرام"
              className="hover:text-[#2ecc71] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/989127203922"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="واتساپ"
              className="hover:text-[#2ecc71] transition"
            >
              <FaWhatsapp />
            </a>
            <div className="flex">
              <img
                src="/imgs/Color Fill 2.png"
                alt="لوگوی استیل کاکتوس"
                className=" w-40"
              />
            </div>
          </div>
        </div>
      </div>

      {/* کپی‌رایت */}
      <div className="mt-10 text-center text-xs border-t border-[#7f8c8d] pt-4">
        © {new Date().getFullYear()} تمامی حقوق محفوظ است | طراحی شده توسط
        <a
          target="_blank"
          href="https://mobinadaneshvar.vercel.app/"
          rel="noopener noreferrer"
          className="underline"
        >
          {" "}
          <strong>مبینا دانشور</strong>
        </a>
        ✨
      </div>
    </footer>
  );
};

export default Footer;
