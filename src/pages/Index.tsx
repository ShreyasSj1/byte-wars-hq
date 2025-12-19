import { Navigation } from "@/components/Navigation";
import { Countdown } from "@/components/Countdown";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { FloatingShapes } from "@/components/FloatingShapes";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCard } from "@/components/AnimatedCard";
import { useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { Brain, Lightbulb, Trophy, Users, Clock, Target, Phone, MessageCircle } from "lucide-react";
import teamSpoorthi from "@/assets/team-spoorthi.jpeg";
import teamSoumya from "@/assets/team-soumya.jpeg";
import teamAreeb from "@/assets/team-areeb.jpeg";
import teamFaculty from "@/assets/team-faculty.jpeg";

const Index = () => {
  const highlightsAnim = useStaggerAnimation(4, 100);
  const roadmapAnim = useStaggerAnimation(5, 150);
  const prizesAnim = useStaggerAnimation(4, 100);
  const teamAnim = useStaggerAnimation(4, 120);

  const highlights = [
    { icon: Brain, title: "6-Hour Innovation Sprint", desc: "Focused creation session" },
    { icon: Lightbulb, title: "Creative Exploration", desc: "Think beyond boundaries" },
    { icon: Trophy, title: "Inspiring Rewards", desc: "Celebrate your growth" },
    { icon: Users, title: "Collaborative Learning", desc: "Build together, grow together" },
  ];

  const roadmapItems = [
    { icon: "🎯", time: "8:00 AM", title: "Problem Statement Reveal", desc: "Teams report and receive their challenge themes." },
    { icon: "🚀", time: "9:00 AM", title: "Hackathon Starts", desc: "Teams begin brainstorming and building their solution." },
    { icon: "💻", time: "Until 3:00 PM", title: "Development + Pitch Preparation", desc: "Build your prototype, refine features, and prepare your presentation." },
    { icon: "🎤", time: "3:00 - 4:00 PM", title: "Project Pitching to Judges", desc: "Teams showcase their solution, approach, and AI implementation." },
    { icon: "🏆", time: "5:00 PM", title: "Results & Prize Distribution", desc: "Winners announced and awards handed out." },
  ];

  const prizes = [
    { emoji: "🏆", title: "1st Place", subtitle: "AIvolve Champions", prize: "₹3000", extra: "Trophy + Winning Certificates", accent: true },
    { emoji: "🔥", title: "Runner-Up", subtitle: "2nd Place", prize: null, extra: "Certificate + Goodies", accent: false },
    { emoji: "🎯", title: "Best Presentation", subtitle: "Special Award", prize: null, extra: "Recognition Certificate", accent: false },
    { emoji: "⭐", title: "All Participants", subtitle: "Everyone Wins", prize: null, extra: "Participation Certificates", accent: false },
  ];

  const teamMembers = [
    { name: "Spoorthi SJ", role: "Event Coordinator", image: teamSoumya },
    { name: "Soumya Mantha", role: "Event Coordinator", image: teamSpoorthi },
    { name: "Mohommed Areeb", role: "Event Coordinator", image: teamAreeb },
  ];

  return (
    <div className="min-h-screen scroll-smooth">
      <Navigation />
      
      {/* Hero Section - Mobile First */}
      <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        
        {/* Animated Background - Reduced on mobile */}
        <div className="hidden sm:block">
          <ParticlesBackground />
        </div>
        <FloatingShapes />
        
        <div className="container mx-auto relative z-10 pt-16">
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedSection animation="scale" delay={0}>
              <h1 className="text-responsive-hero font-bold mb-4 sm:mb-6">
                <span className="text-brand-glow">AIvolve</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={150}>
              <p className="text-responsive-subtitle font-bold mb-3 sm:mb-4 text-foreground">
                Evolving Intelligence Hackathon
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={300}>
              <p className="text-responsive-body text-muted-foreground mb-6 sm:mb-10 font-semibold">
                Build. Create. Innovate.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={450}>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-6 justify-center items-center mb-8 sm:mb-12">
                <div className="flex items-center gap-2 text-foreground text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>December 20, 2025 • 8:00 AM</span>
                </div>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground"></div>
                <div className="flex items-center gap-2 text-foreground text-sm">
                  <Target className="w-4 h-4 text-primary" />
                  <span>SAC Building, PDACEK</span>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={600}>
              <div className="mb-8 sm:mb-12">
                <Countdown targetDate="2025-12-20T08:00:00" />
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={750}>
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 h-auto btn-tap animate-pulse-glow"
                onClick={() => window.open('https://forms.gle/DAu7Bm6hov77dXLV6', '_blank')}
              >
                Register Now
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 sm:py-20 md:py-28 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6">
          <div 
            ref={highlightsAnim.containerRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {highlights.map((item, index) => (
              <AnimatedCard 
                key={index} 
                isVisible={highlightsAnim.isVisible}
                delay={highlightsAnim.getDelay(index)}
                hoverEffect="lift"
              >
                <Card className="bg-card border-2 border-primary/30 shadow-card card-interactive h-full">
                  <CardContent className="p-5 sm:p-6 text-center">
                    <item.icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-primary drop-shadow-glow" />
                    <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <AnimatedSection className="text-center mb-8 sm:mb-12">
            <h2 className="text-responsive-title font-bold mb-3 sm:mb-4">
              About <span className="text-brand-subtle">AIvolve</span>
            </h2>
            <div className="h-1.5 w-20 sm:w-28 bg-gradient-vibrant mx-auto rounded-full shadow-glow"></div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <Card className="bg-card border-2 border-primary/30 shadow-card card-interactive">
              <CardContent className="p-5 sm:p-8">
                <div className="space-y-4 text-responsive-body text-muted-foreground">
                  <p>
                    <span className="text-brand-subtle font-bold">AIvolve</span> is where ideas stop being ideas — and become innovation.
                  </p>
                  <p>
                    A 6-hour sprint of imagination, engineering, caffeine, and breakthroughs, this hackathon invites you to step into the frontier where intelligence is created, not just consumed.
                  </p>
                  <p>
                    You won't just be coding.<br />
                    You'll be solving. Designing. Inventing.<br />
                    You'll watch an idea evolve into something real.
                  </p>
                  <p>
                    Mentors and senior innovators from the Computer Science community will guide you throughout the journey.
                  </p>
                  <div className="bg-primary/15 border-l-4 border-primary p-4 rounded-lg shadow-neon-purple">
                    <p className="text-foreground font-bold mb-2">🌟 What AIvolve Represents</p>
                    <p className="text-foreground font-bold text-sm sm:text-base mb-1">💭 The Vision — Create future-forward projects powered by AI in just 6 hours.</p>
                    <p className="text-foreground font-bold text-sm sm:text-base">🧠 The Spirit — Learn together. Build together. Grow together.</p>
                  </div>
                  <p className="text-foreground font-bold">
                    The future needs builders. Are you stepping in? 🚀
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-12 sm:py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <AnimatedSection className="text-center mb-8 sm:mb-12">
            <h2 className="text-responsive-title font-bold mb-3 sm:mb-4">
              Event <span className="text-primary drop-shadow-glow">Roadmap</span>
            </h2>
            <div className="h-1.5 w-20 sm:w-28 bg-gradient-vibrant mx-auto mb-4 rounded-full shadow-glow"></div>
            <p className="text-muted-foreground text-responsive-body">Your journey through AIvolve</p>
          </AnimatedSection>

          {/* Timeline - Mobile First Vertical */}
          <div ref={roadmapAnim.containerRef} className="relative">
            {/* Vertical Line */}
            <div className="absolute left-5 sm:left-6 md:left-1/2 md:-translate-x-1/2 w-0.5 sm:w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full shadow-glow"></div>

            <div className="space-y-6 sm:space-y-8">
              {roadmapItems.map((item, index) => (
                <AnimatedCard
                  key={index}
                  isVisible={roadmapAnim.isVisible}
                  delay={roadmapAnim.getDelay(index)}
                  hoverEffect="glow"
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-5 sm:left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary border-2 sm:border-4 border-background shadow-neon-purple z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`ml-12 sm:ml-16 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="bg-card border-2 border-primary/30 shadow-card card-interactive">
                      <CardContent className="p-4 sm:p-5">
                        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                          <span className="text-2xl sm:text-3xl">{item.icon}</span>
                          <div className="bg-primary/20 border border-primary/50 rounded-lg px-2.5 py-1 sm:px-3 sm:py-1.5 shadow-neon-purple">
                            <p className="text-primary font-bold text-xs sm:text-sm">{item.time}</p>
                          </div>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold mb-1.5 text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Judging */}
      <section className="py-12 sm:py-20 md:py-28 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Rules */}
            <AnimatedSection animation="slide-left">
              <div className="flex flex-col h-full">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-foreground">
                  Guidelines & <span className="text-primary drop-shadow-glow">Principles</span>
                </h3>
                <Card className="bg-card border-2 border-primary/30 shadow-card card-interactive flex-1">
                  <CardContent className="p-4 sm:p-6 flex flex-col justify-center h-full">
                    <ul className="space-y-3 sm:space-y-4">
                      {[
                        "Teams of 3–5 members",
                        "Participants will receive three problem statements on 19 Dec to choose from",
                        "Allocation follows first-come, first-serve basis via WhatsApp",
                        "A working prototype must be built during the event — no fully pre-built projects",
                        "AI tools are encouraged — participants must explain their usage",
                        "A short write-up must be submitted with the final project",
                      ].map((rule, index) => (
                        <li key={index} className="flex items-start gap-2.5 sm:gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 shadow-neon-purple"></div>
                          <span className="text-muted-foreground text-sm sm:text-base leading-relaxed">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>

            {/* Judging Criteria */}
            <AnimatedSection animation="slide-right" delay={150}>
              <div className="flex flex-col h-full">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-foreground">
                  Evaluation <span className="text-primary drop-shadow-glow">Criteria</span>
                </h3>
                <Card className="bg-card border-2 border-primary/30 shadow-card card-interactive flex-1">
                  <CardContent className="p-4 sm:p-6 flex flex-col justify-center h-full">
                    <div className="space-y-3 sm:space-y-4">
                      {[
                        { category: "Innovation & Creativity", weight: "25%" },
                        { category: "Relevance to Theme", weight: "20%" },
                        { category: "Execution / Prototype", weight: "25%" },
                        { category: "Teamwork & Presentation", weight: "20%" },
                        { category: "Feasibility / Impact", weight: "10%" },
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-1.5 sm:py-2">
                          <span className="text-muted-foreground text-sm sm:text-base">{item.category}</span>
                          <span className="text-primary font-bold text-base sm:text-lg">{item.weight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="py-12 sm:py-20 md:py-28 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <AnimatedSection className="text-center mb-8 sm:mb-12">
            <h2 className="text-responsive-title font-bold mb-3 sm:mb-4">
              Awards & <span className="text-primary drop-shadow-glow">Recognition</span>
            </h2>
            <div className="h-1.5 w-20 sm:w-28 bg-gradient-vibrant mx-auto rounded-full shadow-glow"></div>
          </AnimatedSection>

          <div 
            ref={prizesAnim.containerRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {prizes.map((prize, index) => (
              <AnimatedCard
                key={index}
                isVisible={prizesAnim.isVisible}
                delay={prizesAnim.getDelay(index)}
                hoverEffect="lift"
              >
                <Card className={`bg-card border-2 ${prize.accent ? 'border-accent/50' : 'border-primary/30'} shadow-card card-interactive h-full`}>
                  <CardContent className="p-5 sm:p-6 text-center h-full flex flex-col justify-center min-h-[200px] sm:min-h-[220px]">
                    <div className="text-4xl sm:text-5xl mb-3">{prize.emoji}</div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 text-foreground">{prize.title}</h3>
                    <p className={`${prize.accent ? 'text-accent' : 'text-primary'} font-bold text-base mb-1`}>{prize.subtitle}</p>
                    {prize.prize && <p className="text-primary font-bold text-xl sm:text-2xl mb-1">{prize.prize}</p>}
                    <p className="text-muted-foreground text-sm">{prize.extra}</p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-12 sm:py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <AnimatedSection className="text-center mb-8 sm:mb-12">
            <h2 className="text-responsive-title font-bold mb-3 sm:mb-4">
              Our <span className="text-primary drop-shadow-glow">Team</span>
            </h2>
            <div className="h-1.5 w-20 sm:w-28 bg-gradient-vibrant mx-auto mb-4 rounded-full shadow-glow"></div>
            <p className="text-muted-foreground text-responsive-body">Meet the minds behind <span className="font-brand text-primary">AIvolve</span></p>
          </AnimatedSection>

          <div ref={teamAnim.containerRef}>
            {/* Faculty Coordinator */}
            <AnimatedCard 
              isVisible={teamAnim.isVisible} 
              delay={0}
              hoverEffect="glow"
              className="max-w-sm mx-auto mb-6 sm:mb-8"
            >
              <Card className="bg-card border-2 border-accent/30 shadow-card card-interactive">
                <CardContent className="p-5 sm:p-6 text-center">
                  <img 
                    src={teamFaculty} 
                    alt="Dr. Sharanabasappa G"
                    className="w-20 h-20 sm:w-28 sm:h-28 rounded-full mx-auto mb-3 sm:mb-4 shadow-glow object-cover"
                    loading="lazy"
                  />
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-0.5">Dr. Sharanabasappa G</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-1.5">Associate Professor, Dept of CSE</p>
                  <p className="text-accent font-bold text-sm sm:text-base">Faculty Coordinator</p>
                </CardContent>
              </Card>
            </AnimatedCard>

            {/* Student Coordinators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {teamMembers.map((member, index) => (
                <AnimatedCard
                  key={index}
                  isVisible={teamAnim.isVisible}
                  delay={teamAnim.getDelay(index + 1)}
                  hoverEffect="glow"
                >
                  <Card className="bg-card border-2 border-primary/30 shadow-card card-interactive">
                    <CardContent className="p-5 sm:p-6 text-center">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-20 h-20 sm:w-28 sm:h-28 rounded-full mx-auto mb-3 sm:mb-4 shadow-glow object-cover"
                        loading="lazy"
                      />
                      <h3 className="text-base sm:text-lg font-bold text-foreground mb-0.5">{member.name}</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm mb-1.5">4th Year, PDACEK</p>
                      <p className="text-primary font-bold text-sm sm:text-base">{member.role}</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-12 sm:py-20 md:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-2xl">
          <AnimatedSection>
            <h2 className="text-responsive-title font-bold mb-3 sm:mb-4">
              Contact <span className="text-primary drop-shadow-glow">Us</span>
            </h2>
            <p className="text-responsive-body text-muted-foreground mb-8 sm:mb-10">
              Have questions? Reach out to us directly!
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Call Us Card */}
              <a
                href="tel:+917795865456"
                className="group bg-card border-2 border-primary/30 rounded-xl p-5 sm:p-6 shadow-card card-interactive flex flex-col items-center gap-3 tap-target"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground">Call Us</h3>
                <p className="text-primary font-semibold text-base sm:text-lg">7795865456</p>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/917795865456"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border-2 border-primary/30 rounded-xl p-5 sm:p-6 shadow-card card-interactive flex flex-col items-center gap-3 tap-target"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground">WhatsApp</h3>
                <p className="text-primary font-semibold text-base sm:text-lg">Chat with us</p>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 sm:py-20 md:py-28 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-responsive-title font-bold mb-4 sm:mb-6">
              Ready to <span className="text-primary drop-shadow-glow">Evolve?</span>
            </h2>
            <p className="text-responsive-body text-muted-foreground mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Join us for an inspiring journey of innovation and creativity. Register now and be part of <span className="font-brand text-primary">AIvolve</span>!
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-14 py-4 sm:py-5 h-auto shadow-neon-pink btn-tap max-w-md mx-auto"
              onClick={() => window.open('https://forms.gle/DAu7Bm6hov77dXLV6', '_blank')}
            >
              Register Now
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-10 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © 2025 <span className="font-brand text-brand">AIvolve</span>. Organized by Department of CSE, PDACEK
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
