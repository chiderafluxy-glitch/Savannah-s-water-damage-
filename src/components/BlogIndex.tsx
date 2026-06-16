import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

// Import local generated assets
// @ts-ignore
import floodedStreet from '../assets/images/flooded_street_1781637440729.jpg';
// @ts-ignore
import floodedStairs from '../assets/images/flooded_stairs_1781637424567.jpg';
// @ts-ignore
import leakClaim from '../assets/images/leak_claim_1781637454354.jpg';

interface BlogIndexProps {
  onNavigate: (path: string) => void;
}

export default function BlogIndex({ onNavigate }: BlogIndexProps) {
  const posts = [
    {
      title: "Flooding in Savannah, GA — A Chatham County Homeowner's Honest Guide to Water Damage",
      description: "Why 77% of Savannah buildings are at flood risk and what to do the moment water gets in.",
      url: "/flooding-savannah-ga-water-damage-guide",
      image: floodedStreet,
      category: "Flood Guide",
      readTime: "8 min read",
      date: "June 16, 2026"
    },
    {
      title: "Mold After Water Damage in Savannah, GA — How Fast It Grows and What To Do",
      description: "Savannah's humidity makes mold grow faster than almost anywhere — here's the honest timeline.",
      url: "/mold-after-water-damage-savannah-ga",
      image: floodedStairs,
      category: "Mold & Health",
      readTime: "6 min read",
      date: "June 16, 2026"
    },
    {
      title: "How to File a Water Damage Insurance Claim in Savannah, GA",
      description: "Step by step guide to filing a claim and avoiding the mistakes that get Chatham County homeowners denied.",
      url: "/water-damage-insurance-claim-savannah-ga",
      image: leakClaim,
      category: "Insurance Advisory",
      readTime: "7 min read",
      date: "June 16, 2026"
    }
  ];

  return (
    <div className="bg-[#f8f9fb] min-h-screen">
      {/* Blog Hero Section */}
      <section className="bg-[#001e40] text-white py-16 md:py-24 relative overflow-hidden border-b border-blue-900/40">
        <div className="absolute inset-0 bg-gradient-to-r from-[#001e40] to-[#002e62]/90 z-0" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-xs font-bold uppercase tracking-wider text-[#34a0fe] rounded-full mb-4">
            <span>Homeowner Resources</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold font-display leading-tight mb-4 max-w-4xl">
            Water Damage Tips &amp; Resources for Savannah Homeowners
          </h1>
          <p className="text-gray-300 font-body text-base md:text-lg max-w-2xl leading-relaxed">
            Local guides, flood season updates, and expert advice for Chatham County property owners.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-150 transition-all duration-350 flex flex-col justify-between group"
              >
                <div>
                  {/* Stock Photo Container */}
                  <div 
                    className="h-52 w-full overflow-hidden relative cursor-pointer"
                    onClick={() => onNavigate(post.url)}
                  >
                    <img 
                      src={post.image} 
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#001e40]/90 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md backdrop-blur-sm">
                      {post.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-3 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 
                      onClick={() => onNavigate(post.url)}
                      className="text-lg md:text-xl font-extrabold font-display text-primary leading-snug hover:text-secondary group-hover:text-secondary cursor-pointer transition-colors mb-3"
                    >
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {post.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
                  <button
                    onClick={() => onNavigate(post.url)}
                    className="inline-flex items-center gap-2 text-secondary hover:text-[#002e62] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer group-hover:translate-x-1 duration-250"
                  >
                    <span>Read More</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
