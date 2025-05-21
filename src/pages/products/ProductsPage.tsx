// ProductsPage.tsx
import { useState } from "react";
import type { Product } from "./types";
import ProductsGrid from "./ProductsGrid";
import ProductDetailsModal from "./ProductDetailsModal";
import { toPersianDigits } from "../../util/convert-number-fa";

const products: Product[] = [
  // همین محصولات قبلی که تعریف کردی اینجا بذار
  {
    id: 1,
    name: "محصول اول",
    code: "P001",
    price: `${toPersianDigits("2,375,000")} تومان`,
    image: "/imgs/product1.jpg",
    description: "توضیحات کامل محصول اول...",
  },
  {
    id: 2,
    name: "محصول دوم",
    code: "P002",
    price: `${toPersianDigits("13,275,000")} تومان`,
    image: "/imgs/product2.jpg",
    description: "توضیحات کامل محصول دوم...",
  },
  // ... بقیه محصولات تا حداقل 10 تا
  {
    id: 3,
    name: "محصول سوم",
    code: "P003",
    price: `${toPersianDigits("22,075,000")} تومان`,
    image: "/imgs/product1.jpg",
    description: "توضیحات کامل محصول سوم...",
  },
  {
    id: 4,
    name: "محصول چهارم",
    code: "P004",
    price: `${toPersianDigits("3,475,000")} تومان`,
    image: "/imgs/product1.jpg",
    description: "توضیحات کامل محصول چهارم...",
  },
  {
    id: 5,
    name: "محصول پنجم",
    code: "P005",
    price: `${toPersianDigits("22,334,000")} تومان`,
    image: "/imgs/product1.jpg",
    description: "توضیحات کامل محصول پنجم...",
  },
  {
    id: 6,
    name: "محصول ششم",
    code: "P006",
    price: `${toPersianDigits("275,000")} تومان`,
    image: "/imgs/product1.jpg",
    description: "توضیحات کامل محصول ششم...",
  },
  {
    id: 7,
    name: "محصول هفتم",
    code: "P007",
    price: `${toPersianDigits("275,000")} تومان`,
    image: "/imgs/product1.jpg",
    description: "توضیحات کامل محصول هفتم...",
  },
  {
    id: 8,
    name: "محصول هشتم",
    code: "P008",
    price: `${toPersianDigits("275,000")} تومان`,
    image: "/imgs/product1.jpg",
    description: "توضیحات کامل محصول هشتم...",
  },
];

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <ProductsGrid products={products} onShowDetails={setSelectedProduct} />
      <ProductDetailsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default ProductsPage;
