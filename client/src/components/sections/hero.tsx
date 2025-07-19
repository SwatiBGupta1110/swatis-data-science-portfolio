import { ChevronDown, Download, Mail, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PERSONAL_INFO } from '@/lib/constants';

const Hero = () => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // In a real implementation, this would trigger a download
    alert('CV download would be triggered here');
  };

  return (
    <section id="home" className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-bounce-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
        <div className="animate-fade-in">
          {/* Professional headshot placeholder */}
          <div className="mb-8">
            <img 
            src="https://raw.githubusercontent.com/SwatiBGupta1110/swatis-data-science-portfolio/main/client/public/images/Headshot.jpeg"
            alt="Professional headshot of Swati Gupta"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-xl object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-yellow-300">Swati</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {PERSONAL_INFO.title}
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto">
            {PERSONAL_INFO.bio}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleScrollToSection('#projects')}
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <Briefcase className="mr-2 h-4 w-4" />
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => handleScrollToSection('#contact')}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button 
              variant="outline"
              onClick={handleDownloadCV}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
