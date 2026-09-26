import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import ownerImg from "@/assets/owner-profile.jpg";

const ContactSection = () => (
  <section id="contact" className="py-16 md:py-24 bg-background" aria-label="Contact information">
    <div className="container max-w-4xl">
      <h2 className="text-2xl md:text-4xl font-heading font-bold text-center mb-3 text-foreground">
        Get In Touch
      </h2>
      <p className="text-center text-muted-foreground mb-4 font-body max-w-xl mx-auto text-sm md:text-base px-2">
        Ready to transform your space? Contact Sk Mehebub Alam directly for a free consultation and quote.
      </p>
      <div className="w-16 h-1 bg-accent mx-auto mb-10 md:mb-12 rounded-full" />

      {/* Owner Card */}
      <div className="relative bg-card rounded-2xl overflow-hidden shadow-stone border border-border">
        <div className="bg-primary h-28 md:h-40" />
        <div className="px-6 md:px-10 pb-8 md:pb-10 -mt-16 md:-mt-20">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="shrink-0 text-center">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-accent shadow-stone mx-auto ring-4 ring-background">
                <img src={ownerImg} alt="Sk Mehebub Alam - marble and tile expert" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mt-3">Sk Mehebub Alam</h3>
              <p className="text-sm text-accent font-body font-medium">Master Stone Craftsman</p>
            </div>
            <div className="space-y-3 text-center md:text-left font-body flex-1 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-2 rounded-lg hover:bg-secondary/50 transition-colors border border-border bg-card/50">
                  <div className="flex items-center justify-center sm:justify-start gap-3 text-foreground">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="text-center sm:text-left">
                      <span className="font-semibold block text-sm md:text-base">+91 92393 05089</span>
                      <span className="text-xs text-muted-foreground">Call & WhatsApp</span>
                    </div>
                  </div>
                  <div className="flex justify-center sm:justify-start gap-2 mt-2 pl-0 sm:pl-13">
                    <a href="tel:+919239305089" className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors">
                      <Phone className="w-3 h-3" /> Call
                    </a>
                    <a href="https://wa.me/919239305089" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md bg-green-500/10 text-green-600 hover:bg-green-500 hover:text-white transition-colors">
                      <MessageCircle className="w-3 h-3" /> WhatsApp
                    </a>
                  </div>
                </div>
                <div className="p-2 rounded-lg hover:bg-secondary/50 transition-colors border border-border bg-card/50">
                  <div className="flex items-center justify-center sm:justify-start gap-3 text-foreground">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div className="text-center sm:text-left">
                      <span className="font-semibold block text-sm md:text-base">+91 84319 48814</span>
                      <span className="text-xs text-muted-foreground">Call Only</span>
                    </div>
                  </div>
                  <div className="flex justify-center sm:justify-start gap-2 mt-2 pl-0 sm:pl-13">
                    <a href="tel:+918431948814" className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors">
                      <Phone className="w-3 h-3" /> Call
                    </a>
                  </div>
                </div>
              </div>
              <a href="mailto:mehebubsk679@gmail.com" className="flex items-center justify-center md:justify-start gap-3 text-foreground hover:text-accent transition-colors p-2 rounded-lg hover:bg-secondary/50">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="font-semibold block text-sm md:text-base break-all">mehebubsk679@gmail.com</span>
                  <span className="text-xs text-muted-foreground">Email for quotes</span>
                </div>
              </a>
              <div className="flex items-center justify-center md:justify-start gap-3 text-foreground p-2">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="font-semibold block text-sm md:text-base">Bengaluru, Karnataka</span>
                  <span className="text-xs text-muted-foreground">36/38, Bazaar St, Rose Garden, Austin Town, Neelasandra – 560047</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Profiles */}
      <div className="flex justify-center gap-4 mt-8">
        <a href="https://www.facebook.com/sk.jabed.5030927" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-colors" aria-label="Facebook">
          <Facebook className="w-5 h-5 text-accent" />
        </a>
        <a href="https://www.instagram.com/sk304551" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-colors" aria-label="Instagram">
          <Instagram className="w-5 h-5 text-accent" />
        </a>
        <a href="https://www.youtube.com/@skmehebub550" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-colors" aria-label="YouTube">
          <Youtube className="w-5 h-5 text-accent" />
        </a>
      </div>

      {/* Trust Info */}
      <div className="grid grid-cols-3 gap-3 mt-8">
        {[
          { label: "All India Service", icon: MapPin },
          { label: "Free Consultation", icon: Mail },
          { label: "Residential & Commercial", icon: Phone },
        ].map((b) => (
          <div key={b.label} className="text-center p-3 md:p-4 rounded-lg bg-card border border-border">
            <b.icon className="w-5 h-5 md:w-6 md:h-6 text-accent mx-auto mb-2" />
            <span className="text-xs md:text-sm font-body font-medium text-foreground">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
