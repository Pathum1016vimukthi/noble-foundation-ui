import { useEffect, useRef, useState } from "react";

type Item = { date: string; event: string };

interface TimelineProps {
  items: Item[];
}

const Timeline = ({ items }: TimelineProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const [fill, setFill] = useState(0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const completedCount = items.reduce((count, item) => {
    const itemDate = new Date(item.date);
    itemDate.setHours(0, 0, 0, 0);
    return itemDate <= today ? count + 1 : count;
  }, 0);

  const progressPercent = items.length > 0 ? (completedCount / items.length) * 100 : 0;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll(".phase-card")) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.index);
          if (entry.isIntersecting) {
            setVisible((s) => new Set(s).add(idx));
          }
        });
      },
      { threshold: 0.25 }
    );

    cards.forEach((c) => observer.observe(c));

    setFill(progressPercent);

    return () => {
      observer.disconnect();
    };
  }, [items, progressPercent]);

  return (
    <div className="max-w-3xl mx-auto mb-8" ref={containerRef}>
      <h3 className="text-lg text-charcoal text-center mb-2">Competition Timeline</h3>
      <p className="text-center text-muted-foreground text-sm mb-4">Key dates for the 2026 season. Plan ahead and stay on track.</p>

      <div className="relative pl-4">
        <div className="absolute left-2 top-0 bottom-0 w-px bg-[#9CA3AF]/30" aria-hidden="true" />
        <div
          className="timeline-spine-fill absolute left-2 top-0 w-1 rounded bg-gradient-to-b from-[#8B5E3C] via-[#C08A3E] to-[#F2D27A] shadow-[0_0_18px_rgba(192,138,62,0.35)]"
          style={{ height: `${fill}%`, transform: "translateX(-0.25rem)" }}
          aria-hidden="true"
        />

        {items.map((item, index) => {
          const side = index % 2 === 0 ? "left" : "right";
          const fromClass = side === "left" ? "-translate-x-6" : "translate-x-6";
          const isVisible = visible.has(index);
          const itemDate = new Date(item.date);
          itemDate.setHours(0, 0, 0, 0);
          const isComplete = itemDate <= today;

          return (
            <div key={item.event} className="relative flex items-start gap-2 pb-3 last:pb-0 lg:items-start">
              <div
                className={`timeline-node mt-1 h-3 w-3 rounded-full transition-all duration-500 ${
                  isComplete
                    ? "bg-gradient-to-br from-[#8B5E3C] via-[#C08A3E] to-[#F2D27A] shadow-[0_0_0_6px_rgba(192,138,62,0.15)]"
                    : "bg-[#9CA3AF] shadow-[0_0_0_6px_rgba(156,163,175,0.10)]"
                }`}
              />

              <div
                data-index={index}
                style={{ animationDelay: `${index * 120}ms` }}
                className={`phase-card bg-card border border-border rounded-md p-2 w-full shadow-sm transition-all duration-700 ease-out transform ${
                  isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${fromClass}`
                }`}
                role="group"
                aria-label={`${item.event} on ${item.date}`}
              >
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{item.date}</p>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-heading text-charcoal">{item.event}</p>
                  <span
                    className={`timeline-status shrink-0 rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.15em] ${
                      isComplete ? "bg-[#F8E7C6] text-[#8B5E3C]" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {isComplete ? "Completed" : "Upcoming"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
