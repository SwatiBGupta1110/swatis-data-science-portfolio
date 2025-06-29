import Navigation from '@/components/layout/navigation';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import Education from '@/components/sections/education';
import Blog from '@/components/sections/blog';
import Contact from '@/components/sections/contact';
import Footer from '@/components/sections/footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
