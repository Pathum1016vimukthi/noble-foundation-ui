import { useEffect, useRef, useState } from "react";
import imgOpen from "@/assets/timeline-applications-open.jpg";
import imgClose from "@/assets/timeline-applications-close.jpg";
import imgPrelim from "@/assets/timeline-preliminary.jpg";
import imgSecond from "@/assets/timeline-second-round.jpg";
import imgFinals from "@/assets/timeline-grand-finals.jpg";

const events = [
  { date: "January 15, 2026", title: "Applications Open", desc: "Registration begins for young inventors across Sri Lanka.", image: imgOpen },
  { date: "March 31, 2026", title: "Applications Close", desc: "Final submissions are received and reviewed by our panel.", image: imgClose },
  { date: "May 10, 2026", title: "Preliminary Round", desc: "Shortlisted innovators present their concepts to judges.", image: imgPrelim },
  { date: "July 20, 2026", title: "Second Round", desc: "Teams refine prototypes and showcase development progress.", image: imgSecond },
  { date: "September 5, 2026", title: "Grand Finals", desc: "Winners are announced in a celebration of brilliance.", image: imgFinals },
];

// Check if a date has passed
const isDatePassed = (dateStr: string): boolean => {
  try {
    const itemDate = new Date(dateStr);
    const today = new Date("2026-05-11");
    return itemDate <= today;
  } catch {
    return false;
  }
};

