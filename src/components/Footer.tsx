
const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/devonic.in', icon: '📷' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/devonic', icon: '💼' },
    { name: 'GitHub', url: 'https://github.com/devonic', icon: '💻' }
  ];

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-orbitron font-bold text-gradient mb-4">
              DEVONIC
            </h3>
            <p className="text-muted-foreground mb-4">
              Invent. Develop. Dominate.
            </p>
            <p className="text-sm text-muted-foreground">
              Building the future, one line of code at a time.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Connect</h4>
            <div className="mb-4 space-y-1">
              <p className="text-sm text-muted-foreground">Phone: +91 7208737077</p>
              <a 
                href="mailto:bhagatharshal49@gmail.com"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                bhagatharshal49@gmail.com
              </a>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:scale-110 transition-transform duration-300"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} DEVONIC. All rights reserved. Built with ⚡ and 💚
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
