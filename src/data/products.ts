import { Product } from "@/types/product";
import tshirt1 from "@/assets/tshirt-1.jpg";
import tshirt2 from "@/assets/tshirt-2.jpg";
import tshirtWhite from "@/assets/tshirt-white.jpg";
import tshirtNavy from "@/assets/tshirt-navy.jpg";
import tshirtGrey from "@/assets/tshirt-grey.jpg";
import hoodie1 from "@/assets/hoodie-1.jpg";
import hoodie2 from "@/assets/hoodie-2.jpg";
import hoodieNavy from "@/assets/hoodie-navy.jpg";
import hoodieCharcoal from "@/assets/hoodie-charcoal.jpg";
import hoodieCream from "@/assets/hoodie-cream.jpg";
import jacket1 from "@/assets/jacket-1.jpg";
import jacketNavy from "@/assets/jacket-navy.jpg";
import trouser1 from "@/assets/trouser-1.jpg";
import trouserNavy from "@/assets/trouser-navy.jpg";
import shirt1 from "@/assets/shirt-1.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Black Tee",
    category: "T-Shirts",
    price: 4500,
    image: tshirt1,
    description: "Premium quality t-shirt with minimalist gold logo, available in multiple colors",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colorVariants: [
      { name: "Black", image: tshirt1 },
      { name: "White", image: tshirtWhite },
      { name: "Navy", image: tshirtNavy },
      { name: "Grey", image: tshirtGrey },
    ],
  },
  {
    id: "2",
    name: "Classic White Tee",
    category: "T-Shirts",
    price: 4200,
    image: tshirt2,
    description: "Elegant cotton t-shirt with subtle gold embroidery, multiple color options",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colorVariants: [
      { name: "White", image: tshirtWhite },
      { name: "Black", image: tshirt1 },
      { name: "Navy", image: tshirtNavy },
      { name: "Grey", image: tshirtGrey },
    ],
  },
  {
    id: "3",
    name: "Luxury Black Hoodie",
    category: "Hoodies",
    price: 12500,
    image: hoodie1,
    description: "Premium hoodie with gold zipper detail, available in luxury colors",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colorVariants: [
      { name: "Black", image: hoodie1 },
      { name: "Navy", image: hoodieNavy },
      { name: "Charcoal", image: hoodieCharcoal },
      { name: "Burgundy", image: hoodie1 },
    ],
  },
  {
    id: "4",
    name: "Signature White Hoodie",
    category: "Hoodies",
    price: 12000,
    image: hoodie2,
    description: "Premium hoodie with signature black and gold logo, multiple colors",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colorVariants: [
      { name: "White", image: hoodie2 },
      { name: "Cream", image: hoodieCream },
      { name: "Light Grey", image: hoodieCharcoal },
      { name: "Beige", image: hoodieCream },
    ],
  },
  {
    id: "5",
    name: "Executive Bomber Jacket",
    category: "Jackets",
    price: 25000,
    image: jacket1,
    description: "Luxury bomber jacket with gold hardware, premium color options",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colorVariants: [
      { name: "Black", image: jacket1 },
      { name: "Navy", image: jacketNavy },
      { name: "Olive Green", image: jacket1 },
      { name: "Brown", image: jacket1 },
    ],
  },
  {
    id: "6",
    name: "Formal Black Trousers",
    category: "Trousers",
    price: 15000,
    image: trouser1,
    description: "Premium formal trousers with gold button detail, classic colors",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colorVariants: [
      { name: "Black", image: trouser1 },
      { name: "Navy", image: trouserNavy },
      { name: "Charcoal", image: trouser1 },
      { name: "Khaki", image: trouser1 },
    ],
  },
  {
    id: "7",
    name: "Executive Dress Shirt",
    category: "Shirts",
    price: 8500,
    image: shirt1,
    description: "Professional dress shirt with gold cufflinks, versatile colors",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colorVariants: [
      { name: "Black", image: shirt1 },
      { name: "White", image: shirt1 },
      { name: "Navy", image: shirt1 },
      { name: "Light Blue", image: shirt1 },
    ],
  },
];
