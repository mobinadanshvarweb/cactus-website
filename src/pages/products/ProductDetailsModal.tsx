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
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg max-w-lg w-full p-6 relative shadow-lg overflow-y-auto max-h-[80vh]"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
          aria-label="بستن جزئیات محصول"
        >
          &times;
        </button>
        <img
          src={product.image}
          alt={`تصویر محصول ${product.name}`}
          className="w-full h-48 object-contain rounded mb-4"
          loading="lazy"
        />
        <h2 id="modal-title" className="text-2xl font-bold mb-2">
          {product.name}
        </h2>
        <p id="modal-description" className="text-gray-800">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
