import React from 'react';
import { Clock, Shield, CheckCircle2, ArrowRight, MapPin, ChevronRight, HelpCircle } from 'lucide-react';

interface ServiceWaterDamageProps {
  onOpenEstimator: () => void;
}

export default function ServiceWaterDamage({ onOpenEstimator }: ServiceWaterDamageProps) {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  React.useEffect(() => {
    document.title = "Water Damage Restoration Savannah GA | 24/7 Emergency Service";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'Certified water damage restoration in Savannah GA. We respond in 60 minutes or less across all of Chatham County. Free assessment, no obligation.');
  }, []);

  const faqs = [
    {
      id: 1,
      question: "How quickly can a specialist reach my Savannah home?",
      answer: "Local specialists are on call 24/7 and typically reach properties anywhere in Chatham County within 60 minutes."
    },
    {
      id: 2,
      question: "Is water damage restoration covered by insurance in Georgia?",
      answer: "Most sudden and accidental water damage is covered under standard homeowner's insurance. Flooding from outside your home requires separate NFIP flood insurance. Our specialists work directly with your adjuster."
    },
    {
      id: 3,
      question: "How long does the restoration process take?",
      answer: "Most projects take 3 to 7 days. The drying phase requires 3 to 5 days of continuous equipment operation to reach safe moisture levels in Savannah's climate."
    },
    {
      id: 4,
      question: "What if I have mold already?",
      answer: "If mold is present our specialists will assess the extent and recommend appropriate remediation. Mold remediation is a separate process from water damage restoration but can be handled by the same local team."
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
            <span>24/7 Emergency Dispatch</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display leading-tight mb-6 max-w-4xl tracking-tight">
            Water Damage Restoration in Savannah, GA
          </h1>
          <p className="text-gray-300 font-body text-base md:text-xl max-w-2xl leading-relaxed mb-8">
            Certified local specialists serving all of Chatham County. 24/7 emergency response. Free damage assessment.
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

      {/* What Is Water Damage Restoration */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="md:col-span-7">
              <h2 className="text-2xl md:text-4xl font-extrabold text-primary font-display mb-6 tracking-tight">
                What Does Water Damage Restoration Actually Involve?
              </h2>
              <p className="text-slate-600 font-body text-sm md:text-base leading-relaxed mb-6">
                Water damage restoration is the full process of returning your home to its pre-loss condition after water intrusion. It goes beyond simply drying out visible wet areas.
              </p>
              <p className="text-slate-600 font-body text-sm md:text-base leading-relaxed">
                Professional restoration in Savannah involves emergency water extraction, structural drying using industrial dehumidifiers and air movers, moisture testing inside walls and under floors, antimicrobial treatment to prevent mold growth, and final inspection to verify safe moisture levels throughout the structure. In Savannah's coastal humidity, skipping any of these steps — especially the moisture verification — is what leads to mold growth weeks after the visible damage appears dry.
              </p>
            </div>
            <div className="md:col-span-5 bg-slate-50 border border-slate-100 p-8 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-4">Quick Fact</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Clock size={20} className="text-secondary shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600">
                    <strong>60-Min Dispatch:</strong> Local specialists are positioned around Savannah to arrive at your door within the hour.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Shield size={20} className="text-secondary shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600">
                    <strong>IICRC Standards:</strong> All connected technicians are fully certified and follow standard protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Water Damage Restoration Works */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-display mb-4 tracking-tight">
              How Water Damage Restoration Works in Chatham County
            </h2>
            <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
              Our streamlined 4-step restoration program stops damage fast and prevents secondary complications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-150/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-blue-50 text-secondary flex items-center justify-center font-extrabold text-sm mb-6">
                  1
                </div>
                <h3 className="font-extrabold text-lg text-primary mb-3">Emergency Response</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Available 24/7. A local Savannah specialist is dispatched to your property within 60 minutes. Time is the most critical factor in limiting damage and cost.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-150/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-blue-50 text-secondary flex items-center justify-center font-extrabold text-sm mb-6">
                  2
                </div>
                <h3 className="font-extrabold text-lg text-primary mb-3">Assessment and Extraction</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Full moisture assessment using professional meters to identify all affected areas including inside walls and under flooring. Industrial extraction equipment removes all standing water immediately.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-150/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-blue-50 text-secondary flex items-center justify-center font-extrabold text-sm mb-6">
                  3
                </div>
                <h3 className="font-extrabold text-lg text-primary mb-3">Structural Drying</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  High-volume commercial dehumidifiers and axial air movers are placed throughout the affected area. In Savannah's climate, this phase typically runs 3 to 5 days of continuous operation to reach safe moisture levels.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-150/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-blue-50 text-secondary flex items-center justify-center font-extrabold text-sm mb-6">
                  4
                </div>
                <h3 className="font-extrabold text-lg text-primary mb-3">Treatment and Verification</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Antimicrobial treatment is applied to all affected surfaces. Final moisture readings confirm the structure has returned to pre-loss standards before equipment is removed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Locally */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-[#001e40] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-950/20 z-0" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-extrabold font-display mb-6 tracking-tight text-white">
                Why Water Damage Restoration in Savannah Is Different
              </h2>
              <p className="text-gray-300 font-body text-sm md:text-base leading-relaxed mb-6">
                Savannah's average humidity regularly exceeds 80% during summer months, and the city receives an average of 49 inches of rain per year — well above the national average.
              </p>
              <p className="text-gray-300 font-body text-sm md:text-base leading-relaxed">
                According to ClimateCheck data, 77% of buildings in Savannah are at risk of flooding. Chatham County has experienced over 14 major flood events since 1948, with over 1,400 dwellings affected on record. This local environment means water damage escalates faster here than in most American cities. Mold can begin forming within 18 to 24 hours. Structural materials absorb moisture more deeply. Professional restoration — not DIY drying — is the only reliable solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary font-display mb-6 tracking-tight animate-fade-in">
                We Work With Your Insurance Company
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                Most water damage restoration in Savannah is covered under standard homeowner's insurance when the cause is sudden and accidental — burst pipes, appliance failures, roof leaks.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Our specialists work directly with all major carriers serving Chatham County including State Farm, Allstate, Nationwide, and Progressive. We document the full scope of damage using professional equipment so nothing is missed in your claim.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-150/80 shadow-sm">
              <h3 className="font-extrabold text-primary mb-4 text-base">Direct Claims Support</h3>
              <ul className="space-y-3">
                {['Direct billing option available', 'Full photo and moisture mapping logs', 'Moisture verification graphs for adjusters', 'Dedicated adjuster correspondence'].map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 text-xs text-slate-600 items-start">
                    <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary font-display mb-4 tracking-tight">
            Serving All of Chatham County
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10">
            Our local restoration specialists serve every neighborhood and community in Chatham County including Savannah, Pooler, Garden City, Thunderbolt, Tybee Island, Bloomingdale, and Port Wentworth. If you are in Chatham County and dealing with water damage, we can have a specialist at your property within the hour.
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
            Water Damage Restoration Questions — Savannah, GA
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
            Dealing With Water Damage in Savannah Right Now?
          </h2>
          <p className="text-gray-300 font-body text-sm md:text-base max-w-2xl mb-8 leading-relaxed">
            Don't wait — every hour increases the damage and the cost. Get a free assessment from a local Chatham County specialist.
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
