import { useState, useEffect } from 'react';
import Header from './components/Header';
import UrgencyStrip from './components/UrgencyStrip';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ServiceArea from './components/ServiceArea';
import QuickContactForm from './components/QuickContactForm';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';

// Import newly created blog posts
import BlogPostFlooding from './components/BlogPostFlooding';
import BlogPostMold from './components/BlogPostMold';
import BlogPostInsurance from './components/BlogPostInsurance';
import BlogIndex from './components/BlogIndex';
import FAQSection from './components/FAQSection';

// Import newly created service pages
import ServiceWaterDamage from './components/ServiceWaterDamage';
import ServiceWaterExtraction from './components/ServiceWaterExtraction';
import ServiceMoldRemediation from './components/ServiceMoldRemediation';
import ServiceFloodDamage from './components/ServiceFloodDamage';
import ServiceEmergencyWater from './components/ServiceEmergencyWater';

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigateTo = (newPath: string) => {
    window.history.pushState({}, '', newPath);
    setPath(newPath);
    window.scrollTo(0, 0);
  };

  const handleNavigateHomeAndScroll = (sectionId?: string) => {
    window.history.pushState({}, '', '/');
    setPath('/');
    
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          if (sectionId === 'contact') {
            const nameInput = document.querySelector('input[placeholder*="Jameson"]') as HTMLInputElement;
            if (nameInput) {
              nameInput.focus();
            }
          }
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    if (path !== '/') {
      handleNavigateHomeAndScroll('contact');
    } else {
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
        const nameInput = document.querySelector('input[placeholder*="Jameson"]') as HTMLInputElement;
        if (nameInput) {
          nameInput.focus();
        }
      }
    }
  };

  // Render correct component based on active path route
  if (path === '/blog') {
    return (
      <div className="pb-16 md:pb-0">
        <Header onOpenEstimator={handleScrollToContact} onNavigate={navigateTo} />
        <UrgencyStrip />
        <BlogIndex onNavigate={navigateTo} />
        <Footer onNavigate={navigateTo} />
        <MobileBottomNav onOpenEstimator={handleScrollToContact} />
      </div>
    );
  }

  if (path === '/flooding-savannah-ga-water-damage-guide') {
    return (
      <div className="pb-16 md:pb-0">
        <Header onOpenEstimator={handleScrollToContact} onNavigate={navigateTo} />
        <UrgencyStrip />
        <BlogPostFlooding onNavigateHome={handleNavigateHomeAndScroll} />
        <Footer onNavigate={navigateTo} />
        <MobileBottomNav onOpenEstimator={handleScrollToContact} />
      </div>
    );
  }

  if (path === '/mold-after-water-damage-savannah-ga') {
    return (
      <div className="pb-16 md:pb-0">
        <Header onOpenEstimator={handleScrollToContact} onNavigate={navigateTo} />
        <UrgencyStrip />
        <BlogPostMold onNavigateHome={handleNavigateHomeAndScroll} />
        <Footer onNavigate={navigateTo} />
        <MobileBottomNav onOpenEstimator={handleScrollToContact} />
      </div>
    );
  }

  if (path === '/water-damage-insurance-claim-savannah-ga') {
    return (
      <div className="pb-16 md:pb-0">
        <Header onOpenEstimator={handleScrollToContact} onNavigate={navigateTo} />
        <UrgencyStrip />
        <BlogPostInsurance onNavigateHome={handleNavigateHomeAndScroll} />
        <Footer onNavigate={navigateTo} />
        <MobileBottomNav onOpenEstimator={handleScrollToContact} />
      </div>
    );
  }

  if (path === '/water-damage-restoration-savannah-ga') {
    return (
      <div className="pb-16 md:pb-0">
        <Header onOpenEstimator={handleScrollToContact} onNavigate={navigateTo} />
        <UrgencyStrip />
        <ServiceWaterDamage onOpenEstimator={handleScrollToContact} />
        <Footer onNavigate={navigateTo} />
        <MobileBottomNav onOpenEstimator={handleScrollToContact} />
      </div>
    );
  }

  if (path === '/water-extraction-savannah-ga') {
    return (
      <div className="pb-16 md:pb-0">
        <Header onOpenEstimator={handleScrollToContact} onNavigate={navigateTo} />
        <UrgencyStrip />
        <ServiceWaterExtraction onOpenEstimator={handleScrollToContact} />
        <Footer onNavigate={navigateTo} />
        <MobileBottomNav onOpenEstimator={handleScrollToContact} />
      </div>
    );
  }

  if (path === '/mold-remediation-savannah-ga') {
    return (
      <div className="pb-16 md:pb-0">
        <Header onOpenEstimator={handleScrollToContact} onNavigate={navigateTo} />
        <UrgencyStrip />
        <ServiceMoldRemediation onOpenEstimator={handleScrollToContact} />
        <Footer onNavigate={navigateTo} />
        <MobileBottomNav onOpenEstimator={handleScrollToContact} />
      </div>
    );
  }

  if (path === '/flood-damage-restoration-savannah-ga') {
    return (
      <div className="pb-16 md:pb-0">
        <Header onOpenEstimator={handleScrollToContact} onNavigate={navigateTo} />
        <UrgencyStrip />
        <ServiceFloodDamage onOpenEstimator={handleScrollToContact} />
        <Footer onNavigate={navigateTo} />
        <MobileBottomNav onOpenEstimator={handleScrollToContact} />
      </div>
    );
  }

  if (path === '/emergency-water-damage-savannah-ga') {
    return (
      <div className="pb-16 md:pb-0">
        <Header onOpenEstimator={handleScrollToContact} onNavigate={navigateTo} />
        <UrgencyStrip />
        <ServiceEmergencyWater onOpenEstimator={handleScrollToContact} />
        <Footer onNavigate={navigateTo} />
        <MobileBottomNav onOpenEstimator={handleScrollToContact} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-on-background font-body selection:bg-secondary/20 selection:text-secondary pb-16 md:pb-0">
      
      {/* Navigation Header */}
      <Header onOpenEstimator={handleScrollToContact} onNavigate={navigateTo} />

      {/* Top Urgent Alert Broadcast Strip */}
      <UrgencyStrip />

      {/* Main Structural Layout blocks */}
      <main>
        {/* Urgent hero introduction banner */}
        <Hero onOpenEstimator={handleScrollToContact} />

        {/* What We Handle service array */}
        <Services onOpenEstimator={handleScrollToContact} onNavigate={navigateTo} />

        {/* Why Choose Us local proof banner */}
        <WhyChooseUs />

        {/* Testimonials verification ratings block */}
        <Testimonials />

        {/* Localized Chatham coverage scope map & stats */}
        <ServiceArea />

        {/* In-depth incident evaluation reporting form */}
        <QuickContactForm />

        {/* FAQ Accordion Section */}
        <FAQSection />

        {/* Bottom CTA Banner */}
        <CTABanner onOpenEstimator={handleScrollToContact} />
      </main>

      {/* Information Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Mobile Sticky action bars */}
      <MobileBottomNav onOpenEstimator={handleScrollToContact} />

    </div>
  );
}
