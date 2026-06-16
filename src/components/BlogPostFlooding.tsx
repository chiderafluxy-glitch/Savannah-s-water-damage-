import { ArrowRight, BookOpen, Clock, Calendar, ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface BlogPostProps {
  onNavigateHome: (sectionId?: string) => void;
}

export default function BlogPostFlooding({ onNavigateHome }: BlogPostProps) {
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
            <span>Chatham County Flood Guide</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold font-display leading-tight mb-6">
            Flooding in Savannah, GA — A Chatham County Homeowner's Honest Guide to Water Damage
          </h1>
          <div className="flex flex-wrap gap-6 text-xs text-gray-300 font-medium">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              <span>June 16, 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>8 min read</span>
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
              If you've lived in Savannah long enough, you already know the drill. The sky turns dark, the rain comes sideways off the Savannah River, and within an hour Wheaton Street looks like a canal. Water damage in Savannah isn't a rare event — it's practically a season of its own.
            </p>
            <p>
              This guide is written specifically for Chatham County homeowners. Not generic flood advice — actual information about what happens here, in these neighborhoods, in this climate.
            </p>

            <h2 className="text-2xl font-extrabold font-display text-primary pt-6 mb-4">
              Why Savannah Is One of Georgia's Most Flood-Prone Cities
            </h2>
            <p>
              Savannah sits at an average elevation of just 42 feet above sea level, and much of the historic district and surrounding neighborhoods like Ardsley Park, Midtown, and Cuyler-Brownsville sit even lower. Add the Savannah River to the north, the Atlantic coast 18 miles to the east, and an annual rainfall average of 49 inches — well above the US average of 38 inches — and you're looking at a city built on a flood plain.
            </p>
            <p>
              Here's a statistic most Savannah homeowners don't know: according to ClimateCheck data, 77% of buildings in Savannah, GA are at risk of flooding. Of 124 census tracts in the city, 90 of them have more than half their buildings facing significant flood risk from storm surge, tidal flooding, surface flooding, and riverine flooding. The average Savannah building at risk carries a 63% chance of experiencing a flood roughly 4.9 feet deep over a 30-year period.
            </p>
            <p>
              A piece of local history worth knowing: since 1948, Chatham County has flooded over 14 times due to storms dropping 4 inches of rain or more in a single event. The county has on record over 1,400 dwellings that flooded during those events. On July 10, 1948 alone, over 5 inches fell within a single 24-hour period — a record that shaped how Chatham County thinks about flood infrastructure to this day.
            </p>

            <h2 className="text-2xl font-extrabold font-display text-primary pt-6 mb-4">
              The Savannah and Chatham County Neighborhoods That Flood Most
            </h2>
            <p>
              Not every part of Savannah floods equally. The rivers and canals that define Chatham County's geography — the Savannah, Wilmington, Vernon, Forest, Grove, and Ogeechee Rivers, plus the Springfield, Casey, Placentia, Pipemakers, and Hardin Canals — each create their own flood risk zones around them.
            </p>
            <p>
              The highest-risk areas for water damage calls include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Ardsley Park and Gordonston</strong> — low-lying streets that flood during sustained heavy rain events</li>
              <li><strong>Thunderbolt</strong> — subject to tidal flooding from the Wilmington River</li>
              <li><strong>Garden City</strong> — near the port, frequent stormwater backup</li>
              <li><strong>Tybee Island</strong> — highest flood risk in Chatham County, with accelerating sea level rise</li>
              <li><strong>Pooler</strong> — rapid development has outpaced local drainage infrastructure</li>
              <li><strong>Port Wentworth</strong> — sits near the Savannah River with high Zone AE FEMA designation</li>
              <li><strong>Isle of Hope and Skidaway Island</strong> — increased exposure to coastal flooding</li>
            </ul>
            <p>
              Worth noting: Chatham County has barrier islands — Little Tybee, Ossabaw, Cabbage, and Wassaw — that serve as natural storm buffers. But as climate conditions shift, those buffers are absorbing more energy than they were designed for.
            </p>

            <h2 className="text-2xl font-extrabold font-display text-primary pt-6 mb-4">
              What Happens to Your Savannah Home Hour by Hour After Water Gets In
            </h2>
            <p>
              This is what most homeowners don't find out until it's too late:
            </p>
            <ul className="list-decimal pl-6 space-y-2 mt-2">
              <li><strong>0 to 2 hours</strong> — Water saturates drywall, flooring, and insulation. Wood begins absorbing moisture immediately.</li>
              <li><strong>2 to 8 hours</strong> — Drywall swells and warps. Metal surfaces begin to rust. Furniture legs permanently stain floors.</li>
              <li><strong>24 hours</strong> — Mold spores begin to colonize. This is the point of no return for many building materials.</li>
              <li><strong>48 hours</strong> — Structural wood weakens. Subfloor damage becomes likely. In Savannah's summer humidity, mold is often visible by this point.</li>
              <li><strong>One week</strong> — Without professional drying, wall and floor structural integrity is compromised. Remediation costs double or triple compared to what they would have been at the 24-hour mark.</li>
            </ul>
            <p>
              Savannah's coastal humidity makes this timeline faster than most American cities. A water damage situation that gives a Denver homeowner 48 hours of grace gives a Savannah homeowner maybe 18 to 24 hours in July. This makes immediate professional <span onClick={() => onNavigateHome('services')} className="text-secondary font-bold underline cursor-pointer hover:opacity-80">water extraction</span> and proactive <span onClick={() => onNavigateHome('services')} className="text-secondary font-bold underline cursor-pointer hover:opacity-80">mold prevention</span> absolutely essential to preserve structural integrity.
            </p>

            {/* MID-ARTICLE CTA BOX */}
            <div className="my-10 bg-gradient-to-br from-primary to-slate-900 text-white p-8 rounded-2xl border border-blue-900/40 relative shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
              <h4 className="text-xl font-bold font-display mb-3">Dealing with water damage in Savannah right now?</h4>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Don't wait — every hour matters in Chatham County's climate. Connect with a local certified restoration specialist for a free assessment.
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
              Does Homeowner's Insurance Cover Flood Damage in Savannah?
            </h2>
            <p>
              This is the question we hear most often — and the answer surprises people every time.
            </p>
            <p>
              Standard homeowner's insurance does NOT cover flooding from outside your home. If the Savannah River overflows or stormwater backs up into your yard and enters your home, your regular policy won't cover it. You need a separate flood insurance policy through FEMA's National Flood Insurance Program.
            </p>
            <p>
              Important local detail: Chatham County participates in the Community Rating System (CRS), which means 15,877 flood insurance policy holders in the county receive a 5% discount on their premiums — saving residents a combined $257,400 per year, or about $16 per policy on average. That discount exists specifically because of flood risk mitigation programs the county maintains.
            </p>
            <p>
              As of January 1, 2025, the City of Savannah adopted a new rule requiring new and substantially improved structures in the 100-year floodplain to be built at least two feet above Base Flood Elevation — up from one foot previously. This change also affects FHA mortgage eligibility for new construction in flood zones.
            </p>
            <p>
              However — if a pipe bursts inside your home, your roof leaks, or an appliance causes water damage, that IS typically covered under standard homeowner's insurance. Major carriers including State Farm, Allstate, Nationwide, and Progressive cover internal water damage events. Always call your insurance company first and document everything before any cleanup begins.
            </p>

            <h2 className="text-2xl font-extrabold font-display text-primary pt-6 mb-4">
              What To Do The Moment Water Damage Happens in Your Chatham County Home
            </h2>
            <p>
              <strong>Step 1</strong> — Do not enter standing water if electricity may still be on. Turn off your breaker first. Drowning and electrocution are the top two causes of flood-related deaths in Georgia.
            </p>
            <p>
              <strong>Step 2</strong> — Call your insurance company and open your claim immediately. Photograph and video everything before moving or touching anything.
            </p>
            <p>
              <strong>Step 3</strong> — Call a local water damage restoration specialist right away. In Savannah's climate, this is not a situation where waiting 24 hours to see how it dries out makes sense.
            </p>
            <p>
              <strong>Step 4</strong> — Open windows if it is not raining to begin air circulation. Run fans to move air across wet surfaces.
            </p>
            <p>
              <strong>Step 5</strong> — Remove wet rugs, furniture, and belongings from the affected area as quickly as possible to limit secondary damage.
            </p>
            <p className="border-l-4 border-secondary pl-4 italic text-slate-500 my-4 text-sm md:text-base">
              A Pooler homeowner described her experience after a pipe burst in her kitchen: "I thought I could handle it with towels and a box fan. By day two the smell told me I was wrong. By the time the specialist arrived, the subfloor had already started buckling. I should have called immediately."
            </p>
            <p>
              That story is more common than it should be in Chatham County. Speed is the entire game.
            </p>

            <h2 className="text-2xl font-extrabold font-display text-primary pt-6 mb-4">
              Protecting Your Savannah Home Before the Next Storm Season
            </h2>
            <p>
              The Chatham County Department of Engineering recommends elevating electrical panel boxes, heat pumps, washers, dryers, and water heaters to areas less likely to reach flood waters. Anchoring and elevating fuel tanks is also advised. A check valve installed on your basement or crawl space sump pump can prevent sewer backup flooding — one of the most common and most unpleasant water damage scenarios in older Savannah homes.
            </p>
            <p>
              Keeping materials like sandbags, plywood, and plastic sheeting on hand is also recommended by county officials — not just for flood waters but for hurricane force wind damage that often accompanies major storm events in coastal Georgia.
            </p>

            <p className="pt-6 font-semibold">
              Savannah is a city built on and around water. That's part of its history and its character. But it also means that flood risk is not a distant concern for Chatham County homeowners — it's a practical reality that requires real preparation. If your home has been affected by water damage or you want to understand your risk before the next storm season arrives, acting fast and working with someone who knows this area is the most important thing you can do.
            </p>
          </div>

          {/* FINAL CTA BUTTON */}
          <div className="mt-14 border-t border-gray-150 pt-10 text-center">
            <h4 className="text-lg font-bold font-display text-primary mb-4">
              Connect with a local Savannah water damage specialist — free assessment, no obligation.
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
