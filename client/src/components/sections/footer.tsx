import { PERSONAL_INFO } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">{PERSONAL_INFO.name}</h3>
            <p className="text-gray-400">{PERSONAL_INFO.title}</p>
          </div>
          
          <div className="flex space-x-6">
            <button
              onClick={() => handleNavClick('#home')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('#about')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('#projects')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
