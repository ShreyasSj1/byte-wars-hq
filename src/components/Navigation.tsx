import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "roadmap", label: "Roadmap" },
    { id: "prizes", label: "Prizes" },
    { id: "team", label: "Team" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-primary/10" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('home')}
              className="text-lg sm:text-xl font-bold text-brand transition-all duration-300 hover:scale-105 active:scale-95"
            >
              AIvolve
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="relative px-3 lg:px-4 py-2 text-foreground font-medium text-sm transition-all duration-200 hover:text-primary group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <Button 
              variant="hero" 
              size="sm" 
              className="hidden md:inline-flex btn-tap text-sm"
              onClick={() => window.open('https://forms.gle/DAu7Bm6hov77dXLV6', '_blank')}
            >
              Register Now
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground hover:text-primary transition-colors duration-200 p-2 tap-target"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu className={`w-6 h-6 absolute transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
                <X className={`w-6 h-6 absolute transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-16 right-0 bottom-0 w-full max-w-xs bg-card/98 backdrop-blur-lg border-l border-primary/20 shadow-xl z-40 md:hidden transition-transform duration-300 ease-out ${
          isMobileMenuOpen 
            ? "translate-x-0" 
            : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-1 h-full">
          {navLinks.map((link, index) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`group relative text-left text-foreground hover:text-primary transition-all duration-200 font-medium text-base py-3.5 px-4 rounded-lg hover:bg-primary/5 active:scale-[0.98] tap-target ${
                isMobileMenuOpen ? 'animate-fade-in' : ''
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-accent group-hover:h-6 transition-all duration-200 rounded-r" />
            </button>
          ))}
          
          <div className="mt-auto pt-6 border-t border-border">
            <Button
              variant="hero"
              size="lg"
              className={`w-full btn-tap ${isMobileMenuOpen ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: "200ms" }}
              onClick={() => {
                window.open('https://forms.gle/DAu7Bm6hov77dXLV6', '_blank');
                setIsMobileMenuOpen(false);
              }}
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
