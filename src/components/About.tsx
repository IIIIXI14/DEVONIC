
const About = () => {
  const values = [
    { title: 'Bold', description: 'We take risks others won\'t', icon: '⚡' },
    { title: 'Fast', description: 'Lightning-speed delivery', icon: '🚀' },
    { title: 'Disruptive', description: 'Breaking industry standards', icon: '💥' },
    { title: 'Reliable', description: 'Built to last and scale', icon: '🛡️' }
  ];

  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-gradient mb-6">
            About DEVONIC
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              We're not just another software agency. We're digital architects who craft 
              experiences that users love and businesses depend on.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From MVP prototypes to enterprise solutions, we turn ambitious ideas into 
              reality using cutting-edge technologies and battle-tested strategies.
            </p>
          </div>
        </div>
        
        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 hover:card-glow transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-primary mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
