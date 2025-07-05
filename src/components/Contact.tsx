
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.project) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to submit your project inquiry.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const message = `Hi DEVONIC! 👋\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nProject Idea:\n${formData.project}\n\nLet's discuss how we can bring this to life!`;
    const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "We'll get back to you within 24 hours!",
    });
    
    // Reset form
    setFormData({ name: '', email: '', project: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-gradient mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to dominate your market? Let's turn your vision into reality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-orbitron text-primary">
                Start Your Project
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Tell us about your project and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-muted border-border focus:border-primary"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-muted border-border focus:border-primary"
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    name="project"
                    placeholder="Describe your project idea, goals, and timeline..."
                    value={formData.project}
                    onChange={handleInputChange}
                    className="bg-muted border-border focus:border-primary min-h-[120px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-black font-semibold py-3"
                >
                  Send Project Details
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-orbitron text-primary flex items-center">
                  <span className="mr-3">💬</span>
                  Quick Chat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Need to discuss your project right away?
                </p>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
                  onClick={() => {
                    window.open('https://wa.me/919999999999?text=Hi+DEVONIC,+I+want+to+discuss+my+project!', '_blank');
                  }}
                >
                  Message on WhatsApp
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-orbitron text-primary flex items-center">
                  <span className="mr-3">📧</span>
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Prefer email? We're here for you.
                </p>
                <a 
                  href="mailto:hello@devonic.in"
                  className="text-secondary hover:text-secondary/80 font-semibold transition-colors"
                >
                  hello@devonic.in
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-orbitron text-primary flex items-center">
                  <span className="mr-3">⚡</span>
                  Why Choose DEVONIC?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Lightning-fast delivery
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    24/7 project updates
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Post-launch support
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Transparent pricing
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
