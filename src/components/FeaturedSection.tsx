import { products } from '../data/products';

export default function FeaturedSection() {
  const featured = products.filter(p => p.featured);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Collection</h2>
          <p className="text-white/60 text-lg">Handpicked premium pieces for the discerning gentleman</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map(product => (
            <div key={product.id} className="group relative overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{product.name}</h3>
                  <p className="text-[#D4AF37] font-bold">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
