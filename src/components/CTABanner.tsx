import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  onOpenEstimator: () => void;
}

export default function CTABanner({ onOpenEstimator }: CTABannerProps) {
  return (
    <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight mb-6">
          Don't Wait — Water Damage Gets Worse Every Hour
        </h2>
        <p className="text-sm md:text-lg text-white/90 font-body leading-relaxed max-w-2xl mx-auto mb-10">
          Structural rotting, drywall buckling, and mold spore colonies can take root in as little as 24 hours. Request a free assessment to connect with a local specialist.
        </p>

        <a 
          href="tel:8438004261"
          className="bg-secondary text-white hover:bg-secondary-container px-8 py-4 rounded-xl font-bold text-xs uppercase flex items-center justify-center gap-2 mx-auto shadow-lg hover:shadow-xl active:scale-95 transition-all cursor-pointer w-fit"
        >
          Call Now
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
