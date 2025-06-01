import Title from "../../components/Title";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col justify-center items-center scroll-smooth"
    >
      <Title text="درباره ما" />
      <div className="flex-1 w-full">
        <div className="bg-[url(/imgs/about.jpg)] bg-cover bg-center bg-fixed h-screen">
          <div className="w-full bg-black/50 h-full flex items-center justify-center p-10 lg:justify-start lg:p-16">
            <div className="w-full md:w-1/2 h-full bg-[#bfc0b9] custom-clip flex justify-center items-center">
              <div className="w-[80%] h-[90%]  text-justify overflow-y-scroll custom-scroll text-[#2c8039]">
                ما یک مجموعه‌ی تولیدی متخصص در زمینه ساخت تجهیزات آشپزخانه صنعتی
                از جنس استیل هستیم. با تکیه بر سال‌ها تجربه، دانش فنی و تیمی
                متعهد، تمرکز ما بر ارائه محصولاتی بادوام، کارآمد و مقرون‌به‌صرفه
                برای رستوران‌ها، کترینگ‌ها، هتل‌ها و مراکز پخت و پز صنعتی است.
                تمامی محصولات ما با استفاده از ورق‌های استیل ضدزنگ، با کیفیت
                بالا و مطابق با استانداردهای بهداشتی طراحی و تولید می‌شوند.
                رعایت اصول ایمنی، استحکام سازه و ظاهر حرفه‌ای، همواره از
                اولویت‌های ما بوده است. ما باور داریم که تجهیزات آشپزخانه صنعتی
                نه تنها باید کارایی بالایی داشته باشند، بلکه باید از نظر طراحی
                نیز پاسخگوی نیازهای روزمره پرسنل حرفه‌ای آشپزی باشند. به همین
                دلیل، هر محصول پیش از عرضه، تحت کنترل کیفی دقیق قرار می‌گیرد. از
                طراحی اولیه تا تولید نهایی، تمام فرآیندها در کارخانه‌ی ما
                به‌صورت یکپارچه انجام می‌شود تا بتوانیم محصولاتی با ثبات، قابل
                اعتماد و منطبق با نیاز بازار ارائه دهیم. همچنین خدمات مشاوره پیش
                از خرید، نصب، و پشتیبانی فنی از دیگر امتیازات ماست که باعث شده
                بسیاری از مشتریان ما، سال‌ها همکاری مستمر با ما داشته باشند.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
