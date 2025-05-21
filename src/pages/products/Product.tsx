import Title from "../../components/Title";

const Product = () => {
  return (
    <section
      id="products"
      className="w-full min-h-screen flex flex-col justify-center items-center scroll-smooth"
    >
      <Title text="محصولات" />
      <div className="flex-1  w-full"></div>
    </section>
  );
};

export default Product;
