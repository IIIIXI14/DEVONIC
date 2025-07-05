
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: 'GymKhanna',
      category: 'Fitness Mobile App',
      description: 'Complete fitness ecosystem with workout tracking, social features, and progress analytics. Built with Flutter and Firebase.',
      features: ['Cross-platform mobile app', 'Real-time workout tracking', 'Social community features', 'Progress analytics dashboard'],
      tech: ['Flutter', 'Firebase', 'Node.js', 'MongoDB'],
      image: '/placeholder.svg?height=300&width=400',
      status: 'Live in Production'
    },
    {
      title: 'FarmAgroTech',
      category: 'IoT Agriculture Platform',
      description: 'Smart farming solution with IoT sensors, real-time monitoring, and automated irrigation control system.',
      features: ['IoT sensor integration', 'Real-time monitoring', 'Automated controls', 'Data analytics'],
      tech: ['React', 'Node.js', 'IoT Sensors', 'MongoDB'],
      image: '/placeholder.svg?height=300&width=400',
      status: 'In Development'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-gradient mb-6">
            Our Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real projects, real results. See how we've helped businesses dominate their markets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-card border-border hover:border-primary/50 hover:card-glow transition-all duration-300 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-6xl text-primary/40">
                  {project.title === 'GymKhanna' ? '💪' : '🌱'}
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Live in Production' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl font-orbitron text-primary mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-secondary font-semibold mb-4">
                      {project.category}
                    </CardDescription>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent>
                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <span className="text-primary mr-2">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-sm border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-primary/50 text-primary hover:bg-primary/10"
                  onClick={() => {
                    window.open('https://wa.me/919999999999?text=Hi+DEVONIC,+I+want+to+know+more+about+' + encodeURIComponent(project.title), '_blank');
                  }}
                >
                  Learn More About This Project
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-orbitron font-bold mb-6 text-foreground">
            Ready to Join Our Success Stories?
          </h3>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-black font-semibold px-8 py-4"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
