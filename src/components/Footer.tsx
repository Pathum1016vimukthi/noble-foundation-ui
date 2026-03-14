import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-footer-dark text-footer-dark-foreground">
    <div className="gold-divider mt-0 mb-0 w-full h-0.5 bg-gold" />
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="font-heading text-2xl font-bold mb-3">
          IESL <span className="text-gold">JIY</span>
        </h3>
        <p className="text-sm text-footer-dark-foreground/70 leading-relaxed">
          Inspiring the next generation of innovators through the Junior Inventor of the Year competition.
        </p>
      </div>
      <div>
        <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4 text-gold">Quick Links</h4>
        <ul className="space-y-2 text-sm text-footer-dark-foreground/70">
          <li><a href="/#about" className="hover:text-gold transition-colors">About Us</a></li>
          <li><a href="/#competition" className="hover:text-gold transition-colors">Competition</a></li>
          <li><a href="/#registration" className="hover:text-gold transition-colors">Registration</a></li>
          <li><a href="/#faq" className="hover:text-gold transition-colors">FAQ</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4 text-gold">Contact</h4>
        <div className="space-y-3 text-sm text-footer-dark-foreground/70">
          <p className="flex items-center gap-2"><Mail size={14} className="text-gold" /> jiy@iesl.lk</p>
          <p className="flex items-center gap-2"><Phone size={14} className="text-gold" /> +94 11 269 8426</p>
          <p className="flex items-center gap-2"><MapPin size={14} className="text-gold" /> 120/15, Wijerama Mawatha, Colombo 07</p>
        </div>
      </div>
    </div>
    <div className="border-t border-footer-dark-foreground/10 py-4 text-center text-xs text-footer-dark-foreground/50">
      © IESL JIY 2026 | jiy@iesl.lk
    </div>
  </footer>
);

export default Footer;
