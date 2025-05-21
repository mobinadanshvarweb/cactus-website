// ProductCard.tsx

import type { Product } from "./types";

type Props = {
  product: Product;
  onShowDetails: (product: Product) => void;
};

const ProductCard = ({ product, onShowDetails }: Props) => {
  return (
    <div
      onClick={() => onShowDetails(product)}
      className="shadow-lg rounded-lg p-4 flex flex-col items-center bg-white cursor-pointer hover:scale-105 transition-all duration-300"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="mt-3 font-bold text-lg text-[#393a3f]">{product.name}</h3>
      <p className="text-[#393a3f]">کد: {product.code}</p>
      <p className="text-[#2c8039] font-semibold mt-1">{product.price}</p>
    </div>
  );
};

export default ProductCard;
