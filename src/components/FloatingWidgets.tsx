import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ArrowUp, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { useTranslation } from '../context/LanguageContext';

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { locale, isRtl } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div id="floating-widgets" className={`fixed bottom-6 z-40 flex flex-col items-center space-y-4 ${
      isRtl ? 'left-6' : 'right-6'
    }`}>
      {/* Floating WhatsApp Chat Button with pulse rings */}
      <motion.a
        href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hello%20Maya%20Spa,%20I'd%2520like%20to%20book%20a%20luxury%20appointment.`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:bg-[#20ba5a] transition-all duration-300 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        {/* Glowing pulse ripples */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping animate-duration-1000" />
        
        <MessageCircle size={24} className="relative z-10 shrink-0 fill-current" />
        
        {/* Tooltip on hover */}
        <span className={`absolute bg-charcoal text-white text-[10px] uppercase tracking-widest px-3 py-1.5 border border-luxury-gold/20 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap ${
          isRtl ? 'left-16' : 'right-16'
        }`}>
          {locale === 'ar' ? 'كونسيرج الواتساب الفاخر' : 'WhatsApp Concierge'}
        </span>
      </motion.a>

      {/* Floating Call Button with gold pulse rings */}
      <motion.a
        href={`tel:${CONTACT_INFO.phone}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        className="relative group w-14 h-14 rounded-full bg-luxury-gold text-white flex items-center justify-center shadow-2xl hover:bg-luxury-gold-dark transition-all duration-300 cursor-pointer"
        aria-label="Call Maya Salon"
      >
        <span className="absolute inset-0 rounded-full bg-luxury-gold/30 animate-pulse" />
        <Phone size={20} className="relative z-10 shrink-0" />
        
        {/* Tooltip on hover */}
        <span className={`absolute bg-charcoal text-white text-[10px] uppercase tracking-widest px-3 py-1.5 border border-luxury-gold/20 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap ${
          isRtl ? 'left-16' : 'right-16'
        }`}>
          {locale === 'ar' ? 'خط الحجوزات الساخن' : 'Call Booking Hotline'}
        </span>
      </motion.a>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white border border-luxury-gold/20 text-charcoal flex items-center justify-center shadow-lg hover:border-luxury-gold hover:text-luxury-gold transition-all duration-300 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
