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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled 
            ? "bg-background/98 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-b border-primary/10" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-10 lg:px-12">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo with hover effect */}
            <button 
              onClick={() => scrollToSection('home')}
              className="text-xl md:text-2xl font-bold text-brand transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]"
            >
              AIvolve
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2 lg:gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="relative px-4 lg:px-5 py-2 text-foreground font-semibold text-sm lg:text-base transition-all duration-250 hover:text-primary hover:scale-105 group"
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
              className="hidden md:inline-flex transition-all duration-250 hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
              onClick={() => window.open('https://forms.gle/DAu7Bm6hov77dXLV6', '_blank')}
            >
              Register Now
            </Button>

            {/* Mobile Menu Button with animation */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground hover:text-primary transition-all duration-250 hover:scale-110 hover:rotate-90 p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay with fade */}
      <div
        className={`fixed inset-0 bg-background/90 backdrop-blur-md z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel with slide and fade */}
      <div
        className={`fixed top-20 right-0 h-[calc(100vh-5rem)] w-72 bg-card/98 backdrop-blur-lg border-l-2 border-primary/40 shadow-[-8px_0_32px_rgba(0,0,0,0.5)] z-40 md:hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen 
            ? "translate-x-0 opacity-100" 
            : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col p-8 gap-2">
          {navLinks.map((link, index) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="group relative text-left text-foreground hover:text-primary transition-all duration-250 font-semibold text-lg py-4 px-4 rounded-lg hover:bg-primary/5 hover:scale-105 hover:translate-x-2 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-accent group-hover:h-8 transition-all duration-250 rounded-r" />
            </button>
          ))}
          <Button
            variant="hero"
            size="lg"
            className="mt-6 w-full animate-fade-in transition-all duration-250 hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
            style={{ animationDelay: "250ms" }}
            onClick={() => {
              window.open('https://forms.gle/DAu7Bm6hov77dXLV6', '_blank');
              setIsMobileMenuOpen(false);
            }}
          >
            Register Now
          </Button>
        </div>
      </div>
    </>
  );
};
