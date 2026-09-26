import { Grid3X3, Gem, Mountain, Sparkles, Flame, Droplets, FlaskConical, Wrench } from "lucide-react";

const services = [
  { icon: Grid3X3, title: "Tiles", desc: "Floor & wall tiles in all sizes — 2×2, 2×4, 4×5, 4×6, and 8×4 formats" },
  { icon: Mountain, title: "Granite", desc: "Durable granite flooring, walls, countertops, steps, and edge polishing" },
  { icon: Gem, title: "Marble", desc: "Classic marble fitting with professional machine polish finish" },
  { icon: Sparkles, title: "Italian Marble", desc: "Premium imported Italian marble installation with mirror polish" },
  { icon: Flame, title: "Gas Hole Cutting", desc: "Precise gas stove hole cutting on granite and marble countertops" },
  { icon: Droplets, title: "Epoxy", desc: "Seamless epoxy joint filling for a smooth, dust-free finish" },
  { icon: FlaskConical, title: "Acid Grout", desc: "Professional acid grout cleaning and finishing for tiles" },
  { icon: Wrench, title: "Repair Work", desc: "Complete stone, tile, and marble repair with machine and helper" },
];

const workTypes = [
  "Floor Tile Fitting",
  "Wall Tile Fitting",
  "Granite Countertops",
  "Marble Polishing",
  "Italian Marble Installation",
  "Staircase Step Fitting",
  "Bathroom Renovation",
  "Gas Hole Cutting",
  "Epoxy Joint Filling",
  "Acid Grout Cleaning",
  "Wash Basin Fitting",
  "Stone Repair Work",
];

const ServicesSection = () => (
  <section id="services" className="py-16 md:py-24 bg-stone-pattern" aria-label="Marble tile granite fitting services">
    <div className="container">
      <h2 className="text-2xl md:text-4xl font-heading font-bold text-center mb-3 text-foreground">
        Our Services
      </h2>
      <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto font-body text-sm md:text-base px-2">
        Comprehensive marble, granite, and tile fitting solutions for residential and commercial spaces. From new installations to complete bathroom renovations — available anywhere in India.
      </p>
      <div className="w-16 h-1 bg-accent mx-auto mb-10 md:mb-12 rounded-full" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
        {services.map((s) => (
          <article
            key={s.title}
            className="bg-background rounded-xl p-4 md:p-6 text-center shadow-stone hover:-translate-y-1 transition-all duration-300 border border-border hover:border-accent/40 hover:shadow-lg group"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <s.icon className="w-6 h-6 md:w-7 md:h-7 text-accent" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-1 md:mb-2 text-base md:text-lg">{s.title}</h3>
            <p className="text-xs md:text-sm text-muted-foreground font-body leading-relaxed">{s.desc}</p>
          </article>
        ))}
      </div>

      {/* What We Handle */}
      <div className="mt-12 md:mt-16 rounded-2xl overflow-hidden border border-border shadow-stone">
        <div className="bg-primary px-6 py-4 md:px-8 md:py-5">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-primary-foreground text-center">What We Handle</h3>
        </div>
        <div className="bg-background p-4 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 font-body">
            {workTypes.map((item) => (
              <div key={item} className="flex items-center gap-2 p-3 rounded-lg bg-secondary/60 border border-border hover:border-accent/30 transition-colors">
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <p className="text-xs md:text-sm font-medium text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
