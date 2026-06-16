import { useEffect, useState } from 'react';

export default function UrgencyStrip() {
  const [minutes, setMinutes] = useState(15);

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutes(m => {
        if (m <= 10) return 15;
        return m - 1;
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const text = `WATER DAMAGE GETS WORSE EVERY HOUR. CHATHAM COUNTY TEAMS READY ACROSS SAVANNAH. — SECURE A HOME RESTORATION SPECIALIST CALL BACK WITHIN ${minutes} MINUTES! — REQUEST A FREE DAMAGE ASSESSMENT ON OUR WEBSITE NOW. — `;

  return (
    <div className="bg-secondary text-white py-3 border-b border-secondary-container z-20 overflow-hidden relative select-none">
      <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />
      
      <div className="animate-marquee flex gap-8 whitespace-nowrap text-xs md:text-sm font-semibold tracking-wide uppercase">
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
