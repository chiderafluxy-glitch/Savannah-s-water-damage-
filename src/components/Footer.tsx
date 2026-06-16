import React from 'react';
import { MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string, hash?: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
      if (hash) {
        setTimeout(() => {
          const elem = document.getElementById(hash);
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else {
      window.location.href = hash ? `${path}#${hash}` : path;
    }
  };

  return (
    <footer className="bg-[#2d3133] text-gray-400 pt-16 pb-24 md:pb-16" id="footer">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          
          <div>
            <div className="flex items-center mb-6">
              <h3 className="text-white font-extrabold text-base uppercase tracking-wider font-display">
                Savannah Water Damage Restoration
              </h3>
            </div>
            <p className="text-xs text-gray-400 font-body leading-relaxed">
              Professional matched restoration services for water damage, flash floods, leaky plumbing, and structural mold issues. We connect Savannah property owners with trusted local contractors to clean up and rebuild swiftly.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6 border-b border-gray-700 pb-2">
              Service Boundary
            </h4>
            <div className="space-y-4 text-xs font-body">
              <p className="flex gap-2">
                <MapPin size={16} className="text-secondary shrink-0 mt-0.5" />
                <span>Savannah, GA &amp; all Chatham County municipal scopes</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6 border-b border-gray-700 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-3 text-xs font-body">
              <li>
                <a onClick={(e) => handleLinkClick(e, '/')} className="hover:text-white transition-colors cursor-pointer font-semibold">Home Base</a>
              </li>
              <li>
                <a onClick={(e) => handleLinkClick(e, '/', 'services')} className="hover:text-white transition-colors font-semibold cursor-pointer">Mitigation Services</a>
              </li>
              <li>
                <a onClick={(e) => handleLinkClick(e, '/', 'reviews')} className="hover:text-white transition-colors font-semibold cursor-pointer">Verified Reviews</a>
              </li>
              <li>
                <a onClick={(e) => handleLinkClick(e, '/', 'contact')} className="hover:text-white transition-colors font-semibold cursor-pointer">Contact &amp; Assistance</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6 border-b border-gray-700 pb-2">
              Savannah Resource Guides
            </h4>
            <ul className="space-y-3 text-xs font-body">
              <li>
                <a 
                  onClick={(e) => handleLinkClick(e, '/flooding-savannah-ga-water-damage-guide')} 
                  className="hover:text-white transition-colors font-semibold cursor-pointer"
                >
                  Chatham County Flood Guide
                </a>
              </li>
              <li>
                <a 
                  onClick={(e) => handleLinkClick(e, '/mold-after-water-damage-savannah-ga')} 
                  className="hover:text-white transition-colors font-semibold cursor-pointer"
                >
                  Mold Timeline &amp; Cost Guide
                </a>
              </li>
              <li>
                <a 
                  onClick={(e) => handleLinkClick(e, '/water-damage-insurance-claim-savannah-ga')} 
                  className="hover:text-white transition-colors font-semibold cursor-pointer"
                >
                  Insurance Claims Advisor
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>Copyright © {currentYear} Savannah Water Damage Restoration. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
