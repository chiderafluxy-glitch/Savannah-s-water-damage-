import { useState } from 'react';
import { MapPin, Globe } from 'lucide-react';
import { ServiceAreaLocation } from '../types';

export default function ServiceArea() {
  const [selectedLoc, setSelectedLoc] = useState<ServiceAreaLocation>({
    name: 'Savannah',
    zipCode: '31401',
    estimatedTimeMin: 30
  });

  const locations: ServiceAreaLocation[] = [
    { name: 'Savannah', zipCode: '31401', estimatedTimeMin: 30 },
    { name: 'Pooler', zipCode: '31322', estimatedTimeMin: 35 },
    { name: 'Garden City', zipCode: '31408', estimatedTimeMin: 40 },
    { name: 'Thunderbolt', zipCode: '31404', estimatedTimeMin: 35 },
    { name: 'Tybee Island', zipCode: '31328', estimatedTimeMin: 45 },
    { name: 'Bloomingdale', zipCode: '31302', estimatedTimeMin: 45 },
    { name: 'Port Wentworth', zipCode: '31407', estimatedTimeMin: 40 }
  ];

  return (
    <section className="py-20 bg-primary text-white" id="service-area">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-red-400 font-bold text-xs uppercase tracking-widest block mb-2">Chatham County Hub</span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display leading-tight tracking-tight mb-6">
              Proudly Serving Savannah &amp; Chatham County
            </h2>
            <p className="text-xs md:text-sm text-gray-300 font-body leading-relaxed mb-8">
              We connect you with water damage recovery specialists across all surrounding municipal districts. Click any municipality below to shift the live map and view coverage outlines:
            </p>

            {/* Clickable pill tags */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {locations.map((loc) => (
                <button
                  key={loc.name}
                  onClick={() => setSelectedLoc(loc)}
                  className={`px-5 py-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    selectedLoc.name === loc.name
                      ? 'bg-secondary border-secondary text-white shadow-lg scale-102 font-extrabold'
                      : 'bg-primary-container border-white/20 text-blue-100 hover:bg-primary-container/80 hover:border-white/30'
                  }`}
                >
                  {loc.name}
                </button>
              ))}
            </div>

            {/* Status indicators */}
            <div className="bg-primary-container/40 border border-white/10 rounded-2xl p-6 mb-2">
              <div className="flex items-center gap-2 text-secondary mb-3">
                <MapPin size={18} className="text-red-400" />
                <h4 className="font-extrabold text-white text-sm md:text-base">Active Coverage: {selectedLoc.name}, GA</h4>
              </div>
              <p className="text-xs text-gray-300 font-body leading-relaxed">
                Local restoration specialists are active in the {selectedLoc.name} area and prepared to support water extraction and damage mitigation requests for ZIP {selectedLoc.zipCode}.
              </p>
            </div>
          </div>

          {/* Interactive Live Google Maps Iframe */}
          <div className="rounded-2xl overflow-hidden shadow-2xl h-96 bg-slate-900 border border-white/10 relative">
            <iframe
              title={`Live map of ${selectedLoc.name}, Georgia`}
              className="w-full h-full border-0"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedLoc.name + ', GA')}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Absolute Badge showing active city */}
            <div className="absolute top-4 left-4 bg-primary/90 text-white text-[10px] font-extrabold uppercase px-3 py-1.5 rounded bg-blur-md border border-white/10 flex items-center gap-1.5">
              <Globe size={11} className="text-secondary animate-pulse" />
              <span>Viewing Area Map: {selectedLoc.name}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
