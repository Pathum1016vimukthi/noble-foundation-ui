const images = Array.from({ length: 10 }, (_, i) => i + 1);

const GallerySection = () => (
  <section id="gallery" className="section-padding bg-soft-grey">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl text-charcoal mb-4">Gallery</h2>
      <div className="gold-divider mb-12" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {images.map((img) => (
          <div
            key={img}
            className="relative aspect-square bg-muted rounded overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-all duration-300 flex items-center justify-center">
              <span className="text-navy-foreground opacity-0 group-hover:opacity-100 transition-opacity text-sm font-body font-semibold">
                View
              </span>
            </div>
            <div className="w-full h-full flex items-center justify-center text-caption text-xs">
              Photo {img}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
