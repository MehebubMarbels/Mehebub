import { Phone, Star, MapPin, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-marble.jpg";
import ownerImg from "@/assets/owner-profile.jpg";

const HeroSection = () => (
  <section className="relative min-h-[92vh] flex items-center" aria-label="Hero">
    <img
      src={heroImg}
      alt="Luxury marble flooring installation by Mehebub Alam"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0 bg-hero-overlay" />
    <div className="container relative z-10 py-16 md:py-20">
      <div className="max-w-2xl space-y-5 mx-auto text-center md:text-left md:mx-0">
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-accent shadow-stone mx-auto md:mx-0">
          <img
            src={ownerImg}
            alt="Sk Mehebub Alam - Expert marble and tile fitter"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="flex items-center gap-1 justify-center md:justify-start">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
          ))}
          <span className="text-primary-foreground/70 text-xs md:text-sm font-body ml-2">Trusted by homeowners across India</span>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight">
          Expert Marble &amp; Tile Fitting
          <span className="block text-accent text-xl md:text-3xl mt-2 font-medium">by Sk Mehebub Alam</span>
        </h1>
        <p className="text-base md:text-xl text-primary-foreground/80 font-body max-w-lg mx-auto md:mx-0">
          Simple, clean, and professional stone work for your home and office.
          Specializing in marble, granite, and tile installations.
        </p>
        <div className="flex items-center justify-center md:justify-start gap-2 text-primary-foreground/60 text-sm font-body">
          <MapPin className="w-4 h-4" />
          <span>Based in Bengaluru · Serving all across India</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl mx-auto md:mx-0">
          <a
            href="tel:+919239305089"
            className="group relative bg-accent text-accent-foreground px-4 py-3 md:py-4 rounded-lg font-semibold hover:opacity-90 transition-all shadow-stone overflow-hidden"
          >
            <div className="flex items-center gap-2.5 justify-center mb-1">
              <Phone className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5 shrink-0 -ml-1" />
              <span className="text-xs md:text-sm font-medium opacity-90">Call & WhatsApp</span>
            </div>
            <div className="text-base md:text-lg font-bold text-center tracking-wide">+91 92393 05089</div>
          </a>
          <a
            href="tel:+918431948814"
            className="group relative bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground px-4 py-3 md:py-4 rounded-lg font-semibold hover:bg-primary-foreground/15 hover:border-primary-foreground/30 transition-all"
          >
            <div className="flex items-center gap-2.5 justify-center mb-1">
              <Phone className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
              <span className="text-xs md:text-sm font-medium opacity-70">Call Only</span>
            </div>
            <div className="text-base md:text-lg font-bold text-center tracking-wide">+91 84319 48814</div>
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center md:justify-start pt-1">
          <a
            href="https://wa.me/919239305089"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-green-600 transition-colors shadow-md w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-5 md:px-6 py-2.5 md:py-3 rounded-lg text-sm md:text-base font-medium hover:border-primary-foreground/60 transition-colors w-full sm:w-auto justify-center"
          >
            View Our Work
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
