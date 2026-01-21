import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solutions } from './components/Solutions';
import { Process } from './components/Process';
import { Results } from './components/Results';
import { TargetAudience } from './components/TargetAudience';
import { Team } from './components/Team';
import { Approach } from './components/Approach';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Integrations } from './components/Integrations';
import { Security } from './components/Security';
import { Resources } from './components/Resources';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solutions />
        <Results />
        <Process />
        <TargetAudience />
        <Team />
        <Approach />
        <Integrations />
        <Security />
        <Pricing />
        <FAQ />
        <Resources />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
