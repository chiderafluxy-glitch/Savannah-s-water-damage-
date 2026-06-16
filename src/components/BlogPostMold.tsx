import { ArrowRight, BookOpen, Clock, Calendar, ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface BlogPostProps {
  onNavigateHome: (sectionId?: string) => void;
}

export default function BlogPostMold({ onNavigateHome }: BlogPostProps) {
  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Back to Home Header */}
      <div className="bg-[#f8f9fb] border-b border-outline-variant py-4">
        <div className="container mx-auto px-6 max-w-4xl">
          <button 
            onClick={() => onNavigateHome()}
            className="flex items-center gap-2 text-secondary hover:text-secondary-container font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            <ChevronLeft size={16} />
            Back to Home
          </button>
        </div>
      </div>

      {/* Article Hero */}
      <section className="bg-primary text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/85 z-0" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="flex items-center gap-3 text-red-400 text-xs font-bold uppercase tracking-widest mb-4">
            <BookOpen size={14} />
            <span>MOLD & HEALTH RESOURCE</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold font-display leading-tight mb-6">
            Mold After Water Damage in Savannah, GA — How Fast It Grows and What To Do
          </h1>
          <div className="flex flex-wrap gap-6 text-xs text-gray-300 font-medium">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              <span>June 16, 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          
          {/* Main Content Div with proper typography guidelines */}
          <div className="font-body text-base md:text-lg text-slate-700 leading-relaxed space-y-6">
            <p className="font-semibold text-lg text-slate-950 leading-relaxed">
              Savannah is one of the most beautiful cities in America. It's also one of the most humid — which means when water gets into your home, mold doesn't wait around. If you've had any kind of water damage event in Chatham County and you're wondering whether to act now or wait and see, this article is going to answer that question definitively.
            </p>

            <h2 className="text-2xl font-extrabold font-display text-primary pt-6 mb-4">
              How Fast Does Mold Grow After Water Damage in Savannah?
            </h2>
            <p>
              Mold spores begin colonizing wet building materials within 24 to 48 hours under normal conditions. In Savannah, where average summer relative humidity regularly exceeds 80% and temperatures stay above 85°F from May through September, that window is shorter — often closer to 18 to 24 hours after a water event.
            </p>
            <p>
              Mold needs three things to grow: moisture, a food source like drywall or wood, and warmth. Savannah provides all three in abundance for most of the year. The historic homes throughout the Landmark Historic District, Thomas Square, and Victorian District — many built with older wood framing and without modern vapor barriers — are particularly vulnerable.
            </p>

            <h2 className="text-2xl font-extrabold font-display text-primary pt-6 mb-4">
              The Mold Growth Timeline in a Chatham County Home
            </h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Hour 1 to 24</strong> — Mold spores already present in the air (which is everywhere, including your home right now) begin landing on wet surfaces and finding conditions to germinate.</li>
              <li><strong>Hour 24 to 48</strong> — Visible mold colonies can begin forming on drywall, wood framing, insulation, and flooring in Savannah's humidity.</li>
              <li><strong>Day 3 to 7</strong> — Mold spreads rapidly into wall cavities, under flooring, and through HVAC systems if present.</li>
              <li><strong>Day 7 to 14</strong> — At this point mold remediation is significantly more expensive and invasive. Drywall often has to be cut out and replaced rather than dried and treated.</li>
              <li><strong>Beyond two weeks</strong> — Structural wood can be compromised. In severe cases, mold exposure becomes a health concern for occupants, particularly for children, elderly residents, and anyone with respiratory conditions.</li>
            </ul>

            <h2 className="text-2xl font-extrabold font-display text-primary pt-6 mb-4">
              Why Savannah Homes Are Especially Vulnerable
            </h2>
            <p>
              Three local factors make Savannah homes more mold-prone than most:
            </p>
            <p>
              First, the age of housing stock. The Savannah metropolitan area has a significant percentage of homes built before 1980, many of which lack modern moisture barriers in walls and crawl spaces. Older construction absorbs water more readily and releases it more slowly.
            </p>
            <p>
              Second, crawl spaces. A large percentage of Chatham County homes — particularly in older neighborhoods like Midtown, Baldwin Park, and the Streetcar neighborhoods — have crawl space foundations rather than slabs. When flooding occurs, water pools in crawl spaces and creates ideal mold conditions that can go undetected for weeks.
            </p>
            <p>
              Third, the HVAC factor. Savannah homes run air conditioning almost year-round. When mold establishes itself near an air handler or in ductwork, it can be distributed throughout the entire home within days. To prevent this, proactive <span onClick={() => onNavigateHome('services')} className="text-secondary font-bold underline cursor-pointer hover:opacity-80">water extraction</span> is crucial right at the outset.
            </p>

            <h2 className="text-2xl font-extrabold font-display text-primary pt-6 mb-4">
              What Mold Remediation Actually Costs in Savannah
            </h2>
            <p>
              Mold remediation costs vary significantly based on how early it's caught:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Caught within 24 to 48 hours</strong> — Treatment and drying typically runs $500 to $1,500 for a contained area.</li>
              <li><strong>Caught at 3 to 7 days</strong> — Remediation including possible drywall removal runs $2,000 to $6,000.</li>
              <li><strong>Caught after two weeks or longer</strong> — Full remediation with structural repairs can run $10,000 to $30,000 or more depending on how far the mold has spread.</li>
            </ul>
            <p>
              The math is simple: calling a restoration specialist immediately after water damage almost always costs a fraction of what waiting costs.
            </p>

            {/* MID-ARTICLE CTA BOX */}
            <div className="my-10 bg-gradient-to-br from-primary to-slate-900 text-white p-8 rounded-2xl border border-blue-900/40 relative shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
              <h4 className="text-xl font-bold font-display mb-3">Noticed a musty smell or visible mold after water damage in your Savannah home?</h4>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                A local specialist can assess the situation for free using specialized moisture detection instruments.
              </p>
              <button 
                onClick={() => onNavigateHome('contact')}
                className="bg-secondary text-white hover:bg-secondary-container px-6 py-3.5 rounded-xl font-bold text-xs uppercase flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
              >
                <span>Get a Free Assessment</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <h2 className="text-2xl font-extrabold font-display text-primary pt-6 mb-4">
              How Professionals Stop Mold After Water Damage in Savannah
            </h2>
            <p>
              The professional approach to stopping mold in a Chatham County home follows a specific process:
            </p>
            <p>
              First, industrial extraction equipment removes any standing water immediately. Every hour of standing water accelerates mold risk exponentially in Savannah's humidity.
            </p>
            <p>
              Second, high-volume commercial dehumidifiers and axial air movers are placed to bring structural moisture levels down to pre-loss standards. In Savannah's climate, this process typically takes 3 to 5 days of continuous equipment operation.
            </p>
            <p>
              Third, affected materials are treated with antimicrobial agents to kill existing spores and prevent regrowth.
            </p>
            <p>
              Fourth, moisture readings are taken throughout the drying process using professional moisture meters to verify that walls, flooring, and structural elements have returned to safe levels before equipment is removed.
            </p>
            <p>
              This process — done correctly and started quickly — is what separates a $1,000 water damage event from a $15,000 mold remediation project.
            </p>

            <h2 className="text-2xl font-extrabold font-display text-primary pt-6 mb-4">
              What Savannah Homeowners Often Get Wrong About Mold
            </h2>
            <p>
              The most common mistake is the box fan approach. Running household fans over a water-damaged area circulates warm, humid Savannah air across wet surfaces — which can actually accelerate mold growth rather than prevent it. Professional drying uses dehumidification first, air movement second.
            </p>
            <p>
              The second most common mistake is assuming that if it looks dry on the surface, it is dry. Drywall, wood framing, and subfloor materials hold moisture deep inside long after the surface appears dry to the touch. Without moisture meter readings, you cannot know whether drying is complete. Proactive <span onClick={() => onNavigateHome('services')} className="text-secondary font-bold underline cursor-pointer hover:opacity-80">mold prevention</span> requires deep drying.
            </p>

            <p className="pt-6 font-semibold">
              Mold after water damage in Savannah is not a maybe — it's a when, and the when is faster than most homeowners expect. The only variable you control is how quickly you respond. If your Chatham County home has experienced any water intrusion — pipe burst, roof leak, appliance failure, storm flooding — the time to act is right now, not tomorrow.
            </p>
          </div>

          {/* FINAL CTA BUTTON */}
          <div className="mt-14 border-t border-gray-150 pt-10 text-center">
            <h4 className="text-lg font-bold font-display text-primary mb-4">
              Connect with a local Savannah restoration specialist for a free mold and water damage assessment.
            </h4>
            <button
              onClick={() => onNavigateHome('contact')}
              className="inline-flex bg-secondary hover:bg-secondary-container text-white px-8 py-4 rounded-xl font-bold text-xs uppercase items-center gap-2 shadow-lg transition-all active:scale-95 cursor-pointer mx-auto"
            >
              <span>Get a Free Assessment →</span>
            </button>
          </div>

        </div>
      </article>
    </div>
  );
}
