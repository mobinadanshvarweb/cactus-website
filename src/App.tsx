import Product from "./pages/products/Product";
import Contact from "./pages/contact-us/Contact";
import About from "./pages/about-us/About";
import Header from "./components/Header";
import QuickAccess from "./components/QuickAccess";
import { FiPhone } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full flex flex-col min-h-screen justify-center items-center font-myFont relative">
      <QuickAccess
        classname="bottom-16"
        icon={<FiPhone size={20} />}
        text="تماس بگیرید"
        href="tel:+989007203922"
      />
      <QuickAccess
        classname="bottom-1"
        icon={<IoLogoWhatsapp size={26} />}
        text="پیام دهید"
        href="https://wa.me/989127203922"
      />
      <Header />
      <main className="flex flex-col gap-8">
        <About />
        <Product />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