// Get event status: completed, ongoing, or upcoming
const getEventStatus = (dateStr: string): "completed" | "ongoing" | "upcoming" => {
  try {
    const itemDate = new Date(dateStr);
    const today = new Date("2026-05-11");
    const daysDiff = Math.floor((itemDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    if (daysDiff < -1) {
      return "completed";
    } else if (daysDiff >= -1 && daysDiff <= 1) {
      return "ongoing";
    } else {
      return "upcoming";
    }
  } catch {
    return "upcoming";
  }
};

const TimelineItem = ({ item, index }: { item: typeof events[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isLeft = index % 2 === 0;
  const status = getEventStatus(item.date);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const nodeClassMap = {
    completed: "bg-gradient-to-br from-blue-500 via-sky-500 to-gold ring-blue-300/80 shadow-[0_0_20px_rgba(59,130,246,0.8),inset_0_0_10px_rgba(255,255,255,0.3)]",
    ongoing: "bg-gradient-to-br from-gold via-blue-400 to-blue-600 ring-gold/90 shadow-[0_0_30px_rgba(250,204,21,1),0_0_50px_rgba(59,130,246,0.35),inset_0_0_15px_rgba(255,255,255,0.5)] animate-pulse-glow",
    upcoming: "bg-gradient-to-br from-gold via-yellow-400 to-blue-300 ring-gold/70 shadow-[0_0_12px_rgba(250,204,21,0.6)]"
  };

  const cardClassMap = {
    completed: "border-2 border-blue-400/80 bg-gradient-to-br from-card via-blue-950/10 to-gold/10 hover:border-blue-500 hover:shadow-[0_0_40px_-8px_rgba(59,130,246,0.9)] shadow-[0_8px_32px_rgba(59,130,246,0.3)]",
    ongoing: "border-2 border-gold/90 bg-gradient-to-br from-card via-blue-100/10 to-gold/10 hover:border-gold hover:shadow-[0_0_50px_-8px_rgba(250,204,21,0.9)] shadow-[0_8px_40px_rgba(59,130,246,0.22)] ring-2 ring-gold/40",
    upcoming: "border-2 border-gold/70 bg-gradient-to-br from-card to-blue-950/5 hover:border-gold hover:shadow-[0_0_30px_-8px_hsl(var(--gold)/0.7)] shadow-[0_4px_20px_rgba(250,204,21,0.2)]"
  };

  const statusBadgeMap = {
    completed: { 
      text: "✓ COMPLETED", 
      color: "bg-gradient-to-r from-blue-500 to-gold text-white border-blue-600/60 font-bold animate-fade-in-slow",
      icon: "✓"
    },
    ongoing: { 
      text: "● IN PROGRESS", 
      color: "bg-gradient-to-r from-gold to-blue-500 text-slate-900 border-gold/80 font-bold animate-pulse-badge",
      icon: "◆"
    },
    upcoming: { 
      text: "◯ UPCOMING", 
      color: "bg-gradient-to-r from-gold to-yellow-300 text-slate-800 border-gold/60 font-bold",
      icon: "◯"
    }
  };

  const statusBadge = statusBadgeMap[status];

  return (
    <div
      ref={ref}
      className="relative md:grid md:grid-cols-2 md:gap-12 mb-16 md:mb-24"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Node - Desktop */}
      <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 z-20">
        <div className="relative">
          {/* Outer glow rings */}
          <div className={`absolute inset-0 rounded-full opacity-60 ${
            status === "completed" ? "bg-blue-500/30 blur-lg w-10 h-10 -top-2 -left-2" :
            status === "ongoing" ? "bg-gold/50 blur-xl w-12 h-12 -top-3 -left-3 animate-pulse" :
            "bg-gold/20 blur-md w-8 h-8 -top-1 -left-1"
          }`} />
          
          {/* Main node */}
          <span
            className={`block w-6 h-6 rounded-full ring-4 ring-background transition-all duration-500 ${nodeClassMap[status]} ${visible ? "animate-timeline-pulse scale-100" : "scale-75 opacity-40"}`}
          />
          
          {/* Status indicator dot inside */}
          {status === "ongoing" && (
            <div className="absolute inset-1 rounded-full bg-white/30 animate-pulse" />
          )}
        </div>
      </div>

      {/* Mobile node */}
      <div className="md:hidden absolute left-4 top-6 z-20">
        <div className="relative">
          <div className={`absolute inset-0 rounded-full opacity-50 ${
            status === "completed" ? "bg-blue-500/25 blur-md w-8 h-8 -top-1.5 -left-1.5" :
            status === "ongoing" ? "bg-gold/40 blur-lg w-10 h-10 -top-2 -left-2 animate-pulse" :
            "bg-gold/15 blur-sm w-6 h-6 -top-0.5 -left-0.5"
          }`} />
          <span className={`block w-5 h-5 rounded-full ring-3 ring-background transition-all duration-500 ${nodeClassMap[status]}`} />
          {status === "ongoing" && (
            <div className="absolute inset-1 rounded-full bg-white/25 animate-pulse" />
          )}
        </div>
      </div>

      {/* Card */}
      <div
        className={`${isLeft ? "md:col-start-1 md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"} pl-12 md:pl-0 transition-all duration-700 ease-out motion-reduce:transition-none ${
          visible
            ? "opacity-100 translate-y-0 translate-x-0"
            : `opacity-0 translate-y-8 ${isLeft ? "md:-translate-x-6" : "md:translate-x-6"}`
        }`}
      >
        <div
          className={`group relative bg-card rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 will-change-transform ${cardClassMap[status]}`}
        >
          {/* Animated top border for ongoing */}
          {status === "ongoing" && (
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-shimmer" />
          )}

          {/* Card image section */}
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              width={1024}
              height={576}
              className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 ${
                status === "completed" || status === "ongoing" ? "brightness-125 contrast-110" : "brightness-95"
              }`}
            />
            
            {/* Status-based overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${
              status === "completed"
                ? "from-blue-950/90 via-blue-900/40 to-transparent"
                : status === "ongoing"
                ? "from-gold/90 via-blue-900/40 to-transparent"
                : "from-navy/80 via-navy/20 to-transparent"
            } to-transparent`} />

            {/* Progress indicator for ongoing */}
            {status === "ongoing" && (
              <div className="absolute inset-0 border-2 border-transparent border-t-blue-400 border-r-gold animate-spin-slow opacity-40" />
            )}

            {/* Date badge at bottom */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <span className={`inline-block text-xs font-bold tracking-widest uppercase ${
                status === "completed" ? "text-blue-300 drop-shadow-lg" :
                status === "ongoing" ? "text-gold drop-shadow-lg font-bold" :
                "text-gold drop-shadow-md"
              }`}>
                {item.date}
              </span>
            </div>
          </div>

          {/* Content section */}
          <div className={`p-6 ${isLeft ? "md:text-right" : "md:text-left"} text-left`}>
            <div className="flex items-center justify-between gap-4 mb-3">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-charcoal flex-1">
                {item.title}
              </h3>
              {status === "completed" && (
                <span className="text-[10px] font-extrabold px-3 py-1.5 rounded-full border-2 whitespace-nowrap flex-shrink-0 shadow-lg bg-gradient-to-r from-blue-500 to-gold text-white border-blue-600/60">
                  ✓ COMPLETED
                </span>
              )}
            </div>
            <p className="text-sm text-caption leading-relaxed">{item.desc}</p>
            
            {/* Status indicator bar */}
            <div className="mt-4 h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // Calculate completion percentage based on dates
  const completedCount = events.filter((item) => isDatePassed(item.date)).length;
  const completionPercentage = (completedCount / events.length) * 100;

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh * 0.5;
      const scrolled = Math.min(Math.max(vh - rect.top, 0), total);
      setProgress(Math.min(scrolled / total, 1));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="timeline" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-charcoal text-center mb-4">Competition & Events Timeline</h2>
        <div className="gold-divider mb-16" />

        <div ref={sectionRef} className="relative">
          {/* Ash spine base - desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-gradient-to-b from-gray-400 via-gray-350 to-gray-300 opacity-50" />
          
          {/* Gold/Brown animated spine fill - desktop */}
          <div
              className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] bg-gradient-to-b from-blue-500 via-gold to-blue-700 will-change-[height] shadow-lg"
            style={{ 
              height: `${Math.max(progress * 100, completionPercentage)}%`, 
              transition: "height 200ms ease-out",
                 boxShadow: "0 0 16px rgba(59, 130, 246, 0.6)"
            }}
          />

          {/* Mobile ash spine */}
          <div className="md:hidden absolute left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-gray-400 to-gray-300 opacity-50" />
          
          {/* Mobile gold/brown spine fill */}
          <div
              className="md:hidden absolute left-[22px] top-0 w-[2px] bg-gradient-to-b from-blue-500 via-gold to-blue-700 will-change-[height] shadow-md"
            style={{ 
              height: `${Math.max(progress * 100, completionPercentage)}%`, 
              transition: "height 200ms ease-out",
                 boxShadow: "0 0 12px rgba(59, 130, 246, 0.5)"
            }}
          />

          {events.map((item, i) => (
            <TimelineItem key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.95; }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 30px rgba(250,204,21,1), 0 0 50px rgba(250,204,21,0.5), inset 0 0 15px rgba(255,255,255,0.5);
          }
          50% {
            box-shadow: 0 0 50px rgba(250,204,21,0.8), 0 0 80px rgba(250,204,21,0.3), inset 0 0 20px rgba(255,255,255,0.3);
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes pulse-badge {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }
        .animate-pulse-badge {
          animation: pulse-badge 2s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(250,204,21,0.5), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        @keyframes fade-in-slow {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in-slow {
          animation: fade-in-slow 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default TimelineSection;
