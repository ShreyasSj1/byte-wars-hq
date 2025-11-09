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
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary rounded-full text-primary text-sm font-semibold">
              Exclusive for First-Year Students
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                BYTEWARS
              </span>
            </h1>
            
            <p className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">
              The Mini Hackathon
            </p>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Code. Create. Conquer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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
            
            <div className="mb-12">
              <Countdown targetDate="2025-12-10T09:30:00" />
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Register Now
              </Button>
              <Button variant="neon" size="lg" className="text-lg px-8">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Code, title: "6-Hour Marathon", desc: "Intense coding session" },
              { icon: Lightbulb, title: "Creative Problem-Solving", desc: "Think outside the box" },
              { icon: Trophy, title: "Exciting Prizes", desc: "Win amazing rewards" },
              { icon: Users, title: "Team Collaboration", desc: "Build together" },
            ].map((item, index) => (
              <Card key={index} className="bg-card border-border shadow-card hover:shadow-neon-cyan transition-shadow">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-primary">ByteWars</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-accent mx-auto mb-6"></div>
          </div>
          
          <Card className="bg-card border-border shadow-card">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                ByteWars is a beginner-friendly hackathon designed exclusively for first-year engineering 
                students to introduce them to coding, teamwork, and innovation.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Organized by senior students of the Department of Computer Science and Electronics, 
                with mentorship from faculty members.
              </p>
              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                <p className="text-foreground font-semibold">
                  <Sparkles className="inline w-5 h-5 mr-2 text-primary" />
                  Mission: To create a fun, hands-on platform for learning and collaboration.
                </p>
              </div>
              <p className="text-muted-foreground mt-4 italic">
                Started by a group of tech enthusiasts who wanted to make hackathons accessible to beginners.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Event <span className="text-primary">Schedule</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-accent mx-auto mb-6"></div>
          </div>

          <div className="space-y-4">
            {[
              { time: "9:30 AM", activity: "Registration & Team Setup" },
              { time: "10:00 AM", activity: "Opening Ceremony + Theme Reveal" },
              { time: "10:30 AM", activity: "Idea Submission & Brainstorming" },
              { time: "11:30 AM – 3:30 PM", activity: "Project Development Phase" },
              { time: "3:30 PM", activity: "Demo Presentations" },
              { time: "4:30 PM", activity: "Judging & Results Announcement" },
            ].map((item, index) => (
              <Card key={index} className="bg-card border-border shadow-card hover:border-primary transition-colors">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary/20 border border-primary rounded-lg px-4 py-2 min-w-[140px]">
                    <p className="text-primary font-bold">{item.time}</p>
                  </div>
                  <p className="text-foreground font-semibold">{item.activity}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rules & Judging */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Rules */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Rules & <span className="text-primary">Guidelines</span>
              </h3>
              <Card className="bg-card border-border shadow-card">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {[
                      "Teams of 3–4 members",
                      "Must be first-year students (any branch)",
                      "Working demo or prototype required",
                      "Focus on creativity and practicality",
                      "Use of AI tools is allowed (ChatGPT, Canva, etc.)",
                    ].map((rule, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Judging Criteria */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Judging <span className="text-primary">Criteria</span>
              </h3>
              <Card className="bg-card border-border shadow-card">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      { category: "Innovation & Creativity", weight: "25%" },
                      { category: "Relevance to Theme", weight: "20%" },
                      { category: "Execution / Prototype", weight: "25%" },
                      { category: "Teamwork & Presentation", weight: "20%" },
                      { category: "Feasibility / Impact", weight: "10%" },
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-muted-foreground">{item.category}</span>
                        <span className="text-primary font-bold">{item.weight}</span>
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
      <section id="prizes" className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Prizes & <span className="text-primary">Recognition</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-accent mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "🥇", title: "ByteWars Champions", prize: "Trophy + Certificates", highlight: true },
              { icon: "🥈", title: "Best Innovation", prize: "Certificate + Goodies" },
              { icon: "🥉", title: "Best Presentation", prize: "Certificate" },
              { icon: "🎖️", title: "All Participants", prize: "Participation Certificates" },
            ].map((item, index) => (
              <Card 
                key={index} 
                className={`bg-card border-border shadow-card ${
                  item.highlight ? "border-accent shadow-neon-orange" : ""
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.prize}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Organizing <span className="text-primary">Team</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-accent mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg">Meet the people behind ByteWars</p>
          </div>

          <div className="text-center mb-8">
            <Card className="bg-card border-border shadow-card inline-block">
              <CardContent className="p-8">
                <Award className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-bold text-foreground mb-2">Faculty Coordinator</h3>
                <p className="text-muted-foreground">Name & Designation</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { role: "Event Coordinator", name: "Student Name" },
              { role: "Tech Mentor", name: "Student Name" },
              { role: "Designer", name: "Student Name" },
            ].map((member, index) => (
              <Card key={index} className="bg-card border-border shadow-card hover:shadow-neon-cyan transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-accent mx-auto mb-4"></div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <div className="flex gap-2 justify-center">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      LinkedIn
                    </a>
                    <span className="text-muted-foreground">•</span>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
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
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to <span className="text-primary">Compete?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable coding experience. Register now and be part of ByteWars!
          </p>
          <Button variant="hero" size="lg" className="text-lg px-12">
            Register for ByteWars
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 ByteWars. Organized by Department of Computer Science and Electronics, SJCE Mysuru
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
