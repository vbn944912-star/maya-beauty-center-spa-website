import { CONTACT_INFO } from '../data';
import { Phone, MapPin, Mail, Instagram, Facebook, Compass } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

interface FooterProps {
  onBookClick: () => void;
}

export default function Footer({ onBookClick }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { t, locale, isRtl } = useTranslation();

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer id="luxury-footer" className="bg-charcoal text-white pt-20 pb-10 border-t border-luxury-gold/15 relative overflow-hidden">
      {/* Subtle vector line details or lighting bloom */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-radial from-luxury-gold/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
        
        {/* Column 1: Brand description (4 cols) */}
        <div className={`lg:col-span-4 space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-[0.25em] text-white font-medium">MAYA</span>
            <span className="text-[10px] tracking-[0.35em] text-luxury-gold uppercase font-light">
              {locale === 'ar' ? 'مركز للتجميل والسبا' : 'Beauty Center & Spa'}
            </span>
          </div>
          <p className="text-soft-cream/65 text-xs leading-relaxed max-w-sm tracking-wide">
            {t('footer.tagline')}
          </p>
          
          {/* Social icons */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 hover:border-luxury-gold hover:text-luxury-gold flex items-center justify-center transition-colors duration-300 cursor-pointer"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 hover:border-luxury-gold hover:text-luxury-gold flex items-center justify-center transition-colors duration-300 cursor-pointer"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 hover:border-luxury-gold hover:text-luxury-gold flex items-center justify-center transition-colors duration-300 cursor-pointer"
              aria-label="WhatsApp"
            >
              <Compass size={16} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links (2 cols) */}
        <div className={`lg:col-span-2 space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
          <h4 className="font-serif text-sm text-luxury-gold uppercase tracking-widest font-normal">
            {t('footer.links')}
          </h4>
          <ul className="space-y-3.5 text-xs tracking-wider uppercase text-soft-cream/70">
            <li>
              <a
                href="#home"
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-luxury-gold transition-colors duration-200 cursor-pointer"
              >
                {t('nav.home')}
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); handleLinkClick('#about'); }}
                className="hover:text-luxury-gold transition-colors duration-200 cursor-pointer"
              >
                {t('nav.about')}
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); handleLinkClick('#services'); }}
                className="hover:text-luxury-gold transition-colors duration-200 cursor-pointer"
              >
                {t('nav.services')}
              </a>
            </li>
            <li>
              <a
                href="#spa-experience"
                onClick={(e) => { e.preventDefault(); handleLinkClick('#spa-experience'); }}
                className="hover:text-luxury-gold transition-colors duration-200 cursor-pointer"
              >
                {t('nav.spa')}
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                onClick={(e) => { e.preventDefault(); handleLinkClick('#gallery'); }}
                className="hover:text-luxury-gold transition-colors duration-200 cursor-pointer"
              >
                {t('nav.gallery')}
              </a>
            </li>
            <li>
              <a
                href="#reviews"
                onClick={(e) => { e.preventDefault(); handleLinkClick('#reviews'); }}
                className="hover:text-luxury-gold transition-colors duration-200 cursor-pointer"
              >
                {t('nav.reviews')}
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Treatments Menu (3 cols) */}
        <div className={`lg:col-span-3 space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
          <h4 className="font-serif text-sm text-luxury-gold uppercase tracking-widest font-normal">
            {locale === 'ar' ? 'قائمة الجمال والعلاج' : 'Treatments Menu'}
          </h4>
          <ul className="space-y-3.5 text-xs text-soft-cream/70 tracking-wide font-medium">
            <li className="hover:text-luxury-gold transition-colors duration-250">
              {locale === 'ar' ? 'تسريح وتصفيف الشعر (كوتور)' : 'Couture Blowouts & Hair styling'}
            </li>
            <li className="hover:text-luxury-gold transition-colors duration-250">
              {locale === 'ar' ? 'بلاياج فرنسي وتلوين شعر احترافي' : 'Master Balayage & French Colors'}
            </li>
            <li className="hover:text-luxury-gold transition-colors duration-250">
              {locale === 'ar' ? 'علاجات الكيراتين الفاخرة المتقدمة' : 'Advanced Keratin Infusions'}
            </li>
            <li className="hover:text-luxury-gold transition-colors duration-250">
              {locale === 'ar' ? 'جلسات الحمام المغربي الملكية' : 'Royal Moroccan Hammams'}
            </li>
            <li className="hover:text-luxury-gold transition-colors duration-250">
              {locale === 'ar' ? 'تدليك استشفائي بالأحجار الساخنة' : 'Authentic Hot Stone Massage'}
            </li>
            <li className="hover:text-luxury-gold transition-colors duration-250">
              {locale === 'ar' ? 'علاجات البشرة هيدرافيشال إم دي' : 'HydraFacial MD® Skincare'}
            </li>
            <li className="hover:text-luxury-gold transition-colors duration-250">
              {locale === 'ar' ? 'صالون ورسم الأظافر لكبار الشخصيات' : 'VIP Mani-Pedi Nail Lounge'}
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Schedule (3 cols) */}
        <div className={`lg:col-span-3 space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
          <h4 className="font-serif text-sm text-luxury-gold uppercase tracking-widest font-normal">
            {locale === 'ar' ? 'الأتيليه والمركز' : 'The Atelier'}
          </h4>
          
          <div className="space-y-4 text-xs text-soft-cream/75 leading-relaxed tracking-wide">
            {/* Phone */}
            <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
              <Phone size={13} className="text-luxury-gold shrink-0" />
              <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-luxury-gold font-bold transition-colors">
                {CONTACT_INFO.phoneDisplay}
              </a>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-2.5 rtl:space-x-reverse">
              <MapPin size={13} className="text-luxury-gold shrink-0 mt-0.5" />
              <span>
                {t('contact.address.val')}
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
              <Mail size={13} className="text-luxury-gold shrink-0" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-luxury-gold transition-colors">
                {CONTACT_INFO.email}
              </a>
            </div>

            {/* Timings */}
            <div className="pt-2 border-t border-white/5 space-y-1">
              <span className="text-[10px] uppercase text-luxury-gold tracking-widest block font-bold">
                {locale === 'ar' ? 'مفتوح يومياً' : 'Open Daily'}
              </span>
              <p className="font-semibold text-white">
                {locale === 'ar' ? '١٠:٠٠ صباحاً – ١٠:٠٠ مساءً' : '10:00 AM – 10:00 PM'}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom copyrights, privacy policies, and credits */}
      <div className={`max-w-7xl mx-auto px-6 lg:px-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-[11px] text-white/40 tracking-wider ${
        isRtl ? 'sm:flex-row-reverse' : ''
      }`}>
        <p className="font-medium text-center">
          {locale === 'ar' 
            ? `© ${currentYear} مركز مايا للتجميل والسبا. جميع الحقوق محفوظة.` 
            : `© ${currentYear} MAYA BEAUTY CENTER & SPA. All rights reserved.`}
        </p>
        
        <div className="flex space-x-6 rtl:space-x-reverse">
          <a href="#privacy" className="hover:text-luxury-gold transition-colors cursor-pointer">
            {locale === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
          </a>
          <span>&bull;</span>
          <a href="#terms" className="hover:text-luxury-gold transition-colors cursor-pointer">
            {locale === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}
          </a>
        </div>
      </div>
    </footer>
  );
}
