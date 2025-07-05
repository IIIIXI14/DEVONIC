
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: 'Basic Website',
      price: '₹5,000+',
      description: 'Professional website with essential pages',
      features: [
        '2-3 pages (Home, About, Contact)',
        'Responsive design',
        'SEO optimization',
        'Contact forms',
        'Mobile optimization',
        'Basic customization'
      ],
      timeline: '1-2 weeks',
      popular: false
    },
    {
      title: 'Advanced Website',
      price: 'Custom Quote',
      description: 'Feature-rich website tailored to your needs',
      features: [
        'eCommerce integration',
        'Booking systems',
        'User authentication',
        'Database integration',
        'Custom features',
        'Advanced animations'
      ],
      timeline: '2-4 weeks',
      popular: false
    },
    {
      title: 'Basic App',
      price: '₹14,999+',
      description: 'Cross-platform mobile app with core features',
      features: [
        'Flutter/React Native',
        'User login system',
        'Dashboard interface',
        'Firebase/Supabase backend',
        'Push notifications',
        'Basic CRUD operations'
      ],
      timeline: '3-4 weeks',
      popular: true
    },
    {
      title: 'Advanced App',
      price: 'Custom Quote',
      description: 'Feature-rich mobile application',
      features: [
        'Multiple screens & features',
        'Complex database design',
        'API integrations',
        'Real-time features',
        'Advanced analytics',
        'Custom backend logic'
      ],
      timeline: '4-8 weeks',
      popular: false
    }
  ];

  const techStack = [
    { name: 'HTML', color: 'text-orange-400' },
    { name: 'CSS', color: 'text-blue-400' },
    { name: 'JavaScript', color: 'text-yellow-400' },
    { name: 'Python', color: 'text-green-400' },
    { name: 'React Native', color: 'text-cyan-400' },
    { name: 'Bootstrap', color: 'text-purple-400' },
    { name: 'PHP', color: 'text-indigo-400' },
    { name: 'Flutter', color: 'text-blue-400' },
    { name: 'Firebase', color: 'text-orange-400' },
    { name: 'Supabase', color: 'text-green-400' }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-gradient mb-6">
            Services & Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Choose the perfect package to bring your vision to life
          </p>
          <p className="text-lg text-primary font-semibold">
            All projects are scalable, customizable, and tailored to client needs
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
                    window.open('https://wa.me/917208737077?text=Hi+DEVONIC,+I+want+to+discuss+' + encodeURIComponent(service.title), '_blank');
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
                className={`px-4 py-2 bg-card border border-border rounded-lg ${tech.color} font-semibold hover:border-primary/50 hover:glow transition-all duration-300 animate-fade-in`}
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
