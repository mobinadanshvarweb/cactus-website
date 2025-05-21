// ProductCard.tsx

import type { Product } from "./types";

type Props = {
  product: Product;
  onShowDetails: (product: Product) => void;
};

const ProductCard = ({ product, onShowDetails }: Props) => {
  return (
    <div className="shadow-lg rounded-lg p-4 flex flex-col items-center bg-white hover:scale-[102%] transition-all duration-500">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between w-full  items-center mt-3">
          <h3 className="font-bold text-lg text-[#393a3f] w-1/2  flex ">
            {product.name}
          </h3>
          <p className="text-[#393a3f] w-1/2 text-xs  flex justify-end">
            کد: {product.code}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <p className="text-[#2c8039] font-semibold w-1/2">{product.price}</p>
        <span
          onClick={() => onShowDetails(product)}
          className="w-1/2  text-xs flex justify-end underline cursor-pointer"
        >
          نمایش جزئیات
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
