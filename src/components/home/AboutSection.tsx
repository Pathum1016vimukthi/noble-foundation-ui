import { Eye, Target } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section-padding bg-royal">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl text-royal-foreground text-center mb-12">About Us</h2>
      <div className="gold-divider mb-12" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-navy-foreground/10 flex items-center justify-center">
              <span className="font-heading text-2xl text-gold font-bold">IESL</span>
            </div>
            <h3 className="text-xl text-royal-foreground">The Institution of Engineers, Sri Lanka</h3>
          </div>
          <p className="text-royal-foreground/80 leading-relaxed">
            The Institution of Engineers, Sri Lanka (IESL) is the foremost professional body of engineers in the country. Established in 1906, IESL has been at the forefront of engineering excellence and innovation. The Junior Inventor of the Year competition nurtures young talent and inspires the next generation of Sri Lankan innovators to push the boundaries of science and technology.
          </p>
        </div>
        <div className="space-y-6">
          <div className="bg-card rounded p-6 border-l-4 border-gold">
            <div className="flex items-center gap-3 mb-3">
              <Eye size={20} className="text-gold" />
              <h3 className="text-xl text-card-foreground">Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To cultivate a generation of innovative thinkers and problem-solvers who will drive Sri Lanka's technological advancement and sustainable development.
            </p>
          </div>
          <div className="bg-card rounded p-6 border-l-4 border-gold">
            <div className="flex items-center gap-3 mb-3">
              <Target size={20} className="text-gold" />
              <h3 className="text-xl text-card-foreground">Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To identify, encourage, and reward inventive talent among young Sri Lankans through a transparent, inclusive, and inspiring national competition platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
