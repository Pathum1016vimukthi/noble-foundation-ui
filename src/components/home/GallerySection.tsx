import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = Array.from({ length: 10 }, (_, i) => i + 1);

const GallerySection = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <section id="gallery" className="section-padding bg-soft-grey">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-charcoal mb-4">Gallery</h2>
        <div className="gold-divider mb-12" />
        <Carousel
          plugins={[plugin.current]}
          opts={{ loop: true, align: "start" }}
          className="px-8"
        >
          <CarouselContent>
            {images.map((img) => (
              <CarouselItem key={img} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="relative aspect-square bg-muted rounded overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-all duration-300 flex items-center justify-center z-10">
                    <span className="text-navy-foreground opacity-0 group-hover:opacity-100 transition-opacity text-sm font-body font-semibold">
                      View
                    </span>
                  </div>
                  <div className="w-full h-full flex items-center justify-center text-caption text-xs">
                    Photo {img}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default GallerySection;
