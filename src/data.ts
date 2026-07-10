import { Service, ServiceCategory, Review, GalleryItem, SpecialOffer } from './types';

export const HERO_IMAGE = '/src/assets/images/hero_spa_interior_1783672002210.jpg';
export const HAIR_IMAGE = '/src/assets/images/hair_styling_luxury_1783672020121.jpg';
export const SPA_IMAGE = '/src/assets/images/spa_massage_luxury_1783672033910.jpg';
export const NAILS_IMAGE = '/src/assets/images/nails_manicure_luxury_1783672045455.jpg';
export const FACIAL_IMAGE = '/src/assets/images/skincare_facial_luxury_1783672059697.jpg';

// High-quality public CDN placeholders for supplementary gallery & section images
export const ABOUT_SIDE_IMAGE = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1000';
export const HAMMAM_IMAGE = 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=1000';
export const BRIDAL_IMAGE = 'https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&q=80&w=1000';
export const INTERIOR_IMAGE = 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=1000';

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'hair',
    title: 'Hair Atelier',
    description: 'Expert styling, coloring, and transformative keratin care with world-renowned specialists.',
    image: HAIR_IMAGE,
  },
  {
    id: 'spa',
    title: 'The Spa & Hammam',
    description: 'A sanctuary of peace featuring authentic Moroccan Hammam, massage therapy, and body rituals.',
    image: SPA_IMAGE,
  },
  {
    id: 'skincare',
    title: 'Advanced Skincare',
    description: 'Clinical-grade facials, skin rejuvenation, and bespoke treatments to restore natural radiance.',
    image: FACIAL_IMAGE,
  },
  {
    id: 'nails',
    title: 'Nail Lounge',
    description: 'Premium manicure, pedicure, and luxury custom nail art using organic, nourishing formulas.',
    image: NAILS_IMAGE,
  },
  {
    id: 'vip',
    title: 'VIP & Bridal',
    description: 'Exquisite tailored wedding programs and all-inclusive luxury pampering packages.',
    image: BRIDAL_IMAGE,
  },
];

