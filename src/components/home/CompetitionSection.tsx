const timeline = [
  { date: "January 15, 2026", event: "Applications Open" },
  { date: "March 31, 2026", event: "Applications Close" },
  { date: "May 10, 2026", event: "Preliminary Round" },
  { date: "July 20, 2026", event: "Second Round" },
  { date: "September 5, 2026", event: "Grand Finals" },
];

const RocketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
    <defs>
      <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
      <linearGradient id="flameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFBEB" />
        <stop offset="50%" stopColor="#FDE047" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
      <filter id="glowGold" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    {/* Animated Flame */}
    <g className="animate-flame">
      <path d="M45 85 Q60 120 75 85 Z" fill="url(#flameGrad)" filter="url(#glowGold)" />
      <path d="M52 85 Q60 105 68 85 Z" fill="#FFFFFF" />
    </g>
    <path d="M40 70 L25 85 V90 L45 80 Z" fill="#D97706" />
    <path d="M80 70 L95 85 V90 L75 80 Z" fill="#D97706" />
    <path d="M60 15 Q40 40 45 85 L75 85 Q80 40 60 15 Z" fill="url(#rocketGrad)" filter="url(#glowGold)" />
    <path d="M60 15 V85" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" />
    <path d="M50 50 H70" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" />
    <circle cx="60" cy="45" r="8" fill="#1E293B" stroke="#FDE047" strokeWidth="2" />
    <circle cx="60" cy="45" r="3" fill="#38BDF8" />
  </svg>
);

const BulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%"><defs><linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#F1F5F9" /><stop offset="100%" stopColor="#94A3B8" /></linearGradient><filter id="glowCyan" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="4" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter></defs><path d="M10 60 L30 25 L70 25 L90 60 L70 95 L30 95 Z" fill="none" stroke="#22D3EE" strokeWidth="0.5" strokeOpacity="0.2"/><path d="M45 85 H75 V90 H45 Z M48 93 H72 V97 H48 Z" fill="#64748B"/><path d="M55 100 H65 V105 H55 Z" fill="#475569"/><path d="M45 80 C20 80 20 30 60 15 C100 30 100 80 75 80 Z" fill="none" stroke="url(#silverGrad)" strokeWidth="4"/><path d="M45 80 C20 80 20 30 60 15 C100 30 100 80 75 80 Z" fill="#06B6D4" fillOpacity="0.05"/><rect x="50" y="40" width="20" height="20" rx="2" fill="#0F172A" stroke="#22D3EE" strokeWidth="2" filter="url(#glowCyan)"/><circle cx="60" cy="50" r="4" fill="#67E8F9"/><path d="M60 60 V80 M50 50 H35 M70 50 H85 M60 40 V25 M55 25 L50 30 M65 25 L70 30" fill="none" stroke="#22D3EE" strokeWidth="2" filter="url(#glowCyan)"/><circle cx="35" cy="50" r="2" fill="#22D3EE"/><circle cx="85" cy="50" r="2" fill="#22D3EE"/><circle cx="60" cy="25" r="2" fill="#22D3EE"/></svg>
);

const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%"><defs><linearGradient id="bronzeGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FDBA74" /><stop offset="50%" stopColor="#D97706" /><stop offset="100%" stopColor="#78350F" /></linearGradient><filter id="glowOrange" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter></defs><circle cx="60" cy="60" r="50" fill="none" stroke="#EA580C" strokeWidth="0.5" strokeOpacity="0.3"/><line x1="10" y1="60" x2="110" y2="60" stroke="#EA580C" strokeWidth="0.5" strokeOpacity="0.3"/><line x1="60" y1="10" x2="60" y2="110" stroke="#EA580C" strokeWidth="0.5" strokeOpacity="0.3"/><circle cx="60" cy="60" r="40" fill="none" stroke="url(#bronzeGrad)" strokeWidth="4" strokeDasharray="15,10"/><circle cx="60" cy="60" r="25" fill="none" stroke="#EA580C" strokeWidth="2" filter="url(#glowOrange)"/><polygon points="60,45 75,60 60,75 45,60" fill="url(#bronzeGrad)" filter="url(#glowOrange)"/><path d="M30 40 L20 40 L20 50 M90 40 L100 40 L100 50 M30 80 L20 80 L20 70 M90 80 L100 80 L100 70" fill="none" stroke="#F97316" strokeWidth="2"/><circle cx="60" cy="20" r="3" fill="#FB923C"/><circle cx="60" cy="100" r="3" fill="#FB923C"/><circle cx="20" cy="60" r="3" fill="#FB923C"/><circle cx="100" cy="60" r="3" fill="#FB923C"/></svg>
);

