import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  const handleGlitch = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 300);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Grid */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-20"
        style={{ backgroundSize: '50px 50px' }}
      />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-32 right-20 w-48 h-48 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 text-center z-10">
        {/* Animated Logo */}
        <div 
          className="mb-8 cursor-pointer"
          onClick={handleGlitch}
        >
          <div className={`relative inline-block ${isGlitching ? 'animate-glitch' : ''}`}>
            {/* Main Logo */}
            <div className="w-32 h-32 mx-auto mb-6 relative animate-pulse-glow">
              {/* Centered logo over animated background */}
              <img 
                src="/centerlogo.png" 
                alt="DEVONIC Logo" 
                className="absolute inset-0 m-auto w-32 h-32 object-contain pointer-events-none z-20"
                style={{ left: 0, right: 0, top: 0, bottom: 0 }}
              />
              {/* Animated background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 animate-spin-slow rounded-2xl opacity-50" />
              <div className="absolute inset-2 bg-gradient-to-tl from-secondary/60 to-primary/60 rounded-xl animate-pulse" />
              {/* Glow effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-xl opacity-60 animate-glow" />
            </div>
            
            {/* Company name */}
            <h1 
              className="text-6xl md:text-8xl font-orbitron font-black text-gradient mb-4"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(0, 255, 136, 0.6))',
              }}
            >
              DEVONIC
            </h1>
          </div>
          
          <div 
            className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 animate-glow" 
            style={{
              boxShadow: '0 0 20px rgba(0, 255, 136, 0.8)',
            }}
          />
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
