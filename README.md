# LegendPrimo - Premium Menswear E-Commerce

A modern, professional e-commerce website for LegendPrimo luxury menswear brand built with React, TypeScript, Tailwind CSS, and Paystack payment integration.

## Features

### 🛍️ E-Commerce Functionality
- **Product Catalog**: 12+ premium clothing items across multiple categories
- **Advanced Filtering**: Filter by category (T-Shirts, Hoodies, Trousers, Jackets, Shirts)
- **Smart Sorting**: Sort by price (low/high), name, or featured products
- **Real-time Search**: Search products by name or category
- **Product Details**: Modal with size selection, quantity controls, and detailed descriptions
- **Shopping Cart**: Add/remove items, view totals, persistent cart state
- **Checkout**: Integrated Paystack payment gateway with NGN currency support

### 🎨 Design & UX
- **Luxury Theme**: Black, white, and gold color scheme
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Professional Layout**: Hero section, featured products, about, testimonials, contact
- **Modern UI Components**: Modals, sidebars, forms with validation

### 🔧 Technical Features
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Supabase** backend integration
- **Edge Functions** for order processing
- **Environment Variables** for secure configuration

## Setup Instructions

1. **Clone and Install**
   ```bash
   npm install
   ```

2. **Configure Paystack**
   - Copy `.env.example` to `.env`
   - Add your Paystack public key:
     ```
     VITE_PAYSTACK_PUBLIC_KEY=your_paystack_public_key_here
     ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/
│   ├── AppLayout.tsx       # Main layout component
│   ├── Header.tsx          # Navigation with cart
│   ├── Hero.tsx            # Hero section
│   ├── ProductCard.tsx     # Product display card
│   ├── ProductModal.tsx    # Product detail modal
│   ├── FilterBar.tsx       # Category & sort controls
│   ├── Cart.tsx            # Shopping cart sidebar
│   ├── Checkout.tsx        # Paystack checkout
│   ├── About.tsx           # About section
│   ├── Contact.tsx         # Contact form
│   ├── Testimonials.tsx    # Customer reviews
│   ├── FeaturedSection.tsx # Featured products
│   └── Footer.tsx          # Site footer
├── data/
│   └── products.ts         # Product catalog data
└── lib/
    └── supabase.ts         # Supabase client

supabase/functions/
└── process-order/          # Order processing edge function
```

## Payment Integration

The checkout uses Paystack for payment processing:
- Converts USD to NGN (1 USD = 1650 NGN)
- Supports cards, bank transfers, USSD, mobile money
- Secure payment processing with transaction references
- Order confirmation after successful payment

## Customization

### Adding Products
Edit `src/data/products.ts` to add/modify products:
```typescript
{
  id: '13',
  name: 'New Product',
  price: 99.99,
  category: 'T-Shirts',
  image: 'image-url',
  description: 'Product description',
  sizes: ['S', 'M', 'L', 'XL'],
  colors: ['Black'],
  featured: true
}
```

### Styling
- Colors: Modify Tailwind classes in components
- Primary: `#D4AF37` (gold)
- Background: Black/neutral gradients

## Deployment

```bash
npm run build
```

Deploy the `dist` folder to your hosting provider.

## License

© 2025 LegendPrimo. All rights reserved.
