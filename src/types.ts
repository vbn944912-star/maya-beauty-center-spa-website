export interface Service {
  id: string;
  name: string;
  description: string;
  price?: string; // Optional price to match high-end pricing structure
  duration?: string;
  category: 'hair' | 'spa' | 'skincare' | 'nails' | 'vip';
}

export interface ServiceCategory {
  id: 'hair' | 'spa' | 'skincare' | 'nails' | 'vip';
  title: string;
  description: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  role?: string;
  rating: number;
  comment: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'spa' | 'facials' | 'nails' | 'interior' | 'bridal';
  image: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  description: string;
  originalPrice: string;
  offerPrice: string;
  badge: string;
  expiryDate?: string;
}

export interface BookingFormInput {
  fullName: string;
  phoneNumber: string;
  email: string;
  preferredService: string;
  preferredDate: string;
  preferredTime: string;
  specialRequests: string;
}
