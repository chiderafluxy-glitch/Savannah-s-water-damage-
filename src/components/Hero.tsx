import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenEstimator: () => void;
}

export default function Hero({ onOpenEstimator }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center overflow-hidden bg-primary text-white">
      {/* Background Image with Dark Professional Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="Flooded residential basement needing expert restoration" 
          className="w-full h-full object-cover opacity-35"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA69XYhRfH-4jk4SO1vrIYbuSZ6QPpB0JxpNiRnUtiz8amuWZ4gGkn2k5Rp1rOAy6zY4o5FnvTinlDT__kBbyTQ-eGh9KHCii0nHQfMai0H7P1vbicdTrRiP5pTrWq5Zt8YncPWN0zUmEHYjEwlQ4749a4iyy_YSWaO-vxnNHxlTVfgRTlvJALBNJC13PgXKWTRnVwpp27g84K60M9TZ-4zr1T5kFiNolNS8HYej6YSjLzc2Bg6-9tyhu3ChySNX1M7c2UE8MiKnas"
          referrerPolicy="no-referrer"
        />
        {/* Navy-dominant gradient mask ensuring strong AAA text accessibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40 md:from-primary/95 md:to-transparent" />
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24 z-10 max-w-7xl relative">
        <div className="max-w-3xl">
          {/* Main Display Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-display leading-tight tracking-tight text-white mb-6 animate-fade-in"
          >
            Savannah's #1 Water Damage Restoration Service
          </motion.h2>

          {/* Body subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base md:text-lg text-gray-300 font-body max-w-2xl leading-relaxed mb-10"
          >
            Connect with certified local professionals for rapid water extraction, flood damage restoration, and moisture treatments across Savannah and Chatham County.
          </motion.p>

          {/* Combined CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <a 
              href="tel:8438004261"
              className="bg-secondary text-white hover:bg-secondary-container px-10 py-5 rounded-2xl font-black text-sm md:text-base uppercase tracking-wider flex items-center justify-center gap-3 hover:scale-105 hover:shadow-2xl active:scale-95 transition-all w-full sm:w-auto cursor-pointer shadow-xl ring-4 ring-secondary/20"
            >
              <span className="animate-pulse">Call Now: (843) 800-4261</span>
              <ArrowRight size={20} className="animate-bounce-horizontal" />
            </a>
            <button 
              onClick={onOpenEstimator}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-bold text-xs uppercase flex items-center justify-center gap-2 transition-all active:scale-95 w-full sm:w-auto cursor-pointer"
            >
              <Calendar size={16} />
              Get a Free Quote
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
