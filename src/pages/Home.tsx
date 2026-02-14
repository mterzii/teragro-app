import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import Services from '../components/Services';
import QualityPolicy from '../components/QualityPolicy';
import WhyTeragro from '../components/WhyTeragro';
import ProjectsShowcase from '../components/ProjectsShowcase';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main className="pt-20 overflow-x-hidden w-full">
      <Hero />
      <Statistics />
      <Services />
      <QualityPolicy />
      <WhyTeragro />
      <ProjectsShowcase />
      <CTA />
    </main>
  );
}
