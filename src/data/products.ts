import { Product } from "@/types/product";

import tshirt1 from "@/assets/Cuban collar shirt.png";
import tshirtBlack from "@/assets/Cuban collor shirt_6.png";
import tshirtDeepBrown from "@/assets/Cuban collar shirt_2.jpeg";
import tshirtGreen from "@/assets/Cuban collar shirt_3.png";
import tshirtAshDarkGrey from "@/assets/Cuban collar shirt_4.webp";
import tshirtAshBlue from "@/assets/Cuban collar shirt_5.png";

import legendprimopink from "@/assets/LP_1.webp";
import legendprimoblue from "@/assets/LP_2.png";
import legendprimoash from "@/assets/LP_3.webp";
import legendprimowhite from "@/assets/LP_4.png";
import legendprimoblack from "@/assets/LP_5.png";

import hoodie1 from "@/assets/Hoodie_1.png";
import hoodieA from "@/assets/Hoodie_2.png";
import hoodieBl from "@/assets/Hoodie_3.png";
import hoodieLB from "@/assets/Hoodies_4.png";
import hoodieG from "@/assets/Hoodie_5.png";

import hoodie2 from "@/assets/Hod_1.png";
import hoodieBlack from "@/assets/Hod_2.png";
import hoodieGreen from "@/assets/Hod_3.png";
import hoodieBlue from "@/assets/Hod_4.png";
import hoodieRed from "@/assets/Hod_5.png";

import T_shirt from "@/assets/Prodcut_2.png";
import T_shirtBlue from "@/assets/Prodcut_3.webp";
import T_shirtPink from "@/assets/Prodcut_6.png";
import T_shirtBlack from "@/assets/Prodcut_26.webp";
import T_shirtWhite from "@/assets/Prodcut_12.webp";
import T_shirtCream from "@/assets/Prodcut_17.webp";

import trouser1 from "@/assets/Jo1.png";
import trouserBrown from "@/assets/jo2.png";
import trouserPurple from "@/assets/Jo3.png";
import trouserBlue from "@/assets/Jo4.png";
import trouserBlack from "@/assets/Jo5.png";
import trouserPink from "@/assets/Jo6.png";
import trouserAsh from "@/assets/Jo7.png";
import trouserBlack_2 from "@/assets/Jo9.png";

import SingletBlack from "@/assets/Singlet4.png";
import SingletPurple from "@/assets/Singlet1.png";
import SingletBrown from "@/assets/Singlet3.png";
import SingletBlue from "@/assets/Singlet5.png";


export const products: Product[] = [
  {
    id: "1",
    name: "Premium T-Shirt",
    category: "T-Shirts",
    price: 150,
    image: tshirt1,
    description: "Premium quality t-shirt with minimalist gold logo, available in multiple colors",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colorVariants: [
      { name: "Light Brown", image: tshirt1 },
      { name: "Black", image: tshirtBlack },
      { name: "Deep Brown", image: tshirtDeepBrown },
      { name: "Green", image: tshirtGreen },
      { name: "Ash", image: tshirtAshDarkGrey },
      { name: "Blue", image: tshirtAshBlue },
    ],
  },
  {
    id: "2",
    name: "Classic Women T-Shirts",
    category: "T-Shirts",
    price: 200,
    image: legendprimopink,
    description: "Elegant cotton t-shirt with subtle gold embroidery, multiple color options",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colorVariants: [
       { name: "Pink", image: legendprimopink },
      { name: "Blue", image: legendprimoblue },
      { name: "Ash", image: legendprimoash },
      { name: "White", image: legendprimowhite },
      { name: "Black", image: legendprimoblack },
    ],
  },
  {
    id: "3",
    name: "Luxury Hoodie",
    category: "Hoodies",
    price: 250,
    image: hoodie1,
    description: "Premium hoodie with gold zipper detail, available in luxury colors",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colorVariants: [
      { name: "Red", image: hoodie1 },
      { name: "Ash", image: hoodieA },
      { name: "Deep Blue", image: hoodieBl },
      { name: "Light Blue", image: hoodieLB },
      { name: "Green", image: hoodieG },
    ],
  },
  {
    id: "4",
    name: "Signature  Hoodie",
    category: "Hoodies",
    price: 200,
    image: hoodie2,
    description: "Premium hoodie with signature black and gold logo, multiple colors",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colorVariants: [
      { name: "Charcoal", image: hoodie2 },
      { name: "Black", image: hoodieBlack },
      { name: "Green", image: hoodieGreen },
      { name: "Blue", image: hoodieBlue },
      { name: "Red", image: hoodieRed },
      
    ],
  },
  {
    id: "5",
    name: "Classic Men T-Shirt",
    category: "Men T-shirt",
    price: 200,
    image: T_shirt,
    description: "Luxury bomber jacket with gold hardware, premium color options",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colorVariants: [
      { name: "Blue", image: T_shirt },
      { name: "Pink", image: T_shirtBlue },
      { name: "Black", image: T_shirtPink },
      { name: "White", image: T_shirtBlack },
       { name: "Cream", image: T_shirtWhite },
       { name: "Ash", image: T_shirtCream },
    ],
  },
  {
    id: "6",
    name: "Joggies",
    category: "Joggies",
    price: 250,
    image: trouser1,
    description: "Premium formal trousers with gold button detail, classic colors",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colorVariants: [
      { name: "Blue", image: trouser1 },
      { name: "Brown", image: trouserBrown },
      { name: "Purple", image: trouserPurple },
      { name: "Blue", image: trouserBlue },
      { name: "Black", image: trouserBlack },
      { name: "Pink", image: trouserPink },
      { name: "Ash", image: trouserAsh},
      { name: "Black", image: trouserBlack_2 },
    ],
  },
  {
    id: "7",
    name: "Singlets",
    category: "Singlets",
    price: 50,
    image: SingletBlack,
    description: "Professional dress shirt with gold cufflinks, versatile colors",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colorVariants: [
       { name: "Black", image: SingletBlack},
      { name: "purple", image: SingletPurple },
      { name: "Brown", image: SingletBrown },
       { name: "Blue", image: SingletBlue},
    ],
  },
];
