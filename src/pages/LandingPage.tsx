import { Header } from '../components/Header';
import { HeroForm } from '../components/HeroForm';
import { VideoSection } from '../components/VideoSection';
import { PricingSection } from '../components/PricingSection';
import { PaymentSection } from '../components/PaymentSection';
import { Footer } from '../components/Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroForm />
        <VideoSection />
        <PricingSection />
        <PaymentSection />
      </main>
      <Footer />
    </div>
  );
}
