const tilesPricing = [
  { item: "Floor tiles (2×2)", price: "₹25/sq ft" },
  { item: "Wall tiles (2×2)", price: "₹27/sq ft" },
  { item: "Floor tiles (2×4)", price: "₹27/sq ft" },
  { item: "Wall tiles (2×4)", price: "₹30/sq ft" },
  { item: "Floor tiles (4×5)", price: "₹33/sq ft" },
  { item: "Wall tiles (4×5)", price: "₹39/sq ft" },
  { item: "Floor tiles (4×6)", price: "₹52/sq ft" },
  { item: "Wall tiles (4×6)", price: "₹56/sq ft" },
  { item: "Wall tiles (8×4)", price: "₹60/sq ft" },
];

const granitePricing = [
  { item: "Granite wall", price: "₹65/sq ft" },
  { item: "Granite flooring", price: "₹50/sq ft" },
  { item: "Marble fitting with polish", price: "₹110/sq ft" },
  { item: "Italian marble with polish", price: "₹130/sq ft" },
];

const specialPricing = [
  { item: "Normal granite kitchen counter", price: "₹8,500" },
  { item: "Cords lemsem kitchen counter", price: "₹10,000" },
  { item: "Normal granite step (cutting/fitting)", price: "₹480/piece" },
  { item: "Design granite step", price: "₹560/piece" },
  { item: "Granite half-round polish", price: "₹45" },
  { item: "Granite full-round polish", price: "₹50" },
  { item: "Granite edge polish", price: "₹40" },
  { item: "Granite wash basin (with hole & polish)", price: "₹1,200" },
  { item: "Gas hole cutting", price: "₹1,000/piece" },
  { item: "Epoxy", price: "₹12" },
  { item: "Acid grout", price: "₹10" },
  { item: "Repair work (1 machine + 1 helper)", price: "₹3,500" },
];

const PriceTable = ({ title, data }: { title: string; data: { item: string; price: string }[] }) => (
  <div className="mb-6 md:mb-8">
    <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-3">{title}</h3>
    <div className="rounded-lg overflow-hidden border border-border">
      {data.map((row, i) => (
        <div
          key={row.item}
          className={`flex justify-between px-4 md:px-5 py-2.5 md:py-3 font-body text-xs md:text-base ${
            i % 2 === 0 ? "bg-background" : "bg-secondary"
          }`}
        >
          <span className="text-foreground">{row.item}</span>
          <span className="font-semibold text-accent whitespace-nowrap ml-4">{row.price}</span>
        </div>
      ))}
    </div>
  </div>
);

const PricingSection = () => (
  <section id="pricing" className="py-16 md:py-20 bg-background" aria-label="Pricing guide for marble granite tile fitting">
    <div className="container max-w-3xl">
      <h2 className="text-2xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">
        Pricing Guide
      </h2>
      <p className="text-center text-muted-foreground mb-10 md:mb-12 font-body text-sm md:text-base px-2">
        Transparent pricing for all our marble, granite, and tile services.
      </p>

      <PriceTable title="Tile Fitting" data={tilesPricing} />
      <PriceTable title="Granite & Marble" data={granitePricing} />
      <PriceTable title="Specialized Services" data={specialPricing} />

      {/* Special Package */}
      <div className="rounded-lg bg-primary text-primary-foreground p-5 md:p-6 mt-6 shadow-stone">
        <h3 className="text-lg md:text-xl font-heading font-bold mb-2">🏠 Special Package: Complete Bathroom Renovation</h3>
        <p className="font-body text-sm md:text-base">
          Includes demolition, old bathroom removal, new fitting, and rough plastering —{" "}
          <span className="font-bold text-accent">₹25,000 total</span>
        </p>
      </div>

      {/* Payment Terms */}
      <div className="mt-6 md:mt-8 rounded-lg border-2 border-accent bg-stone-light p-5 md:p-6">
        <h3 className="text-base md:text-lg font-heading font-bold text-foreground mb-2">💰 Payment Terms</h3>
        <p className="font-body text-foreground text-sm md:text-base">
          An advance payment is required on the first day of work. A partial payment is expected midway through the project, and the final balance must be cleared in full upon project completion.
        </p>
      </div>
    </div>
  </section>
);

export default PricingSection;
