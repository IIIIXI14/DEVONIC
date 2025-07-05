
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  const handleGlitch = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 300);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-20"
        style={{ backgroundSize: '50px 50px' }}
      />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-32 right-20 w-48 h-48 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 text-center z-10">
        {/* Logo */}
        <div 
          className="mb-8 cursor-pointer"
          onClick={handleGlitch}
        >
          <h1 className={`text-8xl md:text-9xl font-orbitron font-black text-gradient ${isGlitching ? 'animate-glitch' : ''}`}>
            DEVONIC
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 animate-glow" />
        </div>
        
        {/* Tagline */}
        <p className="text-2xl md:text-3xl font-inter font-light mb-12 text-muted-foreground">
          <span className="text-primary font-medium">Invent.</span>{' '}
          <span className="text-secondary font-medium">Develop.</span>{' '}
          <span className="text-foreground font-bold">Dominate.</span>
        </p>
        
        {/* Description */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-muted-foreground leading-relaxed">
          We build lightning-fast websites, powerful mobile apps, and cutting-edge IoT solutions 
          that dominate the digital landscape.
        </p>
        
        {/* CTA Button */}
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-black font-semibold px-8 py-4 text-lg border-glow hover:scale-105 transition-all duration-300"
          onClick={() => {
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Let's Build Something Epic
        </Button>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
