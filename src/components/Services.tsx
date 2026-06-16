import { Droplets, Waves, ShieldAlert, Wind, Flame, AlertTriangle, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenEstimator: () => void;
  onNavigate?: (path: string) => void;
}

export default function Services({ onOpenEstimator, onNavigate }: ServicesProps) {
  const services = [
    {
      id: 'water-extraction',
      name: 'Water Extraction',
      description: 'We remove standing water fast using industrial grade equipment to prevent deep concrete or hardwood saturation.',
      iconName: 'Droplets',
      path: '/water-extraction-savannah-ga'
    },
    {
      id: 'flood-damage',
      name: 'Flood Damage Restoration',
      description: 'Full structural cleanup and restoration after major flooding events including certified sanitization treatments.',
      iconName: 'Waves',
      path: '/flood-damage-restoration-savannah-ga'
    },
    {
      id: 'mold-prevention',
      name: 'Mold Prevention',
      description: 'Drying and chemical treating structural elements before mold spores take root, protecting your household.',
      iconName: 'ShieldAlert',
      path: '/mold-remediation-savannah-ga'
    },
    {
      id: 'structural-drying',
      name: 'Structural Drying',
      description: 'High-volume commercial dehumidifiers and high-pressure axial air movers dry wall cavities to pre-loss industry moisture standards.',
      iconName: 'Wind',
      path: '/water-damage-restoration-savannah-ga'
    },
    {
      id: 'fire-water',
      name: 'Fire & Water Damage Restoration',
      description: 'Comprehensive dual-mitigation recovery for structures suffering combined fire burns, deep soot, and heavy water saturation.',
      iconName: 'Flame',
      path: '/water-damage-restoration-savannah-ga'
    },
    {
      id: 'emergency-response',
      name: 'Emergency Response Cleanup',
      description: 'On-call cleanup specialists on standby, ready with equipped restoration utility trucks to handle immediate property salvage.',
      iconName: 'AlertTriangle',
      path: '/emergency-water-damage-savannah-ga'
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Droplets': return <Droplets className="text-3xl" size={28} />;
      case 'Waves': return <Waves className="text-3xl" size={28} />;
      case 'ShieldAlert': return <ShieldAlert className="text-3xl" size={28} />;
      case 'Wind': return <Wind className="text-3xl" size={28} />;
      case 'Flame': return <Flame className="text-3xl" size={28} />;
      case 'AlertTriangle': return <AlertTriangle className="text-3xl" size={28} />;
      default: return <Droplets className="text-3xl" size={28} />;
    }
  };

  const handleCardClick = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  return (
    <section className="py-20 bg-[#f8f9fb]" id="services">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold text-xs uppercase tracking-widest block mb-1">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-display">What We Handle</h2>
          <div className="h-1.5 w-24 bg-secondary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div 
              key={svc.id}
              onClick={() => handleCardClick(svc.path)}
              className="group bg-white p-6 md:p-8 border border-outline-variant rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  {getIcon(svc.iconName)}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-3 font-display">{svc.name}</h3>
                <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-6">
                  {svc.description}
                </p>
              </div>

              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(svc.path);
                }}
                className="mt-2 w-full bg-secondary hover:bg-secondary-container text-white rounded-xl py-3.5 font-bold text-xs uppercase transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
              >
                <span>Learn More &amp; Rates</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
