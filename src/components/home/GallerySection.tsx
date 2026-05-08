import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const slides = [
  { title: "Robotics Exhibition 2025", subtitle: "Innovators showcasing autonomous designs" },
  { title: "Young Inventors Presenting to IESL Judges", subtitle: "Final round evaluations" },
  { title: "Sustainable Energy Showcase 2024", subtitle: "Renewable concepts by school teams" },
  { title: "Smart City Prototypes", subtitle: "Engineering tomorrow's infrastructure" },
  { title: "Award Ceremony 2024", subtitle: "Celebrating Sri Lanka's brightest minds" },
  { title: "JIY Bootcamp Sessions", subtitle: "Mentorship from senior IESL engineers" },
  { title: "Hands-on Workshops", subtitle: "From concept to working prototype" },
  { title: "National Finals 2023", subtitle: "Top inventors of the year" },
];

const GallerySection = () => {
  const plugin = useRef(Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }));
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading text-navy-foreground mb-4">
          Exhibition Highlights
        </h2>
        <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />
        <p className="text-navy-foreground/70 font-body max-w-2xl mx-auto">
          A look back at past JIY moments — innovation, creativity, and the future of engineering.
        </p>
      </div>

      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        opts={{ loop: true, align: "center" }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {slides.map((slide, idx) => {
            const active = idx === current;
            return (
              <CarouselItem
                key={idx}
                className="pl-2 md:pl-4 basis-[85%] sm:basis-[70%] md:basis-[60%] lg:basis-[50%]"
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`relative w-full aspect-[16/9] rounded-lg overflow-hidden transition-all duration-500 ${
                      active
                        ? "scale-100 opacity-100 ring-2 ring-gold shadow-[0_20px_60px_-15px_hsl(var(--gold)/0.4)]"
                        : "scale-90 opacity-50"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-royal/40 to-navy flex items-center justify-center">
                      <span className="text-navy-foreground/50 font-body text-sm">
                        Photo {idx + 1}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`mt-6 text-center transition-opacity duration-500 ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <h3 className="font-heading text-xl md:text-2xl text-navy-foreground">
                      {slide.title}
                    </h3>
                    <p className="font-body text-sm text-navy-foreground/60 mt-1">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-4 md:left-8 h-11 w-11 bg-transparent border-navy-foreground/40 text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground" />
        <CarouselNext className="right-4 md:right-8 h-11 w-11 bg-transparent border-navy-foreground/40 text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground" />
      </Carousel>

      <div className="flex justify-center gap-2 mt-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => api?.scrollTo(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === current ? "w-8 bg-gold" : "w-2 bg-navy-foreground/30 hover:bg-navy-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
