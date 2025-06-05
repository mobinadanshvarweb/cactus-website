// ProductCard.tsx

import type { Product } from "./types";

type Props = {
  product: Product;
  onShowDetails: (product: Product) => void;
};

const ProductCard = ({ product, onShowDetails }: Props) => {
  return (
    <article className="shadow-lg rounded-lg p-4 flex flex-col items-center bg-white hover:scale-[102%] transition-all duration-500">
      <img
        src={product.image}
        alt={`تصویر ${product.name}`}
        className="w-full h-40 object-contain rounded"
        loading="lazy"
      />
      <div className="flex flex-col gap-2 w-full">
        <div className="flex  w-full  items-center mt-3">
          <h3 className="font-bold text-lg text-[#393a3f] flex-1  flex ">
            {product.name}
          </h3>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <button
          onClick={() => onShowDetails(product)}
          className="w-full py-3 bg-[#bdc4ce] rounded justify-center items-center text-lg text-[#2c8039] flex cursor-pointer mt-4 hover:bg-[#2c8039] hover:text-[#bdc4ce] transition duration-300"
          aria-label={`نمایش جزئیات ${product.name}`}
        >
          نمایش جزئیات
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
