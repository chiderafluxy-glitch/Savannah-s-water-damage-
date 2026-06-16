import React from 'react';
import { Clock, Shield, CheckCircle2, ArrowRight, MapPin, ChevronRight, AlertOctagon } from 'lucide-react';

interface ServiceMoldRemediationProps {
  onOpenEstimator: () => void;
}

export default function ServiceMoldRemediation({ onOpenEstimator }: ServiceMoldRemediationProps) {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  React.useEffect(() => {
    document.title = "Mold Remediation Savannah GA | Mold Removal After Water Damage";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', "Mold remediation in Savannah GA after water damage. Savannah's humidity means mold grows fast — certified local specialists stop it before it spreads. Free assessment.");
  }, []);

  const faqs = [
    {
      id: 1,
      question: "How fast does mold grow after water damage in Savannah?",
      answer: "In Savannah's coastal humidity mold can begin forming within 18 to 24 hours after a water event — faster than most US cities. This is why immediate response to water damage is critical."
    },
    {
      id: 2,
      question: "Can I remove mold myself?",
      answer: "Small surface mold on non-porous materials can sometimes be cleaned with household products. But mold inside wall cavities, under flooring, or in crawl spaces requires professional equipment and containment to remove safely without spreading spores to other areas of the home."
    },
    {
      id: 3,
      question: "Will mold come back after remediation?",
      answer: "Professionally remediated mold does not come back if the moisture source is fully addressed and structural drying is completed correctly. Mold returns only when moisture is still present."
    },
    {
      id: 4,
      question: "Is mold dangerous to my family?",
      answer: "Mold exposure can cause respiratory irritation, allergy symptoms, and more serious health effects in sensitive individuals including children, elderly residents, and those with asthma or compromised immune systems. Professional remediation should not be delayed when mold is present."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* Hero Section */}
      <section className="relative bg-[#001e40] text-white py-20 md:py-32 overflow-hidden border-b border-blue-900/40">
        <div className="absolute inset-0 bg-gradient-to-r from-[#001e40] to-[#002e62]/90 z-0" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 text-xs font-bold uppercase tracking-wider text-red-400 rounded-full mb-6">
            <AlertOctagon size={12} className="text-red-400" />
            <span>Certified Mold Removal Specialists</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display leading-tight mb-6 max-w-4xl tracking-tight">
            Mold Remediation in Savannah, GA
          </h1>
          <p className="text-gray-300 font-body text-base md:text-xl max-w-2xl leading-relaxed mb-8">
            Savannah's coastal humidity makes mold grow faster than almost anywhere in the US. Certified local specialists stop it at the source. Free assessment 24/7.
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

      {/* Section 2 — Why Mold Is a Serious Problem */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="md:col-span-7">
              <h2 className="text-2xl md:text-4xl font-extrabold text-primary font-display mb-6 tracking-tight">
                Why Mold Is a Serious Problem in Savannah Homes
              </h2>
              <p className="text-slate-600 font-body text-sm md:text-base leading-relaxed mb-6">
                Savannah sits in one of the most mold-favorable climates in the United States. Average summer relative humidity exceeds 80%. Temperatures stay warm from April through October. The city receives 49 inches of rain annually.
              </p>
              <p className="text-slate-600 font-body text-sm md:text-base leading-relaxed">
                These conditions mean that any moisture intrusion — a pipe leak, a roof leak, a flooding event, even a slow condensation problem from an aging AC unit — can produce visible mold growth within 18 to 24 hours. Savannah's historic homes throughout the Landmark Historic District, Thomas Square, and the Victorian District are particularly vulnerable due to older wood framing, lack of modern vapor barriers, and crawl space foundations that collect moisture below the living space.
              </p>
            </div>
            <div className="md:col-span-5 bg-slate-50 border border-slate-100 p-8 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-4">Savannah Coastal Climate</h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-slate-200 pb-2 text-xs">
                  <span className="text-slate-500">Average Summer Humidity</span>
                  <span className="font-bold text-primary">80%+</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2 text-xs">
                  <span className="text-slate-500">Annual Rainfall</span>
                  <span className="font-bold text-primary">49 inches</span>
                </div>
                <div className="flex justify-between pb-1 text-xs">
                  <span className="text-slate-500">First Mold Sign Window</span>
                  <span className="font-bold text-red-500">18 - 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Signs You Have Mold */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="font-extrabold text-primary mb-4 text-base">Key Indicators</h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-secondary shrink-0" /> Persistent musty, damp, or earthy odors</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-secondary shrink-0" /> Increased sinus, allergy, or breathing irritation</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-secondary shrink-0" /> Bubbly, flaky, or cracking water-stained drywall</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-secondary shrink-0" /> Velvet-like green, black, or grey wall spots</li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary font-display mb-6 tracking-tight">
                Signs You Have Mold After Water Damage in Your Savannah Home
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                The most obvious sign is visible mold growth — typically appearing as black, green, or white spots on walls, ceilings, or flooring. But mold frequently establishes itself inside wall cavities and under flooring before it becomes visible.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Other signs include a persistent musty or earthy smell that does not go away with ventilation, increased allergy symptoms or respiratory irritation among occupants, warping or bubbling of drywall or paint, and discoloration of walls or ceilings even without visible mold colonies. If you have had any water damage event in the past 30 days and notice any of these signs, professional assessment is the right move.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — The Mold Remediation Process */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-display mb-4 tracking-tight">
              The Mold Remediation Process in Chatham County
            </h2>
            <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
              Our specialists follow rigid containment, removal, and sterilization protocols to protect your air quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-150/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-secondary flex items-center justify-center font-extrabold text-xs mb-4">
                  1
                </div>
                <h3 className="font-extrabold text-sm text-primary mb-2">Assessment</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Professional moisture meters and visual inspection identify all areas of mold growth including inside walls and under flooring.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-150/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-secondary flex items-center justify-center font-extrabold text-xs mb-4">
                  2
                </div>
                <h3 className="font-extrabold text-sm text-primary mb-2">Containment</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Affected areas are isolated with physical plastic barriers and negative air scrubbers to keep mold spores from traveling.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-150/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-secondary flex items-center justify-center font-extrabold text-xs mb-4">
                  3
                </div>
                <h3 className="font-extrabold text-sm text-primary mb-2">Removal</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Contaminated soft drywall, flooring, and insulation are safely removed and bagged. Wood is sanitized.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-150/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-secondary flex items-center justify-center font-extrabold text-xs mb-4">
                  4
                </div>
                <h3 className="font-extrabold text-sm text-primary mb-2">Drying &amp; Kill</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Industrial dehumidification runs alongside deep EPA-approved fungicide treatment to ensure mold is dead.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-150/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-secondary flex items-center justify-center font-extrabold text-xs mb-4">
                  5
                </div>
                <h3 className="font-extrabold text-sm text-primary mb-2">Verification</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Post-remediation assessment confirms relative humidity is stabilized below mold-enabling ranges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Cost Breakdown */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary font-display mb-6 tracking-tight">
                How Much Does Mold Remediation Cost in Savannah?
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                Mold remediation costs in Chatham County depend almost entirely on how quickly the problem is addressed.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Mold caught within 24 to 48 hours of a water event — treated as part of the restoration process — typically costs $500 to $1,500 for a contained area. Mold discovered after 3 to 7 days, requiring drywall removal, runs $2,000 to $6,000. Mold that has been present for two weeks or longer — spreading into wall cavities, under flooring, and potentially into HVAC systems — can require $10,000 to $30,000 or more in remediation and reconstruction. The single most important factor in mold remediation cost is response time.
              </p>
            </div>
            <div className="bg-[#001e40] text-gray-200 p-8 rounded-2xl shadow-sm border border-blue-900/40">
              <h3 className="text-white font-extrabold mb-4 font-display">Cost Matrix Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-xs border-b border-blue-900 pb-2">
                  <span>Early Catch (24-48h)</span>
                  <span className="font-bold text-secondary">$500 - $1,500</span>
                </div>
                <div className="flex justify-between text-xs border-b border-blue-900 pb-2">
                  <span>Delayed Discovery (3-7d)</span>
                  <span className="font-bold text-secondary">$2,000 - $6,000</span>
                </div>
                <div className="flex justify-between text-xs pb-1">
                  <span>Severe Spread (2+ weeks)</span>
                  <span className="font-bold text-red-400">$10,000 - $30,000+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Insurance */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary font-display mb-6 tracking-tight text-center">
            Does Insurance Cover Mold Remediation in Savannah?
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 text-center max-w-3xl mx-auto">
            Mold remediation is covered by homeowner's insurance when it results directly from a covered water damage event — a burst pipe, appliance failure, or storm-related roof leak. Mold that developed due to long-term neglect, gradual leaks, or flooding from outside the home is typically not covered under standard policies. Our specialists document all mold damage professionally to support your insurance claim and work directly with your adjuster.
          </p>
        </div>
      </section>

      {/* Section 7 — Areas Served */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary font-display mb-4 tracking-tight">
            Areas Served for Mold Remediation in Chatham County
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10">
            We provide mold testing, removal, and air purification services throughout all communities.
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
            Mold Remediation Questions — Savannah, GA
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
            Noticed Mold or a Musty Smell in Your Savannah Home?
          </h2>
          <p className="text-gray-300 font-body text-sm md:text-base max-w-2xl mb-8 leading-relaxed">
            Don't wait — mold spreads fast in Chatham County's climate. Get a free assessment from a certified local specialist.
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
