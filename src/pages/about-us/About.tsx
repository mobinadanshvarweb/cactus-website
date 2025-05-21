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
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم
                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                برای نگ پیشگیرد.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
