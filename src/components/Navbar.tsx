import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-heading font-bold text-lg text-foreground">
          Expert Marble & Tile
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/919239305089" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 text-sm font-semibold transition-colors">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
          <a href="tel:+919239305089" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity">
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-body font-medium text-muted-foreground hover:text-foreground py-2">
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-1">
            <a href="tel:+919239305089" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-semibold">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a href="https://wa.me/919239305089" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 border border-accent text-accent px-4 py-2 rounded-md text-sm font-semibold">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
