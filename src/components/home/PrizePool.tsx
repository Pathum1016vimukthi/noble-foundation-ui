const FirstPlaceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-32 h-32 mx-auto mb-4 drop-shadow-2xl hover:scale-110 transition-transform duration-300">
    <defs>
      <linearGradient id="gold-main" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FDE047"/><stop offset="100%" stopColor="#D97706"/>
      </linearGradient>
      <linearGradient id="gold-laurel" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FBBF24"/><stop offset="100%" stopColor="#B45309"/>
      </linearGradient>
    </defs>
    <ellipse cx="50" cy="92" rx="35" ry="4" fill="#000000" opacity="0.15"/>
    <g strokeLinecap="round">
      <path d="M 35 75 Q 15 50 25 15" fill="none" stroke="url(#gold-laurel)" strokeWidth="3"/>
      <ellipse cx="25" cy="62" rx="10" ry="5" transform="rotate(-30 25 62)" fill="url(#gold-laurel)"/><ellipse cx="18" cy="45" rx="9" ry="4.5" transform="rotate(-45 18 45)" fill="url(#gold-laurel)"/><ellipse cx="20" cy="28" rx="8" ry="4" transform="rotate(-60 20 28)" fill="url(#gold-laurel)"/><ellipse cx="28" cy="15" rx="7" ry="3.5" transform="rotate(-75 28 15)" fill="url(#gold-laurel)"/>
      <path d="M 65 75 Q 85 50 75 15" fill="none" stroke="url(#gold-laurel)" strokeWidth="3"/>
      <ellipse cx="75" cy="62" rx="10" ry="5" transform="rotate(30 75 62)" fill="url(#gold-laurel)"/><ellipse cx="82" cy="45" rx="9" ry="4.5" transform="rotate(45 82 45)" fill="url(#gold-laurel)"/><ellipse cx="80" cy="28" rx="8" ry="4" transform="rotate(60 80 28)" fill="url(#gold-laurel)"/><ellipse cx="72" cy="15" rx="7" ry="3.5" transform="rotate(75 72 15)" fill="url(#gold-laurel)"/>
    </g>
    <rect x="25" y="80" width="50" height="12" rx="6" fill="url(#gold-main)"/>
    <rect x="33" y="70" width="34" height="10" rx="3" fill="#334155"/>
    <path d="M44 70 L46 55 L54 55 L56 70 Z" fill="#D97706"/>
    <path d="M 50 5 L 58 25 L 80 25 L 62 38 L 69 60 L 50 46 L 31 60 L 38 38 L 20 25 L 42 25 Z" fill="url(#gold-main)"/>
    <circle cx="50" cy="38" r="14" fill="#FFFBEB" />
    <text x="50" y="45" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="20" textAnchor="middle" fill="#D97706">1</text>
  </svg>
);

const SecondPlaceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-24 h-24 mx-auto mb-4 drop-shadow-xl hover:scale-110 transition-transform duration-300">
    <defs>
      <linearGradient id="silver-main" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F1F5F9"/><stop offset="100%" stopColor="#94A3B8"/>
      </linearGradient>
    </defs>
    <ellipse cx="50" cy="92" rx="30" ry="3" fill="#000000" opacity="0.1"/>
    <g strokeLinecap="round">
      <path d="M 35 75 Q 15 50 25 15" fill="none" stroke="#94A3B8" strokeWidth="3"/><path d="M 65 75 Q 85 50 75 15" fill="none" stroke="#94A3B8" strokeWidth="3"/>
    </g>
    <rect x="25" y="80" width="50" height="12" rx="6" fill="url(#silver-main)"/>
    <rect x="33" y="70" width="34" height="10" rx="3" fill="#475569"/>
    <path d="M 50 5 L 58 25 L 80 25 L 62 38 L 69 60 L 50 46 L 31 60 L 38 38 L 20 25 L 42 25 Z" fill="url(#silver-main)"/>
    <circle cx="50" cy="38" r="14" fill="#F8FAFC" />
    <text x="50" y="45" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="20" textAnchor="middle" fill="#475569">2</text>
  </svg>
);

const ThirdPlaceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-24 h-24 mx-auto mb-4 drop-shadow-xl hover:scale-110 transition-transform duration-300">
    <defs>
      <linearGradient id="bronze-main" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FDBA74"/><stop offset="100%" stopColor="#78350F"/>
      </linearGradient>
    </defs>
    <ellipse cx="50" cy="92" rx="30" ry="3" fill="#000000" opacity="0.1"/>
    <g strokeLinecap="round">
      <path d="M 35 75 Q 15 50 25 15" fill="none" stroke="#78350F" strokeWidth="3"/><path d="M 65 75 Q 85 50 75 15" fill="none" stroke="#78350F" strokeWidth="3"/>
    </g>
    <rect x="25" y="80" width="50" height="12" rx="6" fill="url(#bronze-main)"/>
    <rect x="33" y="70" width="34" height="10" rx="3" fill="#451a03"/>
    <path d="M 50 5 L 58 25 L 80 25 L 62 38 L 69 60 L 50 46 L 31 60 L 38 38 L 20 25 L 42 25 Z" fill="url(#bronze-main)"/>
    <circle cx="50" cy="38" r="14" fill="#FFF7ED" />
    <text x="50" y="45" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="20" textAnchor="middle" fill="#78350F">3</text>
  </svg>
);

const PrizePool = () => (
  <section id="prizes" className="section-padding bg-soft-grey">
    <div className="max-w-7xl mx-auto">
      <h3 className="text-3xl md:text-4xl text-charcoal text-center mb-12">Prize Pool</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-end">
        {/* 2nd Place */}
        <div className="bg-white rounded-xl shadow-sm border border-border p-8 text-center order-2 md:order-1 transition-all hover:shadow-md">
          <SecondPlaceIcon />
          <h4 className="font-heading text-lg font-bold text-charcoal mb-2">2nd Place</h4>
          <p className="text-2xl font-bold text-royal">LKR 300,000</p>
        </div>

        {/* 1st Place */}
        <div className="bg-white rounded-xl shadow-xl border-2 border-gold p-10 text-center order-1 md:order-2 transform md:scale-110 z-10 transition-all hover:shadow-2xl">
          <div className="inline-block bg-gold text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Winner</div>
          <FirstPlaceIcon />
          <h4 className="font-heading text-2xl font-bold text-charcoal mb-2">1st Place</h4>
          <p className="text-3xl font-bold text-royal">LKR 500,000</p>
        </div>

        {/* 3rd Place */}
        <div className="bg-white rounded-xl shadow-sm border border-border p-8 text-center order-3 transition-all hover:shadow-md">
          <ThirdPlaceIcon />
          <h4 className="font-heading text-lg font-bold text-charcoal mb-2">3rd Place</h4>
          <p className="text-2xl font-bold text-royal">LKR 150,000</p>
        </div>
      </div>
    </div>
  </section>
);

export default PrizePool;