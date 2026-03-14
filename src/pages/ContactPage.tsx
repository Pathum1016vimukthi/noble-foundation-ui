import "@fontsource/playfair-display/700.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <section className="bg-navy pt-24 pb-12 text-center">
        <h1 className="text-3xl md:text-4xl text-navy-foreground">Contact Us</h1>
        <div className="gold-divider mt-4" />
      </section>
      <section className="section-padding bg-off-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-card rounded shadow p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-royal/10 mx-auto mb-4 flex items-center justify-center">
                  <Mail size={28} className="text-royal" />
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-body font-semibold uppercase tracking-wider text-charcoal mb-1">Name</label>
                  <input required className="w-full border border-border rounded px-4 py-3 text-sm font-body bg-background focus:outline-none focus:ring-2 focus:ring-royal" />
                </div>
                <div>
                  <label className="block text-xs font-body font-semibold uppercase tracking-wider text-charcoal mb-1">Email</label>
                  <input required type="email" className="w-full border border-border rounded px-4 py-3 text-sm font-body bg-background focus:outline-none focus:ring-2 focus:ring-royal" />
                </div>
                <div>
                  <label className="block text-xs font-body font-semibold uppercase tracking-wider text-charcoal mb-1">Subject</label>
                  <input required className="w-full border border-border rounded px-4 py-3 text-sm font-body bg-background focus:outline-none focus:ring-2 focus:ring-royal" />
                </div>
                <div>
                  <label className="block text-xs font-body font-semibold uppercase tracking-wider text-charcoal mb-1">Message</label>
                  <textarea required rows={5} className="w-full border border-border rounded px-4 py-3 text-sm font-body bg-background focus:outline-none focus:ring-2 focus:ring-royal resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full">Send Message</button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-heading font-bold text-charcoal mb-4">Get in Touch</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p className="flex items-center gap-3"><MapPin size={16} className="text-gold flex-shrink-0" /> 120/15, Wijerama Mawatha, Colombo 07, Sri Lanka</p>
                <p className="flex items-center gap-3"><Phone size={16} className="text-gold flex-shrink-0" /> +94 11 269 8426</p>
                <p className="flex items-center gap-3"><Mail size={16} className="text-gold flex-shrink-0" /> jiy@iesl.lk</p>
              </div>
            </div>
            {/* Map placeholder */}
            <div className="bg-soft-grey rounded h-64 flex items-center justify-center text-caption text-sm">
              Google Maps Embed
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <BackToTop />
    </>
  );
};

export default ContactPage;
