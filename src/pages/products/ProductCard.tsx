// ProductCard.tsx

import type { Product } from "./types";

type Props = {
  product: Product;
  onShowDetails: (product: Product) => void;
};

const ProductCard = ({ product, onShowDetails }: Props) => {
  return (
    <div className="shadow-lg rounded-lg p-4 flex flex-col items-center bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="mt-3 font-bold text-lg">{product.name}</h3>
      <p className="text-[#393a3f]">کد: {product.code}</p>
      <p className="text-[#2c8039] font-semibold mt-1">{product.price}</p>
      <button
        onClick={() => onShowDetails(product)}
        className="bg-[#2c8039] hover:bg-[#398f35] text-white rounded px-4 py-2 mt-4"
      >
        مشاهده جزئیات
      </button>
    </div>
  );
};

export default ProductCard;
