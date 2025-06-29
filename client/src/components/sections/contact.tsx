import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { PERSONAL_INFO } from '@/lib/constants';
import type { ContactForm } from '@/lib/types';

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // For GitHub Pages deployment, we'll use mailto for now
      // In production, you can integrate with Formspree, Netlify Forms, or EmailJS
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Open mailto link
      window.open(mailtoLink, '_blank');
      
      toast({
        title: "Email client opened!",
        description: "Your default email client should open with the message pre-filled. You can also contact me directly.",
      });
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try contacting me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Linkedin, url: PERSONAL_INFO.linkedin, color: 'bg-blue-600 hover:bg-blue-700' },
    { icon: Github, url: PERSONAL_INFO.github, color: 'bg-gray-800 hover:bg-gray-900' },
    { icon: Twitter, url: PERSONAL_INFO.twitter, color: 'bg-blue-400 hover:bg-blue-500' }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss how we can work together on your next data science project or if you'd like to collaborate on research.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12" ref={ref}>
          {/* Contact Information */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-primary text-xl" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">{PERSONAL_INFO.email}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mr-4">
                  <Phone className="text-blue-500 text-xl" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">{PERSONAL_INFO.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-purple-500 text-xl" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="default"
                    size="sm"
                    className={`w-10 h-10 rounded-full p-0 ${social.color} text-white transition-colors`}
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    <social.icon size={16} />
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="mt-2"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="mt-2 resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="mr-2" size={16} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
