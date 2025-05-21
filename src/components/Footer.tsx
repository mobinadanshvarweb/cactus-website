const Footer = () => {
  return (
    <footer className="bg-[#393a3f] text-[#bdc4ce] pt-10 pb-6 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* بخش معرفی */}
        <div>
          <h3 className="text-xl font-bold mb-4">درباره ما</h3>
          <p className="text-sm leading-6">
            ما یک تیم حرفه‌ای هستیم که با هدف ارائه بهترین خدمات و محصولات برای
            مشتریان تلاش می‌کنیم.
          </p>
        </div>

        {/* لینک‌های سریع */}
        <div>
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
            <li>
              <a href="#faq" className="hover:text-[#2ecc71] transition">
                سوالات متداول
              </a>
            </li>
          </ul>
        </div>

        {/* شبکه‌های اجتماعی */}
        <div>
          <h3 className="text-xl font-bold mb-4">ما را دنبال کنید</h3>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-[#2ecc71] transition">
              🌐
            </a>
            <a href="#" className="hover:text-[#2ecc71] transition">
              📱
            </a>
            <a href="#" className="hover:text-[#2ecc71] transition">
              📷
            </a>
            <a href="#" className="hover:text-[#2ecc71] transition">
              💬
            </a>
          </div>
        </div>
      </div>

      {/* کپی‌رایت */}
      <div className="mt-10 text-center text-xs border-t border-[#7f8c8d] pt-4">
        © {new Date().getFullYear()} تمامی حقوق محفوظ است | طراحی شده توسط
        <a
          target="_blank"
          href="https://mobinadaneshvar.vercel.app/"
          className="underline"
        >
          {" "}
          مبینا دانشور
        </a>
        ✨
      </div>
    </footer>
  );
};

export default Footer;
