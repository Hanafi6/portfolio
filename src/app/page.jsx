import AboutMe from '../../components/AboutMe';
import HeroSection from '../../components/HeroSection';

export default function Home() {
  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <HeroSection />
      <AboutMe />
    </main>
  )
}