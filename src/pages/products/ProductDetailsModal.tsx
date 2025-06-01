// ProductDetailsModal.tsx

import type { Product } from "./types";

type Props = {
  product: Product | null;
  onClose: () => void;
};

const ProductDetailsModal = ({ product, onClose }: Props) => {
  if (!product) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 bg-opacity-50 flex justify-center items-center z-50 p-4"
    >
      <div className="bg-white rounded-lg max-w-lg w-full p-6 relative shadow-lg overflow-y-auto max-h-[80vh]">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
        >
          &times;
        </button>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain rounded mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-2">کد محصول: {product.code}</p>
        {/* <p className="text-green-600 font-semibold mb-4">{product.price}</p> */}
        <p className="text-gray-800">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
