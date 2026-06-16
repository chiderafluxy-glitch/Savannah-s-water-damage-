import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const [reviews, setReviews] = useState<Testimonial[]>([]);

  const defaultReviews: Testimonial[] = [
    {
      id: 'r1',
      name: 'Marcus T.',
      location: 'Savannah, GA',
      text: '"Called at 2am after a pipe burst. They were at my house within the hour. Incredible service."',
      rating: 5
    },
    {
      id: 'r2',
      name: 'Diane R.',
      location: 'Pooler, GA',
      text: '"Handled everything with my insurance company directly. Made a nightmare situation so much easier."',
      rating: 5
    },
    {
      id: 'r3',
      name: 'James K.',
      location: 'Savannah, GA',
      text: '"Professional, fast, and thorough. My basement was completely dried out within 48 hours."',
      rating: 5
    }
  ];

  useEffect(() => {
    const stored = localStorage.getItem('savannah_reviews');
    if (stored) {
      try {
        setReviews(JSON.parse(stored));
      } catch (e) {
        setReviews(defaultReviews);
      }
    } else {
      setReviews(defaultReviews);
    }
  }, []);

  return (
    <section className="py-20 bg-[#f8f9fb]" id="reviews">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest block mb-1">Satisfied Homeowners</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-display">
              What Savannah Is Saying
            </h2>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div 
              key={rev.id} 
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-outline-variant flex flex-col justify-between"
            >
              <div>
                <div className="flex text-yellow-500 mb-4 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      fill={rev.rating > i ? '#eab308' : 'none'} 
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <p className="italic text-slate-800 text-sm md:text-base font-body leading-relaxed mb-6">
                  {rev.text}
                </p>
              </div>
              <div>
                <p className="font-extrabold font-display text-primary text-sm">{rev.name}</p>
                <p className="text-xs text-slate-500 font-body">{rev.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
