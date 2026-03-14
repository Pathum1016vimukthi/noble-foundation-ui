const members = [
  { name: "Dr. Kamal Perera", role: "Chairperson" },
  { name: "Eng. Nishani Fernando", role: "Vice Chairperson" },
  { name: "Eng. Roshan Silva", role: "Secretary" },
  { name: "Dr. Amaya Wijesinghe", role: "Treasurer" },
  { name: "Eng. Pradeep Jayasuriya", role: "Committee Member" },
  { name: "Dr. Lakshmi Rathnayake", role: "Committee Member" },
  { name: "Eng. Dinesh Kumarasinghe", role: "Committee Member" },
  { name: "Dr. Sanduni Herath", role: "Committee Member" },
  { name: "Eng. Ruwan Bandara", role: "Committee Member" },
  { name: "Dr. Iresha Gunathilaka", role: "Committee Member" },
  { name: "Eng. Chamara Weerasinghe", role: "Committee Member" },
  { name: "Dr. Tharaka Dissanayake", role: "Committee Member" },
];

const CommitteeSection = () => (
  <section id="committee" className="section-padding bg-off-white">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl text-charcoal mb-4">Organizing Committee</h2>
      <div className="gold-divider mb-12" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {members.map((m) => (
          <div key={m.name} className="bg-card rounded shadow-sm card-hover border-t-2 border-gold p-6 text-center">
            <div className="w-20 h-20 rounded-full bg-soft-grey mx-auto mb-4 flex items-center justify-center">
              <span className="text-caption text-2xl font-heading">{m.name.charAt(0)}</span>
            </div>
            <h4 className="font-body font-semibold text-sm text-charcoal">{m.name}</h4>
            <p className="text-xs text-caption mt-1">{m.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CommitteeSection;
