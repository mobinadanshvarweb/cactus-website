// ProductsPage.tsx
import { useState } from "react";
import type { Product } from "./types";
import ProductsGrid from "./ProductsGrid";
import ProductDetailsModal from "./ProductDetailsModal";

const products: Product[] = [
  {
    id: 1,
    name: "سینی پذیرایی",
    code: "P004",
    image: "/imgs/04-min.jpg",
    description: "سینی پذیرایی ، پنج سایز و ضخامتهای مختلف",
  },
  {
    id: 2,
    name: "سینی ساندویچی",
    code: "P005",
    image: "/imgs/05-min.jpg",
    description: "سینی ساندویچی ، در پنج سایز و ضخامتهای مختلف",
  },
  {
    id: 3,
    name: "قوطی ادویه",
    code: "P006",
    image: "/imgs/06-min.jpg",
    description: "قوطی ادویه",
  },
  {
    id: 4,
    name: "بیل استیل",
    code: "P007",
    image: "/imgs/07-min.jpg",
    description: "بیل استیل",
  },
  {
    id: 5,
    name: "حسوم استیل",
    code: "P008",
    image: "/imgs/08-min.jpg",
    description: "حسوم استیل ، دسته چوب خور ، دسته بلند استیل",
  },
  {
    id: 6,
    name: "کفگیر استیل",
    code: "P009",
    image: "/imgs/09-min.jpg",
    description: "کفگیر استیل ، قطرهای مختلف و دسته های متنوع",
  },
  {
    id: 7,
    name: "سینی مواد غذایی گود",
    code: "P010",
    image: "/imgs/10-min.jpg",
    description: "سینی مواد غذایی گود ، در دو سایز",
  },
  {
    id: 8,
    name: "حلب بر استیل ، مخصوص حلب های بزرگ",
    code: "P012",
    image: "/imgs/12-min.jpg",
    description: "حلب بر استیل ، مخصوص حلب های بزرگ",
  },
  {
    id: 9,
    name: "سینی سلف سرویس دو خانه",
    code: "P013",
    image: "/imgs/13-min.jpg",
    description: "سینی سلف سرویس دو خانه استیل",
  },
  {
    id: 10,
    name: "سینی سلف سرویس  چهارخانه",
    code: "P014",
    image: "/imgs/14-min.jpg",
    description:
      "سینی سلف سرویس  چهارخانه استیل، سایزهای متنوع و ضخامتهای مختلف",
  },
  {
    id: 11,
    name: "سینی سلف سرویس شش خانه ",
    code: "P015",
    image: "/imgs/15-min.jpg",
    description: "سینی سلف سرویس شش خانه استیل",
  },
  {
    id: 12,
    name: "سینی سلف سرویس سه خانه ",
    code: "P016",
    image: "/imgs/16-min.jpg",
    description: "سینی سلف سرویس سه خانه استیل",
  },
  {
    id: 13,
    name: "ملاقه استیل",
    code: "P017",
    image: "/imgs/17-min.jpg",
    description: "ملاقه استیل ، پنج سایز",
  },
  {
    id: 14,
    name: "سینی قنادی",
    code: "P018",
    image: "/imgs/18-min.jpg",
    description: "سینی قنادی ، دو سایز و ضخامتهای مختلف",
  },
  {
    id: 15,
    name: "فلاسک برقی و بدون برق",
    code: "P019",
    image: "/imgs/19-min.jpg",
    description: "فلاسک برقی و بدون برق ، 10 لیتر ، 20لیتر، 30لیتر، 40لیتر",
  },
  {
    id: 16,
    name: "پارو استیل",
    code: "P020",
    image: "/imgs/20-min.jpg",
    description: "پارو استیل",
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
