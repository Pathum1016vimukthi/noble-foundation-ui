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

const TimelineItem = ({ item, index }: { item: typeof events[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isLeft = index % 2 === 0;

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

  return (
    <div
      ref={ref}
      className="relative md:grid md:grid-cols-2 md:gap-12 mb-16 md:mb-24"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Node */}
      <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 z-10">
        <span className={`block w-5 h-5 rounded-full bg-gold ring-4 ring-background shadow-[0_0_0_4px_hsl(var(--gold)/0.25)] ${visible ? "animate-timeline-pulse" : ""}`} />
      </div>

      {/* Mobile node */}
      <div className="md:hidden absolute left-4 top-6 z-10">
        <span className={`block w-4 h-4 rounded-full bg-gold ring-4 ring-background ${visible ? "animate-timeline-pulse" : ""}`} />
      </div>

      {/* Card */}
      <div
        className={`${isLeft ? "md:col-start-1 md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"} pl-12 md:pl-0 transition-all duration-700 ease-out motion-reduce:transition-none ${
          visible
            ? "opacity-100 translate-y-0 translate-x-0"
            : `opacity-0 translate-y-8 ${isLeft ? "md:-translate-x-6" : "md:translate-x-6"}`
        }`}
      >
        <div className="group relative bg-card rounded-xl overflow-hidden border border-border shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-gold hover:shadow-[0_0_30px_-8px_hsl(var(--gold)/0.6)] will-change-transform">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              width={1024}
              height={576}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4">
              <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-gold">
                {item.date}
              </span>
            </div>
          </div>
          <div className={`p-6 ${isLeft ? "md:text-right" : "md:text-left"} text-left`}>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-charcoal mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-caption leading-relaxed">{item.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

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
        <h2 className="text-3xl md:text-4xl text-charcoal text-center mb-4">Event Timeline</h2>
        <div className="gold-divider mb-16" />

        <div ref={sectionRef} className="relative">
          {/* Center line - desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gold/15" />
          <div
            className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] bg-gradient-to-b from-gold via-gold to-gold/40 will-change-[height]"
            style={{ height: `${progress * 100}%`, transition: "height 120ms linear" }}
          />

          {/* Mobile line */}
          <div className="md:hidden absolute left-[22px] top-0 bottom-0 w-px bg-gold/20" />
          <div
            className="md:hidden absolute left-[22px] top-0 w-[2px] bg-gold will-change-[height]"
            style={{ height: `${progress * 100}%`, transition: "height 120ms linear" }}
          />

          {events.map((item, i) => (
            <TimelineItem key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
