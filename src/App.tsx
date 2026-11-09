import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { SolutionsSection } from './components/solutions/SolutionsSection';
import { LearningJourneySection } from './components/journey/LearningJourneySection';
import { PhilosophySection } from './components/philosophy/PhilosophySection';
import { FutureVisionSection } from './components/vision/FutureVisionSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { ConfigHelperModal } from './components/ui/ConfigHelperModal';

export function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/25 selection:text-cyan-200 font-sans antialiased">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <SolutionsSection />
          <LearningJourneySection />
          <PhilosophySection />
          <FutureVisionSection />
          <ContactSection />
        </main>
        <Footer />
        <ConfigHelperModal />
      </div>
    </ThemeProvider>
  );
}

export default App;
