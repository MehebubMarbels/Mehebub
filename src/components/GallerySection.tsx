import photo1 from "@/assets/photo_2026-02-20_15-26-58.jpg";
import photo2 from "@/assets/photo_2026-02-20_15-27-18.jpg";
import photo3 from "@/assets/photo_2026-02-20_15-27-23.jpg";
import photo4 from "@/assets/photo_2026-02-20_15-27-28.jpg";
import photo5 from "@/assets/photo_2026-02-20_15-27-32.jpg";
import photo6 from "@/assets/photo_2026-02-20_15-27-37.jpg";
import photo7 from "@/assets/photo_2026-02-20_15-27-42.jpg";
import photo8 from "@/assets/photo_2026-02-20_15-27-46.jpg";
import photo9 from "@/assets/photo_2026-02-20_15-27-54.jpg";
import photo10 from "@/assets/photo_2026-02-20_15-27-58.jpg";
import photo11 from "@/assets/photo_2026-02-20_15-28-03.jpg";
import photo12 from "@/assets/photo_2026-02-20_15-28-07.jpg";
import photo13 from "@/assets/photo_2026-02-20_15-28-12.jpg";
import photo14 from "@/assets/photo_2026-02-20_15-28-15.jpg";
import photo15 from "@/assets/photo_2026-02-20_15-28-21.jpg";
import photo16 from "@/assets/photo_2026-02-20_15-28-41.jpg";
import photo17 from "@/assets/photo_2026-02-20_15-28-46.jpg";
import photo18 from "@/assets/photo_2026-02-20_15-28-50.jpg";
import photo19 from "@/assets/photo_2026-02-20_15-28-54.jpg";
import photo20 from "@/assets/photo_2026-02-20_15-28-58.jpg";
import photo21 from "@/assets/photo_2026-02-20_15-29-02.jpg";
import galleryGranite from "@/assets/gallery-granite.jpg";
import galleryTiles from "@/assets/gallery-tiles.jpg";
import galleryItalian from "@/assets/gallery-italian-marble.jpg";
import galleryStairs from "@/assets/gallery-stairs.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";

const portraitPhotos = [
  { src: photo1, label: "Marble Floor Polishing" },
  { src: photo2, label: "Granite Countertop Installation" },
  { src: photo3, label: "Italian Marble Wall Cladding" },
  { src: photo4, label: "Bathroom Tile Fitting" },
  { src: photo6, label: "Staircase Marble Steps" },
  { src: photo7, label: "Floor Tile Layout" },
  { src: photo8, label: "Wall Tile Design Work" },
  { src: photo9, label: "Granite Edge Polishing" },
  { src: photo10, label: "Marble Flooring Project" },
  { src: photo12, label: "Countertop Gas Hole Cutting" },
  { src: photo13, label: "Bathroom Renovation" },
  { src: photo15, label: "Stone Wall Finishing" },
  { src: photo16, label: "Living Room Marble Installation" },
  { src: photo17, label: "Commercial Tile Flooring" },
  { src: photo18, label: "Granite Wash Basin Fitting" },
  { src: photo19, label: "Premium Marble Polish Finish" },
  { src: photo20, label: "Complete Floor Tiling Project" },
  { src: photo21, label: "Granite Surface Work" },
  { src: galleryGranite, label: "Designer Tile Pattern" },
  { src: galleryTiles, label: "Marble Staircase Detail" },
  { src: galleryStairs, label: "Kitchen Countertop Finish" },
  { src: galleryItalian, label: "Italian Marble Showcase" },
];

const landscapePhotos = [
  { src: photo11, label: "Epoxy Joint Filling" },
  { src: photo14, label: "Italian Marble Flooring" },
  { src: photo5, label: "Kitchen Granite Slab" },
  { src: galleryKitchen, label: "Full Kitchen Granite Work" },
];

const GallerySection = () => (
  <section id="gallery" className="py-16 md:py-24 bg-stone-pattern" aria-label="Work gallery showing marble granite tile projects">
    <div className="container">
      <h2 className="text-2xl md:text-4xl font-heading font-bold text-center mb-3 text-foreground">
        Our Craftsmanship
      </h2>
      <p className="text-center text-muted-foreground mb-4 font-body max-w-xl mx-auto text-sm md:text-base px-2">
        Browse real photos from our marble, granite, and tile fitting projects across homes and offices.
      </p>
      <div className="w-16 h-1 bg-accent mx-auto mb-10 md:mb-12 rounded-full" />

      {/* Portrait 3:4 Photos */}
      <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-5 flex items-center gap-2">
        <span className="w-8 h-0.5 bg-accent inline-block" /> Project Highlights
      </h3>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-3 space-y-2 md:space-y-3 mb-12 md:mb-16">
        {portraitPhotos.map((p) => (
          <figure key={p.label} className="break-inside-avoid rounded-lg overflow-hidden shadow-stone group relative">
            <img
              src={p.src}
              alt={`${p.label} - professional stone work by Mehebub Alam`}
              className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-xs md:text-sm font-body font-medium text-primary-foreground">{p.label}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Landscape 16:9 Photos */}
      <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-5 flex items-center gap-2">
        <span className="w-8 h-0.5 bg-accent inline-block" /> Panoramic Views
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12 md:mb-16">
        {landscapePhotos.map((p) => (
          <figure key={p.label} className="rounded-lg overflow-hidden shadow-stone group relative">
            <img
              src={p.src}
              alt={`${p.label} - expert stone work`}
              className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-xs md:text-sm font-body font-medium text-primary-foreground">{p.label}</span>
            </figcaption>
          </figure>
        ))}
      </div>

    </div>
  </section>
);

export default GallerySection;
