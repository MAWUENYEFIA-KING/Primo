const testimonials = [
  {
    name: 'Michael Chen',
    role: 'Business Executive',
    content: 'LegendPrimo has completely transformed my wardrobe. The quality is exceptional and the fit is perfect.',
    rating: 5
  },
  {
    name: 'David Williams',
    role: 'Entrepreneur',
    content: 'Best menswear brand I have discovered. Every piece feels premium and looks amazing.',
    rating: 5
  },
  {
    name: 'James Rodriguez',
    role: 'Creative Director',
    content: 'The attention to detail is remarkable. These clothes make me feel confident and stylish.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">What Our Customers Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/80 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-white/60 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
