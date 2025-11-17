export type ProductCategory = "T-Shirts" | "Hoodies" | "Trousers" | "Jackets" | "Shirts";

export interface ColorVariant {
  name: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  image: string;
  description: string;
  sizes: string[];
  colorVariants: ColorVariant[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}
