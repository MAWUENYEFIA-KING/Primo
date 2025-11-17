export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              About <span className="text-[#D4AF37]">LegendPrimo</span>
            </h2>
            <p className="text-white/70 text-lg mb-4">
              LegendPrimo is a premium menswear brand dedicated to crafting exceptional clothing for the modern gentleman. 
              Our collection combines timeless elegance with contemporary style, using only the finest materials and craftsmanship.
            </p>
            <p className="text-white/70 text-lg mb-6">
              Each piece is designed to elevate your wardrobe, providing comfort, style, and confidence for every occasion.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">100+</div>
                <div className="text-white/60 text-sm">Premium Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">5K+</div>
                <div className="text-white/60 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">50+</div>
                <div className="text-white/60 text-sm">Countries</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://d64gsuwffb70l.cloudfront.net/691a1f6fcf8e0955f27e5747_1763320471711_97922964.png"
              alt="LegendPrimo Collection"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="https://d64gsuwffb70l.cloudfront.net/691a1f6fcf8e0955f27e5747_1763320474809_804fcc37.png"
              alt="LegendPrimo Quality"
              className="w-full h-64 object-cover rounded-lg mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
