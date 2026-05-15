const CompetitionSection = () => (
  <section id="competition" className="section-padding bg-card">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl text-charcoal text-center mb-4">The Competition</h2>
      <div className="gold-divider mb-12" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="text-foreground leading-relaxed mb-6">
            The IESL Junior Inventor of the Year competition is Sri Lanka's premier platform for young innovators aged 12–19. Participants showcase inventions that address real-world challenges, demonstrating creativity, technical skill, and practical application.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            Projects are evaluated on innovation, feasibility, social impact, and presentation quality by a distinguished panel of engineers and scientists from across the nation.
          </p>
          <a href="#" className="btn-ghost-blue inline-block">Read Guidelines</a>
        </div>
        <div className="bg-soft-grey rounded-lg h-64 lg:h-auto flex items-center justify-center">
          <span className="text-caption text-sm">Competition Illustration</span>
        </div>
      </div>
    </div>
  </section>
);

export default CompetitionSection;