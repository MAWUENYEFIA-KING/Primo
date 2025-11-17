import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#D4AF37]/20 p-3 rounded-lg">
                  <Mail className="text-[#D4AF37]" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-white/60">support@legendprimo.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#D4AF37]/20 p-3 rounded-lg">
                  <Phone className="text-[#D4AF37]" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <p className="text-white/60">+234 800 000 0000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#D4AF37]/20 p-3 rounded-lg">
                  <MapPin className="text-[#D4AF37]" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Address</h4>
                  <p className="text-white/60">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 text-white px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:border-[#D4AF37] placeholder-white/40"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 text-white px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:border-[#D4AF37] placeholder-white/40"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white/5 text-white px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:border-[#D4AF37] placeholder-white/40"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 text-white px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:border-[#D4AF37] placeholder-white/40 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#D4AF37] text-black py-3 rounded-lg font-bold hover:bg-[#C4A137] transition"
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
