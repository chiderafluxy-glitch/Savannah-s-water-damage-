import { Clock, ShieldCheck, Award, MapPin } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-surface-container overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Images visual cluster on LHS */}
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4 pb-12 lg:pb-0">
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img 
                  className="w-full aspect-square object-cover transform hover:scale-[1.03] transition-transform duration-500" 
                  alt="Professional restoration technicians using high-powered blue air movers and dehumidifiers to dry out a room with water damage in a residential Savannah home" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk88kWgVWUfu1ifbq-OmJkxPwkiyMX_jFStKPHbvzoUQdt7BAijGRJMr1qC3pUJcXAtBZqwo3Wmg7yMa5QTGPM8vtHUqCEtqBzC7irMDnmb4bVIGk7-anazoUhbo_xy_LBny1IjTx4qOkzhMiDNuge5fm6q8_8evOGU6GsZESOu8BsI_wpp4FEFkiB0ZXpxQ-1MX8WG0O1tnauCP5YqC6CFuImzUH1GHRj_HcLabg9jwyNhQwWGgS3fpvkfj8QqzNHpqHb3eUayT8"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-lg translate-y-8">
                <img 
                  className="w-full aspect-square object-cover transform hover:scale-[1.03] transition-transform duration-500" 
                  alt="Certified restoration specialists in full white protective hazmat suits and respirators carefully removing water-damaged carpet from a home in Savannah, Georgia" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtG6aFG1lw1OAx8PRb92eAVOrzHAqfYOlO2DzIYf9png2fUuuTRAe1IeTaW1fXGVlVvxbLDTB-CodZ71Nb2bfJ0dHe0ARQylFaOibHhM5ZwOo-WpfIGkVo1IrW4blZ7OwxSANBs5EoawvKyxRhTP9vEuEqsOI503P7EZlhxdkIY-GiDFxO4ZLfeSsasUJUHtLkQg4MMX9Fxuy4EockzcI1B0_tw_2bWXSN_19bQoih4y6Lc4VFQTrZpg5MGC70qfBKinvxcaAw6Ls"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* floating dark banner */}
            <div className="absolute bottom-[-16px] -right-[-16px] bg-primary text-white p-8 rounded-xl shadow-2xl hidden md:block z-10 border border-white/5">
              <p className="text-[48px] font-extrabold font-display leading-none text-red-500 select-none">24/7</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#a7c8ff] mt-1 font-body">Emergency Dispatch</p>
            </div>
          </div>

          {/* Core copy block on RHS */}
          <div className="w-full lg:w-1/2">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest block mb-1">The Local Difference</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-display mb-8">Why Savannah Trusts Us</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="mt-0.5 w-10 h-10 bg-[#da3433]/10 text-secondary rounded-lg flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-extrabold font-display text-primary text-sm md:text-base">60 Minute Response</h4>
                  <p className="text-xs md:text-sm text-on-surface-variant font-body leading-relaxed mt-1">We understand every minute counts in rapid water damage escalation.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="mt-0.5 w-10 h-10 bg-[#da3433]/10 text-secondary rounded-lg flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-extrabold font-display text-primary text-sm md:text-base">Insurance Approved</h4>
                  <p className="text-xs md:text-sm text-on-surface-variant font-body leading-relaxed mt-1">Direct digital billing paperwork mapped to major homeowners insurance policies.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="mt-0.5 w-10 h-10 bg-[#da3433]/10 text-secondary rounded-lg flex items-center justify-center shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-extrabold font-display text-primary text-sm md:text-base">Certified Technicians</h4>
                  <p className="text-xs md:text-sm text-on-surface-variant font-body leading-relaxed mt-1">IICRC trained &amp; certified expert technicians handling complex mold diagnostics.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4">
                <div className="mt-0.5 w-10 h-10 bg-[#da3433]/10 text-secondary rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-extrabold font-display text-primary text-sm md:text-base">Locally Based</h4>
                  <p className="text-xs md:text-sm text-on-surface-variant font-body leading-relaxed mt-1">Proudly local contractor serving homeowners inside full Chatham County boundaries.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
