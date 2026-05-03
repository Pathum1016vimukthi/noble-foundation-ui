import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ieslLogo from "@/assets/iesl-logo.jpg";
import jiyLogo from "@/assets/jiy-logo.jpg";

const navLinks = [
  { label: "HOMEPAGE", href: "/#hero" },
  { label: "ABOUT US", href: "/#about" },
  { label: "COMPETITION", href: "/#competition" },
  { label: "REGISTRATION", href: "/#registration" },
  { label: "GALLERY", href: "/#gallery" },
  { label: "NEWS", href: "/news" },
  { label: "FAQ", href: "/#faq" },
  { label: "CONTACT US", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-card shadow-lg" : "bg-card"}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={ieslLogo} alt="IESL Logo" className="h-14" />
          <img src={jiyLogo} alt="JIY Logo" className="h-14" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                className="text-charcoal hover:text-royal font-body font-semibold text-xs uppercase tracking-widest transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="text-charcoal hover:text-royal font-body font-semibold text-xs uppercase tracking-widest transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="/#registration"
            onClick={(e) => { e.preventDefault(); handleClick("/#registration"); }}
            className="bg-gold text-white rounded px-5 py-2 font-body font-bold text-xs uppercase tracking-widest animate-blink hover:bg-royal transition-colors"
          >
            Register
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-charcoal">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-navy shadow-2xl transform transition-transform duration-300 lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end p-4">
          <button onClick={() => setMobileOpen(false)} className="text-navy-foreground"><X size={24} /></button>
        </div>
        <div className="flex flex-col gap-4 px-6">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                className="text-navy-foreground/80 hover:text-gold font-body font-semibold text-sm uppercase tracking-widest py-2 border-b border-navy-foreground/10"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-navy-foreground/80 hover:text-gold font-body font-semibold text-sm uppercase tracking-widest py-2 border-b border-navy-foreground/10"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
