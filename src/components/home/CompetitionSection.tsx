import { Trophy, Award, Medal } from "lucide-react";

const timeline = [
  { date: "January 15, 2026", event: "Applications Open" },
  { date: "March 31, 2026", event: "Applications Close" },
  { date: "May 10, 2026", event: "Preliminary Round" },
  { date: "July 20, 2026", event: "Second Round" },
  { date: "September 5, 2026", event: "Grand Finals" },
];

const prizes = [
  { place: "1st Place", icon: Trophy, amount: "LKR 500,000", color: "text-gold" },
  { place: "2nd Place", icon: Award, amount: "LKR 300,000", color: "text-caption" },
  { place: "3rd Place", icon: Medal, amount: "LKR 150,000", color: "text-orange-700" },
];

const CompetitionSection = () => (
  <section id="competition" className="section-padding bg-card">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl text-charcoal text-center mb-4">The Competition</h2>
      <div className="gold-divider mb-12" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
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

      {/* Timeline */}
      <h3 className="text-2xl text-charcoal text-center mb-8">Event Timeline</h3>
      <div className="relative max-w-2xl mx-auto mb-16">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gold" />
        {timeline.map((item, i) => (
          <div key={i} className="relative pl-12 pb-8 last:pb-0">
            <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-gold border-2 border-card" />
            <p className="text-xs text-caption font-body font-medium uppercase tracking-wider">{item.date}</p>
            <p className="text-foreground font-semibold mt-1">{item.event}</p>
          </div>
        ))}
      </div>

      {/* Prizes */}
      <h3 className="text-2xl text-charcoal text-center mb-8">Prizes</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {prizes.map((p) => (
          <div key={p.place} className="bg-card rounded shadow card-hover text-center p-8 border border-border">
            <p.icon size={40} className={`${p.color} mx-auto mb-4`} />
            <h4 className="font-heading text-lg font-bold text-charcoal mb-2">{p.place}</h4>
            <p className="text-xl font-bold text-royal">{p.amount}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CompetitionSection;
