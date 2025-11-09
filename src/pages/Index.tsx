import { Navigation } from "@/components/Navigation";
import { Countdown } from "@/components/Countdown";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Lightbulb, Trophy, Users, Clock, Target, Sparkles, Award } from "lucide-react";
import heroImage from "@/assets/bytewars-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-8 relative z-10 pt-20">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-block mb-8 px-6 py-3 bg-primary/20 border-2 border-primary rounded-full text-primary text-sm font-bold shadow-neon-cyan">
              Exclusive for First-Year Students
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="bg-gradient-vibrant bg-clip-text text-transparent drop-shadow-glow">
                BYTEWARS
              </span>
            </h1>
            
            <p className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              The Mini Hackathon
            </p>
            
            <p className="text-2xl md:text-3xl text-muted-foreground mb-12 font-semibold">
              Code. Create. Conquer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <div className="flex items-center gap-2 text-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>December 10, 2025</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground"></div>
              <div className="flex items-center gap-2 text-foreground">
                <Target className="w-5 h-5 text-primary" />
                <span>ECE Seminar Hall, SJCE Mysuru</span>
              </div>
            </div>
            
            <div className="mb-16">
              <Countdown targetDate="2025-12-10T09:30:00" />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="hero" size="lg" className="text-xl px-12 py-6 h-auto">
                Register Now
              </Button>
              <Button variant="neon" size="lg" className="text-xl px-12 py-6 h-auto">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-32 bg-gradient-primary">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code, title: "6-Hour Marathon", desc: "Intense coding session" },
              { icon: Lightbulb, title: "Creative Problem-Solving", desc: "Think outside the box" },
              { icon: Trophy, title: "Exciting Prizes", desc: "Win amazing rewards" },
              { icon: Users, title: "Team Collaboration", desc: "Build together" },
            ].map((item, index) => (
              <Card key={index} className="bg-card border-2 border-primary/30 shadow-card hover:shadow-neon-cyan hover:border-primary transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <item.icon className="w-16 h-16 mx-auto mb-6 text-primary drop-shadow-glow" />
                  <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-base">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-primary drop-shadow-glow">ByteWars</span>
            </h2>
            <div className="h-2 w-32 bg-gradient-vibrant mx-auto mb-8 rounded-full shadow-glow"></div>
          </div>
          
          <Card className="bg-card border-2 border-primary/30 shadow-card hover:shadow-glow transition-shadow">
            <CardContent className="p-10">
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                ByteWars is a beginner-friendly hackathon designed exclusively for first-year engineering 
                students to introduce them to coding, teamwork, and innovation.
              </p>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Organized by senior students of the Department of Computer Science and Electronics, 
                with mentorship from faculty members.
              </p>
              <div className="bg-primary/20 border-l-4 border-primary p-6 rounded-lg shadow-neon-cyan">
                <p className="text-foreground font-bold text-lg">
                  <Sparkles className="inline w-6 h-6 mr-3 text-primary" />
                  Mission: To create a fun, hands-on platform for learning and collaboration.
                </p>
              </div>
              <p className="text-muted-foreground mt-6 italic text-lg">
                Started by a group of tech enthusiasts who wanted to make hackathons accessible to beginners.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-32 bg-gradient-primary">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Event <span className="text-primary drop-shadow-glow">Schedule</span>
            </h2>
            <div className="h-2 w-32 bg-gradient-vibrant mx-auto mb-8 rounded-full shadow-glow"></div>
          </div>

          <div className="space-y-6">
            {[
              { time: "9:30 AM", activity: "Registration & Team Setup" },
              { time: "10:00 AM", activity: "Opening Ceremony + Theme Reveal" },
              { time: "10:30 AM", activity: "Idea Submission & Brainstorming" },
              { time: "11:30 AM – 3:30 PM", activity: "Project Development Phase" },
              { time: "3:30 PM", activity: "Demo Presentations" },
              { time: "4:30 PM", activity: "Judging & Results Announcement" },
            ].map((item, index) => (
              <Card key={index} className="bg-card border-2 border-primary/30 shadow-card hover:border-primary hover:shadow-neon-cyan transition-all duration-300">
                <CardContent className="p-8 flex items-center gap-6">
                  <div className="bg-primary/30 border-2 border-primary rounded-lg px-6 py-4 min-w-[160px] shadow-neon-cyan">
                    <p className="text-primary font-bold text-lg">{item.time}</p>
                  </div>
                  <p className="text-foreground font-bold text-lg">{item.activity}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rules & Judging */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Rules */}
            <div>
              <h3 className="text-4xl font-bold mb-8 text-foreground">
                Rules & <span className="text-primary drop-shadow-glow">Guidelines</span>
              </h3>
              <Card className="bg-card border-2 border-accent/30 shadow-card hover:shadow-neon-orange transition-shadow">
                <CardContent className="p-8">
                  <ul className="space-y-5">
                    {[
                      "Teams of 3–4 members",
                      "Must be first-year students (any branch)",
                      "Working demo or prototype required",
                      "Focus on creativity and practicality",
                      "Use of AI tools is allowed (ChatGPT, Canva, etc.)",
                    ].map((rule, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className="w-3 h-3 rounded-full bg-accent mt-2 flex-shrink-0 shadow-neon-orange"></div>
                        <span className="text-muted-foreground text-lg">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Judging Criteria */}
            <div>
              <h3 className="text-4xl font-bold mb-8 text-foreground">
                Judging <span className="text-primary drop-shadow-glow">Criteria</span>
              </h3>
              <Card className="bg-card border-2 border-primary/30 shadow-card hover:shadow-neon-cyan transition-shadow">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {[
                      { category: "Innovation & Creativity", weight: "25%" },
                      { category: "Relevance to Theme", weight: "20%" },
                      { category: "Execution / Prototype", weight: "25%" },
                      { category: "Teamwork & Presentation", weight: "20%" },
                      { category: "Feasibility / Impact", weight: "10%" },
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2">
                        <span className="text-muted-foreground text-lg">{item.category}</span>
                        <span className="text-primary font-bold text-xl">{item.weight}</span>
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
      <section id="prizes" className="py-32 bg-gradient-primary">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Prizes & <span className="text-primary drop-shadow-glow">Recognition</span>
            </h2>
            <div className="h-2 w-32 bg-gradient-vibrant mx-auto mb-8 rounded-full shadow-glow"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: "🥇", title: "ByteWars Champions", prize: "Trophy + Certificates", highlight: true },
              { icon: "🥈", title: "Best Innovation", prize: "Certificate + Goodies" },
              { icon: "🥉", title: "Best Presentation", prize: "Certificate" },
              { icon: "🎖️", title: "All Participants", prize: "Participation Certificates" },
            ].map((item, index) => (
              <Card 
                key={index} 
                className={`bg-card shadow-card transition-all duration-300 ${
                  item.highlight ? "border-3 border-accent shadow-neon-orange scale-105" : "border-2 border-primary/30 hover:shadow-neon-cyan"
                }`}
              >
                <CardContent className="p-10 text-center">
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-lg">{item.prize}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Organizing <span className="text-primary drop-shadow-glow">Team</span>
            </h2>
            <div className="h-2 w-32 bg-gradient-vibrant mx-auto mb-8 rounded-full shadow-glow"></div>
            <p className="text-muted-foreground text-xl">Meet the people behind ByteWars</p>
          </div>

          <div className="text-center mb-16">
            <Card className="bg-card border-2 border-accent/30 shadow-card hover:shadow-neon-orange inline-block transition-shadow">
              <CardContent className="p-12">
                <Award className="w-16 h-16 mx-auto mb-6 text-accent drop-shadow-glow" />
                <h3 className="text-2xl font-bold text-foreground mb-3">Faculty Coordinator</h3>
                <p className="text-muted-foreground text-lg">Name & Designation</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { role: "Event Coordinator", name: "Student Name" },
              { role: "Tech Mentor", name: "Student Name" },
              { role: "Designer", name: "Student Name" },
            ].map((member, index) => (
              <Card key={index} className="bg-card border-2 border-primary/30 shadow-card hover:shadow-neon-cyan hover:border-primary transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-vibrant mx-auto mb-6 shadow-glow"></div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-bold mb-6 text-lg">{member.role}</p>
                  <div className="flex gap-3 justify-center">
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
      <section className="py-32 bg-gradient-hero">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to <span className="text-primary drop-shadow-glow">Compete?</span>
          </h2>
          <p className="text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join us for an unforgettable coding experience. Register now and be part of ByteWars!
          </p>
          <Button variant="hero" size="lg" className="text-xl px-16 py-6 h-auto shadow-neon-orange">
            Register for ByteWars
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t-2 border-primary/30 py-12">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <p className="text-muted-foreground text-lg">
            © 2025 ByteWars. Organized by Department of Computer Science and Electronics, SJCE Mysuru
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
