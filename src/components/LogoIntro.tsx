
import { useState, useEffect } from 'react';

interface LogoIntroProps {
  onComplete: () => void;
}

const LogoIntro = ({ onComplete }: LogoIntroProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setPhase(1), 500),   // Particles emerge
      setTimeout(() => setPhase(2), 1200),  // Lines converge
      setTimeout(() => setPhase(3), 2000),  // Logo forms
      setTimeout(() => setPhase(4), 2800),  // Logo pulses
      setTimeout(() => setPhase(5), 3500),  // Settle and glow
      setTimeout(() => onComplete(), 4500), // Fade out
    ];

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-primary rounded-full transition-all duration-1000 ${
              phase >= 1 ? 'opacity-100 animate-ping' : 'opacity-0'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 0.5}s`,
              animationDuration: `${1 + Math.random()}s`,
            }}
          />
        ))}
      </div>

      {/* Converging lines */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute bg-gradient-to-r from-transparent via-primary to-transparent h-0.5 transition-all duration-1500 ${
              phase >= 2 ? 'opacity-60' : 'opacity-0'
            }`}
            style={{
              width: phase >= 2 ? '100%' : '0%',
              top: `${50 + (i - 4) * 5}%`,
              left: '0%',
              transform: `rotate(${(i - 4) * 15}deg)`,
              transformOrigin: 'center',
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Main logo */}
      <div className="relative z-10">
        <div
          className={`transition-all duration-1000 ${
            phase >= 3
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-75'
          } ${
            phase >= 4
              ? 'animate-pulse'
              : ''
          }`}
        >
          <h1 
            className={`text-8xl md:text-9xl font-orbitron font-black text-gradient transition-all duration-500 ${
              phase >= 5 ? 'drop-shadow-[0_0_30px_rgba(0,255,136,0.8)]' : ''
            }`}
            style={{
              filter: phase >= 3 ? 'drop-shadow(0 0 20px rgba(0, 255, 136, 0.6))' : 'none',
            }}
          >
            DEVONIC
          </h1>
          
          {/* Animated underline */}
          <div 
            className={`mx-auto mt-4 bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ${
              phase >= 3 ? 'w-32 h-1 opacity-100' : 'w-0 h-1 opacity-0'
            }`}
            style={{
              boxShadow: phase >= 4 ? '0 0 20px rgba(0, 255, 136, 0.8)' : 'none',
            }}
          />
        </div>

        {/* Tagline */}
        <p 
          className={`text-xl md:text-2xl font-inter font-light mt-8 text-center text-muted-foreground transition-all duration-1000 ${
            phase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-primary font-medium">Invent.</span>{' '}
          <span className="text-secondary font-medium">Develop.</span>{' '}
          <span className="text-foreground font-bold">Dominate.</span>
        </p>
      </div>

      {/* Glitch effect overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent transition-opacity duration-300 ${
          phase === 3 ? 'opacity-100 animate-pulse' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default LogoIntro;