export const SERVICES: Service[] = [
  // Hair
  {
    id: 'hair-1',
    name: 'Couture Hair Styling & Blowout',
    description: 'Signature wash, relaxing head massage, and personalized premium blowout or styling.',
    price: 'By Consultation',
    duration: '60 min',
    category: 'hair',
  },
  {
    id: 'hair-2',
    name: 'Master Hair Coloring & Balayage',
    description: 'Bespoke hand-painted balayage, full highlights, or premium base tint using luxury, damage-free Parisian pigments.',
    price: 'By Consultation',
    duration: '180 min',
    category: 'hair',
  },
  {
    id: 'hair-3',
    name: 'Advanced Keratin Infusion Treatment',
    description: 'Premium thermal sealing treatment to eliminate frizz, restore deep moisture, and provide mirror-like shine.',
    price: 'By Consultation',
    duration: '150 min',
    category: 'hair',
  },
  {
    id: 'hair-4',
    name: 'Signature Protein & Deep Repair Ritual',
    description: 'Molecular bond-building treatment to revitalize heavily processed or weak hair.',
    price: 'By Consultation',
    duration: '75 min',
    category: 'hair',
  },
  {
    id: 'hair-5',
    name: 'Seamless Luxury Hair Extensions',
    description: 'Ultra-flat premium micro-ring or tape-in extensions for natural-looking length and luxurious volume.',
    price: 'By Consultation',
    duration: '120+ min',
    category: 'hair',
  },

  // Spa
  {
    id: 'spa-1',
    name: 'Royal Moroccan Hammam Experience',
    description: 'Authentic steam bath, black eucalyptus soap cleansing, deep kessa glove exfoliation, and luxury rose water infusion.',
    price: 'Upon Request',
    duration: '90 min',
    category: 'spa',
  },
  {
    id: 'spa-2',
    name: 'Bespoke Hot Stone Healing Massage',
    description: 'Full-body relaxation massage using volcanic basalt stones and rich premium sandalwood oils.',
    price: 'Upon Request',
    duration: '75 min',
    category: 'spa',
  },
  {
    id: 'spa-3',
    name: 'Revitalizing Sea Salt Body Scrub',
    description: 'Exquisite mineral-rich body scrub paired with a botanical oil wrap to hydrate and polish the skin.',
    price: 'Upon Request',
    duration: '50 min',
    category: 'spa',
  },
  {
    id: 'spa-4',
    name: 'Stress Relief Massage & Aromatherapy',
    description: 'Deep pressure point therapy to release tension, coupled with custom essential oils for mind-body balance.',
    price: 'Upon Request',
    duration: '60 min',
    category: 'spa',
  },

  // Skincare
  {
    id: 'skin-1',
    name: 'Advanced HydraFacial MD® Elite',
    description: 'Patented 4-step treatment to cleanse, exfoliate, extract impurities, and infuse rich antioxidants.',
    price: 'Upon Request',
    duration: '60 min',
    category: 'skincare',
  },
  {
    id: 'skin-2',
    name: 'Cellular Skin Rejuvenation Therapy',
    description: 'Anti-aging facial utilizing LED therapy, gold-infused serums, and collagen masks for instant contour lifting.',
    price: 'Upon Request',
    duration: '75 min',
    category: 'skincare',
  },
  {
    id: 'skin-3',
    name: 'Premium Lash Lift & Eyebrow Shaping',
    description: 'Bespoke brow mapping, precision threading/waxing, and keratin lash lifting for bright, open eyes.',
    price: 'By Consultation',
    duration: '45 min',
    category: 'skincare',
  },
  {
    id: 'skin-4',
    name: 'Luxury Silk Body Waxing',
    description: 'Ultra-gentle professional hair removal using skin-soothing premium chamomile waxes.',
    price: 'Upon Request',
    duration: '30+ min',
    category: 'skincare',
  },

  // Nails
  {
    id: 'nail-1',
    name: 'VIP Caviar Manicure & Pedicure',
    description: 'Exquisite herbal foot soak, cuticle refinement, mineral salt scrub, warm oil massage, and premium organic lacquer.',
    price: 'Upon Request',
    duration: '90 min',
    category: 'nails',
  },
  {
    id: 'nail-2',
    name: 'Luxury Gel Extensions & Structured Overlay',
    description: 'Sculpted gel extensions or high-strength structured overlay for long-lasting perfection.',
    price: 'By Consultation',
    duration: '100 min',
    category: 'nails',
  },
  {
    id: 'nail-3',
    name: 'Bespoke Luxury Nail Art',
    description: 'Hand-painted custom designs, gold leaf application, or Swarovski crystal embellishments.',
    price: 'By Consultation',
    duration: '30+ min',
    category: 'nails',
  },

  // VIP & Bridal
  {
    id: 'vip-1',
    name: 'The Royal Bridal Glow Package',
    description: 'Complete trial hair and makeup, ultimate wedding-day hair, luxurious makeup with high-end brands (Chanel, Dior), Royal Hammam, and VIP Manicure.',
    price: 'By Consultation',
    duration: '2 Days',
    category: 'vip',
  },
  {
    id: 'vip-2',
    name: 'Imperial Spa Day for Couples / Friends',
    description: 'Private suite access, luxury massages, body scrubs, organic refreshments, and signature blowouts.',
    price: 'By Consultation',
    duration: '180 min',
    category: 'vip',
  },
  {
    id: 'vip-3',
    name: 'Haute Couture Makeup & Styling',
    description: 'Premium photographic, red carpet, or high-glamour evening makeup coupled with an exquisite updo.',
    price: 'By Consultation',
    duration: '120 min',
    category: 'vip',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Fatima Al-Thani',
    role: 'Loyal Client',
    rating: 5,
    comment: 'No words can truly describe how amazing the hairstyling was. The results exceeded all my expectations. The balayage has this absolute luxury, seamless blend, and the hair still feels incredibly soft and healthy!',
    date: '2026-06-15',
  },
  {
    id: 'rev-2',
    name: 'Amara Sterling',
    role: 'Wellness Enthusiast',
    rating: 5,
    comment: 'One of the best beauty salons in Doha. Friendly staff, immaculate environment, and an incredible spa manicure and pedicure experience. The Royal Moroccan Hammam is a life-changing, serene experience!',
    date: '2026-06-28',
  },
  {
    id: 'rev-3',
    name: 'Noora Al-Kuwari',
    role: 'Bridal Guest',
    rating: 5,
    comment: 'Professional team, relaxing atmosphere, and exceptional service from start to finish. I booked the Royal Bridal Glow Package and felt like a true princess. The makeup was flawless under photography lighting.',
    date: '2026-07-04',
  },
  {
    id: 'rev-4',
    name: 'Elena Rostova',
    role: 'Regular Patron',
    rating: 5,
    comment: 'The HydraFacial MD treatment is outstanding. My skin is literally glowing! The therapist explained every step and curated the serum cocktail perfectly for my skin. Highly recommended.',
    date: '2026-07-08',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'gal-1', title: 'Signature Golden Balayage', category: 'hair', image: HAIR_IMAGE },
  { id: 'gal-2', title: 'Tranquil Massage Oasis', category: 'spa', image: SPA_IMAGE },
  { id: 'gal-3', title: 'Luxury Hammam Steaming Bath', category: 'spa', image: HAMMAM_IMAGE },
  { id: 'gal-4', title: 'Flawless HydraFacial Treatment', category: 'facials', image: FACIAL_IMAGE },
  { id: 'gal-5', title: 'Sophisticated Rose Gold Nail Art', category: 'nails', image: NAILS_IMAGE },
  { id: 'gal-6', title: 'Elegant Five-Star Interior', category: 'interior', image: HERO_IMAGE },
  { id: 'gal-7', title: 'Bridal Couture Makeup', category: 'bridal', image: BRIDAL_IMAGE },
  { id: 'gal-8', title: 'Premium Styling Atelier', category: 'interior', image: INTERIOR_IMAGE },
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'off-1',
    title: 'The Ultimate Golden Spa Ritual',
    description: 'Experience our signature Royal Moroccan Hammam combined with a 60-minute relaxing Aromatherapy massage and organic refreshments.',
    originalPrice: '1,400 QAR',
    offerPrice: '950 QAR',
    badge: 'Best Seller',
    expiryDate: '2026-08-15',
  },
  {
    id: 'off-2',
    title: 'Summer Radiant Color Package',
    description: 'A bespoke Full Balayage or Highlights, including premium gloss toner, deep conditioning treatment, and a signature Hollywood blowout.',
    originalPrice: '1,850 QAR',
    offerPrice: '1,290 QAR',
    badge: 'Limited Time',
    expiryDate: '2026-07-31',
  },
  {
    id: 'off-3',
    title: 'Luxury Caviar Mani-Pedi Duo',
    description: 'Indulge in our exquisite Caviar manicure & pedicure, featuring herbal hot stone massage and customized organic gel overlays.',
    originalPrice: '530 QAR',
    offerPrice: '350 QAR',
    badge: 'Popular',
    expiryDate: '2026-08-05',
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: 'Premium Beauty Experts',
    description: 'Our team comprises elite, globally trained specialists who master high-fashion aesthetics and meticulous detailing.',
  },
  {
    title: 'Luxury Spa Experience',
    description: 'Step into a world curated with Five-Star hotel spa finishes, tranquil scent-scapes, and soundproofing for absolute peace.',
  },
  {
    title: 'Professional Hair Stylists',
    description: 'Expert hair colorists who prioritize hair integrity and design custom formulas that match your personal beauty profile.',
  },
  {
    title: 'Advanced Beauty Treatments',
    description: 'We offer state-of-the-art treatments like genuine HydraFacial MD® and premium damage-free botanical formulations.',
  },
  {
    title: 'Premium Brands & Products',
    description: 'We partner exclusively with luxury beauty brands, ensuring clinical efficacy and sensory perfection in every drop.',
  },
  {
    title: 'Outstanding Hygiene Standards',
    description: 'Your health and safety are paramount. We practice strict medical-grade sanitation and autoclaving for all instruments.',
  },
];

export const CONTACT_INFO = {
  businessName: 'MAYA BEAUTY CENTER & SPA',
  phone: '+974 7135 4567',
  phoneDisplay: '+974 7135 4567',
  whatsapp: '+97471354567',
  email: 'appointments@mayabeautyspa.qa',
  address: '232 Ahmed Bin Ali Street',
  city: 'Doha',
  country: 'Qatar',
  mapCoordinates: 'https://maps.google.com/?q=232+Ahmed+Bin+Ali+Street+Doha+Qatar',
  workingHours: [
    { day: 'Friday', hours: '10:00 AM – 10:00 PM' },
    { day: 'Saturday', hours: '10:00 AM – 10:00 PM' },
    { day: 'Sunday', hours: '10:00 AM – 10:00 PM' },
    { day: 'Monday', hours: '10:00 AM – 10:00 PM' },
    { day: 'Tuesday', hours: '10:00 AM – 10:00 PM' },
    { day: 'Wednesday', hours: '10:00 AM – 10:00 PM' },
    { day: 'Thursday', hours: '10:00 AM – 10:00 PM' },
  ]
};
