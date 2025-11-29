export type ProductCategory = "T-Shirts" | "Hoodies" | "Joggers" | "Men T-shirt" | "Singlets"

export interface ColorVariant {
  name: string
  image: string
}

export interface Product {
  id: string
  name: string
  category: ProductCategory
  price: number
  image: string
  description: string
  sizes: string[]
  colorVariants: ColorVariant[]
}

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  selectedSize: string
  selectedColor: string
}
