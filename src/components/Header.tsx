import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onOpenEstimator: () => void;
  onNavigate?: (path: string) => void;
}

export default function Header({ onOpenEstimator, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesDropdownOpen && servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [servicesDropdownOpen]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/');
    } else {
      window.location.href = '/';
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (window.location.pathname !== '/') {
      e.preventDefault();
      if (onNavigate) {
        onNavigate('/');
        setTimeout(() => {
          const elem = document.getElementById(hash);
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        window.location.href = `/${hash === 'home' ? '' : '#' + hash}`;
      }
    }
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const handleServicePageClick = (e: React.MouseEvent<HTMLAnchorElement>, targetPath: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(targetPath);
    } else {
      window.location.href = targetPath;
    }
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <header className="bg-white border-b border-outline-variant shadow-sm sticky top-0 z-50 flex justify-between items-center w-full px-4 md:px-8 h-16">
      <div className="flex items-center gap-3">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-secondary cursor-pointer focus:outline-none"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <a href="/" onClick={handleLogoClick} className="flex items-center">
          <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-extrabold text-primary uppercase tracking-wider font-display">
            SAVANNAH WATER DAMAGE RESTORATION
          </h1>
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 items-center">
        <a onClick={(e) => handleNavClick(e, 'home')} className="text-secondary font-bold text-xs uppercase transition-all hover:opacity-80 cursor-pointer text-nowrap" href="#home">Home</a>
        
        {/* Toggleable & Hover Dropdown for all viewports (Mobile, iPad, Tablet, PC) */}
        <div 
          ref={servicesDropdownRef}
          className="relative"
          onMouseEnter={() => setServicesDropdownOpen(true)}
          onMouseLeave={() => setServicesDropdownOpen(false)}
        >
          <button 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setServicesDropdownOpen(!servicesDropdownOpen);
            }}
            className="text-on-surface-variant text-xs font-bold uppercase hover:text-black transition-colors cursor-pointer flex items-center gap-1 h-16 shrink-0 text-nowrap focus:outline-none"
          >
            Services <ChevronDown size={12} className={`transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <div className={`absolute top-16 left-1/2 -translate-x-1/2 w-80 bg-white border border-slate-150/80 rounded-2xl shadow-xl transition-all duration-200 z-[100] py-3 overflow-hidden ${
            servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
          }`}>
            <div className="px-4 py-2 border-b border-dashed border-slate-100 mb-2">
              <span className="text-[10px] uppercase tracking-widest font-extrabold text-secondary">Our Certified Services</span>
            </div>
            
            <a 
              href="/water-damage-restoration-savannah-ga" 
              onClick={(e) => handleServicePageClick(e, '/water-damage-restoration-savannah-ga')}
              className="flex flex-col px-4 py-2 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <span className="text-xs font-extrabold text-slate-900 font-display">Water Damage Restoration</span>
              <span className="text-[10px] text-slate-500 font-body">Full mitigation &amp; moisture verification</span>
            </a>
            
            <a 
              href="/water-extraction-savannah-ga" 
              onClick={(e) => handleServicePageClick(e, '/water-extraction-savannah-ga')}
              className="flex flex-col px-4 py-2 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <span className="text-xs font-extrabold text-slate-900 font-display">Water Extraction</span>
              <span className="text-[10px] text-slate-500 font-body">Rapid standing water removal &amp; pumps</span>
            </a>
            
            <a 
              href="/mold-remediation-savannah-ga" 
              onClick={(e) => handleServicePageClick(e, '/mold-remediation-savannah-ga')}
              className="flex flex-col px-4 py-2 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <span className="text-xs font-extrabold text-slate-900 font-display">Mold Remediation</span>
              <span className="text-[10px] text-slate-500 font-body">Certified containment &amp; spore cleanup</span>
            </a>
            
            <a 
              href="/flood-damage-restoration-savannah-ga" 
              onClick={(e) => handleServicePageClick(e, '/flood-damage-restoration-savannah-ga')}
              className="flex flex-col px-4 py-2 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <span className="text-xs font-extrabold text-slate-900 font-display">Flood Damage Restoration</span>
              <span className="text-[10px] text-slate-500 font-body">Storm cleanup &amp; bacterial sanitization</span>
            </a>
            
            <a 
              href="/emergency-water-damage-savannah-ga" 
              onClick={(e) => handleServicePageClick(e, '/emergency-water-damage-savannah-ga')}
              className="flex flex-col px-4 py-2 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <span className="text-xs font-extrabold text-slate-900 font-display">Emergency Water Damage</span>
              <span className="text-[10px] text-slate-500 font-body">Immediate 24/7 fast-response dispatch</span>
            </a>
            <div className="h-px bg-slate-100 my-1" />
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className="block text-center text-[10px] uppercase tracking-wider font-extrabold text-secondary hover:underline pt-1"
            >
              View Grid Overview
            </a>
          </div>
        </div>

        <a onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('/blog'); }} className="text-on-surface-variant text-xs font-bold uppercase hover:text-black transition-colors cursor-pointer text-nowrap" href="/blog">Blog</a>
        <a onClick={(e) => handleNavClick(e, 'reviews')} className="text-on-surface-variant text-xs font-bold uppercase hover:text-black transition-colors cursor-pointer text-nowrap" href="#reviews">Reviews</a>
        <a onClick={(e) => handleNavClick(e, 'contact')} className="text-on-surface-variant text-xs font-bold uppercase hover:text-black transition-colors cursor-pointer text-nowrap" href="#contact">Contact</a>
      </nav>

      {/* Primary CTA Trigger */}
      <div className="flex items-center gap-2">
        <a 
          href="tel:8438004261"
          className="bg-secondary text-white px-5 py-2.5 md:px-6 md:py-2.5 rounded-full font-bold text-xs uppercase hover:opacity-90 active:scale-95 transition-all shadow-sm cursor-pointer whitespace-nowrap flex items-center justify-center"
          id="header-cta"
        >
          Call Now
        </a>
      </div>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-outline-variant p-6 flex flex-col gap-4 shadow-xl md:hidden z-[60] max-h-[85vh] overflow-y-auto">
          <a 
            className="text-secondary font-bold text-sm uppercase cursor-pointer" 
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            Home
          </a>
          
          {/* Mobile Accordion */}
          <div>
            <button 
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex justify-between items-center text-on-surface-variant font-semibold text-sm uppercase hover:text-black cursor-pointer py-1"
            >
              <span>Services</span>
              <ChevronDown size={16} className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`mt-2 ml-4 pl-3 border-l border-slate-200 flex flex-col gap-3 overflow-hidden transition-all duration-300 ${
              mobileServicesOpen ? 'max-h-96 opacity-100 py-1' : 'max-h-0 opacity-0'
            }`}>
              <a 
                href="/water-damage-restoration-savannah-ga"
                onClick={(e) => handleServicePageClick(e, '/water-damage-restoration-savannah-ga')}
                className="text-xs font-bold text-slate-800 hover:text-secondary"
              >
                Water Damage Restoration
              </a>
              <a 
                href="/water-extraction-savannah-ga"
                onClick={(e) => handleServicePageClick(e, '/water-extraction-savannah-ga')}
                className="text-xs font-bold text-slate-800 hover:text-secondary"
              >
                Water Extraction
              </a>
              <a 
                href="/mold-remediation-savannah-ga"
                onClick={(e) => handleServicePageClick(e, '/mold-remediation-savannah-ga')}
                className="text-xs font-bold text-slate-800 hover:text-secondary"
              >
                Mold Remediation
              </a>
              <a 
                href="/flood-damage-restoration-savannah-ga"
                onClick={(e) => handleServicePageClick(e, '/flood-damage-restoration-savannah-ga')}
                className="text-xs font-bold text-slate-800 hover:text-secondary"
              >
                Flood Damage Restoration
              </a>
              <a 
                href="/emergency-water-damage-savannah-ga"
                onClick={(e) => handleServicePageClick(e, '/emergency-water-damage-savannah-ga')}
                className="text-xs font-bold text-slate-800 hover:text-secondary"
              >
                Emergency Water Damage
              </a>
              <a 
                href="#services"
                onClick={(e) => handleNavClick(e, 'services')}
                className="text-xs font-bold text-secondary uppercase hover:underline"
              >
                • View Grid Overview
              </a>
            </div>
          </div>

          <a 
            className="text-on-surface-variant font-semibold text-sm uppercase hover:text-black cursor-pointer" 
            href="/blog"
            onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('/blog'); setMobileMenuOpen(false); }}
          >
            Blog
          </a>
          <a 
            className="text-on-surface-variant font-semibold text-sm uppercase hover:text-black cursor-pointer" 
            href="#reviews"
            onClick={(e) => handleNavClick(e, 'reviews')}
          >
            Reviews
          </a>
          <a 
            className="text-on-surface-variant font-semibold text-sm uppercase hover:text-black cursor-pointer" 
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Contact
          </a>
          <div className="h-px bg-gray-100 my-2" />
          <div className="flex flex-col gap-2">
            <a 
              href="tel:8438004261"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 p-3.5 bg-secondary text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-md cursor-pointer text-center"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
