export default function Hero() {
  const scrollToShop = () => {
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://d64gsuwffb70l.cloudfront.net/691a23b7fab3d50fef095865_1763320962573_9f5f4f7a.webp"
          alt="LegendPrimo Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider">
          <span className="text-white">LEGENDS</span>
          <br />
          <span className="text-[#D4AF37]">PRIMO</span>
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Elevate your style with premium menswear crafted for the modern gentleman
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToShop}
            className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#C4A137] transition-all transform hover:scale-105"
          >
            Shop Collection
          </button>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20"
          >
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}
