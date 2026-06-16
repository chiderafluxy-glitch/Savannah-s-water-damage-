import { Home, Wrench, Star, ShieldAlert } from 'lucide-react';
import { useState, useEffect } from 'react';

interface MobileBottomNavProps {
  onOpenEstimator: () => void;
}

export default function MobileBottomNav({ onOpenEstimator }: MobileBottomNavProps) {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    // Basic hash router listener to keep tab status accurate
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setActiveTab(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // initial loading test
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-45 flex justify-around items-center bg-white border-t border-outline-variant shadow-[0_-4px_16px_rgba(0,0,0,0.06)] h-16 px-2">
      
      <a 
        onClick={() => setActiveTab('home')}
        href="#home"
        className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
          activeTab === 'home' 
            ? 'text-secondary font-bold' 
            : 'text-on-surface-variant'
        }`}
      >
        <Home size={18} />
        <span className="text-[10px] font-semibold mt-0.5 uppercase tracking-tight">Home</span>
      </a>

      <a 
        onClick={() => setActiveTab('services')}
        href="#services"
        className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
          activeTab === 'services' 
            ? 'text-secondary font-bold' 
            : 'text-on-surface-variant'
        }`}
      >
        <Wrench size={18} />
        <span className="text-[10px] font-semibold mt-0.5 uppercase tracking-tight">Services</span>
      </a>

      <a 
        onClick={() => setActiveTab('reviews')}
        href="#reviews"
        className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
          activeTab === 'reviews' 
            ? 'text-secondary font-bold' 
            : 'text-on-surface-variant'
        }`}
      >
        <Star size={18} />
        <span className="text-[10px] font-semibold mt-0.5 uppercase tracking-tight">Reviews</span>
      </a>

      <a 
        href="tel:8438004261"
        className="flex flex-col items-center justify-center flex-1 py-1 text-on-surface-variant hover:text-secondary transition-colors cursor-pointer"
      >
        <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg -mt-4 mb-0.5 ring-4 ring-white animate-bounce-short">
          <ShieldAlert size={14} />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-tight text-secondary">Call Now</span>
      </a>

    </nav>
  );
}
