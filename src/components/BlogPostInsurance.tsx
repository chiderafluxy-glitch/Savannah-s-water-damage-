import { ArrowRight, BookOpen, Clock, Calendar, ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface BlogPostProps {
  onNavigateHome: (sectionId?: string) => void;
}

export default function BlogPostInsurance({ onNavigateHome }: BlogPostProps) {
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
            <span>INSURANCE & CLAIMS ADVISORY</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold font-display leading-tight mb-6">
            How to File a Water Damage Insurance Claim in Savannah, GA — A Step-by-Step Guide for Chatham County Homeowners
          </h1>
          <div className="flex flex-wrap gap-6 text-xs text-gray-300 font-medium">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              <span>June 16, 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>7 min read</span>
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
              Water damage is stressful enough on its own. Navigating an insurance claim on top of it — while your floors are wet and the clock is ticking on mold growth — is where a lot of Savannah homeowners make expensive mistakes. This guide walks you through exactly what to do, step by step, from the moment water damage happens to the moment your claim is paid.
            </p>

            <h2 className="text-2xl font-extrabold font-display text-primary pt-6 mb-4">
              First — What Does Homeowner's Insurance Actually Cover in Savannah?
            </h2>
            <p>
              This distinction matters more than anything else in this guide.
            </p>
            <p>
              Standard homeowner's insurance in Georgia covers sudden and accidental water damage from inside your home. This includes burst pipes, a washing machine hose that fails, a water heater that leaks, an AC unit that overflows, or a roof that leaks during a storm.
            </p>
            <p>
              Standard homeowner's insurance does NOT cover flooding from outside your home. If the Ogeechee River backs up, if Savannah's storm drains overflow into your yard, or if a hurricane pushes water into your home from the ground up — that requires a separate flood insurance policy through FEMA's National Flood Insurance Program.
            </p>
            <p>
              This distinction — internal water damage versus external flooding — is where most Savannah homeowners get surprised. If your neighborhood floods during a storm and water enters your home through the ground or through exterior walls, your regular policy will not cover it regardless of the cause. To minimize damage quickly in either case, professional <span onClick={() => onNavigateHome('services')} className="text-secondary font-bold underline cursor-pointer hover:opacity-80">water extraction</span> and early <span onClick={() => onNavigateHome('services')} className="text-secondary font-bold underline cursor-pointer hover:opacity-80">mold prevention</span> should be started immediately.
            </p>

            <h2 className="text-2xl font-extrabold font-display text-primary pt-6 mb-4">
              Step One — Stop the Source and Document Everything
            </h2>
            <p>
              Before calling anyone, if it is safe to do so, stop the source of water. Turn off the main water supply if a pipe has burst. If flooding is from outside and there is any risk that electricity has been compromised, do not enter standing water — turn off your breaker first.
            </p>
            <p>
              Then document everything before touching or moving anything. This is critical. Take video of every affected room, every wet surface, every damaged item. Walk through slowly. Date-stamp your footage. Take wide shots and close-up shots. This documentation is your evidence for your claim.
            </p>

            <h2 className="text-2xl font-extrabold font-display text-primary pt-6 mb-4">
              Step Two — Call Your Insurance Company Immediately
            </h2>
            <p>
              Call your insurance company the same day the damage occurs. Do not wait. Most policies have reporting requirements and delayed reporting can complicate or reduce your claim.
            </p>
            <p>
              When you call, have ready: your policy number, the date the damage occurred, a brief description of what happened, and your documentation photos and video ready to upload.
            </p>
            <p>
              Your insurer will assign an adjuster to your claim. That adjuster works for the insurance company — not for you. Their job is to assess the damage and determine what the policy covers. Yours is to make sure nothing is missed.
            </p>

            <h2 className="text-2xl font-extrabold font-display text-primary pt-6 mb-4">
              Step Three — Do Not Throw Anything Away
            </h2>
            <p>
              Do not throw away damaged materials, furniture, flooring, or belongings before your adjuster has assessed them. Even items that seem obviously destroyed need to be documented and inspected as part of the claim. Disposing of materials before inspection can reduce your claim payout significantly.
            </p>
            <p>
              If materials are creating a health hazard — such as sewage-contaminated water — document them thoroughly with photos and video before any removal, and note the reason for emergency removal in writing to your insurer.
            </p>

            {/* MID-ARTICLE CTA BOX */}
            <div className="my-10 bg-gradient-to-br from-primary to-slate-900 text-white p-8 rounded-2xl border border-blue-900/40 relative shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
              <h4 className="text-xl font-bold font-display mb-3">Working through water damage and an insurance claim at the same time?</h4>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                A local Savannah restoration specialist can help document damage and work directly with your insurance company.
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
              Step Four — Bring In a Restoration Specialist Before Permanent Repairs
            </h2>
            <p>
              Here is something many Savannah homeowners do not know: a professional water damage restoration company can work directly with your insurance adjuster to document the full scope of damage. They use moisture meters and professional equipment to identify damage inside walls and under floors that an adjuster walking through with a clipboard might miss.
            </p>
            <p>
              Getting a restoration assessment before permanent repairs are made — and before your adjuster closes the claim — is one of the most important things you can do to protect the value of your claim.
            </p>
            <p>
              Major carriers including State Farm, Allstate, Nationwide, and Progressive that operate in the Savannah area work with certified restoration contractors directly. A qualified local specialist handles the documentation and communicates with your insurer, which takes significant pressure off you during an already stressful situation.
            </p>

            <h2 className="text-2xl font-extrabold font-display text-primary pt-6 mb-4">
              The Most Common Reasons Water Damage Claims Get Denied in Georgia
            </h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Delayed reporting</strong> — most policies require prompt notification. Waiting several days can be used to deny or reduce a claim.</li>
              <li><strong>Lack of documentation</strong> — if you cannot show the before state and the damage state with photos and video, adjusters have more room to dispute the scope.</li>
              <li><strong>Pre-existing damage</strong> — if your roof had existing damage before the storm, your insurer may argue the water intrusion was due to deferred maintenance rather than a sudden event.</li>
              <li><strong>Gradual damage</strong> — a slow pipe leak that went unreported for months is typically not covered. Insurance covers sudden and accidental damage, not damage from neglect.</li>
              <li><strong>Flooding without flood insurance</strong> — this is the most common denial reason in coastal Georgia. External flooding requires NFIP coverage. If you are in a flood zone in Chatham County and do not have a separate flood insurance policy, external flood damage will not be covered.</li>
            </ul>

            <h2 className="text-2xl font-extrabold font-display text-primary pt-6 mb-4">
              A Note on Flood Insurance Discounts in Chatham County
            </h2>
            <p>
              Because Chatham County participates in FEMA's Community Rating System, residents with flood insurance policies receive a 5% discount on their premiums — saving the county's 15,877 flood insurance policy holders a combined $257,400 per year. If you are in a flood-prone area and do not yet have flood insurance, this discount makes it slightly more accessible, and the 30-day waiting period before policies activate means now is always the right time to get coverage.
            </p>

            <p className="pt-6 font-semibold">
              Filing a water damage insurance claim in Savannah does not have to be overwhelming. Document fast, report immediately, do not dispose of anything, and bring in a local restoration specialist before permanent repairs begin. Those four steps protect your claim and protect your home. If you are currently dealing with water damage and need help navigating both the restoration and the insurance process, a local Chatham County specialist can handle both.
            </p>
          </div>

          {/* FINAL CTA BUTTON */}
          <div className="mt-14 border-t border-gray-150 pt-10 text-center">
            <h4 className="text-lg font-bold font-display text-primary mb-4">
              Get a free water damage assessment from a local Savannah specialist — we work directly with all major insurance carriers.
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
