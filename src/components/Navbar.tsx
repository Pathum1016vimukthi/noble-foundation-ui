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

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) {
      return;
    }

    const id = location.hash.slice(1);
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-card shadow-lg backdrop-blur-md" : "bg-card"}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        <Link to="/" className="group flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5">
          <img src={ieslLogo} alt="IESL Logo" className="h-14 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[-2deg]" />
          <img src={jiyLogo} alt="JIY Logo" className="h-14 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[2deg]" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="nav-link group relative text-charcoal font-body font-semibold text-xs uppercase tracking-widest transition-all duration-300 hover:text-royal hover:-translate-y-0.5"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-royal via-gold to-sky transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-charcoal transition-transform duration-300 hover:scale-110 hover:rotate-6">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-navy shadow-2xl transform transition-all duration-300 ease-out lg:hidden ${mobileOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`}>
        <div className="flex justify-end p-4">
          <button onClick={() => setMobileOpen(false)} className="text-navy-foreground transition-transform duration-300 hover:scale-110 hover:rotate-90"><X size={24} /></button>
        </div>
        <div className="flex flex-col gap-4 px-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="nav-drawer-item text-navy-foreground/80 hover:text-gold font-body font-semibold text-sm uppercase tracking-widest py-2 border-b border-navy-foreground/10 transition-all duration-300 hover:translate-x-2"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {link.label}
            </Link>
          ))}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
