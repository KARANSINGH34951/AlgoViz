import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../sections/HeroSection';
import FeatureSection from '../sections/FeatureSection';
import AboutSection from '../sections/AboutSection';

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-90 text-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;