import { categories } from '../data/products';

interface FilterBarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export default function FilterBar({ selectedCategory, onCategoryChange, sortBy, onSortChange }: FilterBarProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              selectedCategory === category
                ? 'bg-[#D4AF37] text-black'
                : 'bg-white/5 text-white/80 hover:bg-white/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="bg-white/5 text-white px-4 py-2 rounded-lg border border-white/10 focus:outline-none focus:border-[#D4AF37]"
      >
        <option value="featured">Featured</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="name">Name: A-Z</option>
      </select>
    </div>
  );
}
