import React from 'react';
import { Clock, Shield, CheckCircle2, ArrowRight, MapPin, ChevronRight, AlertTriangle } from 'lucide-react';

interface ServiceFloodDamageProps {
  onOpenEstimator: () => void;
}

export default function ServiceFloodDamage({ onOpenEstimator }: ServiceFloodDamageProps) {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  React.useEffect(() => {
    document.title = "Flood Damage Restoration Savannah GA | Storm & Flood Cleanup Chatham County";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'Flood damage restoration in Savannah GA. Local certified specialists clean up and restore Chatham County homes after storm flooding, river flooding, and surge damage. Free assessment.');
  }, []);

  const faqs = [
    {
      id: 1,
      question: "Is flood damage different from regular water damage?",
      answer: "Yes. External floodwater carries contaminants including bacteria and sewage that require professional sanitization beyond standard drying. Materials in contact with contaminated floodwater often need removal rather than drying in place."
    },
    {
      id: 2,
      question: "Does homeowner's insurance cover flood damage in Savannah?",
      answer: "Standard homeowner's insurance does not cover external flooding. You need a separate NFIP flood insurance policy. Our specialists work with flood insurance adjusters directly."
    },
    {
      id: 3,
      question: "How long does flood damage restoration take?",
      answer: "Flood restoration typically takes longer than standard water damage — usually 5 to 10 days depending on contamination level, affected area size, and whether structural materials need removal and replacement."
    },
    {
      id: 4,
      question: "My neighborhood floods every hurricane season — what should I do to prepare?",
      answer: "Elevate electrical panels, water heaters, and appliances above likely flood levels. Install check valves on sump pumps. Keep sandbags available. And know who to call the moment flooding occurs — response time is everything in Chatham County's climate."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* Hero Section */}
      <section className="relative bg-[#001e40] text-white py-20 md:py-32 overflow-hidden border-b border-blue-900/40">
        <div className="absolute inset-0 bg-gradient-to-r from-[#001e40] to-[#002e62]/90 z-0" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-wider text-amber-400 rounded-full mb-6">
            <AlertTriangle size={12} className="text-amber-400" />
            <span>High-Risk Zone Surge Team</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display leading-tight mb-6 max-w-4xl tracking-tight">
            Flood Damage Restoration in Savannah, GA
          </h1>
          <p className="text-gray-300 font-body text-base md:text-xl max-w-2xl leading-relaxed mb-8">
            Savannah and Chatham County flood more than almost anywhere in Georgia. When it happens, local certified specialists are ready to restore your home fast.
          </p>
          <a
            href="tel:8438004261"
            className="inline-flex items-center gap-3 bg-secondary text-white hover:bg-[#002e62] px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide transition-all shadow-lg hover:shadow-xl active:scale-98 cursor-pointer"
          >
            <span>Call Now</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Section 2 — Flood Damage in Savannah */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="md:col-span-7">
              <h2 className="text-2xl md:text-4xl font-extrabold text-primary font-display mb-6 tracking-tight">
                Flood Damage in Savannah — A Bigger Risk Than Most Homeowners Realize
              </h2>
              <p className="text-slate-600 font-body text-sm md:text-base leading-relaxed mb-6">
                According to ClimateCheck data, 77% of buildings in Savannah are at risk of flooding — and of 124 census tracts in the city, 90 have more than half their buildings facing significant flood risk.
              </p>
              <p className="text-slate-600 font-body text-sm md:text-base leading-relaxed">
                Chatham County has experienced over 14 major flood events since 1948, with over 1,400 dwellings on county record as having flooded during those events. The county sits at the convergence of the Savannah, Wilmington, Vernon, Forest, Grove, and Ogeechee Rivers, plus multiple drainage canals including the Springfield, Casey, Placentia, Pipemakers, and Hardin Canals. Add Atlantic coastal storm surge, hurricane exposure, and 49 inches of annual rainfall, and Chatham County is one of the most flood-exposed counties in Georgia.
              </p>
            </div>
            <div className="md:col-span-5 bg-slate-50 border border-slate-100 p-8 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-4">Savannah Hydrology Risk</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary shrink-0 mt-2" />
                  <p className="text-xs text-slate-600">
                    <strong>77% Risk Rating:</strong> More than three-quarters of all structures carry measurable exposure indices.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary shrink-0 mt-2" />
                  <p className="text-xs text-slate-600">
                    <strong>Major Rivers:</strong> Surrounding networks can cause multi-acre tidal backup surges during storms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Flood Damage vs Water Damage */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="font-extrabold text-primary mb-4 text-base">Key Differences</h3>
              <ul className="space-y-3">
                {['Contaminated water categories (Category 3/Black water)', 'Extensive chemical & pathological sanitizing protocols', 'Removal of saturated drywall & porous materials', 'Rigid local/state solid environmental waste compliance'].map((item, id) => (
                  <li key={id} className="flex gap-2.5 text-xs text-slate-600 items-start">
                    <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary font-display mb-6 tracking-tight">
                Flood Damage vs Water Damage — What's the Difference for Restoration?
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                Flood damage from external sources — storm surge, river overflow, stormwater backup — is more complex to restore than internal water damage from pipe failures.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Floodwater from outside the home carries contaminants including bacteria, sewage, and chemical runoff that require professional sanitization in addition to standard drying. Structural materials that have been in contact with contaminated floodwater often need to be removed rather than dried in place. Savannah's older housing stock — particularly homes in Ardsley Park, Cuyler-Brownsville, and the historic district with older foundations — absorbs contaminated floodwater differently than modern construction and requires careful assessment before any restoration work begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — The Flood Damage Restoration Process */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-display mb-4 tracking-tight">
              The Flood Damage Restoration Process in Chatham County
            </h2>
            <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
              Handling Category 3 flood contamination requires a deliberate, step-by-step restoration flow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-150/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-secondary flex items-center justify-center font-extrabold text-xs mb-4">
                  1
                </div>
                <h3 className="font-extrabold text-sm text-primary mb-2">Safety Assessment</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Before any restoration work begins, specialists assess structural safety and contamination level of the floodwater. Contaminated water from external flooding requires different handling than clean water from internal pipe failures.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-150/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-secondary flex items-center justify-center font-extrabold text-xs mb-4">
                  2
                </div>
                <h3 className="font-extrabold text-sm text-primary mb-2">Extraction &amp; Removal</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Industrial extraction equipment removes all standing water and mud. Contaminated materials that cannot be safely restored are removed and disposed of according to Georgia environmental guidelines.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-150/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-secondary flex items-center justify-center font-extrabold text-xs mb-4">
                  3
                </div>
                <h3 className="font-extrabold text-sm text-primary mb-2">Sanitization</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  All surfaces that were in contact with external floodwater are treated with professional sanitization agents to address bacterial and chemical contamination. This step is non-negotiable for external flood events in Chatham County.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-150/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-secondary flex items-center justify-center font-extrabold text-xs mb-4">
                  4
                </div>
                <h3 className="font-extrabold text-sm text-primary mb-2">Structural Drying</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Commercial dehumidifiers and air movers run continuously — typically 3 to 5 days in Savannah's climate — to bring structural moisture levels to safe standards throughout the affected area.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-150/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-secondary flex items-center justify-center font-extrabold text-xs mb-4">
                  5
                </div>
                <h3 className="font-extrabold text-sm text-primary mb-2">Reconstruction</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Once drying is verified, specialists assess what structural repairs are needed and coordinate with contractors for reconstruction where necessary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Neighborhoods Most Affected */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary font-display mb-6 tracking-tight">
                The Chatham County Neighborhoods Most Affected by Flooding
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                Based on FEMA flood zone data and historical flood records, the Chatham County communities most frequently affected by flood damage restoration needs include Tybee Island, Thunderbolt, Garden City, Port Wentworth, Pooler, Ardsley Park, Isle of Hope, Wilmington Island, and Skidaway Island.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                If your property is in or near any of these communities, having a flood response plan — and knowing who to call — before the next storm season is one of the most valuable things you can do as a homeowner.
              </p>
            </div>
            <div className="bg-[#001e40] text-gray-300 p-8 rounded-2xl">
              <h3 className="text-white font-extrabold font-display mb-4 text-xs uppercase tracking-widest text-[#34a0fe]">Chatham County FEMA Zones</h3>
              <ul className="space-y-3 text-xs leading-relaxed">
                <li>• <strong>AE &amp; VE Zones:</strong> Tybee Island coastal surges demand critical fast-response water extractions.</li>
                <li>• <strong>X Zones:</strong> Urban stormwater pondings can overwhelm basement stairways and floor slabs.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Flood Insurance */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-12">
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary font-display mb-6 tracking-tight text-center">
                Flood Insurance and Restoration in Savannah
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 max-w-3xl mx-auto text-center">
                External flood damage requires a separate NFIP flood insurance policy — standard homeowner's insurance does not cover flooding from outside the home.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 max-w-3xl mx-auto text-center">
                Chatham County participates in FEMA's Community Rating System, which gives county flood insurance policy holders a 5% discount on premiums — saving residents a combined $257,400 per year. If you have NFIP coverage, our specialists work directly with your flood insurance adjuster and document the full scope of damage professionally to support your claim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — Areas Served */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary font-display mb-4 tracking-tight">
            Areas Served for Flood Damage Restoration
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10">
            We provide fast-emergency support across all Chatham municipal and unincorporated boundaries.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Savannah', 'Pooler', 'Garden City', 'Thunderbolt', 'Tybee Island', 'Bloomingdale', 'Port Wentworth', 'Isle of Hope', 'Wilmington Island'].map((pill, idx) => (
              <span key={idx} className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-50 border border-slate-200 text-primary font-bold text-xs uppercase tracking-wider rounded-full shadow-sm">
                <MapPin size={12} className="text-secondary" />
                <span>{pill}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary font-display mb-10 tracking-tight text-center">
            Flood Damage Restoration Questions — Savannah, GA
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div key={faq.id} className="bg-white rounded-xl border border-slate-200/80 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full text-left p-5 flex justify-between items-center gap-4 font-display font-black text-[#001e40] text-sm md:text-base select-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
                      <ChevronRight size={18} className="text-slate-400" />
                    </div>
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] border-t border-slate-100' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <p className="p-5 text-xs md:text-sm text-slate-600 leading-relaxed font-body">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#001e40] text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#001e40] to-[#002e62]/90 z-0" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight mb-4 tracking-tight">
            Flood Damage in Your Savannah Home?
          </h2>
          <p className="text-gray-300 font-body text-sm md:text-base max-w-2xl mb-8 leading-relaxed">
            Local certified specialists serve all of Chatham County 24/7. Get a free flood damage assessment — fast response, insurance approved.
          </p>
          <a
            href="tel:8438004261"
            className="bg-secondary text-white hover:bg-[#002e62] px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide transition-all shadow-lg hover:shadow-xl active:scale-98 cursor-pointer text-center"
          >
            Call Now →
          </a>
        </div>
      </section>
    </div>
  );
}
