
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: 'Launch Ready MVP',
      price: '₹29,999+',
      description: 'Full-stack web application ready for launch',
      features: [
        'Modern React/Next.js frontend',
        'Scalable backend architecture',
        'Database design & setup',
        'Authentication & security',
        'Responsive design',
        '30-day support'
      ],
      timeline: '2-4 weeks',
      popular: true
    },
    {
      title: 'Digital Starter Website',
      price: '₹9,999+',
      description: 'Professional business website that converts',
      features: [
        'Custom responsive design',
        'SEO optimization',
        'Contact forms',
        'Google Analytics',
        'Social media integration',
        'Mobile optimization'
      ],
      timeline: '1-2 weeks',
      popular: false
    },
    {
      title: 'FitConnect App',
      price: '₹24,999+',
      description: 'Complete fitness ecosystem mobile app',
      features: [
        'Flutter cross-platform app',
        'Workout tracking',
        'Social features',
        'Progress analytics',
        'Push notifications',
        'Admin dashboard'
      ],
      timeline: '3-5 weeks',
      popular: false
    },
    {
      title: 'DEVONIC Boost',
      price: '₹4,999/mo',
      description: 'Ongoing development & maintenance support',
      features: [
        'Monthly feature updates',
        'Bug fixes & optimizations',
        'Performance monitoring',
        'Security updates',
        'Technical support',
        'Growth consulting'
      ],
      timeline: 'Ongoing',
      popular: false
    }
  ];

  const techStack = [
    { name: 'Flutter', color: 'text-blue-400' },
    { name: 'React', color: 'text-cyan-400' },
    { name: 'Node.js', color: 'text-green-400' },
    { name: 'Firebase', color: 'text-orange-400' },
    { name: 'Supabase', color: 'text-green-400' },
    { name: 'MongoDB', color: 'text-green-500' }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-gradient mb-6">
            Services & Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package to bring your vision to life
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`relative bg-card border-border hover:border-primary/50 hover:card-glow transition-all duration-300 ${service.popular ? 'border-primary/50 scale-105' : ''} animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-secondary text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl font-orbitron text-primary">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
                <div className="text-3xl font-bold text-gradient">
                  {service.price}
                </div>
                <div className="text-sm text-muted-foreground">
                  Timeline: {service.timeline}
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="text-primary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-black font-semibold"
                  onClick={() => {
                    window.open('https://wa.me/919999999999?text=Hi+DEVONIC,+I+want+to+discuss+' + encodeURIComponent(service.title), '_blank');
                  }}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Tech Stack */}
        <div className="text-center">
          <h3 className="text-2xl font-orbitron font-bold mb-8 text-foreground">
            Technologies We Master
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, index) => (
              <div 
                key={tech.name}
                className={`px-4 py-2 bg-card border border-border rounded-lg ${tech.color} font-semibold hover:border-primary/50 transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
