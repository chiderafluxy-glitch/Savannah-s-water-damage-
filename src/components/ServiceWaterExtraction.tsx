import React from 'react';
import { Clock, Shield, CheckCircle2, ArrowRight, MapPin, ChevronRight } from 'lucide-react';

interface ServiceWaterExtractionProps {
  onOpenEstimator: () => void;
}

export default function ServiceWaterExtraction({ onOpenEstimator }: ServiceWaterExtractionProps) {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  React.useEffect(() => {
    document.title = "Water Extraction Savannah GA | Emergency Standing Water Removal";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'Emergency water extraction in Savannah GA. Industrial equipment removes standing water fast before structural damage and mold set in. Free assessment 24/7.');
  }, []);

  const faqs = [
    {
      id: 1,
      question: "How long does water extraction take?",
      answer: "Most residential water extraction in Savannah takes 1 to 4 hours depending on the volume of water and the size of the affected area. Extraction is followed immediately by structural drying which runs 3 to 5 days."
    },
    {
      id: 2,
      question: "Can I extract the water myself and skip professional drying?",
      answer: "Surface water can be removed with household equipment but water inside walls, under floors, and in crawl spaces cannot. Skipping professional extraction and drying in Savannah's humidity almost always results in mold within 24 to 48 hours."
    },
    {
      id: 3,
      question: "Does insurance cover emergency water extraction?",
      answer: "Yes in most cases when the cause is sudden and accidental. Our specialists document the extraction process for your insurance claim."
    },
    {
      id: 4,
      question: "What if my crawl space flooded?",
      answer: "Crawl space flooding is common in Chatham County and requires specialized extraction equipment. Our specialists handle crawl space water extraction as part of the standard restoration process."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* Hero Section */}
      <section className="relative bg-[#001e40] text-white py-20 md:py-32 overflow-hidden border-b border-blue-900/40">
        <div className="absolute inset-0 bg-gradient-to-r from-[#001e40] to-[#002e62]/90 z-0" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/20 text-xs font-bold uppercase tracking-wider text-secondary rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span>24/7 Flood Response Team</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display leading-tight mb-6 max-w-4xl tracking-tight">
            Emergency Water Extraction in Savannah, GA
          </h1>
          <p className="text-gray-300 font-body text-base md:text-xl max-w-2xl leading-relaxed mb-8">
            Industrial grade extraction removes standing water fast — before mold sets in and structural damage gets worse. Serving all of Chatham County 24/7.
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

      {/* Section 2 — Why Water Extraction Cannot Wait */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="md:col-span-7">
              <h2 className="text-2xl md:text-4xl font-extrabold text-primary font-display mb-6 tracking-tight">
                Why Water Extraction Cannot Wait in Savannah
              </h2>
              <p className="text-slate-600 font-body text-sm md:text-base leading-relaxed mb-6">
                Standing water is the most destructive force in a home. Every hour it sits, it migrates deeper into flooring, wall cavities, insulation, and structural wood.
              </p>
              <p className="text-slate-600 font-body text-sm md:text-base leading-relaxed">
                In Savannah's coastal humidity — where summers regularly exceed 80% relative humidity and temperatures stay above 85°F from May through September — water that would cause moderate damage in a drier climate causes severe damage here. Mold can begin forming within 18 to 24 hours. Hardwood floors begin to buckle within 24 to 48 hours. Drywall begins to lose structural integrity within 48 to 72 hours. The faster standing water is extracted, the smaller the total restoration cost.
              </p>
            </div>
            <div className="md:col-span-5 bg-slate-50 border border-slate-100 p-8 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-4">Critical Timeline</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-secondary pl-3">
                  <p className="text-xs font-bold text-primary">18 - 24 Hours</p>
                  <p className="text-[11px] text-slate-500">Active mold spores begin dividing and spreading.</p>
                </div>
                <div className="border-l-2 border-secondary pl-3">
                  <p className="text-xs font-bold text-primary">24 - 48 Hours</p>
                  <p className="text-[11px] text-slate-500">Hardwood planks absorb moisture and swell, causing cupping.</p>
                </div>
                <div className="border-l-2 border-secondary pl-3">
                  <p className="text-xs font-bold text-primary">48+ Hours</p>
                  <p className="text-[11px] text-slate-500">Drywall degrades, losing density and sag-resistance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Professional vs DIY */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="font-extrabold text-primary mb-4 text-base">The Professional Advantage</h3>
              <ul className="space-y-3">
                {['Subfloor moisture meter sensors', 'Trailer-mount super vacuum pumps', 'Weighted subsurface water extractors', 'Under-slab infrared heat scanners'].map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 text-xs text-slate-600 items-start">
                    <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary font-display mb-6 tracking-tight">
                Professional Water Extraction vs DIY — What's the Difference
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                Household wet vacuums and mops remove surface water only. They cannot extract water that has migrated into subfloor materials, wall cavities, or insulation — which is where the real damage happens.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Professional extraction equipment used by certified Savannah specialists includes truck-mount extraction units capable of removing hundreds of gallons per hour, and portable extraction equipment that reaches tight spaces including crawl spaces, which are common in older Chatham County homes. After extraction, professional moisture meters verify exactly how far water has traveled inside your structure — information that is impossible to get without professional equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — The Water Extraction Process */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-display mb-4 tracking-tight">
              The Water Extraction Process in Chatham County
            </h2>
            <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
              How our connected crews dry standing water and stop further absorption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-150/80 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-secondary flex items-center justify-center font-extrabold text-sm mb-6">
                1
              </div>
              <h3 className="font-extrabold text-lg text-primary mb-3">Emergency Dispatch</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Specialist arrives within 60 minutes anywhere in Chatham County. Time from your call to equipment running is minimized at every step.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-150/80 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-secondary flex items-center justify-center font-extrabold text-sm mb-6">
                2
              </div>
              <h3 className="font-extrabold text-lg text-primary mb-3">Full Moisture Mapping</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Professional moisture meters map exactly where water has traveled inside walls, under floors, and in crawl spaces before extraction begins. This ensures nothing is missed.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-150/80 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-secondary flex items-center justify-center font-extrabold text-sm mb-6">
                3
              </div>
              <h3 className="font-extrabold text-lg text-primary mb-3">Industrial Extraction</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Truck-mount and portable extraction equipment removes all standing and trapped water. Savannah's older housing stock — particularly homes with crawl space foundations common in Midtown, Ardsley Park, and the Victorian District — requires specialized equipment to fully extract water from below-grade spaces.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-150/80 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-secondary flex items-center justify-center font-extrabold text-sm mb-6">
                4
              </div>
              <h3 className="font-extrabold text-lg text-primary mb-3">Transition to Drying</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Once extraction is complete the affected area transitions immediately to structural drying using commercial dehumidifiers and air movers. Extraction and drying together — not extraction alone — is what prevents mold in Savannah's climate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Common Causes */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary font-display mb-6 tracking-tight">
                Common Causes of Standing Water in Savannah Homes
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                The most frequent causes of emergency water extraction calls in Chatham County include burst pipes during winter cold snaps, washing machine and dishwasher hose failures, water heater failures, air conditioning condensate line overflows, toilet and sewage backups, storm flooding through exterior walls or foundations, and roof leaks during hurricane season.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Savannah's aging housing stock — a significant percentage of homes built before 1980 — also experiences more frequent pipe failures than newer construction.
              </p>
            </div>
            <div className="bg-[#001e40] text-gray-300 p-8 rounded-2xl">
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Savannah Local Context</h3>
              <p className="text-xs leading-relaxed">
                In many older homes situated around Midtown or Baldwin Park, the lack of modern waterproof foundation block systems combined with vintage cast-iron lateral pipelines means structural backup events require prompt sanitizing extraction to keep damp mold spores from settling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Areas Served */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary font-display mb-4 tracking-tight">
            Areas We Serve for Emergency Water Extraction
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10">
            Emergency water extraction specialists are available across all of Chatham County including Savannah, Pooler, Garden City, Thunderbolt, Tybee Island, Bloomingdale, and Port Wentworth. Response time from call to arrival is typically 60 minutes or less anywhere in the county.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Savannah', 'Pooler', 'Garden City', 'Thunderbolt', 'Tybee Island', 'Bloomingdale', 'Port Wentworth'].map((pill, idx) => (
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
            Water Extraction Questions — Savannah, GA
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
            Standing Water in Your Savannah Home?
          </h2>
          <p className="text-gray-300 font-body text-sm md:text-base max-w-2xl mb-8 leading-relaxed font-normal">
            Every hour it sits causes more damage. Get a free assessment and emergency extraction from a local Chatham County specialist.
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
