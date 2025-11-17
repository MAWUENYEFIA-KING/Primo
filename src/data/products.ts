export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Black LP T-Shirt',
    price: 49.99,
    category: 'T-Shirts',
    image: 'https://d64gsuwffb70l.cloudfront.net/691a23b7fab3d50fef095865_1763320939069_0c6c16b6.webp',
    description: 'Luxury black t-shirt with gold LP monogram. Premium cotton fabric.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black'],
    featured: true
  },
  {
    id: '2',
    name: 'Classic White LP Tee',
    price: 45.99,
    category: 'T-Shirts',
    image: 'https://d64gsuwffb70l.cloudfront.net/691a23b7fab3d50fef095865_1763320939951_68ceb92a.webp',
    description: 'Minimalist white t-shirt with black LP logo. High-quality cotton.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White'],
    featured: true
  },
  {
    id: '3',
    name: 'Luxury Black Hoodie',
    price: 89.99,
    category: 'Hoodies',
    image: 'https://d64gsuwffb70l.cloudfront.net/691a23b7fab3d50fef095865_1763320940827_132ff74b.webp',
    description: 'Premium black hoodie with gold embroidered LP logo.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black'],
    featured: true
  },
  {
    id: '4',
    name: 'Grey Essential Hoodie',
    price: 79.99,
    category: 'Hoodies',
    image: 'https://d64gsuwffb70l.cloudfront.net/691a23b7fab3d50fef095865_1763320941768_c9d492bb.webp',
    description: 'Comfortable grey hoodie with black LP branding.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Grey']
  },
  {
    id: '5',
    name: 'Tailored Black Trousers',
    price: 119.99,
    category: 'Trousers',
    image: 'https://d64gsuwffb70l.cloudfront.net/691a23b7fab3d50fef095865_1763320942643_1a16792b.webp',
    description: 'Premium black trousers with tailored fit.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Black']
  },
  {
    id: '6',
    name: 'Beige Chino Trousers',
    price: 109.99,
    category: 'Trousers',
    image: 'https://d64gsuwffb70l.cloudfront.net/691a23b7fab3d50fef095865_1763320943521_874c379d.webp',
    description: 'Luxury beige chinos with slim fit.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Beige']
  },
  {
    id: '7',
    name: 'Black Bomber Jacket',
    price: 199.99,
    category: 'Jackets',
    image: 'https://d64gsuwffb70l.cloudfront.net/691a23b7fab3d50fef095865_1763320952881_4a7c347b.webp',
    description: 'Luxury bomber jacket with gold zipper details.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black'],
    featured: true
  },
  {
    id: '8',
    name: 'Navy Tailored Blazer',
    price: 249.99,
    category: 'Jackets',
    image: 'https://d64gsuwffb70l.cloudfront.net/691a23b7fab3d50fef095865_1763320953835_3e9674dc.webp',
    description: 'Elegant navy blazer with tailored fit.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy']
  },
  {
    id: '9',
    name: 'White Polo Shirt',
    price: 59.99,
    category: 'T-Shirts',
    image: 'https://d64gsuwffb70l.cloudfront.net/691a23b7fab3d50fef095865_1763320954799_09b3709e.webp',
    description: 'Premium polo with black collar trim.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White']
  },
  {
    id: '10',
    name: 'Black Dress Shirt',
    price: 79.99,
    category: 'Shirts',
    image: 'https://d64gsuwffb70l.cloudfront.net/691a23b7fab3d50fef095865_1763320955680_756f6f2e.webp',
    description: 'Luxury dress shirt with gold button details.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black']
  },
  {
    id: '11',
    name: 'Grey Sweatshirt',
    price: 69.99,
    category: 'Hoodies',
    image: 'https://d64gsuwffb70l.cloudfront.net/691a23b7fab3d50fef095865_1763320956593_e95aaade.webp',
    description: 'Elegant grey sweatshirt with minimalist design.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Grey']
  },
  {
    id: '12',
    name: 'Charcoal Joggers',
    price: 89.99,
    category: 'Trousers',
    image: 'https://d64gsuwffb70l.cloudfront.net/691a23b7fab3d50fef095865_1763320957567_2233d9ed.webp',
    description: 'Premium joggers with tapered fit.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Charcoal']
  }
];

export const categories = ['All', 'T-Shirts', 'Hoodies', 'Trousers', 'Jackets', 'Shirts'];
