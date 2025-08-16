import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  Linkedin, 
  Github, 
  Send,
  MapPin,
  Loader2
} from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Initialize EmailJS
  emailjs.init('mDzmrBWZ7vvu9ouE1');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Nithya'
      };

      await emailjs.send(
        'service_aao1vqm',
        'template_i7lk0oq',
        templateParams
      );

      toast({
        title: "Success!",
        description: "Your message has been sent successfully. I'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (226) 961-9893",
      href: "tel:+12269619893"
    },
    {
      icon: Mail,
      label: "Email",
      value: "nithyavasudevan9804@gmail.com",
      href: "mailto:nithyavasudevan9804@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/nithya-vasudevan-85190534a",
      href: "https://linkedin.com/in/nithya-vasudevan-85190534a"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/nithya1140",
      href: "https://github.com/nithya1140"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute top-10 left-10 w-32 h-32 ai-gradient opacity-5 rounded-3xl rotate-45"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 accent-gradient opacity-10 rounded-2xl rotate-12"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-primary/10 rounded-lg mb-4">
            <span className="text-sm font-medium text-primary">CONTACT INFO</span>
          </div>
          <h2 className="text-4xl font-bold text-black mb-4">Let's Talk</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Ready to discuss your next data engineering project? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="modern-shadow relative overflow-hidden border-0">
              {/* Geometric decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl"></div>
              
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Send a Message</CardTitle>
                <p className="text-muted-foreground">Fill out the form below and I'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name" 
                        className="h-12"
                        disabled={isLoading}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com" 
                        className="h-12"
                        disabled={isLoading}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?" 
                      className="h-12"
                      disabled={isLoading}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or how I can help..." 
                      rows={6}
                      className="resize-none"
                      disabled={isLoading}
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full hero-shadow transition-bounce hover:scale-105 text-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details Card */}
            <Card className="modern-shadow relative overflow-hidden border-0">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-3xl"></div>
              
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a 
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-all group hover:scale-105"
                    >
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{contact.label}</p>
                        <p className="text-sm text-muted-foreground">{contact.value}</p>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>
            
            {/* Location & Availability Card */}
            <Card className="modern-shadow relative overflow-hidden border-0">
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-2xl"></div>
              
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Toronto, Ontario, Canada</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Available for remote work, on-site consulting in the GTA, 
                    and flexible arrangements worldwide.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Card */}
            <Card className="modern-shadow bg-gradient-to-br from-primary/10 to-accent/5 border-0">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Send className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">
                    I typically respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
                <div className="text-2xl font-bold text-primary">24hrs</div>
                <div className="text-xs text-muted-foreground">Response Time</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;