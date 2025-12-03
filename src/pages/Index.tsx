import { Navigation } from "@/components/Navigation";
import { Countdown } from "@/components/Countdown";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { FloatingShapes } from "@/components/FloatingShapes";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Lightbulb, Trophy, Users, Clock, Target, Sparkles, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        
        {/* Animated Background Elements */}
        <ParticlesBackground />
        <FloatingShapes />
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 pt-16 sm:pt-20">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8 font-[Orbitron]">
              <span className="bg-gradient-vibrant bg-clip-text text-transparent drop-shadow-glow">
                AIvolve
              </span>
            </h1>
            
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
              Evolving Intelligence Hackathon
            </p>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8 sm:mb-12 font-semibold px-4">
              Build. Create. Innovate.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-10 sm:mb-16">
              <div className="flex items-center gap-2 text-foreground text-sm sm:text-base">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span>December 21, 2025</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground"></div>
              <div className="flex items-center gap-2 text-foreground text-sm sm:text-base">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span>PDA College, Kalaburgi</span>
              </div>
            </div>
            
            <div className="mb-10 sm:mb-16">
              <Countdown targetDate="2025-12-21T08:00:00" />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-base sm:text-xl px-8 sm:px-12 py-4 sm:py-6 h-auto w-full sm:w-auto"
                onClick={() => window.open('https://forms.gle/DAu7Bm6hov77dXLV6', '_blank')}
              >
                Join the Evolution
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: Brain, title: "6-Hour Innovation Sprint", desc: "Focused creation session" },
              { icon: Lightbulb, title: "Creative Exploration", desc: "Think beyond boundaries" },
              { icon: Trophy, title: "Inspiring Rewards", desc: "Celebrate your growth" },
              { icon: Users, title: "Collaborative Learning", desc: "Build together, grow together" },
            ].map((item, index) => (
              <Card key={index} className="bg-card border-2 border-primary/30 shadow-card hover:shadow-neon-purple hover:border-primary transition-all duration-300">
                <CardContent className="p-6 sm:p-8 text-center">
                  <item.icon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-primary drop-shadow-glow" />
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
              About <span className="text-primary drop-shadow-glow">AIvolve</span>
            </h2>
            <div className="h-2 w-24 sm:w-32 bg-gradient-vibrant mx-auto mb-6 sm:mb-8 rounded-full shadow-glow"></div>
          </div>
          
          <Card className="bg-card border-2 border-primary/30 shadow-card hover:shadow-glow transition-shadow">
            <CardContent className="p-6 sm:p-8 md:p-10">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                🚀 Get ready for an inspiring 8-hour innovation journey! AIvolve is your gateway to exploring 
                the future of technology where human creativity meets artificial intelligence.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                This experience is crafted and guided by passionate senior students from the Computer Science Department—mentors 
                who understand the thrill of building something meaningful. Plus, you'll have expert support from our dedicated faculty 
                members to nurture your ideas and sharpen your skills.
              </p>
              <div className="bg-primary/20 border-l-4 border-primary p-4 sm:p-6 rounded-lg shadow-neon-purple mb-4 sm:mb-6">
                <p className="text-foreground font-bold text-base sm:text-lg mb-2 sm:mb-3">
                  <Sparkles className="inline w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-primary" />
                  🧠 The Vision: 8 transformative hours to build an innovative AI-powered solution.
                </p>
                <p className="text-foreground font-bold text-base sm:text-lg">
                  🤝 The Spirit: Collaborative, inspiring, and perfect for students who love exploring new possibilities.
                </p>
              </div>
              <p className="text-muted-foreground text-base sm:text-lg font-semibold">
                Bring your curiosity, gather your dream team, and let's evolve ideas into reality. The future is waiting—are you ready to shape it?
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 sm:py-24 md:py-32 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
              Event <span className="text-primary drop-shadow-glow">Schedule</span>
            </h2>
            <div className="h-2 w-24 sm:w-32 bg-gradient-vibrant mx-auto mb-6 sm:mb-8 rounded-full shadow-glow"></div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {[
              { time: "8:00 AM", activity: "Reporting & Registration", desc: "Participants arrive, confirm attendance, settle in, and receive their problem statements." },
              { time: "9:00 AM", activity: "Hackathon Begins", desc: "Coding kicks off. Teams dive into building their AI-powered solutions." },
              { time: "12:00 PM", activity: "Refreshments Break", desc: "Light snacks and drinks provided to recharge before the final push." },
              { time: "3:00 PM", activity: "Coding Ends", desc: "Time's up! We assign judges. Teams prepare for their pitch." },
              { time: "3:00 – 4:00 PM", activity: "Project Pitching", desc: "Each team presents their solution to the judging panel." },
              { time: "5:00 PM", activity: "Results Announcement", desc: "Winners revealed, certificates/awards distributed, photos & wrap-up." },
            ].map((item, index) => (
              <Card key={index} className="bg-card border-2 border-primary/30 shadow-card hover:border-primary hover:shadow-neon-purple transition-all duration-300">
                <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="bg-primary/30 border-2 border-primary rounded-lg px-4 py-3 sm:px-6 sm:py-4 w-full sm:min-w-[160px] sm:w-auto shadow-neon-purple flex-shrink-0">
                    <p className="text-primary font-bold text-base sm:text-lg text-center sm:text-left">{item.time}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground font-bold text-base sm:text-lg mb-1">{item.activity}</p>
                    <p className="text-muted-foreground text-sm sm:text-base">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rules & Judging */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Rules */}
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-foreground px-4 sm:px-0">
                Guidelines & <span className="text-primary drop-shadow-glow">Principles</span>
              </h3>
              <Card className="bg-card border-2 border-accent/30 shadow-card hover:shadow-neon-pink transition-shadow">
                <CardContent className="p-6 sm:p-8">
                  <ul className="space-y-4 sm:space-y-5">
                    {[
                      "Teams of 3–4 members",
                      "Must be first-year students (any branch)",
                      "Working prototype or demo required",
                      "Focus on creativity and practical impact",
                      "AI tools are encouraged (ChatGPT, Canva, etc.)",
                    ].map((rule, index) => (
                      <li key={index} className="flex items-start gap-3 sm:gap-4">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent mt-1.5 sm:mt-2 flex-shrink-0 shadow-neon-pink"></div>
                        <span className="text-muted-foreground text-sm sm:text-base md:text-lg">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Judging Criteria */}
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-foreground px-4 sm:px-0">
                Evaluation <span className="text-primary drop-shadow-glow">Criteria</span>
              </h3>
              <Card className="bg-card border-2 border-primary/30 shadow-card hover:shadow-neon-purple transition-shadow">
                <CardContent className="p-6 sm:p-8">
                  <div className="space-y-4 sm:space-y-6">
                    {[
                      { category: "Innovation & Creativity", weight: "25%" },
                      { category: "Relevance to Theme", weight: "20%" },
                      { category: "Execution / Prototype", weight: "25%" },
                      { category: "Teamwork & Presentation", weight: "20%" },
                      { category: "Feasibility / Impact", weight: "10%" },
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2">
                        <span className="text-muted-foreground text-sm sm:text-base md:text-lg">{item.category}</span>
                        <span className="text-primary font-bold text-lg sm:text-xl">{item.weight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="py-16 sm:py-24 md:py-32 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
              Awards & <span className="text-primary drop-shadow-glow">Recognition</span>
            </h2>
            <div className="h-2 w-24 sm:w-32 bg-gradient-vibrant mx-auto mb-6 sm:mb-8 rounded-full shadow-glow"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              { icon: "🏆", title: "AIvolve Champions", prize: "Trophy + Certificates", highlight: true },
              { icon: "💡", title: "Most Innovative", prize: "Certificate + Goodies" },
              { icon: "🎯", title: "Best Presentation", prize: "Certificate" },
              { icon: "🌟", title: "All Participants", prize: "Participation Certificates" },
            ].map((item, index) => (
              <Card 
                key={index} 
                className={`bg-card shadow-card transition-all duration-300 ${
                  item.highlight ? "border-3 border-accent shadow-neon-pink sm:scale-105" : "border-2 border-primary/30 hover:shadow-neon-purple"
                }`}
              >
                <CardContent className="p-6 sm:p-8 md:p-10 text-center">
                  <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">{item.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-base sm:text-lg">{item.prize}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
              Our <span className="text-primary drop-shadow-glow">Team</span>
            </h2>
            <div className="h-2 w-24 sm:w-32 bg-gradient-vibrant mx-auto mb-6 sm:mb-8 rounded-full shadow-glow"></div>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl px-4">Meet the minds behind AIvolve</p>
          </div>

          <div className="text-center mb-10 sm:mb-16">
            <Card className="bg-card border-2 border-accent/30 shadow-card hover:shadow-neon-pink inline-block transition-shadow max-w-md mx-auto">
              <CardContent className="p-8 sm:p-10 md:p-12">
                <Award className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-accent drop-shadow-glow" />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">Faculty Coordinator</h3>
                <p className="text-muted-foreground text-base sm:text-lg">Name & Designation</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { role: "Event Coordinator", name: "Student Name" },
              { role: "Tech Mentor", name: "Student Name" },
              { role: "Designer", name: "Student Name" },
            ].map((member, index) => (
              <Card key={index} className="bg-card border-2 border-primary/30 shadow-card hover:shadow-neon-purple hover:border-primary transition-all duration-300">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-neural mx-auto mb-4 sm:mb-6 shadow-glow"></div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-bold mb-4 sm:mb-6 text-base sm:text-lg">{member.role}</p>
                  <div className="flex gap-3 justify-center text-sm sm:text-base">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-semibold">
                      LinkedIn
                    </a>
                    <span className="text-muted-foreground">•</span>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-semibold">
                      Instagram
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 px-4">
            Ready to <span className="text-primary drop-shadow-glow">Evolve?</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Join us for an inspiring journey of innovation and creativity. Register now and be part of AIvolve!
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            className="text-base sm:text-lg md:text-xl px-10 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 h-auto shadow-neon-pink w-full sm:w-auto max-w-md mx-auto"
            onClick={() => window.open('https://forms.gle/DAu7Bm6hov77dXLV6', '_blank')}
          >
            Join AIvolve Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <p className="text-muted-foreground text-sm sm:text-base">
            © 2025 AIvolve. Organized by Department of CSE, PDACEK
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
