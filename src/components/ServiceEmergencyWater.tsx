import React from 'react';
import { Clock, Shield, CheckCircle2, ArrowRight, MapPin, ChevronRight, AlertCircle } from 'lucide-react';

interface ServiceEmergencyWaterProps {
  onOpenEstimator: () => void;
}

export default function ServiceEmergencyWater({ onOpenEstimator }: ServiceEmergencyWaterProps) {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  React.useEffect(() => {
    document.title = "Emergency Water Damage Savannah GA | 24/7 Fast Response Chatham County";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', '24/7 emergency water damage response in Savannah GA. Local specialists arrive within 60 minutes anywhere in Chatham County. Call now — free assessment.');
  }, []);

  const faqs = [
    {
      id: 1,
      question: "Is emergency water damage service really available at 2am in Savannah?",
      answer: "Yes. Local specialists serving Chatham County are on call 24 hours a day 7 days a week including weekends and holidays."
    },
    {
      id: 2,
      question: "What should I do while waiting for the specialist to arrive?",
      answer: "Turn off your water supply if a pipe has burst. Turn off electricity at the breaker if there is standing water. Document everything with photos and video. Move valuables out of the affected area if it is safe to do so. Do not run household fans over standing water — this can spread moisture rather than reduce it."
    },
    {
      id: 3,
      question: "How quickly can a specialist reach Tybee Island or Pooler?",
      answer: "Specialists serving all of Chatham County including outlying communities like Tybee Island and Pooler typically arrive within 60 minutes of your call."
    },
    {
      id: 4,
      question: "Will emergency response cost more than a regular call?",
      answer: "Certified restoration specialists in Chatham County do not charge after-hours or emergency premiums for the initial assessment. Your free assessment is free regardless of when you call."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* Hero Section */}
      <section className="relative bg-[#001e40] text-white py-20 md:py-32 overflow-hidden border-b border-blue-900/40">
        <div className="absolute inset-0 bg-gradient-to-r from-[#001e40] to-[#002e62]/90 z-0" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-550/10 border border-red-500/20 text-xs font-bold uppercase tracking-wider text-red-400 rounded-full mb-6">
            <Clock size={12} className="text-red-400 animate-spin" />
            <span>24/7 Immediate Help Available</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display leading-tight mb-6 max-w-4xl tracking-tight">
            24/7 Emergency Water Damage Response in Savannah, GA
          </h1>
          <p className="text-gray-300 font-body text-base md:text-xl max-w-2xl leading-relaxed mb-8">
            Water damage doesn't wait for business hours. Local certified specialists are on call around the clock across all of Chatham County.
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

      {/* Section 2 — Why Emergency Response Speed Matters */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="md:col-span-7">
              <h2 className="text-2xl md:text-4xl font-extrabold text-primary font-display mb-6 tracking-tight">
                Why Emergency Response Speed Matters in Savannah
              </h2>
              <p className="text-slate-600 font-body text-sm md:text-base leading-relaxed mb-6">
                In Savannah's coastal climate, water damage is a race against time. The city's average summer humidity exceeds 80% and temperatures stay warm for most of the year — conditions that accelerate every stage of water damage from initial absorption to mold colonization.
              </p>
              <p className="text-slate-600 font-body text-sm md:text-base leading-relaxed">
                A pipe that bursts at 2am in Ardsley Park, a washing machine that overflows on a Sunday in Pooler, a roof that leaks during a midnight storm in Thunderbolt — none of these wait for Monday morning. Every hour between a water event and professional extraction increases the total damage and the total cost. That is why 24/7 emergency response is not a luxury for Savannah homeowners — it is a necessity.
              </p>
            </div>
            <div className="md:col-span-5 bg-slate-50 border border-slate-100 p-8 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-[#001e40] mb-4">Urgent Warning</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Within 12 hours of dry-out delay, water vapor migrates from saturated materials into unsealed gypsum board ceiling framing, leading to swelling, peeling paint, and latent spores.
              </p>
              <div className="inline-flex items-center gap-2 p-2 px-3 bg-red-50 text-red-650 rounded-lg text-xs font-bold font-body">
                <AlertCircle size={14} />
                <span>Immediate extraction stops the spread</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — What Happens When You Call */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-display mb-4 tracking-tight">
              What Happens When You Call for Emergency Water Damage Help
            </h2>
            <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
              Our streamlined crisis-response protocol begins the second you dial or submit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-150/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-secondary flex items-center justify-center font-extrabold text-xs mb-4">
                  1
                </div>
                <h3 className="font-extrabold text-sm text-primary mb-2">Request Taken</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  A local Savannah specialist receives your information immediately — 24 hours a day, 7 days a week, including holidays.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-150/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-secondary flex items-center justify-center font-extrabold text-xs mb-4">
                  2
                </div>
                <h3 className="font-extrabold text-sm text-primary mb-2">Immediate Dispatch</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  A certified restoration specialist with professional equipment is dispatched to your Chatham County property. Typical arrival time is 60 minutes or less.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-150/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-secondary flex items-center justify-center font-extrabold text-xs mb-4">
                  3
                </div>
                <h3 className="font-extrabold text-sm text-primary mb-2">Moisture Analysis</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  The specialist assesses the full scope of water intrusion using professional moisture meters inside walls, under flooring, and in crawl spaces.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-150/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-secondary flex items-center justify-center font-extrabold text-xs mb-4">
                  4
                </div>
                <h3 className="font-extrabold text-sm text-primary mb-2">Active Extraction</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Industrial extraction equipment begins removing water the moment assessment is complete. No scheduling delays.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-150/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-secondary flex items-center justify-center font-extrabold text-xs mb-4">
                  5
                </div>
                <h3 className="font-extrabold text-sm text-primary mb-2">Drying Set</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Commercial dehumidifiers and air movers are placed immediately to strip relative humidity from the structural framing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Common emergency calls */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary font-display mb-6 tracking-tight">
                The Most Common Emergency Water Damage Calls in Chatham County
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                The emergency water damage calls we see most often across Savannah and Chatham County include burst pipes during winter cold snaps when Savannah temperatures drop unexpectedly, washing machine and refrigerator line failures, water heater tank ruptures, toilet overflows and sewage backups, air conditioning condensate drain overflows which are extremely common in Savannah's humid summers, storm and hurricane flooding through exterior walls and foundations, and roof leaks during severe weather events.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Many of these happen in the middle of the night or on weekends — which is exactly why 24/7 availability is essential.
              </p>
            </div>
            <div className="bg-[#001e40] text-gray-300 p-8 rounded-2xl border border-slate-800 shadow-xl">
              <h3 className="text-white font-extrabold mb-4 font-display text-sm uppercase tracking-wider text-[#34a0fe]">Common Call Types</h3>
              <ul className="space-y-3 text-xs leading-relaxed">
                <li>• Burst pipe failures during winter cold snaps</li>
                <li>• A/C condensate drain overflows during hot summer spikes</li>
                <li>• Toilet line structural blockages and overflows</li>
                <li>• Storm/Hurricane roof penetrations and leaks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Insurance */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary font-display mb-6 tracking-tight text-center">
            Emergency Water Damage and Your Insurance
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed text-center max-w-3xl mx-auto mb-6">
            Emergency water damage from sudden and accidental causes is covered under most standard homeowner's insurance policies in Georgia.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed text-center max-w-3xl mx-auto">
            When our specialists arrive they document everything professionally from the moment extraction begins — giving you a complete record of the damage scope for your insurance claim. We work directly with all major carriers including State Farm, Allstate, Nationwide, and Progressive to make the claims process as smooth as possible during what is already a stressful situation.
          </p>
        </div>
      </section>

      {/* Section 6 — 24/7 Coverage */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary font-display mb-4 tracking-tight">
            24/7 Emergency Coverage Across Chatham County
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10">
            Emergency water damage specialists are on call and ready to respond anywhere in Chatham County at any hour. Whether you are in downtown Savannah's historic district, out on Tybee Island after a storm, or in a new development in Pooler on a Sunday night — a certified specialist can be at your door within the hour.
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
            Emergency Water Damage Questions — Savannah, GA
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
            Water Emergency in Savannah Right Now?
          </h2>
          <p className="text-gray-300 font-body text-sm md:text-base max-w-2xl mb-8 leading-relaxed">
            Do not wait until morning. Local specialists are on call 24/7 across all of Chatham County. Every hour increases the damage.
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
