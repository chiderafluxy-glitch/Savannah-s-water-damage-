import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "How fast can you respond to water damage in Savannah, GA?",
      answer: "Local certified restoration specialists serving Chatham County are available 24 hours a day, 7 days a week. Response times to Savannah, Pooler, Garden City, Thunderbolt, Tybee Island, and surrounding areas are typically within 60 minutes of your call."
    },
    {
      id: 2,
      question: "Does homeowner's insurance cover water damage restoration in Savannah?",
      answer: "In most cases, yes — if the water damage was sudden and accidental, such as a burst pipe, appliance failure, or roof leak during a storm. Standard homeowner's insurance does not cover external flooding. For flood damage from storms or rising water, a separate NFIP flood insurance policy is required. Our specialists work directly with all major carriers including State Farm, Allstate, Nationwide, and Progressive."
    },
    {
      id: 3,
      question: "How long does water damage restoration take in Savannah?",
      answer: "Most water damage restoration projects in Chatham County take between 3 and 7 days depending on the severity of the damage. The drying phase alone typically requires 3 to 5 days of continuous dehumidification to bring moisture levels back to safe standards."
    },
    {
      id: 4,
      question: "Can mold grow after water damage in Savannah?",
      answer: "Yes — and faster than most homeowners expect. In Savannah's coastal humidity, mold can begin forming within 18 to 24 hours after a water event. This is why immediate response is critical. The longer water sits, the more likely mold becomes and the more expensive remediation gets."
    },
    {
      id: 5,
      question: "What areas in Chatham County do you serve?",
      answer: "We connect homeowners with local restoration specialists across all of Chatham County including Savannah, Pooler, Garden City, Thunderbolt, Tybee Island, Bloomingdale, and Port Wentworth."
    },
    {
      id: 6,
      question: "What should I do immediately after water damage in my Savannah home?",
      answer: "First, turn off your electricity at the breaker if there is any standing water. Second, document all damage with photos and video before touching anything. Third, call your insurance company to open your claim. Fourth, contact a local water damage restoration specialist immediately — do not wait to see if it dries on its own, especially in Savannah's humidity."
    },
    {
      id: 7,
      question: "How much does water damage restoration cost in Savannah, GA?",
      answer: "Costs vary depending on the size of the affected area and how quickly restoration begins. Water damage caught and treated within the first 24 hours is significantly less expensive than damage that has been sitting for days. A free assessment from a local specialist will give you an accurate estimate for your specific situation."
    }
  ];

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-white border-t border-b border-gray-100" id="faqs">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/5 border border-secondary/10 rounded-full text-xs font-bold text-secondary uppercase tracking-wider mb-4">
            <HelpCircle size={14} className="text-secondary" />
            <span>Savannah Homeowner Guide</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-display mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-body">
            Common questions from Savannah and Chatham County homeowners about water damage restoration.
          </p>
        </div>

        {/* Collapsible Accordion Stream */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className={`border border-solid rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'border-secondary/30 bg-secondary/[0.01] shadow-md' 
                    : 'border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                {/* Accordion Trigger Header Button */}
                <button
                  type="button"
                  onClick={() => handleToggle(faq.id)}
                  className="w-full text-left p-5 md:p-6 flex justify-between items-center gap-4 transition-colors font-display select-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-extrabold text-slate-900 text-sm md:text-base leading-snug">
                    {faq.question}
                  </span>
                  <div className={`shrink-0 text-slate-400 p-1 rounded-full bg-slate-100/80 transition-transform duration-350 ${
                    isOpen ? 'rotate-180 text-secondary bg-secondary/10' : ''
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {/* Collapsible Content Container */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 md:px-6 md:pb-6 text-slate-600 text-xs md:text-sm leading-relaxed font-body border-t border-dashed border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
