import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import HistoryTimeline from '@/components/about/HistoryTimeline';
import TeamSection from '@/components/about/TeamSection';
import ValuesSection from '@/components/about/ValuesSection';
import CultureSection from '@/components/about/CultureSection';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AboutHero />
        <HistoryTimeline />
        <TeamSection />
        <ValuesSection />
        <CultureSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
