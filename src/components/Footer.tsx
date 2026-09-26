import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  return (
    <footer className="bg-primary text-primary-foreground py-10 md:py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="font-heading font-bold text-lg mb-3">Expert Marble & Tile Fitting</h4>
            <p className="text-sm text-primary-foreground/70 font-body mb-3">
              Professional marble, granite, and tile fitting services. Quality craftsmanship for your home and office. Based in Bengaluru, serving all across India.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              <a href="https://www.facebook.com/sk.jabed.5030927" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/sk304551" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              <a href="https://www.youtube.com/@skmehebub550" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors" aria-label="YouTube"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-bold text-lg mb-3">Quick Links</h4>
            <div className="space-y-2 font-body text-sm">
              <a href="#services" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">Services</a>
              <a href="#pricing" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">Pricing</a>
              <a href="#gallery" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">Gallery</a>
              <a href="#contact" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-bold text-lg mb-3">Contact</h4>
            <div className="space-y-2 font-body text-sm text-primary-foreground/70">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center md:justify-start">
                <a href="tel:+919239305089" className="flex items-center gap-2 hover:text-primary-foreground transition-colors justify-center md:justify-start p-1.5 rounded-md hover:bg-primary-foreground/5">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <Phone className="w-4 h-4 text-green-400" />
                    <MessageCircle className="w-3.5 h-3.5 text-green-400 -ml-1" />
                  </div>
                  <div className="text-left">
                    <span className="block font-medium text-primary-foreground">+91 92393 05089</span>
                    <span className="block text-[10px] text-primary-foreground/50">Call & WhatsApp</span>
                  </div>
                </a>
                <a href="tel:+918431948814" className="flex items-center gap-2 hover:text-primary-foreground transition-colors justify-center md:justify-start p-1.5 rounded-md hover:bg-primary-foreground/5">
                  <Phone className="w-4 h-4 shrink-0" />
                  <div className="text-left">
                    <span className="block font-medium text-primary-foreground">+91 84319 48814</span>
                    <span className="block text-[10px] text-primary-foreground/50">Call Only</span>
                  </div>
                </a>
              </div>
              <a href="mailto:mehebubsk679@gmail.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors justify-center md:justify-start">
                <Mail className="w-4 h-4" /> mehebubsk679@gmail.com
              </a>
              <div className="flex items-start gap-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Bengaluru, Karnataka 560047 · Serving all India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-xs md:text-sm text-primary-foreground/50 font-body">
          © {new Date().getFullYear()} Expert Marble & Tile Fitting by Mehebub Alam. All rights reserved.
        </div>

        <div className="mt-4">
          <button
            onClick={() => setDisclaimerOpen(!disclaimerOpen)}
            className="mx-auto flex items-center gap-1.5 text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors font-body"
          >
            Legal Disclaimer
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-300 ${disclaimerOpen ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${disclaimerOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"}`}
          >
            <p className="text-[11px] md:text-xs text-primary-foreground/40 text-center max-w-3xl mx-auto leading-relaxed font-body">
              Disclaimer: This website serves solely as an informational platform. The web developer is strictly a technical service provider and is not responsible or liable for the services provided, business operations, quality of work, pricing agreements, or any disputes between the business owner (Sk Mehebub Alam) and their clients. All service-related responsibilities and legal liabilities rest entirely with the business.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-primary-foreground/10 text-center font-body">
          <p className="text-xs text-primary-foreground/50 tracking-wide">
            Website Designed & Developed by{" "}
            <a
              href="https://www.linkedin.com/in/nafeeshossain/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent-foreground/90 hover:text-primary-foreground transition-colors underline underline-offset-4 decoration-accent/50"
            >
              Nafees Hossain
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
