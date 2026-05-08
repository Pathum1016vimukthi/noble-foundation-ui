import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-slide-2.jpg";
import heroBg3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    image: heroBg,
    title: ["IESL Junior Inventor", "Of The Year — 2026"],
    subtitle:
      "Unleash your creativity and engineering prowess. Join Sri Lanka's most prestigious innovation competition for young minds.",
    primary: { label: "Register Now", href: "#registration" },
    secondary: { label: "Learn More", href: "#about" },
  },
  {
    image: heroBg2,
    title: ["Empowering The Next Gen", "Of Innovators"],
    subtitle:
      "Open for both Junior and Senior categories. Register your hardware, software, or embedded systems projects today.",
    primary: { label: "View Categories", href: "#competition" },
    secondary: { label: "Submit Proposal", href: "#registration" },
  },
  {
    image: heroBg3,
    title: ["Showcase Your Genius", "To The World"],
    subtitle:
      "Win prestigious IESL accolades, cash prizes, and the exclusive opportunity to represent Sri Lanka on the global stage.",
    primary: { label: "Explore Prizes", href: "#competition" },
    secondary: { label: "Past Winners", href: "#gallery" },
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [paused]);

  const go = (dir: number) =>
    setCurrent((c) => (c + dir + slides.length) % slides.length);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={idx !== current}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-navy/75" />
        </div>
      ))}

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Slide content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`text-center transition-opacity duration-700 ${
              idx === current
                ? "opacity-100 relative"
                : "opacity-0 absolute inset-0 pointer-events-none"
            }`}
          >
            <div className="gold-divider mb-8" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-navy-foreground leading-tight mb-4 font-heading">
              {slide.title[0]}
              <br />
              {slide.title[1]}
            </h1>
            <div className="gold-divider my-6" />
            <p className="text-lg text-navy-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed font-body">
              {slide.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={slide.primary.href} className="btn-primary text-center">
                {slide.primary.label}
              </a>
              <a href={slide.secondary.href} className="btn-ghost text-center">
                {slide.secondary.label}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full text-navy-foreground/80 hover:text-navy-foreground hover:bg-navy-foreground/10 opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full text-navy-foreground/80 hover:text-navy-foreground hover:bg-navy-foreground/10 opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <ChevronRight className="h-7 w-7" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-0.5 transition-all duration-500 ${
              idx === current
                ? "w-12 bg-gold"
                : "w-8 bg-navy-foreground/40 hover:bg-navy-foreground/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
