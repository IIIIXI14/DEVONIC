
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project_idea: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.project_idea) {
      toast({
        title: "Please fill required fields",
        description: "Name, email, and project idea are required.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) {
        throw error;
      }

      // Also create WhatsApp message
      const message = `Hi DEVONIC! 👋\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\n\nProject Idea:\n${formData.project_idea}\n\nLet's discuss how we can bring this to life!`;
      const whatsappUrl = `https://wa.me/917208737077?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Message sent successfully!",
        description: "We've received your project details and will get back to you within 24 hours!",
      });
      
      // Reset form
      setFormData({ name: '', email: '', phone: '', project_idea: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly via WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
                    placeholder="Your Name *"
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
                    placeholder="your.email@example.com *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-muted border-border focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Your Phone Number (Optional)"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-muted border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="project_idea"
                    placeholder="Describe your project idea, goals, and timeline... *"
                    value={formData.project_idea}
                    onChange={handleInputChange}
                    className="bg-muted border-border focus:border-primary min-h-[120px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-black font-semibold py-3"
                >
                  {isSubmitting ? 'Sending...' : 'Send Project Details'}
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
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold mb-3"
                  onClick={() => {
                    window.open('https://wa.me/917208737077?text=Hi+DEVONIC,+I+want+to+discuss+my+project!', '_blank');
                  }}
                >
                  WhatsApp: +91 7208737077
                </Button>
                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">Available 9 AM - 9 PM IST</p>
                </div>
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
                  Prefer email? Choose any team member:
                </p>
                <div className="space-y-2">
                  <a 
                    href="mailto:bhagatharshal49@gmail.com"
                    className="block text-secondary hover:text-secondary/80 font-semibold transition-colors"
                  >
                    bhagatharshal49@gmail.com
                  </a>
                  <a 
                    href="mailto:harshthakur25may2004@gmail.com"
                    className="block text-secondary hover:text-secondary/80 font-semibold transition-colors"
                  >
                    harshthakur25may2004@gmail.com
                  </a>
                  <a 
                    href="mailto:swayamthakur369@gmail.com"
                    className="block text-secondary hover:text-secondary/80 font-semibold transition-colors"
                  >
                    swayamthakur369@gmail.com
                  </a>
                </div>
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