const CompetitionSection = () => (
  <section id="competition" className="section-padding bg-card">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl text-charcoal text-center mb-4">The Competition</h2>
      <div className="gold-divider mb-12" />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <p className="text-foreground leading-relaxed mb-6">
            The IESL Junior Inventor of the Year competition is Sri Lanka's premier platform for young innovators aged 12–19.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            Projects are evaluated on innovation, feasibility, social impact, and presentation quality.
          </p>
          <a href="#" className="btn-ghost-blue inline-block">Read Guidelines</a>
        </div>
        <div className="bg-soft-grey rounded-lg h-64 lg:h-auto flex items-center justify-center">
          <span className="text-caption text-sm">Competition Illustration</span>
        </div>
      </div>

      {/* Prizes Section */}
      <h3 className="text-2xl text-charcoal text-center mb-8">Prizes</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-end">
        
        {/* 2nd Place Card */}
        <div className="group bg-card rounded shadow card-hover text-center p-8 border border-border transition-all duration-500 hover:bg-cyan-500/10">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:filter group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
            <BulbIcon />
          </div>
          <h4 className="font-heading text-lg font-bold text-charcoal mb-2">2nd Place</h4>
          <p className="text-xl font-bold text-royal">LKR 300,000</p>
        </div>

        {/* 1st Place Card - THE ROCKET SCENE */}
        <div className="group relative bg-[#020617] rounded shadow-2xl text-center p-8 border-2 border-gold overflow-hidden min-h-[400px] flex flex-col justify-end">
          
          {/* Animated Stars */}
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              className="absolute w-[2px] height-[25px] bg-white rounded-full opacity-0 group-hover:animate-[rocket-stars_1s_linear_infinite]"
              style={{ left: `${i * 20}%`, animationDelay: `${i * 0.3}s` }}
            />
          ))}

          {/* Animated Smoke */}
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              className="absolute top-[180px] left-1/2 w-4 h-4 bg-white/20 rounded-full blur-[2px] opacity-0 group-hover:animate-[rocket-smoke_2s_linear_forwards]"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          ))}

          {/* The Rocket Wrapper */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[150px] w-28 h-28 group-hover:animate-[rocket-shake_0.08s_infinite,rocket-launch-top_2.5s_ease-in_forwards] z-30">
          <RocketIcon />
        </div>

          {/* Content */}
          <div className="relative z-10 bg-[#020617]/60 p-2 rounded">
            <h4 className="font-heading text-xl font-bold text-white mb-1">1st Place</h4>
            <p className="text-2xl font-bold text-[#FBBF24] drop-shadow-md">LKR 500,000</p>
          </div>
        </div>

        {/* 3rd Place Card */}
        <div className="group bg-card rounded shadow card-hover text-center p-8 border border-border">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center transition-transform duration-500 group-hover:rotate-180 group-hover:scale-125">
            <TargetIcon />
          </div>
          <h4 className="font-heading text-lg font-bold text-charcoal mb-2">3rd Place</h4>
          <p className="text-xl font-bold text-royal">LKR 150,000</p>
        </div>

      </div>
    </div>
  </section>
);

export default CompetitionSection;