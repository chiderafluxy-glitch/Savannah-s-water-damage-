import { useState, FormEvent } from 'react';
import { Send, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';

export default function QuickContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [whatHappened, setWhatHappened] = useState('');
  const [bestTimeToCall, setBestTimeToCall] = useState('Right Now');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !whatHappened) {
      alert('Please fill out your contact details and describe what happened.');
      return;
    }
    
    setSubmitted(true);
    
    // Store in localStorage trace
    const submissions = JSON.parse(localStorage.getItem('savannah_contacts') || '[]');
    submissions.push({ 
      name, 
      phone, 
      whatHappened, 
      bestTimeToCall, 
      date: new Date().toISOString() 
    });
    localStorage.setItem('savannah_contacts', JSON.stringify(submissions));

    // Reset
    setName('');
    setPhone('');
    setWhatHappened('');
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form instructions on LHS (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest block mb-1">Expert Assistance</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-display leading-tight">
              Restore Your Property Fast
            </h2>
            <p className="text-sm text-on-surface-variant font-body leading-relaxed">
              Do you have property flooding, plumbing leaks, structural dampness, or suspicious mold? Describe your situation and we will put you in contact with a trusted local contractor immediately.
            </p>

            <div className="bg-[#f8f9fb] border border-outline-variant p-5 rounded-xl space-y-4">
              <h4 className="font-extrabold text-primary text-xs uppercase tracking-wider">Accepted Insurance Networks</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Matched local experts work directly with all major insurance providers for streamlined claims processing.
              </p>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-semibold text-primary">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
                  <span>State Farm</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
                  <span>Allstate Claims</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
                  <span>Progressive</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
                  <span>Nationwide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form container on RHS (7 columns) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-white to-slate-50 border border-slate-200 p-8 md:p-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
            
            {submitted ? (
              <div className="text-center py-12 px-4 space-y-6 animate-fade-in">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-emerald-100 shadow-md">
                  <CheckCircle size={38} />
                </div>
                <div>
                  <span className="inline-block bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2">Request Transmitted</span>
                  <h3 className="text-2xl font-extrabold font-display text-primary">Connection Active</h3>
                </div>
                <p className="text-xs md:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Thank you. Your details have been securely logged. A local Savannah specialist will reach out as soon as possible to coordinate your free assessment.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                  <a
                    href="#home"
                    onClick={() => {
                      setSubmitted(false);
                    }}
                    className="bg-primary hover:bg-primary-container text-white px-6 py-3 rounded-lg font-bold text-xs uppercase transition-all shadow-md text-center cursor-pointer"
                  >
                    Return to Home page
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-bold text-xs uppercase transition-all cursor-pointer"
                  >
                    Submit New Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-extrabold font-display text-primary text-2xl tracking-tight">
                    Get a Free Damage Assessment
                  </h3>
                  <p className="text-xs text-on-surface-variant font-semibold mt-1.5 text-gray-500 leading-relaxed">
                    Fill out the form below and a local Savannah specialist will reach out as soon as possible.
                  </p>
                  <div className="h-0.5 bg-gray-150 w-full mt-4" />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-extrabold text-primary uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Robert Jameson"
                      className="w-full text-xs p-4 rounded-xl bg-white border border-gray-300 shadow-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all hover:border-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-extrabold text-primary uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. (912) 000-0000"
                      className="w-full text-xs p-4 rounded-xl bg-white border border-gray-300 shadow-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all hover:border-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-extrabold text-primary uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      WHAT HAPPENED?
                    </label>
                    <input
                      type="text"
                      required
                      value={whatHappened}
                      onChange={(e) => setWhatHappened(e.target.value)}
                      placeholder="e.g. Water damage/flooding needing cleanup"
                      className="w-full text-xs p-4 rounded-xl bg-white border border-gray-300 shadow-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all hover:border-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-extrabold text-primary uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      BEST TIME TO CALL?
                    </label>
                    <select
                      value={bestTimeToCall}
                      onChange={(e) => setBestTimeToCall(e.target.value)}
                      className="w-full text-xs p-4 rounded-xl bg-white border border-gray-300 shadow-sm font-semibold text-slate-750 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all cursor-pointer"
                    >
                      <option value="Right Now">Right Now</option>
                      <option value="Within the Hour">Within the Hour</option>
                      <option value="Today">Today</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary-container text-white font-bold text-xs uppercase p-4 rounded-xl shadow-lg hover:shadow-xl active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Get a Free Quote</span>
                    <ArrowRight size={14} />
                  </button>
                  <p className="text-[10px] text-center text-gray-500 mt-2 font-medium">
                    A local certified technician will reach out shortly. Free assessment, no obligation.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
