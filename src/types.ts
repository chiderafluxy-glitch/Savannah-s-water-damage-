export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  iconName: 'Droplets' | 'Waves' | 'ShieldAlert' | 'Wind' | 'Flame' | 'AlertTriangle';
  averageCostSqFt?: number; // Removed cost calculator, so made optional
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface ServiceAreaLocation {
  name: string;
  zipCode: string;
  estimatedTimeMin: number;
}

export interface DispatchUnit {
  id: string;
  name: string;
  unitNumber: string;
  status: 'idle' | 'searching' | 'assigned' | 'transit' | 'on_site';
  etaMin: number;
  phone: string;
}

