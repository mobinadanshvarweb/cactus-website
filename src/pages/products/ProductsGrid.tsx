import { useState } from "react";
import type { Product } from "./types";
import ProductCard from "./ProductCard";

type Props = {
  products: Product[];
  onShowDetails: (product: Product) => void;
  initialVisibleCount?: number; // تعداد اولیه قابل نمایش
  incrementCount?: number; // هر بار چندتا اضافه شه
};

const ProductsGrid = ({
  products,
  onShowDetails,
  initialVisibleCount = 3,
  incrementCount = 3,
}: Props) => {
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + incrementCount, products.length));
  };

  const showLess = () => {
    setVisibleCount(initialVisibleCount);
  };

  const isShowingAll = visibleCount === products.length;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.slice(0, visibleCount).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onShowDetails={onShowDetails}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        {!isShowingAll ? (
          <button
            onClick={showMore}
            className="bg-[#2c8039] text-white px-6 py-2 rounded hover:bg-[#398f35] transition"
          >
            نمایش بیشتر
          </button>
        ) : (
          <a
            href="#products"
            onClick={showLess}
            className="flex bg-gray-300 text-[#393a3f] px-6 py-2 rounded hover:bg-gray-400 transition"
          >
            نمایش کمتر
          </a>
        )}
      </div>
    </>
  );
};

export default ProductsGrid;
