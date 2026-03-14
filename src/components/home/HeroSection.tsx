import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
    {/* Background image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-navy/75" />
    {/* Overlay pattern */}
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    }} />
    <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
      <div className="gold-divider mb-8" />
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-navy-foreground leading-tight mb-4">
        IESL Junior Inventor<br />Of The Year — 2026
      </h1>
      <div className="gold-divider my-6" />
      <p className="text-lg text-navy-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
        Unleash your creativity and engineering prowess. Join Sri Lanka's most prestigious innovation competition for young minds.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#registration" className="btn-primary text-center">Register Now</a>
        <a href="#about" className="btn-ghost text-center">Learn More</a>
      </div>
    </div>
  </section>
);

export default HeroSection;
